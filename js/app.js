// ========================================
// APP.JS - Inicialização da aplicação
// ========================================

console.log('Script carregou!')

// Elementos do DOM
const cityInput = document.getElementById('cityInput')
const searchBtn = document.getElementById('searchBtn')
const weatherResult = document.getElementById('weatherResult')
const errorMessage = document.getElementById('errorMessage')
const loading = document.getElementById('loading')

console.log('cityInput:', cityInput)

// Sua API Key (coloque a sua aqui)
const API_KEY = '9770d05a4dc831f95a3a81a85db08819'

// Event Listeners
searchBtn.addEventListener('click', handleSearch)

// função para mostrar loading
function showLoading() {
    loading.classList.remmove('hidden')
}

// Função para esconder loading  
function hideLoading() {
    loading.classList.add('hidden')
}

cityInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleSearch();
    }
});

// Função principal de busca
function handleSearch() {
    console.log('handleSearch foi chamada');
    console.log('cityInput.value:', cityInput.value);
    
    const city = cityInput.value.trim()
    
    console.log('city após trim:', city)
    
    // Validação: campo vazio?
    if (city === '') {
        showError('Por favor, digite o nome de uma cidade')
        return
    }
    
    // Limpa mensagens anteriores
    hideError()
    hideWeather()
    showLoading()
    
    // Busca o clima
    console.log('Buscando clima para:', city)
    fetchWeather(city)
}

// Função para mostrar erro
function showError(message) {
    errorMessage.textContent = message
    errorMessage.classList.remove('hidden')
}

// Função para esconder erro
function hideError() {
    errorMessage.classList.add('hidden')

// Função para esconder resultado do clima
function hideWeather() {
    weatherResult.classList.add('hidden')
}

// Função para mostrar resultado do clima
function showWeather() {
    weatherResult.classList.remove('hidden')
}

// Função que busca dados da API
async function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`
    
    try {
        const response = await fetch(url)
        
        if (!response.ok) {
            hideLoading()
            if (response.status === 404) {
                showError('Cidade não encontrada. Tente novamente.');
            } else {
                showError('Erro ao buscar dados. Tente novamente mais tarde.')
            }
            return
        }
        
        const data = await response.json()
        console.log('Dados recebidos:', data)
        hideLoading()
        displayWeather(data)
        
    } catch (error) {
        console.error('Erro na requisição:', error)
        hideLoading()
        showError('Erro de conexão. Verifique sua internet.')
    }
}

// Função que exibe os dados na tela
function displayWeather(data) {
    const cityName = data.name
    const country = data.sys.country
    const temp = Math.round(data.main.temp)
    const feelsLike = Math.round(data.main.feels_like)
    const humidity = data.main.humidit
    const description = data.weather[0].description
    const icon = data.weather[0].icon
    
    const html = `
        <div class="weather-info">
            <h2>${cityName}, ${country}</h2>
            <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}">
            <p class="temperature">${temp}°C</p>
            <p class="description">${description}</p>
            <div class="details">
                <p>Sensação térmica: ${feelsLike}°C</p>
                <p>Umidade: ${humidity}%</p>
            </div>
        </div>
    `;
    
    weatherResult.innerHTML = html
    showWeather()
}
}