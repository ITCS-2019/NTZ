$(function() {
    if ($('#training-directions-grid').length > 0) {
        DevExpress.localization.locale('ru');

        let trainingDirectionsGrid = $('#training-directions-grid').dxDataGrid({
            dataSource: trainigDirections,
            allowColumnReordering: false,
            allowColumnResizing: true,
            columnAutoWidth: false,
            showBorders: true,
            showRowLines: true,
            paging: {
                enabled: true,
                pageSize: 10
            },
            pager: {
                showPageSizeSelector: true,
                allowedPageSizes: [10, 20, 50, 100],
                showInfo: true,
                visible: true
            },
            searchPanel: {
                visible: true,
                width: 240,
                placeholder: "Шукати..."
            },
            export: {
                enabled: false,
                fileName: "certificates",
                allowExportSelectedData: true
            },
            headerFilter: {
                visible: true
            },
            filterRow: {
                visible: true,
                applyFilter: "auto"
            },
            hoverStateEnabled: true,
            wordWrapEnabled: true,
            columnAutoWidth: true,
            onSelectionChanged: function(e) {
                let selected = (e.component._options.selection.mode === 'multiple') ? `, Вибрано: ${e.component.getSelectedRowKeys().length}` : '';

                e.component.option('pager.infoText', `Всього: ${trainigDirections.length}${selected}`);
            },
            onCellClick: function (data) {
                switch (data.column.dataField) {
                    case 'status':
                        let newStatus = (data.data.status === '0') ? '1' : '0';

                        $.ajax({
                            url: changeStatusRoute,
                            method: 'GET',
                            data: {
                                certID: data.data.id,
                                dirStatus: newStatus
                            },
                            dataType: 'json',
                            success: function (res) {
                                trainigDirections.some((direction) => {
                                    if (direction.id === data.data.id) {
                                        direction.status = newStatus;
                                        return true;
                                    }
                                });
                                trainingDirectionsGrid.refresh();
                            }
                        });
                        return;
                }
            },
            onContentReady: function(e) {
                function changePage(page) {
                    e.component.pageIndex(page);
                }

                let $customPagination = $('.custom-pagination.custom-pagination--certificates'),
                    $select = $('.custom-pagination__select', $customPagination),
                    pageCount = e.component.pageCount(),
                    currentPage = e.component.pageIndex(),
                    $firstPageBtn = $('.custom-pagination__btn--first-page', $customPagination),
                    $lastPageBtn = $('.custom-pagination__btn--last-page', $customPagination),
                    $nextPageBtn = $('.custom-pagination__btn--next', $customPagination),
                    $prevPageBtn = $('.custom-pagination__btn--prev', $customPagination),
                    $gridToolbar = (e.element.find('.dx-toolbar-items-container').length > 0)
                        ? e.element.find('.dx-datagrid-header-panel .dx-toolbar-items-container')
                        : e.element.find('.dx-datagrid-header-panel'),
                    $appendedPagination = $('.custom-pagination.custom-pagination--certificates', $gridToolbar);

                if (pageCount > 1) {
                    $select.empty();
                    for (let i = 0; i < pageCount; i++) {
                        (i === currentPage)
                            ? $select.append(`<option selected="selected" value="${i}">${i + 1}</option>>`)
                            : $select.append(`<option value="${i}">${i + 1}</option>>`);
                    }

                    $appendedPagination.remove();
                    $gridToolbar.append($customPagination);

                    if (currentPage === 0) {
                        $firstPageBtn.attr('disabled', true);
                        $prevPageBtn.attr('disabled', true);
                    }
                    else {
                        $firstPageBtn.attr('disabled', false);
                        $prevPageBtn.attr('disabled', false);
                    }

                    if ((currentPage + 1) === pageCount) {
                        $lastPageBtn.attr('disabled', true);
                        $nextPageBtn.attr('disabled', true);
                    }
                    else {
                        $lastPageBtn.attr('disabled', false);
                        $nextPageBtn.attr('disabled', false);
                    }

                    $select.on('change', function() {changePage($(this).val(), pageCount)});
                    $firstPageBtn.on('click', function() {changePage(0, pageCount)});
                    $lastPageBtn.on('click', function() {changePage(pageCount - 1)});
                    $nextPageBtn.on('click', function() {changePage(currentPage + 1)});
                    $prevPageBtn.on('click', function() {changePage(currentPage - 1)});

                    $customPagination.fadeIn('fast');
                }

                let selected = (e.component._options.selection.mode === 'multiple') ? `, Вибрано: ${e.component.getSelectedRowKeys().length}` : '';

                e.component.option('pager.infoText', `Всього: ${trainigDirections.length}${selected}`);
            },
            columns: [
                {
                    dataField: 'id',
                    visible: false
                },
                {
                    dataField: 'price_id',
                    caption: 'Код',
                    allowEditing: false,
                    allowFiltering: true,
                    sortOrder: 'asc'
                },
                {
                    dataField: 'direction_title',
                    caption: 'Напрямок підготовки',
                    allowEditing: false,
                    allowFiltering: true
                },
                {
                    dataField: 'allow_functions',
                    caption: 'Рівень функцій',
                    allowEditing: false,
                    allowFiltering: true
                },
                {
                    dataField: 'level',
                    caption: 'Рівень кваліфікації',
                    allowEditing: false,
                    allowFiltering: true
                },
                {
                    dataField: 'status',
                    caption: 'Статус',
                    allowEditing: false,
                    allowFiltering: false,
                    cssClass: 'center-vertical',
                    cellTemplate: function(element, data) {
                        element.append(`<div class="text-center" style="color: green;">
                                            ${(data.value === '0') ? '&#10004;' : '&#x274C;'}
                                        </div>`);
                    }
                },
                {
                    type: "buttons",
                    width: 110,
                    visible: !isNtz,
                    cssClass: 'center-vertical',
                    buttons: [{
                        hint: 'Редагувати',
                        icon: 'edit',
                        onClick: function(e) {
                            window.location.replace(`/mariner/editDirection/${e.row.data.id}`);
                        }
                    }]
                }
            ]
        }).dxDataGrid('instance');
    }
});