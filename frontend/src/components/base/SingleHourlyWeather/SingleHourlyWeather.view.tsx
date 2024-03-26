import React, { useEffect, useRef } from "react";
import { SingleHourlyWeatherProps } from "./SingleHourlyWeather.props";
import {
  Container,
  TemperatureContainer,
  WeatherContainer,
  TimeContainer,
  DayNameContainer,
  DayDateContainer,
  DayNameDateContainer,
} from "./SingleHourlyWeather.style";
import Typography from "../Typography";
import {
  ClearInactive,
  Cloudy,
  OvercastInactive,
  PartiallyCloudy,
  PartiallyCloudyInactive,
  RainInactive,
  SnowInactive,
  SnowRainInactive,
  ThunderStormInactive,
} from "../SVG";

const SingleHourlyWeather = (props: SingleHourlyWeatherProps): JSX.Element => {
  const {
    time,
    dayName,
    dayDate,
    condition,
    temperature,
    state,
    selectedIndex,
    index,
    onClickControl,
  } = props;
  const MOCK_OPTIONS = ["Today", "15-day"];
  let currentCondition = "";

  if (condition.toLowerCase().includes("clear".toLowerCase())) {
    currentCondition = "clear";
  } else if (condition.toLowerCase().includes("Snow".toLowerCase())) {
    currentCondition = "snow";
  } else if (
    condition.toLowerCase().includes("Rain".toLowerCase()) ||
    condition.toLowerCase() === "rain, partially cloudy".toLowerCase() ||
    condition.toLowerCase() === "Rain, Overcast".toLowerCase()
  ) {
    currentCondition = "rain";
  } else if (
    condition.toLowerCase().includes("Partially cloudy".toLowerCase())
  ) {
    currentCondition = "partiallyCloudy";
  } else if (condition.toLowerCase().includes("Overcast".toLowerCase())) {
    currentCondition = "overcast";
  } else if (condition.toLowerCase().includes("Thunderstorm".toLowerCase())) {
    currentCondition = "thunderStorm";
  } else if (
    condition.toLowerCase().includes("Heavy Rain and Snow".toLowerCase())
  ) {
    currentCondition = "snowRain";
  } else if (
    condition.toLowerCase().includes("Thunderstorm and rain".toLowerCase())
  ) {
    currentCondition = "thunderStormRain";
  }

  // Create a ref for the container
  const containerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (index === selectedIndex && containerRef.current) {
      // Scroll the element into view
      containerRef.current.scrollIntoView({
        behavior: "smooth", // Optional: defines the transition animation
        block: "nearest", // Optional: vertical alignment
        inline: "start", // Optional: horizontal alignment
      });
    }
  }, [index, selectedIndex]);
  return (
    <Container
      ref={containerRef} // Attach the ref to your container
      active={index === selectedIndex}
      onClick={() => onClickControl(index)}
    >
      {state === MOCK_OPTIONS[0] && <TimeContainer>{time}</TimeContainer>}

      {state === MOCK_OPTIONS[1] && (
        <DayNameDateContainer>
          <DayNameContainer>{dayName}</DayNameContainer>

          <DayDateContainer>{dayDate}</DayDateContainer>
        </DayNameDateContainer>
      )}

      <WeatherContainer>
        {currentCondition === "clear" ? (
          <ClearInactive width={30} height={30} />
        ) : currentCondition === "partiallyCloudy" ? (
          <PartiallyCloudyInactive width={30} height={30} />
        ) : currentCondition === "overcast" ? (
          <OvercastInactive width={30} height={30} />
        ) : currentCondition === "rain" ? (
          <RainInactive width={30} height={30} />
        ) : currentCondition === "thunderStorm" ? (
          <ThunderStormInactive width={30} height={30} />
        ) : currentCondition === "snow" ? (
          <SnowInactive width={30} height={30} />
        ) : currentCondition === "snowRain" ? (
          <SnowRainInactive width={30} height={30} />
        ) : currentCondition === "thunderStormRain" ? (
          <ThunderStormInactive width={30} height={30} />
        ) : (
          <PartiallyCloudy width={30} height={30} />
        )}
      </WeatherContainer>
      <TemperatureContainer>{temperature}°</TemperatureContainer>
    </Container>
  );
};

export default React.memo(SingleHourlyWeather);
