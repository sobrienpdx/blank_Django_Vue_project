from django.shortcuts import render
from django.http import HttpResponse


def test(request):
	return HttpResponse('ok')

def index(request):
	return render(request, 'project_for_interview/index.html')
	# return HttpResponse('ok')
