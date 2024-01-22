

function nextQuestion(nextPage) {
    var resultContainer = document.getElementById('resultContainer');
    var questionContainer = document.getElementById('questionContainer');

    resultContainer.innerHTML = '';
    resultContainer.className = '';

    // Exibe a próxima pergunta
    questionContainer.style.display = 'block';

    // Redireciona para a próxima página (se necessário)
    if (nextPage) {
        window.location.href = nextPage;
    }
}

function openPDF(pdfPath) {
    var pdfContainer = document.getElementById('pdfContainer');
    var pdfIframe = document.getElementById('pdfIframe');

    // Exibe o contêiner do PDF e define o src do iframe
    pdfContainer.style.display = 'block';
    pdfIframe.src = pdfPath;
}

function closePDF() {
    var pdfContainer = document.getElementById('pdfContainer');
    var pdfIframe = document.getElementById('pdfIframe');

    // Oculta o contêiner do PDF
    pdfContainer.style.display = 'none';

    // Limpa o src do iframe para liberar recursos
    pdfIframe.src = '';
}
function disableRadioButtons() {
    var radioButtons = document.querySelectorAll('input[name="answer"]');
    radioButtons.forEach(button => button.disabled = true);
}


function nextQuestion(nextPage) {
    // Você pode adicionar lógica adicional aqui, se necessário
    window.location.href = nextPage; // Isso redirecionará para a próxima página
}

function confirmFinish() {
    // Perguntar ao usuário se tem certeza
    var confirmation = confirm("Você tem certeza que deseja finalizar o teste?");
    if (confirmation) {
        finishTest();
    }
}

function finishTest() {
    // Esconder elementos não necessários
    document.getElementById('questionContainer').style.display = 'none';
    document.getElementById('nextButton').style.display = 'none';
    document.getElementById('finishButton').style.display = 'none';

    // Exibir estatísticas
    var statisticsContainer = document.getElementById('statisticsContainer');
    statisticsContainer.style.display = 'block';

    // Atualizar estatísticas
    document.getElementById('totalQuestions').textContent = totalQuestions;
    document.getElementById('correctAnswers').textContent = correctAnswers;
    document.getElementById('incorrectAnswers').textContent = incorrectAnswers;

    // Calcular porcentagem
    var percentage = (correctAnswers / totalQuestions) * 100;
    document.getElementById('percentage').textContent = percentage.toFixed(2) + '%';

    // Exibir o botão de reiniciar teste
    document.getElementById('restartButton').style.display = 'block';
}

function restartTest() {
    // Limpar dados do localStorage
    localStorage.removeItem('totalQuestions');
    localStorage.removeItem('correctAnswers');
    localStorage.removeItem('incorrectAnswers');

    // Ocultar o botão de reiniciar teste
    document.getElementById('restartButton').style.display = 'none';

    // Redirecionar para a página index.html
    window.location.href = '001.html';
}


    function redirecionarPorNumero() {
        // Obter o valor digitado na caixa de texto
        var numeroQuestao = document.getElementById('questaoInput').value;

        // Verificar se o valor é um número positivo
        if (/^\d+$/.test(numeroQuestao)) {
            // Construir o nome do arquivo HTML com base no número da questão
            var nomeArquivo = numeroQuestao + '.html';

            // Redirecionar para a página correspondente
            window.location.href = nomeArquivo;
        } else {
            // Exibir uma mensagem de erro se o valor não for um número
            alert('Por favor, digite um número válido para a questão.');
        }
    }
