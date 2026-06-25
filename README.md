# LegalEase Frontend

LegalEase is a modern legal services platform that connects clients with verified legal professionals. The frontend is built with Next.js and provides a responsive, secure, and user-friendly experience for clients, lawyers, and administrators.

## Live Demo

https://rto-legal-ease.vercel.app/

---

## Features

### Authentication

* Better Auth Authentication
* JWT-based API communication
* Protected routes
* Role-based access control

### User Roles

* Client Dashboard
* Lawyer Dashboard
* Admin Dashboard

### Lawyer Marketplace

* Browse lawyers
* Search lawyers
* Filter by specialization
* Lawyer profile pages
* Hire request system

### Dashboard Features

* Manage hiring requests
* Payment history
* Comments & reviews
* Profile management
* Analytics dashboard

### Admin Features

* User management
* Platform analytics
* Transaction monitoring
* Lawyer approval workflow

### UI & UX

* Responsive design
* Dark / Light theme support
* Framer Motion animations
* Toast notifications
* Modern glassmorphism interface

---

## Tech Stack

### Core

* Next.js 15
* React 19
* JavaScript
* Tailwind CSS

### UI Libraries

* HeroUI
* DaisyUI
* Lucide React
* Framer Motion

### Authentication

* Better Auth
* JWT Plugin

### Utilities

* React Toastify
* React Icons

---

## Installation

Clone the repository:

```bash
git clone <frontend-repository-url>
```

Install dependencies:

```bash
npm install
```

Create a .env.local file:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_BACKEND_URI=http://localhost:5000
```

Run development server:

```bash
npm run dev
```

Visit:

```text
http://localhost:3000
```

---

## Environment Variables

```env
NEXT_PUBLIC_APP_URL=
NEXT_PUBLIC_BACKEND_URI=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
```

---

## Project Structure

```text
src/
├── app/
├── components/
├── data/
├── lib/
├── action/
├── hooks/
├── provider/
└── middleware/
```

---

## Deployment

Frontend is deployed on Vercel.

Build:

```bash
npm run build
```

Start:

```bash
npm start
```

---

## Contributors

Developed by Jaber

---

## License

This project is licensed for educational and commercial use.
