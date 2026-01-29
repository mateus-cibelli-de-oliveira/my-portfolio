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
      technologies: "Technologias: WordPress, HTML, CSS",
      websiteURL:
        "https://behance.net/gallery/115607825/Projeto-do-site-Info-Office"
    },
    {
      title: "Gerador de números aleatórios da Mega-Sena feito em React",
      subtitle: "(Dez 2024)",
      srcImg: "/images/capa-gerador-ms.jpg",
      description:
        'Trata-se de um aplicativo responsivo feito em react para facilitar a vida de quem não quer "depender da própria sorte", mas de um sistema que possibilite gerar números aleatórios para poder trazer mais confiança ao jogo.',
      technologies: "Technologias: JavaScript, React.js, CSS",
      websiteURL: "https://gerador-ms.vercel.app/",
      codeURL: "https://github.com/mateus-cibelli-de-oliveira/geradorMS"
    },
    {
      title: 'Projeto de site "Academia Gym" desenvolvido em WordPress',
      subtitle: "(Ago 2025)",
      srcImg: "/images/capa-academia-gym.jpg",
      description:
        "Site institucional totalmente responsivo com loja virtual integrada, páginas de Home, Sobre, Loja Virtual, Matricule-se e Contato, além de botão flutuante para WhatsApp. Inclui newsletter no rodapé, envio de e-mails configurado via SMTP, cache de páginas, otimização de imagens e backup automático no Google Drive. Desenvolvido em WordPress com foco em performance e boas práticas.",
      technologies:
        "Technologias: WordPress, Elementor, WooCommerce, WP Mail SMTP, WP Super Cache, UpdraftPlus, WWW Image Optimizer",
      websiteURL: "http://academia-gym.free.nf"
    },
    {
      title:
        'Projeto "Sites Minimalistas" feito em WordPress com integração de e-mail corporativo, formulário e otimização de DNS via Cloudflare.',
      subtitle: "(Ago 2025)",
      srcImg: "/images/capa-minimalistas.jpg",
      description:
        "É um site institucional desenvolvido em WordPress para a divulgação e comercialização de produtos digitais. O projeto está em evolução constante: além da configuração de domínio, DNS, SSL, e-mail corporativo e formulário de contato, busco constantes melhorias para o ranqueamento, desempenho e segurança do site por meio de plugins e integrações. A ideia principal foi reunir uma estrutura 100% gratuita que resultasse em um site entregável e profissional. Para isso, utilizei InfinityFree (hospedagem), ImprovedMX (encaminhamento de e-mails), Brevo (envio de e-mails transacionais) e Cloudflare (DNS e proteção).",
      technologies:
        "Tecnologias: WordPress, Elementor, Brevo, ImprovedMX, Cloudflare",
      websiteURL: "https://sitesminimalistas.com"
    },
    {
      title:
        'Sistema de pedidos "Reactzzaria" feito em React',
      subtitle: "(Janeiro 2026)",
      srcImg: "/images/capa-reactzzaria.jpg",
      description:
        "É uma aplicação web com frontend moderno integrado ao banco Firebase, simulando o funcionamento básico de uma pizzaria real. A aplicação permite que os usuários autenticados consultem informações como tamanhos de pizza e sabores disponíveis, além de realizar pedidos, garantindo que cada usuário tenha acesso apenas aos seus próprios dados. Todo o controle de acesso é feito por meio do 'Firebase Authentication' e regras de segurança do Firestore, seguindo as boas práticas atuais. O projeto foi desenvolvido com atenção especial à organização do código, uso correto de variáveis de ambiente e separação entre ambientes de desenvolvimento e produção.",
      technologies:
        "Tecnologias: React (Vite), JavaScript (ES6+), Styled Components, Material UI, Authentication (Login com GitHub), Firebase (Security Rules)",
      websiteURL: "https://reactzzaria.vercel.app",
      codeURL: "https://github.com/mateus-cibelli-de-oliveira/reactzzaria--sistema-pedidos"
    },
    {
      title:
        'Sistema de cadastro "Reactzzaria" feito em React',
      subtitle: "(Janeiro 2026)",
      srcImg: "/images/capa-reactzzaria-cadastro.jpg",
      description:
        "É uma aplicação web com frontend moderno integrado ao banco Firebase, simulando o funcionamento administrativo de uma pizzaria real. A aplicação garante que apenas usuários administradores podem manipular os status dos pedidos, enquanto usuários comuns podem apenas criar e visualizar seus próprios pedidos. Todo o controle de acesso é feito por meio do 'Firebase Authentication' e regras de segurança do Firestore, seguindo as boas práticas atuais. O projeto é uma extensão do sistema de pedidos e foi desenvolvido com atenção especial à organização do código, uso correto de variáveis de ambiente e separação entre ambientes de desenvolvimento e produção.",
      technologies:
        "Tecnologias: React (Vite), JavaScript (ES6+), Styled Components, Material UI, Authentication (Login com GitHub), Firebase (Security Rules)",
      websiteURL: "https://reactzzaria-cadastro.vercel.app",
      codeURL: "https://github.com/mateus-cibelli-de-oliveira/reactzzaria--sistema-cadastro"
    }
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
}

export default ProjectsSection;
