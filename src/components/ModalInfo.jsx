import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CardMedia from "@mui/material/CardMedia";
import Loader from "./Loader";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function ModalInfo({ data, handleClose, open, addItemToMenu }) {
  const handleClick = () => {
    addItemToMenu(data);
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {data === null ? (
            <Loader style={{ right: "37%" }} />
          ) : (
            <>
              <CardMedia component="img" title="" image={data.image} />
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {data.title}
              </Typography>
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2, display: "flex", alignItems: "center" }}
              >
                <FavoriteBorderIcon />
                Health Score: {data.healthScore}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <MonetizationOnIcon />
                Precio del servicio: ${data.pricePerServing}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <AccessTimeIcon />
                Tiempo de demora: {data.readyInMinutes} min
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Es vegano: {data.vegan ? "Si" : "No"}
              </Typography>
              <Box
                sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}
              >
                <Button variant="contained" onClick={handleClick}>
                  Agregar al menú
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default ModalInfo;
