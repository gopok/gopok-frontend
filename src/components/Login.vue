<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-text-field
      label="Username"
      v-model="username"
      :rules="usernameRules"
      required
    ></v-text-field>
    <v-text-field
      label="Password"
      v-model="password"
      type="password"
      :rules="passwordRules"
      required
    ></v-text-field>
    <v-btn
    color="primary"
      @click="login"
      :disabled="!valid"
    >
    Login
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data () {
    return {
      valid: false,
      username: '',
      usernameRules: [
        v => !!v || 'Username is required'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required'
      ]
    }
  },
  methods: {
    login () {
      if (this.$refs.form.validate()) {
        // send an API login request with the username and the password
      }
    }
  }
}
</script>
