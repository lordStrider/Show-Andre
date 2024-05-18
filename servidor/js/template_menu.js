export const templateMenu = `
<nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <!-- Botão de menu responsivo -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menuNavbar"
          aria-controls="menuNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Itens de menu -->
        <div class="collapse navbar-collapse justify-content-center" id="menuNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sobre nós</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contato</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" data-toggle="modal" data-target="#cadastroModal">Cadastro</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#acessoModal" data-toggle="modal" data-target="#acessoModal">Acesso</a>
            </li>
          </ul>
        </div>
      </nav>
`;
