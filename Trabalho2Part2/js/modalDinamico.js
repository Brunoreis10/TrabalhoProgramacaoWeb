function abrirAlert(titulo, descricao, redirecionar, ehLogin) {
    let alertAux = null;
    if (alertAux !== null) {
        alertAux.remove();
    }

    alertAux = document.createElement('div');
    alertAux.innerHTML = `
        <div class="popup_box">
            <h1>${titulo}</h1>
            <label>${descricao}</label>
            <div class="btns">
            <a href="#" class="btn1" id="btn-nao">Não</a>
            <a href="#" class="btn2" id="btn-sim">Sim</a>
            </div>
        </div>
          `;

    document.body.append(alertAux);
    $('.popup_box').css("display", "block");
    validaOpcoesModal(redirecionar, ehLogin);
}

function validaOpcoesModal(redirecionar, ehLogin) {
    $('#btn-sim').click(() => {
        $('.popup_box').css("display", "none");
        redireciona(redirecionar);
    });
}

function redireciona(redirecionar) {
    location.href = redirecionar;
}