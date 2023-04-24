import { signOut } from "@firebase/auth";
import { deleteDoc, doc } from "firebase/firestore";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { currentUserLogoutState } from "../atoms/currentUserLogoutState";
import { currentUserProfileState } from "../atoms/currentUserProfileState";
import { currentUserState } from "../atoms/currentUserState";
import { auth, firestore } from "./firebase/clientApp";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {

const [currentUser, setCurrentUserState] = useRecoilState(currentUserState);
const [currentUserProfile, setCurrentUserProfileState] = useRecoilState(
  currentUserProfileState
);
  const [userLogout, setCurrentUserLogoutState] = useRecoilState(currentUserLogoutState)

const handleLogout = async () => {
    await deleteDoc(doc(firestore, "vs-users", `userId-${currentUser.id}`));
    setCurrentUserState((prev) => ({
      ...prev,
      id: "",
      status: "",
      online: "",
      email: "",
    }));
    setCurrentUserProfileState((prev) => ({
      ...prev,
      id: "",
      name: "",
      status: "",
      profileImage: "",
      companyName: "",
      companyProfile: "",
      workProfile: "",
      pr: "",
      pet: "",
      hobbies: "",
    }));
    setCurrentUserLogoutState((prev) => ({
      ...prev,
      currentUserLoggedOut: true
    }))
    signOut(auth);
    localStorage.removeItem('recoil-persist')
  };

  // useEffect to perform unload events in layout
  // useEffect(() => {
    
  //   window.addEventListener('beforeunload', alertUser)
  //   window.addEventListener('unload', handleEndConcert)

  //   return () => {
  //     window.removeEventListener('beforeunload', alertUser)
  //     window.removeEventListener('unload', handleEndConcert)
  //     handleLogout()
  //   }
    
  // }, [])

  //
  const alertUser = (event: BeforeUnloadEvent) => {
    event.preventDefault()
    event.returnValue = 'You will get logged out.'
  }

  // message to logout the user if a user close the window
  const handleEndConcert = async () => {
   handleLogout() 
  }

  return (
    <>
      <div
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Navbar /> 
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

// style={{
//             flexGrow: "1",
//             backgroundRepeat: "no-repeat",
//             backgroundPosition: "center",
//             backgroundImage: `url(${appBg})`,
//           }}
