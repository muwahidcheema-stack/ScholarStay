from django.db import models

class Amenity(models.Model):
    name = models.CharField(max_length=100, unique=True)
    icon = models.CharField(max_length=50, blank=True, null=True, help_text="FontAwesome icon class")
    
    class Meta:
        verbose_name_plural = "Amenities"

    def __str__(self):
        return self.name
