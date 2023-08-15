import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  where,
  query,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDPdazwSZCgaPGS40YQiRhd6pofZhSIw10",
  authDomain: "vanlife-2b577.firebaseapp.com",
  projectId: "vanlife-2b577",
  storageBucket: "vanlife-2b577.appspot.com",
  messagingSenderId: "275950036157",
  appId: "1:275950036157:web:37eb0b03420de67b2e43d4",
};

// Initialize Firebase app and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Reference to the "vans" collection in Firestore
const vansCollectionRef = collection(db, "vans");

// Function to fetch all vans
export async function getVans() {
  const querySnapshot = await getDocs(vansCollectionRef);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArr;
}

// Function to fetch a specific van by ID
export async function getVan(id) {
  const docRef = doc(db, "vans", id);
  const vanSnapshot = await getDoc(docRef);
	
	
  console.log({
		...vanSnapshot.data(),
    id: vanSnapshot.id,
  });
	

  console.log({
		...vanSnapshot.data(),
    id: vanSnapshot.id,
  });
	
  return {
    ...vanSnapshot.data(),
    id: vanSnapshot.id,
  };
}

// Function to fetch vans owned by a specific host
export async function getHostVans() {
  const q = query(vansCollectionRef, where("hostId", "==", "123"));
  const querySnapshot = await getDocs(q);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return dataArr;
}

// Function to log in a user
export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    const err = {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
    throw err;
  }

  return data;
}
