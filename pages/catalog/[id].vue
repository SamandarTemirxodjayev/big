<template>
  <div class="p-[6%] sm:my-10 my-16">
    <div v-if="pending">
      <div class="loader my-6"></div>
    </div>
    <div class="flex items-center justify-center">
      <table class="px-[45px] py-10 w-full border-separate border-spacing-y-2">
        <thead class="primary bg-[#091E3A] text-white font-bold">
          <tr>
            <th class="noMobile p-3">{{ $t("ProductTopth1") }}</th>
            <th class="p-3">{{ $t("ProductTopth2") }}</th>
            <th class="p-3">{{ $t("ProductTopth4") }}</th>
            <th class="sm:p-3 p-2">{{ $t("ProductTopth5") }}</th>
            <th class="sm:p-3 p-2">Карзинка</th>
          </tr>
        </thead>
        <tbody class="">
          <tr
            v-for="product in filteredProducts"
            :key="product.id"
            class="text-center font-medium hover:bg-secondary hover:text-white cursor-pointer border-b-4 border-t-4 bg-neutral-100"
          >
            <td class="p-3">{{ product.name }}</td>
            <td class="noMobile p-3">{{ product.category }}</td>
            <td class="p-3 ">{{ product.qalinligi }}</td>
            <td class="p-3">{{ formatPrice(product.price) }}</td>

            <td @click="handle" class="p-1">
              <div
                v-if="!handleclick"
                @click="add(product)"
                class="block w-[32px] h-[32px] md:w-[48px] md:h-[48px] p-6 relative lg:left-20 left-4 2xl:left-18 rounded-[4px] bg-[#323750] hover:bg-[#4b4f63] text-white text-center"
              >
                <Icon
                  name="mdi:shopping-cart"
                  size="1.5rem"
                  class="-mx-3 -mt-5"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "~/store";
const counterStore = useCartStore();

const selectedCategory = ref("");
const products = ref([]);
const route = useRoute();
const pending = ref(true);

onMounted(async () => {16
  try {
    pending.value = true;
    const response = await fetch(`https://admin.bigmetall.uz/api/products`);
    const data = await response.json();
    selectedCategory.value = route.params.id.toLowerCase();
    products.value = [...data];
  } catch (error) {
  } finally {
    pending.value = false;
  }
});

const filteredProducts = computed(() => {
  return selectedCategory.value !== ""
    ? products.value.filter(
        (product) => product.name.toLowerCase() === selectedCategory.value.toLowerCase()
      )
    : products.value.map((product) => ({ ...product, primary: false }));
});

const categories = computed(() => {
  const uniqueCategories = [
    ...new Set(products.value.map((product) => product.name)),
  ];
  return [...uniqueCategories];
});

const formatPrice = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "UZS",
  }).format(price);
};

const add = (product) => {
  counterStore.addToCart(product);
};
const handleclick = ref(false);
</script>

<style scoped>
@media (max-width: 780px) {
  .cards {
    @apply justify-center;
  }
}

@media (max-width: 520px) {
  .noMobile {
    display: none;
  }
}

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
