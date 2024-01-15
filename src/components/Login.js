import React, { useRef, useState } from "react";
import { SHOPGURU1 } from "../utils/constants";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [login, setLogin] = useState(true);
  const [errorMesage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);

  const handleClick = () => {
    setLogin(!login);
  };

  const handleNavigation = () => {
    // Navigation logic after form validation.
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (!confirmPassword) {
      if (password.current.value !== confirmPassword.current.value)
        setErrorMessage("Re-type Password!");
    }

    if (message) return;

    // LOGIN AND SIGNUP LOGIC - FIREBASE
    if (!login) {
      // SIGNUP
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
        })
        // 3:46:00 -> Netflix GPT Project
        // .then(() => {
        //   const { uid, email } = auth.currentUser;
        //   dispatch(addUser({ uid: uid, email: email }));
        //   navigate("/browse");
        // })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ": " + errorMessage);
        });
    } else {
      // LOGIN
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ": " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="flex">
        <div className="w-1/2 flex justify-center items-center">
          {
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-xl my-3 tracking-wide">
                {login ? `Login` : `Signup`}
              </h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="flex flex-col gap-2"
              >
                <p>Email</p>
                <input
                  className="p-1"
                  type="email"
                  name="email"
                  ref={email}
                  placeholder="Enter your email"
                />
                <p>Password</p>
                <input
                  className="p-1"
                  type="password"
                  name="password"
                  ref={password}
                  placeholder="Enter password"
                />
                {!login && (
                  <>
                    <p>Confirm Password</p>
                    <input
                      className="p-1"
                      type="password"
                      name="password"
                      ref={confirmPassword}
                      placeholder="Confirm password"
                    />
                  </>
                )}

                {errorMesage && (
                  <div className="text-red-700 font-semibold">
                    {errorMesage}
                  </div>
                )}

                {login ? (
                  <>
                    <button
                      className="bg-black text-white font-semibold px-4 py-2 rounded-md my-3"
                      onClick={() => handleNavigation()}
                    >
                      Login
                    </button>
                    <div className="flex gap-2">
                      <p>Don't Have an account?</p>
                      <button
                        className="font-bold hover:cursor-pointer"
                        onClick={() => handleClick()}
                      >
                        Sign up
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <button
                      className="bg-black text-white font-semibold px-4 py-2 rounded-md my-3"
                      onClick={() => handleNavigation()}
                    >
                      Signup
                    </button>
                    <div className="flex gap-2">
                      <p>Already have an account?</p>
                      <button
                        className="font-bold hover:cursor-pointer"
                        onClick={() => handleClick()}
                      >
                        Login
                      </button>
                    </div>
                  </>
                )}
              </form>
            </div>
          }
        </div>
        <div className="w-1/2">
          <img src={SHOPGURU1} alt="intro" />
        </div>
      </div>
    </div>
  );
};

export default Login;
