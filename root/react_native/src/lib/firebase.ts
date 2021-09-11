import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import Constants from "expo-constants";
import { Destination } from "../types/Destination";

if (!firebase.apps.length) {
  firebase.initializeApp(Constants.manifest?.extra!.firebase);
}

//firestore databaseからデータを取得
export const getDestination = async () => {
  const snapshot = await firebase
    .firestore()
    .collection("destination")
    .orderBy("id", "desc")
    .get();
  const destinations = snapshot.docs.map(
    (doc) => ({ ...doc.data(), id: doc.id } as Destination)
  );
  return destinations;
};

// export const signin = async () => {
//   const userCredential = await firebase.auth().signInAnonymously();
//   const { uid } = userCredential.user!;
//   const userDoc = await firebase.firestore().collection("users").doc(uid).get();

//   if (!userDoc.exists) {
//     console.log("ユーザー登録なし");
//     await firebase.firestore().collection("users").doc(uid).set(initialUser);
//     return {
//       ...initialUser,
//       id: uid,
//     } as User;
//   } else {
//     console.log("ユーザー登録あり");
//     return {
//       id: uid,
//       ...userDoc.data(),
//     } as User;
//   }
// };

// export const updateUser = async (userId: string, params: any) => {
//   await firebase.firestore().collection("users").doc(userId).update(params);
// };

// export const createReviewRef = async (shopId: string) => {
//   return await firebase
//     .firestore()
//     .collection("shops")
//     .doc(shopId)
//     .collection("reviews")
//     .doc();
// };

// export const uploadImage = async (uri: string, path: string) => {
//   // uriをblobに変換
//   const localUri = await fetch(uri);
//   const blob = await localUri.blob();
//   // storageにupload
//   const ref = firebase.storage().ref().child(path);

//   let downloadUrl = "";
//   try {
//     await ref.put(blob);
//     downloadUrl = await ref.getDownloadURL();
//   } catch (err) {
//     console.log(err);
//   }
//   return downloadUrl;
// };
// export const getReviews = async (shopId: string) => {
//   const reviewDocs = await firebase
//     .firestore()
//     .collection("shops")
//     .doc(shopId)
//     .collection("reviews")
//     .orderBy("createdAt", "desc")
//     .get();
//   return reviewDocs.docs.map(
//     (doc) => ({ ...doc.data(), id: doc.id } as Review)
//   );
// };
