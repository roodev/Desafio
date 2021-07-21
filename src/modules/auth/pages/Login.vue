<template>
  <form @submit.prevent="submit()">
    <div class="login-page">
    <img width="250" src="../../../assets/login/logo.png" alt="Logo da Pentagro">
      <div class="card">
        <div class="card-header" align>Login</div>
        <div class="card-body">
          <div class="form-group">
            <input required type="text" v-model="form.Username" class="form-control" placeholder="Login">
          </div>
          <div class="form-group">
            <input required type="password" v-model="form.UserPassword" class="form-control" placeholder="Senha">
          </div>
          <button class="btn btn-info w-100">
            Entrar
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
import MD5 from 'crypto-js/md5'

export default {
  data: () => ({
    form: {
      Username: '',
      UserPassword: ''
    }
  }),
  methods: {
    ...mapActions('auth', ['Login']),
    async submit () {
      try {
        this.form.Username = (btoa(JSON.stringify(this.form.Username)));
        this.form.UserPassword = (btoa(JSON.stringify(MD5(this.form.UserPassword).toString())));
        await this.Login(this.form)
        this.$router.push({ name: 'Dashboard' })
      } catch (err) {
        alert(err.data ? err.data.message : 'Não foi possível fazer login')
      }
    }
  }
}
</script>

<style lang="scss">
  .login-page {
    background-color: rgb(41, 40, 40);
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .card {
      width: 30%;
    }
  }
  img {
    margin-bottom: 30px;
  }

  .btn-info {
    color: #feffff;
    background-color: #009a9b;
    border-color: #009a9b
}
</style>
