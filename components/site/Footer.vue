<template>
    <footer class="footer">
        <div class="uk-container">
            <div class="footer-payment-logo">
                <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://idpay.ir/cert?id=97154401&domain=applygermany.net"
                >
                    <img src="https://static.idpay.ir/logo/cert.svg" alt=""/>
                </a>
            </div>
            <div class="footer-nav-description">
                <nav class="footer-nav">
                    <ul>
                        <li><a target="_blank" href="https://applygermany.net/blog">مجله مهاجرتی</a></li>
                        <li>
                            <nuxt-link to="/acceptance">پذیرفته شدگان</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/faq">سوالات متداول</nuxt-link>
                        </li>
                        <li><nuxt-link to="/contactus">تماس با ما</nuxt-link></li>
                        <li>
                            <nuxt-link to="/team">تیم ما</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/collaboration">درخواست همکاری</nuxt-link>
                        </li>
                    </ul>
                    <div class="logo">
                        <nuxt-link to="/">
                            <img src="@/assets/site/images/new_logo.svg" alt=""/>
                        </nuxt-link>
                    </div>
                </nav>
                <div class="footer-description">
                    <p class="text">
                        <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://idpay.ir/cert?id=97154401&domain=applygermany.net"
                                class="payment-logo"
                        >
                            <img src="https://static.idpay.ir/logo/cert.svg" alt=""/>
                        </a>
                        <span>
              پورتـــال اپلای جرمنی توسط گروهی از دانشجویـــان ایرانی مقیم
              آلمــــان طراحی شده است. هدف این پورتال این است که شما علاقه‌مندان به مهاجرت به آلمان بتوانید با هزینه کم و دقت بالا موفق به اخذ پذیرش شوید. کارشناســــان ما شما رو تا رسیدن به
              خاک آلمـــان پشتیبــــانی می‌کنند
            </span
            >
                    </p>
                    <p class="copyright latin-font">
                        <span>© 2017 - 2023 Applygermany portal</span>
                        <span>All rights reserved.</span>
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>
<style lang="scss" scoped>
@import "@/assets/site/css/mixins";

