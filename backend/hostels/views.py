from rest_framework import viewsets, permissions, filters, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from .models import Hostel, Room
from .serializers import HostelSerializer, HostelDetailSerializer, RoomSerializer

class IsOwnerOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.owner == request.user

class HostelViewSet(viewsets.ModelViewSet):
    queryset = Hostel.objects.all().order_by('-created_at')
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['city', 'amenities']
    search_fields = ['name', 'address', 'city']

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return HostelDetailSerializer
        return HostelSerializer

    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy', 'add_room']:
            return [permissions.IsAuthenticated]
        return [permissions.AllowAny]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    @action(detail=True, methods=['post'], url_path='add-room')
    def add_room(self, request, pk=None):
        hostel = self.get_object()
        if hostel.owner != request.user:
            return Response({'error': 'Not authorized'}, status=status.HTTP_403_FORBIDDEN)
        
        serializer = RoomSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(hostel=hostel)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
