import React, { useState } from 'react';
import {
  Container,
  Header,
  Title,
  Input,
  InputContainer,
  Main,
} from './styled';
import { MdSearch } from 'react-icons/md';
import TableForecast from './components/TableForecast';
import CityWeather from './components/CityWeather';

import { connect } from 'react-redux';
import { getCityForecast } from './services/weather';
import { updateForecast } from './reducers/forecast/action-creators';
import { openCardWeather } from './reducers/ui/action-creators';

const App = ({ updateForecast, openCardWeather, ui }) => {
  const [city, setCity] = useState('');

  const handleSubmit = async () => {
    const result = await getCityForecast(city);
    updateForecast(result);
    openCardWeather();
  };

  return (
    <Container>
      <Header>
        <Title>Previsão do tempo</Title>
        {ui.card_weather && <CityWeather />}
        <InputContainer>
          <Input
            placeholder="Insira aqui o nome da cidade"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <MdSearch
            size={32}
            style={{
              position: 'absolute',
              right: '8%',
              top: '30px',
              cursor: 'pointer',
            }}
            onClick={handleSubmit}
          />
        </InputContainer>
      </Header>

      <Main>
        <TableForecast />
      </Main>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  ui: state.ui,
});

const mapDispatchToProps = (dispatch) => ({
  updateForecast: (data) => dispatch(updateForecast(data)),
  openCardWeather: () => dispatch(openCardWeather()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
