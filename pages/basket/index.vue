<template>
  <div class="flex items-center flex-col sm:mx-0 -mx-8 my-32">
    <div class="flex items-center justify-between w-[85%]">
      <h1
        class="font-medium leading-[36px] not-italic text-[24px] font-'DM Sans'"
      >
        {{ $t("BasketH1") }}
      </h1>

      <button
        @click="clearCart"
        class="rounded-[4px] bg-[#323750] text-[#F4F7F8] items-center justify-center flex gap-[12px]"
        style="padding: 4.5px 12px"
      >
        <p class="sm:block xs:hidden">{{ $t("BasketButton") }}</p>
        <Icon name="material-symbols-light:delete-outline" size="24" />
      </button>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[25px] w-[85%] sm:py-6 py-4"
    >
      <div class="text-1xl text-[#323750] font-semibold leading-[56px] tracking-[3.34px] " v-if="products.length === 0"><span>{{ $t('BasketDivSpan') }}</span></div>
      <div
        v-for="item in products"
        :key="item"
        class="sm:w-full sm:h-full w-[100%] sm:rounded-[12px] rounded-xl"
        style="
          border: 0.5px solid var(--55555555, #d6d6d6);
          background: #fff;
          box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
        "
      >
        <div class="flex items-center sm:justify-start justify-end">
          <button @click="clearProduct(item)" class="p-4">
            <Icon name="bi:x" size="36" color="black" />
          </button>
        </div>

        <div
          class="flex items-center justify-center sm:gap-0 gap-4 sm:flex-col flex-row relative sm:bottom-0 bottom-[19.5px]"
        >
          <img
            class="object-cover sm:h-[200px] h-[78.67px] sm:px-4"
            :src="imgHandle(item.name)"
            alt=""
          />
          <div
            class="sm:space-y-4 space-y-[18px] sm:space-x-0 space-x-10 flex items-center sm:flex-col flex-row"
          >
            <div class="flex flex-col">
              <p
                class="sm:text-[18px] text-[16px] font-'DM Sans' font-medium leading-[36px] not-italic text-[#000000] capitalize text-center"
              >
                {{ item.name }}
              </p>
              <span
                class="sm:text-[18px] text-[12px] font-'DM Sans' font-bold leading-[27px] not-italic text-[#000000] text-center"
              >
                {{ item.price.toLocaleString("en-US").replace(/,/g, "") }}
                {{ $t("BasketSpan1") }}
              </span>
            </div>
            <div class="flex items-center flex-row gap-[12px] justify-center">
              <button
                @click="deleteItem(item)"
                class="sm:p-[8px] p-[4px] flex items-center justify-center rounded-[4px] bg-[#F2F2F2]"
              >
                <Icon name="icon-park-outline:minus" size="16" />
              </button>
              <span
                class="text-[18px] not-italic font-'DM Sans' font-medium leading-[27px] text-[#202020]"
              >
                <div class="cursor-no-drop">
                  {{ item.quantity }}
                </div>
              </span>
              <button
                @click="addItem(item)"
                class="sm:p-[8px] p-[4px] flex items-center justify-center rounded-[4px] bg-[#F2F2F2]"
              >
                <Icon name="prime:plus" size="16" />
              </button>
            </div>
          </div>
        </div>
        <div class="sm:p-0 p-2">
          <div
            class="flex bg-[#323750] sm:w-full font-'DM Sans' sm:h-[47px] w-full h-[39px] px-[66px] py-2.5 sm:mb-0 mb-2 sm:rounded-b-[12px] mt-4 text-white text-lg font-bold leading-[27px] text-center items-center justify-center flex-row"
          >
            {{
              `${(item.price * item.quantity)
                .toLocaleString("en-US")
                .replace(/,/g, " ")} ${$t("BasketSpanDiv")}`
            }}
          </div>
        </div>
      </div>
    </div>

    <div
      class="w-[85%] h-[1px] flex items-center justify-center sm:my-10 my-4 bg-neutral-400 mx-auto"
    />

    <div
      class="flex sm:items-center items-start sm:p-0 p-2 sm:px-0 px-4 sm:mx-0 mx-auto justify-center flex-col w-[85%] gap-3 sm:flex-row sm:justify-between"
    >
      <div class="flex items-start flex-col gap-3">
        <span
          class="text-neutral-800 text-lg font-normal leading-[27px] font-'DM Sans'"
        >
          {{ $t("BasketSpan2") }}
        </span>
        <p
          class="text-neutral-800 text-2xl font-medium font-'DM Sans' leading-[27px]"
        >
          {{ totalPrice.toLocaleString("en-US").replace(/,/g, " ") }}
          {{ $t("BasketP1") }}
        </p>
      </div>

      <div v-if="products.length">
        <NuxtLink
          to="/basket/submit"
          class="sm:w-full w-[130%] h-[43px] py-2 px-14 text-center rounded-[4px] bg-[#323750] text-[#FFFFFF] flex items-center justify-center"
        >
          {{ $t("BasketSpanA") }}
        </NuxtLink>
      </div>
      <div v-else>
        <NuxtLink
          class="bg-opacity-75 sm:w-full w-[130%] h-[43px] py-2 px-14 text-center rounded-[4px] bg-[#323750] text-[#FFFFFF] flex items-center justify-center"
          @click="showNoProductsWarning"
        >
          {{ $t("BasketDivA") }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>


<script setup>
import { useCartStore } from "~/store";
let shop = useCartStore();
const products = ref([]);

const showNoProductsWarning = () => {
  this.$swal({
    icon: "warning",
    buttons: {
      confirm: {
        text: "OK",
        value: true,
        visible: true,
        className: "bg-[#323750] text-[#FFFFFF]",
        closeModal: true,
      },
    },
  });
};

onMounted(() => {
  products.value = shop.getCounter();
});
const addItem = (item) => {
  shop.addToCart(item);
};
const deleteItem = (item) => {
  shop.deleteFromCart(item);
};

const clearCart = () => {
  try {
    shop.clearCart();
  } catch (error) {}
};
const clearProduct = (item) => {
  shop.clearProduct(item);
};

let totalPrice = computed(() => {
  return products.value.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);
});

const imgHandle = (item) => {
  if (item == "dvuxtavr") {
    return "https://admin.bigmetall.uz/uploads/dvuxtavr.jpg";
  }
  if (item == "list") {
    return "https://admin.bigmetall.uz/uploads/list.jpg";
  }
  if (item == "ugalok") {
    return "https://admin.bigmetall.uz/uploads/ugalok.jpg";
  }
  if (item == "truba") {
    return "https://admin.bigmetall.uz/uploads/truba.jpg";
  }
  if (item == "shveller") {
    return "https://admin.bigmetall.uz/uploads/shvelir.webp";
  }
  if (item == "prut") {
    return "https://admin.bigmetall.uz/uploads/prut.png";
  }
  if (item == "planka") {
    return "https://admin.bigmetall.uz/uploads/planka.jpg";
  }
  if (item == "palasa") {
    return "https://admin.bigmetall.uz/uploads/palasa.jpg";
  }
  if (item == "kvadrat-profil") {
    return "https://admin.bigmetall.uz/uploads/kv-profil.webp";
  }
  if (item == "armatura") {
    return "https://admin.bigmetall.uz/uploads/armatura.png";
  }
  if (item == "kvadrat-prut") {
    return "https://avatars.mds.yandex.net/i?id=475045043ce3ac1b73743bf877e582f5_l-8425915-images-thumbs&ref=rim&n=13&w=700&h=700";
  }
};
</script>
