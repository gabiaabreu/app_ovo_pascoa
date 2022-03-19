<template >
    <v-container id ="login-page"> 

        <v-img class="inicio-imagem mt-4" src="http://shoppingjardins.com.br/arquivos/hotsites/pascoa/assets/img/logo.png?cache=3"></v-img>

        <v-row class="d-flex justify-center">

                 <v-tabs fixed-tabs background-color="blue-grey lighten-5" color="black" v-model="tabsForm">

                    <v-tab key="register"> Login </v-tab>
                    <v-tab key="login"> Cadastre-se </v-tab>

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

                                label="Telefone"

                                ></v-text-field>

                                <v-text-field

                                label="Email"

                                ></v-text-field>

                                <v-text-field

                                label="Senha"

                                ></v-text-field>

                                <v-btn
                                    color="success"
                                    class="justify-space-between"
                                >
                                    Registrar
                                </v-btn>

                            </v-form>
                    
                    </v-tabs-items>
                </v-col>

            </v-row>
        </div>

        <v-img class="inicio-imagem mt-4" src="https://i.ytimg.com/vi/4X3ZzyTuPoY/maxresdefault.jpg"></v-img>

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

.container {
    background-color: #BCAAA4 ;
}

</style>