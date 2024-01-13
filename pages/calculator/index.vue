<template>
  <div v-if="!loading">
    <div>
      <div class="pt-32 px-10">
        <h2 class="text-black text-[32px] font-normal">{{ $t("CalcH2") }}</h2>
      </div>
      <div class="bg-[#1950DD0D]">
        <section class="mx-auto my-10 p-[2%] lg:p-[6%]">
          <div
            class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:gap-14 gap-8 sm:mx-0 mx-4 my-10"
          >
            <a
              href="#dvuxtavr"
              class="group text-sm w-full sm:h-[182px] h-[162px] relative bg-[#fff] ring-1 hover:ring-transparent ring-fiveColor rounded-r-lg transition-all duration-500"
              @click="handleChangeItem('двухтавр')"
            >
              <div
                class="absolute w-[215px] h-[180px] sm:block hidden flex-col justify-center rounded-sm border-l-2 border-[#1950DD] px-3 cursor-pointer hover:bg-dark hover:text-white transition-all"
              ></div>
              <div
                class="flex items-center justify-center flex-col mt-10 gap-8"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="89"
                  height="66"
                  viewBox="0 0 89 66"
                  fill="none"
                >
                  <path
                    d="M2.77928 26.9309L67.576 1L88.4152 10.1652V14.189L81.2517 17.0641L80.6005 34.5313L87.1127 36.9163V40.5669L24.9209 65.6037L0.5 54.6501V50.4028L10.9196 45.932V34.1598L2.77928 30.9546V26.9309Z"
                    fill="#1950DD"
                  />
                  <path
                    d="M2.77928 26.9309L67.576 1L88.4152 10.1652M2.77928 26.9309L24.9209 35.8726M2.77928 26.9309V30.9546L10.9196 34.1598V45.932M24.9209 35.8726L88.4152 10.1652M24.9209 35.8726V39.6728M88.4152 10.1652V14.189L81.2517 17.0641M24.9209 39.6728L81.2517 17.0641M24.9209 39.6728L17.9202 36.9163V58.4503M80.6005 34.5313L81.2517 17.0641M80.6005 34.5313L87.1127 36.9163M80.6005 34.5313L17.9202 58.4503M24.9209 65.6037L87.1127 40.5669V36.9163M24.9209 65.6037L0.5 54.6501V50.4028M24.9209 65.6037V61.3564M0.5 50.4028L10.9196 55.3207V45.932M0.5 50.4028L10.9196 45.932M17.9202 58.4503L24.9209 61.3564M24.9209 61.3564L87.1127 36.9163"
                    stroke="white"
                    stroke-width="0.0344485"
                  />
                  <path
                    d="M25.5713 36.99L87.7645 12.4009L87.7768 14.0158L25.572 39.0021L25.5713 36.99Z"
                    fill="white"
                  />
                  <path
                    d="M11.5703 34.0842L17.4313 36.3196V58.8974L11.5703 56.2783V34.0842Z"
                    fill="white"
                  />
                  <path
                    d="M3.10547 27.3779L24.5958 36.0961V39.2257L3.10547 30.7892V27.3779Z"
                    fill="white"
                  />
                  <path
                    d="M1.15039 51.0735L24.5944 61.58V64.9331L1.15039 54.4266V51.0735Z"
                    fill="white"
                  />
                </svg>
                <span
                  class="text-black text-base sm:pr-24 font-normal transition-all duration-500 group-hover:text-thirdColor relative"
                  >{{ $t("SpanDvuxtavr") }}</span
                >
              </div>
            </a>

            <a
              href="#dvuxtavr"
              @click="handleChangeItem('швеллер')"
              class="group text-sm w-full sm:h-[182px] h-[162px] relative bg-[#fff] ring-1 hover:ring-transparent ring-fiveColor rounded-r-lg transition-all duration-500"
            >
              <div
                class="absolute w-[215px] h-[180px] sm:block hidden flex-col justify-center rounded-sm border-l-2 border-[#1950DD] px-3 cursor-pointer hover:bg-dark hover:text-white transition-all"
              ></div>
              <div
                class="flex items-center justify-center flex-col mt-10 gap-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="94"
                  height="81"
                  viewBox="0 0 94 81"
                  fill="none"
                >
                  <path
                    d="M0.5 60.4514V36.1728L59.0176 1L63.064 4.11264V21.8547L73.647 26.5482L90.1439 16.5632L92.9453 18.4308V44.5769L34.1165 80.6835L0.5 60.4514Z"
                    fill="#1950DD"
                  />
                  <path
                    d="M0.5 36.1728V60.4514L34.1165 80.6835M0.5 36.1728L4.23516 38.9742M0.5 36.1728L59.0176 1L63.064 4.11264M34.1165 80.6835V54.5374M34.1165 80.6835L92.9453 44.5769V18.4308M34.1165 54.5374L92.9453 18.4308M34.1165 54.5374L31.0038 52.3585M92.9453 18.4308L90.1439 16.5632L73.647 26.5482M31.0038 52.3585V73.8357L4.23516 58.2725M31.0038 52.3585L73.647 26.5482M4.23516 58.2725V38.9742M4.23516 58.2725L63.064 21.8547M4.23516 38.9742L63.064 4.11264M63.064 4.11264V21.8547M63.064 21.8547L73.647 26.5482"
                    stroke="white"
                    stroke-width="0.174425"
                  />
                  <path
                    d="M1.12305 38.145L3.30189 39.2861V58.5846L1.12305 60.1408V38.145Z"
                    fill="white"
                  />
                  <path
                    d="M31.627 54.5381L33.4945 55.783V79.4392L31.627 75.5934V54.5381Z"
                    fill="white"
                  />
                  <path
                    d="M3.16481 58.5217L1.12314 60.1408L33.4899 79.4376L31.6267 75.3931L3.16481 58.5217Z"
                    fill="white"
                  />
                </svg>
                <span
                  class="text-black text-base sm:pr-24 font-normal transition-all duration-500 group-hover:text-thirdColor relative"
                  >{{ $t("SpanShveller") }}</span
                >
              </div>
            </a>

            <div
              class="group text-sm w-full sm:h-[182px] h-[162px] relative bg-[#fff] ring-1 hover:ring-transparent ring-fiveColor rounded-r-lg transition-all duration-500"
              @click="handleChangeItem('угалок')"
            >
              <NuxtLink to="#dvuxtavr">
                <div
                  class="absolute w-[215px] h-[180px] sm:block hidden flex-col justify-center rounded-sm border-l-2 border-[#1950DD] px-3 cursor-pointer hover:bg-dark hover:text-white transition-all"
                ></div>
                <div
                  class="flex items-center justify-center flex-col mt-10 gap-5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="97"
                    height="80"
                    viewBox="0 0 97 80"
                    fill="none"
                  >
                    <path
                      d="M69.5195 1.06011L13.001 32.1194C12.8609 32.1964 12.7908 32.2349 12.7393 32.2887C12.6898 32.3404 12.6528 32.4021 12.6309 32.4696C12.6082 32.5397 12.6082 32.6181 12.6082 32.775L12.6082 58.495C12.6082 58.6574 12.6082 58.7387 12.6323 58.8118C12.6555 58.8821 12.6948 58.9468 12.7471 59.0011C12.8015 59.0575 12.8754 59.0981 13.0232 59.1794L13.0232 59.1794L37.3601 72.5636C37.5077 72.6447 37.5815 72.6853 37.6591 72.7015C37.7337 72.7171 37.8106 72.7164 37.8841 72.6994C37.9606 72.6818 38.0317 72.6398 38.1739 72.556L38.1739 72.5559L93.8614 39.7185C94.2556 39.486 94.4527 39.3698 94.5138 39.226C94.5718 39.0893 94.5614 38.9332 94.4855 38.8021C94.4056 38.6641 94.1942 38.5648 93.7713 38.3662L93.7713 38.3661L71.1899 27.7615C71.026 27.6845 70.944 27.646 70.8833 27.5886C70.825 27.5335 70.7809 27.4659 70.7548 27.3917C70.7276 27.3144 70.7276 27.2273 70.7276 27.053L70.7276 1.74866C70.7276 1.31514 70.7276 1.09839 70.6361 0.970487C70.5491 0.84887 70.4109 0.770105 70.2596 0.755867C70.1004 0.74089 69.9068 0.847293 69.5195 1.06011Z"
                      fill="#1950DD"
                      stroke="#1950DD"
                      stroke-width="0.248751"
                    />
                    <rect
                      width="58.0276"
                      height="1.8679"
                      rx="0.933952"
                      transform="matrix(0.876385 -0.481611 0.518617 0.855007 18.9551 36.9963)"
                      fill="white"
                    />
                    <rect
                      width="58.0276"
                      height="1.8679"
                      rx="0.933952"
                      transform="matrix(0.876385 -0.481611 0.518617 0.855007 27.9043 59.8859)"
                      fill="white"
                    />
                    <path
                      d="M22.3385 54.0765C22.3231 54.051 22.3317 54.0188 22.3578 54.0044L70.6961 27.4405C70.7222 27.4261 70.7559 27.4351 70.7714 27.4606C70.7868 27.486 70.7782 27.5183 70.7521 27.5327L22.4137 54.0966C22.3876 54.111 22.354 54.102 22.3385 54.0765Z"
                      fill="white"
                    />
                    <rect
                      width="58.0276"
                      height="1.8679"
                      rx="0.933952"
                      transform="matrix(0.876385 -0.481611 0.518617 0.855007 35.1738 63.6121)"
                      fill="white"
                    />
                    <path
                      d="M12.8027 32.4714L16.4379 35.133V57.4904L37.4099 69.0776V72.3953L12.8027 58.8212V32.4714Z"
                      fill="white"
                    />
                  </svg>
                  <span
                    class="text-black text-base sm:pr-24 font-normal transition-all duration-500 group-hover:text-thirdColor relative"
                    >{{ $t("SpanUgalok") }}</span
                  >
                </div>
              </NuxtLink>
            </div>

            <NuxtLink
              class="group text-sm w-full sm:h-[182px] h-[162px] relative bg-[#fff] ring-1 hover:ring-transparent ring-fiveColor rounded-r-lg transition-all duration-500"
              @click="handleChangeItem('труба')"
            >
              <NuxtLink to="#dvuxtavr">
                <div
                  class="absolute w-[215px] h-[180px] sm:block hidden flex-col justify-center rounded-sm border-l-2 border-[#1950DD] px-3 cursor-pointer hover:bg-dark hover:text-white transition-all"
                ></div>
                <div
                  class="flex items-center justify-center flex-col sm:mt-8 mt-7 gap-6"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="109"
                    height="87"
                    viewBox="0 0 109 87"
                    fill="none"
                  >
                    <rect
                      x="0.942383"
                      y="50.0707"
                      width="99.2565"
                      height="41.4463"
                      rx="20.7232"
                      transform="rotate(-30 0.942383 50.0707)"
                      fill="#1950DD"
                      stroke="#1950DD"
                      stroke-width="0.647693"
                    />
                    <ellipse
                      cx="23.7291"
                      cy="60.6535"
                      rx="10.4802"
                      ry="14.5227"
                      transform="rotate(-24 23.7291 60.6535)"
                      stroke="white"
                      stroke-width="3.88616"
                    />
                    <rect
                      x="29.6699"
                      y="48.4189"
                      width="73.5892"
                      height="2.24384"
                      transform="rotate(-30 29.6699 48.4189)"
                      fill="white"
                    />
                    <rect
                      x="34.8809"
                      y="56.1747"
                      width="73.2391"
                      height="2.24384"
                      transform="rotate(-30 34.8809 56.1747)"
                      fill="white"
                    />
                  </svg>
                  <span
                    class="text-black text-base sm:pr-24 font-normal transition-all duration-500 group-hover:text-thirdColor relative"
                    >{{ $t("SpanTruba") }}</span
                  >
                </div>
              </NuxtLink>
            </NuxtLink>

            <NuxtLink
              class="group text-sm w-full sm:h-[182px] h-[162px] relative bg-[#fff] ring-1 hover:ring-transparent ring-fiveColor rounded-r-lg transition-all duration-500"
              @click="handleChangeItem('лист')"
            >
              <NuxtLink to="#dvuxtavr">
                <div
                  class="absolute w-[215px] h-[180px] sm:block hidden flex-col justify-center rounded-sm border-l-2 border-[#1950DD] px-3 cursor-pointer hover:bg-dark hover:text-white transition-all"
                ></div>
                <div
                  class="flex items-center justify-center flex-col mt-12 gap-7"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="66"
                    viewBox="0 0 100 66"
                    fill="none"
                  >
                    <path
                      d="M0.5 38.3769L64.0077 1L99.4 22.1692V28.1231L36.5538 65.5L0.5 44.3308V38.3769Z"
                      fill="#1950DD"
                    />
                    <path
                      d="M0.5 38.3769L64.0077 1L99.4 22.1692M0.5 38.3769L36.5538 59.2154M0.5 38.3769V44.3308L36.5538 65.5M36.5538 59.2154L99.4 22.1692M36.5538 59.2154V65.5M99.4 22.1692V28.1231L36.5538 65.5"
                      stroke="white"
                      stroke-width="0.0661538"
                    />
                    <path
                      d="M33.2462 56.8999L95.1014 20.1862L98.7358 22.1772L36.5556 58.8872L33.2462 56.8999Z"
                      fill="white"
                    />
                    <path
                      d="M0.830078 39.0385L34.8993 58.5538V60.3693L0.830078 40.6923V39.0385Z"
                      fill="white"
                    />
                    <path
                      d="M34.9004 58.5538L36.2235 59.2161V64.9183L34.9004 64.0925V58.5538Z"
                      fill="white"
                    />
                    <path
                      d="M38.209 58.5538L36.8859 59.2161V64.9183L38.209 64.0925V58.5538Z"
                      fill="white"
                    />
                  </svg>
                  <span
                    class="text-black text-base sm:pr-24 font-normal transition-all duration-500 group-hover:text-thirdColor relative"
                    >{{ $t("SpanList") }}</span
                  >
                </div>
              </NuxtLink>
            </NuxtLink>

            <!-- <<!>> -->

            <div
              @click="handleChangeItem('арматура')"
              class="group text-sm w-full sm:h-[182px] h-[162px] relative bg-[#fff] ring-1 hover:ring-transparent ring-fiveColor rounded-r-lg transition-all duration-500"
            >
              <NuxtLink to="#dvuxtavr">
                <div
                  class="absolute w-[215px] h-[180px] sm:block hidden flex-col justify-center rounded-sm border-l-2 border-[#1950DD] px-3 cursor-pointer hover:bg-dark hover:text-white transition-all"
                ></div>
                <div
                  class="flex items-center justify-center flex-col mt-10 gap-9"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="66"
                    viewBox="0 0 116 77"
                    fill="none"
                  >
                    <path
                      d="M14.1601 72.9598L111.579 16.7153L103.348 2.25238L6.12546 58.4969L14.1601 72.9598Z"
                      fill="#1950DD"
                      stroke="white"
                      stroke-width="0.321398"
                    />
                    <ellipse
                      cx="106.913"
                      cy="9.79782"
                      rx="5.53501"
                      ry="8.11802"
                      transform="rotate(-30 106.913 9.79782)"
                      fill="#1950DD"
                    />
                    <path
                      d="M15.2177 63.0174C16.4241 65.1068 16.9349 67.3258 16.793 69.22C16.6509 71.1152 15.8585 72.6676 14.4769 73.4653C13.0953 74.263 11.3547 74.1729 9.64236 73.3484C7.93093 72.5242 6.2647 70.9723 5.05839 68.8829C3.85207 66.7935 3.34118 64.5746 3.48317 62.6804C3.62524 60.7852 4.41761 59.2327 5.7992 58.435C7.18079 57.6374 8.92144 57.7274 10.6338 58.552C12.3452 59.3761 14.0114 60.928 15.2177 63.0174Z"
                      fill="#1950DD"
                      stroke="white"
                      stroke-width="0.321398"
                    />
                    <ellipse
                      cx="10.1377"
                      cy="66.1471"
                      rx="4.8727"
                      ry="7.53876"
                      transform="rotate(-30 10.1377 66.1471)"
                      fill="white"
                    />
                    <path
                      d="M98.5248 11.4921L98.526 11.4934C98.526 11.4934 100.475 13.4748 101.536 14.8967C103.071 16.9521 104.806 20.5927 104.806 20.5927L101.536 22.4805C101.536 22.4805 101.951 19.3181 101.338 17.1166C100.751 15.0116 98.5248 11.4921 98.5248 11.4921Z"
                      fill="white"
                    />
                    <path
                      d="M91.3842 15.6255L91.3854 15.6268C91.3854 15.6268 93.3343 17.6082 94.3957 19.0301C95.93 21.0855 97.6655 24.7261 97.6655 24.7261L94.3957 26.6139C94.3957 26.6139 94.8106 23.4515 94.1969 21.2501C93.6101 19.145 91.3842 15.6255 91.3842 15.6255Z"
                      fill="white"
                    />
                    <path
                      d="M84.1518 19.6437L84.153 19.645C84.153 19.645 86.1019 21.6264 87.1633 23.0483C88.6976 25.1037 90.4331 28.7443 90.4331 28.7443L87.1633 30.6321C87.1633 30.6321 87.5782 27.4697 86.9645 25.2683C86.3777 23.1632 84.1518 19.6437 84.1518 19.6437Z"
                      fill="white"
                    />
                    <path
                      d="M68.0815 29.2852L68.0827 29.2865C68.0827 29.2865 70.0316 31.2679 71.093 32.6898C72.6272 34.7452 74.3628 38.3858 74.3628 38.3858L71.093 40.2736C71.093 40.2736 71.5079 37.1112 70.8942 34.9097C70.3073 32.8047 68.0815 29.2852 68.0815 29.2852Z"
                      fill="white"
                    />
                    <path
                      d="M59.2436 34.1069L59.2448 34.1082C59.2448 34.1082 61.1937 36.0895 62.2551 37.5115C63.7894 39.5669 65.5249 43.2074 65.5249 43.2074L62.2551 45.0952C62.2551 45.0952 62.67 41.9328 62.0563 39.7314C61.4695 37.6263 59.2436 34.1069 59.2436 34.1069Z"
                      fill="white"
                    />
                    <path
                      d="M51.2084 38.9269L51.2096 38.9282C51.2096 38.9282 53.1586 40.9096 54.22 42.3315C55.7542 44.3869 57.4897 48.0275 57.4897 48.0275L54.22 49.9153C54.22 49.9153 54.6349 46.7529 54.0211 44.5515C53.4343 42.4464 51.2084 38.9269 51.2084 38.9269Z"
                      fill="white"
                    />
                    <path
                      d="M42.3705 43.7486L42.3717 43.7499C42.3717 43.7499 44.3207 45.7312 45.3821 47.1532C46.9163 49.2086 48.6519 52.8491 48.6519 52.8491L45.3821 54.7369C45.3821 54.7369 45.797 51.5745 45.1833 49.3731C44.5964 47.268 42.3705 43.7486 42.3705 43.7486Z"
                      fill="white"
                    />
                    <path
                      d="M34.3354 48.5687L34.3366 48.57C34.3366 48.57 36.2855 50.5513 37.3469 51.9733C38.8812 54.0287 40.6167 57.6692 40.6167 57.6692L37.3469 59.557C37.3469 59.557 37.7618 56.3946 37.1481 54.1932C36.5612 52.0881 34.3354 48.5687 34.3354 48.5687Z"
                      fill="white"
                    />
                    <path
                      d="M27.1049 52.5866L27.1061 52.5879C27.1061 52.5879 29.055 54.5693 30.1164 55.9912C31.6507 58.0466 33.3862 61.6872 33.3862 61.6872L30.1164 63.575C30.1164 63.575 30.5313 60.4126 29.9176 58.2111C29.3308 56.1061 27.1049 52.5866 27.1049 52.5866Z"
                      fill="white"
                    />
                    <path
                      d="M76.1186 24.4637L76.1198 24.465C76.1198 24.465 78.0687 26.4463 79.1301 27.8683C80.6644 29.9237 82.3999 33.5642 82.3999 33.5642L79.1301 35.452C79.1301 35.452 79.545 32.2896 78.9313 30.0882C78.3445 27.9831 76.1186 24.4637 76.1186 24.4637Z"
                      fill="white"
                    />
                  </svg>
                  <span
                    class="text-black text-base sm:pr-24 font-normal transition-all duration-500 group-hover:text-thirdColor relative"
                    >{{ $t("SpanArmatura") }}</span
                  >
                </div>
              </NuxtLink>
            </div>
            <NuxtLink
              class="group text-sm w-full sm:h-[182px] h-[162px] relative bg-[#fff] ring-1 hover:ring-transparent ring-fiveColor rounded-r-lg transition-all duration-500"
              @click="handleChangeItem('квадрат профил')"
            >
              <NuxtLink to="#dvuxtavr">
                <div
                  class="absolute w-[215px] h-[180px] sm:block hidden flex-col justify-center rounded-sm border-l-2 border-[#1950DD] px-3 cursor-pointer hover:bg-dark hover:text-white transition-all"
                ></div>
                <div
                  class="flex items-center justify-center flex-col mt-9 gap-5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="91"
                    height="80"
                    viewBox="0 0 91 80"
                    fill="none"
                  >
                    <path
                      d="M21.6306 51.0228L1.03963 38.4523L56.7484 6.65786L77.3327 18.6885L21.6306 51.0228Z"
                      fill="#1950DD"
                      stroke="#1950DD"
                      stroke-width="0.548788"
                    />
                    <path
                      d="M22.8328 51.916L22.8349 78.5398L78.6877 44.846L78.6877 19.8429L22.8328 51.916Z"
                      fill="#1950DD"
                      stroke="#1950DD"
                      stroke-width="0.548788"
                    />
                    <path
                      d="M3.24414 44.4811L18.8846 53.2617L10.9272 58.995L3.24414 64.2375V44.4811Z"
                      fill="#1950DD"
                    />
                    <path
                      d="M1.04723 66.8344L0.779106 38.9049L22.4515 52.0154V78.5927L1.04723 66.8344Z"
                      stroke="#1950DD"
                      stroke-width="0.548788"
                    />
                    <path
                      d="M3.51853 64.0665V44.9498L18.6102 53.4223V71.48L3.51853 64.0665Z"
                      stroke="#1950DD"
                      stroke-width="0.548788"
                    />
                  </svg>
                  <span
                    class="text-black text-base sm:pr-16 p-2 font-normal transition-all duration-500 group-hover:text-thirdColor relative"
                    >{{ $t("SpanKvadratprofil") }}</span
                  >
                </div>
              </NuxtLink>
            </NuxtLink>

            <NuxtLink
              class="group text-sm w-full sm:h-[182px] h-[162px] relative bg-[#fff] ring-1 hover:ring-transparent ring-fiveColor rounded-r-lg transition-all duration-500"
              @click="handleChangeItem('квадрат прут')"
            >
              <NuxtLink to="#dvuxtavr">
                <div
                  class="absolute w-[215px] h-[180px] sm:block hidden flex-col justify-center rounded-sm border-l-2 border-[#1950DD] px-3 cursor-pointer hover:bg-dark hover:text-white transition-all"
                ></div>
                <div
                  class="flex items-center justify-center flex-col mt-10 gap-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="88"
                    height="88"
                    viewBox="0 0 88 88"
                    fill="none"
                  >
                    <path
                      d="M0.5 33.8284L56.2792 1L87.3645 19.5931L87.3646 54.1716L32.1663 87L0.5 68.5714V33.8284Z"
                      fill="#1950DD"
                    />
                    <path
                      d="M0.5 33.8284L56.2792 1L87.3645 19.5931M0.5 33.8284L32.1663 52.131M0.5 33.8284V68.5714L32.1663 87M32.1663 52.131L87.3645 19.5931M32.1663 52.131V87M87.3645 19.5931L87.3646 54.1716L32.1663 87"
                      stroke="white"
                      stroke-width="0.0581034"
                    />
                    <path
                      d="M29.2598 50.0966L83.5877 17.8506L86.7798 19.5994L32.1665 51.842L29.2598 50.0966Z"
                      fill="white"
                    />
                    <path
                      d="M0.789062 34.4109L30.7123 51.5514V53.1459L0.789062 35.8635V34.4109Z"
                      fill="white"
                    />
                    <path
                      d="M30.7109 51.5513L31.873 52.133V86.814L30.7109 86.1262V51.5513Z"
                      fill="white"
                    />
                    <path
                      d="M33.6172 51.5513L32.4553 52.133L32.4551 86.8087L33.6172 86.1048V51.5513Z"
                      fill="white"
                    />
                  </svg>
                  <span
                    class="text-black text-base sm:pr-16 font-normal transition-all duration-500 group-hover:text-thirdColor relative"
                    >{{ $t("SpanKvadratprut") }}</span
                  >
                </div>
              </NuxtLink>
            </NuxtLink>

            <NuxtLink
              class="group text-sm w-full sm:h-[182px] h-[162px] relative bg-[#fff] ring-1 hover:ring-transparent ring-fiveColor rounded-r-lg transition-all duration-500"
              @click="handleChangeItem('прут')"
            >
              <NuxtLink to="#dvuxtavr">
                <div
                  class="absolute w-[215px] h-[180px] sm:block hidden flex-col justify-center rounded-sm border-l-2 border-[#1950DD] px-3 cursor-pointer hover:bg-dark hover:text-white transition-all"
                ></div>
                <div
                  class="flex items-center justify-center flex-col sm:mt-8 mt-6 gap-5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="119"
                    height="95"
                    viewBox="0 0 119 95"
                    fill="none"
                  >
                    <rect
                      x="0.983341"
                      y="54.7065"
                      width="108.446"
                      height="45.2836"
                      rx="22.6418"
                      transform="rotate(-30 0.983341 54.7065)"
                      fill="#1950DD"
                      stroke="#1950DD"
                      stroke-width="0.707661"
                    />
                    <ellipse
                      cx="25.8811"
                      cy="66.2692"
                      rx="11.4505"
                      ry="15.8673"
                      transform="rotate(-24 25.8811 66.2692)"
                      fill="white"
                      stroke="white"
                      stroke-width="4.24596"
                    />
                    <rect
                      x="32.3711"
                      y="52.9019"
                      width="80.4025"
                      height="2.45159"
                      transform="rotate(-30 32.3711 52.9019)"
                      fill="white"
                    />
                    <rect
                      x="38.0645"
                      y="61.3757"
                      width="80.0199"
                      height="2.45159"
                      transform="rotate(-30 38.0645 61.3757)"
                      fill="white"
                    />
                  </svg>
                  <span
                    class="text-black text-base sm:pr-24 font-normal transition-all duration-500 group-hover:text-thirdColor relative"
                    >{{ $t("SpanPrut") }}</span
                  >
                </div>
              </NuxtLink>
            </NuxtLink>

            <NuxtLink
              class="group text-sm w-full sm:h-[182px] h-[162px] relative bg-[#fff] ring-1 hover:ring-transparent ring-fiveColor rounded-r-lg transition-all duration-500"
              @click="handleChangeItem('металл паласа')"
            >
              <NuxtLink to="#dvuxtavr">
                <div
                  class="absolute w-[215px] h-[180px] sm:block hidden flex-col justify-center rounded-sm border-l-2 border-[#1950DD] px-3 cursor-pointer hover:bg-dark hover:text-white transition-all"
                ></div>
                <div
                  class="flex items-center justify-center flex-col mt-5 gap-5"
                >
                  <img
                    src="/icons/Metall palasa.svg"
                    alt=""
                    width="115.27"
                    height="76.62"
                  />
                  <span
                    class="text-black text-base text-center sm:pr-16 bottom-2 font-normal transition-all duration-500 group-hover:text-thirdColor relative"
                    >{{ $t("SpanMetallpalasa") }}</span
                  >
                </div>
              </NuxtLink>
            </NuxtLink>

            <NuxtLink
              class="group text-sm w-full sm:h-[182px] h-[162px] relative bg-[#fff] ring-1 hover:ring-transparent ring-fiveColor rounded-r-lg transition-all duration-500"
              @click="handleChangeItem('металл планка')"
            >
              <NuxtLink to="#dvuxtavr">
                <div
                  class="absolute w-[215px] h-[180px] sm:block hidden flex-col justify-center rounded-sm border-l-2 border-[#1950DD] px-3 cursor-pointer hover:bg-dark hover:text-white transition-all"
                ></div>
                <div
                  class="flex items-center justify-center flex-col mt-2 gap-5"
                >
                  <img
                    src="/icons/Metall planka.svg"
                    alt=""
                    width="115.27"
                    height="76.62"
                  />
                  <span
                    id="dvuxtavr"
                    class="text-black text-base text-center sm:pr-16 bottom-4 font-normal transition-all duration-500 group-hover:text-thirdColor relative"
                    >{{ $t("SpanMetallplanka") }}</span
                  >
                </div>
              </NuxtLink>
            </NuxtLink>
          </div>
        </section>
      </div>

      <!-- арматура -->
      <div v-if="itemName == 'арматура'">
        <h1 class="uppercase font-bold text-2xl text-center">{{ itemName }}</h1>
        <div
          class="cnt my-12 flex flex-col md:flex-row lg:flex-row gap-9 items-center"
        >
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput7") }}</label
            >
            <select
              @change="handleChange"
              v-model="type1"
              class="rounded-[6px] h-[35px] border border-[#222222] outline-none pl-1 pr-[30px] py-1.5"
            >
              <option v-for="(item, i) in арматура" :key="item">
                {{ i }}
              </option>
            </select>
          </div>
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput8") }}</label
            >
            <input
              type="number"
              class="rounded-[6px] h-[35px] border border-[#222] pl-1 pr-[30px] py-1.5 outline-none"
              disabled
              :value="type1 ? арматура[type1].weightPerMeter : ''"
            />
          </div>
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput9") }}</label
            >
            <input
              type="number"
              class="rounded-[6px] h-[35px] border border-[#222] pl-1 pr-[30px] py-1.5 outline-none"
              disabled
              :value="type1 ? арматура[type1].metersPerTon : ''"
            />
          </div>
        </div>
        <div
          class="cnt my-12 flex flex-col md:flex-row lg:flex-row gap-9 items-center"
        >
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput10") }}</label
            >
            <input
              type="number"
              class="rounded-[6px] h-[35px] border border-[#222] pl-1 pr-[30px] py-1.5 outline-none"
              min="0"
              v-model="type2"
            />
          </div>
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput11") }}</label
            >
            <input
              class="rounded-[6px] h-[35px] border bg-[#1950DD] text-white border-[#222] pl-1 pr-[30px] py-1.5 outline-none placeholder:text-[#FFFFFF]"
              placeholder="0"
              disabled
              :value="
                type2
                  ? `${(арматура[type1].weightPerMeter * type2).toFixed(2)} KG`
                  : ''
              "
            />
          </div>
        </div>
      </div>

      <!-- ugalok  -->
      <div v-if="itemName == 'угалок'">
        <h1 class="uppercase font-bold text-2xl text-center">{{ itemName }}</h1>
        <div
          class="cnt my-12 flex flex-col md:flex-row lg:flex-row gap-9 items-center"
        >
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput12") }}</label
            >
            <select
              v-model="type1"
              @change="handleChange"
              class="rounded-[6px] h-[35px] border border-[#222222] outline-none pl-1 pr-[30px] py-1.5"
            >
              <option v-for="(item, i) in угалок" :key="item">
                {{ i }}
              </option>
            </select>
          </div>
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput13") }}</label
            >
            <select
              v-model="type2"
              class="rounded-[6px] h-[35px] border border-[#222222] outline-none pl-1 pr-[30px] py-1.5"
            >
              <option v-for="(item, i) in угалок[type1]" :key="item">
                {{ i }}
              </option>
            </select>
          </div>
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput14") }}</label
            >
            <input
              type="number"
              class="rounded-[6px] h-[35px] border border-[#222] pl-1 pr-[30px] py-1.5 outline-none"
              disabled
              :value="
                type1 && type2
                  ? угалок[type1][type2].weightPerMeter.toFixed(2)
                  : ''
              "
            />
          </div>
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput15") }}</label
            >
            <input
              type="number"
              class="rounded-[6px] h-[35px] border border-[#222] pl-1 pr-[30px] py-1.5 outline-none"
              disabled
              :value="type1 && type2 ? угалок[type1][type2].metersPerTon : ''"
            />
          </div>
        </div>
        <div
          class="cnt my-12 flex flex-col md:flex-row lg:flex-row gap-9 items-center"
        >
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput16") }}</label
            >
            <input
              type="number"
              class="rounded-[6px] h-[35px] border border-[#222] pl-1 pr-[30px] py-1.5 outline-none"
              min="0"
              v-model="type3"
            />
          </div>
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput17") }}</label
            >
            <input
              class="rounded-[6px] h-[35px] border bg-[#1950DD] text-white border-[#222] pl-1 pr-[30px] py-1.5 outline-none placeholder:text-[#FFFFFF]"
              placeholder="0"
              disabled
              :value="
                type3 && type1 && type2
                  ? `${(угалок[type1][type2].weightPerMeter * type3).toFixed(
                      2
                    )} KG`
                  : ''
              "
            />
          </div>
        </div>
      </div>

      <div v-if="itemName == 'швеллер'">
        <h1 class="uppercase font-bold text-2xl text-center">{{ itemName }}</h1>
        <div
          class="cnt my-12 flex flex-col md:flex-row lg:flex-row gap-9 items-center"
        >
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput18") }}</label
            >
            <select
              @change="handleChange"
              v-model="type1"
              class="rounded-[6px] h-[35px] border border-[#222222] outline-none pl-1 pr-[30px] py-1.5"
            >
              <option v-for="(item, i) in швеллер" :key="item">
                {{ i }}
              </option>
            </select>
          </div>
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput19") }}</label
            >
            <input
              type="number"
              class="rounded-[6px] h-[35px] border border-[#222] pl-1 pr-[30px] py-1.5 outline-none"
              disabled
              :value="type1 ? швеллер[type1].weightPerMeter : ''"
            />
          </div>
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput20") }}</label
            >
            <input
              type="number"
              class="rounded-[6px] h-[35px] border border-[#222] pl-1 pr-[30px] py-1.5 outline-none"
              disabled
              :value="type1 ? швеллер[type1].metersPerTon : ''"
            />
          </div>
        </div>
        <div
          class="cnt my-12 flex flex-col md:flex-row lg:flex-row gap-9 items-center"
        >
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput21") }}</label
            >
            <input
              type="number"
              class="rounded-[6px] h-[35px] border border-[#222] pl-1 pr-[30px] py-1.5 outline-none"
              min="0"
              v-model="type2"
            />
          </div>
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput22") }}</label
            >
            <input
              class="rounded-[6px] h-[35px] border bg-[#1950DD] text-white border-[#222] pl-1 pr-[30px] py-1.5 outline-none placeholder:text-[#FFFFFF]"
              placeholder="0"
              disabled
              :value="
                type2
                  ? `${(швеллер[type1].weightPerMeter * type2).toFixed(2)} KG`
                  : ''
              "
            />
          </div>
        </div>
      </div>

      <!-- dvuxtavr -->
      <div v-if="itemName == 'двухтавр'">
        <h1 class="uppercase font-bold text-2xl text-center">{{ itemName }}</h1>
        <div
          class="cnt my-12 flex flex-col md:flex-row lg:flex-row gap-9 items-center"
        >
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput1") }}</label
            >
            <select
              v-model="type1"
              @change="handleChange"
              class="rounded-[6px] h-[35px] border border-[#222222] outline-none pl-1 pr-[30px] py-1.5 relative"
              style="white-space: normal;" 
              >
              <option v-for="(item, i) in двухтавр" :key="item">
                {{ i }}
              </option>
              </select>
          </div>
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput2") }}</label
            >
            <select
              v-model="type2"
              class="rounded-[6px] h-[35px] border border-[#222222] outline-none pl-1 pr-[30px] py-1.5"
            >
              <option v-for="(item, i) in двухтавр[type1]" :key="item">
                {{ i }}
              </option>
            </select>
          </div>
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput3") }}</label
            >
            <input
              type="number"
              class="rounded-[6px] h-[35px] border border-[#222] pl-1 pr-[30px] py-1.5 outline-none"
              disabled
              :value="
                type1 && type2
                  ? двухтавр[type1][type2].weightPerMeter.toFixed(2)
                  : ''
              "
            />
          </div>
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput4") }}</label
            >
            <input
              type="number"
              class="rounded-[6px] h-[35px] border border-[#222] pl-1 pr-[30px] py-1.5 outline-none"
              disabled
              :value="type1 && type2 ? двухтавр[type1][type2].metersPerTon : ''"
            />
          </div>
        </div>
        <div
          class="cnt my-12 flex flex-col md:flex-row lg:flex-row gap-9 items-center"
        >
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput5") }}</label
            >
            <input
              type="number"
              class="rounded-[6px] h-[35px] border border-[#222] pl-1 pr-[30px] py-1.5 outline-none"
              min="0"
              v-model="type3"
            />
          </div>
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput6") }}</label
            >
            <input
              class="rounded-[6px] h-[35px] border bg-[#1950DD] text-white border-[#222] pl-1 pr-[30px] py-1.5 outline-none placeholder:text-[#FFFFFF]"
              placeholder="0"
              disabled
              :value="
                type3 && type1 && type2
                  ? `${(двухтавр[type1][type2].weightPerMeter * type3).toFixed(
                      2
                    )} KG`
                  : ''
              "
            />
          </div>
        </div>
      </div>

      <!-- truba  -->
      <div v-if="itemName == 'труба'">
        <h1 class="uppercase font-bold text-2xl text-center">{{ itemName }}</h1>
        <div
          class="cnt my-12 flex flex-col md:flex-row lg:flex-row gap-9 items-center"
        >
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput23") }}</label
            >
            <select
              v-model="type1"
              @change="handleChange"
              class="rounded-[6px] h-[35px] border border-[#222222] outline-none pl-1 pr-[30px] py-1.5"
            >
              <option v-for="(item, i) in труба" :key="item">
                {{ i }}
              </option>
            </select>
          </div>
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput24") }}</label
            >
            <select
              v-model="type2"
              class="rounded-[6px] h-[35px] border border-[#222222] outline-none pl-1 pr-[30px] py-1.5"
            >
              <option v-for="(item, i) in труба[type1]" :key="item">
                {{ i }}
              </option>
            </select>
          </div>
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput25") }}</label
            >
            <input
              type="number"
              class="rounded-[6px] h-[35px] border border-[#222] pl-1 pr-[30px] py-1.5 outline-none"
              disabled
              :value="
                type1 && type2
                  ? труба[type1][type2].weightPerMeter.toFixed(2)
                  : ''
              "
            />
          </div>
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput26") }}</label
            >
            <input
              type="number"
              class="rounded-[6px] h-[35px] border border-[#222] pl-1 pr-[30px] py-1.5 outline-none"
              disabled
              :value="type1 && type2 ? труба[type1][type2].metersPerTon : ''"
            />
          </div>
        </div>
        <div
          class="cnt my-12 flex flex-col md:flex-row lg:flex-row gap-9 items-center"
        >
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput27") }}</label
            >
            <input
              type="number"
              class="rounded-[6px] h-[35px] border border-[#222] pl-1 pr-[30px] py-1.5 outline-none"
              min="0"
              v-model="type3"
            />
          </div>
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput28") }}</label
            >
            <input
              class="rounded-[6px] h-[35px] border bg-[#1950DD] text-white border-[#222] pl-1 pr-[30px] py-1.5 outline-none placeholder:text-[#FFFFFF]"
              placeholder="0"
              disabled
              :value="
                type3 && type1 && type2
                  ? `${(труба[type1][type2].weightPerMeter * type3).toFixed(
                      2
                    )} KG`
                  : ''
              "
            />
          </div>
        </div>
      </div>

      <!-- list  -->
      <div v-if="itemName == 'лист'">
        <h1 class="uppercase font-bold text-2xl text-center">{{ itemName }}</h1>
        <div
          class="cnt my-12 flex flex-col md:flex-row lg:flex-row gap-9 items-center"
        >
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput29") }}</label
            >
            <input
              type="number"
              min="0"
              step="1"
              class="rounded-[6px] h-[35px] border border-[#222] pl-1 pr-[30px] py-1.5 outline-none"
              v-model="type1"
            />
          </div>
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >1м<sup>2</sup>{{ $t("CalcInput30") }}</label
            >
            <input
              type="number"
              class="rounded-[6px] h-[35px] border border-[#222] pl-1 pr-[30px] py-1.5 outline-none"
              disabled
              :value="(parseInt(type1) * 7.85).toFixed(2)"
            />
          </div>
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput31") }} (м<sup>2</sup>)</label
            >
            <input
              type="number"
              class="rounded-[6px] h-[35px] border border-[#222] pl-1 pr-[30px] py-1.5 outline-none"
              disabled
              :value="type1 ? (1000 / (parseInt(type1) * 7.85)).toFixed(2) : ''"
            />
          </div>
        </div>
        <div
          class="cnt my-12 flex flex-col md:flex-row lg:flex-row gap-9 items-center"
        >
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput32") }} (м<sup>2</sup>)</label
            >
            <input
              type="number"
              class="rounded-[6px] h-[35px] border border-[#222] pl-1 pr-[30px] py-1.5 outline-none"
              min="0"
              v-model="type2"
            />
          </div>
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput33") }}</label
            >
            <input
              class="rounded-[6px] h-[35px] border bg-[#1950DD] text-white border-[#222] pl-1 pr-[30px] py-1.5 outline-none placeholder:text-[#FFFFFF]"
              placeholder="0"
              disabled
              :value="
                type2
                  ? `${((parseInt(type1) * 7.85).toFixed(2) * type2).toFixed(
                      2
                    )} KG`
                  : ''
              "
            />
          </div>
        </div>
      </div>

      <!-- kvadrat profil  -->
      <div v-if="itemName == 'квадрат профил'">
        <h1 class="uppercase font-bold text-2xl text-center">{{ itemName }}</h1>
        <div
          class="cnt my-12 flex flex-col md:flex-row lg:flex-row gap-9 items-center"
        >
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput34") }}</label
            >
            <select
              v-model="type1"
              @change="handleChange"
              class="rounded-[6px] h-[35px] border border-[#222222] outline-none pl-1 pr-[30px] py-1.5"
            >
              <option v-for="(item, i) in квадратпрофил" :key="item">
                {{ i }}
              </option>
            </select>
          </div>
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput35") }}</label
            >
            <select
              v-model="type2"
              class="rounded-[6px] h-[35px] border border-[#222222] outline-none pl-1 pr-[30px] py-1.5"
            >
              <option v-for="(item, i) in квадратпрофил[type1]" :key="item">
                {{ i }}
              </option>
            </select>
          </div>
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput36") }}</label
            >
            <input
              type="number"
              class="rounded-[6px] h-[35px] border border-[#222] pl-1 pr-[30px] py-1.5 outline-none"
              disabled
              :value="
                type1 && type2
                  ? квадратпрофил[type1][type2].weightPerMeter.toFixed(2)
                  : ''
              "
            />
          </div>
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput37") }}</label
            >
            <input
              type="number"
              class="rounded-[6px] h-[35px] border border-[#222] pl-1 pr-[30px] py-1.5 outline-none"
              disabled
              :value="
                type1 && type2 ? квадратпрофил[type1][type2].metersPerTon : ''
              "
            />
          </div>
        </div>
        <div
          class="cnt my-12 flex flex-col md:flex-row lg:flex-row gap-9 items-center"
        >
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput38") }}</label
            >
            <input
              type="number"
              class="rounded-[6px] h-[35px] border border-[#222] pl-1 pr-[30px] py-1.5 outline-none"
              min="0"
              v-model="type3"
            />
          </div>
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput39") }}</label
            >
            <input
              class="rounded-[6px] h-[35px] border bg-[#1950DD] text-white border-[#222] pl-1 pr-[30px] py-1.5 outline-none placeholder:text-[#FFFFFF]"
              placeholder="0"
              disabled
              :value="
                type3 && type1 && type2
                  ? `${(
                      квадратпрофил[type1][type2].weightPerMeter * type3
                    ).toFixed(2)} KG`
                  : ''
              "
            />
          </div>
        </div>
      </div>
      <!-- kvadrat prut -->
      <div v-if="itemName == 'квадрат прут'">
        <h1 class="uppercase font-bold text-2xl text-center">{{ itemName }}</h1>
        <div
          class="cnt my-12 flex flex-col md:flex-row lg:flex-row gap-9 items-center"
        >
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput40") }}</label
            >
            <select
              @change="handleChange"
              v-model="type1"
              class="rounded-[6px] h-[35px] border border-[#222222] outline-none pl-1 pr-[30px] py-1.5"
            >
              <option v-for="(item, i) in квадратпрут" :key="item">
                {{ i }}
              </option>
            </select>
          </div>
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput41") }}</label
            >
            <input
              type="number"
              class="rounded-[6px] h-[35px] border border-[#222] pl-1 pr-[30px] py-1.5 outline-none"
              disabled
              :value="type1 ? квадратпрут[type1].weightPerMeter.toFixed(2) : ''"
            />
          </div>
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput42") }}</label
            >
            <input
              type="number"
              class="rounded-[6px] h-[35px] border border-[#222] pl-1 pr-[30px] py-1.5 outline-none"
              disabled
              :value="type1 ? квадратпрут[type1].metersPerTon : ''"
            />
          </div>
        </div>
        <div
          class="cnt my-12 flex flex-col md:flex-row lg:flex-row gap-9 items-center"
        >
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput43") }}</label
            >
            <input
              type="number"
              class="rounded-[6px] h-[35px] border border-[#222] pl-1 pr-[30px] py-1.5 outline-none"
              min="0"
              v-model="type2"
            />
          </div>
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput44") }}</label
            >
            <input
              class="rounded-[6px] h-[35px] border bg-[#1950DD] text-white border-[#222] pl-1 pr-[30px] py-1.5 outline-none placeholder:text-[#FFFFFF]"
              placeholder="0"
              disabled
              :value="
                type2
                  ? `${(квадратпрут[type1].weightPerMeter * type2).toFixed(
                      2
                    )} KG`
                  : ''
              "
            />
          </div>
        </div>
      </div>

      <!-- prut  -->
      <div v-if="itemName == 'прут'">
        <h1 class="uppercase font-bold text-2xl text-center">{{ itemName }}</h1>
        <div
          class="cnt my-12 flex flex-col md:flex-row lg:flex-row gap-9 items-center"
        >
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput45") }}</label
            >
            <select
              @change="handleChange"
              v-model="type1"
              class="rounded-[6px] h-[35px] border border-[#222222] outline-none pl-1 pr-[30px] py-1.5"
            >
              <option v-for="(item, i) in прут" :key="item">
                {{ i }}
              </option>
            </select>
          </div>
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput46") }}</label
            >
            <input
              type="number"
              class="rounded-[6px] h-[35px] border border-[#222] pl-1 pr-[30px] py-1.5 outline-none"
              disabled
              :value="type1 ? прут[type1].weightPerMeter.toFixed(2) : ''"
            />
          </div>
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput47") }}</label
            >
            <input
              type="number"
              class="rounded-[6px] h-[35px] border border-[#222] pl-1 pr-[30px] py-1.5 outline-none"
              disabled
              :value="type1 ? прут[type1].metersPerTon : ''"
            />
          </div>
        </div>
        <div
          class="cnt my-12 flex flex-col md:flex-row lg:flex-row gap-9 items-center"
        >
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput48") }}</label
            >
            <input
              type="number"
              class="rounded-[6px] h-[35px] border border-[#222] pl-1 pr-[30px] py-1.5 outline-none"
              min="0"
              v-model="type2"
            />
          </div>
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput49") }}</label
            >
            <input
              class="rounded-[6px] h-[35px] border bg-[#1950DD] text-white border-[#222] pl-1 pr-[30px] py-1.5 outline-none placeholder:text-[#FFFFFF]"
              placeholder="0"
              disabled
              :value="
                type2
                  ? `${(прут[type1].weightPerMeter * type2).toFixed(2)} KG`
                  : ''
              "
            />
          </div>
        </div>
      </div>

      <!-- palasa  -->
      <div v-if="itemName == 'металл паласа'">
        <h1 class="uppercase font-bold text-2xl text-center">{{ itemName }}</h1>
        <div
          class="cnt my-12 flex flex-col md:flex-row lg:flex-row gap-9 items-center"
        >
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput50") }}</label
            >
            <input
              type="number"
              min="0"
              step="1"
              class="rounded-[6px] h-[35px] border border-[#222] pl-1 pr-[30px] py-1.5 outline-none"
              v-model="type1"
            />
          </div>
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >1м<sup>2</sup>{{ $t("CalcInput51") }}</label
            >
            <input
              type="number"
              class="rounded-[6px] h-[35px] border border-[#222] pl-1 pr-[30px] py-1.5 outline-none"
              disabled
              :value="(parseInt(type1) * 7.85).toFixed(2)"
            />
          </div>
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput52") }} (м<sup>2</sup>)</label
            >
            <input
              type="number"
              class="rounded-[6px] h-[35px] border border-[#222] pl-1 pr-[30px] py-1.5 outline-none"
              disabled
              :value="type1 ? (1000 / (parseInt(type1) * 7.85)).toFixed(2) : ''"
            />
          </div>
        </div>
        <div
          class="cnt my-12 flex flex-col md:flex-row lg:flex-row gap-9 items-center"
        >
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput53") }} (м<sup>2</sup>)</label
            >
            <input
              type="number"
              class="rounded-[6px] h-[35px] border border-[#222] pl-1 pr-[30px] py-1.5 outline-none"
              min="0"
              v-model="type2"
            />
          </div>
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput54") }}</label
            >
            <input
              class="rounded-[6px] h-[35px] border bg-[#1950DD] text-white border-[#222] pl-1 pr-[30px] py-1.5 outline-none placeholder:text-[#FFFFFF]"
              placeholder="0"
              disabled
              :value="
                type2
                  ? `${((parseInt(type1) * 7.85).toFixed(2) * type2).toFixed(
                      2
                    )} KG`
                  : ''
              "
            />
          </div>
        </div>
      </div>

      <!-- planka  -->
      <div v-if="itemName == 'металл планка'">
        <h1 class="uppercase font-bold text-2xl text-center">{{ itemName }}</h1>
        <div
          class="cnt my-12 flex flex-col md:flex-row lg:flex-row gap-9 items-center"
        >
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput55") }}</label
            >
            <input
              type="number"
              min="0"
              step="1"
              class="rounded-[6px] h-[35px] border border-[#222] pl-1 pr-[30px] py-1.5 outline-none"
              v-model="type1"
            />
          </div>
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >1м<sup>2</sup> {{ $t("CalcInput56") }}</label
            >
            <input
              type="number"
              class="rounded-[6px] h-[35px] border border-[#222] pl-1 pr-[30px] py-1.5 outline-none"
              disabled
              :value="(parseInt(type1) * 7.85).toFixed(2)"
            />
          </div>
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput57") }} (м<sup>2</sup>)</label
            >
            <input
              type="number"
              class="rounded-[6px] h-[35px] border border-[#222] pl-1 pr-[30px] py-1.5 outline-none"
              disabled
              :value="type1 ? (1000 / (parseInt(type1) * 7.85)).toFixed(2) : ''"
            />
          </div>
        </div>
        <div
          class="cnt my-12 flex flex-col md:flex-row lg:flex-row gap-9 items-center"
        >
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput58") }} (м<sup>2</sup>)</label
            >
            <input
              type="number"
              class="rounded-[6px] h-[35px] border border-[#222] pl-1 pr-[30px] py-1.5 outline-none"
              min="0"
              v-model="type2"
            />
          </div>
          <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
            <label
              class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
              >{{ $t("CalcInput59") }}</label
            >
            <input
              class="rounded-[6px] h-[35px] border bg-[#1950DD] text-white border-[#222] pl-1 pr-[30px] py-1.5 outline-none placeholder:text-[#FFFFFF]"
              placeholder="0"
              disabled
              :value="
                type2
                  ? `${((parseInt(type1) * 7.85).toFixed(2) * type2).toFixed(
                      2
                    )} KG`
                  : ''
              "
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <Loader />
  </div>
