import React, { useEffect, useState } from "react";
import Router from "components/Router";
import { authService } from "fbase";

function App() {
  const [init, setInit] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
      setUserObj(user);
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? (
        <Router isLogin={isLogin} userObj={userObj} />
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}

export default App;
