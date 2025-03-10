<script setup>
import { ref, reactive, computed } from "vue";
//ref로 count 상태 관리
const count = ref(0);
const increase = () => {
  //ref는 반응형이라 바로 받을수 없어서 vaulue값이 필요함
  count.value++;
};
// reactive로 user의 객체 관리
const user = reactive({
  name: "오도라",
});
const ToggleName = () => {
  user.name = user.name === "오도라" ? "오채연" : "오도라";
};
// computed로 count 값을 두배로 계산
// ex) 1
const doubleCount = computed(() => count.value * 2);
// computed 예제
const price = ref(100);
const quantity = ref(2);
const totalPrice = computed(() => price.value * quantity.value);
//ex) 02
</script>
<template>
  <div>
    <!-- ref로 count 상태 관리 -->
    <p>count : {{ count }}</p>
    <button @click="increase">+ 증가</button>
  </div>
  <!-- reactive로 user의 객체 관리 -->
  <p>User Name : {{ user.name }}</p>
  <button @click="ToggleName">Toggle Name</button>
  <!-- // computed로 count 값을 두배로 계산 -->
  <button>Double Count : {{ doubleCount }}</button>
  <hr />
  <!-- coputed 예제 -->
  <h2>computed로 계산</h2>
  <div class="computed">
    <div class="ex01">
      <p>가격: {{ price }}원</p>
      <p>수량: {{ quantity }}개</p>
      <p>총 가격: {{ totalPrice }}원</p>
    </div>
    <div class="ex02">
      <p>가격 : {{ price }}원</p>
      <button @click="price += 10">가격 +10원</button>
      <button @click="price -= 10">가격 -10원</button>
      <hr />
      <p>수량: {{ quantity }}개</p>
      <button @click="quantity += 1">수량 +1</button>
      <!-- 음수 방ㅈ지 -->
      <button @click="quantity -= 1" :disabled="quantity <= 1">수량 -1</button>
      <hr />
      <p>총 가격: {{ totalPrice }}</p>
    </div>
  </div>
</template>
<style scoped>
.computed {
  width: 1000px;
  display: flex;
  gap: 20px;
}
.computed div {
  flex: 1;
  background-color: antiquewhite;
}
</style>
