(() => {
    document.getElementById("button-cadastrar").onclick = () => {
        let form = $("#formCadastro").serializeArray();
        let error = true;

        for (let input in form) {
            let element = $("#" + form[input]['name']);
            let valid = form[input]["value"];
            let error_element = $("p", element.parent());
            if (valid.trim() != '') {
                error_element.removeClass("erro").addClass("semErro");
                error = false;
            }
            else {
                error_element.removeClass("semErro").addClass("erro");
                error = true;
                return;
            }
        }

        if (!document.getElementById("checkbox").checked) {
            document.getElementById("semErroSpan").style.cssText = "display: block; color: red; margin-left: 30px;";
            error = true;
            return;
        } else {
            document.getElementById("semErroSpan").style.cssText = "display: none;";
            error = false;
        }

        if (!error) {
            checkItemExiste(false, true, false);
            location.href = 'formLogin.html';
        }
    };
})();

function limparFormulario() {
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("senha").value = '';
    document.getElementById("senha-in").value = '';
    document.getElementById("date").value = '';
    document.getElementById("checkbox").checked = false;
}