const pnUsuario = "10101010";

//select do banco para saber as permissões que o usuario tem

const vetPermissoes = ['A1', 'V1','V1','V1','V1','V1','V1','V1','V1','V1','V1'];






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
