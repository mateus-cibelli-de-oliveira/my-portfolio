import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Footer from "./Footer";

/**
 * Testes para validar o componente Footer.
 * O objetivo é garantir que os elementos principais renderizam corretamente
 * e que os links dos botões estão presentes e clicáveis.
 */
describe("Footer Component", () => {
  /**
   * Inicia a renderização do Footer
   * Garante que o componente aparece na tela sem erros.
   */
  it("renderiza o componente Footer corretamente", () => {
    render(<Footer />);
    const footerText = screen.getByText(/© 2024 Mateus Cibelli/i);

    // Verifica se o texto do copyright está presente
    expect(footerText).toBeInTheDocument();
  });

  /**
   * Localiza os botões de rede social
   * Confirma que os botões GitHub, LinkedIn e Email estão presentes.
   */
  it("exibe os botões de GitHub, LinkedIn e Email", () => {
    render(<Footer />);

    const githubButton = screen.getByRole("button", { name: /GitHub/i });
    const linkedinButton = screen.getByRole("button", { name: /LinkedIn/i });
    const emailLink = screen.getByRole("link", { name: /Email/i });

    // Garante que os botões GitHub e LinkedIn estão presentes
    expect(githubButton).toBeInTheDocument();
    expect(linkedinButton).toBeInTheDocument();

    // Garante que o botão de Email está presente e com link correto
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute(
      "href",
      "mailto:mateuscibelli@hotmail.com"
    );
  });

  /**
   * Simula clique nos botões (GitHub e LinkedIn)
   * Apenas para verificar que são interativos, não abre URLs.
   */
  it("permite interação com os botões GitHub e LinkedIn", async () => {
    render(<Footer />);
    const user = userEvent.setup();

    const githubButton = screen.getByRole("button", { name: /GitHub/i });
    const linkedinButton = screen.getByRole("button", { name: /LinkedIn/i });

    // Simula clique nos botões sem erro
    await user.click(githubButton);
    await user.click(linkedinButton);

    // Confirma que os botões ainda estão presentes após clique
    expect(githubButton).toBeInTheDocument();
    expect(linkedinButton).toBeInTheDocument();
  });
});