.footer {
  background-color: #fafafa;
  margin-top: 4rem;
  padding-top: 3rem;
  padding-bottom: 4rem;

  > div.uk-container {
    @include fbx-ai-start-jc-between;
  }

  .footer-payment-logo {
    border: 1px solid var(--gray);
    border-radius: 5px;
    @include fbx-ai-center-jc-center;
    width: 6rem;
    height: 6rem;
    padding: 0.75rem;

    a {
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .footer-nav-description {
    width: 85%;

    nav {
      @include fbx-ai-center-jc-between;
      padding-bottom: 1.5rem;
      margin-bottom: 1.5rem;
      border-bottom: 1px solid var(--gray);

      ul {
        @include fbx-ai-start-jc-start;
        padding: 0;

        li {
          /*display: none!important;*/

          list-style-type: none;
          margin-left: 1.5rem;

          a {
            color: var(--black);
            font-weight: 600;
            font-size: 0.9rem;
          }
        }
      }

      .logo img {
        width: 216px;
      }
    }

    .footer-description {
      @include fbx-ai-start-jc-between;

      .text {
        width: 70%;

        span {
          color: var(--text-gray);
          font-size: 0.9rem;
          line-height: 2rem;
        }

        .payment-logo {
          display: none;
        }
      }

      .copyright {
        @include fbx-column-ai-start-jc-start;
        //text-align: left;
        direction: ltr;
        width: 25%;
        color: var(--text-gray);
        font-size: 0.9rem;

        span {
          margin-bottom: 0.25rem;
          margin-top: 0.25rem;
        }
      }
    }
  }
}

@include mobile-device {
  .footer {
    margin-top: 1rem;
    padding-top: 1.5rem;
    padding-bottom: 1rem;

    .footer-payment-logo {
      display: none;
    }

    .footer-nav-description {
      width: 100%;

      nav {
        @include fbx-column-ai-center-jc-center;
        padding-bottom: 0;
        margin-bottom: 1rem;

        ul {
          flex-wrap: wrap;
          justify-content: center;
          order: 2;

          li {
            display: unset !important;

            margin-left: 1rem;
            margin-right: 1rem;
            margin-bottom: 1rem;

            a {
              font-size: 0.75rem;
            }
          }
        }

        .logo {
          order: 1;
          margin-bottom: 2rem;
          width: 50%;

          img {
            width: 192px;
          }
        }
      }

      .footer-description {
        flex-wrap: wrap;

        .text {
          width: 100%;
          @include fbx-ai-start-jc-between;

          span {
            text-align: justify;
            font-size: 0.75rem;
            width: 75%;
          }

          .payment-logo {
            margin-top: 0.5rem;
            width: 20%;
            display: block;
          }
        }

        .copyright {
          flex-direction: row;
          justify-content: center;
          direction: ltr;
          width: 100%;
          font-size: 0.75rem;
          border-top: 1px solid var(--gray);
          margin-top: 1rem;
          padding-top: 1rem;

          span {
            margin-bottom: 0;
            margin-top: 0;
          }
        }
      }
    }
  }
}

@include tablet-device {
  .footer {
    margin-top: 2rem;
    padding-top: 1.5rem;
    padding-bottom: 1rem;

    .footer-payment-logo {
      display: none;
    }

    .footer-nav-description {
      width: 100%;

      nav {

        @include fbx-column-ai-center-jc-center;
        padding-bottom: 0;
        margin-bottom: 1rem;

        ul {

          flex-wrap: wrap;
          order: 2;

          li {
            display: unset !important;

            margin-left: 1rem;
            margin-bottom: 1rem;

            a {
              font-size: 0.75rem;
            }
          }
        }

        .logo {
          order: 1;
          margin-bottom: 2rem;
          width: 30%;

          img {
            width: 100%;
          }
        }
      }

      .footer-description {
        flex-wrap: wrap;

        .text {
          width: 100%;
          @include fbx-ai-start-jc-between;

          span {
            text-align: justify;
            font-size: 0.75rem;
            width: 85%;
          }

          .payment-logo {
            margin-top: 0.5rem;
            width: 12%;
            display: block;
          }
        }

        .copyright {
          flex-direction: row;
          justify-content: center;
          direction: ltr;
          width: 100%;
          font-size: 0.75rem;
          border-top: 1px solid var(--gray);
          margin-top: 1rem;
          padding-top: 1rem;

          span {
            margin-bottom: 0;
            margin-top: 0;
          }
        }
      }
    }
  }
}

@include large-device {
  .footer {
    margin-top: 2rem;
    padding-top: 1.5rem;
    padding-bottom: 1rem;

    .footer-payment-logo {
      display: none;
    }

    .footer-nav-description {
      width: 100%;

      nav {
        @include fbx-column-ai-center-jc-center;
        padding-bottom: 0;
        margin-bottom: 1rem;

        ul {
          flex-wrap: wrap;
          order: 2;

          li {
            margin-bottom: 1rem;
          }
        }

        .logo {
          order: 1;
          margin-bottom: 2rem;
          width: 30%;

          img {
            width: 100%;
          }
        }
      }

      .footer-description {
        flex-wrap: wrap;

        .text {
          width: 100%;
          @include fbx-ai-start-jc-between;

          span {
            text-align: justify;
            width: 85%;
          }

          .payment-logo {
            margin-top: 0.5rem;
            width: 12%;
            display: block;
          }
        }

        .copyright {
          flex-direction: row;
          justify-content: center;
          direction: ltr;
          width: 100%;
          border-top: 1px solid var(--gray);
          margin-top: 1rem;
          padding-top: 1rem;

          span {
            margin-bottom: 0;
            margin-top: 0;
          }
        }
      }
    }
  }
}
</style>

<script setup>
</script>