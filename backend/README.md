# DAZ Dementia Hub - Backend API

## Overview
This is the backend API for the DAZ Dementia Hub application, built with Express.js and TypeScript.

## Features
- RESTful API endpoints
- JWT authentication
- MongoDB integration
- File upload handling
- Email notifications
- Input validation
- Error handling
- Rate limiting
- Security middleware

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/forgot-password` - Password reset

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

### Content
- `GET /api/content/articles` - Get all articles
- `POST /api/content/articles` - Create new article

### Contact
- `POST /api/contact` - Send contact message

## Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- MongoDB
- npm or yarn

### Installation
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Update the `.env` file with your configuration

### Development
Start the development server:
```bash
npm run dev
```

The API will be available at `http://localhost:5000`

### Production
Build and start the production server:
```bash
npm run build
npm start
```

## Project Structure
```
backend/
├── src/
│   ├── controllers/     # Request handlers
│   ├── routes/         # API routes
│   ├── models/         # Database models
│   ├── middleware/     # Custom middleware
│   ├── services/       # Business logic
│   ├── utils/          # Helper functions
│   ├── config/         # Configuration files
│   ├── types/          # TypeScript types
│   └── index.ts        # Entry point
├── tests/              # Test files
├── uploads/            # File uploads
├── package.json        # Dependencies
├── tsconfig.json       # TypeScript config
└── .env.example        # Environment variables template
```

## Environment Variables
- `NODE_ENV` - Environment (development/production)
- `PORT` - Server port
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - JWT secret key
- `SMTP_*` - Email configuration
- `FRONTEND_URL` - Frontend application URL

## Contributing
1. Create a feature branch
2. Make your changes
3. Add tests if applicable
4. Submit a pull request
