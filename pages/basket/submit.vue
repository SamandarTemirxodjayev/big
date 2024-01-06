<template>
  <div v-if="!loading">
    <div class="p-[6%] h-full my-32 lg:my-0">
      <div
        class="container mx-auto bg-white rounded-t-3xl py-8 lg:max-w-[1200px]"
      >
        <div class="flex items-center justify-between lg:mx-16 mx-2 pb-[2%]">
          <NuxtLink to="/basket">
            <img src="/icons/backicon.svg" alt="" />
          </NuxtLink>
        </div>
        <div class="flex justify-center lg:mx-24">
          <form class="flex flex-col max-w-[90%]" @submit="handleSubmit">
            <input
              type="text"
              :placeholder="$t('BasketInput1')"
              class="text-sm border-2 rounded-lg p-2.5 w-[558px]  mb-[10%]"
              :class="{ 'border-[#323750]': name, 'border-[#d3d7d9]': !name }"
              v-model="name"
            />
            <input
              type="text"
              inputmode="numeric"
              :placeholder="$t('BasketInput2')"
              class="text-sm border-2 p-2.5  rounded-lg w-[558px] mb-[10%]"
              :class="phoneClasses"
              v-model="phone"
              @input="handleNonNumericInput"
            />

            <button
              type="submit"
              class=" font-'Libre Franklin' flex items-center justify-center gap-2 bg-[#323750] text-center text-[#f4f7f8] rounded-lg px-2.5 py-3 text-lg"
            >
              {{ $t("BasketButton2") }}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <g clip-path="url(#clip0_1165_532)">
    <path d="M10.4749 9.52531C10.78 9.83039 11.2747 9.83043 11.5798 9.52531L14.8943 6.21074C15.1995 5.90566 15.1995 5.41098 14.8943 5.1059C14.5892 4.80082 14.0946 4.80078 13.7895 5.1059L10.4749 8.42047C10.1698 8.72555 10.1698 9.22019 10.4749 9.52531Z" fill="#F4F7F8"/>
    <path d="M1.63459 6.21071C0.720762 7.12454 0.720762 8.61145 1.63459 9.52524C1.92541 9.8161 2.2883 10.0258 2.68396 10.1318L7.91502 11.5329C8.18272 11.6046 8.39412 11.816 8.4658 12.0838L9.86689 17.3146C9.97283 17.7103 10.1826 18.0732 10.4734 18.3641C11.3893 19.28 12.8719 19.2802 13.7879 18.3641C14.0218 18.1303 14.2003 17.856 14.3183 17.5491L19.8425 3.18599C20.1749 2.322 19.9667 1.34091 19.3122 0.686415C18.6578 0.0319227 17.6766 -0.176241 16.8127 0.156141L2.44955 5.6804C2.1426 5.79848 1.86838 5.97688 1.63459 6.21071ZM2.73943 7.31556C2.81764 7.23735 2.90885 7.17786 3.01045 7.1388L17.3737 1.6145C17.666 1.50204 17.9922 1.57614 18.2074 1.7913C18.4257 2.00958 18.4951 2.33684 18.3842 2.62505V2.62509L12.8599 16.9883C12.8208 17.0899 12.7613 17.181 12.6831 17.2592C12.3778 17.5645 11.8837 17.5646 11.5783 17.2592C11.4798 17.1608 11.4118 17.0435 11.3762 16.9104L9.9751 11.6795C9.75939 10.8738 9.12607 10.2397 8.3192 10.0236L3.08814 8.62247C2.95521 8.58688 2.83791 8.51891 2.73943 8.4204C2.43482 8.11579 2.43482 7.62016 2.73943 7.31556Z" fill="#F4F7F8"/>
    <path d="M0.228809 19.7712C0.533887 20.0762 1.02854 20.0763 1.33365 19.7712L4.64822 16.4566C4.95334 16.1515 4.95334 15.6568 4.64822 15.3517C4.34311 15.0467 3.84846 15.0466 3.54338 15.3517L0.228809 18.6663C-0.0762695 18.9714 -0.0762695 19.466 0.228809 19.7712Z" fill="#F4F7F8"/>
    <path d="M5.75165 19.7711L7.96134 17.5615C8.26646 17.2563 8.26646 16.7617 7.96134 16.4566C7.65622 16.1515 7.16157 16.1515 6.85649 16.4566L4.64681 18.6663C4.34169 18.9714 4.34169 19.4661 4.64681 19.7711C4.95192 20.0762 5.44657 20.0763 5.75165 19.7711Z" fill="#F4F7F8"/>
    <path d="M0.228809 15.3517C0.533887 15.6568 1.02854 15.6568 1.33365 15.3517L3.54334 13.142C3.84846 12.8369 3.84846 12.3423 3.54334 12.0372C3.23822 11.7321 2.74357 11.7321 2.4385 12.0372L0.228809 14.2469C-0.0762695 14.5519 -0.0762695 15.0466 0.228809 15.3517Z" fill="#F4F7F8"/>
  </g>
  <defs>
    <clipPath id="clip0_1165_532">
      <rect width="20" height="20" fill="white"/>
    </clipPath>
  </defs>
