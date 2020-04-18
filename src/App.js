import React from "react";
import { Container, Header, Title, Input, InputContainer } from "./styled";
import { MdSearch } from 'react-icons/md'

const App = () => {
  return (
    <Container>
        <Header>
          <Title>Previsão do tempo</Title>
          <InputContainer>
            <Input placeholder="Insira aqui o nome da cidade"/>
            <MdSearch size={32} style={{ position: "absolute", right: "8%", top: "30px"}}/>
          </InputContainer>
        </Header>
    </Container>
  );
};

export default App;
