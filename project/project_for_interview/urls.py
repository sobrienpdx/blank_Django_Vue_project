from django.urls import path
# from django.conf.urls import url, include
from django.contrib import admin
from . import views
from django.views.generic import TemplateView


app_name = 'project_for_interview' # for namespacing


urlpatterns = [
    # path('', views.test, name='test'),
    # path('', views.index, name='index'),
    path('', TemplateView.as_view(template_name='index.html'), name='index'),
    path('jquery_page', TemplateView.as_view(template_name='jquery_page.html'), name='jquery_page'),
    path('page2', TemplateView.as_view(template_name='tour_page_2.html'), name='tour_page2'),
    path('redirect_here', TemplateView.as_view(template_name='redirect_here.html'), name='redirect_here'),
]
