const checkButton = document.getElementById('checkButton');
const resultMessage = document.getElementById('resultMessage');

function calculateAge() {
    const day = parseInt(document.getElementById('dayInput').value);
    const month = parseInt(document.getElementById('monthInput').value);
    const year = parseInt(document.getElementById('yearInput').value);

    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    const ageInMilliseconds = today - birthDate;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

    if (isNaN(ageInYears)) {
        resultMessage.textContent = 'Por favor, insira uma data válida.';
    } else if (ageInYears >= 18) {
        resultMessage.textContent = 'Você é maior de idade!';
    } else {
        resultMessage.textContent = 'Você é menor de idade.';
    }
}

checkButton.addEventListener('click', calculateAge);


var nomeUsuario = prompt("Por favor, digite seu nome:");

if (nomeUsuario !== null && nomeUsuario !== "") {
    alert("Olá, " + nomeUsuario + "! Bem-vindo(a) ao verificador de idade.");
} else {
    alert("Você precisa inserir um nome válido. Por favor, recarregue a página e tente novamente.");
}





function solicitarNomeUsuario() {
    var nomeUsuario = prompt("Por favor, digite seu nome:");

    if (nomeUsuario !== null && nomeUsuario !== "") {
        document.getElementById("mensagem").innerText = "Olá, " + nomeUsuario + "! Bem-vindo(a) ao nosso sistema.";
    } else {
        alert("Você precisa inserir um nome válido. Por favor, tente novamente.");
        solicitarNomeUsuario();
    }
}
solicitarNomeUsuario();

document.getElementById("botaoResetar").addEventListener("click", function () {
    location.reload();
});









function solicitarNomeUsuario() {
    var nomeUsuario = prompt("Por favor, digite seu nome:");

    if (nomeUsuario !== null && nomeUsuario !== "") {

        alert("Olá, " + nomeUsuario + "! Bem-vindo(a) ao nosso sistema.");

    } else {

        alert("Você precisa inserir um nome válido. Por favor, tente novamente.");
        solicitarNomeUsuario();
    }
}


solicitarNomeUsuario();



