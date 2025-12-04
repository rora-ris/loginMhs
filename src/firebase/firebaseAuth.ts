import AsyncStorage from '@react-native-async-storage/async-storage';
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";

export const login = async (email: string, password: string) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  await AsyncStorage.setItem("userUid", userCredential.user.uid);
  await AsyncStorage.setItem("isLoggedIn", "1");
  return userCredential.user;
};

export const logout = async () => {
  await signOut(auth);
  await AsyncStorage.removeItem("userUid");
  await AsyncStorage.removeItem("isLoggedIn");
};