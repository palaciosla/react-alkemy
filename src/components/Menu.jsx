import React from "react";
import ItemCard from "./ItemCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Menu = ({ menu, removeItemFromMenu }) => {
  return (
    <Container maxWidth="lg" sx={{ justifyContent: "center" }}>
      <Typography
        variant="h3"
        color="primary"
        align="center"
        sx={{ marginTop: 2 }}
      >
        Menú
      </Typography>
      <Grid
        container
        spacing={1}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          padding: {
            xs: "2rem 0 12rem 0",
            sm: "2rem 0 10rem 0",
            md: "2rem 0 5rem 0",
          },
          justifyContent: "center",
        }}
      >
        {menu.length === 0 ? (
          <Typography variant="body1" color="primary">
            No seleccionaste ningun plato 👀
          </Typography>
        ) : (
          menu.map((item) => (
            <>
              <Grid item key={item.id}>
                <ItemCard
                  data={item}
                  type="menu"
                  menu={item}
                  removeItemFromMenu={removeItemFromMenu}
                />
              </Grid>
            </>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default Menu;

/*
<Container maxWidth="md" sx={{ justifyContent: "center" }}>
      <Grid
        container
        spacing={1}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ padding: "2rem 0 10rem 0" }}
      >
        
        {results.map((item) => (
          <Grid item>
            <ItemCard
              key={item.id}
              data={item}
              type="search"
              setIdModal={setIdModal}
              handleOpen={handleOpen}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
*/
