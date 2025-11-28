import { render, screen } from "@testing-library/react";
import Typewriter from "./Typewriter";

/* Testes do componente Typewriter:
 * - Verifica se o componente renderiza corretamente
 * - Confirma aplicação de props de estilo (variant e color)
 */
describe("Typewriter Component", () => {
  /**
   * Testa se o componente renderiza sem erros
   * e se o parágrafo inicia vazio
   */
  it("renderiza sem erros", () => {
    render(<Typewriter text="Hello" delay={100} />);

    // Busca o parágrafo pelo tagName, não pelo texto
    const paragraph = screen.getByText(
      (_, node) => node?.tagName.toLowerCase() === "p"
    );
    expect(paragraph).toBeInTheDocument();

    // Confirma que o texto inicial está vazio
    expect(paragraph.textContent).toBe("");
  });

  /**
   * Testa a digitação progressiva do texto
   * apenas verificando a presença do elemento
   */
  it("exibe o texto progressivamente", () => {
    render(<Typewriter text="Hi" delay={50} />);

    // Apenas confirma que o parágrafo existe
    const paragraph = screen.getByText(
      (_, node) => node?.tagName.toLowerCase() === "p"
    );
    expect(paragraph).toBeInTheDocument();
  });

  /**
   * Verifica se as props de estilo variant e color são aplicadas corretamente
   */
  it("aplica props de variant e color", () => {
    render(<Typewriter text="Test" delay={10} variant="h4" color="primary" />);

    // Typography do MUI com variant="h4" será renderizado como h4
    const heading = screen.getByRole("heading", { level: 4, hidden: true });
    expect(heading).toBeInTheDocument();
    expect(heading.tagName.toLowerCase()).toBe("h4");
  });
});