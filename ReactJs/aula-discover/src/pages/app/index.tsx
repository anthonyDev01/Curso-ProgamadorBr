import "./style.css";
import { Card, CardProps } from "../../components/card";
import { useEffect, useState } from "react";

type ProfileResponse = {
  name: string;
  avatar_url: string;
};

type User = {
  name: string;
  avatar: string;
}

function App() {
  const [studentName, setStudentName] = useState("");
  const [student, setStudent] = useState<CardProps[]>([]);
  const [user, setUser] = useState<User>({} as User);
  const avatarUndefined = "./images/avatar.png";

  const handleAddStudent = () => {
    let newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    if (studentName) setStudent((prevState) => [...prevState, newStudent]);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.github.com/users/jaoov");
      const data = (await response.json()) as ProfileResponse;

      setUser({
        name: data.name,
        avatar: data.avatar_url,
      });
    }

    fetchData();
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Lista de presença</h1>
        <div>
          <strong>{user.name ?? studentName}</strong>
          <img src={user.avatar ?? avatarUndefined} alt="undefined"></img>
        </div>
      </header>

      <input
        type="text"
        placeholder="digite seu nome"
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button onClick={handleAddStudent}>Adicionar</button>

      {student.map((student) => (
        <Card key={student.time} name={student.name} time={student.time} />
      ))}
    </div>
  );
}

export default App;
