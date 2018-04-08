<template>
   <div>
    <v-toolbar color="primary" dark app fixed>
      <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat  to="/" > Home</v-btn>
           <v-btn flat  v-if="logged" @click="logout"> Logout</v-btn>
          <v-btn flat  v-if="!logged" v-for="(item, key) in items" :key="key" :to="item.to" > {{ item.name }}</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click="changeTheme">
        <v-icon>invert_colors</v-icon>
      </v-toolbar-side-icon>
      <v-avatar>
        <v-icon dark>account_circle</v-icon>
      </v-avatar>
    </v-toolbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Toolbar',
  computed: {
    ...mapGetters({
      dark: 'isDark',
      logged: 'isAuthenticated'
    })
  },
  data () {
    return {
      items: [
        {
          name: 'Login',
          to: '/login'
        },
        {
          name: 'Register',
          to: '/register'
        }
      ]
    }
  },
  methods: {
    changeTheme () {
      if (this.dark) {
        this.$store.commit('setDark', false)
      } else {
        this.$store.commit('setDark', true)
      }
    },
    logout () {
      this.$store
        .dispatch('LOGOUT')
        .then(() => {
          console.log('LOGOUT')
          this.$router.push({ name: 'Home' })
        })
    }
  }
}
</script>

<style>

</style>
