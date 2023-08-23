"""
URL configuration for wellduk project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('raon/',include('raons.urls')),
    path('free-communication/',include('freecommunication.urls')),
<<<<<<< HEAD
    path('gather/',include('gather.urls')),
=======
    path('hand-over/',include('freecommunication.urls')),
    
>>>>>>> 8e584b4d5fb18aef745d81eecccb90566e06a3ce
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
