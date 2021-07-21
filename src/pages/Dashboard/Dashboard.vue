<template>
  <div class="dashboard">
    <a class="texto" @click="nav">Cadastrar usuario</a>
  </div>
</template>

<script>
export default {
  data: () => ({
  }),
  methods: {
    nav() {
      this.$router.push({ name: 'user' })
    }
  }
}
</script>

<style lang="scss">
  .dashboard {
    background-color: rgb(41, 40, 40);
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center
  }

  .texto {
    color: white
  }
</style>