import React, { useEffect, useState } from "react";
import { data } from "../../../Data";
import { Link, useResolvedPath, useParams } from "react-router-dom";

export const Aulas = () => {
  const resolvedPath = useResolvedPath();
  const [url, setUrl] = useState("");

  useEffect(() => {
    const newUrl =
      resolvedPath.pathname === "/"
        ? resolvedPath.pathname
        : resolvedPath.pathname + "/";
    setUrl(newUrl);
  }, [useResolvedPath]);

  return (
    <div className="aulas">
      <h1>Aulas</h1>

      <ul>
        {data.map((aula) => (
          <li key={aula.id}>
            <Link to={`${url}${aula.id}`}>{aula.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
