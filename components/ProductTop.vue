<template>
  <div class="flex sm:items-start items-center  justify-center flex-col div">
    <h2 class="text-black sm:text-[32px] text-[18px] mx-12  sm:text-start text-center  font-normal">{{ $t("ProductTopH0") }}</h2>

    <table class="px-[45px] py-4 w-full border-separate border-spacing-y-2">
      <thead class="bg-[#091E3A] text-white font-bold">
        <tr>
          <th class="noMobile p-3">{{ $t("ProductTopth1") }}</th>
          <th class="p-3">{{ $t("ProductTopth2") }}</th>
          <th class="p-3">{{ $t("ProductTopth4") }}</th>
          <th class="p-3">{{ $t("ProductTopth5") }}</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="product in products.slice(0, 5)"
          :key="product.id"
          class="text-center font-medium hover:bg-secondary hover:text-white cursor-pointer border-b-4 border-t-4 bg-neutral-100"
        >
          <td class="p-3">{{ product.name }}</td>
          <td class="noMobile p-3">{{ product.category }}</td>
          <td class="p-3 ">{{ product.qalinligi }}</td>
          <td class="p-3">{{ formatPrice(product.price) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import axios from "axios";
const products = ref([]);
const productsArray = ref([]);

onMounted(async () => {
  try {
    const res = await axios.get(`https://admin.bigmetall.uz/api/products`);
    products.value = res.data;
    productsArray.value = products.value; 
    const randomItems = getRandomItemsFromArray(productsArray.value);
  } catch (error) {
  }
});

function getRandomItemsFromArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.slice(0, 5);
}

const formatPrice = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "UZS",
  }).format(price);
};
</script>


<style scoped>
@media (max-width: 780px) {
  .cards {
    @apply justify-center;
  }
}

@media (max-width: 520px) {
  .noMobile {
    @apply hidden;
  }
}
</style>
