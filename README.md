
# Dementia Awareness Website (DAZ)

# Welcome to Dementia Association of Zimbabwe Awareness project


## About the Project
The **Dementia Association of Zimbabwe (DAZ)** website is designed to create awareness and advocate for the prevention, diagnosis, treatment, and management of dementia. The site aims to diminish stigma, provide resources for caregivers and families, and support ongoing research efforts.


## Features
- Informative content about dementia, including awareness campaigns, objectives, and research initiatives.
- Services like counseling and home visits for families and caregivers.
- Fundraising page to support DAZ's programs and initiatives.
- User-friendly interface with responsive design for optimal accessibility across devices.

## Tech Stack
This project is built with:

### Frontend
- **Framework:** [Vite](https://vitejs.dev/) with React
- **Language:** TypeScript
- **Styling:** Tailwind CSS, shadcn-ui
- **Animation:** Framer Motion
- **Routing:** React Router
- **Form Handling:** React Hook Form with Zod validation

### Backend
- **Framework:** Express.js
- **Language:** TypeScript
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT (JSON Web Tokens)
- **File Upload:** Multer
- **Email:** Nodemailer
- **Security:** Helmet, CORS, Rate Limiting

### DevOps & Deployment
- **Hosting:** Vercel (Frontend), Railway/Heroku (Backend)
- **Version Control:** Git & GitHub
- **CI/CD:** GitHub Actions
- **Monitoring:** Google Analytics

## Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/daz-dementia-awareness-hub.git
   ```
2. Navigate into the project directory:
   ```bash
   cd daz-dementia-awareness-hub
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the project root and add the necessary environment variables:
   ```plaintext
   VITE_API_URL=https://api.example.com
   VITE_APP_SECRET=supersecretkey123
   ```

## Usage

### Development Server

#### Frontend
Navigate to the frontend directory and start the development server:
```bash
cd frontend
npm run dev
```
The frontend will be available at `http://localhost:5173`.

#### Backend
Navigate to the backend directory and start the API server:
```bash
cd backend
npm run dev
```
The backend API will be available at `http://localhost:5000`.

### Build

#### Frontend
To create an optimized production build:
```bash
cd frontend
npm run build
```

#### Backend
To build the backend for production:
```bash
cd backend
npm run build
npm start
```

## Project Structure
```
daz-dementia-hub/
├── frontend/            # React/Vite frontend application
│   ├── public/          # Static assets (images, logos, etc.)
│   ├── src/
│   │   ├── components/  # Reusable React components
│   │   │   ├── ui/      # shadcn-ui components
│   │   ├── auth/        # Authentication components
│   │   │   ├── login/   # Login form component
│   │   │   └── signup/  # Signup form component
│   │   ├── pages/       # Page components
│   │   ├── layouts/     # Layout components
│   │   ├── hooks/       # Custom React hooks
│   │   ├── lib/         # Shared libraries and configurations
│   │   ├── App.tsx      # Main application component
│   │   └── main.tsx     # Entry point
│   ├── package.json     # Frontend dependencies
│   ├── tsconfig.json    # TypeScript configuration
│   ├── vite.config.ts   # Vite configuration
│   └── tailwind.config.ts # Tailwind CSS configuration
├── backend/             # Express.js backend API
│   ├── src/
│   │   ├── controllers/ # Request handlers
│   │   ├── routes/      # API routes
│   │   ├── models/      # Database models
│   │   ├── middleware/  # Custom middleware
│   │   ├── services/    # Business logic
│   │   ├── utils/       # Helper functions
│   │   ├── config/      # Configuration files
│   │   ├── types/       # TypeScript types
│   │   └── index.ts     # Entry point
│   ├── tests/           # Backend tests
│   ├── uploads/         # File uploads directory
│   ├── package.json     # Backend dependencies
│   ├── tsconfig.json    # TypeScript configuration
│   └── .env.example     # Environment variables template
├── shared/              # Shared code between frontend and backend
│   ├── types/           # Shared TypeScript interfaces
│   └── utils/           # Shared utility functions
├── docs/                # Project documentation
├── package.json         # Root package.json (workspace configuration)
└── README.md           # This file
```

## Contributions
We welcome contributions to enhance the website and its impact. Here's how you can help:
1. Fork the project.
2. Create a feature branch:
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add Your Feature Description"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeatureName
   ```
5. Open a Pull Request.

## License
This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Contact
For any inquiries, feel free to reach out:
- **Email:** [info@dementiaassociationzim.org](mailto:info@dementiaassociationzim.org)
- **WhatsApp:** +263 783 146 211
- **Social Media:**
  - [Facebook](https://facebook.com/dementiaassociationzim)
  - [Twitter](https://twitter.com/DementiaAss-Zim)

**URL**: 


