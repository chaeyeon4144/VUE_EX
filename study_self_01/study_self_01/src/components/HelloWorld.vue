<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
  msg2: {
    type: String,
    required: true,
  },
});
const rawaHtml = `<a href="#">Link</a>`;
const pid = 10;
const isButtonDisable = true;
const objectOfAttrs = {
  id: "container",
  class: "wrapper",
};
const number = 20;
const ok = false;
const message = "안녕하세요";
const id = 30;
const sayHello = (msg) => {
  alert(msg);
};
const url = "http://www.google.com";
const attributeName = `href`;
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}{{ msg2 }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
    <hr />
    <p>{{ rawaHtml }}</p>
    <p><span v-html="rawaHtml"></span></p>
    <hr />
    <h2>속성 바인딩</h2>
    <div v-bind:id="pid"></div>
    <div :id="pid"></div>
    <div id="pid"></div>
    <div id="{{ pid }}"></div>
    <div id="pid">{{ pid }}</div>
    <hr />
    <h2>불리언 바인딩</h2>
    <button :disabled="isButtonDisable">버튼</button>
    <button :disabled="!isButtonDisable">버튼</button>
    <button :disabled="true">버튼</button>
  </div>
  <hr />
  <h2>여러 속성 바인딩</h2>
  <div v-bind="objectOfAttrs"></div>
  <hr />
  <h2>javascript expression</h2>
  {{ number + 1 }}

  {{ ok ? "예" : "아니오" }}

  {{ message.split("").reverse().join("") }}

  <div :id="`list-${id}`"></div>
  <hr />
  <h2>함수 호출</h2>
  <!-- 타이틀이란 속성을 이용해서 함수를 직접호출 -->
  <!-- v-bind:title -->
  <!-- :title -->
  <!-- 같음 :는 지시어 -->
  <!-- <span :title="sayHello('안녕')"></span> -->
  <div>
    {{ sayHello("안녕") }}
  </div>
  <hr />
  <h2>디렉티브</h2>
  <a v-bind:href="url">구글</a>
  <a :href="url">구글</a>
  <a v-bind:[attributeName]="url">구글</a>
  <a v-bind:href="url">구글</a>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
