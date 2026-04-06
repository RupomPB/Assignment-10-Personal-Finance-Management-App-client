# 🏦 FinEase App – Personal Finance Management Platform

## 🔗 Live Links
🌍 Live Website: [https://finease-project.netlify.app/](https://finease-project.netlify.app/)  
💻 Client Repository: [GitHub Client](https://github.com/RupomPB/Assignment-10-Personal-Finance-Management-App-client)  
🖥 Server Repository: [GitHub Server](https://github.com/RupomPB/Assignment-10-Personal-Finance-Management-App-server)  

---

## 📌 Project Overview

**FinEase** is a modern **MERN stack personal finance management app** integrated with Firebase Authentication.  
It allows users to:

- Track income and expenses securely  
- Perform **CRUD operations** on financial transactions  
- Access **role-based UI** (Admin / Viewer)  
- View **interactive charts and dashboards** with real-time insights  
- Filter and sort transactions by date, amount, category, and type  
- Focus on **one-month transaction view** for detailed analytics  

---

## 🏗 Application Architecture

Client (React + Tailwind CSS)
↓ REST API
Server (Node.js + Express.js)
↓
MongoDB Atlas
↓
Firebase Authentication


---

## 🛠 Tech Stack

**Frontend:** React, React Router DOM, Tailwind CSS, Recharts, Axios, SweetAlert2  
**Backend:** Node.js, Express.js, MongoDB (Mongoose), Firebase Authentication  
**Deployment:** Client – Vercel / Netlify | Server – Render / Railway  

---

## 🚀 Core Features

### 🔐 Authentication & Authorization
- Secure login and registration with **Firebase Authentication**  
- **Role-Based UI**:
  - **Admin:** Full access (add/edit/delete transactions)  
  - **Viewer:** Limited access (cannot add/edit/delete)  
- Protected routes for security  

### 💰 Financial Management
- Add, edit, delete, and view transactions  
- Transactions stored in MongoDB via **RESTful APIs**  
- **Filtering** by month, category, type  
- **Sorting** by amount or date  
- **One-month chart view** for daily transaction tracking  

### 📊 Interactive Dashboards
- **Recharts** for visualizing income, expenses, and balance trends  
- Trend indicators with `TrendingUp` / `TrendingDown` icons  
- Real-time updates on dashboards as transactions change  

### 🎨 Responsive UI/UX
- Modern interface with **React & Tailwind CSS**  
- User-friendly confirmations and alerts via **SweetAlert2**  
- Fully responsive across mobile and desktop devices  

---

## 🔄 Workflow Overview

1. User registers or logs in securely  
2. Firebase handles authentication and protected access  
3. Role-based UI adjusts functionality (Admin/Viewer)  
4. Users add, edit, or delete transactions (if permitted)  
5. Transactions stored in MongoDB via RESTful APIs  
6. Dashboards and charts dynamically reflect changes  
7. Insights highlight income, expenses, balance trends  

---

## 📂 Project Structure

**Client**

src/
├── components/
├── pages/
├── dashboard/
├── routes/
├── context/ # Role-based state management & global state
└── utils/

**Server**

server/
├── routes/
├── controllers/
├── middleware/
├── models/
└── config/


---

## ⚡ Performance & Optimization

- Modular, scalable backend architecture  
- Optimized MongoDB queries for efficiency  
- Reusable frontend components  
- Lazy-loading for routes and charts  
- Production-ready deployment  

---

## 🧠 Learning Outcomes

- Full-stack MERN development  
- Role-Based UI and access control  
- CRUD operations with REST APIs  
- Interactive charts for **one-month financial insights**  
- Filtering & sorting data effectively  
- Responsive design & real-time dashboards  

---

## 📈 Future Improvements

- Multi-user dashboard with advanced roles  
- Recurring transactions and budget alerts  
- Export reports (PDF/CSV)  
- Email notifications and reminders  
- Advanced analytics and trend forecasting  

---

## 👨‍💻 Developer

**Rupom PB** – MERN Stack Developer  
Focused on building **secure, scalable, and production-ready applications**  

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub.  