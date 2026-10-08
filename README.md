# 🛍️ NexaCart

### Shop smarter. Checkout securely.

**NexaCart** is a modern e-commerce web application designed to provide a clean, smooth, and secure online shopping experience.

The project focuses on building a polished storefront while keeping the architecture ready for essential e-commerce functionality such as authentication, persistent shopping carts, checkout, orders, and inventory management.

<p align="center">
  <a href="https://nexacart-murex.vercel.app/">
    <img src="https://img.shields.io/badge/Live%20Demo-NexaCart-2563EB?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo">
  </a>
  <a href="https://github.com/KiraIIV-max/nexacart">
    <img src="https://img.shields.io/badge/GitHub-Repository-0F172A?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
</p>

---

## ✨ Overview

NexaCart is a full-stack e-commerce project built to explore how a modern online store works from the user interface to the backend and infrastructure.

The application focuses on:

* 🛒 Product discovery and shopping
* 🔐 Secure user authentication
* 💳 Secure checkout workflows
* 📦 Order management
* 📊 Inventory management
* 💾 Persistent shopping cart
* 🛡️ Secure handling of user data
* ☁️ Production deployment with Vercel

The project is also part of my practical journey into **Full-Stack Development, Backend Engineering, DevOps, and Infrastructure**.

---

## 🚀 Live Demo

