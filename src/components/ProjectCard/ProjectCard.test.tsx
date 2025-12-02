import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProjectCard, { type ProjectCardProps } from "./ProjectCard";

/**
 * Testes para validar o componente ProjectCard.
 * O objetivo é garantir que o card renderiza corretamente todos os elementos:
 * título, subtítulo, imagem, descrição, tecnologias e botões de ação.
 * Também verifica se os botões de "View Project" e "View Code" estão presentes * e interativos.
 */
describe("ProjectCard Component", () => {
  const defaultProps: ProjectCardProps = {
    title: "Projeto Teste",
    subtitle: "Subtítulo do Projeto",
    srcImg: "https://via.placeholder.com/150",
    description: "Descrição do projeto para teste",
    technologies: "React, TypeScript",
    websiteURL: "https://example.com",
    codeURL: "https://github.com/example",
  };

  /**
   * Renderiza o ProjectCard
   * Verifica se todos os elementos principais estão na tela
   */
  it("renderiza o ProjectCard corretamente", () => {
    render(<ProjectCard {...defaultProps} />);

    const title = screen.getByText(/Projeto Teste/i);
    const subtitle = screen.getByText(/Subtítulo do Projeto/i);
    const description = screen.getByText(/Descrição do projeto/i);
    const technologies = screen.getByText(/React, TypeScript/i);
    const image = screen.getByRole("img") as HTMLImageElement;
    const websiteButton = screen.getByText(/View Project/i);
    const codeButton = screen.getByText(/View Code/i);

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(technologies).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(image.src).toBe(defaultProps.srcImg);
    expect(websiteButton).toBeInTheDocument();
    expect(codeButton).toBeInTheDocument();
  });

  /**
   * Testa interação dos botões
   * Verifica se os botões são clicáveis
   */
  it("permite interação com os botões View Project e View Code", async () => {
    const user = userEvent.setup();
    render(<ProjectCard {...defaultProps} />);

    const websiteButton = screen.getByText(/View Project/i);
    const codeButton = screen.getByText(/View Code/i);

    // Simula clique nos botões sem abrir efetivamente URLs
    await user.click(websiteButton);
    await user.click(codeButton);

    expect(websiteButton).toBeInTheDocument();
    expect(codeButton).toBeInTheDocument();
  });

  /**
   * Verifica que o botão View Code não é renderizado se codeURL não for fornecido
   */
  it("não renderiza View Code se codeURL não for fornecido", () => {
    render(<ProjectCard {...defaultProps} codeURL={undefined} />);

    const codeButton = screen.queryByText(/View Code/i);
    expect(codeButton).toBeNull();
  });
});
