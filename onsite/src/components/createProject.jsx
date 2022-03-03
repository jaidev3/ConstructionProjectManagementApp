import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
import {styled} from "styled-components"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  borderRadius:"10px",
  p: 4,
};

export default function BasicModal() {
////form////////
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
///////////
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}><p style={{color:'white'}}>+ ADD NEW PROJECT</p></Button>
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
                <input {...register("address")} placeholder="Address" />
                <br />
                <input {...register("location")} placeholder="City" />
                <br />
                <input
                  className="button"
                  type="submit"
                  value="Create Project"
                />
              </form>
            </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
        </Box>
      </Modal>
    </div>
  );
}
