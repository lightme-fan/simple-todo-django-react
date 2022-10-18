from django.contrib import admin

# Register your models here.
from .models import Todo

class TodoAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'isDone')

# Register your models here.

admin.site.register(Todo, TodoAdmin)