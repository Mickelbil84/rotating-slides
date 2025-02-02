from django.shortcuts import render
from django.http import HttpResponse

from .models import Slide

# Create your views here.
def index(request):
    return render(request, 'index.html', {"slides": Slide.objects.order_by("index")})