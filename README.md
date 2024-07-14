# Firebase Contact App

A simple and efficient contact management application built using React and Firebase, with Tailwind CSS for styling. This app allows users to add, view, edit, and delete contacts with real-time updates powered by Firebase.

## Features

- **Add Contacts**: Easily add new contacts to your list.
- **View Contacts**: View a list of all contacts with real-time updates.
- **Edit Contacts**: Modify contact details.
- **Delete Contacts**: Remove contacts from your list.
- **Responsive Design**: Optimized for both desktop and mobile screens.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Firebase**: A platform for building web and mobile applications, used for real-time database and authentication.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/tanujgupta18/Firebase-Contact-App.git
   cd Firebase-Contact-App
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up Firebase:**

   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Create a Firestore database.
   - Copy your Firebase configuration and paste it into a new file named `firebase.js` in the `src/config` directory:

     ```javascript
     import { initializeApp } from 'firebase/app';
     import { getFirestore } from 'firebase/firestore';

     const firebaseConfig = {
       apiKey: 'YOUR_API_KEY',
       authDomain: 'YOUR_AUTH_DOMAIN',
       projectId: 'YOUR_PROJECT_ID',
       storageBucket: 'YOUR_STORAGE_BUCKET',
       messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
       appId: 'YOUR_APP_ID',
     };

     const app = initializeApp(firebaseConfig);
     const db = getFirestore(app);

     export { db };
     ```

4. **Run the app:**

   ```bash
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Usage

1. **Adding Contacts**: Click the plus icon to open the contact form. Fill in the details and submit.
2. **Viewing Contacts**: Contacts are listed on the main page.
3. **Editing Contacts**: Click the edit icon on a contact card to modify details.
4. **Deleting Contacts**: Click the delete icon on a contact card to remove the contact.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

---
