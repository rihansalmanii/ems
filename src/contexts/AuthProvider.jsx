import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    const { employees, admin } = getLocalStorage();
    //  empty arrays if data is null (in case localStorage was cleared)
    setEmployees(employees || []);
    setAdmin(admin || []);
  }, []);


  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  return (
    <AuthContext.Provider value={{ employees, setEmployees, admin }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
