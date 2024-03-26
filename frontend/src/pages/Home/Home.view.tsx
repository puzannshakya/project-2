import React, { useState, useRef, useEffect } from "react";
import { HomeGeneratedProps } from "./Home.props";
import {
  Container,
  Header,
  HeaderContents,
  Features,
  DiscoverContent,
  About,
  Details,
  AboutDisplay,
  AboutFrame,
  AboutTypography,
  AboutDetails,
  Hide,
} from "./Home.style";
import { Fruits } from "./Fruits";
import Typography from "components/base/Typography";
import TextField from "components/base/TextField";
import Button from "components/base/Button";
import axios from "axios";
import { Col, Row, Visible, Hidden } from "react-grid-system";
import HomeNavigation from "./../../components/layout/HomeNavigation";
import ContactSection from "./../../components/layout/ContactSection";
import { useLocation } from "react-router-dom";
import { theme } from "utils/Theme";

//Images
import headerImg from "images/headerImg.png";
import aboutimg from "images/aboutimg.png";
import icon1 from "images/icon1.png";
import icon2 from "images/icon2.png";
import icon3 from "images/icon3.png";
import tomato from "images/fruits/tomato.png";
import tomato2 from "images/fruits/tomato2.png";
import blueberry from "images/fruits/blueberry.png";
import cabbage from "images/fruits/cabbage.png";
import carrots from "images/fruits/carrots.png";
import cucumber from "images/fruits/cucumber.png";
import grapes from "images/fruits/grapes.png";
import water from "images/fruits/water.png";

import { useAppDispatch } from "../../app/hooks";
import {
  storeEmail,
  toggleSignUp,
} from "../../features/authModal/authModalSlice";

