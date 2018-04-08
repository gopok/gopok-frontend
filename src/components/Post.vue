<template>
  <v-card class="my-1">
    <v-card-title>
        <div>
          <v-chip dark text-color="grey" hover>
            <v-avatar class="grey">
            </v-avatar>
            {{post.author.username}}
          </v-chip>
        </div>
      <p>
      {{post.content}}
      </p>
    </v-card-title>
    <v-card-actions>
      <v-btn flat color="accent">Share</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Post',
  props: ['post'],
  data () {
    return {}
  }
}
</script>
