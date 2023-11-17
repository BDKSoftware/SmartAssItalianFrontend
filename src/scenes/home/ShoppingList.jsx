import React, { useEffect, useState } from "react";
import { Box, Typography, Tab, Tabs, useMediaQuery } from "@mui/material";
import Item from "../../components/Item";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../state";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const items = useSelector((state) => state.cart.items);

  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItems() {
    const items = await fetch(
      "https://strapi-cho2.onrender.com/api/items?populate=image",
      { method: "GET" }
    );
    const itemsJson = await items.json();
    dispatch(setItems(itemsJson.data));
  }

  useEffect(() => {
    getItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const topRatedItems = items.filter(
    (item) => item.attributes.category === "topRated"
  );
  const newArrivalsItems = items.filter(
    (item) => item.attributes.category === "newArrivals"
  );
  const bestSellersItems = items.filter(
    (item) => item.attributes.category === "bestSellers"
  );

  return (
    <Box width="80%" margin="80px auto">
      <Typography variant="h3" textAlign="center">
        Our Featured <b>Products</b>
      </Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{
          sx: { display: isNonMobile ? "block" : "none" },
        }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
            backgroundColor: "transparent",
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "black",
            height: 3,
          },
          "& .MuiTab-root.Mui-selected": {
            color: "white",
            backgroundColor: "red",
          },
          "& .MuiTab-root": {
            color: "white",
          },
          backgroundColor: "#1c8454",
        }}
        inkBarStyle={{ color: "red" }}
      >
        <Tab label="All" value="all" />
        <Tab label="NEW ARRIVALS" value="newArrivals" />
        <Tab
          label="BEST SELLERS"
          value="bestSellers"
          sx={{ display: isNonMobile ? undefined : "none" }}
        />
        <Tab
          label="TOP RATED"
          value="topRated"
          sx={{ display: isNonMobile ? undefined : "none" }}
        />
      </Tabs>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {value === "all" &&
          items.map((item) => <Item key={item.id} item={item} />)}
        {value === "newArrivals" &&
          newArrivalsItems.map((item) => <Item key={item.id} item={item} />)}
        {value === "bestSellers" &&
          bestSellersItems.map((item) => <Item key={item.id} item={item} />)}
        {value === "topRated" &&
          topRatedItems.map((item) => <Item key={item.id} item={item} />)}
      </Box>
    </Box>
  );
};

export default ShoppingList;
