//elementos do dom
const cityInput = document.getElementById('cityInput')
const searchBtn = document.getElementById('searchBtn')
const weatherResult = document.getElementById('weatherResult')
const errorMessage = document.getElementById('errorMessage')

// Seu API  key (vamos colocar depois)
const API_KEY = '9770d05a4dc831f95a3a81a85db08819'

// Event Listeners
searchBtn.addEventListener('click', handleSearch)
cityInput.addEventListener('keypress', function (event) {
    // se apertar enter, busca tambem
    if (event.key === 'Enter') {
        handleSearch()
    }
})

// Função principal busca 
function handleSearch() {
    const city = cityInput.ariaValueMax.trim()

    //validação: campo vazio?
    if (city === '') {
        showError('Por favor, digite o nome de uma cidade')
        return
    }

    //Limpa mensagens anteriores
    hideError()
    hideWeather()

    //busca o clima
    console.log('buscando clima para', city)
    fetchWeather(city)
}

//mostra erro
function showError(message) {
    errorMessage.textContent = message
    errorMessage.classList.remove('hidden')
}

//para mostrar erro
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden')
}

//para esconder o erro
function hideError() {
    errorMessage.classList.add('hidden')
}

// Função para esconder resultado do clima
function hideWeather() {
    weatherResult.classList.add('hidden');
}

// Função para mostrar resultado do clima
function showWeather() {
    weatherResult.classList.remove('hidden');
}

// Função que vai buscar dados da API
function fetchWeather(city) {
    // Por enquanto só um console.log
    console.log('Função fetchWeather chamada com:', city);

    // Vamos implementar aqui no próximo passo!
    showError('API ainda não implementada (próximo passo!)');
}

