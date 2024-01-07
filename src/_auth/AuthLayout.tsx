import { Outlet, Navigate } from "react-router"

import SideImg  from '../../public/assets/images/side-img.svg';

const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/mfmgram/"/>
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center">
            <Outlet/>
          </section>

          <img 
            src={SideImg}
            alt="logo" 
            className="hidden xl:block h-screen w-1/2 object-cover
            bg-no-repeat"
          />
        </>
      )}
    </>
  )
}

export default AuthLayout