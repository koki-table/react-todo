import React, { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";
import { firebaseApp } from "../../firebase/firebase.config";

/* 「Link」をimport↓ */
import { Navigate, Link } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
import { collection, deleteDoc, addDoc, getDocs, setDoc, doc, orderBy, limit, endAt, getDoc, getDocFromCache, onSnapshot, startAt, query, where, collectionGroup } from "firebase/firestore";

const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(
        firebaseApp.fireauth,
        registerEmail,
        registerPassword,
      );
    } catch(error) {
      alert("正しく入力してください");
    }

    // database(firestoreの登録)
    const usersCollectionRef = collection(firebaseApp.firestore, 'users');
    // eslint-disable-next-line no-unused-vars
    const documentRef = addDoc(usersCollectionRef, {
      mail: registerEmail,
      password: registerPassword,
    });
  };

  const [user, setUser] = useState("");

  useEffect(() => {
    onAuthStateChanged(firebaseApp.fireauth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <>
      {user ? (
        <Navigate to={`/`} />
      ) : (
        <>
          <h1>新規登録</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>メールアドレス</label>
              <input
                name="email"
                type="email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
              />
            </div>
            <div>
              <label>パスワード</label>
              <input
                name="password"
                type="password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
              />
            </div>
            <button>登録する</button>
            {/* ↓リンクを追加 */}
            <p>ログインは<Link to={`/login/`}>こちら</Link></p>
          </form>
        </>
      )}
    </>
  );
};

export default Register;