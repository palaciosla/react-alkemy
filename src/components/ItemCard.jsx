import { Delete } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import LoupeIcon from "@mui/icons-material/Loupe";
import React, { useEffect, useState } from "react";

const ItemCard = ({
  data,
  setIdModal,
  handleOpen,
  type,
  menu,
  removeItemFromMenu,
}) => {
  let { id, title, image } = data;

  const handleDetails = () => {
    handleOpen();
    setIdModal(id);
  };
  return (
    <Card sx={{ maxWidth: 230 }}>
      <CardMedia
        component="img"
        max-height="194"
        width="100%"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography variant="span" color="text.secondary">
          {title}
        </Typography>
        {type === "menu" ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: ".5rem",
              gap: ".5rem",
            }}
          >
            <Typography variant="span" sx={{ color: "#0cad14" }}>
              Health Score: {menu.healthScore}
            </Typography>
            <Typography variant="span" color="error">
              Precio del servicio: ${menu.pricePerServing}
            </Typography>
            <Typography variant="span" color="primary">
              Tiempo de demora: {menu.readyInMinutes} min
            </Typography>
            <Typography variant="span" color="secondary">
              Es vegano: {menu.vegan ? "Si" : "No"}
            </Typography>
          </div>
        ) : null}
      </CardContent>
      <CardActions disableSpacing>
        {type === "menu" ? (
          <IconButton
            size="small"
            color="error"
            onClick={() => removeItemFromMenu(id)}
          >
            <DeleteIcon />
          </IconButton>
        ) : null}
        {type === "menu" ? null : (
          <Button size="small" onClick={handleDetails}>
            Ver más
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ItemCard;
