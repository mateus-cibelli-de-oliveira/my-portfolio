import { Box, Container, IconButton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Footer: React.FC = () => {
  return (
    <>
      <Box pt={3} pb={2}>
        <Container maxWidth="sm">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            pb={4}
          >
            <IconButton
              onClick={() =>
                window.open("https://github.com/mateus-cibelli-de-oliveira")
              }
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              onClick={() =>
                window.open("https://www.linkedin.com/in/mateus-cibelli/")
              }
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              component="a"
              href="mailto:mateuscibelli@hotmail.com"
              rel="noopener noreferrer"
            >
              <EmailIcon />
            </IconButton>
          </Box>
          <Typography textAlign="center">
            &copy; 2024 Mateus Cibelli - All rights reserved
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
