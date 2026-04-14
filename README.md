# 🤝 KeenKeeper

> A place where you can connect with your beloved friends — and never forget to reach out.

KeenKeeper is a personal relationship manager that helps you stay in touch with the people who matter most. It tracks when you last connected, reminds you when it's time to reach out, and logs every interaction so no friendship slips through the cracks.

---

## 🛠️ Technologies Used

- **Next.js 15** — App Router, Server & Client Components
- **React** — UI & state management
- **Tailwind CSS** — Styling
- **DaisyUI** — UI component library
- **Context API** — Global interaction state
- **Recharts** — Analytics & data visualization
- **React Toastify** — Toast notifications
- **React Icons** — Icon library
- **Vercel** — Deployment

---

## ✨ Key Features

### 1. 📋 Friend Details & Status Tracking
View detailed profiles for each friend including their contact status (`on track`, `almost due`, `overdue`), bio, tags, days since last contact, and relationship goals — all dynamically loaded from your data.

### 2. 📞 Quick Check-In with Interaction Logging
Call, text, or video a friend directly from their profile page. Every interaction is instantly logged with the friend's name, type, and date — and reflected live on the Timeline page via Context API.

### 3. 📊 Friendship Analytics
Visualize your interaction habits with a responsive donut chart that breaks down your connections by type (Call, Text, Video) — helping you understand how you stay in touch.

---

## 🚀 Live Demo

🔗 [View Live on Vercel](https://assignment-7-egtp.vercel.app)

---

## 📁 Project Structure

```
src/
├── app/
│   ├── YourFriends/
│   │   └── [friendId]/
│   │       └── page.jsx       # Friend details page
│   ├── timeline/
│   │   └── page.jsx           # Interaction timeline
│   ├── stats/
│   │   └── page.jsx           # Friendship analytics
│   └── layout.js
├── components/
│   ├── QuickCheckIn/
│   ├── FriendCard/
│   ├── Navbar/
│   ├── Banner/
│   └── Footer/
└── context/
    └── InteractionContext.js  # Global state
```

---

© 2026 KeenKeeper. All rights reserved.
