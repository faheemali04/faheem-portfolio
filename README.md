# Faheem Portfolio

A 3D portfolio website built with React, Three.js, and Vite, integrated with the Zolixi contact API.

## Features

- 3D interactive portfolio with Three.js
- Contact form integrated with Zolixi API
- Responsive design with Tailwind CSS
- Smooth animations with Framer Motion

## Prerequisites

Before running this project, you need to have the Zolixi backend running. Please refer to the Zolixi project documentation for setup instructions.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## API Integration

This portfolio is integrated with the Zolixi contact API. The contact form sends data to the Zolixi backend with the source "ayesha" for tracking purposes.

### Requirements

- Zolixi backend must be running on `http://localhost:3000`
- The contact API endpoint is configured to accept requests from `http://localhost:5173`

### Contact Form

The contact form includes:
- Name field
- Email field  
- Message field
- Source field (automatically set to "faheem")

All form submissions are stored in the Zolixi database and can be managed through the Zolixi dashboard.

## Build and Deploy

```bash
npm run build
npm run deploy
```

## Technologies Used

- React 18
- Vite
- Three.js
- Framer Motion
- Tailwind CSS
- GSAP 