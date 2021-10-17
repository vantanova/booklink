import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFezXe7_spZ9jgbbrkiM-ujHXaXomk5ks",
  authDomain: "speedylink-ef41c.firebaseapp.com",
  projectId: "speedylink-ef41c",
  storageBucket: "speedylink-ef41c.appspot.com",
  messagingSenderId: "809299087741",
  appId: "1:809299087741:web:4cccaf8f7e9cd28a0dbc14",
  measurementId: "G-ENGHYD8QZP",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getUsers() {
  const usersCol = collection(db, "users");
  const userSnapshot = await getDocs(usersCol);
  const userList = userSnapshot.docs.map((doc) => doc.data());
  return userList;
}

export { getUsers };
export default app;
