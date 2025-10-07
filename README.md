# AIPoweredChatPlatform (MERN Stack)
1. This is an AI-Powered Chat Platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
2. It provides an interactive conversational interface similar to ChatGPT, enabling real-time chat with an AI model using the OpenAI API.

# Features 🚀
💬 AI Conversations – Engage in intelligent, context-aware chat powered by OpenAI’s GPT model.

🧠 Context Preservation – Maintains previous messages to allow smooth, multi-turn conversations.

🔐 User Authentication – Secure login and signup with JWT-based authentication.

🧾 Chat History – Stores user conversations in MongoDB for easy access and continuity.

⚙️ Custom Backend API – Built with Express.js for message handling and OpenAI API communication.

🎨 Modern UI/UX – Built using React.js and Tailwind CSS for a responsive, minimal design.

# Tech Stack 🛠️
Frontend: React.js, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB (Mongoose ODM)

AI Integration: OpenAI API

☁️ Environment Config – Uses .env variables for secure API key management.

🚀 Full-Stack Integration – Smooth flow between frontend and backend using RESTful endpoints.

# This is Basic overlook of the project : 
1. Display of the Website
   <img width="1909" height="1008" alt="Screenshot 2025-10-07 190920" src="https://github.com/user-attachments/assets/3e797ef6-72d9-4030-8427-e97c68c0d218" />
2. Basic Conversation
   <img width="1910" height="985" alt="Screenshot 2025-10-07 190934" src="https://github.com/user-attachments/assets/bcc4cff2-bb8d-42dc-9961-585fe210cb9e" />
3. Contd...
   <img width="1902" height="983" alt="Screenshot 2025-10-07 190947" src="https://github.com/user-attachments/assets/bfe65d1f-d32b-4021-b200-1206ce1e1ed6" />
4. Chat History
   <img width="565" height="992" alt="Screenshot 2025-10-07 191826" src="https://github.com/user-attachments/assets/78b4aa92-9ed4-49a6-88f6-7994b148f5ac" />
5. User Authentication in the Top right corner
   <img width="1918" height="987" alt="Screenshot 2025-10-07 191844" src="https://github.com/user-attachments/assets/8f6c7f1b-e4bf-45f8-bbfd-f6f07cc32d14" />
#Getting Started ⚡
Setup Instructions

Clone the Repository

git clone https://github.com/jayant200803/AIPoweredChatPlatform.git
cd AIPoweredChatPlatform


Install Dependencies
For both frontend and backend:

cd client
npm install
cd ../server
npm install


Set Up Environment Variables
Create a .env file inside the server folder and add:

OPENAI_API_KEY=your_openai_api_key
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000


Run the Application

# Run backend
cd server
npm start

# Run frontend
cd client
npm start


Access the App
Open your browser and go to:
👉 http://localhost:3000

#Future Enhancements 💡
🔄 Implement chat streaming for real-time token response.

🧍 Add user profile management & avatars.

🗂️ Enable chat export or sharing features.

☁️ Deploy on Render / Vercel / Railway with MongoDB Atlas integration.








