# 💬 PixelTalk  
A real-time chat application built using **Node.js**, **Express**, **Socket.IO**, and **EJS**.  
PixelTalk allows users to send and receive instant messages with live user connection updates.  

---

## 🚀 Features
- Real-time messaging using **Socket.IO**  
- User join/leave notifications  
- Simple and clean UI  
- Multiple users can chat simultaneously  
- Built with **Express** and **EJS** for server-side rendering  

---

## 🖼️ Demo
Here’s a preview of PixelTalk in action:  

![PixelTalk Demo](/public/image1.png)  
![PixelTalk Chat](/public/image2.png)  

---

## 📂 Project Structure
```
CHAT_APP/
│── node_modules/
│── public/ # Static files (CSS, JS, images)
│── views/ # EJS templates
│── index.js # Main server file
│── package.json # Dependencies and scripts
│── package-lock.json
│── .gitignore
```

## 🛠️ Tech Stack

Node.js

Express.js

Socket.IO

EJS (Embedded JavaScript Templates)

## 📌 How It Works

When a user connects, a socket connection is established.

Messages are broadcasted to all connected clients in real-time.

User join/leave notifications are displayed instantly.

The frontend is rendered using EJS templates with static assets from the public/ folder.

## 🤝 Contributing

Contributions are welcome!

Fork the repository

Create a feature branch

Submit a pull request
