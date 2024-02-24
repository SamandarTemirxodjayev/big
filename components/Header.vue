<template>
  <div>
    <header
      class="px-[6%] w-full flex justify-between items-center py-4 fixed top-0 left-0 right-0 z-[1000] bg-secondary"
    >
      <div class="hidden xs:block sm:block md:flex items-center w-[70%]">
        <NuxtLink
          to="/"
          class="pr-6 relative sm:top-0 top-3 z-[1000]"
          @click="scrollToTop"
        >
          <IconLogo class="w-[40px] h-[40px] flex-shrink-0" />
        </NuxtLink>

        <div class="flex justify-center items-center">
          <nav
            class="md:flex gap-11 mx-20 text-[16px] hidden text-white text-base font-semibold"
          >
            <ul
              class="flex gap-11 text-[16px] text-white text-base font-semibold"
            >
              <li>
                <NuxtLink
                  class="inline-block text-white font-semibold relative whitespace-nowrap group"
                  to="/catalog"
                >
                  {{ $t("catalog") }}
                  <div
                    class="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-fiveColor transition-all duration-300 group-hover:w-full"
                  ></div>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="inline-block text-white font-semibold relative whitespace-nowrap group"
                  to="/company"
                >
                  {{ $t("company_about") }}
                  <div
                    class="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-fiveColor transition-all duration-300 group-hover:w-full"
                  ></div>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="inline-block text-white font-semibold relative whitespace-nowrap group"
                  to="/blog"
                >
                  {{ $t("blog") }}
                  <div
                    class="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-fiveColor transition-all duration-300 group-hover:w-full"
                  ></div>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="inline-block text-white font-semibold relative whitespace-nowrap group"
                  to="/calculator"
                >
                  {{ $t("calculyator") }}
                  <div
                    class="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-fiveColor transition-all duration-300 group-hover:w-full"
                  ></div>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="inline-block text-white font-semibold relative whitespace-nowrap group"
                  to="/contact"
                >
                  {{ $t("contact") }}
                  <div
                    class="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-fiveColor transition-all duration-300 group-hover:w-full"
                  ></div>
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div class="flex items-center gap-10 sm:hidden">
        <NuxtLink to="/basket">
        <div class="relative">
          <div
            class="absolute left-4 bottom-2 bg-slate-300 w-6 h-6 rounded-full flex items-center justify-center"
          >
            {{ quantity }}
          </div>
            <Icon name="ph:shopping-cart-light" size="20" color="#fff" />
        </div>
      </NuxtLink>
        <button
          @click="() => (isOpen = !isOpen)"
          class="flex items-center px-3 py-2 rounded text-gray-200 hover:text-white"
        >
          <Icon name="quill:hamburger" color="#fff" size="24" />
        </button>
      </div>

      <div
        :class="
          isOpen
            ? 'block fixed top-0 left-0 z-50 bg-secondary min-h-[50%]'
            : 'sm:hidden xs:hidden'
        "
        class="w-full block flex-grow lg:hidden lg:items-center lg:w-auto"
      >
        <div class="flex justify-center items-center">
          
          <div
            class="sm:hidden block absolute top-8 right-10 cursor-pointer"
            @click="() => (isOpen = false)"
          >
            <Icon name="heroicons-solid:x" color="#fff" size="24" />
          </div>
          <ul
            class="flex flex-col sm:flex-row gap-8 text-[16px] text-white text-base font-semibold sm:pt-0 pt-20 text-center py-6"
          >
            <NuxtLink
              class="inline-block text-white text-base font-semibold lg:hidden"
              to="/catalog"
              @click="() => (isOpen = false)"
            >
              {{ $t("catalog") }}</NuxtLink
            >
            <NuxtLink
              class="inline-block text-white text-base font-semibold"
              to="/company"
              @click="() => (isOpen = false)"
            >
              {{ $t("company_about") }}</NuxtLink
            >
            <NuxtLink
              class="inline-block text-white text-base font-semibold"
              to="/blog"
              @click="() => (isOpen = false)"
            >
              {{ $t("blog") }}</NuxtLink
            >
            <NuxtLink
              class="inline-block text-white text-base font-semibold"
              to="/calculator"
              @click="() => (isOpen = false)"
              >{{ $t("calculyator") }}</NuxtLink
            >
            <NuxtLink
              class="inline-block text-white text-base font-semibold"
              to="/contact"
              @click="() => (isOpen = false)"
            >
              {{ $t("contact") }}</NuxtLink
            >
            <div class="flex items-center justify-center flex-col gap-4">
              <div class="relative flex items-center gap-4">
                <NuxtLink
                  class="inline-block text-white text-base font-semibold"
                  to="/basket"
                  @click="() => (isOpen = false)"
                >
                  Карзинка</NuxtLink
                >
                <div
                  class="absolute bg-slate-300 text-black h-6 w-6 rounded-full left-28 -top-2 flex items-center justify-center lg:p-1 p-1"
                >
                  {{ quantity }}
                </div>
                <NuxtLink to="/basket" @click="() => (isOpen = false)">
                  <Icon name="ph:shopping-cart-light" size="20" color="#fff" />
                </NuxtLink>
              </div>
              <div class="relative inline-flex">
                <select
                  v-model="$i18n.locale"
                  class="form-select bg-[#4B516E] border-2 border-none border-[#4B516E] font-semibold not-italic text-[#fff] leading-normal text-[16px] rounded-[4px] outline-none"
                  style="padding: 4px 20px"
                >
                  <option
                    value="kr"
                    class="text-base not-italic leading-normal font-medium text-[#fff]"
                  >
                    KР
                  </option>
                  <option
                    value="ru"
                    class="text-base not-italic leading-normal font-medium text-[#fff]"
                  >
                    РУ
                  </option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center -px-5"
                >
                  <Icon name="formkit:right" size="17" color="white" />
                </div>
              </div>
              <NuxtLink
                to="tel:+998991543333"
                class="text-[#fff] text-[16px] font-semibold leading-normal not-italic"
                >+998 99 154 33 33</NuxtLink
              >
            </div>
          </ul>
        </div>
      </div>

      <div class="md:flex hidden items-center gap-5">
        <NuxtLink
          to="tel:+998991543333"
          class="text-white text-base font-semibold"
          >+998 99 154 33 33</NuxtLink
        >

        <div class="relative">
          <div
            class="absolute left-4 bottom-2 bg-slate-300 w-6 h-6 rounded-full flex items-center justify-center"
          >
            {{ quantity }}
          </div>
          <NuxtLink to="/basket">
            <Icon name="ph:shopping-cart-light" size="20" color="#fff" />
          </NuxtLink>
        </div>
      </div>

      <div class="sm:flex hidden">
        <div class="relative inline-flex">
          <select
            v-model="$i18n.locale"
            class="form-select bg-[#f4f4f4] border-2 border-none font-semibold not-italic text-[#0e0d0d] leading-normal text-[16px] rounded-[4px] outline-none"
            style="padding: 4px 20px"
          >
            <option
              value="kr"
              class="text-base not-italic leading-normal font-medium text-[#0e0d0d]"
            >
              KР
            </option>
            <option
              value="ru"
              class="text-base not-italic leading-normal font-medium text-[#0e0d0d]"
            >
              РУ
            </option>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center -px-5"
          >
            <Icon name="formkit:right" size="17" color="#0e0d0d" />
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { useCartStore } from "~/store";

const isOpen = ref(false);
const totalQuantity = ref();

const counterStore = useCartStore();
totalQuantity.value = counterStore.getCounter();
let quantity = computed(() => {
  return totalQuantity.value.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
});

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>
