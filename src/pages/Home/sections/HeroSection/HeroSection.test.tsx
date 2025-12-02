import { render, screen, fireEvent } from "@testing-library/react";
import HeroSection from "./HeroSection";
import { vi } from "vitest";

/**
 * Mock do Typewriter para evitar timers e animações no ambiente de teste.
 * O componente é simplificado para exibir o texto imediatamente.
 */
vi.mock("../../../../components/Typewriter/Typewriter", () => {
  return {
    default: ({ text }: any) => <div>{text}</div>
  }
});

// Mock do PDF importado, já que o Vitest não carrega arquivos binários.
vi.mock("../../../../assets/pdfs/Open.pdf", () => ({
  default: "mock-open.pdf"
}));

/**
 * Testes responsáveis por validar o comportamento do HeroSection.
 * Aqui verificamos a renderização dos elementos principais, bem como o disparo
 * das ações de download e de abrir email. Apenas comportamentos visíveis e
 * interações diretas do usuário são validados.
 */
describe("HeroSection Component", () => {
  it("deve renderizar o nome 'Mateus Cibelli'", () => {
    // Renderiza o componente completo
    render(<HeroSection />);

    // Garante que o nome principal aparece na tela
    expect(screen.getByText("Mateus Cibelli")).toBeInTheDocument();
  });

  it("deve exibir o texto do Typewriter", () => {
    render(<HeroSection />);

    // O mock garante que o texto "I'm a Web Developer" aparece diretamente
    expect(screen.getByText("I'm a Web Developer")).toBeInTheDocument();
  });

  it("deve renderizar o botão de Download CV", () => {
    render(<HeroSection />);

    // Busca pelo botão usando o texto visível
    expect(screen.getByText("Download CV")).toBeInTheDocument();
  });

  it("deve renderizar o botão de Contact me", () => {
    render(<HeroSection />);

    // Garante que o botão "Contact me" aparece na tela
    expect(screen.getByText("Contact me")).toBeInTheDocument();
  });

  it("deve chamar window.open ao clicar em 'Contact me'", () => {
    render(<HeroSection />);

    // Cria um mock para window.open
    const openMock = vi.spyOn(window, "open").mockImplementation(() => null);

    // Encontra o botão e simula o clique
    const contactButton = screen.getByText("Contact me");
    fireEvent.click(contactButton);

    // Verifica se a função foi chamada
    expect(openMock).toHaveBeenCalled();

    openMock.mockRestore();
  });

  it("deve iniciar o download ao clicar em 'Download CV'", () => {
    render(<HeroSection />);

    // Simula o clique no link que dispara o download
    const clickMock = vi.fn();

    // Guarda a função original (necessário para fallback seguro)
    const originalCreateElement = document.createElement.bind(document);

    // Cria um <a> real antes do mock
    const realAnchor = originalCreateElement("a");
    realAnchor.click = clickMock;

    // Mocka document.createElement SEM recursão
    const createElementMock = vi
      .spyOn(document, "createElement")
      .mockImplementation((tag: string) => {
        if (tag === "a") return realAnchor;
        return originalCreateElement(tag); // fallback correto
      });

    const downloadButton = screen.getByText("Download CV");
    fireEvent.click(downloadButton);

    // Confirma que o link foi clicado (download simulado)
    expect(clickMock).toHaveBeenCalled();

    // Restaura o comportamento original
    createElementMock.mockRestore();
  });
});
