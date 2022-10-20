<template>
  <button :class="color" :text="text">{{text}}</button>
</template>

<script>
export default {
  props: ['text', 'color'],
};

</script>

<style>
.btn_green {
  cursor: pointer;
  background-color: green;
  color: white;
  padding: 10px 25px;
}
.btn_green:hover {
  background-color: rgb(61, 184, 61);
}
.form__btn-grey {
  cursor: pointer;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: white;
  color: black;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
}
.form__btn-grey:hover{
  background-color: gray;
  color: white;
}
.form__btn {
  width: 100%;
  max-width: 20em;
  margin: 0 auto;
}
</style>
