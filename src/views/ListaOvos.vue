<template>
    <v-container>
        <h2 class = "text-h5 text-center mb-3 mt-5">Classificação</h2>
      <ul>
        <li v-for="lista of listaOvos" :key="lista.nome">
            <v-img :src="lista.imagem" max-height="150" max-width="250"></v-img>
            <p>{{lista.nome}}</p>
            <p>Preço: R${{lista.preco}}</p>
            <p>Sabor: {{lista.sabor}}</p>
            <p>Cep: {{lista.local.cep}}</p>
            <p>Endereço: {{lista.local.endereco}}</p>
            <v-btn outlined rounded color="brown--text text--lighten-2" elevation="2">+ Adicionar ao Carrinho</v-btn>
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