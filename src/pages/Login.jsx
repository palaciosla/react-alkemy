import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Box, TextField, Button, Typography } from "@mui/material";
import Loader from "../components/Loader";
import Footer from "../components/Footer";

const initialForm = {
  email: "",
  password: "",
};

const Login = ({ setUserInfo, isLoading, errors }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) return;

    setUserInfo(form);
  };
  return (
    <div
      style={{
        backgroundImage:
          "url('https://t4.ftcdn.net/jpg/00/89/10/09/360_F_89100912_oc2kdi2niZls5XVo8SluZ5WQ6jAhuAqY.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container
        sx={{
          height: {xs:"70vh", sm: "70vh", md: "85vh", lg: "85vh" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: 300,
            height: "auto",
            backgroundColor: "#000000bc",
            borderRadius: 3,
            padding: 3,
          }}
        >
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <TextField
              name="email"
              label="Email"
              variant="filled"
              onChange={handleChange}
              value={form.email}
              color="secondary"
              sx={{
                color: "black",
                backgroundColor: "#faf5f5d1",
                borderRadius: "5px",
              }}
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              variant="filled"
              onChange={handleChange}
              value={form.password}
              color="secondary"
              sx={{
                color: "black",
                backgroundColor: "#faf5f5d1",
                borderRadius: "5px",
              }}
            />
            {isLoading ? (
              <Loader />
            ) : (
              <Button variant="contained" color="secondary" type="submit">
                Enviar
              </Button>
            )}
            {!errors ? null : errors.user ? (
              <Typography variant="button" color="error">
                Usuario o contraseña incorrecta
              </Typography>
            ) : null}
          </Box>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default Login;
