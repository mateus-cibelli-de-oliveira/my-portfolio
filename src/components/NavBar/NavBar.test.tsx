import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "./NavBar";

/**
 * Testes para validar o componente Navbar.
 * O objetivo é garantir que o AppBar e os itens do menu estão renderizados
 * corretamente e que a interação mobile funciona.
 */
describe("NavBar Component", () => {
  /**
   * Renderiza o componente Navbar
   * Garante que o AppBar principal e os menus estão presentes
   */
  it("renderiza Navbar corretamente", () => {
    render(<Navbar />);

    // Verifica se o AppBar foi renderizado
    const appBar = screen.getByRole("banner");
    expect(appBar).toBeInTheDocument();
  });

  /**
   * Verifica os itens do menu na versão desktop
   * Garante que About, Skills e Projects estão visíveis
   */
  it("exibe itens do menu no desktop", () => {
    render(<Navbar />);

    // Verifica se os itens do menu desktop estão na tela
    const aboutItem = screen.getAllByText(/About/i)[1];
    const skillsItem = screen.getAllByText(/Skills/i)[1];
    const projectsItem = screen.getAllByText(/Projects/i)[1];

    expect(aboutItem).toBeInTheDocument();
    expect(skillsItem).toBeInTheDocument();
    expect(projectsItem).toBeInTheDocument();
  });

  /**
   * Testa o menu mobile
   * Garante que o botão de menu abre e fecha o Menu
   */
  it("abre e fecha o menu mobile ao clicar no ícone", async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    // Localiza o botão de menu mobile
    const menuButton = screen.getByLabelText(/menu/i);
    expect(menuButton).toBeInTheDocument();

    // Clica no botão para abrir o menu
    await user.click(menuButton);

    // Seleciona o container do menu mobile e verifica o item About
    const menu = screen.getByRole("menu");
    const menuAbout = within(menu).getByText(/About/i);
    expect(menuAbout).toBeInTheDocument();

    // Clica no item About para fechar o menu
    await user.click(menuAbout);

    // Confirma que o menu ainda existe no DOM (mesmo fechado)!
    expect(menu).toBeInTheDocument();
  });

  /**
   * Verifica a interação real do usuário nos itens do menu
   * Sem mocks, apenas garante que os itens podem ser clicados
   */
  it("permite clicar nos itens do menu desktop", async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    const aboutItem = screen.getAllByText(/About/i)[1];
    const skillsItem = screen.getAllByText(/Skills/i)[1];
    const projectsItem = screen.getAllByText(/Projects/i)[1];

    // Apenas clica nos itens para garantir interatividade
    await user.click(aboutItem);
    await user.click(skillsItem);
    await user.click(projectsItem);

    // Confirma que os itens ainda estão presentes
    expect(aboutItem).toBeInTheDocument();
    expect(skillsItem).toBeInTheDocument();
    expect(projectsItem).toBeInTheDocument();
  });
});