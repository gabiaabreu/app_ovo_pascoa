<template>
  <v-container>
    <h1 class="text h3 text-center mt-10">Seja Bem-vindo!</h1>
    <v-img
      class="easter-image mt-5"
      max-width = "350"
      max-height = "350"
      src="../assets/HappyEaster.jpg" 
      ></v-img>

      <h3>
        O intuito do nosso App é que tenha uma aproximação entre vendedores de ovos caseiros e compradores de uma maneira mais intuitiva, prática e humana.
        
        </h3>
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
  
  border-radius: 10px;
}

h3{
  text-align: center;
  margin-top: 50px;
}

</style>