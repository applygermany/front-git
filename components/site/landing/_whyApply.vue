<template>
  <section id="why-apply" class="why-apply">
    <div class="uk-container">
      <div class="inner-why-apply">
        <div class="top">
          <div class="img" >
            <video
                id="my-player"
                class="vjs-matrix video-js"
                controls
                preload="auto"
                data-setup='{}'>
              <source src="https://applygermany.net/site/origin_84wQrE0fK2DcqdWyU8nsCP5e0v5tz7IV0eBdRPWo.mp4" type="video/mp4"></source>
              <p class="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a
                web browser that
                <a href="https://videojs.com/html5-video-support/" target="_blank">
                  supports HTML5 video
                </a>
              </p>
            </video>
          </div>
          <div class="text">
            <h2 class="title-font">چرا اپلای جرمنی؟</h2>
            <p>
              اپلای جرمنی پورتال جامع اخذ پذیرش تحصیلی است که توسط گروهی از دانشجویان ایرانی مقیم آلمان راه‌اندازی شده است. هدف اصلی این پورتال فراهم کردن امکان اخذ پذیرش برای تمام دانشجویان ایرانی با هزینه کم و سرعت بالا است. کارشناسان اپلای جرمنی شما را تا رسیدن به خاک آلمان و حتی پس از آن نیز همراهی می‌کنند.
            </p>
          </div>
        </div>
        <div class="icons">
          <div v-for="(item, index) in icons" :key="index">
            <img
              :src="require('@/assets/site/images/whyApply/' + item.img)"
              :alt="item.text"
            />
            <h3>{{ item.text }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        {
          img: "1.png",
          text: "یکپارچه‌سازی تمامی خدمات مهاجرتی در قالب یک پلتفرم",
        },
        {
          img: "2.png",
          text: "نقشه راه اپلای رایگــــان",
        },
        {
          img: "3.png",
          text: "امکان اپلای همه دانشگاه‌های آلمان",
        },
        {
          img: "4.png",
          text: "تسویه حساب پس از اخذ پذیرش",
        },
        {
          img: "5.png",
          text: "پشتیبانی رایگـان و سریع",
        },
        {
          img: "6.png",
          text: "امکان پیوستن به تیم اپلای جرمنی پس از مهاجرت",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/site/css/mixins";.why-apply{
  background-color: #FDFDFD;
  padding-top: 4rem;
  padding-bottom: 5rem;
  >div.uk-container{
    @include fbx-ai-start-jc-between;
    align-items: stretch;
  }
  .inner-why-apply{
    width: 85%;
    margin-right: auto;
    .top{
      @include fbx-ai-start-jc-between;
      margin-bottom: 5rem;
      .img{
        width: 48%;
        img{
          width: 100%;
        }
      }
      .text{
        margin-top: 0;
        width: 48%;
        h2{
          color: var(--black);
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }
        p{
          line-height: 2rem;
          font-size: 0.8rem;
          color: var(--black);
          text-align: justify;
        }
      }
    }
    .icons{
      @include fbx-ai-start-jc-between;
      >div{
        text-align: center;
        width: 13%;
        img{
          width: 50%;
        }
        h3{
          margin-top: 2.5rem;
          color: var(--black);
          font-weight: 600;
          font-size: 0.8rem;
          line-height: 1.8rem;
        }
      }
    }
  }
}

@include mobile-device{
  .why-apply{
    padding-top: 2rem;
    padding-bottom: 1.5rem;
    .inner-why-apply{
      width: 100%;
      .top{
        flex-wrap: wrap;
        margin-bottom: 2.5rem;
        .img{
          width: 100%;
          margin-bottom: 1.5rem;
        }
        .text{
          width: 100%;
          h2{
            font-size: 1.2rem;
            margin-bottom: 1rem;
            text-align: center;
          }
          p{
            font-size: 0.75rem;
          }
        }
      }
      .icons{
        flex-wrap: wrap;
        >div{
          width: 30%;
          margin-bottom: 1.5rem;
          img{
            width: 60%;
          }
          h3{
            margin-top: 1rem;
            font-size: 0.75rem;
            line-height: 1.5rem;
          }
        }
      }
    }
  }
}

@include tablet-device{
  .why-apply{
    padding-top: 2rem;
    padding-bottom: 1.5rem;
    .inner-why-apply{
      width: 100%;
      .top{
        flex-wrap: wrap;
        margin-bottom: 2.5rem;
        .img{
          width: 100%;
          margin-bottom: 1.5rem;
        }
        .text{
          width: 100%;
          h2{
            font-size: 1.2rem;
            margin-bottom: 1rem;
            text-align: center;
          }
          p{
            font-size: 0.75rem;
          }
        }
      }
      .icons{
        flex-wrap: wrap;
        >div{
          width: 30%;
          margin-bottom: 1.5rem;
          img{
            width: 40%;
          }
          h3{
            margin-top: 1rem;
            font-size: 0.75rem;
            line-height: 1.5rem;
          }
        }
      }
    }
  }
}

@include extra-extra-large-device{
  .why-apply{
    .inner-why-apply{
      width: 100%;
    }
  }
}

@include middle-extra-large-device{
  .why-apply{
    .inner-why-apply{
      width: 96%;
    }
  }
}
</style>
