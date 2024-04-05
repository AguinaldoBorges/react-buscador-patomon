## 🚀 Buscador Patomon

O Buscador Patomon é um projeto React.js que permite aos treinadores de Pokémon buscar informações sobre seus companheiros de batalha e ajustar suas estratégias com facilidade. Com uma interface intuitiva e divertida, os treinadores podem visualizar não apenas os dados básicos do Pokémon, mas também os nomes de quatro golpes disponíveis e substituí-los por outros compatíveis.

![](./src/images/1.png)

### ℹ️ Funcionalidades

- **Busca por nome de Pokémon:** ![](./src/images/2.png)
Os treinadores podem digitar o nome do Pokémon que desejam buscar na barra de pesquisa.

- **Visualização de informações detalhadas:**![](./src/images/5.png) Após a busca, os treinadores podem visualizar informações básicas sobre o Pokémon, como nome, tipo e sprites, além de quatro golpes disponíveis para o Pokémon.

- **Substituição de golpes:**![](./src/images/3.png) Os treinadores podem escolher entre uma lista de golpes compatíveis e substituir os golpes atuais do Pokémon, ajustando suas estratégias de batalha.

### 🛠️ Tecnologias Utilizadas


![](./src/images/4.png)
- **React**: 🌟 Framework JavaScript para construção de interfaces de usuário.

- **Axios**: 📡 Biblioteca para fazer requisições HTTP.

- **Bootstrap**: 🎨 Framework front-end para estilização e layout responsivo.

### 📦 Instalação

1. Clone o repositório:

```
git clone https://github.com/seu-usuario/react-buscador-patomon.git
```

2. Navegue até o diretório do projeto:

```
cd react-buscador-patomon
```

3. Instale as dependências:

```
npm install
```

4. Inicie o servidor de desenvolvimento:

```
npm start
```

### 📁 Estrutura do Projeto

O projeto possui a seguinte estrutura de arquivos:

```
react-buscador-patomon/
  README.md
  package.json
  public/
    index.html
    favicon.ico
  src/
    components/
      Header.js
      CardPokemon.js
    pages/
      GetPokemon.js
    styles/
      style.css
    assets/
      patomon-logo.png
      ash.png
    App.js
    index.js
```

### 🖥️ Componentes Principais

#### `Header.js`

Componente responsável por renderizar o cabeçalho da aplicação, incluindo a barra de pesquisa para buscar Pokémon.

#### `CardPokemon.js`

Componente responsável por renderizar as informações detalhadas de um Pokémon encontrado, incluindo nome, tipo, sprites, movimentos e a opção de substituir golpes.

#### `GetPokemon.js`

Página principal da aplicação, que inclui o componente `Header` e `CardPokemon` e controla o estado da busca do Pokémon.

### 🎮 Substituição de Golpes

Os treinadores podem escolher entre uma lista de golpes compatíveis e substituir os golpes atuais do Pokémon, ajustando suas estratégias de batalha.

### 🤝 Contribuindo

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novas funcionalidades. Basta abrir uma issue ou enviar um pull request.

### 📜 Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).