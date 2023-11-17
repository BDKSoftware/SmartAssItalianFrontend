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

  return (
    <div style={{ width: "100%", backgroundColor: "black" }}>
      <Carousel
        style={{ backgroundColor: shades.secondary[500] }}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) => (
          <IconButton
            onClick={onClickHandler}
            sx={{
              position: "absolute",
              top: "50%",
              left: "0",
              color: shades.secondary[500],
              padding: "5px",
              zindex: "10",
            }}
          >
            <NavigateBeforeIcon sx={{ fontSize: 40 }} />
          </IconButton>
        )}
        renderArrowNext={(onClickHandler, hasNext, label) => (
          <IconButton
            onClick={onClickHandler}
            sx={{
              position: "absolute",
              top: "50%",
              right: "0",
              color: shades.secondary[500],
              padding: "5px",
              zindex: "10",
            }}
          >
            <NavigateNextIcon sx={{ fontSize: 40 }} />
          </IconButton>
        )}
      >
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
              display={isNonMobile ? undefined : "block"}
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
