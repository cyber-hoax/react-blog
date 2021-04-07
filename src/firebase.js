import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCRxoaMt7Qp4xakikJJNyhEJO_AA5zHupU',
  authDomain: 'frebase-blog.firebaseapp.com',
  projectId: 'frebase-blog',
  storageBucket: 'frebase-blog.appspot.com',
  messagingSenderId: '229727608667',
  appId: '1:229727608667:web:67c0c6d61769a04ac6047e',
  measurementId: 'G-MVR6P3T84Z',
};

firebase.initializeApp(firebaseConfig);


export const db = firebase.firestore()



export default firebase