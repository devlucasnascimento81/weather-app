<div align="center">

# 🌤️ Weather App

**Aplicação web para consulta da previsão do tempo em tempo real**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)

</div>

---

## 📖 Sobre o projeto

O **Weather App** é uma aplicação de previsão do tempo desenvolvida em **HTML, CSS e JavaScript puro**, criada como projeto do curso de JavaScript do **[Curso em Vídeo](https://www.cursoemvideo.com/)**, ministrado pelo professor **Gustavo Guanabara**.

O objetivo é permitir que o usuário digite o nome de uma cidade e visualize suas condições climáticas atuais, consumindo dados de uma API de clima em tempo real.

## ✨ Funcionalidades

- 🔍 Busca de clima por nome da cidade
- ⏳ Indicador de carregamento (*loading spinner*) durante a requisição
- 🌡️ Exibição dos dados climáticos do local pesquisado
- ⚠️ Mensagens de erro para buscas inválidas ou falhas na requisição
- 🕓 Histórico de **pesquisas recentes**

## 🚀 Tecnologias utilizadas

- **HTML5** — estrutura semântica da página
- **CSS3** — estilização e responsividade
- **JavaScript (Vanilla JS)** — lógica da aplicação e consumo de API
- **Fetch API** — requisições HTTP para o serviço de previsão do tempo

## 📂 Estrutura do projeto

```
weather-app/
├── css/
│   ├── reset.css       # Reset de estilos padrão do navegador
│   └── styles.css      # Estilos da aplicação
├── js/
│   └── app.js           # Lógica de busca, requisição à API e renderização
├── index.html           # Página principal
└── README.md
```

## ⚙️ Como executar o projeto

### Pré-requisitos

- Um navegador web atualizado
- (Opcional) Uma extensão como o **Live Server** para servir os arquivos localmente

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/devlucasnascimento81/weather-app.git

# 2. Acesse a pasta do projeto
cd weather-app

# 3. Abra o arquivo index.html no navegador
```

> 💡 Caso o projeto consuma uma API externa de clima (ex: OpenWeatherMap), pode ser necessário configurar uma **chave de API** no arquivo `js/app.js` antes de executar.

## 🖥️ Como usar

1. Digite o nome de uma cidade no campo de busca
2. Clique em **Buscar** (ou pressione Enter)
3. Aguarde o carregamento das informações
4. Veja os dados climáticos exibidos na tela
5. Consulte suas pesquisas anteriores na seção **"Pesquisas recentes"**

## 🗺️ Roadmap

- [ ] Detecção automática de localização do usuário
- [ ] Previsão estendida (próximos dias)
- [ ] Alternância entre °C e °F
- [ ] Modo escuro

## 🎓 Créditos

Projeto desenvolvido como exercício prático do curso de JavaScript do **[Curso em Vídeo](https://www.cursoemvideo.com/)**, do professor **Gustavo Guanabara**.

## 📝 Licença

Este projeto está sob a licença MIT. Sinta-se livre para utilizá-lo e adaptá-lo.

## 👤 Autor

Desenvolvido por **[Lucas Nascimento](https://github.com/devlucasnascimento81)**

<div align="center">

⭐ Se este projeto te ajudou, considere deixar uma estrela no repositório!

</div>
