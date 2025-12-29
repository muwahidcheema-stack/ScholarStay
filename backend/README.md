# ScholarStay Backend

Production-ready Django backend for ScholarStay, a hostel discovery and booking platform.

## Features
- **User Management**: Roles for Students, Hostel Owners, and Admins.
- **Hostel Management**: Owners can manage hostels, rooms, and availability.
- **Discovery**: Students can search hostels by city, amenities, and price.
- **Reviews**: Rating and review system for hostels.
- **API Documentation**: Integrated Swagger/OpenAPI.

## Getting Started

### Prerequisites
- Python 3.10+
- MySQL (Optional, SQLite enabled by default for dev)

### Installation

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   # Windows
   .\venv\Scripts\activate
   # Linux/Mac
   source venv/bin/activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   # Or manually:
   pip install django djangorestframework djangorestframework-simplejwt pymysql django-cors-headers drf-yasg django-filter pillow
   ```

4. Apply migrations:
   ```bash
   python manage.py migrate
   ```

5. Run the server:
   ```bash
   python manage.py runserver
   ```

## API Documentation
Once the server is running, visit:
- **Swagger UI**: [http://127.0.0.1:8000/swagger/](http://127.0.0.1:8000/swagger/)
- **Admin Panel**: [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/)

## Configuration
- `settings.py` is configured to use **SQLite** by default.
- To use **MySQL**, update `DATABASES` in `scholarstay/settings.py` or provide environment variables (future enhancement).
