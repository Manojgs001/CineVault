# 🎬 CineVault: Cinematic Movie Database

![Live Status](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Stack-Node.js_|_Express_|_MongoDB_|_Vanilla_JS-blue?style=for-the-badge)

CineVault is a production-ready cinematic database application. The frontend was constructed without heavy frameworks, utilizing Vanilla JavaScript and custom CSS to achieve a premium, glass-like aesthetic with dynamic modals and smooth animations. The backend is powered by a Node.js/Express proxy server connected to a MongoDB Atlas cluster, ensuring that all user data—including encrypted passwords and personalized watchlists—is stored securely in the cloud. The application integrates seamlessly with the OMDb API to fetch high-quality movie data and posters, while utilizing environment variables to maintain strict security standards in production.

**🔴 Live Demo:** [https://cinevault-ixr3.onrender.com](https://cinevault-ixr3.onrender.com)

---

## ✨ Features

- **Secure Authentication:** User registration and login system with industry-standard `bcryptjs` password hashing.
- **Persistent Sessions & Cloud Storage:** Log in securely across devices. User profiles and favorite movie watchlists are stored persistently in a remote MongoDB Atlas database.
- **Backend API Proxy:** A secure Node.js proxy layer protects sensitive OMDb API keys from being exposed on the client side.
- **Personal Watchlist:** Save your favorite movies to a personal, persistent dashboard by clicking the ⭐ icon on any movie card.
- **Rich Movie Data:** Powered by the OMDb API, featuring high-quality posters, plots, ratings, genres, and cast details.
- **Cinematic Modals:** Beautiful, responsive pop-up modals using Glassmorphism CSS design principles.
- **Where to Watch Integration:** Direct integration with JustWatch and Google to instantly find where a movie is legally available to stream or buy.
- **YouTube Trailers:** Bulletproof integration to instantly search and watch official movie trailers on YouTube.

## 🛠️ Tech Stack

- **Frontend:** HTML5, Vanilla JavaScript, Custom CSS (Glassmorphism design, CSS Grid/Flexbox)
- **Backend:** Node.js, Express.js (RESTful API architecture)
- **Security:** `bcryptjs` for cryptographic password hashing
- **Data Storage:** MongoDB Atlas (Cloud Database) & Mongoose ORM
- **External APIs:** OMDb API (Open Movie Database)
- **Hosting/Deployment:** Render (Web Service)

## 🚀 Local Development

Follow these steps to run the application locally on your machine.

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- A free [MongoDB Atlas](https://www.mongodb.com/atlas/database) cluster (or local MongoDB server)
- A free API key from [OMDb API](https://www.omdbapi.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Manojgs001/CineVault.git
   cd CineVault
   ```

2. **Install backend dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env` file in the root of the project and add your secret keys:
   ```env
   MONGODB_URI=your_mongodb_atlas_connection_string
   OMDB_API_KEY=your_omdb_api_key
   ```

4. **Start the backend server:**
   ```bash
   npm start
   ```

5. **Open the Application:**
   Open your web browser and navigate to `http://localhost:3000`

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 
Feel free to check out the issues page if you want to contribute.

## 📝 License

This project is open-source and available under the MIT License.
