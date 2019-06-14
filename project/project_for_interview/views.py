from django.shortcuts import render
from django.http import HttpResponse


def test(request):
	return HttpResponse('ok')

def index(request):
	return HttpResponse('ok')
