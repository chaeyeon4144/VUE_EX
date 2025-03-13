<script setup>
import Event from "./components/Event.vue";
import ExArr from "./components/ExArr.vue";
import { ref } from "vue";
const showEventList = ref(false);
</script>

<template>
  <div>
    <ExArr />
    <div class="event-wrap">
      <div class="container">
        <button @click="showEventList = !showEventList">{{ showEventList ? "닫기" : "EventList 보기" }}</button>
        <Event v-if="showEventList" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.event-wrap {
  display: flex;
  justify-content: center;
}
button{
  margin-top: 50px;
}

</style>
