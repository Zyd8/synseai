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
  "address": "123 Business St, Metro City",
  "logo": "data:image/png;base64,...",
  "bio": "Leading provider of innovative solutions",
  "industry": "Technology",
  "size": 150
}
```

**Required Fields**:
- `name`: Company name
- `contact_email`: Contact email address

**Optional Fields**:
- `address`: Company address
- `logo`: Base64 encoded image string
- `bio`: Company description
- `industry`: Company's industry sector (string)
- `size`: Number of employees (integer)

**Response (Success - 201)**:
```json
{
  "message": "Company created successfully",
  "company": {
    "id": 1,
    "name": "Acme Inc.",
    "contact_email": "contact@acme.com",
    "address": "123 Business St, Metro City",
    "logo": "data:image/png;base64,...",
    "bio": "Leading provider of innovative solutions",
  "industry": "Technology",
  "size": 150,
    "created_at": "2023-08-09T08:00:00Z"
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
  "size": 150,
  "created_at": "2023-08-09T08:00:00Z"
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
    "created_at": "2023-08-09T08:00:00Z"
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