import { DashboardGeneratedProps } from "./Dashboard.props";
import {
  Wrapper,
  Middle,
  Top,
  Segment,
  Weather,
  Title,
  Crops,
  MiddleRight,
  OptionWrapper,
  Option,
  OptionLabel,
  MobileOption,
} from "./Dashboard.style";
import { Toaster } from "react-hot-toast";
import Typography from "components/base/Typography";

import SegmentedControl from "../../components/base/SegmentedControl";
import { useNavigate } from "react-router-dom";
import HarvestCard from "../../components/module/HarvestCard";
import { useMediaQuery } from "utils/hooks/useMediaQuery";
import { useOnClickOutside } from "utils/hooks/useOnClickOutside";
import CurrentWeather from "components/module/CurrentWeather";
import { calculateDaysPassed, formatDate } from "utils/Date";
import Loading from "../../components/base/Loading";
import HourlyDaily from "components/module/HourlyDaily";
import { useElementSize } from "utils/hooks/useElementSize";
import Button from "components/base/Button";
import { Add, Choice, Suggestion, ViewAllSvg } from "components/base/SVG";
import { useTheme } from "@emotion/react";
import { useRef } from "react";
import AddChoiceModal from "components/module/AddChoiceModal";
import AddSuggestionModal from "components/module/AddSuggestionModal";
import { Hidden, Visible } from "react-grid-system";
import MobileDrawer from "./../../components/base/MobileDrawer";

