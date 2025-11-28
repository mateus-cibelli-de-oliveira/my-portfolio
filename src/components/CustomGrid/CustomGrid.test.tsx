import { render, screen } from "@testing-library/react";
import CustomGrid from "./CustomGrid";

/**
 * Testes responsáveis por validar o comportamento do componente CustomGrid.
 * O objetivo principal é garantir que o componente renderiza corretamente
 * com diferentes valores de `variant`.
 */
describe("CustomGrid Component", () => {
  /**
   * Cenário: renderizar o componente com `variant="item"`
   * Resultado esperado: o componente deve renderizar sem erros.
   */
  it("renderiza o componente com variant='item'", () => {
    render(<CustomGrid variant="item" data-testid="grid" />);
    const grid = screen.getByTestId("grid");

    // Verifica se o elemento foi renderizado na tela.
    expect(grid).toBeInTheDocument();
  });

  /**
   * Cenário: renderizar o componente com `variant="container"`
   * Resultado esperado: o componente deve renderizar sem erros.
   */
  it("renderiza o componente com variant='container'", () => {
    render(<CustomGrid variant="container" data-testid="grid" />);
    const grid = screen.getByTestId("grid");

    // Confirma que o elemento está presente no DOM.
    expect(grid).toBeInTheDocument();
  });

  /**
   * Cenário: renderizar sem variante definida
   * Resultado esperado: o componente deve renderizar normalmente.
   */
  it("renderiza o componente sem prop variant", () => {
    render(<CustomGrid data-testid="grid" />);
    const grid = screen.getByTestId("grid");

    // Garante que o componente foi renderizado sem props adicionais.
    expect(grid).toBeInTheDocument();
  });
});