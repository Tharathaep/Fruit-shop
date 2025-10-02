import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("สมัครสมาชิกสำเร็จ!");
    } catch (error) {
      alert(error.message);
    }
  };

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("เข้าสู่ระบบสำเร็จ!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>เข้าสู่ระบบ / สมัครสมาชิก</h2>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="รหัสผ่าน" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={register}>สมัครสมาชิก</button>
      <button onClick={login}>เข้าสู่ระบบ</button>
    </div>
  );
};

export default Login;
