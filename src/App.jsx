import React, { useState } from "react";
import {
  Container,
  Header,
  Title,
  Input,
  InputContainer,
  Main,
} from "./styled";
import { MdSearch } from "react-icons/md";
import { getCityForecast } from "./services/weather";
import TableForecast from "./components/TableForecast";
import CityWeather from "./components/CityWeather";

const App = () => {
  const [city, setCity] = useState("");

  return (
    <Container>
      <Header>
        <Title>Previsão do tempo</Title>
        {/* <CityWeather /> */}
        <InputContainer>
          <Input
            placeholder="Insira aqui o nome da cidade"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <MdSearch
            size={32}
            style={{
              position: "absolute",
              right: "8%",
              top: "30px",
              cursor: "pointer",
            }}
            onClick={(e) => getCityForecast(city)}
          />
        </InputContainer>
      </Header>

      <Main>
        <TableForecast />
      </Main>
    </Container>
  );
};

export default App;
