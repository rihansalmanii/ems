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

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('loggedInUser'));
    if(storedData && storedData.role) {
      setUser(storedData.role);
      setLoggedUserData(storedData.data)
    };
  }, [])




  const handleLogin = (email, password) => {
    // ensuring authData is loaded before use
    if(authData) {
      const { employees, admin } = authData;
      console.log(employees)

      const isEmployee = employees.find((e) => e.email === email && e.password === password)

      const isAdmin = admin.find((e) => e.email === email && e.password === password)

      if(isEmployee) {
        setUser('employee')
        setLoggedUserData(isEmployee)

        localStorage.setItem('loggedInUser', JSON.stringify({
          role: 'employee',
          data: isEmployee,
        }))
      } else if(isAdmin) {
        setUser('admin')
        setLoggedUserData(isAdmin)

        localStorage.setItem('loggedInUser', JSON.stringify({
          role: 'admin',
          data: isAdmin,
        }))
      } else {
        alert("Invalid Credentials")
      }
    }

  };
  // localStorage.removeItem('loggedInUser')

  const handleLogout = () => {
    setUser(null);
    setLoggedUserData(null);
    localStorage.removeItem('loggedInUser');
  };



  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" && <AdminDashboard onLogout={handleLogout} data={authData} />}
      {user === "employee" && <EmployeeDashboard onLogout={handleLogout} data={loggedUserData} />}
    </>
  );
};

export default App;



