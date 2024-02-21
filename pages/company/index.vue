<template>
  <div v-if="!loading">
    <main class="about">
      <header class="header sm:pt-0 pt-20 flex items-center sm:h-[85vh] relative" style="
          background-image: url('/Pexels Photo by Pixabay (2).png');
          background-repeat: no-repeat;
          background-size: cover;
        ">
        <div class="cnt sm:mt-0 mt-5">
          <div class="headerText">
            <h1 class="w-full">
              {{ $t("companyH1") }}
            </h1>
            <h3>
              {{ $t("companyH3") }}
            </h3>
            <p>
              {{ $t("companyP") }}
            </p>
          </div>

          <div class="headerInfo sm:mt-0 mt-16 number-counter">
            <div>
              <h5>{{ currentCount1 }} т</h5>
              <p>{{ $t("companyP1") }}</p>
            </div>
            <div>
              <h5>{{ currentCount2.toFixed() }} т</h5>
              <p>{{ $t("companyP2") }}</p>
            </div>
            <div>
              <h5>{{ currentCount3 }} т</h5>
              <p>{{ $t("companyP3") }}</p>
            </div>
          </div>
        </div>
      </header>

      <!-- About   -->
      <div class="mt-20">
        <section>
          <div class="flex flex-col md:flex-row items-center justify-between p-4 lg:p-[6%] w-full gap-4 md:gap-14">
            <div class="flex md:items-start items-center flex-col w-full md:w-1/2 gap-4 md:gap-10">
              <h2 class="text-black text-[32px] font-normal md:text-start text-center">
                {{ $t("H2AboutWe") }}
              </h2>
              <p class="w-full lg:w-[100%] text-black sm:text-[18px] text-[14px] text-balance font-medium">
                {{ $t("PAboutWe") }}<br /><br />
              </p>
            </div>
            <div class="my-10 w-full md:w-1/2">
              <img src="/Pexels Photo by Pixabay.png" class="w-full" alt="" />
            </div>
          </div>
        </section>
      </div>

      <!-- Target  -->

      <section class="target sm:my-0 my-10">
        <div class="cnt">
          <div class="wrapper">
            <img src="/line.png" alt="line" class="sm:block hidden" />

            <div class="cards flex items-stretch">
              <div class="card space-y-10 sm:my-0 mb-32 gap-10">
                <div>
                  <h4>{{ $t("TargetH41") }}</h4>
                  <h5>{{ $t("TargetH51") }}</h5>
                  <p>
                    {{ $t("TargetP1") }}
                  </p>
                </div>
              </div>

              <div class="card space-y-10 sm:my-0 mb-32 gap-10">
                <div>
                  <h4>{{ $t("TargetH42") }}</h4>
                  <h5>{{ $t("TargetH52") }}</h5>
                  <p>
                    {{ $t("TargetP2") }}
                  </p>
                </div>
              </div>

              <div class="card space-y-10 sm:my-0 mb-32 gap-10">
                <div>
                  <h4>{{ $t("TargetH43") }}</h4>
                  <h5>{{ $t("TargetH53") }}</h5>
                  <p>
                    {{ $t("TargetP3") }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Target end  -->

      <section class="partners sm:mt-80">
        <div class="cnt">
          <div class="wrapper flex items-center justify-between relative mx-auto">
            <img width="500" class="partnersBg absolute top-[-19%] left-[-16%]" src="/partnerBg.png" alt="Background" />
            <div class="text text-white max-w-[580px] rounded-3xl sm:p-12 p-6 z-10 mb-32" style="
                background: linear-gradient(
                  49deg,
                  #091e3a -5.91%,
                  #164078 38.23%,
                  #7092ea 97.71%,
                  #fff 128.95%
                );
              ">
              <h6 class="text-2xl font-semibold">{{ $t("PartnerH6") }}</h6>
              <h3 class="text-7xl font-semibold my-6 leading-tight">
                {{ $t("PartnerH3") }}
              </h3>
              <p class="font-medium">
                {{ $t("PartnerP") }}
              </p>
            </div>

            <div
              class="partnerImgs grid grid-cols-2 sm:flex items-center justify-center sm:flex-wrap max-w-lg sm:gap-6 gap-10 relative bottom-14 sm:mt-0 mt-11"
              style="margin-top: 0">
              <img src="/icons/pepsi_logo.png" alt="partner" class="w-[200px]" />
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
    </main>
  </div>
  <div v-else>
    <Loader />
  </div>
</template>


<script setup>
const targetCount1 = ref(2500);
const targetCount2 = ref(10);
const targetCount3 = ref(3500);
const currentCount1 = ref(0);
const currentCount2 = ref(0);
const currentCount3 = ref(0);

const startCounting = () => {
  animateCount(currentCount1, 2500);
  animateCount(currentCount2, 10);
  animateCount(currentCount3, 3500);
};

const animateCount = (property, targetValue) => {
  const duration = 1000;
  const interval = 2;
  const step =
    (targetValue - property.value) / (duration / interval).toFixed(2);

  const countInterval = setInterval(() => {
    property.value += step;

    if (
      (step > 0 && property.value >= targetValue) ||
      (step < 0 && property.value <= targetValue)
    ) {
      property.value = targetValue;
      clearInterval(countInterval);
    }
  }, interval);
};

const loading = ref(true);

onMounted(() => {
  startCounting();
  loading.value = false;
});
</script>




<style scoped lang="scss">
@media (max-width: 1028px) {
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

.target {
  .wrapper {
    @apply relative;

    img {
      @apply absolute top-[30%] w-full left-0;
    }
  }

  .cards {
    @apply flex justify-around flex-wrap;

    .card {
      @apply bg-white shadow-2xl max-w-[280px] sm:min-h-[500px] p-5 rounded-3xl relative;

      &::before {
        content: "";
        background: url("/icons/target.png") no-repeat;
        transform: translate(-50%);
        @apply absolute left-[50%] sm:bottom-[-20%] bottom-[-30%] sm:w-36 sm:h-36 w-48 h-48;
      }

      div {
        @apply border-4 rounded-3xl border-[#091E3A] p-2 py-14 text-center h-full;

        h4 {
          transform: translate(-50%);
          @apply text-lg font-medium text-white absolute top-0 w-[70%] left-[50%] p-6 rounded-b-[40%];
          background: linear-gradient(90deg,
              #091e3a 0%,
              #2f80ed 50%,
              #2d9ee0 100%);

          &::after {
            content: "";
            @apply absolute left-[-9%] top-[0] border-t-[18px] border-r-[18px] border-t-transparent border-r-[#091E3A];
          }

          &::before {
            content: "";
            @apply absolute right-[-9%] top-[0] border-t-[18px] border-l-[18px] border-t-transparent border-l-[#2D9EE0];
          }
        }

        h5 {
          @apply text-lg font-semibold my-4;
        }

        p {
          @apply leading-relaxed mb-4;
        }
      }
    }
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

  h3 {
    @apply text-5xl;
  }
}

.header {
  .headerText {
    @apply max-w-[720px];

    h1 {
      @apply font-medium text-5xl text-white leading-tight;
    }

    h3 {
      @apply font-medium text-white mt-6 leading-relaxed;
    }

    p {
      @apply font-medium mt-4 text-white hidden text-[11px] my-2;
    }
  }

  .headerInfo {
    transform: translate(-50%);
    @apply flex items-center justify-between absolute bottom-[-100px] w-[80vw] left-[50%];

    div {
      @apply bg-[#323750] min-h-[100px] text-center p-10 py-10 rounded-sm;

      h5 {
        @apply text-white font-medium text-3xl;
      }

      p {
        @apply text-white sm:text-[12px] text-[8px] mt-6;
      }
    }
  }
}

@media (max-width: 840px) {
  .about {
    .header {
      @apply h-[300px];
    }
  }
}

@media (max-width: 740px) {
  .about .header {
    .headerInfo {
      @apply top-[90%];

      div {
        @apply p-4 py-8;
      }
    }

    .headerText h1 {
      @apply text-3xl;
    }
  }
}

@media (max-width: 620px) {
  .about {
    .header {
      @apply h-[250px] mb-64;

      .headerInfo {
        @apply top-[70%];

        div {
          @apply p-6 min-w-[120px];

          &:nth-child(2) {
            @apply mt-[200px] mx-0;
          }

          h5 {
            @apply text-xl;
          }

          p {
            @apply mt-2;
          }
        }
      }
    }
  }
}

@media (max-width: 520px) {
  .about .header {
    .headerInfo {
      @apply justify-center;
    }

    .headerText {
      h3 {
        @apply hidden;
      }

      p {
        @apply block;
      }

      h1 {
        @apply text-2xl;
      }
    }
  }
}

.card {
  @apply bg-white shadow-2xl max-w-[280px] p-5 rounded-3xl relative;

  &::before {
    content: "";
    background: url("/icons/target.png") no-repeat;
    transform: translate(-50%);
    @apply absolute left-[50%] bottom-[-20%] sm:w-36 sm:h-36 w-48 h-48;
  }
}

h4 {
  transform: translate(-50%);
  @apply text-lg font-medium text-white absolute top-0 w-[70%] left-[50%] p-6 rounded-b-[40%];
  background: linear-gradient(90deg, #091e3a 0%, #2f80ed 50%, #2d9ee0 100%);

  &::after {
    content: "";
    @apply absolute left-[-9%] top-[0] border-t-[18px] border-r-[18px] border-t-transparent border-r-[#091E3A];
  }

  &::before {
    content: "";
    @apply absolute right-[-9%] top-[0] border-t-[18px] border-l-[18px] border-t-transparent border-l-[#2D9EE0];
  }
}
</style>
