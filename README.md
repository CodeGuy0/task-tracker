# 📝 MERN Task Tracker

A full-stack **Task Tracker web application** built using the MERN stack.  
This project allows users to create, manage, update, and delete daily tasks with a clean and simple UI.

I built this project to strengthen my understanding of **frontend–backend communication**, **REST APIs**, and **real-world deployment** using cloud services.

---

## 🚀 Live Demo

- **Frontend:** https://task-tracker-1-y686.onrender.com/ 
- **Backend API:** https://task-tracker-6wak.onrender.com/

> The backend exposes REST APIs and the frontend consumes them in real time.

---

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **State Management:** React `useState`
- **Deployment:** Render (Frontend & Backend)

---

## ✨ Features

- Create tasks with:
  - Title
  - Description
  - Priority (Low / Medium / High)
  - Due date
- Mark tasks as **Completed**
- Delete tasks
- Client-side form validation
- RESTful API architecture
- Fully deployed frontend and backend
- Cloud-hosted database using MongoDB Atlas

---

## 📸 Screenshots

### Frontend UI
<img width="1919" height="970" alt="Screenshot 2026-01-03 164313" src="https://github.com/user-attachments/assets/b7f2a7f9-cd93-4434-beac-4894a016705b" />

<img width="1918" height="869" alt="Screenshot 2026-01-03 170229" src="https://github.com/user-attachments/assets/0b0244ca-fdb5-4e47-afe9-18f9d33d38cc" />


### Backend API Response
<img width="1915" height="975" alt="Screenshot 2026-01-03 161606" src="https://github.com/user-attachments/assets/4d385c5f-777f-404d-99e0-bfc94033dd65" />


### MongoDB Atlas Data
<img width="1919" height="963" alt="Screenshot 2026-01-03 164411" src="https://github.com/user-attachments/assets/9e2e12d4-ce39-46a1-aefa-1f1022721583" />
<img width="1919" height="1002" alt="Screenshot 2026-01-03 170522" src="https://github.com/user-attachments/assets/ed98ec2c-aed7-4b2a-b471-3e9ca687612e" />


> Screenshots are taken from the live deployed project.

---


---

## ⚙️ Local Setup

### Backend Setup


cd backend
npm install
node server.js

The backend will start on:

http://localhost:5000


## Frontend Setup

cd frontend
npm install
npm start

The frontend will run on:
http://localhost:3000

## 🔐 Environment Variables

For security reasons, sensitive credentials are not committed to GitHub.

Create a .env file inside the backend folder:

MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000

The application reads these values using process.env.

## 📦 Deployment
Backend (Render – Web Service)

Branch: main

Start Command: node backend/server.js

Environment Variables:

MONGO_URI

PORT

Frontend (Render – Static Site)

Root Directory: frontend

Build Command: npm install && npm run build

Publish Directory: build

## 📖 Learnings from This Project

Connecting React frontend with Express backend

Designing RESTful APIs

Working with MongoDB Atlas in production

Handling CORS and environment variables

Deploying full-stack applications on Render

Debugging real deployment issues

## 🔮 Future Improvements

User authentication (JWT)

Task filtering and search

Better UI with Tailwind CSS / Material UI

Notifications for overdue tasks

Pagination for large task lists

## 👤 Author

Pranay Kumar Jha

GitHub: https://github.com/CodeGuy0
