import { useState, useEffect } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import "./Home.css";
import NewProject from "../components/NewProject";
var id = nanoid(4);
function Home() {
  const [project, setProject] = useState([]);
  const handleClick = () => {};
  useEffect(() => {
    const pro = async () => {
      let data = await axios("http://localhost:5000/api/project");
      setProject(data.data);
    };
    pro();
  }, []);

  console.log(project);
  return (
    <>
      <div className="home">
        <h3>Hello </h3>
        <p>Which project are you working on today?</p>
        {project.map((e, id) => (
          <div className="project_tab" key={id}>
            <NewProject value={e} />
          </div>
        ))}

        <div className="add_project" onClick={handleClick}>
          <p>+ ADD NEW PROJECT</p>
        </div>
      </div>
    </>
  );
}
export default Home;
