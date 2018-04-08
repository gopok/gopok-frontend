<template>
<div>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-text-field
      label="Username"
      v-model="username"
      :rules="usernameRules"
      required
    ></v-text-field>
    <v-text-field
      label="E-Mail"
      v-model="email"
      type="email"
      :rules="emailRules"
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
      @click="register"
      :disabled="!valid"
    >
    Register
    </v-btn>
  </v-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      valid: false,
      username: '',
      usernameRules: [v => !!v || 'Username is required'],
      email: '',
      emailRules: [v => !!v || 'Email is required'],
      password: '',
      passwordRules: [v => !!v || 'Password is required']
    }
  },
  methods: {
    register () {
      if (this.$refs.form.validate()) {
        this.$store
          .dispatch('REGISTER', {username: this.username, email: this.email, password: this.password})
          .then(() => {
            console.log('REGISTERED')
            this.$router.push({ name: 'Home' })
          })
      }
    }
  }
}
</script>

<style scoped>
</style>
