
# Todo Summary Assistant ✅

An AI-powered full-stack application that allows users to manage their todos, generate intelligent summaries using Cohere's LLM, and send those summaries to Slack channels via webhooks.

---

## 📦 Features

- ✅ Add, view, and delete todos
- 🧠 Summarize pending tasks using Cohere LLM API
- 🔔 Automatically send summary to a Slack channel
- 💾 Data stored and managed using Supabase
- 💡 React + Node.js architecture

---

## 🧰 Tech Stack

| Layer       | Technology              |
|-------------|--------------------------|
| Frontend    | React (Vite)             |
| Backend     | Node.js + Express        |
| Database    | Supabase (PostgreSQL)    |
| LLM API     | [Cohere API](https://cohere.com) |
| Messaging   | Slack Webhook            |

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/todo-summary-assistant.git
cd todo-summary-assistant
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../frontend/todo-frontend
npm install
```

### 4. Configure Environment Variables

Create a `.env` file inside the `backend/` folder using this template:

```env
COHERE_API_KEY=your-cohere-api-key
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_API_KEY=your-supabase-anon-key
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/your/webhook/url
```

You can refer to the included `.env.example` file.

---

## 🧾 Slack & LLM Setup Guide

### Slack Webhook Integration

1. Go to [https://api.slack.com/apps](https://api.slack.com/apps)
2. Click **Create New App** → From Scratch
3. Enable **Incoming Webhooks**
4. Add a new webhook to your workspace and select a channel (e.g., `#todo-summary`)
5. Copy the webhook URL and paste it into `.env` as `SLACK_WEBHOOK_URL`

### Cohere LLM API Integration

1. Sign up at [https://dashboard.cohere.com](https://dashboard.cohere.com)
2. Create an API key from the dashboard
3. Add this key to `.env` as `COHERE_API_KEY`
4. Ensure your input to the summarization endpoint is at least 250 characters (padded automatically)

---

## 🧱 Database Setup (Supabase)

1. Create a free account at [https://supabase.com](https://supabase.com)
2. Create a new project
3. Add a table `todos` with the following structure:

| Column     | Type      | Default              |
|------------|-----------|----------------------|
| id         | UUID      | gen_random_uuid()    |
| text       | Text      |                      |
| created_at | Timestamp | now()                |

4. Copy the Supabase URL and anon key and add them to your `.env`

---

## 🧩 Design & Architecture Decisions

- **Frontend**: Built with React (Vite) for fast development
- **Backend**: Node.js (Express) REST API with routes for todos and summarization
- **Database**: Supabase for realtime PostgreSQL and RESTful access
- **LLM**: Cohere API used instead of OpenAI due to quota issues
- **Slack**: Easy team integration via webhook notification
- **Separation of concerns**: Frontend and backend are organized in separate folders

---

## 🚀 How It Works

1. User adds todos from the frontend
2. Backend stores todos in Supabase
3. User clicks “Summarize & Send to Slack”
4. Backend calls Cohere to generate a summary
5. Backend posts the summary to a Slack channel

---

## 🌍 Optional Deployment

- **Frontend**: [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/)
- **Backend**: [Render](https://render.com/) or [Railway](https://railway.app/)
- Set the environment variables in the deployment platform settings

---

## 📁 .env.example

```env
COHERE_API_KEY=your-cohere-key
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_API_KEY=your-anon-key
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/...
```

---

## ✅ Submission Checklist

- [x] ✅ Public GitHub repository
- [x] ✅ Frontend and backend source code
- [x] ✅ `.env.example` included
- [x] ✅ Professional `README.md`
- [x] ✅ Slack & LLM setup documented
- [x] ✅ Fully working app
- [ ] ⬜ (Optional) Deployed URL added

---

## 👨‍💻 Author

**Utkarsh Tripathi**  
Built as part of a Full Stack Internship Assignment  
With ❤️ using Supabase, Cohere, React, Node.js & Slack
