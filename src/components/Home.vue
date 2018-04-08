<template>
  <div>
    <NewPostForm />
    <Feed></Feed>
  </div>
</template>

<script>
import Feed from '@/components/Feed'
import NewPostForm from '@/components/NewPostForm'
export default {
  name: 'Home',
  components: { Feed, NewPostForm }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style>

</style>
