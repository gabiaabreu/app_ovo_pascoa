<template>
  <v-container>
    <h1 class="text h3 text-center mt-10">Seja Bem-vinde! 🐰</h1>
    <v-img
      class="easter-image mt-5 mr-4 ml-4"
      src="../assets/HappyEaster.jpg" 
      ></v-img>

      <h4>
        O intuito deste App é promover uma aproximação entre vendedores de ovos de Páscoa caseiros e potenciais compradores, de uma maneira mais intuitiva, prática e humana.
      </h4>

      <v-btn class="botao" to="/listaovos" color="brown--text text--darken-2" elevation="2">Conferir ovos disponíveis</v-btn>
      <v-btn class="botao" to="/cadastro" color="brown--text text--darken-2" elevation="2">Login / Cadastro</v-btn>

  </v-container>

</template>

<script>
import Vuetify from "vuetify/lib/framework";

export default new Vuetify({
  theme: { brown: true }, 
})
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #BCAAA4
}

.easter-image {
  align-items: center;
  margin-top: 400px;
  
  border-radius: 8px;
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