</template>

<script setup>
let loading = ref(true);
let itemName = ref("двухтавр");
let type1 = ref();
let type2 = ref();
let type3 = ref();

const двухтавр = ref({
  K: {
    "20/1": {
      weightPerMeter: 41.5,
      metersPerTon: 24.1,
    },
    "20/2": {
      weightPerMeter: 46.9,
      metersPerTon: 21.3,
    },
    "23/1": {
      weightPerMeter: 52.2,
      metersPerTon: 19.2,
    },
    "23/2": {
      weightPerMeter: 59.5,
      metersPerTon: 16.8,
    },
    "26/1": {
      weightPerMeter: 65.2,
      metersPerTon: 15.3,
    },
    "26/2": {
      weightPerMeter: 73.2,
      metersPerTon: 13.7,
    },
    "26/3": {
      weightPerMeter: 83.1,
      metersPerTon: 12,
    },
    "30/1": {
      weightPerMeter: 84.8,
      metersPerTon: 11.8,
    },
    "30/2": {
      weightPerMeter: 96.3,
      metersPerTon: 10.4,
    },
    "30/3": {
      weightPerMeter: 108.9,
      metersPerTon: 9.2,
    },
    "35/1": {
      weightPerMeter: 109.7,
      metersPerTon: 9.1,
    },
    "35/2": {
      weightPerMeter: 125.9,
      metersPerTon: 7.9,
    },
    "35/3": {
      weightPerMeter: 144.5,
      metersPerTon: 6.9,
    },
    "40/1": {
      weightPerMeter: 137,
      metersPerTon: 7.2,
    },
    "40/2": {
      weightPerMeter: 165.6,
      metersPerTon: 6,
    },
    "40/3": {
      weightPerMeter: 202.3,
      metersPerTon: 4.9,
    },
    "40/4": {
      weightPerMeter: 242.2,
      metersPerTon: 4.1,
    },
    "40/5": {
      weightPerMeter: 291.2,
      metersPerTon: 3.4,
    },
  },
  B: {
    "10/1": {
      weightPerMeter: 8.7,
      metersPerTon: 114.9,
    },
    "12/1": {
      weightPerMeter: 10.4,
      metersPerTon: 96.2,
    },
    "14/1": {
      weightPerMeter: 10.5,
      metersPerTon: 95.2,
    },
    "14/2": {
      weightPerMeter: 12.9,
      metersPerTon: 77.5,
    },
    "16/1": {
      weightPerMeter: 12.7,
      metersPerTon: 78.7,
    },
    "16/2": {
      weightPerMeter: 15.8,
      metersPerTon: 63.3,
    },
    "18/1": {
      weightPerMeter: 15.4,
      metersPerTon: 64.9,
    },
    "18/2": {
      weightPerMeter: 18.8,
      metersPerTon: 53.2,
    },
    "20/1": {
      weightPerMeter: 22.4,
      metersPerTon: 44.6,
    },
    "23/1": {
      weightPerMeter: 25.8,
      metersPerTon: 38.8,
    },
    "26/1": {
      weightPerMeter: 28,
      metersPerTon: 35.7,
    },
    "26/2": {
      weightPerMeter: 31.2,
      metersPerTon: 32.1,
    },
    "30/1": {
      weightPerMeter: 32.9,
      metersPerTon: 30.4,
    },
    "30/2": {
      weightPerMeter: 36.6,
      metersPerTon: 27.3,
    },
    "35/1": {
      weightPerMeter: 38.9,
      metersPerTon: 25.7,
    },
    "35/2": {
      weightPerMeter: 43.3,
      metersPerTon: 23.1,
    },
    "40/1": {
      weightPerMeter: 48.1,
      metersPerTon: 20.8,
    },
    "40/2": {
      weightPerMeter: 54.7,
      metersPerTon: 18.3,
    },
    "45/1": {
      weightPerMeter: 59.8,
      metersPerTon: 16.7,
    },
    "45/2": {
      weightPerMeter: 67.5,
      metersPerTon: 14.8,
    },
    "50/1": {
      weightPerMeter: 73,
      metersPerTon: 13.7,
    },
    "50/2": {
      weightPerMeter: 80.7,
      metersPerTon: 12.4,
    },
    "55/1": {
      weightPerMeter: 89,
      metersPerTon: 11.2,
    },
    "55/2": {
      weightPerMeter: 97.9,
      metersPerTon: 10.2,
    },
    "60/1": {
      weightPerMeter: 106.2,
      metersPerTon: 9.4,
    },
    "60/2": {
      weightPerMeter: 115.6,
      metersPerTon: 8.7,
    },
    "70/1": {
      weightPerMeter: 129.3,
      metersPerTon: 7.7,
    },
    "70/2": {
      weightPerMeter: 144.2,
      metersPerTon: 6.9,
    },
  },
  Sh: {
    "20/1": {
      weightPerMeter: 30.6,
      metersPerTon: 32.7,
    },
    "23/1": {
      weightPerMeter: 36,
      metersPerTon: 27.6,
    },
    "26/1": {
      weightPerMeter: 42.7,
      metersPerTon: 23.4,
    },
    "26/2": {
      weightPerMeter: 49.2,
      metersPerTon: 20.3,
    },
    "30/1": {
      weightPerMeter: 53.6,
      metersPerTon: 18.7,
    },
    "30/2": {
      weightPerMeter: 61,
      metersPerTon: 16.4,
    },
    "30/3": {
      weightPerMeter: 68.3,
      metersPerTon: 14.6,
    },
    "35/1": {
      weightPerMeter: 75.1,
      metersPerTon: 13.3,
    },
    "35/2": {
      weightPerMeter: 82.2,
      metersPerTon: 12.2,
    },
    "35/3": {
      weightPerMeter: 91.3,
      metersPerTon: 11,
    },
    "40/1": {
      weightPerMeter: 96.1,
      metersPerTon: 10.4,
    },
    "40/2": {
      weightPerMeter: 111.1,
      metersPerTon: 9,
    },
    "40/3": {
      weightPerMeter: 123.4,
      metersPerTon: 8.1,
    },
    "50/1": {
      weightPerMeter: 114.4,
      metersPerTon: 8.7,
    },
    "50/2": {
      weightPerMeter: 138.7,
      metersPerTon: 7.2,
    },
    "50/3": {
      weightPerMeter: 156.4,
      metersPerTon: 6.4,
    },
    "50/4": {
      weightPerMeter: 174.1,
      metersPerTon: 5.7,
    },
    "60/1": {
      weightPerMeter: 142.1,
      metersPerTon: 7,
    },
    "60/2": {
      weightPerMeter: 176.9,
      metersPerTon: 5.7,
    },
    "60/3": {
      weightPerMeter: 205.5,
      metersPerTon: 4.9,
    },
    "60/4": {
      weightPerMeter: 234.2,
      metersPerTon: 4.3,
    },
    "70/1": {
      weightPerMeter: 169.9,
      metersPerTon: 5.9,
    },
    "70/2": {
      weightPerMeter: 197.6,
      metersPerTon: 5.1,
    },
    "70/3": {
      weightPerMeter: 235.4,
      metersPerTon: 4.2,
    },
    "70/4": {
      weightPerMeter: 268.1,
      metersPerTon: 3.7,
    },
    "70/5": {
      weightPerMeter: 305.9,
      metersPerTon: 3.3,
    },
  },
  M: {
    18: {
      weightPerMeter: 25.8,
      metersPerTon: 38.76,
    },
    24: {
      weightPerMeter: 38.3,
      metersPerTon: 26.11,
    },
    30: {
      weightPerMeter: 50.2,
      metersPerTon: 19.92,
    },
    36: {
      weightPerMeter: 57.9,
      metersPerTon: 17.27,
    },
    45: {
      weightPerMeter: 77.6,
      metersPerTon: 12.89,
    },
  },
  C: {
    14: {
      weightPerMeter: 16.9,
      metersPerTon: 59.17,
    },
    20: {
      weightPerMeter: 27.9,
      metersPerTon: 35.84,
    },
    22: {
      weightPerMeter: 33.1,
      metersPerTon: 30.21,
    },
    27: {
      weightPerMeter: 42.8,
      metersPerTon: 23.36,
    },
    36: {
      weightPerMeter: 71.3,
      metersPerTon: 14.03,
    },
  },
});
const арматура = ref({
  10: { weightPerMeter: 0.61, metersPerTon: 1620 },
  12: { weightPerMeter: 0.88, metersPerTon: 1126 },
  14: { weightPerMeter: 1.21, metersPerTon: 826 },
  16: { weightPerMeter: 1.58, metersPerTon: 632 },
  18: { weightPerMeter: 2, metersPerTon: 500 },
  20: { weightPerMeter: 2.47, metersPerTon: 405 },
  22: { weightPerMeter: 2.98, metersPerTon: 335 },
  25: { weightPerMeter: 3.86, metersPerTon: 259 },
  28: { weightPerMeter: 4.8, metersPerTon: 208 },
  32: { weightPerMeter: 6.28, metersPerTon: 159 },
});
const швеллер = ref({
  5: { weightPerMeter: 4.84, metersPerTon: 206.61 },
  6.5: { weightPerMeter: 5.9, metersPerTon: 169.49 },
  8: { weightPerMeter: 7.05, metersPerTon: 141.84 },
  10: { weightPerMeter: 8.6, metersPerTon: 116.41 },
  12: { weightPerMeter: 10.4, metersPerTon: 96.15 },
  14: { weightPerMeter: 12.3, metersPerTon: 81.3 },
  16: { weightPerMeter: 14.2, metersPerTon: 70.42 },
  18: { weightPerMeter: 17.4, metersPerTon: 57.47 },
  20: { weightPerMeter: 18.4, metersPerTon: 54.34 },
  22: { weightPerMeter: 21, metersPerTon: 47.62 },
  24: { weightPerMeter: 24, metersPerTon: 41.66 },
  27: { weightPerMeter: 27.7, metersPerTon: 36.1 },
  30: { weightPerMeter: 31.8, metersPerTon: 31.44 },
  33: { weightPerMeter: 36.5, metersPerTon: 27.39 },
  36: { weightPerMeter: 41.9, metersPerTon: 23.86 },
  40: { weightPerMeter: 50, metersPerTon: 20 },
});
const угалок = ref({
  20: {
    3: {
      metersPerTon: 1123.59,
      weightPerMeter: 0.89,
    },
    4: {
      metersPerTon: 869.56,
      weightPerMeter: 1.15,
    },
  },
  25: {
    3: {
      metersPerTon: 892.85,
      weightPerMeter: 1.12,
    },
    4: {
      metersPerTon: 684.93,
      weightPerMeter: 1.46,
    },
  },
  28: {
    3: {
      metersPerTon: 787.4,
      weightPerMeter: 1.27,
    },
  },
  32: {
    3: {
      metersPerTon: 684.93,
      weightPerMeter: 1.46,
    },
    4: {
      metersPerTon: 523.56,
      weightPerMeter: 1.91,
    },
  },
  36: {
    3: {
      metersPerTon: 606.06,
      weightPerMeter: 1.65,
    },
    4: {
      metersPerTon: 462.96,
      weightPerMeter: 2.16,
    },
  },
  40: {
    3: {
      metersPerTon: 540.54,
      weightPerMeter: 1.85,
    },
    4: {
      metersPerTon: 413.22,
      weightPerMeter: 2.42,
    },
    5: {
      metersPerTon: 336.7,
      weightPerMeter: 2.97,
    },
  },
  45: {
    3: {
      metersPerTon: 480.76,
      weightPerMeter: 2.08,
    },
    4: {
      metersPerTon: 366.3,
      weightPerMeter: 2.73,
    },
    5: {
      metersPerTon: 296.73,
      weightPerMeter: 3.37,
    },
  },
  50: {
    3: {
      metersPerTon: 431.03,
      weightPerMeter: 2.32,
    },
    4: {
      metersPerTon: 327.86,
      weightPerMeter: 3.05,
    },
    5: {
      metersPerTon: 265.25,
      weightPerMeter: 3.77,
    },
  },
  56: {
    4: {
      metersPerTon: 290.69,
      weightPerMeter: 3.44,
    },
    5: {
      metersPerTon: 235.29,
      weightPerMeter: 4.25,
    },
  },
  63: {
    4: {
      metersPerTon: 256.41,
      weightPerMeter: 3.9,
    },
    5: {
      metersPerTon: 207.9,
      weightPerMeter: 4.81,
    },
    6: {
      metersPerTon: 174.82,
      weightPerMeter: 5.72,
    },
  },
  70: {
    4.5: {
      metersPerTon: 205.33,
      weightPerMeter: 4.87,
    },
    5: {
      metersPerTon: 185.87,
      weightPerMeter: 1000 / 185.87,
    },
    6: {
      metersPerTon: 156.49,
      weightPerMeter: 1000 / 156.49,
    },
    7: {
      metersPerTon: 135.31,
      weightPerMeter: 1000 / 135.31,
    },
    8: {
      metersPerTon: 119.47,
      weightPerMeter: 1000 / 119.47,
    },
  },
  75: {
    5: {
      metersPerTon: 172.41,
      weightPerMeter: 1000 / 172.41,
    },
    6: {
      metersPerTon: 145.13,
      weightPerMeter: 1000 / 145.13,
    },
    7: {
      metersPerTon: 125.78,
      weightPerMeter: 1000 / 125.78,
    },
    8: {
      metersPerTon: 110.86,
      weightPerMeter: 1000 / 110.86,
    },
    9: {
      metersPerTon: 99,
      weightPerMeter: 1000 / 99,
    },
  },
  80: {
    5.5: {
      metersPerTon: 147.49,
      weightPerMeter: 1000 / 147.49,
    },
    6: {
      metersPerTon: 135.86,
      weightPerMeter: 1000 / 135.86,
    },
    7: {
      metersPerTon: 117.5,
      weightPerMeter: 1000 / 117.5,
    },
    8: {
      metersPerTon: 103.62,
      weightPerMeter: 1000 / 103.62,
    },
  },
  90: {
    6: {
      metersPerTon: 120.04,
      weightPerMeter: 1000 / 120.04,
    },
    7: {
      metersPerTon: 103.73,
      weightPerMeter: 1000 / 103.73,
    },
    8: {
      metersPerTon: 91.74,
      weightPerMeter: 1000 / 91.74,
    },
    9: {
      metersPerTon: 81.96,
      weightPerMeter: 1000 / 81.96,
    },
  },
  100: {
    6.5: {
      metersPerTon: 199,
      weightPerMeter: 1000 / 199,
    },
    7: {
      metersPerTon: 92.59,
      weightPerMeter: 1000 / 92.59,
    },
    8: {
      metersPerTon: 81.96,
      weightPerMeter: 1000 / 81.96,
    },
    10: {
      metersPerTon: 66.22,
      weightPerMeter: 1000 / 66.22,
    },
    12: {
      metersPerTon: 55.86,
      weightPerMeter: 1000 / 55.86,
    },
    14: {
      metersPerTon: 48.54,
      weightPerMeter: 1000 / 48.54,
    },
    16: {
      metersPerTon: 42.91,
      weightPerMeter: 1000 / 42.91,
    },
  },
  110: {
    7: {
      metersPerTon: 84.03,
      weightPerMeter: 1000 / 84.03,
    },
    8: {
      metersPerTon: 74.07,
      weightPerMeter: 1000 / 74.07,
    },
  },
  125: {
    8: {
      metersPerTon: 64.51,
      weightPerMeter: 1000 / 64.51,
    },
    9: {
      metersPerTon: 57.8,
      weightPerMeter: 1000 / 57.8,
    },
    10: {
      metersPerTon: 52.35,
      weightPerMeter: 1000 / 52.35,
    },
    12: {
      metersPerTon: 44.05,
      weightPerMeter: 1000 / 44.05,
    },
    14: {
      metersPerTon: 38.06,
      weightPerMeter: 1000 / 38.06,
    },
    16: {
      metersPerTon: 33.78,
      weightPerMeter: 1000 / 33.78,
    },
  },
  140: {
    9: {
      metersPerTon: 51.54,
      weightPerMeter: 1000 / 51.54,
    },
    10: {
      metersPerTon: 46.51,
      weightPerMeter: 1000 / 46.51,
    },
    12: {
      metersPerTon: 39.21,
      weightPerMeter: 1000 / 39.21,
    },
  },
  160: {
    10: {
      metersPerTon: 40.48,
      weightPerMeter: 1000 / 40.48,
    },
    11: {
      metersPerTon: 37.03,
      weightPerMeter: 1000 / 37.03,
    },
    12: {
      metersPerTon: 34.01,
      weightPerMeter: 1000 / 34.01,
    },
    14: {
      metersPerTon: 29.41,
      weightPerMeter: 1000 / 29.41,
    },
    16: {
      metersPerTon: 25.97,
      weightPerMeter: 1000 / 25.97,
    },
    18: {
      metersPerTon: 23.25,
      weightPerMeter: 1000 / 23.25,
    },
    20: {
      metersPerTon: 21.09,
      weightPerMeter: 1000 / 21.09,
    },
  },
  180: {
    11: {
      metersPerTon: 32.78,
      weightPerMeter: 1000 / 32.78,
    },
    12: {
      metersPerTon: 30.21,
      weightPerMeter: 1000 / 30.21,
    },
  },
  200: {
    12: {
      metersPerTon: 27.02,
      weightPerMeter: 1000 / 27.02,
    },
    13: {
      metersPerTon: 25.06,
      weightPerMeter: 1000 / 25.06,
    },
    14: {
      metersPerTon: 23.36,
      weightPerMeter: 1000 / 23.36,
    },
    16: {
      metersPerTon: 20.53,
      weightPerMeter: 1000 / 20.53,
    },
    20: {
      metersPerTon: 16.63,
      weightPerMeter: 1000 / 16.63,
    },
    25: {
      metersPerTon: 13.51,
      weightPerMeter: 1000 / 13.51,
    },
    30: {
      metersPerTon: 11.41,
      weightPerMeter: 1000 / 11.41,
    },
  },
  220: {
    14: {
      metersPerTon: 21.09,
      weightPerMeter: 1000 / 21.09,
    },
    16: {
      metersPerTon: 18.58,
      weightPerMeter: 1000 / 18.58,
    },
  },
  250: {
    16: {
      metersPerTon: 16.26,
      weightPerMeter: 1000 / 16.26,
    },
    18: {
      metersPerTon: 14.51,
      weightPerMeter: 1000 / 14.51,
    },
    20: {
      metersPerTon: 13.14,
      weightPerMeter: 1000 / 13.14,
    },
    22: {
      metersPerTon: 12,
      weightPerMeter: 1000 / 12,
    },
    25: {
      metersPerTon: 10.63,
      weightPerMeter: 1000 / 10.63,
    },
    28: {
      metersPerTon: 9.56,
      weightPerMeter: 1000 / 9.56,
    },
    30: {
      metersPerTon: 8.97,
      weightPerMeter: 1000 / 8.97,
    },
  },
});