const DashboardView = (props: DashboardGeneratedProps) => {
  const {
    crops,
    isLoading,
    currentLocation,
    forecast,
    currentTemperature,
    lowTemperature,
    highTemperature,
    precipitation = 0,
    humidity = 0,
    wind = 0,
    gradientColor1,
    gradientColor2,
    currentCondition,
    onSelectedSearchLocationWeather,
    MOCK_OPTIONS,
    state,
    onSetState,
    weatherData,
    onSelectedWeatherIndexWeather,
    selectedIndex,
    handleOpenCard,
    setVisibility,
    visibility,
    choiceVisibility,
    setChoiceVisibility,
    handleLater,
    handleNow,
    suggestionVisibility,
    setSuggestionVisibility,
    collapseState,
    isModalVisible,
  } = props;
  const navigate = useNavigate();
  const theme = useTheme();
  const handleSelectedSearchLocation = (address: string) => {
    onSelectedSearchLocationWeather(address);
  };

  const handleSelectedWeatherIndex = (value: number) => {
    onSelectedWeatherIndexWeather(value);
  };
  const [squareRef, { width }] = useElementSize();
  const matches = useMediaQuery("(min-width: 768px)");
  const popupRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(popupRef, (event: MouseEvent) => {
    setVisibility(false);
  });

  return (
    <Wrapper collapseState={collapseState}>
      {currentLocation &&
      weatherData &&
      weatherData.days &&
      weatherData.days.length > 0 ? (
        <Top>
          <Weather md={6}>
            <CurrentWeather
              currentLocation={currentLocation}
              forecast={forecast}
              currentTemperature={currentTemperature}
              lowTemperature={lowTemperature}
              highTemperature={highTemperature}
              precipitation={precipitation}
              humidity={humidity}
              wind={wind}
              gradientColor1={gradientColor1}
              gradientColor2={gradientColor2}
              currentCondition={currentCondition}
              page="dashboard"
              onSelectedSearchLocation={handleSelectedSearchLocation}
              collapseState={collapseState}
            />
          </Weather>
          <Segment md={6}>
            <SegmentedControl
              options={MOCK_OPTIONS}
              selectedOption={state}
              onClickControl={(value: string) => {
                onSetState(value);
                onSelectedWeatherIndexWeather(1);
              }}
            />
            <HourlyDaily
              weatherDataArray={
                state === MOCK_OPTIONS[0] ? weatherData.days[0] : weatherData
              }
              state={state}
              onSelectedWeatherIndex={handleSelectedWeatherIndex}
              index={selectedIndex}
              page="dashboard"
            ></HourlyDaily>
          </Segment>
        </Top>
      ) : (
        <Loading />
      )}
      <Middle>
        <Title>
          <Typography variant="title3" weight="700">
            Your Planted Crops
          </Typography>
          <MiddleRight ref={popupRef}>
            <Button
              text={matches ? "View All" : ""}
              variant="outline"
              icon={<ViewAllSvg />}
              iconPosition="before"
              style={
                !matches ? { padding: "17.5px 16px" } : { padding: "16px" }
              }
              onClick={() => navigate("/your-crops")}
            />
            <Button
              iconPosition="before"
              icon={<Add fill={theme.btn.text.white} />}
              text={matches ? "New Crop" : ""}
              onClick={() => setVisibility((prev) => !prev)}
            />
            {visibility && (
              <Hidden xs sm>
                <OptionWrapper>
                  <Option onClick={() => setChoiceVisibility(true)}>
                    <Choice />
                    <OptionLabel>
                      <Typography variant="title4" weight="700">
                        Your Choice
                      </Typography>
                      <Typography>
                        We'll give you info and tips on growing
                      </Typography>
                    </OptionLabel>
                  </Option>
                  <Option onClick={() => setSuggestionVisibility(true)}>
                    <Suggestion />
                    <OptionLabel>
                      <Typography variant="title4" weight="700">
                        Our Suggestion
                      </Typography>
                      <Typography>
                        We'll suggest which crop suits your soil
                      </Typography>
                    </OptionLabel>
                  </Option>
                </OptionWrapper>
              </Hidden>
            )}
          </MiddleRight>
        </Title>
        <Visible xs sm>
          <MobileDrawer
            direction="bottom"
            isOpenDrawer={visibility}
            handleDrawerClose={() => setVisibility(false)}
            drawerSize="auto"
            isModalVisible={isModalVisible}
          >
            <MobileOption onClick={() => setChoiceVisibility(true)}>
              <Choice />
              <OptionLabel>
                <Typography variant="title4" weight="700">
                  Your Choice
                </Typography>
                <Typography>We'll give you info and tips on growing</Typography>
              </OptionLabel>
            </MobileOption>
            <MobileOption onClick={() => setSuggestionVisibility(true)}>
              <Suggestion />
              <OptionLabel>
                <Typography variant="title4" weight="700">
                  Our Suggestion
                </Typography>
                <Typography>
                  We'll suggest which crop suits your soil
                </Typography>
              </OptionLabel>
            </MobileOption>
          </MobileDrawer>
        </Visible>
        {isLoading ? (
          <Loading />
        ) : crops?.length ? (
          <Crops ref={squareRef}>
            {crops?.slice(0, 4).map((crop, idx) => {
              let maxValue =
                (crop.growthDuration.max + crop.growthDuration.min) / 2;

              const targetDate = new Date(crop.datePlanted);
              const daysPassed = calculateDaysPassed(targetDate);
              const remainingDays = maxValue - daysPassed;
              const formattedDate = formatDate(new Date(crop.datePlanted));
              return (
                <HarvestCard
                  key={idx}
                  cropId={crop._id}
                  cropName={crop.cropName}
                  maxValue={maxValue}
                  value={daysPassed}
                  title={remainingDays.toString()}
                  subtitle="days"
                  size={width < 800 ? "mobile" : "desktop"}
                  id={idx.toString()}
                  datePlanted={formattedDate}
                  estYield={Number(crop.estimatedYield).toFixed(2)}
                  height={width < 800 ? 85 : 120}
                  width={width < 800 ? 85 : 120}
                  mobile={width < 800 ? true : false}
                  handleOpenCard={() => handleOpenCard(crop._id)}
                />
              );
            })}
          </Crops>
        ) : (
          <div style={{ padding: "2rem 0" }}>
            <Typography variant="title3" weight="700" align="center">
              No crops to display
            </Typography>
            <Typography align="center">
              Get a crop suggestion from us or plant a crop of your choice
            </Typography>
          </div>
        )}
      </Middle>
      <AddChoiceModal
        visibility={choiceVisibility}
        setVisibility={setChoiceVisibility}
        onLater={handleLater}
        onNow={handleNow}
      />
      <AddSuggestionModal
        visibility={suggestionVisibility}
        setVisibility={setSuggestionVisibility}
        onLater={handleLater}
        onNow={handleNow}
      />
      <Toaster />
    </Wrapper>
  );
};

export default DashboardView;
