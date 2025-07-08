# Transtalk: Public Transport Feedback Portal

**Transtalk** is a simple, modern full-stack web application where citizens can quickly give feedback on public transportation services like **bus**, **train**, and **metro**.
It allows **users** to submit issues and **admins** to review and update statuses of complaints in a clean and interactive dashboard.

---

## ✨ **Features**

* 📅 Submit feedback (transport type, route, message)
* 🚪 Login with role selection (User/Admin)
* ✉️ Admin login with secure password
* 🔢 View list of submitted feedbacks
* ✅ Admin can mark feedback as "Reviewed"
* 👁️ Real-time UI updates without page reloads
* 📂 Stored in MongoDB for persistence

---

## 🧱 **Technologies Used**

| Tech           | Purpose                     |
| -------------- | --------------------------- |
| **React.js**   | Frontend UI                 |
| **Express.js** | Backend Server              |
| **Node.js**    | JS Runtime                  |
| **MongoDB**    | NoSQL Database              |
| **CSS**        | Styling                     |
| **Fetch API**  | Client-server communication |

---

## 📰 **Screenshots**

<p><strong> Login Screen</strong><br/>
<img src="screenshots/Screenshot_2025-07-02-12-15-21-227_com.example.event_planner_app - Copy - Copy.jpg" width="400"/>
</p>

<p><strong> Home Screen</strong><br/>
<img src="screenshots/Screenshot_2025-07-02-12-15-39-294_com.example.event_planner_app.jpg" width="400"/>
</p>

<p><strong> Create Event Screen</strong><br/>
<img src="screenshots/Screenshot_2025-07-02-12-18-18-374_com.example.event_planner_app.jpg" width="400"/>
</p>

<p><strong> Event Info screen </strong><br/>
<img src="screenshots/Screenshot_2025-07-02-12-20-04-137_com.example.event_planner_app - Copy.jpg" width="400"/>
</p>

<p><strong> All Events Screen</strong><br/>
<img src="screenshots/Screenshot_2025-07-02-12-51-10-365_com.example.event_planner_app.jpg" width="400"/>
</p>

---

## 📂 **Project Structure**

```plaintext
transport-feedback-portal/
├── frontend/        # React app
│   └── src/
│       ├── App.js
│       ├── App.css
│       └── components/
│           ├── Login.js
│           ├── AdminDashboard.js
│           └── FeedbackForm.js
│
├── backend/         # Node/Express API
│   ├── server.js
│   └── models/
│       └── Feedback.js
│   └── routes/
│       └── feedback.js
```

## ⚙️ How to Run the App Locally

### ✅ Prerequisites

* Node.js & npm
* MongoDB (Local or Atlas)

---

### 🧪 Steps to Run


# Clone the repo
https://github.com/Rashmii-suvarna/transport-feedback-portal.git

# Start backend
cd backend

npm install

nodemon server.js

# Start frontend
cd ../frontend

npm install

npm start


---

## 🙋‍♀️ **About the Developer**

**Rashmi Suvarna**
**MCA Student | Full Stack Developer**

**🔗 LinkedIn: [Connect with me on LinkedIn](https://www.linkedin.com/in/rashmi2003)**