const HomeView = (props: HomeGeneratedProps) => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const location = useLocation();

  useEffect(() => {
    const handleHashChange = () => {
      if (location.hash) {
        const targetId = location.hash.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const navHeight = 92;

          document.documentElement.style.scrollBehavior = "smooth";
          window.scrollTo(0, targetElement.offsetTop - navHeight);
          document.documentElement.style.scrollBehavior = "auto";
        }
      }
    };

    handleHashChange();
  }, [location]);
  const dispatch = useAppDispatch();

  return (
    <Container>
      <HomeNavigation />

      <Fruits>
        <div className="fruit-images">
          <img src={tomato} alt="" className="fruits tomato" />
          <img src={tomato2} alt="" className="fruits tomato2" />
          <img src={blueberry} alt="" className="fruits blueberry hide" />
          <img src={cabbage} alt="" className="fruits cabbage" />
          <img src={cabbage} alt="" className="fruits cabbage2 hide" />
          <img src={carrots} alt="" className="fruits carrots" />
          <img src={cucumber} alt="" className="fruits cucumber hide" />
          <img src={grapes} alt="" className="fruits grapes hide" />
          <img src={water} alt="" className="fruits water" />
        </div>
      </Fruits>

      <Header
        justify="center"
        align="center"
        style={{ marginLeft: 0, marginRight: 0 }}
        id="header"
      >
        <HeaderContents xxl={4} xl={4} lg={6} md={6} style={{ zIndex: "1" }}>
          <Typography variant="title1" weight="700" textColor="accent">
            Sow and grow your farming <span className="line-break">goals</span>
          </Typography>

          <div className="text">
            <TextField
              value={email}
              setValue={setEmail}
              placeholder="Type in your email"
            />
            <Button
              text="Farm with us"
              variant="primary"
              size="md"
              takeFullWidth={false}
              style={{ boxShadow: `5px 5px ${theme.btn.color.token}` }}
              onClick={() => {
                dispatch(toggleSignUp(true));
                dispatch(storeEmail(email));
              }}
            ></Button>
          </div>
        </HeaderContents>
        <HeaderContents xxl={4} xl={4} lg={6} md={6} style={{ zIndex: "1" }}>
          <Hide sm xs>
            <div style={{ maxWidth: "400px" }}>
              <img src={headerImg} alt="" className="image" />
            </div>
          </Hide>
        </HeaderContents>
      </Header>

      <About
        justify="center"
        style={{ marginLeft: 0, marginRight: 0 }}
        id="about"
      >
        <DiscoverContent style={{ zIndex: "1" }}>
          <div style={{ marginBottom: "1rem" }}>
            <Hide md sm xs>
              <Typography
                variant="title1"
                weight="700"
                textColor="accent"
                align="left"
              >
                Discover your best farming buddy
              </Typography>
            </Hide>
            <Visible md sm xs>
              <Typography
                variant="title2"
                weight="700"
                textColor="accent"
                align="center"
              >
                Discover your best farming buddy
              </Typography>
            </Visible>
          </div>
          <Hide xs>
            <Typography variant="subtitle" weight="400" textColor="n80">
              Different crops have different needs, and meeting these will
              elevate your farming experience. With Sprout, this becomes a
              breeze with its data-backed features that can help you discover,
              plant, and nurture the perfect crop for your unique growing
              conditions.
            </Typography>
            <Typography
              variant="subtitle"
              weight="400"
              textColor="n80"
              style={{ marginTop: "1rem" }}
            >
              Already have a crop to grow mind? We got you! Sprout provides the
              info you’ll need to create the best environment to plant and
              cultivate it.
            </Typography>
          </Hide>
          <Visible xs>
            <Typography variant="body" weight="400" textColor="n80">
              Different crops have different needs, and meeting these will
              elevate your farming experience. With Sprout, this becomes a
              breeze with its data-backed features that can help you discover,
              plant, and nurture the perfect crop for your unique growing
              conditions.
            </Typography>
            <Typography variant="body" weight="400" textColor="n80">
              Already have a crop to grow mind? We got you! Sprout provides the
              info you’ll need to create the best environment to plant and
              cultivate it.
            </Typography>
          </Visible>
        </DiscoverContent>
      </About>

      <Features
        justify="center"
        align="center"
        id="features"
        style={{ marginLeft: 0, marginRight: 0 }}
      >
        <AboutDisplay xxl={5} xl={5} lg={5} style={{ zIndex: "1" }}>
          <Hide md sm xs>
            <AboutFrame>
              <AboutTypography>
                <Typography
                  variant="title1"
                  weight="700"
                  textColor="accent"
                  style={{
                    position: "relative",
                    zIndex: "1",
                  }}
                >
                  Farming<br></br>simplified
                </Typography>
              </AboutTypography>
              <img src={aboutimg} alt="" />
            </AboutFrame>
          </Hide>

          <Visible md sm xs>
            <Typography
              variant="title2"
              weight="700"
              textColor="accent"
              align="center"
            >
              Farming simplified
            </Typography>
          </Visible>
        </AboutDisplay>

        <AboutDetails xxl={5} xl={5} lg={5} md={11} style={{ zIndex: "1" }}>
          <Details>
            <Hide sm xs>
              <img src={icon1} alt="" />
            </Hide>

            <div>
              <Hide md sm xs>
                <Typography variant="title2" weight="700" textColor="n90">
                  Get our tailor-made recs
                </Typography>
              </Hide>

              <Visible md sm>
                <Typography variant="title3" weight="700" textColor="n90">
                  Get our tailor-made recs
                </Typography>
              </Visible>

              <Visible xs>
                <Typography variant="title4" weight="700" textColor="n90">
                  Get our tailor-made recs
                </Typography>
              </Visible>

              <Hide xs>
                <Typography variant="subtitle" weight="400" textColor="n80">
                  Know which crops are best for your planting and weather
                  conditions and also get a yield estimate
                </Typography>
              </Hide>

              <Visible xs>
                <Typography variant="body" weight="400" textColor="n80">
                  Know which crops are best for your planting and weather
                  conditions and also get a yield estimate
                </Typography>
              </Visible>
            </div>
          </Details>

          <Details>
            <Hide sm xs>
              <img src={icon2} alt="" />
            </Hide>
            <div>
              <Hide md sm xs>
                <Typography variant="title2" weight="700" textColor="n90">
                  Know your crops
                </Typography>
              </Hide>

              <Visible md sm>
                <Typography variant="title3" weight="700" textColor="n90">
                  Know your crops
                </Typography>
              </Visible>

              <Visible xs>
                <Typography variant="title4" weight="700" textColor="n90">
                  Know your crops
                </Typography>
              </Visible>

              <Hide xs>
                <Typography variant="subtitle" weight="400" textColor="n80">
                  With our crop database, you’ll get the necessary info about
                  your crops and resources needed to grow ‘em
                </Typography>
              </Hide>

              <Visible xs>
                <Typography variant="body" weight="400" textColor="n80">
                  With our crop database, you’ll get the necessary info about
                  your crops and resources needed to grow ‘em
                </Typography>
              </Visible>
            </div>
          </Details>

          <Details>
            <Hide sm xs>
              <img src={icon3} alt="" />
            </Hide>
            <div>
              <Hide md sm xs>
                <Typography variant="title2" weight="700" textColor="n90">
                  Be ready, rain or shine
                </Typography>
              </Hide>

              <Visible md sm>
                <Typography variant="title3" weight="700" textColor="n90">
                  Be ready, rain or shine
                </Typography>
              </Visible>

              <Visible xs>
                <Typography variant="title4" weight="700" textColor="n90">
                  Be ready, rain or shine
                </Typography>
              </Visible>

              <Hide xs>
                <Typography variant="subtitle" weight="400" textColor="n80">
                  Always stay ahead of any weather situation with our long-range
                  weather forecast
                </Typography>
              </Hide>

              <Visible xs>
                <Typography variant="body" weight="400" textColor="n80">
                  Know which crops are best for your planting and weather
                  conditions and also get a yield estimate
                </Typography>
              </Visible>
            </div>
          </Details>
        </AboutDetails>
      </Features>

      <ContactSection />
    </Container>
  );
};

export default HomeView;
