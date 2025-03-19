<script setup></script>

<template>
  <h1>홈 페이지</h1>
  <p>여기는 홈 페이지 입니다.</p>
  <nav>
    <router-link to="/menu01">Menu1</router-link>
    <router-link to="/menu02">Menu2</router-link>
    <router-link to="/menu03">Menu3</router-link>
    <router-link to="/menu04">Menu4</router-link>
  </nav>
  <router-view></router-view>
</template>
<style scoped></style>
