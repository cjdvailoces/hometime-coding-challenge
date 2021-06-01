import React, { useState, useEffect } from "react";
import axios from "axios";

import Button from "./Button";
import Card from "./Card";

import "./styles.css";
import Loader from "./Loader";

axios.interceptors.request.use(config => {
  config.baseURL = 'https://api.magicthegathering.io/v1';
  return config;
})

const getRandomCard = () => {
  return axios.get('/cards?page=1&pageSize=1&random=true')
    .then(res => {
      const {
        name, 
        manaCost, 
        type, 
        text, 
        power, 
        toughness, 
        artist, 
        imageUrl
      } = res.data.cards[0];

      return {
        name, 
        manaCost, 
        type, 
        text, 
        power, 
        toughness, 
        artist, 
        imageUrl
      };
    })
};

const App = () => {
  const [state, setState] = useState({
    loading: false,
    isDarkTheme: false,
    card: null
  });
  const btnRef = React.createRef();

  useEffect(() => {
    btnRef.current.focus();
  }, [])

  const handleToggleTheme = () => {
    const currentState = state;
    currentState.isDarkTheme = !state.isDarkTheme;
    if (currentState.isDarkTheme) {
      document.body.classList.add('dark-theme')
    } else {
      document.body.classList.remove('dark-theme')
    }
    setState({ ...currentState })
  }

  const handleGetRandomCards = async () => {
    setState({
      ...state,
      loading: true,
    })
    const card = await getRandomCard();
    setState({
      ...state,
      loading: false, 
      card
    })
  }

  return (
    <>
      <header className="main-header">
        <div>
          <Button
            isDarkTheme={state.isDarkTheme}
            onClick={() => handleToggleTheme()}
          >Switch {!state.isDarkTheme ? 'Dark' : 'Light'} theme</Button>
        </div>
      </header>
      <div className={`mainframe ${!state.card && !state.loading ? 'no-card-loaded' : ''}`}>
        {state.loading
          && <Loader />
        }
        {state.card
          && <Card {...state.card} />
        }
        <Button
          ref={btnRef} 
          isDarkTheme={state.isDarkTheme}
          onClick={() => handleGetRandomCards()}
        >Show Random Card</Button>
      </div>
    </>
  );
};

export default App;
