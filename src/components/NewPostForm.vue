<template>
 <v-card>
    <v-card-text>
        <v-text-field
            v-model="content"
            label="Post content"
            multi-line
        />
        <v-btn color="primary" @click="createPost">Submit</v-btn>
    </v-card-text>
 </v-card>
</template>

<script>
export default {
  name: 'NewPostForm',
  data () {
    return {
      content: ''
    }
  },
  methods: {
    createPost () {
      this.$store.dispatch('CREATE_NEW_POST', {content: this.content})
    }
  },
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
