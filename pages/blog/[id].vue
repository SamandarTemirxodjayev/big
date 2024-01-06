<template>
  <div v-if="!loading">
    <div class="p-[6%] sm:my-10 my-32">
      <div v-if="pending" class="text-center my-8">
        <div class="loader"></div>
      </div>
      <div v-else>
        <div class="my-container flex flex-col items-center justify-center">
          <img
            :src="`https://admin.bigmetall.uz/${blog.photo}`"
            class="max-w-full max-h-[500px] object-cover"
            alt=""
          />
          <div class="p-4 flex flex-col gap-10">
            <h2 class="text-xl font-bold">{{ blog.title }}</h2>
            <span>{{ blog.description }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <Loader />
  </div>
</template>


<script setup>
import axios from "axios";
const blog = ref([]);
const pending = ref(true);
const route = useRoute();
onMounted(async () => {
  try {
    const response = await axios.get(
      `https://admin.bigmetall.uz/api/blogs/${route.params.id}`
    );
    blog.value = response.data;
    pending.value = false;
  } catch (error) {
    pending.value = false;
  }
});
const loading = ref(true);
onMounted(() => {
  loading.value = false;
});
</script>

<style scoped>
.loader {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  background: linear-gradient(90deg, #000 50%, #0000 0) right/200% 100%;
  animation: l21 2s infinite linear;
}
.loader::before {
  content: "Loading...";
  color: #0000;
  padding: 0 5px;
  background: inherit;
  background-image: linear-gradient(90deg, #fff 50%, #000 0);
  -webkit-background-clip: text;
  background-clip: text;
}

@keyframes l21 {
  100% {
    background-position: left;
  }
}
</style>
