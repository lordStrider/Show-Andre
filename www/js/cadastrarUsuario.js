import { constantes } from "./constantes.js";
export const cadastrarUsuario = () => {
  let criaElemento = document.createElement("div");
  const criaCadastro = `
    <div class="tituloCad">Cadastre-se</div>
      <form class="meuform">
        <div class="mb-3">
          <input type="text" name="usuario" class="input-field" placeholder="Nome de usuário" required>
        </div>
        <div class="mb-3">
          <input type="password" name="senha" class="input-field" placeholder="Senha" required>
        </div>
        <div class="mb-3">
          <input type="password" name="senha2" class="input-field" placeholder="Confirme a senha" required>
        </div>
        <div class="mb-3">
          <input type="email" name="email" class="input-field" placeholder="E-mail" required>
        </div>
        <div class="mb-3">
          <div class="img-profile"></div>
          <input type="file" class="form-control" name="avatar" id="inputFile">
        </div>
        <div class="d-grid">
          <div id="cadastrar">Cadastrar</div>
        </div>
      </form>
    `;
  criaElemento.innerHTML = criaCadastro;
  criaElemento.classList.add("cadBlock");

  const appDiv = document.querySelector("#app");
  appDiv.parentNode.insertBefore(criaElemento, appDiv);

  let addFoto = document.querySelector(".img-profile");
  let fileInput = document.querySelector("#inputFile");
  addFoto.addEventListener('click', () => {
    fileInput.click();
  });
  fileInput.addEventListener('change', function () {
    if (fileInput.files && fileInput.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        addFoto.style.backgroundImage = `url("${e.target.result}")`;
      }
      reader.readAsDataURL(fileInput.files[0])
    }
  })
  $(".areaLogin").fadeOut("slow")
  $(".cadBlock").animate({ top: "120vh" }, 500, "linear", () => {
    // setTimeout(()=> {
    //     $(".cadBlock").animate({ top: "-600px" }, 200, () => {
    //         //$("#iconToast").removeClass(_icon);
    //     });
    // },2000)

  });
  $('#cadastrar').click(function () {
    // Pega os dados do formulário dentro da div
    var formData = new FormData(document.querySelector('form'));

    // Faz a requisição AJAX
    $.ajax({
      url: `${constantes.url}registrar_usuario.php`,
      type: 'POST',
      data: formData,
      async: true,
      cache: false,
      contentType: false,
      processData: false,
      crossOrigin: true, // Habilita o CORS
      success: function (response) {
        // Manipula a resposta do servidor
       
        $(".cadBlock").animate({ top: "-120vh" }, 500, "linear", () => {
          $(".areaLogin").fadeIn("slow")
          $(".cadBlock").remove();
          alert(response);
        });
      },
      error: function (xhr, status, error) {
        // Manipula erros
        console.error(xhr.responseText);
      }
    });
  });

}