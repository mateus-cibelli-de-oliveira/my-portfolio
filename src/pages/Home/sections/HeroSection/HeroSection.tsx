import {
  Container,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import styled from "../../../../utils/styled";
import CustomGrid from "../../../../components/CustomGrid/CustomGrid";
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import AnimatedBackground from "../../../../components/AnimatedBackground/AnimatedBackground";
import Typewriter from "../../../../components/Typewriter/Typewriter";
import CV from "../../../../assets/pdfs/Open.pdf";

const HeroSection: React.FC = () => {
  const StyledImg = styled("img")(({ theme }) => ({
    maxWidth: "420px",
    width: "88%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    [theme.breakpoints.down("xs")]: {
      maxWidth: "200px",
    },
  }));

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "100px",
    },
  }));

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "example.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleEmail = () => {
    const email = "mateuscibelli@hotmail.com";
    const subject = encodeURIComponent("Subject");
    const body = encodeURIComponent("Hello! I saw your portfolio...");
    const outlookLink = `https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${subject}&body=${body}`;
    window.open(outlookLink, "_blank");
  };

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <CustomGrid
          variant="container"
          spacing={4}
          alignItems="center"
          justifyContent="center"
        >
          {/* COLUNA ESQUERDA: IMAGEM */}
          <Box
            sx={{
              width: { xs: "100%", md: "34%" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Box zIndex={1}>
              <StyledImg src={Avatar} />
            </Box>

            {!isMobile && (
              <Box position="absolute" mt={36} right={0} zIndex={0}>
                <AnimatedBackground />
              </Box>
            )}
          </Box>

          {/* COLUNA DIREITA: TEXTO + BOTÕES */}
          <Box
            sx={{
              width: { xs: "100%", md: "45%" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              color="primary.contrastText"
              variant="h1"
              textAlign="center"
              sx={{ whiteSpace: "nowrap" }}
            >
              Mateus Cibelli
            </Typography>
            <Typewriter
              text="I'm a Web Developer"
              delay={120}
              variant="h2"
              color="primary.contrastText"
            />
            <CustomGrid
              variant="container"
              justifyContent="center"
              spacing={2}
              mt={4}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <StyledButton onClick={handleDownload}>
                  <DownloadIcon />
                  <Typography>Download CV</Typography>
                </StyledButton>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <StyledButton onClick={handleEmail}>
                  <EmailIcon />
                  <Typography>Contact me</Typography>
                </StyledButton>
              </Box>
            </CustomGrid>
          </Box>
        </CustomGrid>
      </Container>
    </StyledHero>
  );
};

export default HeroSection;
