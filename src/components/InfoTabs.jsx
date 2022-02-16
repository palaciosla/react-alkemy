import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { Box, Grid } from "@mui/material";
import InfoCard from "./InfoCard";

const initialStats = {
  total: 0,
  health: 0,
  time: 0,
};

const InfoTabs = ({ menu }) => {
  const [stats, setStats] = useState(initialStats);

  const getAverage = (stat) => {
    if (menu.length === 0) return;
    if (menu) {
      let arr = menu.map((item) => item[stat]);
      let res = arr.reduce((acc, next) => acc + next / arr.length);
      return res.toFixed(2);
    }
    return 0;
  };

  const getTotal = () => {
    if (menu.length === 0) return;
    if (menu) {
      let arrTotal;
      arrTotal = menu.map((item) => item.pricePerServing);
      return arrTotal.reduce((acc, next) => acc + next).toFixed(2);
    }
    return 0;
  };

  useEffect(() => {
    setStats({
      total: `$ ${getTotal() || 0}`,
      health: getAverage("healthScore") || 0,
      time: `${getAverage("readyInMinutes") || 0} min`,
    });
  }, [menu]);

  return (
    <div
      style={{
        width: "100%",
        position: "sticky",
        bottom: 0,
        backgroundColor: "#00000084",
        padding: ".5rem 0",
      }}
    >
      <Container maxWidth="xs">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            gap: 2,
          }}
        >
          <InfoCard
            title="Total a pagar"
            color="#cf1a1a6a"
            data={stats.total}
          />
          <InfoCard
            title="Health Score"
            color="#39a31f76"
            data={stats.health}
          />
          <InfoCard title="Tiempo aprox" color="#1a1de260" data={stats.time} />
        </Box>
      </Container>
    </div>
  );
};

export default InfoTabs;
