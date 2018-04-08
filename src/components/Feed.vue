<template>
  <div>
    <post v-for="post in posts" :key="post.id" :post="post"></post>
    <v-btn color="info" @click="loadMore" block>Load more</v-btn>
  </div>
</template>

<script>
import Post from '@/components/Post'
import { mapGetters } from 'vuex'
export default {
  name: 'Feed',
  components: { Post },
  data () {
    return {}
  },
  methods: {
    loadMore () {
      this.$store.dispatch('LOAD_NEW_POSTS')
    }
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters([
      'posts'
      // ...
    ])
  },
  created () {
    this.$store.dispatch('LOAD_NEW_POSTS')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
