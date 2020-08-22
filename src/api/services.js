import db from "../db";

export const fetchService = id => db.collection("services").doc(id).get().then(snapshot => ({id: snapshot.id, ...snapshot.data()}));
export const fetchServices = () => db.collection("services").get().then(snapshot => snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
export const fetchUserServices = userId => db.collection("services").where("user", "==", userId).get().then(snapshot => snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
export const createService = newService => db.collection("services").add(newService).then(docRef => docRef.id);
