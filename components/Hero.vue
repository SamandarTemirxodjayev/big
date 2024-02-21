<template>
  <div>
    <main class="flex flex-col md:flex-row items-center justify-between mx-auto sm:my-0 my-10 p-[6%]">
      <div class="w-full md:w-1/2">
        <div class="flex items-start sm:text-start text-center flex-col gap-[24px] md:mt-10 mt-16">
          <h1
            class="w-full sm:w-[150%] text-[#222222] sm:text-[44px] text-[30px] not-italic font-semibold sm:leading-[66px] leading-[38px] sm:tracking-normal-[3.52px] tracking-normal-[1.44px] sm:text-start text-center">
            {{ $t("heroH1") }}
          </h1>
          <p
            class="w-full sm:w-[60%] text-[#222222] sm:text-[24px] text-[22px] not-italic font-normal sm:leading-[35px] leading-[28px] sm:tracking-wide-[1.92px] tracking-wide-[0.96px] opacity-80">
            {{ $t("heroP") }}
          </p>
        </div>
        <div class="hidden sm:block sm:items-start items-center flex-col mt-4 md:mt-44">
          <NuxtLink to="/catalog"
            class="flex text-[#1950DD] sm:max-w-full justify-center items-center sm:w-[58%] gap-[10px] rounded-[4px] border border-blue-700 transition duration-300 ease-in-out hover:bg-blue-700 hover:text-white mb-4"
            style="padding: 10px 60px">
            {{ $t("HeroButton") }}
            <Icon name="ep:right" size="24" />
          </NuxtLink>
          <NuxtLink to="/contact"
            class="bg-[#1950DD] rounded border sm:max-w-full sm:w-[58%] w-[280px] border-[#F4F7F8] justify-center items-center flex text-[#F4F7F8] text-base font-medium"
            style="padding: 10px 60px">
            <Icon name="basil:contacts-outline" size="24" />{{
              $t("HeroButtonContact")
            }}
          </NuxtLink>
        </div>
      </div>
      <div class="flex sm:flex-col md:flex-row flex-row items-center h-[auto] md:h-[550px] gap-6 mt-6 md:mt-0">
        <div class="flex self-end w-full md:w-80">
          <img src="/HeroImg1.png" alt="metall1" />
        </div>
        <div class="flex self-start w-full md:w-80">
          <img src="/HeroImg2.png" class="z-10" alt="metall2" />
        </div>
      </div>
      <div class="block sm:hidden sm:items-start items-center flex-col mt-10 md:mt-44">
        <NuxtLink to="/catalog"
          class="flex text-[#323750] justify-center items-center sm:w-[58%] gap-[10px] rounded-[4px] border border-[#323750]  mb-4"
          style="padding: 10px 60px">
          {{ $t("HeroButton") }}
          <Icon name="ep:right" size="24" />
        </NuxtLink>
        <NuxtLink to="/contact"
          class="bg-[#323750] rounded border sm:w-[58%] w-[280px] border-[#F4F7F8] justify-center items-center flex text-[#F4F7F8] text-base font-medium"
          style="padding: 10px 60px">
          <Icon name="basil:contacts-outline" size="24" />{{
            $t("HeroButtonContact")
          }}
        </NuxtLink>
      </div>
      <img src="/icons/bigMetall.png" class="sm:block hidden -mx-28 relative top-24" alt="metall" />
    </main>
  </div>
</template>


