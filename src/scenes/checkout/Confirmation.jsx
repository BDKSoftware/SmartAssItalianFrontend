import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useEffect } from "react";

const Confirmation = () => {
  useEffect(() => {
    //redirect to home page after 10 seconds
    setTimeout(() => {
      window.location.href = "/";
    }, 10000);
  }, []);

  return (
    <Box m="90px auto" width="80%" height="50vh">
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        You have successfully made an Order —{" "}
        <strong>Thank you for your Purchase</strong>
      </Alert>
    </Box>
  );
};

export default Confirmation;
