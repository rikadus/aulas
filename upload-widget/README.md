# Upload Widget (Full Stack)

A modern, high-performance file upload widget capable of handling large files with a sleek, responsive user interface. This project demonstrates a robust full-stack implementation using Node.js streams for efficient data handling and a React frontend for an intuitive user experience.

## ✨ Features

- **Drag & Drop Interface**: Intuitive file selection zone.
- **Real-time Progress Tracking**: Visual feedback for individual and global upload status.
- **AWS S3 Integration**: Secure and scalable cloud storage for uploaded files.
- **Fastify Backend**: High-performance Node.js framework for optimal throughput.
- **Responsive Design**: Built with TailwindCSS for seamless experience across devices.
- **State Management**: specific upload state handling using Zustand.
- **Animations**: Smooth UI transitions powered by Framer Motion.

## 🛠️ Technology Stack

### Backend
- **Node.js**: Runtime environment.
- **Fastify**: High-speed web framework.
- **TypeScript**: Static typing for robustness.
- **AWS SDK**: Direct S3 integration.
- **Zod**: Schema validation.

### Frontend
- **React**: Component-based UI library.
- **Vite**: Next-generation frontend tooling.
- **TailwindCSS**: Utility-first CSS framework.
- **Radix UI**: Headless UI components for accessibility.
- **Zustand**: Small, fast, and scalable bearbones state-management solution.
- **Framer Motion**: Production-ready animation library.
- **Lucide React**: Beautiful & consistent icons.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- An AWS Account with S3 Bucket credentials

### 1. Clone the Repository

```bash
git clone <repository-url>
cd upload-widget
```

### 2. Backend Setup (`/server`)

Navigate to the server directory and install dependencies:

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory with your AWS credentials:

```env
# .env
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_REGION=your_bucket_region
AWS_BUCKET_NAME=your_bucket_name
```

Start the development server:

```bash
npm run dev
```
The server will start (defaulting to port 3333 or similar, check console output).

### 3. Frontend Setup (`/web`)

Open a new terminal, navigate to the web directory and install dependencies:

```bash
cd web
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to the URL provided by Vite (usually `http://localhost:5173`).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Built Ricardo Rodrigo

Project In Bio

LinkedIn: https://www.linkedin.com/in/ricardo-rodrigo/
GitHub: https://github.com/ricardorodrigogit
