import { Button } from "@/components/ui/button";
import { AuthContext } from "@/context/auth-context";
import React, { useContext } from "react";

const StudentHomePage = () => {
  const { resetCredentials } = useContext(AuthContext);

  const handleLogout = () => {
    resetCredentials();
    sessionStorage.clear();
  };

  return (
    <div>
      <Button onClick={handleLogout}>Log Out</Button>
    </div>
  );
};

export default StudentHomePage;
