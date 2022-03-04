import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams } from "react-router-dom";
import {useDispatch } from "react-redux";
import { editProject } from "../redux/action/projectAction";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
};

export default function BasicModal({ value }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  ////form////////
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axios.patch(`http://localhost:5000/api/project/${value}`, data);
    dispatch(editProject(data));
  };
  ///////////
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <p style={{ color: "black", margin: "0" }}>
          <b>Edit</b>
        </p>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("project_name")}
                  placeholder="Project Name"
                />
                <br />
                <input {...register("company")} placeholder="Company" />
                <br />
                <input {...register("location")} placeholder="location" />
                <br />
                <input className="button" type="submit" value="Edit Project" />
              </form>
            </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
        </Box>
      </Modal>
    </div>
  );
}
