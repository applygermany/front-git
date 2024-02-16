<template>
    <header id="first-part" class="landing-header">

        <!-- Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5W8MHHXNB1"></script>
        <script>
            window.dataLayer = window.dataLayer || [];

            function gtag() {
                dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', 'G-5W8MHHXNB1');
        </script>


        <!-- Google Ads -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11041174374"></script>
        <script>
            window.dataLayer = window.dataLayer || [];

            function gtag() {
                dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', 'AW-11041174374');
        </script>

        <!-- YektaNet -->
        <script>
            !function (t, e, n) {
                t.yektanetAnalyticsObject = n, t[n] = t[n] || function () {
                    t[n].q.push(arguments)
                }, t[n].q = t[n].q || [];
                var a = new Date,
                    r = a.getFullYear().toString() + "0" + a.getMonth() + "0" + a.getDate() + "0" + a.getHours(),
                    c = e.getElementsByTagName("script")[0], s = e.createElement("script");
                s.id = "ua-script-vflfuVxz";
                s.dataset.analyticsobject = n;
                s.async = 1;
                s.type = "text/javascript";
                s.src = "https://cdn.yektanet.com/rg_woebegone/scripts_v3/vflfuVxz/rg.complete.js?v=" + r, c.parentNode.insertBefore(s, c)
            }(window, document, "yektanet");
        </script>

        <!-- Mediaad -->
        <script type="text/javascript">
            const head = document.getElementsByTagName("head")[0];
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.async = true;
            script.src = "https://s1.mediaad.org/serve/applygermany.net/loader.js";
            head.appendChild(script);
        </script>

        <!--    <script>-->
        <!--      const head = document.getElementsByTagName('head')[0];-->
        <!--        const script = document.createElement('script');-->
        <!--        script.type = 'text/javascript';-->
        <!--        script.async = true;-->
        <!--        script.src = 'https://applygermany.net/site/imber.js'-->
        <!--        head.appendChild(script);-->
        <!--    </script>-->

<!--        <a class="d-block w-full z-4"-->
<!--           href="https://applygermany.net/collaboration"-->
<!--           target="_blank">-->
<!--            <div style="height: 48px;">-->
<!--                <img class="w-100 banner" style="object-fit: cover;" src="../../assets/images/header.jpg">-->
<!--            </div>-->
<!--        </a>-->
        <a v-for="item in webinars" v-if="slideIndex === webinars.indexOf(item)" class="d-block w-full z-4"
           :href="item.link"
           target="_blank">
            <div style="height: 48px; position: fixed; z-index: 1000; width: 100%">
                <img class="w-100 webinar-banner" style="object-fit: cover;" :src="item.banner">
            </div>
        </a>
        <nav :style="webinars.length > 0 ? 'padding-top: 75px;' : 'padding-top: auto'">
            <div class="right">
                <div class="img-name" v-if="$auth.loggedIn">
                    <img :src="$auth.user.image" alt=""/>
                    <p>{{ $auth.user.firstname }} {{ $auth.user.lastname }}</p>
                    <svg class="uk-svg" fill="none" height="24" viewBox="0 0 24 24" width="24"
                         xmlns="http://www.w3.org/2000/svg">
                        +989372044668
                        <path d="M15.25 10.75L12 14.25L8.75 10.75" stroke="#141414" stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"></path>
                    </svg>
                </div>
                <div @click="$store.commit('fromLand', true)" class="login-link" v-else>
                    <nuxt-link to="/auth/signin">
                        <svg class="uk-svg" fill="none" height="24" viewBox="0 0 24 24" width="24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                    d="M15.25 8C15.25 9.79493 13.7949 11.25 12 11.25C10.2051 11.25 8.75 9.79493 8.75 8C8.75 6.20507 10.2051 4.75 12 4.75C13.7949 4.75 15.25 6.20507 15.25 8Z"
                                    stroke="#141414" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5"></path>
                            <path
                                    d="M6.84748 19.25H17.1525C18.2944 19.25 19.174 18.2681 18.6407 17.2584C17.8563 15.7731 16.068 14 12 14C7.93198 14 6.14364 15.7731 5.35921 17.2584C4.82594 18.2681 5.70556 19.25 6.84748 19.25Z"
                                    stroke="#141414" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5"></path>
                        </svg>
                        <span>ورود / ثبت نام</span>
                    </nuxt-link>
                </div>
                <div class="dropdown" v-if="$auth.loggedIn">
                    <ul>
                        <li @click="$store.commit('fromLand', true)">
                            <nuxt-link v-if="$auth.user.level === 1" to="/user/dashboard">
                                <svg class="uk-svg" height="18" viewBox="0 0 18 18" width="18"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                            d="M-23965.711-12088.749a1.1,1.1,0,0,1-1.105-1.1v-3.86a1.1,1.1,0,0,1,1.105-1.1h3.859a1.1,1.1,0,0,1,1.1,1.1v3.86a1.1,1.1,0,0,1-1.1,1.1Zm-9.934,0a1.1,1.1,0,0,1-1.105-1.1v-3.86a1.1,1.1,0,0,1,1.105-1.1h3.863a1.1,1.1,0,0,1,1.1,1.1v3.86a1.1,1.1,0,0,1-1.1,1.1Zm9.934-9.929a1.105,1.105,0,0,1-1.105-1.106v-3.86a1.1,1.1,0,0,1,1.105-1.1h3.859a1.1,1.1,0,0,1,1.1,1.1v3.86a1.1,1.1,0,0,1-1.1,1.106Zm-9.934,0a1.105,1.105,0,0,1-1.105-1.106v-3.86a1.1,1.1,0,0,1,1.105-1.1h3.863a1.1,1.1,0,0,1,1.1,1.1v3.86a1.106,1.106,0,0,1-1.1,1.106Z"
                                            data-name="Path 40041" fill="none" id="Path_40041" stroke="#d9d9d9"
                                            stroke-linecap="round"
                                            stroke-width="2" transform="translate(23977.75 12105.749)"></path>
                                </svg>
                                داشبورد
                            </nuxt-link>
                            <nuxt-link v-if="$auth.user.level === 6" to="/writer/dashboard">
                                <svg class="uk-svg" height="18" viewBox="0 0 18 18" width="18"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                            d="M-23965.711-12088.749a1.1,1.1,0,0,1-1.105-1.1v-3.86a1.1,1.1,0,0,1,1.105-1.1h3.859a1.1,1.1,0,0,1,1.1,1.1v3.86a1.1,1.1,0,0,1-1.1,1.1Zm-9.934,0a1.1,1.1,0,0,1-1.105-1.1v-3.86a1.1,1.1,0,0,1,1.105-1.1h3.863a1.1,1.1,0,0,1,1.1,1.1v3.86a1.1,1.1,0,0,1-1.1,1.1Zm9.934-9.929a1.105,1.105,0,0,1-1.105-1.106v-3.86a1.1,1.1,0,0,1,1.105-1.1h3.859a1.1,1.1,0,0,1,1.1,1.1v3.86a1.1,1.1,0,0,1-1.1,1.106Zm-9.934,0a1.105,1.105,0,0,1-1.105-1.106v-3.86a1.1,1.1,0,0,1,1.105-1.1h3.863a1.1,1.1,0,0,1,1.1,1.1v3.86a1.106,1.106,0,0,1-1.1,1.106Z"
                                            data-name="Path 40041" fill="none" id="Path_40041" stroke="#d9d9d9"
                                            stroke-linecap="round"
                                            stroke-width="2" transform="translate(23977.75 12105.749)"></path>
                                </svg>
                                داشبورد
                            </nuxt-link>
                            <nuxt-link v-if="$auth.user.level === 7" to="/expert/telSupports">
                                <svg class="uk-svg" height="18" viewBox="0 0 18 18" width="18"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                            d="M-23965.711-12088.749a1.1,1.1,0,0,1-1.105-1.1v-3.86a1.1,1.1,0,0,1,1.105-1.1h3.859a1.1,1.1,0,0,1,1.1,1.1v3.86a1.1,1.1,0,0,1-1.1,1.1Zm-9.934,0a1.1,1.1,0,0,1-1.105-1.1v-3.86a1.1,1.1,0,0,1,1.105-1.1h3.863a1.1,1.1,0,0,1,1.1,1.1v3.86a1.1,1.1,0,0,1-1.1,1.1Zm9.934-9.929a1.105,1.105,0,0,1-1.105-1.106v-3.86a1.1,1.1,0,0,1,1.105-1.1h3.859a1.1,1.1,0,0,1,1.1,1.1v3.86a1.1,1.1,0,0,1-1.1,1.106Zm-9.934,0a1.105,1.105,0,0,1-1.105-1.106v-3.86a1.1,1.1,0,0,1,1.105-1.1h3.863a1.1,1.1,0,0,1,1.1,1.1v3.86a1.106,1.106,0,0,1-1.1,1.106Z"
                                            data-name="Path 40041" fill="none" id="Path_40041" stroke="#d9d9d9"
                                            stroke-linecap="round"
                                            stroke-width="2" transform="translate(23977.75 12105.749)"></path>
                                </svg>
                                داشبورد
                            </nuxt-link>
                            <nuxt-link v-if="$auth.user.level === 2 || $auth.user.level === 3 || $auth.user.level === 5"
                                       to="/expert/dashboard">
                                <svg class="uk-svg" height="18" viewBox="0 0 18 18" width="18"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                            d="M-23965.711-12088.749a1.1,1.1,0,0,1-1.105-1.1v-3.86a1.1,1.1,0,0,1,1.105-1.1h3.859a1.1,1.1,0,0,1,1.1,1.1v3.86a1.1,1.1,0,0,1-1.1,1.1Zm-9.934,0a1.1,1.1,0,0,1-1.105-1.1v-3.86a1.1,1.1,0,0,1,1.105-1.1h3.863a1.1,1.1,0,0,1,1.1,1.1v3.86a1.1,1.1,0,0,1-1.1,1.1Zm9.934-9.929a1.105,1.105,0,0,1-1.105-1.106v-3.86a1.1,1.1,0,0,1,1.105-1.1h3.859a1.1,1.1,0,0,1,1.1,1.1v3.86a1.1,1.1,0,0,1-1.1,1.106Zm-9.934,0a1.105,1.105,0,0,1-1.105-1.106v-3.86a1.1,1.1,0,0,1,1.105-1.1h3.863a1.1,1.1,0,0,1,1.1,1.1v3.86a1.106,1.106,0,0,1-1.1,1.106Z"
                                            data-name="Path 40041" fill="none" id="Path_40041" stroke="#d9d9d9"
                                            stroke-linecap="round"
                                            stroke-width="2" transform="translate(23977.75 12105.749)"></path>
                                </svg>
                                داشبورد
                            </nuxt-link>
                        </li>
                        <li class="logout">
                            <a @click="logout">
                                <svg class="uk-svg" height="18" viewBox="0 0 18 18" width="18"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g id="log-out" transform="translate(0.25 0.25)">
                                        <path d="M15.75,8.75l3.862,3.586L15.75,15.922" data-name="Path 12968"
                                              fill="none" id="Path_12968"
                                              stroke="#e93c50" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2"
                                              transform="translate(-2.862 -3.586)"></path>
                                        <path d="M19.853,12h-9.1" data-name="Path 12969" fill="none" id="Path_12969"
                                              stroke="#e93c50"
                                              stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              transform="translate(-3.379 -3.25)">
                                        </path>
                                        <path d="M16.336,4.75H6.957A2.207,2.207,0,0,0,4.75,6.957V18.543A2.207,2.207,0,0,0,6.957,20.75h9.379"
                                              data-name="Path 12970" fill="none" id="Path_12970" stroke="#e93c50"
                                              stroke-linecap="round"
                                              stroke-linejoin="round" stroke-width="2"
                                              transform="translate(-4 -4)"></path>
                                    </g>
                                </svg>
                                خروج
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="middle">
                <ul>
                    <li>
                        <nuxt-link to="/contactus">تماس با ما</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/acceptance">پذیرفته شدگان</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/faq">سوالات متداول</nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="left">
                <nuxt-link to="/">
                    <img alt="" src="@/assets/site/images/new_logo.svg"/>
                </nuxt-link>
            </div>
        </nav>
    </header>
</template>

<script>

export default {
    data() {
        return {
            webinars: [],
            slideIndex: 0,
        };
    },
    async created() {
        const {data} = await this.$axios.get(`v1/webinarBanners`);
        this.webinars = data.webinar;
        setInterval(() => {
            if ((this.webinars.length - 1) > this.slideIndex) {
                this.slideIndex++;
            } else {
                this.slideIndex = 0;
            }
        }, 3000)
    },
    methods: {
        logout() {
            this.$auth.logout();
        },
    },
};

</script>
<style lang="scss" scoped>
@import "@/assets/site/css/mixins";

.webinar-banner {
  object-fit: cover;
  height: 100%
}

.banner {
  object-fit: cover;
  height: 100%
}

.landing-header {
  margin-bottom: 4rem;
  /*padding-left: 4.5rem;*/
  /*padding-right: 4.5rem;*/

  nav {
    @include fbx-ai-center-jc-between;
    border-bottom: 1px solid var(--gray);
    padding: 1.5rem 11vw;

    .right {
      position: relative;

      .img-name {
        cursor: pointer;
        @include fbx-ai-center-jc-start;

        img {
          margin-left: 0.5rem;
          width: 2.5rem;
          object-fit: cover;
          height: 2.5rem;
          border-radius: 50%;
        }

        p {
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--black);
        }

        &:hover + .dropdown {
          opacity: 1;
          z-index: 9999999999;
        }
      }

      .dropdown {
        opacity: 0;
        transition: all 0.3s;
        z-index: 99999;
        margin-top: 0.5rem;
        width: 100%;
        padding: 0.75rem;
        position: absolute;
        background-color: var(--white);
        border: 1px solid #e9e9e9;
        border-radius: 5px;

        ul {
          @include fbx-column-ai-start-jc-start;
          padding: 0;
          list-style-type: none;

          li {
            border-bottom: 1px solid #e9e9e9;
            padding-bottom: 0.5rem;
            margin-bottom: 0.5rem;
            width: 100%;

            a {
              svg {
                width: 0.8rem;
                margin-left: 0.5rem;
                color: #d9d9d9;
              }

              color: var(--black);
              font-size: 0.9rem;
              font-weight: 500;
            }

            &.logout {
              svg {
                color: var(--main-red-color);
              }
            }

            &:last-child {
              border-bottom: inherit;
              padding-bottom: 0;
              margin-bottom: 0;
            }
          }
        }

        &:hover {
          opacity: 1;
          z-index: 9999999999;
        }
      }

      .login-link {
        svg {
          fill: none;
          color: var(--black);
        }

        span {
          font-size: 0.9rem;
          color: var(--black);
          font-weight: 600;
        }
      }
    }

    .middle {
      ul {
        @include fbx-ai-start-jc-start;
        padding: 0;
        list-style-type: none;

        li {
          margin-left: 1rem;
          margin-right: 1rem;

          a {
            font-size: 0.9rem;
            font-weight: 600;
            color: var(--black);
          }
        }
      }
    }

    .left {
      text-align: left;

      img {
        width: 250px;
      }
    }
  }
}

@include mobile-device {

  .webinar-banner {
    object-fit: cover;
    height: 15px;
    margin-top: -10px;
  }

  .banner {
    object-fit: cover;
    height: 20px;
      margin-top: -10px;
  }

  .landing-header {
    margin-bottom: 0;
    padding-left: 0 !important;
    padding-right: 0 !important;

    nav {
      padding: 1rem 0.5rem;

      .right {
        position: relative;

        .img-name {
          @include fbx-ai-center-jc-start;

          img {
            width: 2rem;
            height: 2rem;
          }

          p {
            font-size: 0.75rem;
          }
        }

        .dropdown {
          padding: 0.5rem;

          ul {
            li {
              a {
                svg {
                  width: 0.7rem;
                }

                font-size: 0.75rem;
              }
            }
          }
        }
      }

      .middle {
        display: none;
      }

      .left {
        width: 40%;

        img {
          width: 100%;
        }
      }
    }
  }
}

@include tablet-device {
  .landing-header {
    padding-left: 2rem;
    padding-right: 2rem;
    margin-bottom: 2rem;

    nav {
      padding-top: 1rem;
      padding-bottom: 1rem;

      .right {
        position: relative;

        .img-name {
          @include fbx-ai-center-jc-start;

          img {
            width: 2rem;
            height: 2rem;
          }

          p {
            font-size: 0.75rem;
          }
        }

        .dropdown {
          padding: 0.5rem;

          ul {
            li {
              a {
                svg {
                  width: 0.7rem;
                }

                font-size: 0.75rem;
              }
            }
          }
        }
      }

      .middle {
        ul {
          li {
            margin-left: 0.75rem;
            margin-right: 0.75rem;

            a {
              font-size: 0.75rem;
            }
          }
        }
      }

      .left {
        width: 25%;

        img {
          width: 100%;
        }
      }
    }
  }
}

@include large-device {
  .landing-header {
    nav {
      .left {
        width: 20%;

        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
