import { Container, Grid, Box, styled, Typography, useTheme, useMediaQuery } from "@mui/material";
import Avatar from "../../../../images/avatar.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import StyledButton from "../../../../../components/StyledButton/StyledButton";
import AnimatedBackground from "../../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "100px"
    }
  }))

  const StyledImg = styled("img")(({ theme }) => ({
    maxWidth: "400px", 
    width: "100%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    [theme.breakpoints.down("xs")]: {
      maxWidth: "200px"
    }
  }))

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={10} display="flex" justifyContent="center" 
        sx={{"--Grid-rowSpacing": {xs: "50px", sm: "80px"}}}>
          <Grid item xs={12} md={5}>
            <Box position="relative" display="flex" justifyContent="center" alignItems="center">
              <Box position="relative" zIndex={1} flexDirection="column">
                <StyledImg src={Avatar} />
              </Box>
                {!isMobile && (
                  <Box
                    position="absolute" mt={36} display="flex" right="-6px"
                    zIndex={0}>
                    <AnimatedBackground />
                  </Box>
                )}
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <Typography
              color="primary.contrastText"
              variant="h1"
              textAlign="center"
            >
              Mateus Cibelli
            </Typography>

            <Typography
              color="primary.contrastText"
              variant="h2"
              textAlign="center"
            >
              I'm a Web Developer
            </Typography>

            <Grid container justifyContent="center" spacing={2} mt={4}>
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <StyledButton onClick={}>
                  <DownloadIcon />
                  <Typography>Download CV</Typography>
                </StyledButton>
              </Grid>

              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <StyledButton onClick={}>
                  <EmailIcon />
                  <Typography>Contact me</Typography>
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  )
}

export default Hero;
