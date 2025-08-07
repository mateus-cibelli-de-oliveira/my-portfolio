import { Box, Typography } from "@mui/material";
import styled from "../../utils/styled";
import CustomGrid from "../CustomGrid/CustomGrid";
import StyledButton from "../StyledButton/StyledButton";

export interface ProjectCardProps {
  title: string;
  subtitle: string;
  srcImg: string;
  description: string;
  technologies: string;
  websiteURL: string;
  codeURL?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  srcImg,
  description,
  technologies,
  websiteURL,
  codeURL,
}) => {
  const StyledImg = styled("img")(({ theme }) => ({
    width: "100%",
    objectFit: "contain",
    height: "80vw",
    padding: "10px 0",
    [theme.breakpoints.up("md")]: {
      height: "45vh",
    },
  }));

  const StyledCard = styled("div")(({ theme }) => ({
    borderRadius: "3px",
    border: `0.5px solid  ${theme.palette.primary.contrastText}`,
    backgroundColor: "transparent",
    color: theme.palette.primary.contrastText,
    padding: "20px",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  }));

  return (
    <StyledCard>
      <Typography variant="h5" sx={{ fontSize: "1.75rem !important" }}>
        {title}
      </Typography>
      <Typography fontSize="1.4rem">{subtitle}</Typography>
      <StyledImg src={srcImg} />
      <Typography fontSize="1.2rem" sx={{ textAlign: "justify" }}>{description}</Typography>
      <Typography fontWeight={600} pt={2}>
        {technologies}
      </Typography>
      <CustomGrid variant="container" spacing={1} pt={2}>
        <Box>
          <StyledButton onClick={() => window.open(websiteURL)}>
            View Project
          </StyledButton>
        </Box>
        {codeURL && (
          <Box>
            <StyledButton onClick={() => window.open(codeURL)}>
              View Code
            </StyledButton>
          </Box>
        )}
      </CustomGrid>
    </StyledCard>
  );
};

export default ProjectCard;
