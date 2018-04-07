<template>
  <div>
<v-flex xs12 sm6 offset-sm3 v-for="i in 10" :key="i">

      <v-card class="my-1" >
        <v-card-title>
          <div>
            <span class="grey--text">Test Header {{i}}</span><br>
            <span>test</span><br>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="accent">Share</v-btn>
        </v-card-actions>
      </v-card>

    </v-flex>
  </div>
</template>

<script>
export default {
  name: 'Feed',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
