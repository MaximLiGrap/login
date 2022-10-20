<template>
  <div>
    <table class="table">
      <tbody>
        <tr>
          <td>Имя</td>
          <td>Фамилия</td>
          <td>Логин</td>
        </tr>
        <tr>
          <td>{{this.ProfileInfo.name || ''}}</td>
          <td>{{this.ProfileInfo.surname || ''}}</td>
          <td>{{this.ProfileInfo.login || ''}}</td>
        </tr>
      </tbody>
    </table>
    <button class="btn_exit" @click="logout">Exit</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      ProfileInfo: {},
    };
  },
  methods: {
    logout() {
      localStorage.removeItem('profile');
      this.$router.push({ name: 'main' });
    },
  },
  created() {
    if (localStorage.getItem('profile')) {
      this.ProfileInfo = JSON.parse(localStorage.getItem('profile'));
    } else {
      this.ProfileInfo = this.$store.state.item;
    }
  },
};
</script>

<style>
.table {
  margin: 20px auto;
}
table, th, td {
  border: 1px solid;
}
.btn_exit {
  cursor: pointer;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: white;
  color: black;
  padding: 10px 20px;
}

.btn_exit:hover {
  background-color: gray;
  color: white;
}
</style>
