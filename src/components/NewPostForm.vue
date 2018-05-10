<template>
 <v-card>
    <v-card-text>
      <v-text-field
                  v-model="title"
                  :rules="titleRules"
                  :counter="30"
                label="Title"
                required
                ></v-text-field>
        <v-text-field
            v-model="content"
            label="Post content"
            :rules="contentRules"
            multi-line
            required
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
      title: '',
      titleRules: [
        v => !!v || 'Title is required'
      ],
      content: '',
      contentRules: [
        v => !!v || 'Content is required'
      ]
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
