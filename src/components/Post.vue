<template>
  <v-card class="my-1">
    <v-card-text>
      <v-layout>
        <v-chip dark text-color="grey" hover>
          <v-avatar class="grey">
          </v-avatar>
          <span>
            {{post.author.username}}
          </span>
        </v-chip>
        <v-spacer />
        <v-btn :outline="!upvoted" small color="blue" fab @click="upvote" :loading="upvoteLoading">
          <v-icon>arrow_upward</v-icon>
        </v-btn>
        <v-btn outline small color="red" fab>
          <v-icon>arrow_downward</v-icon>
        </v-btn>
      </v-layout>
      <div></div>
      <v-layout>
        <p class="mt-3">
        {{post.content}}
        </p>
      </v-layout>
    </v-card-text>
    <v-card-actions>
      <v-btn flat color="accent">Share</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Post',
  props: ['post'],
  data () {
    return {
      upvoteLoading: false
    }
  },
  computed: {
    ...mapGetters(['currentUserID']),
    upvoted () {
      return this.post.upvoters.indexOf(this.currentUserID) !== -1
    }
  },
  methods: {
    async upvote () {
      this.upvoteLoading = true
      try {
        await this.$store.dispatch('UPVOTE_POST', this.post.id)
      } finally {
        this.upvoteLoading = false
      }
    }
  }
}
</script>
