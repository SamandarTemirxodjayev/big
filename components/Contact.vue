<template>
  <div class="sm:flex items-center justify-center mx-auto hidden sm:my-10">
    <div class="bg-secondary w-[90%]  rounded-[8px] p-8">
      <div class=" flex flex-col  items-center justify-center lg:flex-row  mx-6">
        <div class="grid grid-cols-1 gap-10 ">
          <div class="flex">
            <div class="p-4 my-10">
              <Icon name="subway:location-3" size="32" color="#FFFFFF80" />
            </div>
            <div class="flex flex-col items-start space-y-[24px]">
              <h1 class="text-fiveColor not-italic leading-normal text-lg font-semibold">
                {{ $t('ContactH1') }}
              </h1>
              <div>
                <p class="text-white  w-9/12  text-opacity-70  not-italic leading-normal font-semibold">
                {{ $t('ContactP') }}
                </p>
              </div>
              <div
                class="flex items-center gap-2 px-[20px] py-[6px] bg-thirdColor text-white text-xs font-semibold rounded"
              >
                <NuxtLink @click="openUrl" class=" cursor-pointer">{{ $t('ContactButton') }}</NuxtLink>
                <Icon name="tdesign:location-1" size="12" color="#FFFFFF" />
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="p-3 my-4">
              <Icon name="charm:phone" size="32" color="#FFFFFF80" />
            </div>
            <div class="flex flex-col items-start space-y-4">
              <h1 class="text-fiveColor not-italic leading-normal text-lg font-semibold">
               {{ $t('ContactH') }}
              </h1>
              <div class="flex flex-col space-y-4">
                <a
                  href="tel:+998933909927"
                  class="text-white text-opacity-50 not-italic leading-normal font-semibold"
                  >+998 93 390 99 27</a
                >
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center   mx-10">
          <div class=" flex flex-row">
          <svg xmlns="http://www.w3.org/2000/svg" width="77" height="365" viewBox="0 0 77 365" fill="none">
          <path d="M77 1H1V364.5H77" stroke="#C0C0C0" stroke-width="0.2"/>
          </svg>
            <form @submit="submitForm">
              <div class=" mb-6 mt-8 w-full flex flex-row  gap-9">
                <div class="flex flex-col">
                  <label
                  for="name"
                  class="text-white text-opacity-70  text-base font-medium"
                  >{{ $t('Contactlabel1') }}</label>
                  <input
                    v-model="name"
                    type="text"
                    id="name"
                    name="name"
                    class=" p-2 w-[244px] relative text-black  rounded"
                    required
                  />
                
                </div>
                <div class="flex flex-col">
                  <label
                  for="phone"
                  class="text-white text-opacity-70 text-base font-medium"
                  >{{ $t('Contactlabel2') }}</label>
                  <input
                    v-model="phone"
                    inputmode="numeric"
                    type="text"
                    id="phone"
                    name="phone"
                    class=" p-2 w-[244px]  relative text-black  rounded"
                    required
                    @input="handleNonNumericInput"
                  />
                </div>
                
              </div>
              <div class="mb-4">
                <label
                  for="message"
                  class="text-white text-opacity-70 text-base font-medium"
                  >{{ $t('Contactlabel3') }}</label
                >
                <textarea
                  v-model="message"
                  id="message"
                  name="message"
                  class="w-full p-2 border rounded-md "
                  :placeholder="$t('ContactTextarea')"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                class="px-5 py-2 bg-thirdColor text-white text-xs font-semibold rounded  gap-4"
              >
                {{ $t('ContactButton2') }} <Icon name="fluent:send-16-filled" color="white"/>
              </button>
            </form>
            <svg xmlns="http://www.w3.org/2000/svg" width="77" height="365" viewBox="0 0 77 365" fill="none">
            <path d="M0 1H76V364.5H0" stroke="#C0C0C0" stroke-width="0.2"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import Swal from "sweetalert2";
import axios from "axios";

let name = ref('');
let phone = ref('');
let message = ref('');

const handleNonNumericInput = () => {
  phone.value = phone.value.replace(/[^0-9]/g, '');
};


const submitForm = async (e) => {
  e.preventDefault();

  if (!name.value.trim() || !phone.value.trim()) {
    Swal.fire({
      icon: "error",
      title: "Илтимос, исмингиз ва телефон рақамингизни киритинг.",
    });
    return;
  }



  if (phone.value.length < 7) {
    Swal.fire({
      icon: "error",
      title: "Илтимос, телефон рақамингизда камида 7 та рақам бўлиши керак.",
    });
    return;
  }

  try {
    await axios.post("https://ts-express.vercel.app/sendMessage", {
      name: name.value,
      phone: phone.value,
      message: message.value,
    });
    Swal.fire({
      icon: "success",
      title: "Бизнинг операторларимиз сиз билан муваффақиятли боғланишди.",
    });
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Бизнинг операторларимиз сиз билан боғлана олмади.",
    });
  }
};

const openUrl = () => {
  window.open(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1496.3646812946893!2d69.24107013339253!3d41.40168344718928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d0040f1499b%3A0x19f29a4651354937!2sBig%20Metall!5e0!3m2!1sru!2s!4v1704690554028!5m2!1sru!2s" 

  );
};

const { t } = useI18n();
const placeholderText = ref(t('ContactTextarea'));
</script>


