$(document).ready(function () {
  $("#content").load("telasPermissao/formSolicitarPermissao.html");

  $("#linkAtribuir").click(function (e) {
    e.preventDefault();
    $("#linkAtribuir").removeClass("active");
    $("#linkSolicitar").removeClass("active");
    $(this).addClass("active");
    $("#content").load("telasPermissao/formAtribuirPermissao.html");
  });

  $("#linkSolicitar").click(function (e) {
    e.preventDefault();
    $("#linkAtribuir").removeClass("active");
    $("#linkSolicitar").removeClass("active");
    $(this).addClass("active");
    $("#content").load("telasPermissao/formSolicitarPermissao.html");
  });
});


const pnUsuario = "10101010";

//select do banco para saber as permissões que o usuario tem

const vetPermissoes = ['A1', 'V1','V1','V1','V1','V1','V1','V1','V1','V1','V1'];

const permissoes = [
    intra_af = vetPermissoes[0],
    intra_qualidade = vetPermissoes[1],
    intra_utilidades = vetPermissoes[2],
    intra_aciaria = vetPermissoes[3]
]

console.log(intra_af);

function analisaPermissoes(){
    for(let i = 0; i < vetPermissoes.length; i++){
        
    }
}

