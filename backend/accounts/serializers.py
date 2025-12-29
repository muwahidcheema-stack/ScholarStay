from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import StudentProfile, OwnerProfile

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'role')
        read_only_fields = ('id', 'role')

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    role = serializers.ChoiceField(choices=User.ROLE_CHOICES)
    phone = serializers.CharField(required=False, allow_blank=True)
    
    # Specific fields for Owner
    address = serializers.CharField(required=False, allow_blank=True)
    # Specific fields for Student
    gender = serializers.CharField(required=False, allow_blank=True)

    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'role', 'phone', 'address', 'gender')

    def create(self, validated_data):
        role = validated_data.get('role')
        phone = validated_data.pop('phone', None)
        address = validated_data.pop('address', None)
        gender = validated_data.pop('gender', None)
        
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data.get('email', ''),
            password=validated_data['password'],
            role=role
        )

        if role == 'student':
            StudentProfile.objects.create(user=user, phone=phone, gender=gender)
        elif role == 'owner':
            OwnerProfile.objects.create(user=user, phone=phone, address=address)
        
        return user
