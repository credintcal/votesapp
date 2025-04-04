# VOTESAPP - Real-Time Public Opinion Platform

VOTESAPP is a 100% free, real-time public opinion platform for political parties using only lifetime-free tools. The platform allows political leaders to conduct household surveys, collect votes, and visualize real-time public sentiment.

## 🚀 Features

- **Voter Authentication & Security**: Secure login using Voter ID authentication with OTP verification via Firebase Auth
- **Admin Panel**: Create, manage, and analyze polls with real-time visualizations
- **Browser Notifications**: Keep users engaged with updates on new polls and results
- **Mobile-Friendly Interface**: Responsive design with multi-language support
- **Real-Time Results**: Interactive charts and heatmaps for geographic visualization
- **Free Hosting**: Built with entirely free, sustainable technologies

## 🛠️ Technology Stack

### Frontend
- React with TypeScript
- TailwindCSS for styling
- React Router for navigation
- Firebase Authentication
- Leaflet.js with OpenStreetMap (for future implementation)

### Backend
- Node.js with Express
- Firebase Authentication and Cloud Messaging
- Supabase/PostgreSQL for database

### Deployment
- Frontend: Netlify (Free Tier)
- Backend: Railway/Render (Free Tier)
- Database: Supabase/Firebase (Free Tier)

## 🔧 Setup Instructions

### Prerequisites
- Node.js (v14+)
- npm or yarn
- Firebase account
- Supabase account

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/votesapp.git
   cd votesapp
   ```

2. Install dependencies for the full project
   ```
   npm run install-all
   ```
   This will install dependencies for the root project, client, and server.

3. Configure environment variables
   - Create `.env` files from the `.env.example` files in both server and client directories
   - Add your Firebase and Supabase credentials

4. Start the development servers
   ```
   npm start
   ```
   This will start both the backend server and the frontend development server.

### Development Workflow

- Backend server runs on `http://localhost:5000`
- Frontend development server runs on `http://localhost:3000`
- Edit files in `client/src` for frontend changes
- Edit files in `server/src` for backend changes

## 📋 Project Structure

```
votesapp/
├── client/              # Frontend React application
│   ├── public/          # Static files
│   └── src/             # React source code
│       ├── components/  # Reusable components
│       ├── layouts/     # Page layouts
│       └── pages/       # Page components
│
├── server/              # Backend Node.js application
│   ├── src/             # Server source code
│   │   ├── config/      # Configuration files
│   │   ├── controllers/ # Request controllers
│   │   ├── models/      # Data models
│   │   └── routes/      # API routes
│   └── dist/            # Compiled server code
│
└── README.md            # Project documentation
```

## 🔑 Authentication Flow

1. **User Registration**: Users register with their Voter ID and phone number
2. **OTP Verification**: A one-time password is sent to the user's phone
3. **Authentication**: After verifying the OTP, the user is authenticated
4. **Location Verification**: The user's location is verified for accurate polling

## 📊 Admin Features

1. **Dashboard**: Overview of all polls, votes, and user metrics
2. **Poll Management**: Create, edit, and delete polls
3. **Results Analysis**: Detailed breakdown of voting results with charts
4. **Geographic Visualization**: Heatmap showing vote distribution by location

## 📱 User Features

1. **Home Page**: Browse active polls
2. **Poll Details**: View and vote on specific polls
3. **Results**: See real-time results after voting
4. **Notifications**: Receive updates on new polls and results

## 🚀 Deployment

### Frontend Deployment (Netlify)
1. Create a new Netlify site
2. Connect your GitHub repository
3. Set the build command to `cd client && npm run build`
4. Set the publish directory to `client/build`

### Backend Deployment (Railway/Render)
1. Create a new Railway/Render project
2. Connect your GitHub repository
3. Set up the environment variables
4. Set the build command to `cd server && npm run build`
5. Set the start command to `cd server && npm start`

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Firebase for authentication and cloud messaging
- Supabase for database services
- React and Express communities
- TailwindCSS for styling utilities
- OpenStreetMap for map data 