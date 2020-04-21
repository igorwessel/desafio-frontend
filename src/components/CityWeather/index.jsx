import React from 'react';
import { connect } from 'react-redux';
import { MdClose, MdArrowUpward, MdArrowDownward } from 'react-icons/md';
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
} from './styled';
import { closeCardWeather } from '../../reducers/ui/action-creators';

const CityWeather = ({ forecast, closeCardWeather }) => {
  const week = {
    mon: 'Segunda',
    tue: 'Terça',
    wed: 'Quarta',
    thu: 'Quinta',
    fri: 'Sexta',
    sat: 'Sabado',
    sun: 'Domingo',
  };

  return (
    <Card>
      <CardClose>
        <TextBold>
          {forecast.location.city}, {forecast.location.region} -{' '}
          {forecast.location.country}
        </TextBold>
        <MdClose
          size={24}
          color="#fe7e00"
          onClick={closeCardWeather}
          style={{ cursor: 'pointer' }}
        />
      </CardClose>
      <CardTitle>
        {forecast.current_observation.condition.temperature}°C Nublado
      </CardTitle>
      <CardWeatherDetails>
        <CardDetailsTemperature>
          <MdArrowDownward size={24} color="#fe7e00" />
          <TextBoldWithPadding>
            {forecast.forecasts[0].low}°
          </TextBoldWithPadding>
          <MdArrowUpward size={24} color="#fe7e00" />
          <TextBoldWithPadding>
            {forecast.forecasts[0].high}°
          </TextBoldWithPadding>
          <TextPadding>
            Sensação{' '}
            <TextBold>{forecast.current_observation.wind.chill}°</TextBold>
          </TextPadding>
        </CardDetailsTemperature>
        <CardDetailsTemperature>
          <TextPadding>
            Vento{' '}
            <TextBold>{forecast.current_observation.wind.speed}km/h</TextBold>
          </TextPadding>
          <TextPadding>
            Humidade{' '}
            <TextBold>
              {forecast.current_observation.atmosphere.humidity}%
            </TextBold>
          </TextPadding>
        </CardDetailsTemperature>
      </CardWeatherDetails>
      <CardWeek>
        {forecast.forecasts.slice(1, 6).map((forecast, index) => (
          <CardWeekDay key={`${forecast.day.toLowerCase()}_${index}`}>
            <TextBold>{week[forecast.day.toLowerCase()]}</TextBold>
            <CardWeekDayTemperature>
              <TextBoldMargin>{forecast.low}°</TextBoldMargin>
              <TextBoldMargin>{forecast.high}°</TextBoldMargin>
            </CardWeekDayTemperature>
          </CardWeekDay>
        ))}
      </CardWeek>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  forecast: state.forecast,
});

const mapDispatchToProps = (dispatch) => ({
  closeCardWeather: () => dispatch(closeCardWeather()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CityWeather);
