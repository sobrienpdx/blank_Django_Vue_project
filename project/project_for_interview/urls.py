from django.urls import path
# from django.conf.urls import url, include
from django.contrib import admin
from . import views
from django.views.generic import TemplateView


app_name = 'project_for_interview' # for namespacing


urlpatterns = [
    path('', views.test, name='test'),
    path('', views.index, name='index'),
    path('index', TemplateView.as_view(template_name='index.html'), name='index'),
]
