# Department API Documentation

This document outlines the API endpoints for managing departments in the system. All endpoints require JWT authentication.

## Base URL
`/api/departments`

## Authentication
All endpoints require a valid JWT token in the `Authorization` header.
Example: `Authorization: Bearer <your_jwt_token>`

## Endpoints

### Create a Department
Creates a new department in the system.

- **URL**: `/`
- **Method**: `POST`
- **Permissions**: Requires 'admin' role
- **Request Body**:
  ```json
  {
    "name": "Department Name"
  }
  ```
- **Success Response (201 Created)**:
  ```json
  {
    "message": "Department created successfully",
    "department": {
      "id": 1,
      "name": "Department Name"
    }
  }
  ```
- **Error Responses**:
  - `403 Forbidden`: User is not an admin
  - `500 Internal Server Error`: Server error

### Get All Departments
Retrieves a list of all departments.

- **URL**: `/`
- **Method**: `GET`
- **Permissions**: Authenticated users
- **Success Response (200 OK)**:
  ```json
  {
    "departments": [
      {
        "id": 1,
        "name": "Department 1"
      },
      {
        "id": 2,
        "name": "Department 2"
      }
    ]
  }
  ```

### Get Department by ID
Retrieves a specific department by its ID.

- **URL**: `/{department_id}`
- **Method**: `GET`
- **URL Parameters**:
  - `department_id` (required): The ID of the department to retrieve
- **Permissions**: Authenticated users
- **Success Response (200 OK)**:
  ```json
  {
    "id": 1,
    "name": "Department Name"
  }
  ```
- **Error Responses**:
  - `404 Not Found`: Department not found

### Update Department
Updates an existing department.

- **URL**: `/{department_id}`
- **Method**: `PUT`
- **URL Parameters**:
  - `department_id` (required): The ID of the department to update
- **Permissions**: Requires 'admin' role
- **Request Body**:
  ```json
  {
    "name": "Updated Department Name"
  }
  ```
- **Success Response (200 OK)**:
  ```json
  {
    "message": "Department updated successfully",
    "department": {
      "id": 1,
      "name": "Updated Department Name"
    }
  }
  ```
- **Error Responses**:
  - `403 Forbidden`: User is not an admin
  - `404 Not Found`: Department not found
  - `500 Internal Server Error`: Server error

### Delete Department
Deletes a department.

- **URL**: `/{department_id}`
- **Method**: `DELETE`
- **URL Parameters**:
  - `department_id` (required): The ID of the department to delete
- **Permissions**: Requires 'admin' role
- **Success Response (200 OK)**:
  ```json
  {
    "message": "Department deleted successfully"
  }
  ```
- **Error Responses**:
  - `403 Forbidden`: User is not an admin
  - `404 Not Found`: Department not found
  - `500 Internal Server Error`: Server error