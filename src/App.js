import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import API_KEY from "./api/API_KEY";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoute from "./pages/PrivateRoute";
import Search from "./pages/Search";

const initialUser = localStorage.getItem("tokenAlkemy") ? true : false;

function App() {
  const [userInfo, setUserInfo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(initialUser);
  const [query, setQuery] = useState(null);
  const [results, setResults] = useState(null);
  const [menu, setMenu] = useState([]);
  const [isVegan, setIsVegan] = useState(0);
  const [isNotVegan, setIsNotVegan] = useState(0);
  const [errors, setErrors] = useState({});

  let navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) return;
    let url = "https://challenge-react.alkemy.org/";
    axios
      .post(url, userInfo)
      .then((res) => {
        localStorage.setItem("tokenAlkemy", JSON.stringify(res.data.token));
        setUser(true);
        setErrors({
          ...errors,
          user: null,
        });
        navigate("/home");
      })
      .catch((error) => {
        setErrors({
          ...errors,
          user: error,
        });
      });

    setIsLoading(false);
  }, [userInfo]);

  useEffect(() => {
    if (!query) return;
    setResults([]);
    setIsLoading(true);
    let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}&number=20`;

    axios
      .get(url)
      .then((res) => {
        setResults(res.data.results);
      })
      .catch((error) => {
        setResults(null);
        setErrors({
          ...errors,
          results: error,
        });
      });

    setIsLoading(false);
  }, [query]);

  const addItemToMenu = (item) => {
    if (menu.length === 4) return window.alert("Ya hay 4 platos en el menú");

    if (item.vegan) {
      isVegan <= 2
        ? setIsVegan((isVegan) => isVegan + 1)
        : window.alert("Sólo podés agregar otro plato no vegano");
    } else {
      isNotVegan <= 2
        ? setIsNotVegan((isNotVegan) => isNotVegan + 1)
        : window.alert("Solo podés agregar otro plato vegano");
    }

    setMenu([...menu, item]);
  };

  const removeItemFromMenu = (id) => {
    let isConfirm = window.confirm(`¿Desea eliminar este producto del menú?`);
    if (isConfirm) {
      let newMenu = menu.filter((item) => item.id !== id);
      setMenu(newMenu);
    } else {
      return;
    }
  };
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Login
              setUserInfo={setUserInfo}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              errors={errors}
            />
          }
        />
        <Route path="/home" element={<PrivateRoute user={user} />}>
          <Route
            index
            element={
              <Home
                setQuery={setQuery}
                menu={menu}
                removeItemFromMenu={removeItemFromMenu}
                setUser={setUser}
              />
            }
          />
        </Route>
        <Route path="/search" element={<PrivateRoute user={user} />}>
          <Route
            index
            element={
              <Search
                setQuery={setQuery}
                addItemToMenu={addItemToMenu}
                results={results}
                menu={menu}
                setUser={setUser}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
