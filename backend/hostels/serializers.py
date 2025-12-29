from rest_framework import serializers
from .models import Hostel, Room, HostelImage
from amenities.serializers import AmenitySerializer
from accounts.serializers import UserSerializer

class HostelImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = HostelImage
        fields = ('id', 'image')

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = '__all__'
        read_only_fields = ('hostel',)

class HostelSerializer(serializers.ModelSerializer):
    # amenities = AmenitySerializer(many=True, read_only=True)
    owner = UserSerializer(read_only=True)
    images = HostelImageSerializer(many=True, read_only=True)
    lowest_rent = serializers.SerializerMethodField()

    class Meta:
        model = Hostel
        fields = '__all__'
        read_only_fields = ('owner', 'is_active', 'created_at')

    def get_lowest_rent(self, obj):
        rooms = obj.rooms.all()
        if rooms.exists():
            return min([r.rent for r in rooms])
        return 0

class HostelDetailSerializer(HostelSerializer):
    rooms = RoomSerializer(many=True, read_only=True)
    amenities = AmenitySerializer(many=True, read_only=True)
