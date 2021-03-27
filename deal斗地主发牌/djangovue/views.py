from django.http import HttpResponse
# Create your views here.def frontend(request):
from django.shortcuts import render


def frontend(request):
    return HttpResponse(render(request, 'vue_index.html'))
