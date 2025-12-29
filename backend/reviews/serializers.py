from rest_framework import serializers
from .models import Review

class ReviewSerializer(serializers.ModelSerializer):
    student_name = serializers.ReadOnlyField(source='student.username')

    class Meta:
        model = Review
        fields = '__all__'
        read_only_fields = ('student', 'created_at')
