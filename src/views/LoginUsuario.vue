<template>
    <v-container class = "text-center brown lighten-3"> 

        <v-img class="inicio-imagem" src="http://shoppingjardins.com.br/arquivos/hotsites/pascoa/assets/img/logo.png?cache=3"></v-img>

        <v-row class="d-flex justify-center">

                 <v-tabs fixed-tabs background-color="brown darken-4" color="white" v-model="tabsForm">

                    <v-tab key="register"> Login </v-tab>

                </v-tabs>
           
        </v-row>

        <v-row class="d-flex justify-center">
            <v-col >
                <v-tabs-items v-model="tabsForm">
                    
                        <v-form class="text-center brown lighten-3">

                                <v-text-field

                            label="Email"

                            ></v-text-field>

                            <v-text-field

                            label="Senha"

                            ></v-text-field>

                                <v-btn class="button-cadastrar mt-6 mb-10" 
                                color="brown--text text--darken-2 text-align center" 
                                elevation="2">
                                Login
                                </v-btn>

                        </v-form>
                
                </v-tabs-items>
            </v-col>

        </v-row>

         <v-img class="fim-imagem mt-15 mb-15" src="https://revistamenu.com.br/wp-content/uploads/2021/03/ovodepascoa2021.jpg"></v-img>
       



    </v-container>    

</template>


<script>
export default {
    name: 'LoginUsuario',
    data: () => ({
        tabsform: null
    })
   
}
</script>

<style scoped>

.container {
    background-color: #BCAAA4 ;
}


</style>