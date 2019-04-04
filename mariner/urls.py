from django.urls import path

from . import views

urlpatterns = [
    path('', views.crm_home, name='crm_home'),
    path('profile/', views.crm_profile, name='crm_profile'),
    path('profile/edit/', views.update_profile, name='update_profile'),
    path('regulations/', views.crm_regulations, name='crm_regulations'),
    path('regulations/new/', views.new_regulation, name='new_regulation'),
    path('editRegulation/<number>/', views.crm_editRegulation, name='crm_editRegulation'),
    path('trainigOrganisations/', views.crm_trainigOrganisations, name='crm_trainigOrganisations'),
    path('trainigOrganisation/<name>/', views.crm_trainigOrganisationView, name='crm_trainigOrganisationView'),
    path('trainigOrganisations/add/', views.add_trainigOrganisation, name='add_trainigOrganisation'),
    path('editTrainigOrganisation/<name>/', views.crm_editTrainigOrganisation, name='crm_editTrainigOrganisation'),
    path('certification/', views.crm_certification, name='crm_certification'),
    path('certification/new/', views.new_certification, name='new_certification'),
    path('editCertification/<id>/', views.crm_editCertification, name='crm_editCertification'),
    path('certification/exportToRegister/<name>/', views.exportToRegister, name='exportToRegister'),
    path('certification/give/<name>/', views.giveCertificates, name='giveCertificates'),
    path('certification/exportForm/', views.crm_exportCertifsForm, name='crm_exportCertifsForm'),
    path('certification/form1/', views.crm_certForm1, name='crm_certForm1'),
    path('ajax/load-directions/', views.load_directions, name='ajax_load_directions'),
    path('ajax/load-certificates/', views.load_certifs, name='ajax_load_certifs'),
    path('ajax/check-certificate/', views.certf_fieldValid, name='ajax_check_certificate'),
    path('ajax/transliteration/', views.transliterateField, name='ajax_transliteration'),
    path('sailors/', views.crm_sailors, name='crm_sailors'),
    path('sailor/<id>/', views.crm_sailorView, name='crm_sailorView'),
    path('sailors/add/', views.add_sailor, name='add_sailor'),
    path('editSailor/<id>/', views.crm_editSailor, name='crm_editSailor'),
    path('trainigDirections/', views.crm_trainigDirections, name='crm_trainigDirections'),
    path('trainigDirection/new/', views.new_trainigDirection, name='new_trainigDirection'),
    path('editDirection/<direction_id>/', views.crm_editTrainigDirection, name='crm_editTrainigDirection'),
]
