let image;
let texto = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et'
+ 'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip' +
'ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu' +
'fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia' +
'deserunt mollit anim id est laborum';
let dataTable;

function generateTable() {
    let table = document.getElementById('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    let linha1 = document.createElement('tr');
    let cabecalho1 = document.createElement('th');
    cabecalho1.innerHTML = "Titulo";
    let cabecalho2 = document.createElement('th');
    cabecalho2.innerHTML = "Imagem";
    let cabecalho3 = document.createElement('th');
    cabecalho3.innerHTML = "Categoria";
    let cabecalho4 = document.createElement('th');
    cabecalho4.innerHTML = "Data de lançamento";
    let cabecalho5 = document.createElement('th');
    cabecalho5.innerHTML = "Desenvolvedora";
    let cabecalho6 = document.createElement('th');
    cabecalho6.innerHTML = "Valor";

    linha1.appendChild(cabecalho1);
    linha1.appendChild(cabecalho2);
    linha1.appendChild(cabecalho3);
    linha1.appendChild(cabecalho4);
    linha1.appendChild(cabecalho5);
    linha1.appendChild(cabecalho6);
    thead.appendChild(linha1);
    setValoresTable(true);
}

async function setValoresTable(ehInicio) {
    try {
        if (!dataTable) {
            dataTable = $('#table').DataTable({
                pageLength : 5,
                lengthMenu: [[5], [5]]
            });
        }
        if (!ehInicio) {
            await dataTable.row.add([
                document.getElementById('titulo').value,
                '<img src="' + image + '" height="50" id="imageCadastro">',
                document.getElementById('select-options').options[document.getElementById('select-options').selectedIndex].value,
                document.getElementById('dataLancamento').value.split('-').reverse().join('/'),
                document.getElementById('desenvolvedora').value,
                document.getElementById('valor').value
            ]).draw(false);
        }
    } catch (e) { }
}

function limparValoresTable() {
    $('#table').DataTable().clear().draw();
}

(() => {
    $('#destaques').click((e) => {
        $('.menuLateral ul .item-destaques').toggleClass('mostra');
        e.stopPropagation();
        document.getElementById('cardText').innerHTML = 'Os destaques são: ' + texto;
        resetarNegrito();
        document.getElementById('destaques').style.fontWeight = "bold";
    });

    $('#jogos').click((e) => {
        if (e.target.className == 'sub-menu') {
            $('.menuLateral ul .item-jogos').toggleClass('mostra');
        } else {
            if (e.target.className == 'categoria') {
                $('.menuLateral ul .item-jogos .categoria .item-categoria').toggleClass('mostra');
            }
        }
        document.getElementById('cardText').innerHTML = 'Os jogos são: ' + texto;
        resetarNegrito();
        document.getElementById('jogos').style.fontWeight = "bold";
    });

    $('#categoria').click((e) => {
        $('.menuLateral ul .item-categoria').toggleClass('mostra');
        e.stopPropagation();
        document.getElementById('cardText').innerHTML = 'As categorias são: ' + texto;
        resetarNegrito();
        document.getElementById('categoria').style.fontWeight = "bold";
    });

    $('#loja').click((e) => {
        $('.menuLateral ul .item-loja').toggleClass('mostra');
        e.stopPropagation();
        document.getElementById('cardText').innerHTML = 'A loja é: ' + texto;
        resetarNegrito();
        document.getElementById('loja').style.fontWeight = "bold";
    });

    $('#comunidade').click((e) => {
        $('.menuLateral ul .item-comunidade').toggleClass('mostra');
        e.stopPropagation();
        document.getElementById('cardText').innerHTML = 'A comunidade é: ' + texto;
        resetarNegrito();
        document.getElementById('comunidade').style.fontWeight = "bold";
    });

    $('#lancamento').click(() => {
        document.getElementById('cardText').innerHTML = 'O lançamento é: ' + texto;
        resetarNegrito();
        document.getElementById('lancamento').style.fontWeight = "bold";
    });

    $('#inicio').click(() => {
        location.href = 'formLogin.html';
    });

    $('#noticias').click(() => {
        document.getElementById('cardText').innerHTML = 'As notícias são: ' + texto;
        resetarNegrito();
        document.getElementById('noticias').style.fontWeight = "bold";
    });
})();

function getImage() {
    let arquivo = document.querySelector('input[type=file]').files[0];
    let reader = new FileReader();

    reader.onloadend = () => {
        image = reader.result;
    }

    if (arquivo) {
        reader.readAsDataURL(arquivo);
    }
}

function resetarNegrito() {
    document.getElementById('inicio').style.fontWeight = "normal";
    document.getElementById('lancamento').style.fontWeight = "normal";
    document.getElementById('destaques').style.fontWeight = "normal";
    document.getElementById('jogos').style.fontWeight = "normal";
    document.getElementById('loja').style.fontWeight = "normal";
    document.getElementById('comunidade').style.fontWeight = "normal";
    document.getElementById('noticias').style.fontWeight = "normal";
}
