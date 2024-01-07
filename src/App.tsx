import { Routes, Route } from "react-router-dom";

import {
  Home,
  Explore,
  Saved,
  CreatePost,
  Profile,
  EditPost,
  PostDetails,
  UpdateProfile,
  AllUsers,
} from "@/_root/pages";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import SignupForm from "@/_auth/forms/SignupForm";
import SigninForm from "@/_auth/forms/SigninForm";
import { Toaster } from "@/components/ui/toaster";

import "./globals.css";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/mfmgram/sign-in" element={<SigninForm />} />
          <Route path="/mfmgram/sign-up" element={<SignupForm />} />
        </Route>

        {/* private routes */}
        <Route element={<RootLayout />}>
          <Route path="/mfmgram/" element={<Home />} />
          <Route path="/mfmgram/explore" element={<Explore />} />
          <Route path="/mfmgram/saved" element={<Saved />} />
          <Route path="/mfmgram/all-users" element={<AllUsers />} />
          <Route path="/mfmgram/create-post" element={<CreatePost />} />
          <Route path="/mfmgram/update-post/:id" element={<EditPost />} />
          <Route path="/mfmgram/posts/:id" element={<PostDetails />} />
          <Route path="/mfmgram/profile/:id/*" element={<Profile />} />
          <Route path="/mfmgram/update-profile/:id" element={<UpdateProfile />} />
        </Route>
      </Routes>

      <Toaster />
    </main>
  );
};

export default App;
