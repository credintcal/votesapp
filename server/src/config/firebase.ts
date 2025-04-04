import * as admin from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config();

// Initialize Firebase Admin SDK
// In production, you would use a service account key file
// For local development, we'll use environment variables
try {
  // Check if app is already initialized
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.applicationDefault(), // Uses GOOGLE_APPLICATION_CREDENTIALS env var
      // Alternative for development:
      // credential: admin.credential.cert({
      //   projectId: process.env.FIREBASE_PROJECT_ID,
      //   clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      //   privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n')
      // }),
      databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`
    });
  }
  
  console.log('Firebase Admin SDK initialized');
} catch (error) {
  console.error('Error initializing Firebase Admin SDK:', error);
}

export const auth = admin.auth();
export const firestore = admin.firestore();

export default admin; 