# Company API Documentation

This document outlines the available company management endpoints.

## Base URL
All endpoints are prefixed with `/api/company`

## Authentication
- All endpoints require authentication
- Include JWT token in the `Authorization` header
- Format: `Authorization: Bearer <token>`

## Endpoints

### 1. Create Company
Create a new company for the authenticated user.

**URL**: `POST /api/company`

**Request Headers**:
```
Authorization: Bearer <token>
Content-Type: application/json
```

**Request Body**:
```json
{
  "name": "Acme Inc.",
  "contact_email": "contact@acme.com",
  "website": "https://acme.com",
  "address": "123 Business St, Metro City",
  "logo": "data:image/png;base64,...",
  "bio": "Leading provider of innovative solutions",
  "industry": "Technology",
  "size": "101-500",
  "color": "#3b82f6",
  "collab_type": "Technology Partner"
}
```

**Required Fields**:
- `name`: Company name
- `contact_email`: Contact email address

**Optional Fields**:
- `website`: Company website URL (e.g., https://company.com)
- `address`: Company address
- `logo`: Base64 encoded image string
- `bio`: Company description
- `industry`: Company's industry sector (string)
- `size`: Company size range (string, e.g., '1-10', '11-50', '51-200', '201-500', '501-1000', '1000+')
- `color`: Company color in hex format (string, e.g., '#3b82f6')

**Response (Success - 201)**:
```json
{
  "message": "Company created successfully",
  "company": {
    "id": 1,
    "name": "Acme Inc.",
    "contact_email": "contact@acme.com",
    "website": "https://acme.com",
    "address": "123 Business St, Metro City",
    "logo": "data:image/png;base64,...",
    "bio": "Leading provider of innovative solutions",
    "industry": "Technology",
    "size": 150,
    "created_at": "2023-08-09T08:00:00Z",
    "user_role": "user",
    "user_id": 42
  }
}
```

**Response (Error - 400)**:
```json
{
  "error": "User already has a company"
}
```

---

### 2. Get Company
Get the authenticated user's company details.

**URL**: `GET /api/company`

**Request Headers**:
```
Authorization: Bearer <token>
```

**Response (Success - 200)**:
```json
{
  "id": 1,
  "name": "Acme Inc.",
  "contact_email": "contact@acme.com",
  "address": "123 Business St, Metro City",
  "logo": "data:image/png;base64,...",
  "bio": "Leading provider of innovative solutions",
  "industry": "Technology",
  "size": "101-500",
  "created_at": "2023-08-09T08:00:00Z",
  "user_id": 42
}
```

**Response (Error - 404)**:
```json
{
  "error": "Company not found"
}
```

---

### 3. Update Company
Update the authenticated user's company details.

**URL**: `PUT /api/company`

**Request Headers**:
```
Authorization: Bearer <token>
Content-Type: application/json
```

**Request Body**:
```json
{
  "name": "Acme Corporation",
  "bio": "Global leader in innovative solutions"
}
```

**All fields are optional**:
- `name`
- `contact_email`
- `address`
- `logo`
- `bio`
- `industry`
- `size`

**Response (Success - 200)**:
```json
{
  "message": "Company updated successfully",
  "company": {
    "id": 1,
    "name": "Acme Corporation",
    "contact_email": "contact@acme.com",
    "address": "123 Business St, Metro City",
    "logo": "data:image/png;base64,...",
    "bio": "Global leader in innovative solutions",
    "industry": "Finance",
    "size": 200,
    "created_at": "2023-08-09T08:00:00Z",
    "user": {
      "first_name": "John",
      "last_name": "Doe",
      "position": "Software Developer",
      "role": "user"
    },
    "user_id": 42
  }
}
```

---

### 4. Delete Company
Delete the authenticated user's company.

**URL**: `DELETE /api/company`

**Request Headers**:
```
Authorization: Bearer <token>
```

**Response (Success - 200)**:
```json
{
  "message": "Company deleted successfully"
}
```

**Response (Error - 404)**:
```json
{
  "error": "Company not found"
}
```