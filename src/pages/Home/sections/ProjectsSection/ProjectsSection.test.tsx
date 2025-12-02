import { render, screen } from "@testing-library/react";
import ProjectsSection from "./ProjectsSection";
import { vi } from "vitest";

// Mock simples do AnimationComponent — evita animação e apenas renderiza filhos
vi.mock("../../../../components/AnimationComponent/AnimationComponent", () => ({
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

// Mock superficial do ProjectCard — permite identificar títulos na tela
vi.mock("../../../../components/ProjectCard/ProjectCard", () => ({
  default: (props: any) => (
    <div data-testid="project-card">
      <p>{props.title}</p>
    </div>
  ),
}));

/**
 * Testes responsáveis por validar o comportamento do ProjectsSection.
 * - Validar apenas o que é visível ao usuário;
 * - Evitar dependência da implementação interna;
 * - Manter descrições claras e objetivas;
 * - Cada teste possui comentários indicando intenção e comportamento esperado.
 */
describe("ProjectsSection Component", () => {
  it("deve exibir o título principal da seção", () => {
    render(<ProjectsSection />);

    // Verifica se o título principal aparece para o usuário
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });

  it("deve renderizar todos os cards de projetos", () => {
    render(<ProjectsSection />);

    // Captura todos os títulos que devem aparecer
    const projectTitles = [
      'Site institucional "Info-Office" desenvolvido em WordPress',
      "Gerador de números aleatórios da Mega-Sena feito em React",
      'Projeto de site "Academia Gym" desenvolvido em WordPress',
      'Projeto "Sites Minimalistas" feito em WordPress com integração de e-mail corporativo, formulário e otimização de DNS via Cloudflare.',
    ];

    // Confirma que cada título está visível na tela
    projectTitles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it("deve renderizar a quantidade correta de ProjectCards", () => {
    render(<ProjectsSection />);

    // Verifica se o número de cards corresponde à quantidade de projetos
    const allCards = screen.getAllByTestId("project-card");
    expect(allCards.length).toBe(4);
  });
});