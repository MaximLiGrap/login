<template>
  <label :for="name" class="form__label">
      <input :required="required" class="form__input" :name="name"
        v-model="item" :type="type" :placeholder="placeholder">
      <span class="form__value">{{title}}</span>
  </label>
</template>

<script>
export default {
  props: ['type', 'placeholder', 'title', 'name', 'required'],
  computed: {
    item: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
};
</script>

<style>
.form__label {
  position: relative;
  margin: 0 auto;
  height: 2em;
  display: block;
  width: 100%;
  box-sizing: border-box;
}
.form__value {
  font-size: 10px;
  position: absolute;
  top: -0.7em;
  left: 0.5em;
  background-color: white;
}

.form__input {
  border: 1px solid gray;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 0;
}
</style>