const труба = ref({
  21.3: {
    1.5: {
      weightPerMeter: 0.732,
      metersPerTon: 1366.1,
    },
    1.7: {
      weightPerMeter: 0.822,
      metersPerTon: 1216.5,
    },
    "2.0": {
      weightPerMeter: 0.952,
      metersPerTon: 1050.4,
    },
    2.1: {
      weightPerMeter: 0.994,
      metersPerTon: 1006,
    },
    2.8: {
      weightPerMeter: 1.277,
      metersPerTon: 783.1,
    },
    "3.0": {
      weightPerMeter: 1.35,
      metersPerTon: 1126.13,
    },
  },
  26.8: {
    1.5: {
      weightPerMeter: 0.936,
      metersPerTon: 1068.4,
    },
    1.7: {
      weightPerMeter: 1.05,
      metersPerTon: 952.4,
    },
    2: {
      weightPerMeter: 1.22,
      metersPerTon: 819.7,
    },
    2.1: {
      weightPerMeter: 1.28,
      metersPerTon: 781.3,
    },
    2.2: {
      weightPerMeter: 1.33,
      metersPerTon: 751.9,
    },
    2.5: {
      weightPerMeter: 1.5,
      metersPerTon: 666.7,
    },
    2.8: {
      weightPerMeter: 1.66,
      metersPerTon: 602.4,
    },
    3.0: {
      weightPerMeter: 1.76,
      metersPerTon: 568.2,
    },
    3.2: {
      weightPerMeter: 1.86,
      metersPerTon: 537.6,
    },
    3.5: {
      weightPerMeter: 2.01,
      metersPerTon: 497.5,
    },
  },
  33.5: {
    1.5: {
      weightPerMeter: 1.18,
      metersPerTon: 847.5,
    },
    1.7: {
      weightPerMeter: 1.33,
      metersPerTon: 751.9,
    },
    2: {
      weightPerMeter: 1.55,
      metersPerTon: 645.2,
    },
    2.1: {
      weightPerMeter: 1.63,
      metersPerTon: 613.5,
    },
    2.2: {
      weightPerMeter: 1.7,
      metersPerTon: 588.2,
    },
    2.8: {
      weightPerMeter: 2.12,
      metersPerTon: 471.7,
    },
    3.0: {
      weightPerMeter: 2.26,
      metersPerTon: 442.5,
    },
    3.5: {
      weightPerMeter: 2.59,
      metersPerTon: 386.1,
    },
  },
  42.3: {
    1.5: {
      weightPerMeter: 1.51,
      metersPerTon: 662.5,
    },
    1.7: {
      weightPerMeter: 1.7,
      metersPerTon: 588.2,
    },
    2: {
      weightPerMeter: 1.99,
      metersPerTon: 502.5,
    },
    2.1: {
      weightPerMeter: 2.08,
      metersPerTon: 480.8,
    },
    2.2: {
      weightPerMeter: 2.18,
      metersPerTon: 458.7,
    },
    2.8: {
      weightPerMeter: 2.73,
      metersPerTon: 366.3,
    },
    3.0: {
      weightPerMeter: 2.91,
      metersPerTon: 343.6,
    },
    3.2: {
      weightPerMeter: 3.09,
      metersPerTon: 323.6,
    },
    3.5: {
      weightPerMeter: 3.35,
      metersPerTon: 298.5,
    },
  },
  38: {
    1.7: {
      weightPerMeter: 1.52,
      metersPerTon: 657.9,
    },
    3.5: {
      weightPerMeter: 2.98,
      metersPerTon: 335.6,
    },
  },
  48: {
    1.5: {
      weightPerMeter: 1.72,
      metersPerTon: 581.4,
    },
    1.7: {
      weightPerMeter: 1.941,
      metersPerTon: 515.2,
    },
    2: {
      weightPerMeter: 2.27,
      metersPerTon: 440.5,
    },
    2.1: {
      weightPerMeter: 2.38,
      metersPerTon: 420.2,
    },
    2.2: {
      weightPerMeter: 2.48,
      metersPerTon: 403.2,
    },
    2.5: {
      weightPerMeter: 2810,
      metersPerTon: 355.9,
    },
    2.8: {
      weightPerMeter: 3.12,
      metersPerTon: 320.5,
    },
    3.0: {
      weightPerMeter: 3.33,
      metersPerTon: 300.3,
    },
    3.2: {
      weightPerMeter: 3.54,
      metersPerTon: 282.5,
    },
    3.5: {
      weightPerMeter: 3.84,
      metersPerTon: 260.4,
    },
  },
  57: {
    1.5: {
      weightPerMeter: 2.05,
      metersPerTon: 487.8,
    },
    1.7: {
      weightPerMeter: 2.32,
      metersPerTon: 431,
    },
    2: {
      weightPerMeter: 2.71,
      metersPerTon: 369,
    },
    2.1: {
      weightPerMeter: 2.84,
      metersPerTon: 352.1,
    },
    2.8: {
      weightPerMeter: 3.74,
      metersPerTon: 267.4,
    },
    3.0: {
      weightPerMeter: 4,
      metersPerTon: 250,
    },
    3.2: {
      weightPerMeter: 4.25,
      metersPerTon: 235.3,
    },
    3.5: {
      weightPerMeter: 4.62,
      metersPerTon: 216.5,
    },
  },
  76: {
    1.7: {
      weightPerMeter: 3.11,
      metersPerTon: 321.54,
    },
    2: {
      weightPerMeter: 3.65,
      metersPerTon: 274,
    },
    2.1: {
      weightPerMeter: 3.83,
      metersPerTon: 261.1,
    },
    2.2: {
      weightPerMeter: 4,
      metersPerTon: 250,
    },
    2.8: {
      weightPerMeter: 5.05,
      metersPerTon: 198,
    },
    3.0: {
      weightPerMeter: 5.4,
      metersPerTon: 185.2,
    },
    3.2: {
      weightPerMeter: 5.75,
      metersPerTon: 173.9,
    },
    3.5: {
      weightPerMeter: 6.26,
      metersPerTon: 159.7,
    },
    4: {
      weightPerMeter: 7.1,
      metersPerTon: 140.8,
    },
    6: {
      weightPerMeter: 10.36,
      metersPerTon: 96.5,
    },
  },
  89: {
    1.7: {
      weightPerMeter: 3.66,
      metersPerTon: 273.2,
    },
    2: {
      weightPerMeter: 4.29,
      metersPerTon: 233.1,
    },
    2.1: {
      weightPerMeter: 4.5,
      metersPerTon: 222.2,
    },
    2.5: {
      weightPerMeter: 5.33,
      metersPerTon: 187.6,
    },
    2.8: {
      weightPerMeter: 5.95,
      metersPerTon: 168.1,
    },
    3.0: {
      weightPerMeter: 6.36,
      metersPerTon: 157.2,
    },
    3.5: {
      weightPerMeter: 7.38,
      metersPerTon: 135.5,
    },
    4: {
      weightPerMeter: 8.38,
      metersPerTon: 119.3,
    },
    5: {
      weightPerMeter: 10.36,
      metersPerTon: 96.5,
    },
    6: {
      weightPerMeter: 12.28,
      metersPerTon: 81.4,
    },
  },
  102: {
    2: {
      weightPerMeter: 4.93,
      metersPerTon: 202.8,
    },
    2.2: {
      weightPerMeter: 5.41,
      metersPerTon: 184.84,
    },
    2.8: {
      weightPerMeter: 6.85,
      metersPerTon: 145.99,
    },
    3.0: {
      weightPerMeter: 7.32,
      metersPerTon: 136.6,
    },
    3.2: {
      weightPerMeter: 7.8,
      metersPerTon: 128.2,
    },
    4: {
      weightPerMeter: 9.67,
      metersPerTon: 103.4,
    },
    3.5: {
      weightPerMeter: 8.5,
      metersPerTon: 117.6,
    },
  },
  114: {
    3: {
      weightPerMeter: 8.21,
      metersPerTon: 121.8,
    },
    3.2: {
      weightPerMeter: 8.74,
      metersPerTon: 114.4,
    },
    3.5: {
      weightPerMeter: 9.54,
      metersPerTon: 104.8,
    },
    "4.0": {
      weightPerMeter: 10.85,
      metersPerTon: 92.17,
    },
    4.5: {
      weightPerMeter: 12.15,
      metersPerTon: 82.3,
    },
    4.6: {
      weightPerMeter: 12.41,
      metersPerTon: 80.58,
    },
    "5.0": {
      weightPerMeter: 13.44,
      metersPerTon: 74.4,
    },
  },
  127: {
    3.2: {
      weightPerMeter: 9.77,
      metersPerTon: 102.35,
    },
    3.5: {
      weightPerMeter: 10.66,
      metersPerTon: 93.81,
    },
    "4.0": {
      weightPerMeter: 12.13,
      metersPerTon: 82.44,
    },
    "6.0": {
      weightPerMeter: 17.9,
      metersPerTon: 55.87,
    },
  },
  133: {
    3.5: {
      weightPerMeter: 11.18,
      metersPerTon: 89.45,
    },
    "4.0": {
      weightPerMeter: 12.73,
      metersPerTon: 78.55,
    },
    4.5: {
      weightPerMeter: 14.26,
      metersPerTon: 70.13,
    },
    "5.0": {
      weightPerMeter: 15.78,
      metersPerTon: 63.37,
    },
    "6.0": {
      weightPerMeter: 18.79,
      metersPerTon: 53.22,
    },
  },
  159: {
    "3.0": {
      weightPerMeter: 11.54,
      metersPerTon: 86.7,
    },
    3.5: {
      weightPerMeter: 13.42,
      metersPerTon: 74.5,
    },
    "4.0": {
      weightPerMeter: 15.29,
      metersPerTon: 65.4,
    },
    4.5: {
      weightPerMeter: 17.15,
      metersPerTon: 58.3,
    },
    "5.0": {
      weightPerMeter: 18.99,
      metersPerTon: 52.7,
    },
    "6.0": {
      weightPerMeter: 22.64,
      metersPerTon: 44.2,
    },
    "7.0": {
      weightPerMeter: 26.24,
      metersPerTon: 38.1,
    },
    "8.0": {
      weightPerMeter: 29.79,
      metersPerTon: 33.6,
    },
  },
  219: {
    "3.0": {
      weightPerMeter: 15.98,
      metersPerTon: 62.6,
    },
    3.2: {
      weightPerMeter: 17.03,
      metersPerTon: 58.7,
    },
    3.5: {
      weightPerMeter: 18.6,
      metersPerTon: 53.8,
    },
    "4.0": {
      weightPerMeter: 21.21,
      metersPerTon: 47.1,
    },
    4.5: {
      weightPerMeter: 23.8,
      metersPerTon: 42.0,
    },
    "5.0": {
      weightPerMeter: 26.39,
      metersPerTon: 37.9,
    },
    "6.0": {
      weightPerMeter: 31.52,
      metersPerTon: 31.7,
    },
    "7.0": {
      weightPerMeter: 36.6,
      metersPerTon: 27.3,
    },
    "8.0": {
      weightPerMeter: 41.63,
      metersPerTon: 24.0,
    },
    "9.0": {
      weightPerMeter: 46.61,
      metersPerTon: 21.5,
    },
  },
  "273.0": {
    "4.0": {
      weightPerMeter: "26.54",
      metersPerTon: "37.68",
    },
    "5.0": {
      weightPerMeter: "33.05",
      metersPerTon: "30.26",
    },
    "6.0": {
      weightPerMeter: "39.51",
      metersPerTon: "25.31",
    },
    "7.0": {
      weightPerMeter: "45.92",
      metersPerTon: "21.78",
    },
    "8.0": {
      weightPerMeter: "52.28",
      metersPerTon: "19.13",
    },
  },
  "325.0": {
    "5.0": {
      weightPerMeter: "39.46",
      metersPerTon: "25.34",
    },
    "6.0": {
      weightPerMeter: "47.20",
      metersPerTon: "21.19",
    },
    "7.0": {
      weightPerMeter: "54.90",
      metersPerTon: "18.22",
    },
    "8.0": {
      weightPerMeter: "62.54",
      metersPerTon: "15.99",
    },
    "9.0": {
      weightPerMeter: "70.14",
      metersPerTon: "14.26",
    },
    "10.0": {
      weightPerMeter: "77.68",
      metersPerTon: "12.87",
    },
    "11.0": {
      weightPerMeter: "85.18",
      metersPerTon: "11.74",
    },
    "12.0": {
      weightPerMeter: "92.63",
      metersPerTon: "10.80",
    },
  },
  "377.0": {
    "6.0": {
      weightPerMeter: "54.90",
      metersPerTon: "18.22",
    },
    "7.0": {
      weightPerMeter: "63.87",
      metersPerTon: "15.66",
    },
    "8.0": {
      weightPerMeter: "72.80",
      metersPerTon: "13.74",
    },
    "9.0": {
      weightPerMeter: "81.68",
      metersPerTon: "12.24",
    },
    "10.0": {
      weightPerMeter: "90.51",
      metersPerTon: "11.05",
    },
    "11.0": {
      weightPerMeter: "99.29",
      metersPerTon: "10.07",
    },
    "12.0": {
      weightPerMeter: "108.02",
      metersPerTon: "9.26",
    },
  },
  426: {
    7: {
      weightPerMeter: 73.41,
      metersPerTon: 13.622,
    },
    8: {
      weightPerMeter: 83.7,
      metersPerTon: 11.947,
    },
    9: {
      weightPerMeter: 93.94,
      metersPerTon: 10.645,
    },
    10: {
      weightPerMeter: 104.14,
      metersPerTon: 9.602,
    },
  },
  530: {
    7: {
      weightPerMeter: 91.63,
      metersPerTon: 10.913,
    },
    8: {
      weightPerMeter: 104.5,
      metersPerTon: 9.569,
    },
    9: {
      weightPerMeter: 117.4,
      metersPerTon: 8.518,
    },
    10: {
      weightPerMeter: 130.12,
      metersPerTon: 7.685,
    },
  },
  630: {
    6: {
      weightPerMeter: 93.71,
      metersPerTon: 10.671,
    },
    7: {
      weightPerMeter: 109.1,
      metersPerTon: 9.166,
    },
    8: {
      weightPerMeter: 124.5,
      metersPerTon: 8.032,
    },
    10: {
      weightPerMeter: 155.2,
      metersPerTon: 6.443,
    },
    12: {
      weightPerMeter: 185.6,
      metersPerTon: 5.388,
    },
  },
  720: {
    8: {
      weightPerMeter: 142.6,
      metersPerTon: 7.013,
    },
    9: {
      weightPerMeter: 160.2,
      metersPerTon: 6.242,
    },
    10: {
      weightPerMeter: 177.7,
      metersPerTon: 5.627,
    },
    12: {
      weightPerMeter: 212.6,
      metersPerTon: 4.704,
    },
  },
  820: {
    8: {
      weightPerMeter: 162.6,
      metersPerTon: 6.15,
    },
    9: {
      weightPerMeter: 182.7,
      metersPerTon: 5.473,
    },
    10: {
      weightPerMeter: 202.7,
      metersPerTon: 4.933,
    },
  },
  920: {
    10: {
      weightPerMeter: 227.8,
      metersPerTon: 4.39,
    },
    11: {
      weightPerMeter: 250.3,
      metersPerTon: 3.995,
    },
    12: {
      weightPerMeter: 272.7,
      metersPerTon: 3.667,
    },
  },
  1020: {
    8: {
      weightPerMeter: 202.6,
      metersPerTon: 4.936,
    },
    10: {
      weightPerMeter: 252.8,
      metersPerTon: 3.956,
    },
    11: {
      weightPerMeter: 277.8,
      metersPerTon: 3.6,
    },
    12: {
      weightPerMeter: 302.8,
      metersPerTon: 3.303,
    },
  },
  1120: {
    7: {
      weightPerMeter: 195,
      metersPerTon: 5.128,
    },
  },
  1220: {
    8: {
      weightPerMeter: 242.7,
      metersPerTon: 4.12,
    },
    9: {
      weightPerMeter: 272.8,
      metersPerTon: 3.666,
    },
    10: {
      weightPerMeter: 302.9,
      metersPerTon: 3.301,
    },
    11: {
      weightPerMeter: 332.9,
      metersPerTon: 3.004,
    },
    12: {
      weightPerMeter: 362.9,
      metersPerTon: 2.756,
    },
  },
  1420: {
    12: {
      weightPerMeter: 422.9,
      metersPerTon: 2.365,
    },
    14: {
      weightPerMeter: 492.7,
      metersPerTon: 2.03,
    },
  },
  1620: {
    14: {
      weightPerMeter: 563,
      metersPerTon: 1.776,
    },
    16: {
      weightPerMeter: 642.6,
      metersPerTon: 1.556,
    },
  },
});

