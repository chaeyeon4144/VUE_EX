<script setup>
import { ref } from "vue";
import Vforlist from "./Vforlist.vue";
const products = ref(["노트북", "스마트폰", "태블릿"]);
const fruits = ref(["사과", "바나나", "포도"]);
const showfor = ref(false); //forList 예제 표시 여부  불리언
</script>
<template>
  <div class="container">
    <h1>v-for</h1>
    <ul>
      <li v-for="(product, index) in products" :key="indext">
        {{ index + 1 }},{{ product }}
      </li>
    </ul>
    <ul>
      <li v-for="(fruit, index) in fruits" :key="index">
        {{ index + 1 }},{{ fruit }}
      </li>
    </ul>
    <hr />
    <div class="forLIst">
      <h1>ForList Ex</h1>
      <button @click="showfor = !showfor">
        {{ showfor ? "닫기" : "v-for 리스트 보기" }}
      </button>
      <!-- forList.vue 표시여부 -->
      <Vforlist v-if="showfor" />
    </div>
  </div>
</template>
<style scoped></style>
