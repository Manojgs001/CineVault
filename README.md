# 🎬 Cinematic Movie Database

A modern, full-stack web application that allows users to search for movies, view rich cinematic details, save personal favorites, and find where to stream them legally. Built with a stunning Glassmorphism UI and a secure Node.js backend.

## ✨ Features

- **Secure Authentication:** User registration and login system with industry-standard `bcryptjs` password hashing.
- **Persistent Sessions:** Stay logged in across page reloads using browser `localStorage`.
- **Personal Watchlist:** Users can save their favorite movies to a personal, persistent dashboard by clicking the ⭐ icon.
- **Rich Movie Data:** Powered by the OMDb API, featuring high-quality posters, plots, ratings, genres, and cast details.
- **Cinematic Modals:** Beautiful, responsive pop-up modals using Glassmorphism CSS design principles.
- **Where to Watch Integration:** Direct integration with JustWatch and Google to instantly find where a movie is legally available to stream or buy.
- **YouTube Trailers:** Bulletproof integration to instantly search and watch official movie trailers on YouTube.

## 🛠️ Tech Stack

- **Frontend:** HTML5, Vanilla JavaScript, Custom CSS (Glassmorphism design)
- **Backend:** Node.js, Express.js
- **Security:** `bcryptjs` for cryptographic password hashing
- **Data Storage:** Local JSON filesystem (`user.json`)
- **External APIs:** OMDb API (Open Movie Database)

## 🚀 Getting Started

Follow these steps to run the application locally on your machine.

### Prerequisites

You must have [Node.js](https://nodejs.org/) installed on your computer.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install backend dependencies:**
   ```bash
   npm install
   ```

3. **Start the backend server:**
   ```bash
   node server.js
   ```

4. **Open the Application:**
   Open your web browser and navigate to:
   ```text
   http://localhost:3000
   ```

## 🎥 How to Use

1. **Register/Login:** Create a secure account on the homepage.
2. **Search:** Type the name of any movie (e.g., "Inception", "RRR") in the search bar.
3. **Save Favorites:** Click the ⭐ icon on any movie card to save it to your personal watchlist. View your watchlist by clicking "⭐ My Favorites" in the header.
4. **View Details:** Click on a movie poster to open the detailed modal.
5. **Watch Trailer:** Inside the modal, click "▶ Watch Trailer" to view the official trailer on YouTube, or use the "Where to stream" buttons to find it on Netflix, Hulu, etc.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 
Feel free to check out the issues page if you want to contribute.

## 📝 License

This project is open-source and available under the MIT License.
