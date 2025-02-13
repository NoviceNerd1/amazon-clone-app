import { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { Routes, Route } from "react-router-dom"; // ✅ Removed Router
import Orders from "./Orders";
import Login from "./Login";
import Checkout from "./Checkout";
import Payment from "./Payment"; // ✅ Missing Import Fixed
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // ✅ Fixed the function name to `onAuthStateChanged`
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/orders"
          element={
            <>
              <Header />
              <Orders />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />
        <Route
          path="/payment"
          element={
            <>
              <Header />
              <Payment />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
