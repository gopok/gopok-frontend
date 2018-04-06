<template>
  <div>
<v-toolbar color="primary" dark app fixed>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat  v-for="(item, key) in items" :key="key" :to="item.to" > {{ item.name }}</v-btn>
    </v-toolbar-items>
           <v-spacer></v-spacer>
      <v-toolbar-side-icon @click="changeTheme">
        <v-icon>invert_colors</v-icon>
      </v-toolbar-side-icon>
    </v-toolbar>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Toolbar',
  computed: {
    ...mapGetters({
      dark: 'isDark'
    })
  },
  data () {
    return {
      items: [
        {
          name: 'Home',
          to: '/'
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
    }
  }
}
</script>

<style>

</style>
