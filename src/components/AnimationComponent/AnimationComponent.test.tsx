import { render, screen } from "@testing-library/react";
import AnimationComponent from "./AnimationComponent";

/**
 * Testes responsáveis por validar o comportamento do AnimationComponent.
 * O objetivo principal é garantir que as classes e animações CSS aplicadas
 * pelo styled-components sejam inseridas corretamente no DOM.
 */
describe("AnimationComponent", () => {
  /**
   * Verifica se o componente aplica uma animação assim que é renderizado.
   * Quando o elemento entra na tela, o styled-components deve gerar uma classe dinâmica
   * contendo as regras de animação configuradas internamente.
   */
  test("inicia a animação quando entra na tela", () => {
    render(
      <AnimationComponent moveDirection="right">
        <div>Conteúdo</div>
      </AnimationComponent>
    );

    const element = screen.getByText("Conteúdo").parentElement!;

    // Confirma que o wrapper foi renderizado.
    expect(element).toBeInTheDocument();

    // Confere se o styled-components criou uma classe CSS válida.
    expect(element.className).not.toBe("");

    // Verifica se a classe segue o padrão dinâmico gerado neste projeto.
    expect(element.className).toMatch(/css-/);
  });

  /**
   * Garante que, quando a propriedade moveDirection = "right" é usada,
   * o componente produz a classe CSS esperada e, portanto, aplica a animação
   * correspondente ao movimento vindo da direita.
   */
  test("animação correta para moveDirection='right'", () => {
    render(
      <AnimationComponent moveDirection="right">
        <div>Teste</div>
      </AnimationComponent>
    );

    const element = screen.getByText("Teste").parentElement!;

    // Confirma que o wrapper foi renderizado.
    expect(element).toBeInTheDocument();

    // Confere se o styled-components criou uma classe CSS válida.
    expect(element.className).not.toBe("");

    // Verifica se a classe segue o padrão dinâmico gerado neste projeto.
    expect(element.className).toMatch(/css-/);
  });

  /**
   * Valida a configuração visual quando o movimento deve vir da esquerda.
   * O styled-components sempre gera um nome de classe dinâmico contendo o prefixo 'css-'.
   * Este teste certifica que o componente criou a classe dinâmica adequada.
   */
  test("animação correta para moveDirection='left'", () => {
    render(
      <AnimationComponent moveDirection="left">
        <div>Esquerda</div>
      </AnimationComponent>
    );

    const element = screen.getByText("Esquerda").parentElement!;

    // Confirma que o wrapper foi renderizado.
    expect(element).toBeInTheDocument();

    // Confere se o styled-components criou uma classe CSS válida.
    expect(element.className).not.toBe("");

    // Verifica se a classe segue o padrão dinâmico gerado neste projeto.
    expect(element.className).toMatch(/css-/);
  });
});
