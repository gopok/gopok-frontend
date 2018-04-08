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
        <v-badge overlap>
            <span slot="badge">{{post.upvoters.length}}</span>
            <v-btn :outline="!upvoted" small color="blue" fab @click="upvote" :loading="upvoteLoading" depressed>
              <v-icon>arrow_upward</v-icon>
            </v-btn>
        </v-badge>
        <v-badge overlap color="red">
          <span slot="badge">{{post.downvoters.length}}</span>
          <v-btn :outline="!downvoted" small color="red" fab @click="downvote" :loading="downvoteLoading" depressed>
            <v-icon>arrow_downward</v-icon>
          </v-btn>
        </v-badge>
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
      upvoteLoading: false,
      downvoteLoading: false
    }
  },
  computed: {
    ...mapGetters(['currentUserID']),
    upvoted () {
      return this.post.upvoters.indexOf(this.currentUserID) !== -1
    },
    downvoted () {
      return this.post.downvoters.indexOf(this.currentUserID) !== -1
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
    },
    async downvote () {
      this.downvoteLoading = true
      try {
        await this.$store.dispatch('DOWNVOTE_POST', this.post.id)
      } finally {
        this.downvoteLoading = false
      }
    }
  }
}
</script>
