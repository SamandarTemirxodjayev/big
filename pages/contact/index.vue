<template>
  <div v-if="!loading">
    <div class="container mx-auto px-4 my-32">
      <section
        class="flex items-center justify-around sm:flex-row flex-col sm:gap-0 gap-20 flex-wrap mt-8 py-12 border-y border-y-[#f2f2f2] border-t border-t-[#f2f2f2]"
      >
        <form class="sm:min-w-[512px] min-w-[312px] mt-10" @submit="submitForm">
          <h3 class="font-medium text-3xl">{{ $t("ContactPageH3") }}</h3>
          <input
            v-model="name"
            class="outline-none border-b border-b-[#D9D9D9] block w-full my-10 p-1"
            required
            type="text"
            :placeholder="$t('ContactPageInput')"
          />
          <input
            v-model="phone"
            inputmode="numeric"
            class="outline-none border-b border-b-[#D9D9D9] block w-full my-10 p-1"
            required
            type="text"
            @input="handleNonNumericInput"
            :placeholder="$t('ContactPageInput2')"
          />
          <input
            v-model="message"
            class="outline-none border-b border-b-[#D9D9D9] block w-full my-10 p-1"
            required
            type="text"
            :placeholder="$t('ContactPageInput3')"
          />

          <button
            type="submit"
            class="sm:max-w-[490px] max-w-[300px] sm:mx-3 mx-2  w-full bg-[#1950DD] py-2 rounded text-white font-medium transition-transform scale-105"
          >
            {{ $t("ContactPageButton") }}
            <Icon name="fluent:send-16-filled" class="ml-2" />
          </button>
        </form>

        <div
          class="bg-[#323750] h-[384px] p-16 px-10 relative mt-10 sm:w-[492px] w-full"
        >
          <div
            class="w-[60px] h-[60px] bg-[#F4F7F8] absolute top-0 left-0 -mx-8 -mt-8"
          />
          <h4
            class="font-semibold text-2xl text-white"
            style="font-family: 'Libre Franklin', sans-serif"
          >
            {{ $t("ConatctPageH4") }}
          </h4>
          <div>
            <h6 class="font-semibold text-lg text-white my-8">
              <a
                href="https://www.instagram.com/big.metall/"
                class="flex gap-3 items-center"
                style="font-family: 'Libre Franklin', sans-serif"
              >
                <Icon name="teenyicons:instagram-outline" /> big.metall
              </a>
            </h6>
          </div>
          <NuxtLink to="tel:+998933909927">
            <h6
              class="font-semibold text-lg text-white sm:my-6 my-12 flex gap-3 items-center"
              style="font-family: 'Libre Franklin', sans-serif"
            >
              <Icon name="carbon:phone" /> +998 93 390 99 27
            </h6>
          </NuxtLink>
          <h6
            class="font-semibold text-lg text-white sm:my-6 my-12 flex gap-3 items-center"
            style="font-family: 'Libre Franklin', sans-serif"
          >
            <Icon name="bytesize:location" />{{ $t("ContactPageH6") }}
          </h6>
          <h6
            class="font-semibold text-lg text-white sm:my-6 my-12 flex gap-3 items-center"
            style="font-family: 'Libre Franklin', sans-serif"
          >
            <Icon name="quill:clock" /> 9:00 - 18:00
          </h6>
        </div>
      </section>
    </div>
  </div>
  <div v-else>
    <Loader />
  </div>
</template>

<script setup>
import Swal from "sweetalert2";
import axios from "axios";

let name = ref("");
let phone = ref("");
let message = ref("");
let loading = ref(true);

const handleNonNumericInput = () => {
  phone.value = phone.value.replace(/[^0-9]/g, "");
};

const isValidPhoneNumber = (phoneNumber) => {
  const phoneRegex = /^[0-9]{7,}$/;
  return phoneRegex.test(phoneNumber);
};

const submitForm = async (e) => {
  loading.value = true;
  e.preventDefault();

  if (!name.value.trim() || !phone.value.trim() || !message.value.trim()) {
    await Swal.fire({
      icon: "error",
      title: "Илтимос, исмингиз, телефон рақамингиз ва хабарингизни киритинг.",
    });
    loading.value = false;
    return;
  }

  if (phone.value.length < 7 || !isValidPhoneNumber(phone.value)) {
    await Swal.fire({
      icon: "error",
      title:
        "Илтимос, телефон рақамингизни дуруст ва камида 7 та рақамдан иборат киритинг.",
    });
    loading.value = false;
    return;
  }

  try {
    await axios.post("https://ts-express.vercel.app/sendMessage", {
      name: name.value,
      phone: phone.value,
      message: message.value,
    });
    await Swal.fire({
      icon: "success",
      title: "Сўровнома муваффақиятли юборилди",
    });
    name.value = "";
    phone.value = "";
    message.value = "";
    loading.value = false;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Сўровнома муваффақиятли юборилди",
    });
  }
};

onMounted(() => {
  loading.value = false;
});
</script>
