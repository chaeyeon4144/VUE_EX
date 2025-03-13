<script setup>
import { ref } from "vue";
import TodoList from "./TodoList.vue";
import ExArr_ex from "./ExArr_ex.vue";

// 버튼
const showTodoList = ref(false);
const showArrayList = ref(false);
</script>
<template>
  <div class="wrap">
    <div class="container">
      <h1>TodoList Ex</h1>
      <button @click="showTodoList = !showTodoList">{{ showTodoList ? "😍닫기🥰" : "🎈TodoList 보기" }}</button>
      <TodoList v-if="showTodoList" />
    </div>
    <hr />
    <div class="container">
      <h1>Array 공부</h1>
      <button @click="showArrayList = !showArrayList">{{ showArrayList ? "😍닫기🥰" : "🎈showArrayList 보기" }}</button>
      <ExArr_ex v-if="showArrayList" />
    </div>
  </div>
</template>
<style scoped>
.wrap {
  background-color: antiquewhite;
  display: flex;
  justify-content: center;
}
.container {
  padding: 20px;
  flex: 1;
  text-align: center;
}
</style>
