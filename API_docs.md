# Authentication API Documentation

This document outlines the available authentication endpoints and how to use them in your frontend application.

## Base URL
All endpoints are prefixed with `/api/auth`

## Endpoints

### 1. Register a New User
Creates a new user account and returns an access token.

**URL**: `POST /api/auth/register`

**Request Body**:
```json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@example.com",
  "password": "SecurePass123!",
  "position": "Software Developer"
}
```

**Response (Success - 201)**:
```json
{
  "message": "User registered successfully",
  "user": {
    "id": 1,
    "email": "john.doe@example.com",
    "first_name": "John",
    "last_name": "Doe",
    "position": "Software Developer"
  },
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Response (Error - 400)**:
```json
{
  "message": "Email already registered"
}
```

---

### 2. Login
Authenticates a user and returns an access token.

**URL**: `POST /api/auth/login`

**Request Body**:
```json
{
  "email": "john.doe@example.com",
  "password": "SecurePass123!"
}
```

**Response (Success - 200)**:
```json
{
  "message": "Login successful",
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "email": "john.doe@example.com",
    "first_name": "John",
    "last_name": "Doe",
    "position": "Software Developer",
    "is_admin": false
  }
}
```

**Response (Error - 401)**:
```json
{
  "message": "Invalid email or password"
}
```

---

### 3. Access Protected Route
Example of accessing a protected route.

**URL**: `GET /api/auth/protected`

**Headers**:
```
Authorization: Bearer your_jwt_token_here
```

**Response (Success - 200)**:
```json
{
  "message": "Protected route",
  "user": {
    "id": 1,
    "email": "john.doe@example.com",
    "first_name": "John",
    "last_name": "Doe"
  }
}
```

**Response (Error - 401)**:
```json
{
  "message": "Missing Authorization Header"
}
```

## Frontend Implementation Example

### Storing the Token
After successful login/registration, store the token:

```javascript
// After successful login/registration
localStorage.setItem('access_token', response.data.access_token);
```

### Making Authenticated Requests
Include the token in your API requests:

```javascript
const token = localStorage.getItem('access_token');

// Example using fetch
fetch('/api/auth/protected', {
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data));
```

### Handling Token Expiration
Tokens expire after 1 hour. Handle 401 errors by redirecting to login:

```javascript
fetch('/api/auth/protected', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
.then(response => {
  if (response.status === 401) {
    // Token expired or invalid
    localStorage.removeItem('access_token');
    window.location.href = '/login';
  }
  return response.json();
});
```

## Error Handling
- `400 Bad Request`: Invalid request data
- `401 Unauthorized`: Invalid or missing authentication
- `500 Internal Server Error`: Server error

## Security Notes
- Always use HTTPS in production
- Store tokens securely (avoid localStorage in production)
- Implement proper CORS on the server
- Set appropriate token expiration times
