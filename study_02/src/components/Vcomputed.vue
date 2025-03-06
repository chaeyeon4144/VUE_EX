<script setup>
//반응형 변수들 computed 값이 변할때 실행되는 함수
import { ref, computed } from "vue";

//사용자가 입력한 검색어를 저장하는 변수
const search = ref("");

const items = ["아이폰", "갤럭시", "맥북"];
//filltereditems(computed)
// 사용자가 입력한 검색어 (search.value)가 포함된 includes()상품만 보여주는 코드
const filltereditems = computed(() => {
  return items.filter((item) => item.includes(search.value));
});
//상품리스트 표시
const products = ["아이폰🍞", "갤럭시🥐", "맥북🥨"];
const clothes = ["나이키🚓", "아이다스🛺", "뉴발란스🚌"];
</script>
<template>
  <h2>검색기능</h2>
  <!-- 사용자가 입력한 검색어를 search변수에 자동으로 반영 -->
  <input v-model="search" placeholder="상품 검색" />
  <ul>
    <!-- v for 반복문 사용해서 filltereditems 배열을 돌면서 li 태그로 상품 표시 -->
    <li v-for="item in filltereditems" :key="item">{{ item }}</li>
  </ul>
  <hr />
  <h2>상품리스트 출력</h2>
  <ul>
    <li v-for="product in products" :key="product">{{ product }}</li>
    <li v-for="clothe in clothes" :key="clothe">{{ clothe }}</li>
  </ul>
</template>
<style scoped></style>
