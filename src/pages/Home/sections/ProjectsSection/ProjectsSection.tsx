import { Box, Container, Typography } from "@mui/material";
import styled from "../../../../utils/styled";
import CustomGrid from "../../../../components/CustomGrid/CustomGrid";
import ProjectCard, {
  type ProjectCardProps,
} from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const ProjectsSection: React.FC = () => {
  const StyledExperience = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
  }));

  const projects = [
    {
      title: 'Site institucional "Info-Office" desenvolvido em WordPress',
      subtitle: "(Mar 2021)",
      srcImg: "/images/capa-info-office.jpg",
      description:
        "É um modelo de site de empreendimentos usando WordPress em um tema padrão onde trabalhei na customização do layout, organização da estrutura de páginas e navegação. O foco maior foi criar uma experiência clara, responsiva e funcional, simulando um site de portfólio pessoal.",
      technologies: "Technologies: WordPress, HTML, CSS",
      websiteURL:
        "https://behance.net/gallery/115607825/Projeto-do-site-Info-Office",
    },
    {
      title: "Gerador de números aleatórios da Mega-Sena feito em React",
      subtitle: "(Dez 2024)",
      srcImg: "/images/capa-gerador-ms.jpg",
      description:
        'Trata-se de um aplicativo responsivo feito em react para facilitar a vida de quem não quer "depender da própria sorte", mas de um sistema que possibilite gerar números aleatórios para poder trazer mais confiança ao jogo.',
      technologies: "Technologies: JavaScript, React.js e CSS",
      websiteURL: "https://gerador-ms.vercel.app/",
      codeURL: "https://github.com/mateus-cibelli-de-oliveira/geradorMS",
    },
  ];

  return (
    <StyledExperience>
      <Container maxWidth="md">
        <Box id="projects" pt={5} pb={3}>
          <Typography
            variant="h2"
            textAlign="center"
            color="primary.contrastText"
          >
            Projects
          </Typography>
        </Box>

        <CustomGrid variant="container" spacing={5} pb={10}>
          {projects.map((project: ProjectCardProps, index: number) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <AnimationComponent
                moveDirection={index % 2 === 0 ? "right" : "left"}
              >
                <ProjectCard
                  title={project.title}
                  subtitle={project.subtitle}
                  srcImg={project.srcImg}
                  description={project.description}
                  technologies={project.technologies}
                  websiteURL={project.websiteURL}
                  codeURL={project.codeURL}
                />
              </AnimationComponent>
            </Box>
          ))}
        </CustomGrid>
      </Container>
    </StyledExperience>
  );
};

export default ProjectsSection;
