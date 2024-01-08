
<template>
  <div class="loader-container">
    <div class="loader"></div>
  </div>
</template>

<style scoped>
  .loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

 .loader {
  width: 60px;
  aspect-ratio: 4;
  --c:#091E3A 100%,#0000;
  background: 
    radial-gradient(circle closest-side at left  60px top 50%,var(--c)),
    radial-gradient(circle closest-side                      ,var(--c)),
    radial-gradient(circle closest-side at right 60px top 50%,var(--c));
  background-size: 100% 100%;
  background-repeat: no-repeat;
  animation: l4 1s infinite alternate;
}
@keyframes l4 {
    to{width:100px;aspect-ratio: 1}
}
</style>

