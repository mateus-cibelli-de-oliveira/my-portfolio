import { Box, Card, Container, Typography } from "@mui/material";
import styled from "../../../../utils/styled";
import CustomGrid from "../../../../components/CustomGrid/CustomGrid";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SchoolIcon from "@mui/icons-material/School";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const AboutSection: React.FC = () => {
  const StyledCard = styled(Card)(({ theme }) => ({
    padding: "10px 20px",
    textAlign: "center",
    marginBottom: "10px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  }));

  const skillsSet = [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "React.js",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap 5",
    "Material UI",
    "WordPress",
    "Elementor",
    "MySQL",
    "MongoDb",
    "Firebase",
    "FileZilla",
    "Git",
    "GIMP",
    "Canva"
  ];

  const birthYear = 1997;
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;

  return (
    <Container maxWidth="lg">
      <Box id="about" pt={5} mb={3}>
        <Typography variant="h2" textAlign="center">
          About me
        </Typography>
      </Box>

      <CustomGrid
        variant="container"
        spacing={2}
        display="flex"
        justifyContent="center"
        pb={3}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <AnimationComponent moveDirection="right">
            <StyledCard variant="outlined">
              <WorkspacePremiumIcon />
              <Typography textAlign="center" fontWeight={600}>
                Experience
              </Typography>
              <Typography textAlign="center">3+ years</Typography>
              <Typography textAlign="center">Frontend Development</Typography>
            </StyledCard>
          </AnimationComponent>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <AnimationComponent moveDirection="left">
            <StyledCard variant="outlined">
              <SchoolIcon />
              <Typography textAlign="center" fontWeight={600}>
                Education
              </Typography>
              <Typography textAlign="center">Workana Academy</Typography>
              <Typography textAlign="center">Freelance Development</Typography>
            </StyledCard>
          </AnimationComponent>
        </Box>
      </CustomGrid>

      <Box pb={1}>
        <Typography textAlign="center" sx={{ fontSize: "1.1rem" }}>
          Mateus Cibelli de Oliveira, {age} anos, é natural do Rio de Janeiro e
          reside em Ramos, na Zona Norte da cidade. Apaixonado por transformar
          ideias em realidade, encontrando na tecnologia uma forma de dar vida a
          projetos criativos e funcionais.
        </Typography>
      </Box>

      <hr />

      <Box id="skills" pt={1} mb={3}>
        <Typography variant="h3" textAlign="center" fontWeight={300}>
          Skills
        </Typography>
      </Box>

      <Box mb={6}>
        <CustomGrid variant="container" spacing={2} justifyContent="center">
          {skillsSet.map((skill, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <StyledCard variant="outlined">{skill}</StyledCard>
            </Box>
          ))}
        </CustomGrid>
      </Box>
    </Container>
  );
}

export default AboutSection;
