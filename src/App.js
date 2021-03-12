import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import EmployeeCard from "./components/Employee";
import API from "./utils/API";


function App() {
  const [employeeArray, setEmployeeArray] = useState([])
  useEffect(() => {
    API.getUsers()
      .then(res => { setEmployeeArray(res.data.results) })
  }, [])

  return (
    <Wrapper>
      <Title>Employee Directory</Title>
      {employeeArray.map((employee) => {
        return <EmployeeCard
          firstName={employee.name.first}
          lastName={employee.name.last}
          phone={employee.phone}
          email={employee.email}
        />
      })}
    </Wrapper>
  );
}

export default App;