import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  const user= useSelector(selectUser);
  const dispatch = useDispatch();
  // const navigate=useNavigate();
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
        dispatch(logout());
      }
    });
    return  unsubscribe;
  }, [dispatch]);
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          {!user ? (
            <Route path="/" element={<LoginScreen />} />
          ) : (<>
            <Route exact path="/" element={<HomeScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            </>)}
        </Routes>{" "}
      </BrowserRouter>
    </div>
  );
}

export default App;
