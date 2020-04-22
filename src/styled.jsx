import styled from 'styled-components';
import { fontcolors } from './styles/colors';
import { device } from './styles/media';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;

  @media ${device.laptop} {
    max-width: 800px;
  }

  @media ${device.laptopL} {
    max-width: 1024px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: ${fontcolors.primary};
  border-bottom: 1px solid white;

  @media ${device.laptop} {
    max-width: 800px;
  }

  @media ${device.laptopL} {
    max-width: 1024px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
  }
`;

export const Title = styled.h1`
  color: white;

  @media ${device.mobileS} {
    font-size: 2em;
  }

  @media ${device.laptop} {
    font-size: 3.8em;
  }
`;

export const Input = styled.input`
  padding: 15px;
  width: 100%;
  max-width: 450px;
  margin-top: 20px;
  margin-bottom: 70px;
  outline: 0;
  color: ${fontcolors.primary};
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: row;
`;

export const Main = styled.main``;
