// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const config = {
    apiKey: "AIzaSyARGCnvmoqrfFlrOJWqv_H5j7SWhczP3PE",
    authDomain: "clothstore-db-104.firebaseapp.com",
    projectId: "clothstore-db-104",
    storageBucket: "clothstore-db-104.appspot.com",
    messagingSenderId: "959968407976",
    appId: "1:959968407976:web:41cb38940b953f4934ed9d",
    measurementId: "G-2M7EKHWVDR"
  };

  export const createUserProfileDocuments = async (userAuth,additionalData)=>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
      const { displayName,email } = userAuth;
      const createdAt = new Date();
      try{
        //store to the firebase
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error){
        console.log('error creating user',error.message);
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider)

  export default firebase; 