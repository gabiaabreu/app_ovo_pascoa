<template >
    <v-container class ="grey lighten-3" id ="login-page"> 

        <v-row class="d-flex justify-center">

                 <v-tabs fixed-tabs background-color="blue-grey lighten-5" color="black" v-model="tabsForm">

                    <v-tab key="register"> Cadastrar </v-tab>
                    <v-tab key="login"> Login </v-tab>

                </v-tabs>
           
        </v-row>

        <v-row class="d-flex justify-center">
            <v-col cols="4">

                <v-tabs-items v-model="tabsForm" cols="3">
                </v-tabs-items>

            </v-col>

        </v-row>

        <v-text-field

          label="Telefone"

        > Telefone </v-text-field>


               

       


    </v-container>    


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