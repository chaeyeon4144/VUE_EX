<script setup>
import { ref } from "vue";
//할일 목록 데이터
const todos = ref([
  { id: 1, name: "Vue 공부하기📕", isComplete: false },
  { id: 2, name: "운동하기", isComplete: true },
  { id: 3, name: "책 읽기", isComplete: false },
]);
//할일 추 가
const newTodo = ref("");
// console.log(todos);

const addTodo = () => {
  if (newTodo.value.trim()) {
    todos.value.push({ id: Date.now(), name: newTodo.value, isComplete: false });
  }
  //   console.log(todos);
  newTodo.value = "";
};
// 할일 완료 / 미완료 토글
const toggleComplete = (todo) => {
  todo.isComplete = !todo.isComplete;
};
//완료된 항목 삭제 기능
const deletecomplete = () => {
  todos.value = todos.value.filter((todo) => !todo.isComplete);
};
</script>
<template>
  <div class="todo-wrap">
    <h1>📝 Todo List</h1>
    <!-- 할 일 입력 -->
    <div class="input-group">
      <input placeholder="도라의 할 일 목록...🎀" v-model="newTodo" />
      <button @click="addTodo">추가🎀</button>
    </div>
    <h2>📌 진행 중</h2>
    <ul>
      <template v-for="todo in todos" :key="todo.id">
        <li v-if="!todo.isComplete">
          <input type="checkbox" @change="toggleComplete(todo)" />
          {{ todo.name }}
        </li>
      </template>
    </ul>
    <!-- 완료된 할 일 목록 -->
    <h2>✅ 완료</h2>
    <ul>
      <template v-for="todo in todos" :key="todo.id">
        <li v-if="todo.isComplete">
          <input type="checkbox" checked @change="toggleComplete(todo)" />
          <!-- del 이미 완성된 태그 표현 -->
          <del>{{ todo.name }}</del>
        </li>
      </template>
    </ul>
    <!-- 완료된 목록 삭제  -->
    <button @click="deletecomplete" class="delete-btn">완료된 항목 삭제</button>
  </div>
</template>
<style scoped>
.todo-wrap {
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 30px;
}
.input-group {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}

h2{
    text-align: left;
}
ul{
    padding: 0;

}
li {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 5px;
}
.delete-btn {
  margin-top: 10px;
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
}


</style>
