<script setup>
import Hea from "./components/Hea.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="wrap">
    <Hea />
    <main>
      <router-view></router-view>
    </main>

    <Footer />
  </div>
</template>

<style scoped></style>
