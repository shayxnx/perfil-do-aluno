function trocarImagem(nome) {
    document.getElementById("imagem").src = nome;
}

function adicionarNovaInfo() {
    const campo = document.getElementById("novaInfoInput");
    const valor = campo.value.trim();

    if (valor !== "") {
        const p = document.createElement("p");
        p.textContent = valor;
        document.getElementById("novas-informacoes").appendChild(p);
        campo.value = "";
    }
}

function adicionarNovaUc() {
    const campo = document.getElementById("novaUcInput");
    const valor = campo.value.trim();

    if (valor !== "") {
        const li = document.createElement("li");
        li.textContent = valor;
        document.getElementById("lista-ucs").appendChild(li);
        campo.value = "";
    }
}

function validarEmail() {
    const emailInput = document.getElementById("email");
    const erroEmail = document.getElementById("erro-email");
    const email = emailInput.value.trim();
    
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "" || regexEmail.test(email)) {
        emailInput.style.borderColor = "";
        erroEmail.textContent = "";
    } else {
        emailInput.style.borderColor = "red";
        erroEmail.textContent = "E-mail inválido!";
    }
}

function validarCPF() {
    const cpfInput = document.getElementById("cpf");
    const erroCpf = document.getElementById("erro-cpf");
    const cpf = cpfInput.value.trim();

    const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

    if (cpf === "" || regexCPF.test(cpf)) {
        cpfInput.style.borderColor = "";
        erroCpf.textContent = "";
    } else {
        cpfInput.style.borderColor = "red";
        erroCpf.textContent = "CPF inválido! Formato esperado: 000.000.000-00";
    }
}
