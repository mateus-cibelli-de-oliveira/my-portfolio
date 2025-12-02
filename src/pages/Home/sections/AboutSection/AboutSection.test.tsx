import { render, screen } from "@testing-library/react";
import AboutSection from "./AboutSection";

/**
 * Mock do AnimationComponent para evitar erros de animação no ambiente de      * teste. Aqui ele é simplificado para retornar apenas os children, garantindo * que o fluxo do componente não seja afetado durante os testes.
 */
vi.mock("../../../../components/AnimationComponent/AnimationComponent", () => {
  return {
    default: ({ children }: any) => <div>{children}</div>
  }
});

/**
 * Testes responsáveis por validar o comportamento do AboutSection.
 * Aqui verificamos se títulos, textos e elementos principais aparecem         * corretamente, seguindo o padrão do projeto de testar apenas comportamentos   * visíveis ao usuário.
 */
describe("AboutSection Component", () => {
  it("deve renderizar o título 'About me'", () => {
    // Renderiza o componente completo na tela virtual de testes
    render(<AboutSection />);

    // Verifica se o título principal está presente na interface
    expect(screen.getByText("About me")).toBeInTheDocument();
  });

  it("deve exibir os cards de Experience e Education", () => {
    render(<AboutSection />);

    // Valida o card de experiência: título + textos
    expect(screen.getByText("Experience")).toBeInTheDocument();
    expect(screen.getByText("3+ years")).toBeInTheDocument();
    expect(screen.getByText("Frontend Development")).toBeInTheDocument();

    // Valida o card de educação: título + textos
    expect(screen.getByText("Education")).toBeInTheDocument();
    expect(screen.getByText("Workana Academy")).toBeInTheDocument();
    expect(screen.getByText("Freelance Development")).toBeInTheDocument();
  });

  it("deve renderizar o texto biográfico contendo o nome do desenvolvedor", () => {
    render(<AboutSection />);

    // Confirma se o texto biográfico contendo o nome está presente
    expect(screen.getByText(/Mateus Cibelli de Oliveira/i)).toBeInTheDocument();
  });

  it("deve renderizar o título 'Skills'", () => {
    render(<AboutSection />);

    // Verifica o título da seção de skills
    expect(screen.getByText("Skills")).toBeInTheDocument();
  });

  it("deve exibir todas as skills da lista", () => {
    render(<AboutSection />);

    // Lista replicada do componente para validar a exibição de cada habilidade
    const skills = [
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
      "Canva",
    ];

    // Percorre cada skill e garante que esteja presente na interface
    skills.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });
});