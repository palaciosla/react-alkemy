import axios from "axios";
import React, { useEffect, useState } from "react";
import API_KEY from "../api/API_KEY";
import InfoTabs from "../components/InfoTabs";
import Loader from "../components/Loader";
import ModalInfo from "../components/ModalInfo";
import Nav from "../components/Nav";
import Results from "../components/Results";
import Typography from '@mui/material/Typography'

const Search = ({ setQuery, results, addItemToMenu, menu, setUser }) => {
  const [idModal, setIdModal] = useState();
  const [infoModal, setInfoModal] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setInfoModal(null);
    setOpen(false);
  };

  useEffect(() => {
    let url = `https://api.spoonacular.com/recipes/${idModal}/information?apiKey=${API_KEY}&includeNutrition=false`;
    // console.log(url);
    axios
      .get(url)
      .then((res) => {
        setInfoModal(res.data);
      })
      // .catch((res) => console.log(res));
  }, [idModal]);

  return (
    <>
      <Nav setQuery={setQuery} setUser={setUser} />
      {results === null ? (
        <>
        <Typography variant="h6" color="primary" align="center" mt={2}>No hay resultados 😥</Typography>
        <Typography variant="body2" color="primary" align="center" mt={2}>Es posible que el número de peticiones se haya agotado</Typography>
        </>
      ) : results.length === 0 ? (
        <Loader />
      ) : (
        <Results
          results={results}
          setIdModal={setIdModal}
          handleOpen={handleOpen}
        />
      )}
      <ModalInfo
        data={infoModal}
        handleClose={handleClose}
        open={open}
        addItemToMenu={addItemToMenu}
      />
      {menu.length > 0 ? <InfoTabs menu={menu} /> : null}
    </>
  );
};

export default Search;
