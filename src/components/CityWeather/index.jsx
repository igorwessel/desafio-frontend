import React from "react";
import { MdClose, MdArrowUpward, MdArrowDownward } from "react-icons/md";
import {
  Card,
  CardClose,
  CardTitle,
  TextBold,
  TextBoldMargin,
  CardWeatherDetails,
  TextBoldWithPadding,
  TextPadding,
  CardDetailsTemperature,
  CardWeek,
  CardWeekDay,
  CardWeekDayTemperature,
} from "./styled";

const CityWeather = () => {
  return (
    <Card>
      <CardClose>
        <TextBold>Niterói, RJ - Brasil</TextBold>
        <MdClose size={24} color="#fe7e00" />
      </CardClose>
      <CardTitle>20°C Nublado</CardTitle>
      <CardWeatherDetails>
        <CardDetailsTemperature>
          <MdArrowDownward size={24} color="#fe7e00" />
          <TextBoldWithPadding>16°</TextBoldWithPadding>
          <MdArrowUpward size={24} color="#fe7e00" />
          <TextBoldWithPadding>25°</TextBoldWithPadding>
          <TextPadding>
            Sensação <TextBold>19°</TextBold>
          </TextPadding>
        </CardDetailsTemperature>
        <CardDetailsTemperature>
          <TextPadding>
            Vento <TextBold>18km/h</TextBold>
          </TextPadding>
          <TextPadding>
            Humidade <TextBold>89%</TextBold>
          </TextPadding>
        </CardDetailsTemperature>
      </CardWeatherDetails>
      <CardWeek>
        <CardWeekDay>
          <TextBold>Terça</TextBold>
          <CardWeekDayTemperature>
            <TextBoldMargin>18°</TextBoldMargin>
            <TextBoldMargin>26°</TextBoldMargin>
          </CardWeekDayTemperature>
        </CardWeekDay>
        <CardWeekDay>
          <TextBold>Quarta</TextBold>
          <CardWeekDayTemperature>
            <TextBoldMargin>18°</TextBoldMargin>
            <TextBoldMargin>26°</TextBoldMargin>
          </CardWeekDayTemperature>
        </CardWeekDay>
        <CardWeekDay>
          <TextBold>Quinta</TextBold>
          <CardWeekDayTemperature>
            <TextBoldMargin>18°</TextBoldMargin>
            <TextBoldMargin>26°</TextBoldMargin>
          </CardWeekDayTemperature>
        </CardWeekDay>
        <CardWeekDay>
          <TextBold>Sexta</TextBold>
          <CardWeekDayTemperature>
            <TextBoldMargin>18°</TextBoldMargin>
            <TextBoldMargin>26°</TextBoldMargin>
          </CardWeekDayTemperature>
        </CardWeekDay>
        <CardWeekDay>
          <TextBold>Sabado</TextBold>
          <CardWeekDayTemperature>
            <TextBoldMargin>18°</TextBoldMargin>
            <TextBoldMargin>26°</TextBoldMargin>
          </CardWeekDayTemperature>
        </CardWeekDay>
      </CardWeek>
    </Card>
  );
};

export default CityWeather;
