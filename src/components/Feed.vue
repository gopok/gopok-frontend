<template>
  <div>
    <post v-for="i in 10" :key="i" :i="i"></post>
  </div>
</template>

<script>
import Post from '@/components/Post'
export default {
  name: 'Feed',
  components: { Post },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
