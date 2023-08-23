from django.db import models
from django.conf import settings

# Create your models here.
class Post(models.Model):
    title = models.CharField('TITLE', max_length=50)
    content = models.TextField('CONTENT')
    create_dt = models.DateTimeField('CREATE DT', auto_now_add=True)
    update_dt = models.DateTimeField('UPDATE DT', auto_now=True)
    image=models.ImageField()
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,related_name='together_post_author' ,null=True)
    url=models.URLField(null=True)

    class Meta:
        ordering = ('update_dt',)

    def __str__(self):
        return self.title

