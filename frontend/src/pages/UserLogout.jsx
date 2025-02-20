import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/users/logout`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (response.status === 200) {
          localStorage.removeItem("token");
          navigate("/login"); // ✅ Now it's safe inside useEffect
        }
      } catch (error) {
        console.error("Logout failed:", error);
      }
    };

    logoutUser();
  }, [navigate]); // ✅ useEffect ensures it runs only once

  return <div>Logging out...</div>;
};

export default UserLogout;
