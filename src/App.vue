<template>
  <v-app>
      <MenuBar/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import MenuBar from './components/shared/MenuBar.vue'

export default {
    name: 'App',
    components: {
      MenuBar
    }
}
</script>
