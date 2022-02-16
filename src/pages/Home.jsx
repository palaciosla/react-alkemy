import React from "react";
import InfoTabs from "../components/InfoTabs";
import Menu from "../components/Menu";
import Nav from "../components/Nav";
import { Outlet, useNavigate } from "react-router-dom";

const Home = ({ setQuery, menu, removeItemFromMenu, setUser }) => {
  let navigate = useNavigate();

  return (
    <>
      <Nav setQuery={setQuery} setUser={setUser} />
      <Menu menu={menu} removeItemFromMenu={removeItemFromMenu} />
      {menu.length > 0 ? <InfoTabs menu={menu} /> : null}
    </>
  );
};

export default Home;
