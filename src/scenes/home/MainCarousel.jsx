import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { shades } from "../../theme";

const importAll = (r) => {
  return r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});
};

export const heroTextureImports = importAll(
  require.context("../../assets/", false, /\.(png|jpe?g|svg)$/)
);

const MainCarousel = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  const settings = {
    showArrows: false,
    interval: 3500,
    dynamicHeight: false,
    stopOnHover: false,
    infiniteLoop: true,
    showStatus: false,
    transitionTime: 500,
    showThumbs: false,
    showIndicators: true,
    swipeable: true,
    emulateTouch: true,
    autoPlay: true,
  };

  return (
    <div style={{ width: "100%", backgroundColor: "black" }}>
      <Carousel {...settings}>
        {Object.values(heroTextureImports).map((texture, index) => (
          <Box key={`carousel-image-${index}`}>
            <img
              src={texture}
              alt={`carousel-${index}`}
              style={{
                width: "100%",
                height: "700px",
                objectFit: "contain",
                backgroundAttachment: "fixed",
              }}
            />

            <Box
              color="white"
              padding="20px"
              borderRadius="1px"
              textAlign="left"
              backgroundColor="rgba(0,255,0,0.4)"
              position="absolute"
              top={isNonMobile ? "46%" : "10%"}
              left={isNonMobile ? "10%" : "0"}
              right={isNonMobile ? undefined : "0"}
              margin={isNonMobile ? undefined : "0 auto"}
              maxWidth={isNonMobile ? undefined : "350px"}
              height={isNonMobile ? undefined : "100px"}
              display={isNonMobile ? undefined : "none"}
            >
              <Typography variant={isNonMobile ? "h1" : "h2"}>
                Christmas Sale!
              </Typography>
              <Typography fontWeight="500" color={shades.neutral[200]}>
                New Items Released
              </Typography>
            </Box>
          </Box>
        ))}
      </Carousel>
    </div>
  );
};

export default MainCarousel;