🌐 **[Open NexaCart](https://nexacart-murex.vercel.app/)**

---

## 🎯 Project Goals

The main goal of NexaCart is to build a realistic e-commerce ecosystem while applying modern software engineering concepts.

### Core Goals

* Build a responsive and modern shopping experience.
* Implement secure authentication using JWT.
* Hash user passwords before storing them.
* Maintain a persistent shopping cart.
* Build a reliable checkout workflow.
* Integrate a payment sandbox.
* Update product inventory after successful payment.
* Protect sensitive application data.
* Deploy the application to a production environment.

---

## 🧩 Features

### 🛍️ Shopping Experience

* Modern landing page
* Product discovery
* Product categories
* Product cards
* Product details
* Shopping bag/cart
* Quantity management
* Responsive UI

### 🔐 Authentication

* User registration
* User login
* JWT-based authentication
* Password hashing
* Protected user resources

### 🛒 Shopping Cart

* Add products to cart
* Remove products
* Update quantities
* Persistent cart state
* Cart total calculation

### 💳 Checkout

* Checkout flow
* Order summary
* Secure payment workflow
* Payment success/failure handling
* Cart preservation after failed payment

### 📦 Orders & Inventory

* Create orders after successful checkout
* Track order status
* Update inventory
* Prevent invalid stock quantities
* Maintain order history

---

## 🎨 Design

NexaCart uses a clean, premium e-commerce visual style focused on simplicity and usability.

### Design Principles

* Minimal interface
* Clear typography
* Strong visual hierarchy
* Consistent spacing
* Responsive layouts
* Accessible UI components
* Smooth interactions
* Mobile-friendly experience

The storefront currently uses a lifestyle-oriented design with sections such as featured products, brand story, secure checkout, delivery, and customer experience.

---

## 🛠️ Tech Stack

### Frontend

* **Next.js 16**
* **React 19**
* **TypeScript**
* **Tailwind CSS 4**

### Backend

* **Next.js Server Architecture**
* REST-style API design
* JWT Authentication
* bcrypt Password Hashing

### Database

* MySQL
* Prisma ORM

### Payments

* Stripe Test Mode / Payment Sandbox

### Deployment

* Vercel
* GitHub

---

## 🏗️ Architecture

```text
                         ┌──────────────────┐
                         │      Client      │
                         │   Browser / UI   │
                         └────────┬─────────┘
                                  │
                                  ▼
                         ┌──────────────────┐
                         │     Next.js      │
                         │    Application   │
                         └────────┬─────────┘
                                  │
                    ┌─────────────┼─────────────┐
                    │             │             │
                    ▼             ▼             ▼
              ┌──────────┐  ┌──────────┐  ┌──────────┐
              │   Auth   │  │ Products │  │ Checkout │
              │   JWT    │  │   API    │  │ Payment  │
              └──────────┘  └────┬─────┘  └────┬─────┘
                                 │             │
                                 ▼             ▼
                          ┌────────────┐  ┌────────────┐
                          │  Database  │  │  Payment   │
                          │ MySQL +    │  │  Sandbox   │
                          │  Prisma    │  │  Provider  │
                          └────────────┘  └────────────┘
```

---

## 📁 Project Structure

```text
nexacart/
│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── public/
│   └── static assets
│
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/KiraIIV-max/nexacart.git
```

### 2. Navigate to the project

```bash
cd nexacart
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🔐 Environment Variables

For production features such as database access, authentication, and payment processing, create a `.env.local` file.

Example:

```env
DATABASE_URL="your_database_url"

JWT_SECRET="your_jwt_secret"

STRIPE_SECRET_KEY="your_stripe_secret_key"

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="your_publishable_key"
```

> Never commit `.env` or `.env.local` files to GitHub.

---

## 🧪 Development

Run the development server:

```bash
npm run dev
```

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

Run linting:

```bash
npm run lint
```

---

## 🔒 Security Considerations

Security is an important part of the NexaCart architecture.

The project is designed around:

* Password hashing
* JWT-based authentication
* Protected API resources
* Environment variables for secrets
* Secure checkout workflows
* Server-side validation
* Inventory validation
* No sensitive payment information stored directly

---

## 📈 Future Improvements

Planned improvements include:

* [ ] Complete database integration
* [ ] User authentication
* [ ] Persistent shopping cart
* [ ] Product API
* [ ] Product search and filtering
* [ ] Stripe test checkout
* [ ] Order management
* [ ] Inventory management
* [ ] Admin dashboard
* [ ] User profile
* [ ] Order history
* [ ] Email notifications
* [ ] Dark mode
* [ ] Automated testing
* [ ] CI/CD pipeline
* [ ] Performance optimization

---

## 📸 Screenshots

Add screenshots of the main pages here:

```text
Home
Products
Product Details
Shopping Cart
Checkout
Orders
Admin Dashboard
```

Example:

```markdown
![NexaCart Home](./screenshots/home.png)
```

---

## 📚 What I Learned

Through NexaCart, I am practicing and strengthening my understanding of:

* Full-stack application architecture
* Next.js development
* React component design
* TypeScript
* API development
* Authentication
* Database design
* Secure password handling
* Payment workflows
* E-commerce architecture
* Inventory management
* Git & GitHub
* Production deployment
* Vercel

---

## 👨‍💻 Author

### Ahmed Mohamed

**Junior Software Engineer**

Full-Stack • Backend • Infrastructure • Automation

I'm interested in building practical software systems and understanding how they work from the frontend all the way to the backend and infrastructure.

<p align="left">
  <a href="https://github.com/KiraIIV-max">
    <img src="https://img.shields.io/badge/GitHub-KiraIIV--max-181717?style=for-the-badge&logo=github" alt="GitHub">
  </a>
  <a href="https://ahmed-portfolio-rosy-tau.vercel.app/">
    <img src="https://img.shields.io/badge/Portfolio-Visit-2563EB?style=for-the-badge&logo=vercel&logoColor=white" alt="Portfolio">
  </a>
</p>

---

## 🌐 Links

**Live Demo:**
https://nexacart-murex.vercel.app/

**GitHub Repository:**
https://github.com/KiraIIV-max/nexacart

**Portfolio:**
https://ahmed-portfolio-rosy-tau.vercel.app/

---

<p align="center">

### 🛍️ NexaCart

**Shop smarter. Checkout securely.**

Built with ❤️ by Ahmed Mohamed

</p>
