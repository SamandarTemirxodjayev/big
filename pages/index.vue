<template>
  <div v-if="!loading">
    <Hero />
    <Catolog/>
    <WeAbout/>
    <Pixabay/>
    <Partner/>
    <Contact/>
  </div>
  <div v-else>
<Loader />
  </div>
</template>


<script setup>
const loading = ref(true);
onMounted(() => {
  loading.value = false;
});
</script>