<template>
    <v-container>

        <v-simple-table>
            <template v-slot:default>
            <thead>
                <tr>
                <th class="text-left">
                    Itens
                </th>
                <th class="text-right">
                    Preço
                </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>-</td>
                <td class="text-right"> -</td>
                </tr>
                <tr>
                <td>-</td>
                <td class="text-right"> -</td>
                </tr>
                <tr>
                <td>-</td>
                <td class="text-right"> -</td>
                </tr>
            </tbody>
            <thead>
                <tr>
                <th class="text-left">
                    Quantidade
                </th>
                <th class="text-right">
                    Total
                </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>-</td>
                <td class="text-right">R$0,00</td>
                </tr>
            </tbody>
            </template>
        </v-simple-table>

        <h3 class="titulos"> Pagamento </h3>

        <v-col
        class="d-flex"
        cols="12"
        sm="6"
        >
            <v-select
            :items="items"
            filled
            label="Forma de pagamento"
            ></v-select>
        </v-col>

        <h3 class="titulos"> Entrega </h3>

        <v-checkbox class="botao"
              v-model="ex4"
              label="Vou retirar no local"
              color="brown darken-3"
              value="brown darken-3"
              hide-details
            ></v-checkbox>

        <v-text-field class="botao" label="Insira seu CEP:">
        </v-text-field>
        
        <v-btn class="botao" to="/listaovos" color="brown--text text--darken-2" elevation="2">Simular frete</v-btn>

        <v-btn class="botao" to="/listaovos" color="brown--text text--darken-2" elevation="2">Concluir compra</v-btn>


    </v-container>
</template>

<script>
export default {
    data: () => ({
      items: ['Cartão de Crédito', 'Cartão de Débito', 'Pix', 'Boleto Bancário'],
    })
    
}
</script>

<style scoped>

.botao {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
}
.titulos {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  color: #795548;
}


</style>