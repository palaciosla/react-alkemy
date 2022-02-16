import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import ItemCard from "./ItemCard";
import Container from "@mui/material/Container";

const Results = ({ results, setIdModal, handleOpen }) => {
  return (
    <Container maxWidth="md" sx={{ justifyContent: "center" }}>
      <Grid
        container
        spacing={1}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ padding: "2rem 0 4rem 0", justifyContent: "center" }}
      >
        {results.map((item) => (
          <Grid item key={item.id}>
            <ItemCard
              data={item}
              type="search"
              setIdModal={setIdModal}
              handleOpen={handleOpen}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Results;
