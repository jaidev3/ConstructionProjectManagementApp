import styled from "styled-components";
function NewProject({ value }) {
  console.log(value.project_name);
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
          <Button1>Edit</Button1>
          <Button1>Delete</Button1>
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
