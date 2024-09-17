async function gerarFakeUser() {
    var inputRadio = document.getElementsByTagName("input");
    var allFakeUsers = document.querySelector(".allFakeUsers");
    var inputSelect = document.querySelector("select");
    var gender = "";

    // Identifica qual gênero foi selecionado
    for (i = 0; i < inputRadio.length; i++) {
      if (inputRadio[i].checked) {
        gender = inputRadio[i].value;
      }
    }

    // Faz a requisição para a API RandomUser com a nacionalidade brasileira (nat=br)
    var resposta = await fetch(
      "https://randomuser.me/api/?results=" +
        inputSelect.value + // Quantidade de usuários
        "&gender=" + 
        gender + // Gênero selecionado
        "&nat=br" // Filtro para apenas brasileiros
    );

    var dados = await resposta.json();
    var allUsers = dados.results;

    // Limpa a lista de usuários antes de adicionar novos
    allFakeUsers.innerHTML = "";

    // Itera sobre os usuários retornados e adiciona ao DOM
    for (i = 0; i < allUsers.length; i++) {
      var fakeuser = document.createElement("div");
      fakeuser.classList.add("fakeuser");

      let user = allUsers[i];

      // Insere os dados do usuário no HTML
      fakeuser.innerHTML = `
        <div>
          <img src="${user.picture.large}" id="img" />
        </div>
        <div class="dados">
          <p><b>Nome:</b> <span>${
            user.name.first + " " + user.name.last
          }</span></p>
          <p><b>Email:</b> <span>${user.email}</span></p>
          <p><b>Nascimento:</b> <span>${user.dob.age}</span></p>
          <p><b>Endereço:</b> <span>${user.location.city}</span></p>
          <p><b>Telefone:</b> <span>${user.phone}</span></p>
        </div>
      `;

      // Adiciona o usuário gerado à lista
      allFakeUsers.appendChild(fakeuser);
    }
}
