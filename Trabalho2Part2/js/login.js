(() => {
    document.getElementById("button-entrar").onclick = () => {
        let form = $("#formLogin").serializeArray();
        let error = true;
        
        for (let input in form) {
            let element = $("#"+form[input]['name']);
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

        if (!error) {
            location.href = 'inicio.html';
        }
    };

    document.getElementById("button-cadastro").onclick = () => {
        location.href = 'formCadastro.html';
    };
})();