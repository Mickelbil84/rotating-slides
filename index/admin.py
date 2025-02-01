from django.contrib import admin
from tinymce.widgets import TinyMCE
from django.db import models

from .models import Slide

# Register your models here.

class SlideAdmin(admin.ModelAdmin):
    formfield_overrides = {
        models.TextField: {'widget': TinyMCE()},
    }

admin.site.register(Slide, SlideAdmin)