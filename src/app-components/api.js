import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
	where,
	query
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDPdazwSZCgaPGS40YQiRhd6pofZhSIw10",
  authDomain: "vanlife-2b577.firebaseapp.com",
  projectId: "vanlife-2b577",
  storageBucket: "vanlife-2b577.appspot.com",
  messagingSenderId: "275950036157",
  appId: "1:275950036157:web:37eb0b03420de67b2e43d4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionRef = collection(db, "vans");

export async function getVans() {
  const querySnapshot = await getDocs(vansCollectionRef);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  console.log(querySnapshot);
  console.log(querySnapshot.docs);
  return dataArr;
}

export async function getVan(id) {
	const docRef = doc(db, "vans", id);
  const vanSnapshot = await getDoc(docRef);
	
  console.log({
		...vanSnapshot.data(),
    id: vanSnapshot.id,
  });
	
  return {
		...vanSnapshot.data(),
    id: vanSnapshot.id,
  };
}


export async function getHostVans() {
	const q = query(vansCollectionRef, where("hostId", "==", "123"))
	const querySnapshot = await getDocs(q);
	const dataArr = querySnapshot.docs.map((doc) => ({
		...doc.data(),
		id: doc.id,
	}));
	console.log(querySnapshot);
	console.log(querySnapshot.docs);
	return dataArr;
}


/* export async function getVans(id) {
	const url = id ? `/api/vans/${id}` : "/api/vans"
	const res = await fetch(url)
	if (!res.ok) {
			throw {
					message: "Failed to fetch vans", 
					statusText: res.statusText,
					status: res.status
			}
	}
	const data = await res.json()
	return data.vans
} */

/* export async function getHostVans(id) {
  const url = id ? `/api/host/vans/${id}` : "/api/host/vans";
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
} */

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
		throw err
  }

  return data;
}
