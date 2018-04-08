<template>

 <v-app :dark='dark'>
   <v-snackbar
     v-for="(error, key) in $store.state.errors.errors"
     :key="key"
     :value="true"
    >
      {{ (error.toString()) }}
      <v-btn flat color='pink' @click="$store.commit('REMOVE_ERROR', key)">Close</v-btn>
    </v-snackbar>
    <toolbar></toolbar>
    <v-content>
      <v-container fluid>
        <v-flex xs12 sm6 offset-sm3>
          <v-slide-y-transition mode='out-in'>
            <router-view></router-view>
          </v-slide-y-transition>
        </v-flex>
      </v-container>
      </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import Toolbar from '@/components/Toolbar'
export default {
  name: 'App',
  computed: {
    ...mapGetters({
      dark: 'isDark'
    })
  },
  components: { Toolbar }
}
</script>

<style>

</style>
