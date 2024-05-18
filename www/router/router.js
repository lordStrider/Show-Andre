
import { constantes } from "../js/constantes.js";
import { templateTemplo } from "../template/templateTemplo.js";
import { templateMercado } from "../template/templateMercado.js";
import { templateWorldMap } from "../template/templateWorldMap.js";
import { areaGeral } from "../pages/arealGeral.js";
import { changeAudio } from "../js/changeAudio.js";
import { perguntas } from "../js/PerguntasRespostas.js";
export const router = (_rota)=> {
    const http = constantes.url;
    const token = localStorage.getItem("access_token");
    const usuario = localStorage.getItem("usuario");
    
    console.log(_rota)
      switch (_rota) {
          case 'Sair':
           console.log(`Valor da rota: ${_rota}`)
            break;
          case 'TEMPLO':
            //cadastraColaboradores(token,http)
            templateTemplo(token,http)
            break;
          case 'MERCADO':
            templateMercado();
            break;
          case 'inicio':
            areaGeral(usuario);
            break;
          case 'AVENTURA':
           // perguntas(usuario,"src","img/jesusavatar.jpg");
           templateWorldMap();
          break;
          case 'Gerenciar Escalas':
            gerenciarEscalas(token,http)
          break;
          case 'Escala Colaboradores':
            escalaColab(token,http)
          break;
          case 'Extrato':
            extrato(token,http)
          break;
          default:
            console.log('Rota não reconhecida${}');
        }
  }