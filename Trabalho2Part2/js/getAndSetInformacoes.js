function checkItemExiste(ehLogin, ehCadastro, ehInicio) {
    let email = sessionStorage.getItem('email');
    let senha = sessionStorage.getItem('senha');
    let nome = sessionStorage.getItem('nome');
    if (ehLogin) {
        if (sessionStorage.getItem('lembrar') == null && document.getElementById("checkbox").checked) {
            setItemStorage('lembrar', document.getElementById("checkbox").checked);
        }
        if (validateInformacoesLogin(email, nome, senha)) {
            return true;
        } else {
            if (abrirAlert("Aviso", "Você não possui cadastro, iremos te redirecionar para a tela de cadastros, continuar?", "formCadastro.html", true)) {
                return false;
            }
        }
    } else if (ehCadastro) {
        setItemStorage('nome', document.getElementById('name').value);
        setItemStorage('email', document.getElementById('email').value);
        setItemStorage('senha', document.getElementById('senha').value);
    } else if (ehInicio) {
        if (email && nome && senha) {
            return true;
        } else {
            abrirAlert("Aviso", "Você não possui cadastro, iremos te redirecionar para a tela de cadastros, continuar?", "formCadastro.html", false);
            return false;
        }
    }
}

function setItemStorage(chave, valor) {
    sessionStorage.setItem(chave, valor);
}

function removeItemStorage(item) {
    sessionStorage.removeItem(item);
}

function limparStorage() {
    sessionStorage.clear();
    localStorage.clear();
}

function validateInformacoesLogin(email, nome, senha) {
    if (email == document.getElementById('email').value &&
        senha == document.getElementById('senha').value) {
        return true;
    }
    return false;
}
