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
    var nomeEdit = document.createElement("input");
    nomeEdit.setAttribute("type", "text");
    nomeEdit.setAttribute("value", nome);
    nomeEdit.classList.add("editar-off");
    nomeEdit.id = "nomeEdit";

    var formProfissao = document.querySelector("#formProfissao"),
    profissao = formProfissao.value,
    profissaoTd = document.createElement("td");
    profissaoTd.classList.add("profissaoTd");
    profissaoTd.textContent = profissao;
    var profissaoEdit = document.createElement("input");
    profissaoEdit.setAttribute("type", "text");
    profissaoEdit.setAttribute("value", profissao);
    profissaoEdit.classList.add("editar-off");
    profissaoEdit.id = profissaoEdit;
    

    pessoaTr.appendChild(nomeTd);
    pessoaTr.appendChild(profissaoTd);

    var editarBtn = document.createElement("button");
    editarBtn.id = "editarBtn";
    editarBtn.textContent = "Editar";
    var editarTd = document.createElement("td");
    editarTd.classList.add("editarTd");

    editarTd.appendChild(editarBtn);
    pessoaTr.appendChild(editarTd);


    var removerBtn = document.createElement("button");
    removerBtn.id = "removerBtn";
    removerBtn.textContent = "Remover";
    var removerTd = document.createElement("td");
    removerTd.classList.add("removerTd");

    removerTd.appendChild(removerBtn);
    pessoaTr.appendChild(removerTd);

    removerBtn.addEventListener("click", function(){
        pessoaTr.classList.add("fadeout");
        setTimeout(function(){
        pessoaTr.remove();
            }, 500);
    })

    editarBtn.addEventListener("click", function(){
        nomeEdit.classList.remove("editar-off");
        nomeEdit.classList.add("editar-on");
        nomeTd.textContent = "";
        nomeTd.appendChild(nomeEdit);

        profissaoEdit.classList.remove("editar-off");
        profissaoEdit.classList.add("editar-on");
        profissaoTd.textContent ="";
        profissaoTd.appendChild(profissaoEdit);

        editarBtn.classList.add("editar-off");
        var salvarBtn = document.createElement("button");
        salvarBtn.id = "salvarBtn";
        salvarBtn.textContent = "Salvar";
        editarTd.appendChild(salvarBtn);



    });
})