</svg>
            </button>
          </form>
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
import Swal from "sweetalert2";
import Loader from "~/components/Loader.vue";
import { useCartStore } from "~/store";

const shop = useCartStore();
const name = ref("");
const phone = ref("");
const messages = ref([]);
const loading = ref(true);
const totalQuantity = ref(0);

onMounted(() => {
  messages.value = shop.getCounter();
  loading.value = false;
  submitTotalQuantity();
});

const handleNonNumericInput = () => {
  phone.value = phone.value.replace(/[^0-9]/g, "");
};

const submitTotalQuantity = () => {
  totalQuantity.value = messages.value.reduce(
    (total, item) => total + item.quantity,
    0
  );
};

const phoneClasses = computed(() => ({
  "border-[#323750]": phone.value && phone.value.length >= 7,
  "border-[#d3d7d9]": !phone.value || phone.value.length < 7,
}));

const handleSubmit = async (e) => {
  e.preventDefault();
  loading.value = true;

  if (messages.value.length === 0) {
    loading.value = false;
    await showError("Маҳсулот танланмаган");
    window.location.href = "/";

    return;
  }

  if (!name.value) {
    loading.value = false;
    await showError("Илтимос, исмингизни киритинг");
    return;
  }

  if (!phone.value) {
    loading.value = false;
    await showError("Илтимос, телефон рақамингизни киритинг");
    return;
  }

  if (!phone.value || phone.value.length < 7) {
    loading.value = false;
    await showError(
      "Илтимос, телефон рақамингизни 7 та белгидан кам бўлмаслиги керак"
    );
    return;
  }

  if (
    !name.value ||
    !phone.value ||
    phone.value.length < 7 ||
    name.value.length < 1
  ) {
    loading.value = false;
    await showError("Илтимос, исмингизни ва телефон рақамингизни киритинг");
    return;
  }

  try {
    let text = "";
    messages.value.forEach((item) => {
      text += `%0A----------%0ANomi: ${item.name}%0AKategoriyasi: ${item.category}%0AQalinligi: ${item.qalinligi}%0ANarxi: ${item.price}%0ASoni: ${item.quantity}`;
    });

    await axios.post("https://ts-express.vercel.app/sendMessage", {
      name: name.value,
      phone: phone.value,
      message: text,
    });

    loading.value = false;

    await showSuccess("Сўровнома муваффақиятли юборилди");
    loading.value = true;

    name.value = "";
    phone.value = "";
    shop.clearCart();
    totalQuantity.value = 0;
    window.location.href = "/";
  } catch (err) {
    await showError(
      "Нотўғри бажарилди. Илтимос, кейинроқ қайта уриниб кўринг."
    );
    loading.value = false;
  }
};

const quantity = computed(() => {
  return totalQuantity.value;
});

const showSuccess = async (title) => {
  await Swal.fire({
    position: "center",
    icon: "success",
    showConfirmButton: false,
    timer: 1500,
    title,
  });
};

const showError = async (title) => {
  await Swal.fire({
    position: "center",
    icon: "error",
    showConfirmButton: false,
    timer: 1500,
    title,
  });
};
</script>
