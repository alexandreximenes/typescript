const controller = new NegociacaoController();
$('.form').submit(controller.adiciona.bind(controller));
$('#importa-negociacao').click(controller.importaDados.bind(controller));
