<script setup>
import { ref } from "vue";
const message = ref("오도라의 친구들");
const message2 = ref("오잼연");
const message3 = ref("지현지킴이");
const message4 = ref("오해피");
const count = ref(0);
</script>
<template>
  <div>
    <h1>{{ message }}</h1>
    <h2>{{ message2 }}</h2>
    <h2>{{ message3 }}</h2>
    <p>{{ message4 }}</p>
    <form>
      <label for="idinput" id="idinput">아이디</label>
      <input type="text" id="idinput" />
      <button @click="count++">버튼{{ count }}</button>
    </form>
  </div>
</template>
<style scoped>
div {
  margin: auto;
}
h1 {
  color: blue;
  font-size: large;
  font-weight: bold;
}
h2 {
  color: aqua;
  font-style: italic;
}
</style>
