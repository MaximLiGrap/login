<template>
  <div class="container">
    <h3>Регистрация</h3>
    <form class="form" action="" @submit.prevent="submit">
      <div class="form__element">
        <InputFormField required v-model="formData.name" title="Имя"
          name="login" placeholder="Введите имя" type="text"/>
        <InputFormField required v-model="formData.surname" title="Фамилия"
          name="login" placeholder="Введите фамилию" type="text"/>
        <InputFormField required v-model="formData.login" title="Логин"
          name="login" placeholder="Введите логин" type="text"/>
        <InputFormField required :class="{active: isActive}"
          v-model="formData.password" title="Пароль"
          name="password" placeholder="Введите пароль" type="text"/>
      </div>
      <div class="form__element">
        <ButtonField color="btn_green" text="Регистрация"></ButtonField>
        <router-link  :to="{ name: 'main' }">Login</router-link>
      </div>
    </form>
    <div>
    </div>
  </div>
</template>

<script>
import ButtonField from '../components/FormElements/ButtonField.vue';
import InputFormField from '../components/FormElements/InputFormField.vue';

export default {
  components: { ButtonField, InputFormField },
  data() {
    return {
      formData: {},
      passwordfirst: '',
      isActive: false,
    };
  },
  methods: {
    submit() {
      this.$store.dispatch('submit', this.formData);
      this.$router.push({ name: 'main' });
    },
  },
};

</script>

<style>
.hidden {
  display: none;
}
.hidden.active {
  display: block;
}
</style>
