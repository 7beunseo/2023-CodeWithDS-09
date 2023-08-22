from django.db import models

# Create your models here.
class User(models.Model):
    email = models.EmailField(verbose_name='이메일', unique=True)
    name = models.CharField(verbose_name='이름', max_length=10, null=False)
    phone = models.CharField(verbose_name='연락처', max_length=11, null=True, blank=True)

    class Meta:
        verbose_name = '유저'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.email
