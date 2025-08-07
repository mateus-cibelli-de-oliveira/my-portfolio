import * as React from "react";
import { AppBar, MenuItem, Toolbar } from "@mui/material";
import styled from "../../utils/styled";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

const NavText = styled("span")(({ theme }) => ({
  color: "inherit",
  fontWeight: 500,
  cursor: "pointer",
  position: "relative",
  backgroundColor: "transparent",
  textDecoration: "none !important", // garante que não tenha sublinhado
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: -2,
    width: "100%",
    height: 2,
    backgroundColor: "transparent",
    transform: "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 0.3s ease",
  },
  "&:hover": {
    color: theme.palette.secondary.main, // opcional: muda cor do texto também
    backgroundColor: "transparent",
    textDecoration: "none !important",
  },
  "&:hover::after": {
    transform: "scaleX(1)",
  },
}));

export const StyledMobileToolbar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    display: "flex",
    justifyContent: "end",
  },
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export const StyledDesktopToolbar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
    justifyContent: "space-evenly",
  },
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      handleClose();
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute">
        <StyledMobileToolbar>
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleSmoothScroll("about")}>
              <NavText>About</NavText>
            </MenuItem>
            <MenuItem onClick={() => handleSmoothScroll("skills")}>
              <NavText>Skills</NavText>
            </MenuItem>
            <MenuItem onClick={() => handleSmoothScroll("projects")}>
              <NavText>Projects</NavText>
            </MenuItem>
          </Menu>
        </StyledMobileToolbar>

        <StyledDesktopToolbar variant="regular">
          <MenuItem onClick={() => handleSmoothScroll("about")}>
            <NavText>About</NavText>
          </MenuItem>
          <MenuItem onClick={() => handleSmoothScroll("skills")}>
            <NavText>Skills</NavText>
          </MenuItem>
          <MenuItem onClick={() => handleSmoothScroll("projects")}>
            <NavText>Projects</NavText>
          </MenuItem>
        </StyledDesktopToolbar>
      </AppBar>
    </Box>
  );
}
