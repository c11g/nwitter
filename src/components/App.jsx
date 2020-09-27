import React, { useEffect, useState } from "react";
import Router from "components/Router";
import { authService } from "fbase";

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    const unsubscribe = authService.onAuthStateChanged((user) => {
      setUserObj(user);
      setInit(true);
    });
    return () => unsubscribe();
  }, []);
  return (
    <>
      {init ? (
        <Router isLogin={Boolean(userObj)} userObj={userObj} />
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}

export default App;
