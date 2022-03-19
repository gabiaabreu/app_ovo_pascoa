<template >
<div>
    <h1> cadastro </h1>

    <v-tabs fixed-tabs background-color="blue-grey lighten-5" color="black" v-model="tabsForm">

        <v-tab key="register"> Cadastrar </v-tab>
        <v-tab key="login"> Login </v-tab>

    </v-tabs>

</div>


</template>


    


<script>
export default {
    name: 'CadastroUsuario',
    data: () => ({
        tabsform: null
    })
   
}
</script>

<style scoped>




</style>