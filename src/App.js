import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

function App() {
  const users = useSelector(selectUser);
  const user = users;
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //Logged in
        console.log(userAuth);
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email
        }))
      } else {
        //Logged Out
        dispatch(logout);
      }
    });
    return unsubscribe;
  }, []);
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          {!user ? (
            <Route path="/" element={<LoginScreen />} />
          ) : (
            <Route path="/" element={<HomeScreen />} />
          )}
        </Routes>{" "}
      </BrowserRouter>
    </div>
  );
}

export default App;
