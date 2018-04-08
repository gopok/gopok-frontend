<template>
   <div>
    <v-toolbar color="primary" dark app fixed>
      <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat  to="/" > Home</v-btn>
          <v-btn flat  v-if="!logged" v-for="(item, key) in items" :key="key" :to="item.to" > {{ item.name }}</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click="changeTheme">
        <v-icon>invert_colors</v-icon>
      </v-toolbar-side-icon>
      <div v-if="logged">
         <v-chip>
          <v-avatar>
                  <v-icon>account_circle</v-icon>
          </v-avatar>
            {{currentUser.username}}
        </v-chip>
         <v-menu
      offset-x
      :close-on-content-click="false"
      :nudge-width="200"
      offset-y
      v-model="menu"
    >
 <v-btn icon slot="activator" dark>
              <v-icon>more_vert</v-icon>
            </v-btn>
      <v-card>
        <v-list>
          <v-list-tile avatar>
            <v-list-tile-avatar>
               <v-icon>account_circle</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{currentUser.username}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat color="error" @click="logout">Logout</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
    </div>
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
      logged: 'isAuthenticated',
      currentUser: 'currentUser'
    })
  },
  data () {
    return {
      menu: false,
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
