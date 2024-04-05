<template>
  <div v-if="!loading">
    <section class="container mx-auto px-4 my-32">
      <div v-if="pending" class="text-center">
        <div class="loader"></div>
      </div>
      <div v-else class="flex flex-wrap justify-around mt-8 pt-6">
        <div v-if="blogs.length == 0">
          <span
            style="color: rgba(0, 0, 0, 0.2); font-family: Poppins"
            class="sm:text-[26px] text-[16px] not-italic font-normal leading-normal"
            >{{ $t("BlogSpan") }}
            <Icon
              name="streamline:mail-smiley-happy-face-chat-message-smiley-smile-emoji-face-satisfied"
              size="32"
              color="#00000033"
          /></span>
        </div>
        <div
          v-for="blog in blogs"
          :key="blog._id"
          class="p-2 rounded-3xl shadow-2xl w-full sm:w-[full] md:w-[48%] lg:w-[30%] sm:my-8 my-8"
        >
          <div
            v-if="blog._id"
            class="h-[280px] bg-cover bg-center rounded-md"
            :style="{
              backgroundImage: `url('https://admin.bigmetall.uz/${blog.photo}')`,
            }"
          ></div>

          <span class="text-black/80 text-sm my-2 block">
            <Icon name="iconamoon:clock-light" class="mr-2 text-sm" />
            {{ new Date(blog.createdAt).toLocaleString() }}
          </span>
          <h1
            class="font-semibold text-lg overflow-hidden whitespace-nowrap overflow-ellipsis"
          >
            {{ blog.title }}
          </h1>
          <h5
            class="text-sm my-2 overflow-hidden whitespace-normal max-h-[3.4em] line-clamp-2"
            :class="{ truncate: !blog.isExpanded }"
          >
            {{ blog.description }}
          </h5>

          <NuxtLink v-if="blog._id" :to="`/blog/${blog._id}`">
            <button
              class="w-full bg-[#323750] my-2 text-white hover:text-black p-1 rounded font-medium transition-colors border border-white hover:border-[#323750] hover:bg-white bg-transparent;"
            >
              <Icon name="iconoir:eye-solid" class="mr-2 text-sm" />
              {{ $t("BlogButton") }}
            </button>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
  <div v-else>
    <Loader />
  </div>
</template>


<script setup>
import axios from "axios";
let blogs = ref([]);
let pending = ref(true);

const loading = ref(true)

onMounted(async () => {
  loading.value = false;
  try {
    let res = await axios.get("https://admin.bigmetall.uz/api/blogs");
    blogs.value = res.data;
    pending.value = false;
    if (blog.value.length > 0) {
    definePageMeta({
      layout: "default",
      style: {
        height: "200vh",
      },
    });
  } else {
    definePageMeta({
      layout: "blog",
    });
  }
  } catch (error) {
    pending.value = false;
  }
});
</script>




<style scoped>
.loader {
  width: fit-content;
  font-weight: bold;
  font-family: 'Libre Franklin', sans-serif;
  font-size: 30px;
  background: linear-gradient(90deg, #323750 50%, #0000 0) right/200% 100%;
  animation: l21 2s infinite linear;
}
.loader::before {
  content: "Загрузка...";
  color: #fff;
  padding: 0 5px;
  background: inherit;
  background-image: linear-gradient(90deg, #fff 50%, #fff 0);
  -webkit-background-clip: text;
  background-clip: text;
}

@keyframes l21 {
  100% {
    background-position: left;
  }
}
</style>
