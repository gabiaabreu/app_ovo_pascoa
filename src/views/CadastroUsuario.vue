<template >
    <v-container> 

        <v-img class="inicio-imagem" src="http://shoppingjardins.com.br/arquivos/hotsites/pascoa/assets/img/logo.png?cache=3"></v-img>

        <v-row class="d-flex justify-center">

                 <v-tabs fixed-tabs background-color="brown darken-4" color="white" v-model="tabsForm">

                    <v-tab> Cadastre-se </v-tab>

                </v-tabs>
           
        </v-row>

        <div class="container-form">

            <v-row class="d-flex justify-center">
                <v-col >
                    <v-tabs-items v-model="tabsForm">
                        
                            <v-form class="text-center brown lighten-3">

                                <v-text-field

                                label="Nome"

                                ></v-text-field>

                                 <v-text-field

                                label="Email"

                                ></v-text-field>

                                <v-text-field

                                label="Telefone"

                                ></v-text-field>

                                <v-text-field

                                label="Endereço"

                                ></v-text-field>

                                 <v-text-field

                                label="Data de nascimento"

                                ></v-text-field>

                                <v-text-field

                                label="CPF"

                                ></v-text-field>

                                <v-text-field

                                label="Senha"

                                ></v-text-field>

                                <v-col
                                    class="d-flex"
                                    cols="12"
                                    sm="6"
                                    >
                                    <v-select
                                    :items="items"
                                    filled
                                    label="Você quer comprar ou vender?"
                                    ></v-select>
                                </v-col>

                                 <router-link to="/listaovos">
                                    <v-btn class="button-cadastrar mb-7" 
                                    color="brown--text text--darken-2 text-align center" 
                                    elevation="2">
                                    Cadastrar
                                    </v-btn>
                                 </router-link>

                            </v-form>
                    
                    </v-tabs-items>
                </v-col>

            </v-row>
        </div>



    </v-container>    

</template>


<script>
export default {
    name: 'CadastroUsuario',
    data: () => ({
        tabsform: null,
        items: ['Quero comprar', 'Quero vender'],
    })
   
}
</script>

<style scoped>

.container {
    background-color: #BCAAA4 ;
}

</style>