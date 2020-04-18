import styled from "styled-components";
import { fontcolors } from './styles/colors'



export const Container = styled.div`
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  color: ${fontcolors.primary};
  border-bottom: 1px solid white;
  margin: 0 30px;
`

export const Title = styled.h1`
  font-size: 3.8em;
  color: white;
`;

export const Input = styled.input`
  padding: 15px;
  width: 100%;
  max-width: 450px;
  margin-top: 20px;
  margin-bottom: 70px;
  outline: 0;
  color: ${fontcolors.primary};
`

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;