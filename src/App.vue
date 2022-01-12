<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Vitesse',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
  ],
})
</script>

<template>
  <el-config-provider>
    <router-view />
  </el-config-provider>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;500;600&display=swap');
.el-card {
    --el-card-bg-color: white !important;
}
body {
  font-family: "Montserrat", sans-serif !important; /* this was it */
}
</style>
