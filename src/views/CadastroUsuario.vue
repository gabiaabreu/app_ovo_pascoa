<template >
    <v-container  id ="login-page"> 

        <v-row class="d-flex justify-center">

                 <v-tabs fixed-tabs background-color="blue-grey lighten-5" color="black" v-model="tabsForm">

                    <v-tab key="register"> Cadastrar </v-tab>
                    <v-tab key="login"> Login </v-tab>

                </v-tabs>
           
        </v-row>

        <v-row class="d-flex justify-center">
            <v-col >
                <v-tabs-items v-model="tabsForm">
                    
                        <v-form class="text-center grey lighten-3">

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