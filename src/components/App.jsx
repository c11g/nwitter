import React, { useEffect, useState } from "react";
import Router from "components/Router";
import { authService } from "fbase";
import style from "./App.module.scss";

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    const unsubscribe = authService.onAuthStateChanged((user) => {
      if(user){
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          photoURL: user.photoURL,
        });
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
    return () => unsubscribe();
  }, []);
  const refreshUser = async() => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      photoURL: user.photoURL,
    });
  }
  return (
    <>
      {init ? (
        <Router isLogin={Boolean(userObj)} userObj={userObj} refreshUser={refreshUser} />
        ) : (
        <div className={style.loading}>Loading</div>
      )}
    </>
  );
}

export default App;