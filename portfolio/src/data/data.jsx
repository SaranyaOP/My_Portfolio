import project_chatapp from '../assets/project_chatapp.png'
import project_ai_chat_bot from '../assets/project_ai_chat_bot.png'

import project_youtube_app from '../assets/project_youtube_app.png'
import project_life_admin_ai from '../assets/project_life_admin_ai.png'

// import project_chatapp from '/assets/project_app.png'
// import project_chatapp from '/assets/project_app.png'
// import project_crud_app from '../assets/project_crud_app.png'

export const projects = [
  {
    name: "Life admin AI",
    tech: "React, Firestore, Gemini API, FastAPI, LLM integration",
    github: 'https://github.com/SaranyaOP/Life-admin-ai',
    live: 'https://life-admin-frontend-145379378917.us-central1.run.app/',
    image: project_life_admin_ai
  },
  {
    name: "Chat Application",
    tech: "React, Firebase, Tailwind",
    github: 'https://github.com/SaranyaOP/chat-app',
    live: 'https://chat-app-df093.web.app/',
    image: project_chatapp
  },
  {
    name: "AI Chatbot",
    tech: "React, Gemini API",
    github: 'https://github.com/SaranyaOP/AI-Chatbot',
    live: 'https://ai-chatbot-2e109.web.app/',
    image:  project_ai_chat_bot
  },
  // {
  //   name: "MERN CRUD App",
  //   tech: "MongoDB, Express, React, Node",
  //   github:'https://github.com/SaranyaOP/CRUD-MERN',
  //   live: 'crud-mern-rho.vercel.app',
  //   image: project_crud_app
  // },
  {
    name: "YouTube Clone",
    tech: "React, Hooks, Material UI",
    github: 'https://github.com/SaranyaOP/youtube_clone_app',
    live: 'https://srmedia.netlify.app',
    image: project_youtube_app
  }
];