import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/Admin/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./contexts/AuthProvider";

const App = () => {


  const [user, setUser] = useState('');
  const [loggedUserData, setLoggedUserData] = useState(null);

  const authData = useContext(AuthContext);

  // Check for logged in user on mount and when authData loads
  useEffect(() => {
    if (authData && authData.employees && authData.admin) {
      const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
      if (loggedInUser && loggedInUser.role) {
        setUser(loggedInUser.role);
      }
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    // Ensure authData is loaded before checking
    if (!authData?.admin || !authData?.employees) {
      console.error("Auth data not loaded yet");
      return;
    }

    const isAdmin = authData.admin.find(
      (a) => a.email === email && a.password === password
    );
    const isEmployee = authData.employees.find(
      (e) => e.email === email && e.password === password
    );

    if (isAdmin) {
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
      setUser('admin');
      setLoggedUserData(isAdmin);
    } else if (isEmployee) {
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }));
      setUser('employee');
      setLoggedUserData(isEmployee);
    } else {
      alert("Invalid email or password!");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setUser('');
    setLoggedUserData(null);
  };



  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" && <AdminDashboard setUser={handleLogout} data={loggedUserData} />}
      {user === "employee" && <EmployeeDashboard setUser={handleLogout} data={loggedUserData} />}
    </>
  );
};

export default App;



