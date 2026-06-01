from django.contrib import admin
from .models import (
    Morfema,
    PalavraValida,
    PalavraMorfema,
    Tentativa,
    TentativaMorfema
)

admin.site.register(Morfema)
admin.site.register(PalavraValida)
admin.site.register(PalavraMorfema)
admin.site.register(Tentativa)
admin.site.register(TentativaMorfema)