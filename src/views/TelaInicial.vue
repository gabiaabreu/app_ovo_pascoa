<template>
  <v-container class="fundo brown lighten-3">
    <h1 class="text h3 text-center mt-10">Seja Bem-vinde! 🐰</h1>
    <v-img
      class="easter-image mt-5 mr-4 ml-4"
      src="../assets/HappyEaster.jpg" 
      ></v-img>

      <h4>Que tal aproveitar esse momento de Pandemia e agilizar o seu negocio? Ou não precisar sair de casa e com um simples clique fazer suas compras?
        A Delicias de Páscoa veio para revolucionar o e-commerce promovendo uma aproximação entre vendedores de ovos de Páscoa caseiros e potenciais compradores! De uma maneira mais intuitiva, prática e humana.</h4>

      <v-btn class="botao" to="/listaovos" color="brown--text text--darken-2" elevation="2">Conferir ovos disponíveis</v-btn>
      <v-btn class="botao" to="/cadastro" color="brown--text text--darken-2" green elevation="2">Login</v-btn>
      <v-btn class="botao" to="/cadastro" color="brown--text text--darken-2" elevation="2">Cadastro</v-btn>
      
  </v-container>

</template>

<script>

</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #BCAAA4;
}

.easter-image {
  align-items: center;
  margin-top: 100px;
  border-radius: 8px;
}

.fundo {
  margin: 0;
  padding: 0px;
}


.botao {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
}

h4{
  text-align: justify;
  margin: 20px;
  text-indent:2em;
  background-color:#BCAAA4;
}

</style>
