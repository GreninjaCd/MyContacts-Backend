# 📇 Contacts API

A secure backend service built with Express.js, MongoDB, and JWT authentication that allows users to manage their contact list. Features include registration, login, token-based access, and full CRUD operations on personal contacts.

---

## 🚀 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT Authentication**
- **Bcrypt Password Hashing**
- **dotenv for Environment Variables**
- **Express Async Handler**

---

## 🔐 Authentication Overview

All private routes require a valid **JWT access token** issued at login. Token expires in 15 minutes for added security.

### User APIs

| Method | Route                      | Description                   | Access   |
|--------|----------------------------|-------------------------------|----------|
| POST   | `/api/users/register`      | Register a new user           | Public   |
| POST   | `/api/users/login`         | Authenticate user & get token | Public   |
| POST   | `/api/users/current`       | Get current user details      | Private  |

---

## 📒 Contacts APIs

All operations are user-specific and protected using JWT.

| Method | Route                     | Description                            | Access   |
|--------|---------------------------|----------------------------------------|----------|
| GET    | `/api/contacts`           | Get all contacts for the logged-in user| Private  |
| POST   | `/api/contacts`           | Create a new contact                   | Private  |
| GET    | `/api/contacts/:id`       | Get a specific contact                 | Private  |
| PUT    | `/api/contacts/:id`       | Update an existing contact             | Private  |
| DELETE | `/api/contacts/:id`       | Delete a contact                       | Private  |

---

# 📇 Contacts API

> 🔗 Live: [my-contacts-backend-one.vercel.app](https://my-contacts-backend-one.vercel.app)

