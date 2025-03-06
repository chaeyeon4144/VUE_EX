<script setup>
import { ref } from "vue";
const message = ref("안녕! 나는 vue야! 만나서 반갑습니다.");
const message2 = ref("안녕 ! 나는 도라곤쥬야! 반가워");
const message3 = ref("나도 만나서 반가워! ");
const count = ref(0);
const count1 = ref(0);
</script>
<template>
    <div>
    <h1>{{ message }}</h1>
    <p>{{ message }}</p>
    <h2>{{ message }}</h2>
    <p>{{ message2 }}</p>
    <span>{{ message3 }}</span>
    <button @click="count++">눌러봐 {{ count }}</button>
    <button @click="count1--">눌러봐2 {{ count1 }}</button>
  </div>
</template>
<style scoped>
h1 {
  color: aqua;
}
p {
  color: blueviolet;
  font-size: larger;
  text-align: center;
}
h2 {
  color: brown;
}
span {
  color: blue;
  padding: 5px;
  font-weight: bold;
}</style>
