<template>
  <div :class="'university-items '+ (universities.length === 0 ? 'd-flex-column' : '')">
    <div  class="box" v-for="(university, index) in universities" :key="index">
      <div class="title-description">
        <div class="description">
          <p>{{ university.description }}</p>
        </div>
        <div class="title">
          <div class="name-more">
            <h2 class="latin-font">{{ university.title }}</h2>
          </div>
          <div class="type-line">
            <span class="latin-font">{{ university.field }}</span>
            <hr />
          </div>
        </div>
      </div>
      <div class="university-statuses-img">
        <div class="university-statuses">
          <a
             
            :class="[
              'status',
              university.levelStatus >= 1 ? 'status-done' : '',
              university.levelStatus === 6 ? 'status-cancel' : '',
            ]"
          >
            <div class="icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="uk-svg"
              >
                <path
                  d="M11.25 19.25H7.75C6.64543 19.25 5.75 18.3546 5.75 17.25V6.75C5.75 5.64543 6.64543 4.75 7.75 4.75H14L18.25 9V11.25"
                  stroke="#141414"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M17 14.75V19.25"
                  stroke="#141414"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M19.25 17H14.75"
                  stroke="#141414"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M18 9.25H13.75V5"
                  stroke="#141414"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span
                v-if="
                  university.levelStatus >= 1 && university.levelStatus !== 6
                "
                >این مرحله انجام شد</span
              >
              <span v-if="university.levelStatus === 6"
                >این مرحله لغو شده است</span
              >
            </div>
            <h3>دریافت مدارک در سایت</h3>
            <div class="polygon-f">
              <div class="polygon-s">
                <span class="counter latin-font"> 1 </span>
              </div>
            </div>
          </a>
          <a
             
            :class="[
              'status',
              university.levelStatus >= 2 ? 'status-done' : '',
              university.levelStatus === 6 ? 'status-cancel' : '',
            ]"
          >
            <div class="icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="uk-svg"
              >
                <path
                  d="M4.75 9.75C4.75 8.64543 5.64543 7.75 6.75 7.75H17.25C18.3546 7.75 19.25 8.64543 19.25 9.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V9.75Z"
                  stroke="#141414"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M8.75 7.5V6.75C8.75 5.64543 9.64543 4.75 10.75 4.75H13.25C14.3546 4.75 15.25 5.64543 15.25 6.75V7.5"
                  stroke="#141414"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M5 13.25H19"
                  stroke="#141414"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M8.75 11.75V14.25"
                  stroke="#141414"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M15.25 11.75V14.25"
                  stroke="#141414"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span
                v-if="
                  university.levelStatus >= 2 && university.levelStatus !== 6
                "
                >این مرحله انجام شد</span
              >
              <span v-if="university.levelStatus === 6"
                >این مرحله لغو شده است</span
              >
            </div>
            <h3>در دست اپلای</h3>
            <div class="polygon-f">
              <div class="polygon-s">
                <span class="counter latin-font"> 2 </span>
              </div>
            </div>
          </a>
          <a
             
            :class="[
              'status',
              university.levelStatus >= 3 ? 'status-done' : '',
              university.levelStatus === 6 ? 'status-cancel' : '',
            ]"
          >
            <div class="icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="uk-svg"
              >
                <path
                  d="M4.75 19.25L12 4.75L19.25 19.25L12 15.75L4.75 19.25Z"
                  stroke="#141414"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12 15.5V12.75"
                  stroke="#141414"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span
                v-if="
                  university.levelStatus >= 3 && university.levelStatus !== 6
                "
                >این مرحله انجام شد</span
              >
              <span v-if="university.levelStatus === 6"
                >این مرحله لغو شده است</span
              >
            </div>
            <h3>ارسال مدارک به دانشگاه</h3>
            <div class="polygon-f">
              <div class="polygon-s">
                <span class="counter latin-font"> 3 </span>
              </div>
            </div>
          </a>
          <a
             
            :class="[
              'status',
              university.levelStatus >= 4 ? 'status-done' : '',
              university.levelStatus === 6 ? 'status-cancel' : '',
            ]"
          >
            <div class="icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="uk-svg"
              >
                <path
                  d="M18.25 11.5V19.25M5.75 19.25V11.5M9.75 19.25V11.5M14.25 19.25V11.5"
                  stroke="#141414"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12 4.75L19.25 11.25H4.75L12 4.75Z"
                  stroke="#141414"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M4.75 19.25H19.25"
                  stroke="#141414"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span
                v-if="
                  university.levelStatus >= 4 && university.levelStatus !== 6
                "
                >این مرحله انجام شد</span
              >
              <span v-if="university.levelStatus === 6"
                >این مرحله لغو شده است</span
              >
            </div>
            <h3>بررسی توسط دانشگاه</h3>
            <div class="polygon-f">
              <div class="polygon-s">
                <span class="counter latin-font"> 4 </span>
              </div>
            </div>
          </a>
          <a
             
            :class="[
              'status',
              university.levelStatus >= 5 ? 'status-done' : '',
              university.levelStatus === 6 ? 'status-cancel' : '',
            ]"
          >
            <div class="icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="uk-svg"
              >
                <path
                  d="M15.25 8C15.25 9.79493 13.7949 11.25 12 11.25C10.2051 11.25 8.75 9.79493 8.75 8C8.75 6.20507 10.2051 4.75 12 4.75C13.7949 4.75 15.25 6.20507 15.25 8Z"
                  stroke="#141414"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12.25 19.25H6.94949C5.77001 19.25 4.88985 18.2103 5.49082 17.1954C6.36244 15.7234 8.23932 14 12.25 14"
                  stroke="#141414"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M14.75 17.75L16 19.25L19.25 14.75"
                  stroke="#141414"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span
                v-if="
                  university.levelStatus >= 5 && university.levelStatus !== 6
                "
                >این مرحله انجام شد</span
              >
              <span v-if="university.levelStatus === 6"
                >این مرحله لغو شده است</span
              >
            </div>
            <h3>اخذ پذیرش</h3>
            <div class="polygon-f">
              <div class="polygon-s">
                <span class="counter latin-font"> 5 </span>
              </div>
            </div>
          </a>
        </div>
        <div class="university-img">
          <img :src="university.image" :alt="university.title" />
        </div>
      </div>
      <div class="download-apply" v-if="university.applyFile !== 0">
        <p>
          شما موفق به اخذ پذیرش از دانشگاه {{ university.title }} شدید. با
          استفاده از لینک روبرو میتوانید
          <span v-if="university.payed === 0">نسخه غیر قابل ارائه </span>
          <span v-else>نسخه قابل ارائه </span>
          پذیرش خود را مشاهده کنید.
        </p>
        <a :href="university.applyFile" target="_blank">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="uk-svg"
          >
            <path
              d="M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75"
              stroke="#141414"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M12 14.25L12 4.75"
              stroke="#141414"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M8.75 10.75L12 14.25L15.25 10.75"
              stroke="#141414"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          دانلود
        </a>
      </div>
    </div>
    <div class="d-flex justify-content-center"  v-if="universities.length === 0">
      <div class="text-center">
        <svg height="118.607" viewBox="0 0 120 118.607" width="120"
             xmlns="http://www.w3.org/2000/svg">
          <defs>
            <style>
              .alef, .cj {
                fill: none;
              }

              .alef {
                stroke: #707070;
                stroke-width: 1.5px;
              }

              .best {
                stroke: none;
              }</style>
          </defs>
          <g transform="translate(-518.5 -4724)">
            <g class="alef" transform="translate(582.071 4798.286)">
              <circle class="best" cx="17.143" cy="17.143" r="17.143"/>
              <circle class="cj" cx="17.143" cy="17.143" r="16.393"/>
            </g>
            <line class="alef" transform="translate(518.5 4841.857)" x2="8.571"/>
            <line class="alef" transform="translate(529.929 4841.857)" x2="101.429"/>
            <line class="alef" transform="translate(634.214 4841.857)" x2="4.286"/>
            <line class="alef" transform="translate(622.786 4777.571)" x2="8.571" y2="2.857"/>
            <line class="alef" transform="translate(625.643 4774.714)" x1="2.857" y2="8.571"/>
            <g class="alef" transform="translate(623.5 4728.286)">
              <circle class="best" cx="3.571" cy="3.571" r="3.571"/>
              <circle class="cj" cx="3.571" cy="3.571" r="2.821"/>
            </g>
            <g class="alef" transform="translate(544.929 4724)">
              <circle class="best" cx="2.857" cy="2.857" r="2.857"/>
              <circle class="cj" cx="2.857" cy="2.857" r="2.107"/>
            </g>
            <line class="alef" transform="translate(527.071 4751.857)" x2="5.714" y2="2.857"/>
            <line class="alef" transform="translate(528.5 4750.429)" x2="2.857" y1="5.714"/>
            <line class="alef" transform="translate(558.5 4776.143)" x2="28.571"/>
            <line class="alef" transform="translate(591.357 4776.143)" x2="5.714"/>
            <line class="alef" transform="translate(599.929 4776.143)" x2="2.857"/>
            <line class="alef" transform="translate(559.929 4790.429)" x2="22.857"/>
            <line class="alef" transform="translate(558.5 4804.714)" x2="17.143"/>
            <path class="alef" d="M3,0H63a4.286,4.286,0,0,1,4.286,4.286V45.714"
                  transform="translate(547.643 4748.286)"/>
            <path class="alef" d="M0,30.56V3" transform="translate(546.357 4749.571)"/>
            <path class="alef" d="M35.148,70.714H4.286A4.286,4.286,0,0,1,0,66.429V35"
                  transform="translate(546.357 4763.286)"/>
            <path class="alef" d="M0,8.714V3" transform="translate(546.357 4785.286)"/>
            <line class="alef" transform="translate(598.5 4806.143)" y2="11.429"/>
            <line class="alef" transform="translate(598.5 4817.571)" x1="7.143"/>
          </g>
        </svg>
        <p style="display: block">شما هنوز هیچ دانشگاهی را انتخاب نکرده اید!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["universities"],
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";
.text-center {
  text-align: center;
  p {
    margin-top: 2em;
  }
}
.d-flex-column {
  display: flex;
  height: 75%;
  flex-direction: column;
  justify-content: center;
}
.polygon-f {
  clip-path: polygon(0 0, 0% 100%, 100% 100%);
  background: var(--white);
  width: 52px;
  height: 74px;
  position: absolute;
  bottom: -2px;
  left: -2px;

  .polygon-s {
    clip-path: polygon(0 0, 0% 100%, 100% 100%);
    width: 39px;
    height: 59px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: rgba(#f1f0f0, 0.45);

    .counter {
      color: #737284 !important;
      bottom: 5px !important;
      left: 25% !important;
    }
  }
}

.university-items {
  .box {
    border-radius: 8px;
    @include boxshadow();
    padding: 1.5rem;
    background-color: var(--white);
    margin-bottom: 1.5rem;
    .title-description {
      @include fbx-ai-start-jc-between;
      margin-bottom: 2rem;
      .description {
        width: 60%;
        font-size: 0.8rem;
        color: var(--text-gray);
        line-height: 1.8rem;
      }
      .title {
        @include fbx-column-ai-start-jc-start;
        text-align: left;
        .name-more {
          @include fbx-ai-center-jc-start;
          h2 {
            font-size: 1.5rem;
            font-weight: bold;
            color: var(--black);
          }
          button {
            background-color: inherit;
            cursor: pointer;
            border: 0;
            padding: 0;
            svg {
              transition: all 0.3s;
              width: 2rem;
              fill: none;
              color: var(--text-gray);
            }
            &:hover {
              svg {
                color: var(--black);
              }
            }
          }
          .uk-dropdown {
            margin-top: 0.5rem;
            padding: 0.5rem 1rem;
            border-radius: 5px;
            background-color: var(--inner-background-color);
            border: 1px solid var(--gray);
            min-width: 120px;
            ul {
              padding-right: 0;
              list-style-type: none;
              li {
                border-bottom: 1px solid var(--gray);
                padding-bottom: 0.5rem;
                padding-top: 0.5rem;
                a {
                  font-size: 0.8rem;
                  color: var(--black);
                  transition: all 0.3s;
                  &:hover {
                    color: var(--red);
                  }
                }
              }
              li:last-child {
                border-bottom: 0;
              }
            }
          }
        }
        .type-line {
          @include fbx-ai-center-jc-end;
          margin-right: auto;
          width: 80%;
          span {
            font-size: 0.9rem;
            color: var(--text-gray);
          }
          hr {
            border-width: 2px;
            border-color: var(--text-gray);
            width: 20%;
            margin-right: 0.5rem;
          }
        }
      }
    }

    .university-statuses-img {
      @include fbx-ai-start-jc-between;
      .university-statuses {
        @include fbx-ai-start-jc-start;
        width: 68%;
        margin-left: -0.5rem;
        margin-right: -0.5rem;
        align-self: stretch;
        .status {
          cursor: unset;
          position: relative;
          background-color: rgba(#f1f0f0, 0.45);
          width: calc(19.8% - 2rem);
          margin-left: 0.5rem;
          margin-right: 0.5rem;
          padding: 1rem 0.5rem;
          border: 1px solid var(--gray);
          border-radius: 5px;
          @include fbx-column-ai-start-jc-start;
          .icon {
            margin-bottom: 1rem;
            @include fbx-ai-start-jc-between;
            svg {
              opacity: 1;
              width: 2.5rem;
              padding-bottom: 1rem;
              border-bottom: 1px solid var(--gray);
              fill: none;
              color: var(--gray);
            }
          }
          h3 {
            max-width: 80%;
            font-size: 0.8rem;
            color: var(--black);
            font-weight: 800;
            line-height: 1.8rem;
          }
          .counter {
            position: absolute;
            bottom: 0;
            left: 8%;
            color: var(--black);
          }
        }
        .status-done {
          background: linear-gradient(180deg, #acac9d 0%, #9d9e86 100%);
          .icon {
            svg {
              border-color: rgba(white, 0.3);
              color: #fff;
            }
            span {
              color: #fff;
              font-size: 0.75rem;
              margin-right: 0.5rem;
              max-width: 50%;
            }
          }
          h3 {
            color: #fff;
          }
          .counter {
            color: #fff;
          }
        }
        .status-cancel {
          background: linear-gradient(180deg, #af4444 0%, #553a3a 100%);
          .icon {
            svg {
              border-color: rgba(white, 0.3);
              color: #fff;
            }
            span {
              color: #fff;
              font-size: 0.75rem;
              margin-right: 0.5rem;
              max-width: 50%;
            }
          }
          h3 {
            color: #fff;
          }
          .counter {
            color: #fff;
          }
        }
      }
      .university-img {
        width: 28%;
        img {
          border-radius: 5px;
          height: 10rem;
          object-fit: cover;
          width: 100%;
        }
      }
    }

    .download-apply {
      margin-top: 2rem;
      padding-top: 1.5rem;
      border-top: 1px solid var(--gray);
      @include fbx-ai-center-jc-between;
      p {
        font-size: 0.8rem;
        color: #868170;
        font-weight: 500;
        span {
          color: var(--main-color);
          text-decoration: underline var(--main-color);
        }
      }
      a {
        border: 1px solid var(--main-color);
        border-radius: 5px;
        color: var(--black);
        font-size: 0.8rem;
        padding: 0.25rem 2rem;
        font-weight: 500;
        transition: all 0.3s;
        svg {
          fill: none;
          color: var(--black);
          transition: all 0.3s;
        }
        &:hover {
          color: #2b2827;
          border-color: var(--light-main-color);
          background-color: var(--light-main-color);
          svg {
            color: #2b2827;
          }
        }
      }
    }
  }
}

@include mobile-device {
  .university-items {
    .box {
      padding: 1rem;
      .title-description {
        margin-bottom: 1.5rem;
        .description {
          width: 50%;
          text-align: justify;
          font-size: 0.75rem;
        }
        .title {
          .name-more {
            h2 {
              font-size: 1.2rem;
              text-align: left;
            }
          }
          .type-line {
            span {
              font-size: 0.8rem;
            }
          }
        }
      }

      .university-statuses-img {
        flex-wrap: wrap;
        .university-statuses {
          @include fbx-ai-start-jc-start;
          margin-top: 1.5rem;
          width: 100%;
          order: 2;
          overflow-x: auto;
          .status {
            min-width: calc(45% - 2rem);
            width: calc(45% - 2rem);
            padding: 0.5rem 0.5rem;
            .icon {
              margin-bottom: 0.75rem;
              svg {
                width: 2.5rem;
                padding-bottom: 0.75rem;
              }
            }
            h3 {
              font-size: 0.75rem;
            }
          }
        }
        .university-img {
          width: 100%;
          order: 1;
        }
      }

      .download-apply {
        margin-top: 1.5rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
        flex-wrap: wrap;
        background-color: #fdf8ee;
        justify-content: center;
        p {
          font-size: 0.75rem;
          line-height: 1.8rem;
        }
        a {
          background-color: var(--main-color);
          margin-top: 1rem;
          font-size: 0.75rem;
          padding: 0.25rem 2rem;
          color: var(--white);
          svg {
            color: var(--white);
          }
        }
      }
    }
  }
}

@include tablet-device {
  .university-items {
    .box {
      padding: 1rem;
      .title-description {
        margin-bottom: 1.5rem;
        .description {
          width: 50%;
          text-align: justify;
          font-size: 0.75rem;
        }
        .title {
          .name-more {
            h2 {
              font-size: 1.2rem;
              text-align: left;
            }
          }
          .type-line {
            span {
              font-size: 0.8rem;
            }
          }
        }
      }

      .university-statuses-img {
        flex-wrap: wrap;
        .university-statuses {
          @include fbx-ai-start-jc-start;
          margin-top: 1.5rem;
          width: 100%;
          order: 2;
          overflow-x: auto;
          .status {
            min-width: calc(30% - 2rem);
            width: calc(30% - 2rem);
            padding: 0.5rem 0.5rem;
            .icon {
              margin-bottom: 0.75rem;
              svg {
                width: 2.5rem;
                padding-bottom: 0.75rem;
              }
            }
            h3 {
              font-size: 0.75rem;
            }
          }
        }
        .university-img {
          width: 100%;
          order: 1;
        }
      }

      .download-apply {
        margin-top: 1.5rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
        flex-wrap: wrap;
        background-color: #fdf8ee;
        justify-content: center;
        p {
          font-size: 0.75rem;
          line-height: 1.8rem;
        }
        a {
          background-color: var(--main-color);
          margin-top: 1rem;
          font-size: 0.75rem;
          padding: 0.25rem 2rem;
          color: var(--white);
          svg {
            color: var(--white);
          }
        }
      }
    }
  }
}

@include large-device {
  .university-items {
    .box {
      .title-description {
        .title {
          .name-more {
            h2 {
              text-align: left;
            }
          }
        }
      }

      .university-statuses-img {
        flex-wrap: wrap;
        .university-statuses {
          width: 100%;
          margin-top: 1.5rem;
          order: 2;
          overflow-x: auto;
          .status {
            min-width: calc(28% - 2rem);
            width: calc(28% - 2rem);
          }
        }
        .university-img {
          width: 100%;
          order: 1;
        }
      }

      .download-apply {
        p {
          width: 75%;
          line-height: 1.8rem;
        }
      }
    }
  }
}
</style>
