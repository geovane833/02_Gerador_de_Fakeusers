# Gerador de Fake Users

Este projeto é um gerador de usuários fictícios, que utiliza a API [Random User Generator](https://randomuser.me/api/) para criar perfis de usuários aleatórios. A interface permite gerar um novo usuário ao clicar em um botão e exibe informações como imagem, nome, email, data de nascimento, endereço e telefone.

## Imagens
![alt text](image.png)

## Tecnologias Utilizadas

- **HTML**: Estruturação da página e do formulário.
- **CSS**: Estilização e design responsivo.
- **JavaScript**: Manipulação de DOM e chamada à API para gerar usuários fictícios.

## Estrutura do Projeto

- **index.html**: Arquivo HTML principal com a estrutura do formulário e a área para exibição do usuário gerado.
- **styles.css**: Arquivo CSS para estilização do formulário e da página.
- **script.js**: Arquivo JavaScript para manipulação da API e atualização do conteúdo da página.

## Funcionalidades

- **Gerar Usuário Fictício**: Ao clicar no botão, um novo usuário fictício é gerado e suas informações são exibidas.
- **Exibição de Dados**: Mostra a imagem, nome, email, data de nascimento, endereço e telefone do usuário.
- **Design Responsivo**: A página se adapta a diferentes tamanhos de tela.

## Como Executar o Projeto

1. **Clone o repositório**:

    ```bash
    git clone https://github.com/geovane833/02_Gerador_de_Fakeusers.git
    ```

2. **Abra o arquivo `index.html` em um navegador**:

    ```bash
    open index.html
    ```

3. **Certifique-se de que os arquivos `styles.css` e `script.js` estejam no mesmo diretório que `index.html`.**

## Exemplo de Código

### HTML (`index.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gerador de Fake Users</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Gerador de Fake Users</h1>
        <button class="btn-gerar" onclick="gerarFakeUser()">Gerar Usuário</button>
        <div id="userInfo" class="formFakeUser">
            <!-- As informações do usuário serão exibidas aqui -->
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
