from django.db import models

# Create your models here.
class Slide(models.Model):
    index = models.IntegerField()
    title = models.CharField(max_length=100)
    last_updated = models.CharField(max_length=100)
    content = models.TextField()

    def __str__(self):
        return self.title