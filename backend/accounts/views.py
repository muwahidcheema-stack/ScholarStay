from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import get_user_model
from .serializers import RegisterSerializer, UserSerializer

User = get_user_model()

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = RegisterSerializer

class UserProfileView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        serializer = UserSerializer(request.user)
        data = serializer.data
        # Add profile info based on role
        if request.user.role == 'student':
            if hasattr(request.user, 'student_profile'):
                data['profile'] = {
                    'phone': request.user.student_profile.phone,
                    'gender': request.user.student_profile.gender
                }
        elif request.user.role == 'owner':
            if hasattr(request.user, 'owner_profile'):
                data['profile'] = {
                    'phone': request.user.owner_profile.phone,
                    'address': request.user.owner_profile.address,
                    'is_verified': request.user.owner_profile.is_verified
                }
        return Response(data)
