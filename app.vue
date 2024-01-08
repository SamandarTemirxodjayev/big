<template>
  <div>
    <div>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100;0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,600;1,9..40,500;1,9..40,600;1,9..40,700;1,9..40,800;1,9..40,900;1,9..40,1000&display=swap");
* {
  font-family: "DM Sans", sans-serif;
}
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}
.dark-mode body {
  background-color: #fff;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>
<script setup>
const colorMode = useColorMode();
</script>