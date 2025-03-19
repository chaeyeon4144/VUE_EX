<script setup></script>
<template>
  <header>
    <nav>
      <router-link to="/">홈</router-link>
      <router-link to="/about">어바웃</router-link>
      <router-link to="/reservation">예약</router-link>
    </nav>
  </header>
  <router-view></router-view>
</template>
<style scoped>
header {
  background-color: #f8f9fa;
  padding: 10px;
  text-align: center;
}

nav {
  margin-top: 10px;
}

nav a {
  margin: 0 10px;
}
</style>
