# DAZ Dementia Hub - API Documentation

## Overview
This document provides detailed information about the DAZ Dementia Hub API endpoints.

## Base URL
```
http://localhost:5000/api
```

## Authentication
Most endpoints require authentication using JWT tokens. Include the token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

## Endpoints

### Authentication

#### Register User
- **POST** `/auth/register`
- **Description:** Register a new user account
- **Body:**
  ```json
  {
    "firstName": "string",
    "lastName": "string", 
    "email": "string",
    "password": "string"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "token": "jwt-token",
    "user": {
      "id": "string",
      "email": "string",
      "firstName": "string",
      "lastName": "string"
    }
  }
  ```

#### Login User
- **POST** `/auth/login`
- **Description:** Authenticate user and get access token
- **Body:**
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "token": "jwt-token",
    "user": {
      "id": "string",
      "email": "string",
      "firstName": "string",
      "lastName": "string"
    }
  }
  ```

### Content Management

#### Get Articles
- **GET** `/content/articles`
- **Description:** Retrieve all published articles
- **Query Parameters:**
  - `category` (optional): Filter by category
  - `limit` (optional): Number of articles to return
  - `page` (optional): Page number for pagination
- **Response:**
  ```json
  {
    "success": true,
    "data": [
      {
        "id": "string",
        "title": "string",
        "content": "string",
        "author": "string",
        "category": "string",
        "publishedAt": "date"
      }
    ]
  }
  ```

#### Create Article
- **POST** `/content/articles`
- **Description:** Create a new article (Admin only)
- **Headers:** `Authorization: Bearer <token>`
- **Body:**
  ```json
  {
    "title": "string",
    "content": "string",
    "category": "string",
    "tags": ["string"]
  }
  ```

### Contact

#### Send Message
- **POST** `/contact`
- **Description:** Send a contact message
- **Body:**
  ```json
  {
    "name": "string",
    "email": "string",
    "phone": "string",
    "subject": "string",
    "message": "string"
  }
  ```

## Error Responses
All endpoints return errors in the following format:
```json
{
  "success": false,
  "error": "Error message description"
}
```

## Status Codes
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error
