# 🍳 Recipe Sharing & Meal Planner

A full-stack MERN application where users can share recipes, plan weekly meals, and automatically generate shopping lists.

## 📋 Table of Contents

- [Overview](#overview)
- [Live Demo](#live-demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Usage Guide](#usage-guide)
- [Screenshots](#screenshots)
- [Future Improvements](#future-improvements)
- [Troubleshooting](#troubleshooting)
- [Acknowledgments](#acknowledgments)

## 🎯 Overview

This is a community-driven platform for food enthusiasts to share their recipes and organize weekly meals. Unlike basic recipe apps, this includes a drag-and-drop meal planner that automatically generates a shopping list based on your selected recipes.

**Why I built this:** To learn full-stack development with the MERN stack while creating something genuinely useful for home cooks.

### Key Differentiators

- **Live Shopping List Generation** - No more forgetting ingredients
- **Drag-and-Drop Planning** - Visually plan your week
- **Community Comments** - Real-time feedback on recipes

## 🔗 Live Demo

> **Note:** Replace these with your actual deployed links after deploying

- **Frontend:** [https://your-app-name.vercel.app](https://your-app-name.vercel.app)
- **Backend API:** [https://your-api-name.onrender.com](https://your-api-name.onrender.com)
- **Test Credentials:**
  - Email: `demo@example.com`
  - Password: `demo123456`

## ✨ Features

### Core Features (All Implemented)

| Feature | Status | Description |
|---------|--------|-------------|
| User Authentication | ✅ | Register/login with JWT tokens |
| Create Recipes | ✅ | Add title, ingredients, instructions, photos |
| Edit/Delete Recipes | ✅ | Full CRUD with ownership verification |
| Browse Recipes | ✅ | Search by category, tags, or ingredients |
| Meal Planner | ✅ | Drag-and-drop recipes into weekly grid |
| Shopping List | ✅ | Auto-generated from planned meals |
| Comments | 🔄 | Real-time comments (Socket.io - coming soon) |
| Image Upload | ✅ | Cloudinary integration for recipe photos |

### Technical Features

- ✅ JWT-based authentication with password hashing (bcryptjs)
- ✅ Protected routes on both backend and frontend
- ✅ Image upload and optimization via Cloudinary
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Loading states and error handling
- ✅ Form validation on client and server

## 🛠️ Tech Stack

### Backend

| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | v18+ | JavaScript runtime |
| Express.js | 4.18+ | Web framework |
| MongoDB Atlas | 6.0+ | Cloud database |
| Mongoose | 7.0+ | ODM for MongoDB |
| JWT | 9.0+ | Authentication tokens |
| bcryptjs | 2.4+ | Password hashing |
| Cloudinary | 1.37+ | Image hosting |
| Multer | 1.4+ | File upload handling |
| Cors | 2.8+ | Cross-origin requests |
| Dotenv | 16.0+ | Environment variables |

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.2+ | UI library |
| Vite | 4.0+ | Build tool |
| React Router DOM | 6.14+ | Client-side routing |
| TanStack React Query | 4.29+ | Server state management |
| Axios | 1.4+ | HTTP client |
| dnd-kit | 6.0+ | Drag-and-drop |
| Tailwind CSS | 3.3+ | Styling |

### Development & Deployment

- **Version Control:** Git & GitHub
- **Backend Hosting:** Render.com (free tier)
- **Frontend Hosting:** Vercel (free tier)
- **Database:** MongoDB Atlas (free tier)
- **Image Storage:** Cloudinary (free tier)

## 📁 Project Structure
