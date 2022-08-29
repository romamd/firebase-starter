import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

export const googleAuth = {
  signIn: async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const userCredential = await signInWithPopup(auth, provider);
    const { user } = userCredential;
    return user;
  },
  signOut: async () => {
    const auth = getAuth();
    await signOut(auth);
  },
};