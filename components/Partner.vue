<template>
  <section class="partners sm:mt-64  mt-60 sm:my-0 -my-24">
    <div class="cnt">
      <div class="wrapper flex items-center justify-between relative  mx-auto ">
        <img width="500" class="partnersBg absolute   top-[-19%] left-[-16%] " src="/partnerBg.png" alt="Background" />
        <div class="text text-white max-w-[580px]   rounded-3xl sm:p-12  p-6  z-10 mb-32  "
          style="background: linear-gradient(49deg, #091E3A -5.91%, #164078 38.23%, #7092EA 97.71%, #FFF 128.95%)">
          <h1 class="text-2xl font-semibold">{{ $t('PartnerH6') }}</h1>
          <h3 class="text-7xl font-semibold my-6 leading-tight">
            {{ $t('PartnerH3') }}
          </h3>
          <p class="font-medium">
            {{ $t('PartnerP') }}
          </p>
        </div>

        <div
          class="partnerImgs grid grid-cols-2  sm:flex items-center justify-center sm:flex-wrap max-w-lg sm:gap-6 gap-10  relative bottom-14 sm:mt-0 mt-11"
          style="margin-top: 0">
          <img src="/icons/pepsi_logo.png" alt="partner" class="w-[200px] " />
          <img src="/icons/golden_house.png" alt="partner" class="w-[200px]" />
          <img src="/icons/coca_cola.png" alt="partner" class="w-[200px]" />
          <img src="/icons/Pro_Cab.png" alt="partner" class="w-[200px]" />
          <img src="/icons/imzo.png" alt="partner" class="w-[200px]" />
          <img src="/icons/alutex.png" alt="partner" class="w-[200px]" />
          <img src="/icons/Uzkabel.png" alt="partner" class="w-[200px]" />
          <img src="/icons/akfa.png" alt="partner" class="w-[200px]" />
        </div>
      </div>
    </div>
  </section>
</template>
   
<style scoped>
@media (max-width: 1280px) {
  .partners .wrapper {
    @apply flex-wrap justify-center;
  }

  .partnerImgs img {
    @apply w-48;
  }

  .partnersBg {
    @apply hidden;
  }
}

@media (max-width: 420px) {
  .partners .wrapper {
    @apply text-center;
  }

  .text {
    @apply p-6;
  }

  h6 {
    @apply text-xl;
  }

  h1 {
    @apply text-5xl;
  }
}
</style>
 
   