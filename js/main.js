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

    var editarBtn = document.createElement("button");
    editarBtn.id = "editarBtn";
    editarBtn.textContent = "Editar";
    var editarTd = document.createElement("td");

    editarTd.appendChild(editarBtn);
    pessoaTr.appendChild(editarTd);


    var removerBtn = document.createElement("button");
    removerBtn.id = "removerBtn";
    removerBtn.textContent = "Remover";
    var removerTd = document.createElement("td");

    removerTd.appendChild(removerBtn);
    pessoaTr.appendChild(removerTd);
})