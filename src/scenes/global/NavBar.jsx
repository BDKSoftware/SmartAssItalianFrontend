import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
  Search,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
import { setIsCartOpen } from "../../state";
import logo from "../../logo/logo-no-bg.png";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="60px"
      backgroundColor="rgba(0, 0, 0, 0.95)"
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          onClick={() => {
            navigate("/");
          }}
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
            fontSize: "1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
          color={shades.secondary[500]}
        >
          <img alt="nav-logo" src={logo} width="60" height={60} />
          <span style={{ color: "#1c8454" }}>Smart</span>
          <span style={{ color: "white" }}>Ass</span>
          Italian.com
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
                backgroundColor: "red",
              },
            }}
          >
            <IconButton
              onClick={() => {
                if (cart.length > 0) {
                  dispatch(setIsCartOpen({}));
                }
              }}
              sx={{
                color: "white",
                ":hover": { color: "#1c8454" },
              }}
            >
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>
        </Box>
      </Box>
    </Box>
  );
};

export default NavBar;
