# Proposal API Documentation

This document outlines the available proposal management endpoints.

## Base URL
All endpoints are prefixed with `/api/proposal`

## Authentication
- All endpoints require authentication
- Include JWT token in the `Authorization` header
- Format: `Authorization: Bearer <token>`

## Endpoints

### 1. Create Proposal
Create a new proposal for the authenticated user's company.

**URL**: `POST /api/proposal`

**Request Headers**:
```
Authorization: Bearer <token>
Content-Type: application/json
```

**Request Body**:
```json
{
  "title": "Website Redesign Project",
  "description": "Complete redesign of company website with modern UI/UX"
}
```

**Required Fields**:
- `title`: Proposal title
- `description`: Detailed description of the proposal

**Response (Success - 201)**:
```json
{
  "message": "Proposal created successfully",
  "proposal": {
    "id": 1,
    "title": "Website Redesign Project",
    "description": "Complete redesign of company website with modern UI/UX",
    "created_at": "2023-08-09T10:30:00Z"
  }
}
```

**Response (Error - 400)**:
```json
{
  "error": "Title and description are required"
}
```

---

### 2. List Proposals
Get all proposals for the authenticated user's company.

**URL**: `GET /api/proposal`

**Request Headers**:
```
Authorization: Bearer <token>
```

**Response (Success - 200)**:
```json
{
  "proposals": [
    {
      "id": 1,
      "title": "Website Redesign Project",
      "description": "Complete redesign of company website with modern UI/UX",
      "created_at": "2023-08-09T10:30:00Z"
    },
    {
      "id": 2,
      "title": "Mobile App Development",
      "description": "Development of cross-platform mobile application",
      "created_at": "2023-08-10T14:15:00Z"
    }
  ]
}
```

---

### 3. Get Proposal
Get a specific proposal by ID.

**URL**: `GET /api/proposal/<proposal_id>`

**Request Headers**:
```
Authorization: Bearer <token>
```

**URL Parameters**:
- `proposal_id` (required): The ID of the proposal to retrieve

**Response (Success - 200)**:
```json
{
  "id": 1,
  "title": "Website Redesign Project",
  "description": "Complete redesign of company website with modern UI/UX",
  "created_at": "2023-08-09T10:30:00Z"
}
```

**Response (Error - 404)**:
```json
{
  "error": "Proposal not found"
}
```

---

### 4. Update Proposal
Update a specific proposal.

**URL**: `PUT /api/proposal/<proposal_id>`

**Request Headers**:
```
Authorization: Bearer <token>
Content-Type: application/json
```

**URL Parameters**:
- `proposal_id` (required): The ID of the proposal to update

**Request Body**:
```json
{
  "title": "Updated Website Redesign",
  "description": "Complete redesign with additional e-commerce features"
}
```

**Optional Fields**:
- `title`
- `description`

**Response (Success - 200)**:
```json
{
  "message": "Proposal updated successfully",
  "proposal": {
    "id": 1,
    "title": "Updated Website Redesign",
    "description": "Complete redesign with additional e-commerce features",
    "created_at": "2023-08-09T10:30:00Z"
  }
}
```

---

### 5. Delete Proposal
Delete a specific proposal.

**URL**: `DELETE /api/proposal/<proposal_id>`

**Request Headers**:
```
Authorization: Bearer <token>
```

**URL Parameters**:
- `proposal_id` (required): The ID of the proposal to delete

**Response (Success - 200)**:
```json
{
  "message": "Proposal deleted successfully"
}
```

**Response (Error - 404)**:
```json
{
  "error": "Proposal not found"
}
```