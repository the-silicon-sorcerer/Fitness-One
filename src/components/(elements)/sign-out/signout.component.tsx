"use client";

import { signOut } from "next-auth/react";

const Signout = () => {
  return <button onClick={() => void signOut()}>Sign out</button>;
};

export default Signout;
