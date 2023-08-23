from django.db import models
from django.conf import settings

# Create your models here.
class Post(models.Model):
    title = models.CharField('TITLE', max_length=50)
    content = models.TextField('CONTENT')
    create_dt = models.DateTimeField('CREATE DT', auto_now_add=True)
    update_dt = models.DateTimeField('UPDATE DT', auto_now=True)
    image=models.ImageField()
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,related_name='r_post_author' ,null=True)
    total=models.IntegerField(default=0)
    current=models.IntegerField( default=0)

    class Meta:
        ordering = ('update_dt',)

    def __str__(self):
        return self.title
    
class Apply(models.Model):
    apply=models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='togetherr', null=True)
    post=models.ForeignKey(Post, on_delete=models.CASCADE, related_name='r_post')

class Comment(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,related_name='r_comment_author' ,null=True)
    post = models.ForeignKey(Post, related_name='r_comments', on_delete=models.CASCADE)
    content = models.TextField()
    create_at = models.DateTimeField(auto_now_add=True)
