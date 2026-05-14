import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/Admin/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./contexts/AuthProvider";

const App = () => {
  const [user, setUser] = useState('');

  const authData = useContext(AuthContext);


  useEffect(() => {
    if(authData) {
      const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
      setUser(loggedInUser.role)
      console.log(loggedInUser)
    }
  }, [authData])

  const handleLogin = (email, password) => {
    if(email == 'admin1@example.com' && password == '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}))
    } else if(authData?.employees?.find((e) => e.email == email && e.password == password)) {
      setUser('employee')
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee'}))
    } 
  }


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashboard setUser={setUser}/>
      ) : (
        <EmployeeDashboard setUser={setUser} />
      )}
    </>
  );
};

export default App;
