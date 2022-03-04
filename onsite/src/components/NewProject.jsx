import styled from "styled-components";
import Edit from "./editProject";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { removeProject } from "../redux/action/projectAction";
import axios from "axios";

function NewProject({ value }) {
  // useEffect(() => {

  // },[])
  const id = useParams();
  const dispatch = useDispatch();
  const handleDelete = () => {
    axios.delete(`http://localhost:5000/api/project/${value._id}`)
    dispatch(removeProject(value._id));
  };
  console.log(value.project_name, value._id);
  return (
    <>
      <ProjectBox>
        <div>
          <div>
            <h3>{value.project_name}</h3>
          </div>
          <div>Rs 10 In | Rs 10 Out</div>
        </div>
        <div>
          <Button2>
            <Edit value={value._id} />
          </Button2>
          <Button1>Done</Button1>
          <Button1 onClick={handleDelete}>Delete</Button1>
        </div>
      </ProjectBox>
    </>
  );
}
export default NewProject;

const ProjectBox = styled.div`
  width: 90%;
  background-color: #e0ddaa;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  text-align: left;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const Button1 = styled.button`
  background-color: #eeedde;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 5px;
  width: 60px;
  margin-top: 5px;
`;
const Button2 = styled.button`
  background-color: #eeedde;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 0px;
  width: 60px;
  margin-top: 5px;
`;
