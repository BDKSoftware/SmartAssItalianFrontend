import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";
import logo from "../../logo/logo.jpg";

const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();

  return (
    <Box
      mt="70px"
      p="40px 0"
      display="absolute"
      bottom="0"
      backgroundColor="black"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)" display="flex" alignItems="center">
          <img alt="logo" src={logo} width={300} height={200} />
        </Box>
        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px" color={"white"}>
            Contact Us
          </Typography>
          <Typography mb="30px" color={"white"}>
            9372 E Taro Ln, Scottsdale, AZ 85255
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }} color={"white"}>
            Email: Johntaglia@gmail.com
          </Typography>
          <Typography mb="30px" color={"white"}>
            Phone: (602)-390-6063
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
