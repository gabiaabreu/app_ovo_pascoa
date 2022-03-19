<template>
    <v-container>
        <h2 class = "text-h5 text-center mb-3 mt-5">Classificação</h2>
      <ul>
        <li v-for="lista of listaOvos" :key="lista.nome">
         <v-img :src="lista.imagem" max-height="150" max-width="250"></v-img>
         <p>{{lista.nome}}</p>
         <p>{{lista.preco}}</p>
         <p>{{lista.sabor}}</p>
        </li>
      </ul>

    </v-container>
</template>


<script>
export default {
    name: 'ListaOvos',
    data(){
        return {
            listaOvos: []
        }
    },
    created(){
        fetch('https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json')
        .then(resposta => resposta.json())
        .then(json =>{this.listaOvos = json});

    }


}
</script>

<style scoped>

</style>