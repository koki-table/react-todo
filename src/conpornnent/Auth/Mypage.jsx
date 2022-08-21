import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseApp } from "../../firebase/firebase.config";

import TodoPage from '../../pages/TodoPage';

import {
  useNavigate,
  Navigate
} from "react-router-dom";

const Mypage = () => {
  const [user, setUser] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(firebaseApp.fireauth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  const navigate = useNavigate();

  const logout = async () => {
    await signOut(firebaseApp.fireauth);
    navigate("/login/");
  }

  return (
    <>
      {!loading && (
        <>
          {!user ? (
            <Navigate to={`/login/`} />
          ) : (
            <>
              <h1>マイページ</h1>
              <p>{user?.email}</p>
              <button onClick={logout}>ログアウト</button>
              <TodoPage/>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Mypage;