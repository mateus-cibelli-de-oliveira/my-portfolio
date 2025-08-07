import { Box, Card, Container, Grid, Typography, styled } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SchoolIcon from "@mui/icons-material/School";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const AboutSection: React.FC = () => {
  const StyledCard = styled(Card)(({ theme }) => ({
    padding: "10px 10px",
    textAlign: "center",
    marginBottom: "10px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  }));

  const skillsSet = [
    "Javascript",
    "Typescript",
    "React.js",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap 5",
    "Material UI",
    "WordPress",
    "PHP",
    "Laravel",
    "MySQL",
    "Oracle",
    "MongoDb",
    "Firebase",
    "Git",
  ];

  const birthYear = 1997;
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;

  return (
    <>
      <Container maxWidth="lg">
        <Box id="about" pt={5} mb={3}>
          <Typography variant="h2" textAlign="center">
            About me
          </Typography>
        </Box>
        <Grid
          container
          spacing={2}
          display="flex"
          justifyContent="center"
          pb={3}
        >
          <Grid item xs={9} md={2.5}>
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
          </Grid>
          <Grid item xs={9} md={2.5}>
            <AnimationComponent moveDirection="left">
              <StyledCard variant="outlined">
                <SchoolIcon />
                <Typography textAlign="center" fontWeight={600}>
                  Education
                </Typography>
                <Typography textAlign="center">Workana Academy</Typography>
                <Typography textAlign="center">
                  Freelance Development
                </Typography>
              </StyledCard>
            </AnimationComponent>
          </Grid>
        </Grid>
        <Box pb={1}>
          <Typography textAlign="center">
            Mateus Cibelli de Oliveira, {age} anos, é natural do Rio de Janeiro
            e reside em Ramos, na Zona Norte da cidade. Apaixonado por
            transformar ideias em realidade, encontrando na tecnologia uma forma
            de dar vida a projetos criativos e funcionais.
          </Typography>
        </Box>
        <hr />
        <Box id="skills" pt={1} mb={3}>
          <Typography variant="h3" textAlign="center" fontWeight={300}>
            Skills
          </Typography>
        </Box>
        <Box mb={5}>
          <Grid container spacing={3} justifyContent="center">
            {skillsSet.map((skill, index) => (
              <Grid item key={index} xs={5} sm={4} md={2} lg={2}>
                <StyledCard variant="outlined">{skill}</StyledCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default AboutSection;