const прут = ref({
  10: {
    metersPerTon: 1612,
    weightPerMeter: 1000 / 1612,
  },
  12: {
    metersPerTon: 1123,
    weightPerMeter: 1000 / 1123,
  },
  14: {
    metersPerTon: 826,
    weightPerMeter: 1000 / 826,
  },
  16: {
    metersPerTon: 632,
    weightPerMeter: 1000 / 632,
  },
  18: {
    metersPerTon: 500,
    weightPerMeter: 1000 / 500,
  },
  20: {
    metersPerTon: 404.4,
    weightPerMeter: 1000 / 404.4,
  },
  22: {
    metersPerTon: 335.6,
    weightPerMeter: 1000 / 335.6,
  },
  24: {
    metersPerTon: 281.7,
    weightPerMeter: 1000 / 281.7,
  },
  25: {
    metersPerTon: 259.7,
    weightPerMeter: 1000 / 259.7,
  },
  26: {
    metersPerTon: 239.8,
    weightPerMeter: 1000 / 239.8,
  },
  28: {
    metersPerTon: 207,
    weightPerMeter: 1000 / 207,
  },
  30: {
    metersPerTon: 180,
    weightPerMeter: 1000 / 180,
  },
  33: {
    metersPerTon: 158,
    weightPerMeter: 1000 / 158,
  },
  36: {
    metersPerTon: 126.7,
    weightPerMeter: 1000 / 126.7,
  },
  38: {
    metersPerTon: 112.4,
    weightPerMeter: 1000 / 112.4,
  },
  40: {
    metersPerTon: 101.31,
    weightPerMeter: 1000 / 101.31,
  },
  45: {
    metersPerTon: 80.12,
    weightPerMeter: 1000 / 80.12,
  },
  50: {
    metersPerTon: 64.85,
    weightPerMeter: 1000 / 64.85,
  },
  56: {
    metersPerTon: 51.73,
    weightPerMeter: 1000 / 51.73,
  },
  60: {
    metersPerTon: 44.05,
    weightPerMeter: 1000 / 44.05,
  },
  63: {
    metersPerTon: 41.49,
    weightPerMeter: 1000 / 41.49,
  },
  70: {
    metersPerTon: 33.1,
    weightPerMeter: 1000 / 33.1,
  },
  75: {
    metersPerTon: 28.83,
    weightPerMeter: 1000 / 28.83,
  },
  80: {
    metersPerTon: 22.39,
    weightPerMeter: 1000 / 22.39,
  },
});

