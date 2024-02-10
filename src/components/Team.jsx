import React from "react";

const Team = () => {
  return (
    <div className="w-full h-[800px] absolute flex top-[5345px] justify-center items-center">
      <div className="w-[1200px] h-[658px] absolute flex gap-[40px] justify-center ">
        <div className="w-[307px] h-[80px] flex flex-col absolute gap-[16px] justify-center ">
          <div className="[131px] h-[23px] flex justify-center items-center">
            <svg
              width="5"
              height="23"
              viewBox="0 0 5 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                width="4"
                height="23"
                fill="url(#paint0_linear_1_276)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_276"
                  x1="0.386598"
                  y1="4.98333"
                  x2="5.44324"
                  y2="5.04578"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFB629" />
                  <stop offset="0.507189" stop-color="#FFDA56" />
                  <stop offset="1" stop-color="#FFD7A6" />
                </linearGradient>
              </defs>
            </svg>
            <p className="w-[111px] h-[17px] text-[#1C1F35] font-rubik text-sm font-normal leading-4 tracking-normal text-center ">
              The Transporters
            </p>
          </div>
          <div className="w-[307px] h-[41px]">
            <h2 className="text-[#1C1F35] font-rubik text-3xl font-semibold leading-10 tracking-normal text-center">
              Meet Expert Team
            </h2>
          </div>
        </div>

        <div className="w-[1200px] h-[538px] gap-[54px] flex  absolute bottom-0">
          <div className="w-[364px] h-[538px] relative">
            <div className="w-[364px] h-[426px] overflow-hidden ">
              <img
                src="https://s3-alpha-sig.figma.com/img/a29f/5e6b/b1a1aa76508e6af64f2914071a39dec7?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qHgzaF2hfqko1sz4KUTvgf1YHUIxqI2uwkfcC8UGUBZyFq1pN480WahzkHRgK86Y1csNp3DeCM-Q-k2l9j08YnmD5lE9YGKrg-sixiQr9hk6iz51okCKeBCfhZR0Qd~wOXOnDmeWo4gbwY-a-lkNhJPV4h1nsNJcq2VhC~gyylgd~v1KmuG6sDreTxfXXR5JWxx3lD86G30A-Qn7RQ4hgrnhabdQgrqW5NWtjkMmDQYUIPvh2XMgUcfwJQaHYuYnUn5t4WAEA9zKkdmBndGk-gZ7ddVDhD-KIww4g2Ni7y5u2wM9g-SeS25sU4KezPUXxWHQqImo8G8dqaiMazq3YQ__"
                alt="pic"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="w-[364px] h-[112px] flex justify-center items-center bg-[#1C1F35] absolute ">
              <div className="w-[296px] h-[72px] relative ">
                <div className="w-[123px] h-[50px] flex flex-col top-[22px] relative">
                  <p className="w-[123px] h-[24px] text-[#FFFFFF] font-rubik text-lg font-medium leading-6 tracking-normal text-left">
                    Jessca Arow
                  </p>
                  <p className="w-[68px] h-[24px] text-[#FFFFFF] font-krub text-base font-medium leading-6 tracking-normal text-left">
                    Designer
                  </p>
                </div>
              </div>

              <div className="w-[151.27px] h-[61.64px] relative justify-center items-center flex bottom-[55.5px] bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300">
                <svg
                  width="118"
                  height="23"
                  viewBox="0 0 118 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.3385 2.58411C21.5302 2.93507 20.675 3.16629 19.7998 3.27047C20.7195 2.73232 21.4112 1.87737 21.745 0.865968C20.8755 1.37405 19.9258 1.73054 18.9366 1.92018C18.52 1.48393 18.019 1.13688 17.4641 0.900127C16.9091 0.663374 16.3118 0.541862 15.7084 0.542976C13.2653 0.542976 11.2883 2.4899 11.2883 4.88991C11.2866 5.22374 11.3248 5.55658 11.4023 5.88132C9.6505 5.79925 7.9351 5.35268 6.36587 4.57017C4.79665 3.78767 3.40816 2.68646 2.28923 1.337C1.89668 1.99829 1.68908 2.7528 1.68813 3.52168C1.68813 5.02898 2.47508 6.36132 3.66338 7.14188C2.95935 7.12519 2.26974 6.93898 1.65311 6.59908V6.65291C1.65311 8.76133 3.17944 10.5154 5.19959 10.9146C4.8197 11.0158 4.42823 11.0671 4.03508 11.0671C3.75611 11.0676 3.47778 11.0406 3.20413 10.9864C3.76573 12.7135 5.40025 13.9696 7.33645 14.0055C5.76315 15.2171 3.83155 15.872 1.84525 15.8672C1.49267 15.8666 1.14043 15.8457 0.790283 15.8044C2.81096 17.0937 5.15983 17.7757 7.55732 17.7692C15.6989 17.7692 20.1469 11.1434 20.1469 5.39683C20.1469 5.20842 20.1419 5.02001 20.1329 4.83608C20.9963 4.22242 21.7431 3.45982 22.3385 2.58411Z"
                    fill="#1C1F35"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M70.511 11.3532C70.511 5.38346 65.3431 0.542969 58.9696 0.542969C52.5961 0.542969 47.4283 5.38346 47.4283 11.3532C47.4283 16.7487 51.6481 21.221 57.1663 22.0327L57.1663 14.4791L54.2351 14.4791V11.3532L57.1663 11.3532V8.97161C57.1663 6.26276 58.8898 4.76525 61.5257 4.76525C62.7886 4.76525 64.1096 4.97663 64.1096 4.97663V7.63721L62.6536 7.63721C61.2207 7.63721 60.7725 8.47018 60.7725 9.32632V11.3532L63.9731 11.3532L63.462 14.4791L60.773 14.4791L60.773 22.0337C66.2912 21.2224 70.511 16.7502 70.511 11.3532Z"
                    fill="#1C1F35"
                  />
                  <path
                    d="M111.423 2.3341C112.657 2.33764 113.838 2.81062 114.71 3.64974C115.582 4.48886 116.074 5.62594 116.078 6.81263L116.078 15.7687C116.074 16.9554 115.582 18.0925 114.71 18.9316C113.838 19.7708 112.657 20.2437 111.423 20.2473L102.116 20.2473C100.883 20.2437 99.7014 19.7708 98.8294 18.9316C97.9574 18.0925 97.4658 16.9554 97.4621 15.7687V6.81263C97.4658 5.62594 97.9574 4.48886 98.8294 3.64974C99.7014 2.81062 100.883 2.33764 102.116 2.3341L111.423 2.3341ZM111.423 0.542969L102.116 0.542969C98.5327 0.542969 95.6008 3.36424 95.6008 6.81263V15.7687C95.6008 19.2171 98.5327 22.0384 102.116 22.0384L111.423 22.0384C115.007 22.0384 117.939 19.2171 117.939 15.7687L117.939 6.81263C117.939 3.36424 115.007 0.542969 111.423 0.542969Z"
                    fill="#1C1F35"
                  />
                  <path
                    d="M112.82 6.81303C112.544 6.81303 112.274 6.73424 112.044 6.58661C111.814 6.43899 111.635 6.22917 111.53 5.98369C111.424 5.7382 111.396 5.46807 111.45 5.20747C111.504 4.94686 111.637 4.70748 111.832 4.51959C112.028 4.3317 112.276 4.20375 112.547 4.15191C112.818 4.10008 113.099 4.12668 113.354 4.22836C113.609 4.33005 113.827 4.50224 113.98 4.72317C114.134 4.94411 114.216 5.20385 114.216 5.46956C114.216 5.6461 114.18 5.82097 114.11 5.98413C114.04 6.1473 113.937 6.29556 113.808 6.42038C113.678 6.54521 113.524 6.64415 113.354 6.71154C113.185 6.77892 113.003 6.81341 112.82 6.81303ZM106.77 7.70835C107.506 7.70835 108.226 7.91847 108.838 8.31215C109.451 8.70583 109.928 9.26537 110.21 9.92003C110.491 10.5747 110.565 11.2951 110.422 11.99C110.278 12.685 109.923 13.3234 109.403 13.8245C108.882 14.3255 108.218 14.6667 107.496 14.805C106.774 14.9432 106.025 14.8723 105.345 14.6011C104.665 14.3299 104.083 13.8707 103.674 13.2815C103.265 12.6924 103.047 11.9997 103.047 11.2911C103.048 10.3412 103.44 9.4305 104.138 8.75883C104.836 8.08716 105.783 7.70937 106.77 7.70835ZM106.77 5.91723C105.665 5.91723 104.586 6.2324 103.667 6.82288C102.749 7.41337 102.033 8.25265 101.61 9.2346C101.188 10.2165 101.077 11.297 101.293 12.3395C101.508 13.3819 102.04 14.3394 102.821 15.091C103.602 15.8425 104.597 16.3543 105.68 16.5617C106.764 16.769 107.887 16.6626 108.907 16.2559C109.927 15.8491 110.8 15.1604 111.413 14.2766C112.027 13.3929 112.354 12.3539 112.354 11.2911C112.354 9.86585 111.766 8.49899 110.719 7.49119C109.671 6.4834 108.251 5.91723 106.77 5.91723Z"
                    fill="#1C1F35"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="w-[364px] h-[538px] relative">
            <div className="w-[364px] h-[426px] overflow-hidden ">
              <img
                src="https://s3-alpha-sig.figma.com/img/ceed/9cf8/74991ad5377a178343757654a13d1581?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FNZF3t6cILDm429oyJ57logZMEr09Y2OZ8AlHCb58XByA6E5hesvx7PPYOvXIxXIW~jEDELEvZ4ep6gIysId~nZAcusKKV9U2~8s3ZqPAf7LhkHI9ArDN6S6vIkiA0eL6~nPbSJPIquSkMj4~gTqW04EUCNRLZOn6jCWMVG-JpJOyBRJ0My-5k9nZVQlaYaHsV~gVjB5UuYuzBQPy4La~vcOztqcZfiMAqAhI7IfTZpFlJyRFBCKsXyCTKkvFGACxwuBGGHzT4~Yn8nZWnctahIMgvjwqZfqcdrhhcKHQcutDKk7i~3Y-D89Wt6pJ5EOa-quZNR9TZFzGp5mVZLMyQ__"
                alt="pic"
                className="object-cover w-full h-full"
              />
            </div>
            {/* name section */}
            <div className="w-[364px] h-[112px] flex justify-center items-center bg-[#1C1F35] absolute ">
              <div className="w-[296px] h-[72px] relative ">
                <div className="w-[123px] h-[50px] flex flex-col top-[22px] relative">
                  <p className="w-[149px] h-[24px] text-[#FFFFFF] font-rubik text-lg font-medium leading-6 tracking-normal text-left">
                    Kathleen Smith
                  </p>
                  <p className="w-[68px] h-[24px] text-[#FFFFFF] font-krub text-base font-medium leading-6 tracking-normal text-left">
                    Designer
                  </p>
                </div>
              </div>

              <div className="w-[198.11px] h-[61.64px] relative justify-center items-center flex bottom-[55.5px] bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300">
                <svg
                  width="199"
                  height="63"
                  viewBox="0 0 199 63"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="61.6392"
                    height="198.111"
                    transform="translate(0.889374 62.1104) rotate(-90)"
                    fill="url(#paint0_linear_1_314)"
                  />
                  <path
                    d="M37.9609 20.543L19.8089 20.543C18.8171 20.543 17.9505 21.2566 17.9505 22.2368L17.9505 40.4291C17.9505 41.4146 18.8171 42.2929 19.8089 42.2929L37.9555 42.2929C38.9527 42.2929 39.7004 41.4088 39.7004 40.4291L39.7004 22.2368C39.7062 21.2566 38.9527 20.543 37.9609 20.543ZM24.6925 38.6726L21.5766 38.6726L21.5766 28.9847L24.6925 28.9847L24.6925 38.6726ZM23.2423 27.5117H23.22C22.2228 27.5117 21.5771 26.7694 21.5771 25.8401C21.5771 24.8939 22.2398 24.1691 23.2593 24.1691C24.2788 24.1691 24.9027 24.8886 24.925 25.8401C24.9245 26.7694 24.2788 27.5117 23.2423 27.5117ZM36.0801 38.6726L32.9642 38.6726L32.9642 33.3754C32.9642 32.1064 32.5108 31.2393 31.3835 31.2393C30.5222 31.2393 30.0124 31.8219 29.7857 32.3894C29.7008 32.5933 29.6779 32.871 29.6779 33.1545L29.6779 38.6726H26.5621L26.5621 28.9847L29.6779 28.9847L29.6779 30.3329C30.1314 29.6872 30.8397 28.7579 32.488 28.7579C34.5333 28.7579 36.0806 30.1061 36.0806 33.0128L36.0801 38.6726Z"
                    fill="#1C1F35"
                  />
                  <path
                    d="M86.3385 22.5841C85.5302 22.9351 84.6749 23.1663 83.7998 23.2705C84.7195 22.7323 85.4111 21.8774 85.745 20.866C84.8755 21.374 83.9258 21.7305 82.9365 21.9202C82.52 21.4839 82.019 21.1369 81.464 20.9001C80.9091 20.6634 80.3118 20.5419 79.7083 20.543C77.2653 20.543 75.2883 22.4899 75.2883 24.8899C75.2865 25.2237 75.3248 25.5566 75.4023 25.8813C73.6505 25.7993 71.9351 25.3527 70.3658 24.5702C68.7966 23.7877 67.4081 22.6865 66.2892 21.337C65.8967 21.9983 65.6891 22.7528 65.6881 23.5217C65.6881 25.029 66.4751 26.3613 67.6633 27.1419C66.9593 27.1252 66.2697 26.939 65.6531 26.5991V26.6529C65.6531 28.7613 67.1794 30.5154 69.1996 30.9146C68.8197 31.0158 68.4282 31.0671 68.0351 31.0671C67.7561 31.0676 67.4777 31.0406 67.2041 30.9864C67.7657 32.7135 69.4002 33.9696 71.3364 34.0055C69.7631 35.2171 67.8315 35.872 65.8452 35.8672C65.4926 35.8666 65.1404 35.8457 64.7903 35.8044C66.8109 37.0937 69.1598 37.7757 71.5573 37.7692C79.6989 37.7692 84.1468 31.1434 84.1468 25.3968C84.1468 25.2084 84.1419 25.02 84.1329 24.8361C84.9962 24.2224 85.7431 23.4598 86.3385 22.5841Z"
                    fill="#1C1F35"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M134.511 31.3532C134.511 25.3835 129.343 20.543 122.97 20.543C116.596 20.543 111.428 25.3835 111.428 31.3532C111.428 36.7487 115.648 41.221 121.166 42.0327L121.166 34.4791L118.235 34.4791V31.3532L121.166 31.3532V28.9716C121.166 26.2628 122.89 24.7653 125.526 24.7653C126.789 24.7653 128.11 24.9766 128.11 24.9766V27.6372L126.654 27.6372C125.221 27.6372 124.772 28.4702 124.772 29.3263V31.3532L127.973 31.3532L127.462 34.4791L124.773 34.4791L124.773 42.0337C130.291 41.2224 134.511 36.7502 134.511 31.3532Z"
                    fill="#1C1F35"
                  />
                  <path
                    d="M175.423 22.3341C176.657 22.3376 177.838 22.8106 178.71 23.6497C179.582 24.4889 180.074 25.6259 180.078 26.8126L180.078 35.7687C180.074 36.9554 179.582 38.0925 178.71 38.9316C177.838 39.7708 176.657 40.2437 175.423 40.2473L166.116 40.2473C164.883 40.2437 163.701 39.7708 162.829 38.9316C161.957 38.0925 161.466 36.9554 161.462 35.7687V26.8126C161.466 25.6259 161.957 24.4889 162.829 23.6497C163.701 22.8106 164.883 22.3376 166.116 22.3341L175.423 22.3341ZM175.423 20.543L166.116 20.543C162.533 20.543 159.601 23.3642 159.601 26.8126L159.601 35.7687C159.601 39.2171 162.533 42.0384 166.116 42.0384L175.423 42.0384C179.007 42.0384 181.939 39.2171 181.939 35.7687L181.939 26.8126C181.939 23.3642 179.007 20.543 175.423 20.543Z"
                    fill="#1C1F35"
                  />
                  <path
                    d="M176.82 26.813C176.543 26.813 176.274 26.7342 176.044 26.5866C175.814 26.439 175.635 26.2292 175.53 25.9837C175.424 25.7382 175.396 25.4681 175.45 25.2075C175.504 24.9469 175.637 24.7075 175.832 24.5196C176.028 24.3317 176.276 24.2038 176.547 24.1519C176.818 24.1001 177.099 24.1267 177.354 24.2284C177.609 24.33 177.827 24.5022 177.98 24.7232C178.134 24.9441 178.216 25.2039 178.216 25.4696C178.216 25.6461 178.18 25.821 178.11 25.9841C178.04 26.1473 177.937 26.2956 177.808 26.4204C177.678 26.5452 177.524 26.6442 177.354 26.7115C177.185 26.7789 177.003 26.8134 176.82 26.813ZM170.77 27.7084C171.506 27.7084 172.226 27.9185 172.838 28.3122C173.451 28.7058 173.928 29.2654 174.21 29.92C174.491 30.5747 174.565 31.2951 174.422 31.99C174.278 32.685 173.923 33.3234 173.403 33.8245C172.882 34.3255 172.218 34.6667 171.496 34.805C170.774 34.9432 170.025 34.8723 169.345 34.6011C168.665 34.3299 168.083 33.8707 167.674 33.2815C167.265 32.6924 167.047 31.9997 167.047 31.2911C167.048 30.3412 167.44 29.4305 168.138 28.7588C168.836 28.0872 169.783 27.7094 170.77 27.7084ZM170.77 25.9172C169.665 25.9172 168.586 26.2324 167.667 26.8229C166.749 27.4134 166.033 28.2527 165.61 29.2346C165.188 30.2165 165.077 31.297 165.293 32.3395C165.508 33.3819 166.04 34.3394 166.821 35.091C167.602 35.8425 168.597 36.3543 169.68 36.5617C170.764 36.769 171.887 36.6626 172.907 36.2559C173.927 35.8491 174.8 35.1604 175.413 34.2766C176.027 33.3929 176.354 32.3539 176.354 31.2911C176.354 29.8658 175.766 28.499 174.719 27.4912C173.671 26.4834 172.251 25.9172 170.77 25.9172Z"
                    fill="#1C1F35"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_314"
                      x1="-1.7475"
                      y1="42.9239"
                      x2="76.1481"
                      y2="44.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FFB629" />
                      <stop offset="0.507189" stop-color="#FFDA56" />
                      <stop offset="1" stop-color="#FFD7A6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          <div className="w-[364px] h-[538px] relative">
            <div className="w-[364px] h-[426px] overflow-hidden ">
              <img
                src="https://s3-alpha-sig.figma.com/img/d2d9/c089/9419fa8b1781fd648483eb3452064dd6?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OA4o-qBRTt~AtA8xIGcUUD9U30tjxvSNu~P3is819v5ON1yYSJFRvWQ8nNdPGY9gnqPJ7dsEzJhdOdCxV-qN0B~PvJI9XMTHWGfRcRJjZRY63qB6hx7ulHQtOIzQ1vPx1V62-ne1hCWu8mkZ~NPZQ6auwJWevWSbcYyEdp~IEoPFOcdSWbz1-QA2IRftbR~W18SAXoPBCF5GNb11FfKHlzu-zmdqsFShowiMjw7TtOODZjZC1mIYIQQUl9YnXgnEFXxPwWRgUkix00GuecuEYVFCTwHlu-Hpiw3shnP5FNlOIeywcaxDUYI0bfy099cl8OmNAH26-WspKkuvIOedcw__"
                alt="pic"
                className="object-cover w-full h-full"
              />
            </div>
            {/* name section */}
            <div className="w-[364px] h-[112px] flex justify-center items-center bg-[#1C1F35] absolute ">
              <div className="w-[296px] h-[72px] relative ">
                <div className="w-[123px] h-[50px] flex flex-col top-[22px] relative">
                  <p className="w-[159px] h-[24px] text-[#FFFFFF] font-rubik text-lg font-medium leading-6 tracking-normal text-left">
                    Rebecca Tylor
                  </p>
                  <p className="w-[68px] h-[24px] text-[#FFFFFF] font-krub text-base font-medium leading-6 tracking-normal text-left">
                    Designer
                  </p>
                </div>
              </div>

              <div className="w-[104.63px] h-[61.64px] relative justify-center items-center flex bottom-[55.5px] bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300">
                <svg
                  width="105"
                  height="63"
                  viewBox="0 0 105 63"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="61.6392"
                    height="104.633"
                    transform="translate(0.367218 62.1104) rotate(-90)"
                    fill="url(#paint0_linear_1_337)"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M40.5109 31.3532C40.5109 25.3835 35.3431 20.543 28.9696 20.543C22.5961 20.543 17.4283 25.3835 17.4283 31.3532C17.4283 36.7487 21.6481 41.221 27.1663 42.0327L27.1663 34.4791L24.2351 34.4791L24.2351 31.3532L27.1663 31.3532L27.1663 28.9716C27.1663 26.2628 28.8897 24.7653 31.5257 24.7653C32.7885 24.7653 34.1096 24.9766 34.1096 24.9766L34.1096 27.6372L32.6536 27.6372C31.2207 27.6372 30.7724 28.4702 30.7724 29.3263L30.7724 31.3532L33.9731 31.3532L33.462 34.4791L30.7729 34.4791L30.7729 42.0337C36.2911 41.2224 40.5109 36.7502 40.5109 31.3532Z"
                    fill="#1C1F35"
                  />
                  <path
                    d="M81.4234 22.3341C82.6567 22.3376 83.8383 22.8106 84.7103 23.6497C85.5823 24.4889 86.0739 25.6259 86.0776 26.8126L86.0776 35.7687C86.0739 36.9554 85.5823 38.0925 84.7103 38.9316C83.8383 39.7708 82.6567 40.2437 81.4234 40.2473L72.1162 40.2473C70.883 40.2437 69.7014 39.7708 68.8293 38.9316C67.9573 38.0925 67.4658 36.9554 67.4621 35.7687V26.8126C67.4658 25.6259 67.9573 24.4889 68.8293 23.6497C69.7014 22.8106 70.883 22.3376 72.1162 22.3341L81.4234 22.3341ZM81.4234 20.543L72.1162 20.543C68.5326 20.543 65.6008 23.3642 65.6008 26.8126V35.7687C65.6008 39.2171 68.5326 42.0384 72.1162 42.0384L81.4234 42.0384C85.007 42.0384 87.9389 39.2171 87.9389 35.7687L87.9389 26.8126C87.9389 23.3642 85.007 20.543 81.4234 20.543Z"
                    fill="#1C1F35"
                  />
                  <path
                    d="M82.8196 26.813C82.5435 26.813 82.2736 26.7342 82.044 26.5866C81.8144 26.439 81.6355 26.2292 81.5298 25.9837C81.4241 25.7382 81.3965 25.4681 81.4503 25.2075C81.5042 24.9469 81.6372 24.7075 81.8324 24.5196C82.0277 24.3317 82.2764 24.2038 82.5473 24.1519C82.8181 24.1001 83.0988 24.1267 83.3539 24.2284C83.609 24.33 83.8271 24.5022 83.9805 24.7232C84.1339 24.9441 84.2158 25.2039 84.2158 25.4696C84.2162 25.6461 84.1803 25.821 84.1103 25.9841C84.0403 26.1473 83.9375 26.2956 83.8077 26.4204C83.678 26.5452 83.524 26.6442 83.3544 26.7115C83.1848 26.7789 83.0031 26.8134 82.8196 26.813ZM76.7699 27.7084C77.5063 27.7084 78.2261 27.9185 78.8384 28.3122C79.4507 28.7058 79.9279 29.2654 80.2097 29.92C80.4915 30.5747 80.5652 31.2951 80.4215 31.99C80.2779 32.685 79.9233 33.3234 79.4026 33.8245C78.8819 34.3255 78.2185 34.6667 77.4963 34.805C76.774 34.9432 76.0254 34.8723 75.3451 34.6011C74.6648 34.3299 74.0833 33.8707 73.6742 33.2815C73.2651 32.6924 73.0467 31.9997 73.0467 31.2911C73.0478 30.3412 73.4404 29.4305 74.1384 28.7588C74.8364 28.0872 75.7828 27.7094 76.7699 27.7084ZM76.7699 25.9172C75.6654 25.9172 74.5857 26.2324 73.6673 26.8229C72.7489 27.4134 72.0331 28.2527 71.6105 29.2346C71.1878 30.2165 71.0772 31.297 71.2927 32.3395C71.5082 33.3819 72.04 34.3394 72.821 35.091C73.602 35.8425 74.5971 36.3543 75.6804 36.5617C76.7637 36.769 77.8866 36.6626 78.907 36.2559C79.9274 35.8491 80.7996 35.1604 81.4133 34.2766C82.0269 33.3929 82.3544 32.3539 82.3544 31.2911C82.3544 29.8658 81.7661 28.499 80.7188 27.4912C79.6715 26.4834 78.251 25.9172 76.7699 25.9172Z"
                    fill="#1C1F35"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_337"
                      x1="-1.7475"
                      y1="22.6704"
                      x2="76.05"
                      y2="25.925"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FFB629" />
                      <stop offset="0.507189" stop-color="#FFDA56" />
                      <stop offset="1" stop-color="#FFD7A6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
