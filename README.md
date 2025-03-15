# DeepWrite AI - AI Content Generator

<p align="center">
  <b>🚀 AI-Powered Content Generator | Fast ⚡ | Reliable 🔒 | Scalable 📈</b>
</p>

<p align="center">
  <a href="https://github.com/your-username/deepwrite-ai"><img src="https://img.shields.io/github/stars/your-username/deepwrite-ai?style=flat-square"/></a>
  <a href="https://github.com/your-username/deepwrite-ai/issues"><img src="https://img.shields.io/github/issues/your-username/deepwrite-ai?style=flat-square"/></a>
  <a href="https://github.com/your-username/deepwrite-ai/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-brightgreen?style=flat-square"/></a>
</p>

---

## 📌 Table of Contents

1. [📖 Introduction](#introduction)
2. [✨ Features](#features)
3. [🛠 Technologies Used](#technologies-used)
4. [⚙️ Setup and Installation](#setup-and-installation)
5. [🔗 API Endpoints](#api-endpoints)
6. [📁 Project Structure](#project-structure)
7. [🚀 Usage](#usage)
8. [🤝 Contributing](#contributing)
9. [❓ FAQ](#faq)
10. [📜 License](#license)
11. [📩 Contact](#contact)

---

## 📖 Introduction

**DeepWrite AI** is an AI-powered content generation platform designed to create high-quality content effortlessly. Whether you need blog ideas, YouTube video scripts, social media captions, or product descriptions, DeepWrite AI leverages cutting-edge AI models to generate content tailored to your needs.

---

## ✨ Features

✅ **Multiple Content Templates 📝**  
   - Blog Ideas 📰  
   - YouTube Video Ideas 🎥  
   - Hashtags & SEO Keywords #️⃣  
   - Social Media Posts 📢  
   - Email Newsletters ✉️  
   - Product Descriptions 🏷️  

✅ **Customizable Tone & Style 🎭**  
   - Choose between casual, professional, friendly, and more.

✅ **User Authentication & Management 🔐**  
   - Secure sign-up and login using **Clerk**.

✅ **Mobile-Optimized UI 📱**  
   - Fully responsive design with **Tailwind CSS**.

✅ **API Integration 🔌**  
   - Seamlessly integrate DeepWrite AI into your applications.

✅ **High-Performance & Scalable 🚀**  
   - Built with **Next.js (TypeScript)** & **FastAPI** for speed and efficiency.

✅ **Dark Mode Support 🌙**

---

## 🛠 Technologies Used

### Frontend 🏗️
- **Next.js (TypeScript)** - Scalable and type-safe web application framework.
- **Tailwind CSS** - Utility-first CSS framework.
- **Lucide Icons** - Beautiful and customizable icons.
- **Clerk** - User authentication and management.

### Backend 🖥️
- **FastAPI** - High-performance Python web framework.
- **Gemini AI** - AI model for content generation.
- **CORS Middleware** - Cross-origin request handling.

### Deployment 🚀
- **Vercel** - Frontend hosting & deployment.
- **Render** - Backend hosting & API management.

---

## ⚙️ Setup and Installation

### Prerequisites 🛠️
- Node.js (v16 or higher) 🟢
- Python (v3.8 or higher) 🐍
- Git 🛜
- **pnpm** (instead of npm) 📦

### 🔥 Frontend Setup
```sh
# Clone the repository
git clone https://github.com/DEEP992006/ai-content-generater.git
cd deepwrite-ai/frontend

# Install dependencies
pnpm install

# Start the development server
pnpm run dev

# Open http://localhost:3000 in your browser
```

### 🔥 Backend Setup
```sh
# Navigate to the backend directory
cd ../backend

# Create a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Set up environment variables
cat > .env <<EOL
MY_API_KEY=your-gemini-api-key
EOL

# Start the FastAPI server
uvicorn main:app --reload

# Backend available at http://localhost:8000
```

---

## 🔗 API Endpoints

### Content Generation 📝
```http
GET /content/generate/{template}?description=Your+Text
```
- **Parameters**:
  - `template` (string): Type of content (e.g., `blog`, `yt`, `hashtags`).
  - `description` (string): Input for AI to generate content.

### User Authentication 🔑
```http
POST /auth/signup
POST /auth/signin
```
- **Description**: Register or log in users securely using **Clerk**.

---

## 🚀 Usage

1. **Visit the Homepage 🌍**  
2. **Select a Template 🎨**  
3. **Generate Content ⚡**  
4. **Sign Up / Log In 🔐**  

---

## ❓ FAQ

### 🔹 Can I use DeepWrite AI for free?
Yes, the free plan provides limited content generation, but premium features unlock more advanced capabilities.

### 🔹 How secure is my data?
DeepWrite AI ensures strong authentication with **Clerk** and follows strict security guidelines to protect user data.

### 🔹 What kind of AI model does DeepWrite AI use?
We leverage **Gemini AI** for advanced content generation with natural language understanding.

### 🔹 Can I integrate DeepWrite AI into my app?
Yes! We provide API access to generate content programmatically.

---

## 📩 Contact
📧 **Email**: deepsurati94@gmail.com 

---

⭐ If you like this project, don't forget to **star the repository**! ⭐

