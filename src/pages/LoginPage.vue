<template>
  <div class="container">
    <form class="form" action="" @submit.prevent="login">
      <div>
        <span class="hidden" :class="{active: isActive}">
          The email address or password is incorrect.</span>
      </div>
      <div class="form__element">
        <InputFormField required :class="{active: isActive}"
          v-model="formData.login" title="Логин"
          name="login" placeholder="Введите логин" type="text"/>
        <InputFormField required :class="{active: isActive}"
          v-model="formData.password" title="Пароль"
          name="password" placeholder="Введите пароль" type="text"/>
      </div>
      <ButtonField color="form__btn-grey form__btn" text="Sing In"></ButtonField>
      <router-link :to="{ name: 'registr' }" color="btn_green">Регистрация</router-link>
    </form>
    <div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ButtonField from '../components/FormElements/ButtonField.vue';
import InputFormField from '../components/FormElements/InputFormField.vue';

export default {
  components: { ButtonField, InputFormField },
  data() {
    return {
      formData: {},
      isActive: false,
    };
  },
  methods: {
    login() {
      return axios({
        url: `http://localhost:3000/login/?login=${this.formData.login}&password=${this.formData.password}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          if (response.data.length > 0) {
            this.isActive = false;
            this.$store.commit('loadItem', response.data[0]);
            this.$router.push({ name: 'profile', params: { id: response.data[0].id } });
            localStorage.setItem('profile', JSON.stringify(response.data[0]));
          } else {
            this.isActive = true;
          }
          // this.$router.push({ name: 'LoginPage' });
        })
        .catch(() => {
        });
    },
  },
  created() {
    if (localStorage.getItem('profile')) {
      this.formData = JSON.parse(localStorage.getItem('profile'));
      this.login();
    }
  },
};

</script>

<style>
.container {
  border: 1px solid gray;
  border-radius: 10px;
  width: 40%;
  margin: 0 auto;
  padding: 10em 10em;
}
.form {
  display: grid;
  grid-gap: 1em;
}
.form__element {
  display: grid;
  grid-gap: 1em;
}

label.active {
  border: 1px solid red;
}
</style>
