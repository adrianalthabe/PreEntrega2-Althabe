import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth, googleProvider } from "../config/firebase";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const singIn = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const singInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  return (
    <div>
      <span>Usuario: {auth?.currentUser?.email}</span>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={singIn}>Ingresar</button>
      <button onClick={singInWithGoogle}>Ingresar con Google</button>
    </div>
  );
}

export default Auth;
