from django.db import models
from django.conf import settings
from amenities.models import Amenity

class Hostel(models.Model):
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='hostels')
    name = models.CharField(max_length=255)
    address = models.TextField()
    city = models.CharField(max_length=100)
    latitude = models.DecimalField(max_digits=9, decimal_places=6)
    longitude = models.DecimalField(max_digits=9, decimal_places=6)
    description = models.TextField(blank=True)
    rules = models.TextField(blank=True)
    amenities = models.ManyToManyField(Amenity, blank=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Room(models.Model):
    ROOM_TYPE = (
        ('single', 'Single'),
        ('double', 'Double'),
        ('shared', 'Shared'),
    )
    hostel = models.ForeignKey(Hostel, on_delete=models.CASCADE, related_name='rooms')
    room_type = models.CharField(max_length=10, choices=ROOM_TYPE)
    rent = models.DecimalField(max_digits=10, decimal_places=2)
    capacity = models.IntegerField(default=1)
    vacant_beds = models.IntegerField(default=0)
    
    def __str__(self):
        return f"{self.hostel.name} - {self.room_type}"

class HostelImage(models.Model):
    hostel = models.ForeignKey(Hostel, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='hostel_images/')
