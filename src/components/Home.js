import React, { useState, useContext } from "react";
import {
  Tabs,
  Tab,
  Typography,
  IconButton,
  Box,
  Grid,
  Button,
} from "@mui/material";
import "../assets/custom/css/home.css";
import Slide from "@mui/material/Slide";
import Backdrop from "@mui/material/Backdrop";
import { Mode } from "../App";

// inner components
import Dashboard from "./Dashboard";
import Products from "./Products";
import Category from "./Category";
import Customers from "./Customers";
import Orders from "./Orders";
import Coupons from "./Coupons";
import OurStaff from "./OurStaff";
import Setting from "./Setting";

// icons
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import GridViewIcon from "@mui/icons-material/GridView";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LogoutIcon from "@mui/icons-material/Logout";

const Home = () => {
  const [ShowTabs, setShowTabs] = useState(false);

  const viewMode = useContext(Mode);

  const handleClose = () => {
    setShowTabs(false);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        class="tabPanel"
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

  function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <Box sx={{ flexGrow: 1, display: "flex", width: "100%" }}>
        {ShowTabs === true && (
          <Slide direction="right" in={ShowTabs} mountOnEnter unmountOnExit>
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={ShowTabs}
              onClick={handleClose}
            >
              <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                aria-label="Vertical tabs example"
                className={viewMode.mode === true ? "darkTabs2" : "tabs2"}
                sx={{
                  borderRight: 1,
                  borderColor: "divider",
                  ".MuiTabs-indicator": {
                    left: 0,
                    width: "5px",
                  },
                }}
              >
                <Tab
                  wrapped
                  label={
                    <Typography
                      align="center"
                      pt={3}
                      pb={3}
                      color="primary"
                      variant="h5"
                    >
                      WoodSala
                    </Typography>
                  }
                  {...a11yProps(0)}
                />
                <Tab
                  wrapped
                  icon={<ShoppingBagOutlinedIcon />}
                  label="Product"
                  {...a11yProps(1)}
                />
                <Tab
                  wrapped
                  icon={<FormatListBulletedOutlinedIcon />}
                  label="Category"
                  {...a11yProps(2)}
                />
                <Tab
                  wrapped
                  icon={<PeopleAltOutlinedIcon />}
                  label="Customers"
                  {...a11yProps(3)}
                />
                <Tab
                  wrapped
                  icon={<ExploreOutlinedIcon />}
                  label="Orders"
                  {...a11yProps(4)}
                />
                <Tab
                  wrapped
                  icon={<CardGiftcardOutlinedIcon />}
                  label="Coupons"
                  {...a11yProps(5)}
                />
                <Tab
                  wrapped
                  icon={<PersonOutlineOutlinedIcon />}
                  label="Our Staff"
                  {...a11yProps(6)}
                />
                <Tab
                  wrapped
                  icon={<SettingsOutlinedIcon />}
                  label="Settings"
                  {...a11yProps(7)}
                />
                <Button
                  color="primary"
                  sx={{ margin: "auto" }}
                  startIcon={<LogoutIcon />}
                  variant="contained"
                >
                  Log Out
                </Button>
              </Tabs>
            </Backdrop>
          </Slide>
        )}
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          aria-label="Vertical tabs example"
          className={viewMode.mode === true ? "darkTabs" : "tabs"}
          sx={{
            borderRight: 1,
            borderColor: "divider",
            ".MuiTabs-indicator": {
              left: 0,
              width: "5px",
            },
          }}
        >
          <Tab
            wrapped
            icon={<GridViewIcon />}
            label="Dashboard"
            {...a11yProps(0)}
          />
          <Tab
            wrapped
            icon={<ShoppingBagOutlinedIcon />}
            label="Product"
            {...a11yProps(1)}
          />
          <Tab
            wrapped
            icon={<FormatListBulletedOutlinedIcon />}
            label="Category"
            {...a11yProps(2)}
          />
          <Tab
            wrapped
            icon={<PeopleAltOutlinedIcon />}
            label="Customers"
            {...a11yProps(3)}
          />
          <Tab
            wrapped
            icon={<ExploreOutlinedIcon />}
            label="Orders"
            {...a11yProps(4)}
          />
          <Tab
            wrapped
            icon={<CardGiftcardOutlinedIcon />}
            label="Coupons"
            {...a11yProps(5)}
          />
          <Tab
            wrapped
            icon={<PersonOutlineOutlinedIcon />}
            label="Our Staff"
            {...a11yProps(6)}
          />
          <Tab
            wrapped
            icon={<SettingsOutlinedIcon />}
            label="Settings"
            {...a11yProps(7)}
          />
        </Tabs>

        <TabPanel value={value} index={0}>
          <Dashboard />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Products />
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Category />
        </TabPanel>

        <TabPanel value={value} index={3}>
          <Customers />
        </TabPanel>

        <TabPanel value={value} index={4}>
          <Orders />
        </TabPanel>

        <TabPanel value={value} index={5}>
          <Coupons />
        </TabPanel>

        <TabPanel value={value} index={6}>
          <OurStaff />
        </TabPanel>

        <TabPanel value={value} index={7}>
          <Setting />
        </TabPanel>
      </Box>
    );
  }

  return (
    <>
      {/* Top Bar  */}

      <Grid
        container
        p={1}
        spacing={2}
        className={viewMode.mode === true ? "darkNav" : "topNav"}
        sx={{ boxShadow: 1 }}
      >
        <Grid item xs={4} sx={{ display: "flex" }}>
          {ShowTabs === false ? (
            <IconButton
              className="hamIcon"
              onClick={() => {
                localStorage.setItem("mode", false);
                setShowTabs(true);
              }}
              size="small"
              color="primary"
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <IconButton
              className="hamIcon"
              onClick={() => {
                localStorage.setItem("mode", true);
                setShowTabs(false);
              }}
              size="small"
              color="primary"
            >
              <CloseIcon />
            </IconButton>
          )}

          <Typography variant="h5">WoodSala</Typography>
        </Grid>

        <Grid item xs={4}>
          {/* Nothing to fill  */}
        </Grid>

        <Grid item sx={{ display: "flex", justifyContent: "end" }} xs={4}>
          {viewMode.mode === true ? (
            <IconButton
              onClick={() => {
                viewMode.setMode(false);
              }}
              size="small"
              color="primary"
            >
              <WbSunnyIcon />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                viewMode.setMode(true);
              }}
              size="small"
              color="primary"
            >
              <DarkModeIcon />
            </IconButton>
          )}

          <IconButton size="small" color="primary">
            <NotificationsIcon />
          </IconButton>

          <IconButton size="small" color="primary">
            <PersonIcon />
          </IconButton>
        </Grid>
      </Grid>
      {/* Top Bar Ends */}

      {/* Sidenav  */}
      {VerticalTabs()}
      {/* Sidenav Ends  */}
    </>
  );
};

export default Home;
