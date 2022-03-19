<template>
    <v-container>
        <h2 class = "text-h5 text-center mr-4 mb-3 mt-5"><strong>🐇 Lista de Ovos 🐇</strong></h2>
      
         <div class = "text-center" v-for="lista of listaOvos" :key="lista.nome">
            <v-img class="lista-imagem text-center mb-3 mt-5" style="margin-left: 44px" :src="lista.imagem" max-height="150" max-width="250"></v-img>
            <p><strong>{{lista.nome}}</strong></p>
            <p>Preço: R${{lista.preco}}</p>
            <p>Sabor: {{lista.sabor}}</p>
            <p>Cep: {{lista.local.cep}}</p>
            <p>Endereço: {{lista.local.endereco}}</p>
            <v-btn outlined color="brown--text--lighten-2" elevation="2">+ Adicionar ao Carrinho</v-btn>
            <p></p>
         </div>      
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
.lista-imagem{
    border-radius: 5px;
}
</style>