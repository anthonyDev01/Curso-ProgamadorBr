import './style.css'
import { Card } from '../../components/card'
import { useEffect, useState } from 'react';

function App() {
  const [studentName, setStudentName] = useState("");
  const [student, setStudent] = useState([]);
  const [user, setUser] = useState({name: "", avatar: ""});
  const avatarUndefined = "./images/avatar.png"
  
  const handleAddStudent = (student) =>{
    let newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    }
   
    if(studentName)
      setStudent(prevState => [...prevState, newStudent]);
  }

  useEffect(() =>{
    fetch("https://api.github.com/users/anthonyDev01")
    .then(res => res.json())
    .then(data => {
      setUser({
        name: data.name,
        avatar: data.avatar_url
      })
    })
  }, [])

  return (
    <div className='container'>
      <header>

        <h1>Lista de presença</h1>
        <div>
          <strong>{user.name ?? studentName}</strong>
          <img src={user.avatar ?? avatarUndefined} alt='undefined'></img>
          
        </div>    
      </header> 

      <input 
        type='text'
        placeholder='digite seu nome'
        onChange={e => setStudentName(e.target.value)}
      />
      <button onClick={handleAddStudent}>Adicionar</button>

      {
        student.map(student => (
          <Card 
            key={student.time}
            name={student.name}
            time={student.time}
           />
        ))
      }
      
    </div>
  )
}

export default App;
