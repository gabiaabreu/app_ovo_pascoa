<template>
    <div class="menu-bar">
        <v-app-bar app
      color="brown darken-4"
      dense
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title class="titulo text-center">Delicias de Páscoa</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-app-bar>

      <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="brown--text text--lighten-2"
        >

        <router-link to="/">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Início</v-list-item-title>
          </v-list-item>
        </router-link>

        <router-link to="/cadastro">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Cadastro</v-list-item-title>
          </v-list-item>
        </router-link>

        <router-link to="/login">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-login-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>
        </router-link>

        <router-link to="/listaovos">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-egg-easter</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Ovos de Páscoa</v-list-item-title>
          </v-list-item>
        </router-link>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
    data: () => ({
      drawer: false,
      group: null,
    })
}
</script>

<style scoped>
.menu-bar a {
    text-decoration: none;
}
</style>