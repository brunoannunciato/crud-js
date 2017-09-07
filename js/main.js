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
    nomeEdit.classList.add("remove");
    nomeEdit.id = "nomeEdit";

    var formProfissao = document.querySelector("#formProfissao"),
    profissao = formProfissao.value,
    profissaoTd = document.createElement("td");
    profissaoTd.classList.add("profissaoTd");
    profissaoTd.textContent = profissao;
    var profissaoEdit = document.createElement("input");
    profissaoEdit.setAttribute("type", "text");
    profissaoEdit.setAttribute("value", profissao);
    profissaoEdit.classList.add("remove");
    profissaoEdit.id = "profissaoEdit";
    

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
        nomeEdit.classList.remove("remove");
        nomeEdit.classList.add("add");
        nomeTd.textContent = "";
        nomeTd.appendChild(nomeEdit);

        profissaoEdit.classList.remove("remove");
        profissaoEdit.classList.add("add");
        profissaoTd.textContent ="";
        profissaoTd.appendChild(profissaoEdit);

        this.classList.add("remove");
        var salvarBtn = document.createElement("button");
        salvarBtn.id = "salvarBtn";
        salvarBtn.textContent = "Salvar";
        editarTd.appendChild(salvarBtn);

        salvarBtn.addEventListener("click", function(){
            this.classList.add("remove");
            editarBtn.classList.add("add");

            var nomeEditado = document.querySelector("#nomeEdit").value;
            nomeEdit.classList.remove("add");
            nomeEdit.classList.add("remove");
            var nome = nomeEditado;
            nomeTd.textContent = nome;

            var profissaoEditada = document.querySelector("#profissaoEdit").value;
            profissaoEdit.classList.remove("add");
            profissaoEdit.classList.add("remove");
            var profissao = profissaoEditada;
            profissaoTd.textContent = profissao;

        });
    });
});
