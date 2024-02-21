<template>
  <section class="delivery">
    <div class="cnt">
      <h1
        class="max-w-full mx-auto sm:text-5xl sm:w-[1100px] w-full flex items-center justify-center text-center text-white font-semibold text-3xl"
      >
        {{ $t("PixabayH2") }}
      </h1>

      <div class="coin">
        <div
          class="w-[400px] h-[400px] rounded-[400px] border-[6px] border-[#FEC601]"
        >
          <span>10</span>
          <p>{{ $t("PixabayP") }}</p>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped lang="scss">
.delivery {
  background: url("/background.png") no-repeat;
  background-size: cover;
  @apply h-[401px] flex items-center z-[1] relative;

  .coin {
    transform: translate(-50%);
    background: linear-gradient(
      90deg,
      #fec601 0%,
      #fff4cd 30.93%,
      #fec601 100%
    );
    background-size: 200% 100%;
    animation: gradientAnimation 2s infinite;
    @apply rounded-full w-60 h-60 flex items-center justify-center text-center absolute bottom-[-30%] left-[50%];

    div {
      @apply border-2 border-white rounded-full w-52 h-52 flex justify-center flex-col;

      span {
        @apply text-6xl text-[#091E3A] font-medium;
      }

      p {
        @apply sm:text-lg md:text-lg text-[14px] sm:p-1 p-0    font-medium mt-2 text-[#091E3A];
      }
    }
  }

}

@keyframes gradientAnimation {
  0% {
    background-position: 100% 0%;
  }

  100% {
    background-position: -100% 0%;
  }
}
</style>

