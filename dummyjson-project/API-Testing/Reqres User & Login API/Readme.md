# API Testing – DummyJSON
This section contains REST API testing scenarios executed using Postman.
##🔹 Endpoints Covered
- GET /users – validate response structure and data consistency
- POST /auth/login
- Positive scenario (valid credentials)
- Negative scenario (invalid credentials)
## 🔹 Validations Implemented
- Status code verification (200, 400)
- Response time validation (< 1000ms)
- JSON structure validation
- Required fields verification
- Token validation (accessToken presence)
##🔹 Tools Used
- Postman
- JavaScript assertions (pm.test, pm.expect)
