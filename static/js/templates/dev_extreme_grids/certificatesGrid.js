if ($('#certificates-grid').length > 0) {
    DevExpress.localization.locale('ru');

    var certificatesGrid = $('#certificates-grid').dxDataGrid({
            dataSource: certifications,
            allowColumnReordering: false,
            allowColumnResizing: true,
            columnAutoWidth: false,
            showBorders: true,
            showRowLines: true,
            editing: {
                mode: "cell",
                allowUpdating: true
            },
            selection: {
                mode: "multiple",
                showCheckBoxesMode: 'always'
            },
            paging: {
                enabled: true,
                pageSize: 10
            },
            pager: {
                showPageSizeSelector: true,
                allowedPageSizes: [10, 20, 50, 100],
                showInfo: false
            },
            searchPanel: {
                visible: true,
                width: 240,
                placeholder: "Шукати..."
            },
            export: {
                enabled: false,
                fileName: "certificates",
                allowExportSelectedData: true,
            },
            customizeExportData: function(cols, rows) {
                let certIDs = [],
                    $clickedItem = $('.dropdown-item--clicked', '#export-type-group'),
                    exportType = $clickedItem.attr('data-type');

                if (rows.length > 0) {
                    rows.forEach((row) => {
                        certIDs.push(row.data.certificateId);
                    });

                    let element = document.createElement('a');
                    element.setAttribute('href', `${exportRoute}?exportType=${exportType}&certIDs=${certIDs.join(',')}`);
                    element.style.display = 'none';
                    document.body.appendChild(element);
                    element.click();
                    document.body.removeChild(element);
                }

                $clickedItem.removeClass('dropdown-item--clicked');
            },
            onFileSaving: function (e) {
                e.cancel = true;
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
            onCellClick: function (e) {
                switch (e.column.dataField) {
                    case 'certificateNumber':
                        window.location.replace(`/mariner/editCertification/${e.data.certificateId}`);
                        return;
                    case 'sailor':
                        window.location.replace(`/mariner/sailor/${e.data.sailorId}`);
                        return;
                    case 'ntz':
                        window.location.replace(`/mariner/trainigOrganisation/${e.data.ntz}`);
                        return;
                }

                if (e.column.dataField) {
                    window.location.replace(`/mariner/editCertification/${e.data.certificateId}`);
                }
            },
            onRowClick: function (e) {
                let component = e.component;

                function initialClick() {
                    component.clickCount = 1;
                    component.clickKey = e.key;
                    component.clickDate = new Date();
                }

                function doubleClick() {
                    console.log('second click');
                    component.clickCount = 0;
                    component.clickKey = 0;
                    component.clickDate = null;
                }

                if ((!component.clickCount) || (component.clickCount != 1) || (component.clickKey != e.key) ) {
                    initialClick();
                }
                else if (component.clickKey == e.key) {
                    if (((new Date()) - component.clickDate) <= 300)
                        doubleClick();
                    else
                        initialClick();
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
            },
            columns: [
                {
                    dataField: 'certificateId',
                    visible: false,
                    allowExporting: false
                },
                {
                    dataField: 'certificateNumber',
                    caption: '№ Сертифіката',
                    allowEditing: false,
                    allowFiltering: true,
                    visible: isNotNtz,
                },
                {
                    dataField: 'blankNumber',
                    caption: '№ Бланку',
                    allowEditing: false,
                    allowFiltering: true,
                },
                {
                    dataField: 'issueDate',
                    caption: 'Дата видачі',
                    dataType: 'date',
                    allowEditing: false,
                    format: 'dd.MM.yyyy',
                },
                {
                    dataField: 'validDate',
                    caption: 'Дійсний до',
                    dataType: 'date',
                    allowEditing: false,
                    format: 'dd.MM.yyyy',
                },
                {
                    dataField: 'certificateNumberGenerated',
                    caption: '№ сертифіката(сген.)',
                    allowEditing: false
                },
                {
                    dataField: 'specialty',
                    caption: 'Напрямок підготовки',
                    allowEditing: false,
                    allowFiltering: true,
                },
                {
                    dataField: 'sailorId',
                    visible: false,
                },
                {
                    dataField: 'sailor',
                    caption: 'Моряк',
                    allowEditing: false,
                    allowFiltering: true,
                },
                {
                    dataField: 'ntz',
                    caption: 'НТЗ',
                    allowEditing: false,
                    allowFiltering: true,
                    visible: isNotNtz,
                },
                {
                    dataField: 'status',
                    caption: 'Статус',
                    allowEditing: false,
                }
            ]
        }).dxDataGrid('instance');
}