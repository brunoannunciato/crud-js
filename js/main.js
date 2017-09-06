var salvarBtn = document.querySelector("#adicionar-pessoa");

salvarBtn.addEventListener("click", function(event) {
    event.preventDefault();



    var tabela = document.querySelector("#corpo-tabela"),
    pessoaTr = document.createElement("tr");
    tabela.appendChild(pessoaTr);
    
    var formNome = document.querySelector("#formNome"),
    nome = formNome.value,
    nomeTd = document.createElement("td");
    nomeTd.classList.add("nometd");
    nomeTd.textContent = nome;

    var formProfissao = document.querySelector("#formProfissao"),
    profissao = formProfissao.value,
    profissaoTd = document.createElement("td");
    profissaoTd.classList.add("profissaotd");
    profissaoTd.textContent = profissao;
    

    pessoaTr.appendChild(nomeTd);
    pessoaTr.appendChild(profissaoTd);
})