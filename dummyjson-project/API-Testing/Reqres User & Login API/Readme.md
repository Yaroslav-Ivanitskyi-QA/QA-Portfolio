# API Testing – DummyJSON

This section contains REST API testing scenarios executed using Postman against the DummyJSON public API.

## 🔹 Endpoints Covered
- GET /users – validate response structure and data consistency
- POST /auth/login – authentication testing
- POST /users/add – create new user
- PUT /users/{id} – update existing user
- DELETE /users/{id} – delete user

## 🔹 Test Scenarios
- Positive scenarios (valid credentials and valid requests)
- Negative scenarios (invalid credentials and incorrect data)
- CRUD operations validation (Create, Read, Update, Delete)

## 🔹 Validations Implemented
- HTTP status code verification (200, 201, 400)
- Response time validation (< 1000 ms)
- JSON response structure validation
- Required fields verification
- Token validation (accessToken presence)
- Data update verification in API response

## 🔹 Tools Used
- Postman
- JavaScript assertions (pm.test, pm.expect)
