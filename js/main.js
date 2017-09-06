var salvarBtn = document.querySelector("#adicionar-pessoa");

salvarBtn.addEventListener("click", function(event) {
    event.preventDefault();

    var formNome = document.querySelector("#formNome");
    var nome = formNome.value;


    var tabela = document.querySelector("#corpo-tabela");
    var pessoaTr = document.createElement("tr");
    tabela.appendChild(pessoaTr);
    console.log(tabela)
})