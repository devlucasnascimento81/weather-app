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

// Função que busca dados da API
async function fetchWeather(city) {
    // URL da API (idioma em português)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`;
    
    try {
        // Faz a requisição
        const response = await fetch(url);
        
        // Verifica se deu erro (cidade não encontrada, etc)
        if (!response.ok) {
            if (response.status === 404) {
                showError('Cidade não encontrada. Tente novamente.');
            } else {
                showError('Erro ao buscar dados. Tente novamente mais tarde.');
            }
            return;
        }
        
        // Converte a resposta para JSON
        const data = await response.json();
        
        // Mostra os dados no console (temporário)
        console.log('Dados recebidos:', data);
        
        // Exibe os dados na tela
        displayWeather(data);
        
    } catch (error) {
        console.error('Erro na requisição:', error);
        showError('Erro de conexão. Verifique sua internet.');
    }
}

// função que exibe os dados na  tela


