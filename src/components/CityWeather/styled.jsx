import styled from "styled-components";
import { fontcolors } from "../../styles/colors";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35px;
  background: rgba(255, 255, 255, 0.932);
`;

export const CardClose = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTitle = styled.h2`
  font-size: 3.2em;
  letter-spacing: 2px;
  margin-left: 20px;
`;

export const TextBold = styled.span`
  font-weight: 600;
`;

export const TextBoldWithPadding = styled.span`
  padding: 0 5px;
  font-weight: 600;
`;

export const TextPadding = styled.span`
  padding: 10px;
`;

export const TextOrange = styled(TextBold)`
  margin-top: 5px;
  color: ${fontcolors.secondary};
`;

export const CardWeatherDetails = styled.div`
  border-bottom: 1px solid #fe7e00;
`;

export const CardDetailsTemperature = styled.div`
  display: flex;
  align-items: center;
`;

export const CardWeek = styled.div`
  display: flex;
  margin: 10px 0;
`;

export const CardWeekDay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 15px;
`;

export const CardWeekDayTemperature = styled.div`
  display: flex;
  justify-content: center;
`;

export const TextBoldMargin = styled(TextBold)`
  color: ${fontcolors.secondary};
  margin-left: 5px;
`;
