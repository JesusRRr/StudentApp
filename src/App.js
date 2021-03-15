import { useState, useEffect} from 'react';
import './App.css';
import { getAllStudents } from "./clients/studentClient"

function App() {
  const [students, setStudents] = useState([]);
  const fetchStudents = () => 
    getAllStudents()
      .then(res=> res.json())
      .then(data => setStudents(data))

  useEffect(() =>{
    console.log("component is mounted");
    fetchStudents();
  }, []);

  return <div> {students.length} </div>;

}

export default App;