const квадратпрут = ref({
  10: {
    metersPerTon: 1265,
    weightPerMeter: 1000 / 1265,
  },
  12: {
    metersPerTon: 885,
    weightPerMeter: 1000 / 885,
  },
  14: {
    metersPerTon: 649,
    weightPerMeter: 1000 / 649,
  },
  16: {
    metersPerTon: 500,
    weightPerMeter: 1000 / 500,
  },
  18: {
    metersPerTon: 400,
    weightPerMeter: 1000 / 400,
  },
  20: {
    metersPerTon: 316,
    weightPerMeter: 1000 / 316,
  },
  30: {
    metersPerTon: 141,
    weightPerMeter: 1000 / 141,
  },
  40: {
    metersPerTon: 79.4,
    weightPerMeter: 1000 / 79.4,
  },
  50: {
    metersPerTon: 51,
    weightPerMeter: 1000 / 51,
  },
});

const квадратпрофил = ref({
  "20х20": {
    1.5: {
      weightPerMeter: 0.84,
      metersPerTon: 1189.06,
    },
    1.7: {
      weightPerMeter: 0.94,
      metersPerTon: 1063.83,
    },
    "2.0": {
      weightPerMeter: 1.075,
      metersPerTon: 930.23,
    },
  },
  "25х25": {
    1.2: {
      weightPerMeter: 0.88,
      metersPerTon: 1136.36,
    },
    1.5: {
      weightPerMeter: 1.07,
      metersPerTon: 934.58,
    },
    1.7: {
      weightPerMeter: 1.2,
      metersPerTon: 833.33,
    },
    "2.0": {
      weightPerMeter: 1.39,
      metersPerTon: 719.42,
    },
    2.1: {
      weightPerMeter: 1.45,
      metersPerTon: 689.66,
    },
  },
  "30х20": {
    1.2: {
      weightPerMeter: 0.88,
      metersPerTon: 1136.36,
    },
    1.5: {
      weightPerMeter: 1.08,
      metersPerTon: 925.93,
    },
    1.7: {
      weightPerMeter: 1.2,
      metersPerTon: 833.33,
    },
    "2.0": {
      weightPerMeter: 1.39,
      metersPerTon: 719.42,
    },
  },
  "30х30": {
    1.5: {
      weightPerMeter: 1.31,
      metersPerTon: 763.36,
    },
    1.7: {
      weightPerMeter: 1.47,
      metersPerTon: 680.27,
    },
    "2.0": {
      weightPerMeter: 1.7,
      metersPerTon: 588.24,
    },
  },
  "35х35": {
    1.5: {
      weightPerMeter: 1.55,
      metersPerTon: 645.16,
    },
    1.7: {
      weightPerMeter: 1.74,
      metersPerTon: 574.71,
    },
  },
  "40х20": {
    1.2: {
      weightPerMeter: 1.07,
      metersPerTon: 934.58,
    },
    1.5: {
      weightPerMeter: 1.31,
      metersPerTon: 763.36,
    },
    1.7: {
      weightPerMeter: 1.47,
      metersPerTon: 680.27,
    },
    "2.0": {
      weightPerMeter: 1.7,
      metersPerTon: 588.24,
    },
    2.1: {
      weightPerMeter: 1.78,
      metersPerTon: 561.8,
    },
    2.2: {
      weightPerMeter: 1.86,
      metersPerTon: 537.63,
    },
    2.5: {
      weightPerMeter: 2.07,
      metersPerTon: 483.09,
    },
  },
  "40х25": {
    1.2: {
      weightPerMeter: 1.16,
      metersPerTon: 862.1,
    },
    1.5: {
      weightPerMeter: 1.43,
      metersPerTon: 699.3,
    },
    1.7: {
      weightPerMeter: 1.61,
      metersPerTon: 621.12,
    },
    "2.0": {
      weightPerMeter: 1.86,
      metersPerTon: 537.63,
    },
    2.2: {
      weightPerMeter: 2.03,
      metersPerTon: 492.61,
    },
  },
  "40х40": {
    1.2: {
      weightPerMeter: 1.44,
      metersPerTon: 694.44,
    },
    1.5: {
      weightPerMeter: 1.78,
      metersPerTon: 561.8,
    },
    1.7: {
      weightPerMeter: 2.01,
      metersPerTon: 497.51,
    },
    "2.0": {
      weightPerMeter: 2.33,
      metersPerTon: 429.18,
    },
    2.1: {
      weightPerMeter: 2.44,
      metersPerTon: 409.84,
    },
    2.5: {
      weightPerMeter: 2.85,
      metersPerTon: 350.88,
    },
    2.8: {
      weightPerMeter: 3.16,
      metersPerTon: 316.46,
    },
    "3.0": {
      weightPerMeter: 3.36,
      metersPerTon: 297.62,
    },
    3.5: {
      weightPerMeter: 3.85,
      metersPerTon: 259.74,
    },
    "4.0": {
      weightPerMeter: 4.3,
      metersPerTon: 232.56,
    },
  },
  "50х25": {
    1.2: {
      weightPerMeter: 1.35,
      metersPerTon: 740.74,
    },
    1.5: {
      weightPerMeter: 1.67,
      metersPerTon: 598.8,
    },
    1.7: {
      weightPerMeter: 1.87,
      metersPerTon: 534.76,
    },
    "2.0": {
      weightPerMeter: 2.17,
      metersPerTon: 460.83,
    },
    2.5: {
      weightPerMeter: 2.66,
      metersPerTon: 375.94,
    },
  },
  "50х30": {
    1.5: {
      weightPerMeter: 1.78,
      metersPerTon: 561.8,
    },
    1.7: {
      weightPerMeter: 2.01,
      metersPerTon: 497.51,
    },
    "2.0": {
      weightPerMeter: 2.32,
      metersPerTon: 431.03,
    },
    2.2: {
      weightPerMeter: 2.55,
      metersPerTon: 392.16,
    },
    2.5: {
      weightPerMeter: 2.86,
      metersPerTon: 349.65,
    },
    "3.0": {
      weightPerMeter: 3.36,
      metersPerTon: 297.62,
    },
  },
  "50x50": {
    1.5: {
      weightPerMeter: 2.25,
      metersPerTon: 444.44,
    },
    1.7: {
      weightPerMeter: 2.54,
      metersPerTon: 393.7,
    },
    "2.0": {
      weightPerMeter: 2.96,
      metersPerTon: 337.84,
    },
    2.1: {
      weightPerMeter: 3.1,
      metersPerTon: 322.58,
    },
    2.2: {
      weightPerMeter: 3.24,
      metersPerTon: 308.64,
    },
    2.8: {
      weightPerMeter: 4.04,
      metersPerTon: 247.52,
    },
    "3.0": {
      weightPerMeter: 4.31,
      metersPerTon: 232.02,
    },
    3.5: {
      weightPerMeter: 4.94,
      metersPerTon: 202.43,
    },
    "4.0": {
      weightPerMeter: 5.56,
      metersPerTon: 179.86,
    },
  },
  "60x30": {
    1.5: {
      weightPerMeter: 2.02,
      metersPerTon: 495.05,
    },
    1.7: {
      weightPerMeter: 2.27,
      metersPerTon: 440.53,
    },
    "2.0": {
      weightPerMeter: 2.65,
      metersPerTon: 377.36,
    },
    2.2: {
      weightPerMeter: 2.89,
      metersPerTon: 346.02,
    },
    2.5: {
      weightPerMeter: 3.25,
      metersPerTon: 307.69,
    },
  },
  "60x40": {
    1.5: {
      weightPerMeter: 2.25,
      metersPerTon: 444.44,
    },
    1.7: {
      weightPerMeter: 2.54,
      metersPerTon: 393.7,
    },
    "2.0": {
      weightPerMeter: 2.96,
      metersPerTon: 337.84,
    },
    2.2: {
      weightPerMeter: 3.24,
      metersPerTon: 308.64,
    },
    2.3: {
      weightPerMeter: 3.37,
      metersPerTon: 296.74,
    },
    2.5: {
      weightPerMeter: 3.64,
      metersPerTon: 274.73,
    },
    2.8: {
      weightPerMeter: 4.04,
      metersPerTon: 247.52,
    },
    "3.0": {
      weightPerMeter: 4.3,
      metersPerTon: 232.56,
    },
    "4.0": {
      weightPerMeter: 5.56,
      metersPerTon: 179.86,
    },
  },
  "60x60": {
    1.5: {
      weightPerMeter: 2.72,
      metersPerTon: 367.65,
    },
    1.7: {
      weightPerMeter: 3.07,
      metersPerTon: 325.73,
    },
    "2.0": {
      weightPerMeter: 3.59,
      metersPerTon: 278.55,
    },
    2.2: {
      weightPerMeter: 3.93,
      metersPerTon: 254.45,
    },
    2.3: {
      weightPerMeter: 4.1,
      metersPerTon: 243.9,
    },
    2.5: {
      weightPerMeter: 4.43,
      metersPerTon: 225.73,
    },
    2.8: {
      weightPerMeter: 4.92,
      metersPerTon: 203.25,
    },
    "3.0": {
      weightPerMeter: 5.25,
      metersPerTon: 190.48,
    },
    3.5: {
      weightPerMeter: 6.04,
      metersPerTon: 165.56,
    },
    "4.0": {
      weightPerMeter: 6.82,
      metersPerTon: 146.63,
    },
    "5.0": {
      weightPerMeter: 8.3,
      metersPerTon: 120.48,
    },
  },
  "80x40": {
    1.7: {
      weightPerMeter: 3.07,
      metersPerTon: 325.73,
    },
    "2.0": {
      weightPerMeter: 3.59,
      metersPerTon: 278.55,
    },
    2.1: {
      weightPerMeter: 3.76,
      metersPerTon: 265.96,
    },
    2.2: {
      weightPerMeter: 3.93,
      metersPerTon: 254.45,
    },
    2.5: {
      weightPerMeter: 4.43,
      metersPerTon: 225.73,
    },
    2.8: {
      weightPerMeter: 4.92,
      metersPerTon: 203.25,
    },
    "3.0": {
      weightPerMeter: 5.25,
      metersPerTon: 190.48,
    },
    3.5: {
      weightPerMeter: 6.04,
      metersPerTon: 165.56,
    },
  },
  "80x60": {
    1.6: {
      weightPerMeter: 3.4,
      metersPerTon: 294.12,
    },
    1.7: {
      weightPerMeter: 3.61,
      metersPerTon: 277.01,
    },
    "2.0": {
      weightPerMeter: 4.22,
      metersPerTon: 236.97,
    },
    2.3: {
      weightPerMeter: 4.82,
      metersPerTon: 207.47,
    },
    2.5: {
      weightPerMeter: 5.21,
      metersPerTon: 191.94,
    },
    "3.0": {
      weightPerMeter: 6.19,
      metersPerTon: 161.55,
    },
    3.2: {
      weightPerMeter: 6.57,
      metersPerTon: 152.21,
    },
    3.5: {
      weightPerMeter: 7.14,
      metersPerTon: 140.06,
    },
    "4.0": {
      weightPerMeter: 8.07,
      metersPerTon: 123.92,
    },
    "5.0": {
      weightPerMeter: 9.87,
      metersPerTon: 101.32,
    },
  },
  "80x80": {
    1.7: {
      weightPerMeter: 4.14,
      metersPerTon: 241.55,
    },
    "2.0": {
      weightPerMeter: 4.84,
      metersPerTon: 206.61,
    },
    2.2: {
      weightPerMeter: 5.31,
      metersPerTon: 188.32,
    },
    2.8: {
      weightPerMeter: 6.68,
      metersPerTon: 149.7,
    },
    "3.0": {
      weightPerMeter: 7.13,
      metersPerTon: 140.25,
    },
    3.2: {
      weightPerMeter: 7.58,
      metersPerTon: 131.93,
    },
    3.5: {
      weightPerMeter: 8.24,
      metersPerTon: 121.36,
    },
    "4.0": {
      weightPerMeter: 9.33,
      metersPerTon: 107.18,
    },
    "5.0": {
      weightPerMeter: 11.44,
      metersPerTon: 87.41,
    },
  },
  "100x50": {
    1.7: {
      weightPerMeter: 3.87,
      metersPerTon: 258.4,
    },
    "2.0": {
      weightPerMeter: 4.53,
      metersPerTon: 220.75,
    },
    2.2: {
      weightPerMeter: 4.96,
      metersPerTon: 201.61,
    },
    2.5: {
      weightPerMeter: 5.61,
      metersPerTon: 178.25,
    },
    2.8: {
      weightPerMeter: 6.24,
      metersPerTon: 160.26,
    },
    "3.0": {
      weightPerMeter: 6.66,
      metersPerTon: 150.15,
    },
    3.5: {
      weightPerMeter: 7.69,
      metersPerTon: 130.04,
    },
    "4.0": {
      weightPerMeter: 8.7,
      metersPerTon: 114.94,
    },
  },
  "100x60": {
    "3.0": {
      weightPerMeter: 7.13,
      metersPerTon: 140.25,
    },
    3.2: {
      weightPerMeter: 7.58,
      metersPerTon: 131.93,
    },
    3.5: {
      weightPerMeter: 8.24,
      metersPerTon: 121.36,
    },
  },
  "100x100": {
    "2.0": {
      weightPerMeter: 6.1,
      metersPerTon: 163.93,
    },
    2.2: {
      weightPerMeter: 6.69,
      metersPerTon: 149.48,
    },
    "3.0": {
      weightPerMeter: 9.02,
      metersPerTon: 110.86,
    },
    3.2: {
      weightPerMeter: 9.59,
      metersPerTon: 104.28,
    },
    3.5: {
      weightPerMeter: 10.44,
      metersPerTon: 95.79,
    },
    "4.0": {
      weightPerMeter: 11.84,
      metersPerTon: 84.46,
    },
    4.5: {
      weightPerMeter: 13.22,
      metersPerTon: 75.64,
    },
    "5.0": {
      weightPerMeter: 14.58,
      metersPerTon: 68.59,
    },
    "6.0": {
      weightPerMeter: 17.22,
      metersPerTon: 58.07,
    },
  },
  "120x80": {
    "2.0": {
      weightPerMeter: 6.1,
      metersPerTon: 163.93,
    },
    2.2: {
      weightPerMeter: 6.69,
      metersPerTon: 149.48,
    },
    "3.0": {
      weightPerMeter: 9.02,
      metersPerTon: 110.86,
    },
  },
  "125x60": {
    "3.0": {
      weightPerMeter: 8.31,
      metersPerTon: 120.34,
    },
    3.5: {
      weightPerMeter: 9.62,
      metersPerTon: 103.95,
    },
    "4.0": {
      weightPerMeter: 10.9,
      metersPerTon: 91.74,
    },
    4.5: {
      weightPerMeter: 12.16,
      metersPerTon: 82.24,
    },
    "5.0": {
      weightPerMeter: 13.4,
      metersPerTon: 74.63,
    },
  },
  "125x125": {
    "3.0": {
      weightPerMeter: 11.37,
      metersPerTon: 87.95,
    },
    3.5: {
      weightPerMeter: 13.19,
      metersPerTon: 75.82,
    },
    "4.0": {
      weightPerMeter: 15.0,
      metersPerTon: 66.67,
    },
    4.5: {
      weightPerMeter: 16.75,
      metersPerTon: 59.7,
    },
    "5.0": {
      weightPerMeter: 18.5,
      metersPerTon: 54.05,
    },
    "6.0": {
      weightPerMeter: 21.93,
      metersPerTon: 45.6,
    },
    10: {
      weightPerMeter: 10,
      metersPerTon: 10,
    },
  },
  "150x80": {
    "3.0": {
      weightPerMeter: 10.43,
      metersPerTon: 95.88,
    },
    3.5: {
      weightPerMeter: 12.09,
      metersPerTon: 82.71,
    },
    "4.0": {
      weightPerMeter: 13.73,
      metersPerTon: 72.83,
    },
    4.6: {
      weightPerMeter: 15.66,
      metersPerTon: 63.86,
    },
    "5.0": {
      weightPerMeter: 16.93,
      metersPerTon: 59.07,
    },
    "6.0": {
      weightPerMeter: 20.05,
      metersPerTon: 49.88,
    },
  },
  "150x150": {
    "3.0": {
      weightPerMeter: 13.73,
      metersPerTon: 72.83,
    },
    3.5: {
      weightPerMeter: 15.93,
      metersPerTon: 62.77,
    },
    "4.0": {
      weightPerMeter: 18.12,
      metersPerTon: 55.19,
    },
    "5.0": {
      weightPerMeter: 22.43,
      metersPerTon: 44.58,
    },
    "6.0": {
      weightPerMeter: 26.64,
      metersPerTon: 37.54,
    },
  },
  "170x125": {
    "4.0": {
      weightPerMeter: 17.81,
      metersPerTon: 56.15,
    },
    "5.0": {
      weightPerMeter: 22.03,
      metersPerTon: 45.39,
    },
    "6.0": {
      weightPerMeter: 26.17,
      metersPerTon: 38.21,
    },
  },
  "170x150": {
    4.5: {
      weightPerMeter: 21.7,
      metersPerTon: 46.08,
    },
    4.6: {
      weightPerMeter: 22.16,
      metersPerTon: 45.13,
    },
    "5.0": {
      weightPerMeter: 24.0,
      metersPerTon: 41.67,
    },
  },
  "170x170": {
    "5.0": {
      weightPerMeter: 25.6,
      metersPerTon: 39.06,
    },
    "6.0": {
      weightPerMeter: 30.41,
      metersPerTon: 32.88,
    },
    "7.0": {
      weightPerMeter: 35.17,
      metersPerTon: 28.43,
    },
  },
  "200x150": {
    "5.0": {
      weightPerMeter: 26.35,
      metersPerTon: 37.95,
    },
    "7.0": {
      weightPerMeter: 36.26,
      metersPerTon: 27.58,
    },
  },
  "200x200": {
    4.5: {
      weightPerMeter: 27.35,
      metersPerTon: 36.56,
    },
    "5.0": {
      weightPerMeter: 30.28,
      metersPerTon: 33.03,
    },
    "6.0": {
      weightPerMeter: 36.06,
      metersPerTon: 27.73,
    },
  },
  "250x150": {
    "5.0": {
      weightPerMeter: 30.28,
      metersPerTon: 33.03,
    },
    "6.0": {
      weightPerMeter: 36.06,
      metersPerTon: 27.73,
    },
    "8.0": {
      weightPerMeter: 47.37,
      metersPerTon: 21.11,
    },
  },
  "250x250": {
    "6.0": {
      weightPerMeter: 45.48,
      metersPerTon: 21.98,
    },
  },
  "300x300": {
    "6.0": {
      weightPerMeter: 54.9,
      metersPerTon: 18.21,
    },
  },
});

onMounted(() => {
  loading.value = false;
});

const handleChangeItem = (item) => {
  itemName.value = item;
  type1.value = "";
  type2.value = "";
  type3.value = "";
};
const handleChange = () => {
  type2.value = "";
  type3.value = "";
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>