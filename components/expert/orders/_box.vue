<template>
    <div class="box">
        <div class="box__right">
            <div class="img">
                <img :alt="user.user.name" :src="user.user.image+'?isDark='+$auth.user.darkmode"
                     v-if="user.user.image !== ''"/>
                <img alt="" src="/user_light.svg" v-else-if="!$auth.user.darkmode"/>
                <img alt="" src="/user_dark.svg" v-else/>
                <a @click="seeMore(user.id)" class="see-more">نمایش بیشتر</a>
            </div>
            <div class="name">
                <h3>{{ user.user.firstname }} {{ user.user.lastname }}
                    <svg height="30" v-if="user.user.type === 2" viewBox="0 0 30 30" width="30"
                         xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <style>
                                .a_1 {
                                    fill: #e2ad42;
                                    stroke: #fff;
                                    stroke-width: 3px;
                                }

                                .b_1 {
                                    fill: #fff;
                                }

                                .c_1 {
                                    stroke: none;
                                }

                                .d_1 {
                                    fill: none;
                                }</style>
                        </defs>
                        <g transform="translate(3 3)">
                            <g class="a_1">
                                <rect class="c_1" height="24" rx="12" width="24"/>
                                <rect class="d_1" height="27" rx="13.5" width="27" x="-1.5" y="-1.5"/>
                            </g>
                            <path class="b_1"
                                  d="M-16177.187-20535.531a.634.634,0,0,1-.643-.631.633.633,0,0,1,.643-.623h9.494a.635.635,0,0,1,.643.623.637.637,0,0,1-.643.631Zm-.059-2.213a.674.674,0,0,1-.672-.551l-.986-5.584a.667.667,0,0,1,.262-.643.689.689,0,0,1,.707-.064l3.148,1.754,1.619-4.273a.715.715,0,0,1,1.188,0l1.615,4.273,3.148-1.754a.681.681,0,0,1,.7.064.658.658,0,0,1,.266.643l-.986,5.584a.674.674,0,0,1-.668.551Z"
                                  transform="translate(16184.579 20553.445)"/>
                        </g>
                    </svg>
                    <svg height="30" v-else-if="user.user.type === 3" viewBox="0 0 30 30" width="30"
                         xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <style>
                                .a_2 {
                                    fill: #857c6a;
                                    stroke: #fff;
                                    stroke-width: 3px;
                                }

                                .b_2, .c_2 {
                                    fill: #fff;
                                }

                                .b_2 {
                                    opacity: 0;
                                }

                                .d_2 {
                                    stroke: none;
                                }

                                .e_2 {
                                    fill: none;
                                }
                            </style>
                        </defs>
                        <g transform="translate(3 3)">
                            <g class="a_2">
                                <rect class="d_2" height="24" rx="12" width="24"/>
                                <rect class="e_2" height="27" rx="13.5" width="27" x="-1.5" y="-1.5"/>
                            </g>
                            <g transform="translate(5.898 -40.235)">
                                <rect class="b_2" height="18.205" transform="translate(-3 44.133)" width="18.205"/>
                                <path class="c_2"
                                      d="M330.324,129.108c-.031.119-.06.238-.094.355a2.178,2.178,0,0,1-2.038,1.552,3.248,3.248,0,0,1-.383,0c-.127-.013-.177.037-.2.156a2.824,2.824,0,0,1-.08.293.485.485,0,0,0,.081.009,2.113,2.113,0,0,1,1.223.306c.246.141.486.291.724.444a.483.483,0,0,1,.166.705c-.179.292-.357.587-.556.865a2.156,2.156,0,0,1-2.908.515c-.147-.1-.3-.183-.447-.278a.132.132,0,0,0-.172.007c-.174.124-.354.24-.543.367.035.024.061.046.09.064a2.1,2.1,0,0,1,1.006,1.476c.053.3.092.607.128.912a.495.495,0,0,1-.463.582c-.285.036-.569.076-.855.107a2.14,2.14,0,0,1-2.307-1.614,9.785,9.785,0,0,1-.165-1.087.481.481,0,0,1,.338-.554q.591-.246,1.183-.488a4.31,4.31,0,0,0,2.555-2.683,3.981,3.981,0,0,0,.161-1.856,28.387,28.387,0,0,0-.651-3.125,2.192,2.192,0,0,1,1.517-2.6q.45-.121.905-.224a.455.455,0,0,1,.549.295,7.987,7.987,0,0,1,.277,1.186,2.163,2.163,0,0,1-1.727,2.358c-.26.057-.258.063-.2.326.038.183.075.367.114.564a.783.783,0,0,0,.085-.053,2.121,2.121,0,0,1,1.325-.474c.243-.008.487.007.73-.006a.568.568,0,0,1,.63.382Z"
                                      transform="translate(-315.838 -77.191)"/>
                                <path class="c_2"
                                      d="M-52,127.845a.565.565,0,0,1,.359-.358.27.27,0,0,1,.069-.017c.411.007.822,0,1.231.029a1.9,1.9,0,0,1,1.03.443c.021.017.045.03.084.055.056-.268.111-.522.158-.778,0-.02-.049-.063-.082-.074-.178-.057-.363-.1-.537-.162A2.164,2.164,0,0,1-51,124.464c.068-.283.137-.566.216-.846a.467.467,0,0,1,.216-.3.467.467,0,0,1,.365-.048,7.849,7.849,0,0,1,1.193.34,2.122,2.122,0,0,1,1.22,2.446c-.169.783-.355,1.563-.522,2.346a6.043,6.043,0,0,0-.154,1.758,4.144,4.144,0,0,0,.932,2.279,4.57,4.57,0,0,0,2.039,1.413c.313.118.62.252.929.381a.5.5,0,0,1,.359.6,5.138,5.138,0,0,1-.23,1.28,2.117,2.117,0,0,1-1.539,1.343,3.047,3.047,0,0,1-1.176-.013c-.134-.017-.269-.034-.4-.054a.47.47,0,0,1-.327-.16.47.47,0,0,1-.115-.345,10.377,10.377,0,0,1,.213-1.3,1.933,1.933,0,0,1,.909-1.158l.1-.066c-.03-.024-.052-.045-.076-.06-.133-.087-.273-.168-.4-.263a.173.173,0,0,0-.231-.012,6.6,6.6,0,0,1-.755.436,2.14,2.14,0,0,1-2.645-.767c-.178-.263-.346-.537-.508-.811a.463.463,0,0,1,.123-.631c.349-.223.706-.434,1.072-.625a1.68,1.68,0,0,1,.884-.169c.031,0,.063,0,.112,0-.043-.157-.079-.306-.128-.45-.008-.024-.072-.034-.112-.037a6.85,6.85,0,0,1-.868-.065,2.147,2.147,0,0,1-1.663-1.732.952.952,0,0,0-.034-.113Z"
                                      transform="translate(49.719 -77.15)"/>
                                <path class="c_2"
                                      d="M136.78,203.694l.148-.765c.081-.419.16-.838.246-1.256a.186.186,0,0,0-.068-.2c-.479-.441-.952-.886-1.429-1.329a.5.5,0,0,1-.18-.543.482.482,0,0,1,.45-.352c.6-.072,1.2-.153,1.794-.216a.423.423,0,0,0,.407-.282c.237-.557.508-1.1.761-1.651a.492.492,0,0,1,.458-.327.487.487,0,0,1,.475.319c.278.6.56,1.2.837,1.8a.165.165,0,0,0,.148.111c.665.079,1.33.166,2,.247a.478.478,0,0,1,.433.341.5.5,0,0,1-.163.54c-.482.448-.963.9-1.447,1.344a.184.184,0,0,0-.064.2c.13.649.252,1.3.38,1.949a.481.481,0,0,1-.193.527.5.5,0,0,1-.564.008c-.571-.318-1.144-.634-1.713-.956a.2.2,0,0,0-.229,0q-.855.481-1.715.953a.5.5,0,0,1-.768-.467Z"
                                      transform="translate(-133.264 -148.909)"/>
                            </g>
                        </g>
                    </svg>
                    <svg height="20" v-if="user.is_accepted" viewBox="0 0 20 20" width="20"
                         xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <style>.a {
                                fill: #146fe9;
                            }

                            .b {
                                fill: none;
                                stroke: #fff;
                                stroke-linejoin: round;
                                stroke-width: 2px;
                            }</style>
                        </defs>
                        <g transform="translate(-550.5 -1254)">
                            <path class="a"
                                  d="M13.758.111a.5.5,0,0,1,.577.239l1.818,3.3a.5.5,0,0,0,.2.2l3.3,1.818a.5.5,0,0,1,.239.577L18.84,9.861a.5.5,0,0,0,0,.278l1.048,3.619a.5.5,0,0,1-.239.577l-3.3,1.818a.5.5,0,0,0-.2.2l-1.818,3.3a.5.5,0,0,1-.577.239L10.139,18.84a.5.5,0,0,0-.278,0L6.242,19.889a.5.5,0,0,1-.577-.239l-1.818-3.3a.5.5,0,0,0-.2-.2L.35,14.335a.5.5,0,0,1-.239-.577L1.16,10.139a.5.5,0,0,0,0-.278L.111,6.242A.5.5,0,0,1,.35,5.665l3.3-1.818a.5.5,0,0,0,.2-.2L5.665.35A.5.5,0,0,1,6.242.111L9.861,1.16a.5.5,0,0,0,.278,0Z"
                                  transform="translate(550.5 1254)"/>
                            <path class="b" d="M-19664.293,10788.184l2.582,2.541,5.414-5.33"
                                  transform="translate(20220.793 -9523.895)"/>
                        </g>
                    </svg>
                </h3>
                <p v-if="user.acceptance !== null && user.acceptance.phone != null">{{ user.acceptance.phone }}</p>
                <p v-else>{{ user.user.phone }}</p>
                <p class="latin-font">{{ user.user.email }}</p>
                <p v-if="user.type==='motivation'">انگیزه نامه</p>
                <p v-else>رزومه</p>
            </div>
        </div>
        <client-only>
            <div class="box__left">
                <div class="options">
                    <nuxt-link v-if="user.type === 'resume'" :to="`/expert/orders/resume/` + user.resume.id">
                        <ListItemResume/>
                        <span>اطلاعات</span>
                    </nuxt-link>
                    <nuxt-link v-if="user.type === 'motivation'"
                               :to="`/expert/orders/motivation/` + user.motivation.id">
                        <ListItemResume/>
                        <span>اطلاعات</span>
                    </nuxt-link>
                    <a v-if="user.type==='motivation'" @click="downloadFile(user.motivation.file)">
                        <Download/>
                        <span>دانلود</span>
                    </a>
                    <a v-if="user.type==='resume'" @click="downloadFile(user.resume.file)">
                        <Download/>
                        <span>دانلود</span>
                    </a>
                    <template v-if="$auth.user.level != 2">
                        <a @click="acceptFile(user.modelId, user.type)" href="#accept-file-modal" uk-toggle>
                            <Check/>
                            <span>تایید</span>
                        </a>
                        <a @click="declineFile(user.modelId, user.type)" href="#decline-file-modal" uk-toggle>
                            <Close/>
                            <span>رد</span>
                        </a>
                    </template>
                    <template v-else>
                        <a v-if="user.type === 'resume'">
                            <h3 style="color:var(--main-color) ;text-align: center">
                                وضعیت
                            </h3>
                            <span v-if="userEdit">ادیت کاربر</span>
                            <span v-else-if="user.resume.status==1">در انتظار بررسی</span>
                            <span v-else-if="user.resume.status==2">آماده شده</span>
                            <span v-else-if="user.resume.status==3">ادیت ادمین</span>
                            <span v-else-if="user.resume.status==4">ادیت کاربر</span>
                            <span v-else-if="user.resume.status==5">تایید کارشناس</span>
                            <span v-else-if="user.resume.status==6">رد کارشناس</span>
                            <span v-else-if="user.resume.status==7">آپلود نگارنده</span>
                        </a>
                        <a v-if="user.type === 'motivation'">
                            <h5 style="color:var(--main-color) ;text-align: center;font-size: 15pt !important;">
                                وضعیت
                            </h5>
                            <span v-if="userEdit">ادیت کاربر</span>
                            <span v-else-if="user.motivation.status==1">درخواست تازه</span>
                            <span v-else-if="user.motivation.status==7">آپلود نگارنده</span>
                            <span v-else-if="user.motivation.status==2">آماده شده</span>
                            <span v-else-if="user.motivation.status==3">ادیت از سمت ادمین</span>
                            <span v-else-if="user.motivation.status==4">ادیت از سمت کاربر</span>
                            <span v-else-if="user.motivation.status==5">تایید کارشناس</span>
                            <span v-else-if="user.motivation.status==6">رد کارشناس</span>
                        </a>
                    </template>
                </div>
                <div class="filter">
                    <div class="uk-grid">
                        <template v-if="user.type == 'motivation'">
                            <div class="uk-width-1-3" v-if="user.type === 'motivation' && user.motivation.status==5">
                                <a class="see-more" @click="userSelectedMotivation=user" style="color:inherit">ثبت
                                    انگیزه نامه</a>
                            </div>

                            <div v-if="user.type == 'motivation' && user.motivation.status==5"
                                 :class="user.type == 'motivation' && user.motivation.status==5?'uk-width-1-3':'uk-width-1-2'">
                                <a class="see-more" @click="userSelected=user">رد از سمت کاربر</a>
                            </div>
                            <div :class="user.type == 'motivation' && user.motivation.status==5?'uk-width-1-3':'uk-width-1-1'">
                                <div class="custom-select">
                                    <div class="select-selected">
                                        <p v-if="user.user.category_id == 0">دسته بندی نشده</p>
                                        <p v-else>
                                            {{
                                            categories.filter((item) => item.id == user.user.category_id)[0].title
                                            }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <template v-else-if="user.type == 'resume'">
                            <div class="uk-width-1-2" v-if="user.type == 'resume' && user.resume.status==5">
                                <a class="see-more" @click="userSelectedResume=user" style="color:inherit">ثبت رزومه</a>
                            </div>
                            <div :class="user.type == 'resume' && user.resume.status==5?'uk-width-1-2':'uk-width-1-1'">
                                <div class="custom-select">
                                    <div class="select-selected">
                                        <p v-if="user.user.category_id == 0">دسته بندی نشده</p>
                                        <p v-else>
                                            {{
                                            categories.filter((item) => item.id == user.user.category_id)[0].title
                                            }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </template>

                    </div>
                </div>
            </div>
        </client-only>
        <div :id="user.id" class="watch-more">
            <template v-if="user.acceptance === null">
                <div>
                    <p><span>مقطع درخواست شده کاربر</span> <span>-----</span></p>
                    <p><span>معدل مقطع قبل</span> <span>-----</span></p>
                </div>
                <div>
                    <p><span>رشته مقطع قبل</span> <span>-----</span></p>
                    <p><span>وضعیت زبان</span> <span>-----</span></p>
                </div>
                <div>
                    <p><span>زبان مورد علاقه</span> <span>-----</span></p>
                    <p><span>مدرک زبان</span> <span>-----</span></p>
                </div>
            </template>
            <template v-else>
                <div>
                    <p>
                        <span>مقطع درخواست شده کاربر</span>
                        <span>{{ user.acceptance.admittance }}</span>
                    </p>
                    <p>
                        <span>معدل مقطع قبل</span>
                        <span v-if="user.acceptance.admittance === 'کالج'">{{
                            user.acceptance.diploma_grade_average
                            }}</span>

                        <span v-else-if="user.acceptance.admittance === 'لیسانس'">
                            {{
                            user.acceptance.diploma_grade_average
                            }}
                        </span>

                        <span v-else-if="user.acceptance.admittance === 'ارشد'">
                            {{
                            user.acceptance.average_license
                            }}
                        </span>
                    </p>
                </div>
                <div>
                    <p>
                        <span>رشته مقطع قبل</span>
                        <span v-if="user.acceptance.admittance === 'کالج'">{{
                            user.acceptance.pre_university_field
                            }}</span>

                        <span v-if="user.acceptance.admittance === 'لیسانس'">{{
                            user.acceptance.pre_university_field
                            }}</span>

                        <span v-if="user.acceptance.admittance === 'ارشد'">{{
                            user.acceptance.field_license
                            }}</span>
                    </p>
                    <p>
                        <span>وضعیت زبان</span>
                        <span>{{ user.acceptance.license_language }}</span>
                    </p>
                </div>
                <div>
                    <p>
                        <span>زبان مورد علاقه</span>
                        <span>{{ user.acceptance.language_favor }}</span>
                    </p>
                    <p>
                        <span>مدرک زبان</span>
                        <span>{{ user.acceptance.what_grade_language }}</span>
                    </p>
                </div>
            </template>
        </div>
        <!--              modal-->
        <DeclineUser @changeStatus="changeStatusUser" @falseUserSelected="closeModal" :data="userSelected"/>
        <ReMotivation @closeMotiveModal="closeMotiveModal" :data="userSelectedMotivation"/>
        <ReResume @closeResumeModal="closeResumeModal" :data="userSelectedResume"/>
        <!--              modal-->
    </div>
</template>

<script>
import DeclineUser from "@/components/expert/orders/modal/_decline-user.vue";
import ReMotivation from "@/components/expert/orders/modal/_reMotivation.vue";
import ReResume from "@/components/expert/orders/modal/_reResume.vue"
import ListItemResume from "@/components/svg/listItem-resume.vue";
import ListItemUploads from "@/components/svg/listItem-uploads.vue";
import ListItemUniversities from "@/components/svg/listItem-universities.vue";
import Close from "@/components/svg/close.vue";
import Check from "@/components/svg/check.vue";
import Download from "@/components/svg/download.vue";

export default {
    props: ["user"],
    components: {
        DeclineUser,
        ReMotivation,
        ListItemResume,
        ListItemUploads,
        ListItemUniversities,
        Close,
        Check,
        Download,
        ReResume
    },
    data() {
        return {
            userSelectedMotivation: null,
            userSelectedResume: null,
            userSelected: null,
            seeMoreStatus: false,
            errors: [],
            selectShow: false,
            userEdit: false,
        };
    },

    computed: {
        categories() {
            return this.$store.getters["expert/categories"];
        },
    },
    methods: {
        async downloadFile(id) {
            try {
                const parts = id.split('/');
                let lastPartOfId = parts[parts.length - 1];
                const response = await this.$axios.get('v1/expert/getWriterFile/'+lastPartOfId, {
                    responseType: 'blob' // Specify the response type as blob to handle binary data
                });
                // Create a blob URL for the downloaded file
                const url = window.URL.createObjectURL(new Blob([response.data]));
                // Create a link element and click on it to trigger the file download
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download',lastPartOfId); // Specify the filename
                document.body.appendChild(link);
                link.click();

                // Clean up
                window.URL.revokeObjectURL(url);
            } catch (error) {
                console.error('Error downloading file:', error);
                this.$toasted.info('مشکلی رخ داده است، لینک دانلود وجود ندارد و یا اتصال اینترنت شما قطع است !', {
                    position: "bottom-left",
                    duration: 5000,
                });
            }
        },
        closeModal(childValue) {
            this.userSelected = childValue;
        },
        closeMotiveModal(childValue) {
            this.userSelectedMotivation = childValue;
        },
        closeResumeModal(childValue) {
            this.userSelectedResume = childValue;
        },
        changeStatusUser() {
            this.userEdit = true;
        },
        outSide() {
            this.selectShow = false;
        },
        seeMore(id) {
            if (this.seeMoreStatus === false) {
                this.seeMoreStatus = true;
                const item = document.getElementById(id);
                item.classList.add("active");
            } else {
                this.seeMoreStatus = false;
                const item = document.getElementById(id);
                item.classList.remove("active");
            }
        },
        acceptFile(id, type) {
            this.$store.commit('expert/type', this.user.type)
            this.$store.commit('expert/dataId', this.user.modelId)
        },
        declineFile(id, type) {
            this.$store.commit('expert/type', this.user.type)
            this.$store.commit('expert/dataId', this.user.modelId)
        },
    },
};
</script>

<style lang="scss" scoped>
@import "~/assets/expert/scss/_mixins.scss";

.custom-select {
  width: 100%;
  position: relative;
}

.select-selected {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  border-radius: 5px;
  color: var(--black);
  font-size: 0.8rem;
  padding: 0.6rem 1rem;
  border: 1px solid var(--gray);
  cursor: pointer;
  user-select: none;
  //margin-right: 130px;
}

/*style items (options):*/
.select-items {
  width: 85%;
  border: 1px solid #e4e3e1;
  border: 1px solid var(--gray);
  padding-right: 1rem;
  padding-left: 1rem;
  position: absolute;
  background-color: #fff;
  background-color: var(--white);
  margin-top: 0.5rem;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
  border-radius: 5px;
  max-height: 200px;
  overflow-y: auto;
}

.select-items div {
  cursor: pointer;
  color: var(--black);
  font-size: 0.8rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--gray);

  &:last-child {
    border-bottom: 0;
  }
}

/*hide the items when the select box is closed:*/
.select-hide {
  display: none;
}

.rotate {
  transform: rotateZ(180deg);
}

.box {
  @include fbx-ai-start-jc-between;
  flex-wrap: wrap;
  @include boxshadow();
  padding: 3rem 1.5rem;
  border-radius: 8px;
  background-color: var(--white);
  margin-bottom: 2rem;
  position: relative;

  &__right {
    @include fbx-ai-start-jc-start;
    width: 42%;

    .img {
      margin-left: 3rem;
      @include fbx-column-ai-start-jc-start;
      align-items: center;

      img {
        border-radius: 50%;
        width: 7rem;
        height: 7rem;
      }

      .see-more {
        margin-top: 1.5rem;
        padding: 0.5rem;
        border-radius: 5px;
        border: 1px solid var(--gray);
        font-size: 0.8rem;
        color: var(--black);
        transition: all 0.3s;

        &:hover {
          background-color: var(--light-main-color);
          border-color: var(--light-main-color);
          color: #2b2827;
        }
      }
    }

    .name {
      width: 60%;

      h3 {
        font-size: 1rem;
        font-weight: bold;
        color: var(--black);
        margin-bottom: 1rem;
      }

      p {
        margin-bottom: 0.5rem;
        font-size: 0.9rem;
        color: var(--text-gray);
      }

      hr {
        border-color: var(--gray);
      }

      .write-comment {
        font-size: 0.8rem;
        color: var(--text-gray);
      }
    }
  }

  &__left {
    width: 56%;

    .options {
      @include fbx-ai-start-jc-between;

      a {
        align-self: stretch;
        border: 1px solid var(--gray);
        border-radius: 5px;
        width: calc(19% - 1.75rem);
        padding: 0.75rem;
        @include fbx-column-ai-start-jc-start;
        flex-wrap: wrap;
        align-items: center;
        text-align: center;
        transition: all 0.3s;

        svg {
          width: 2.2rem;
          margin-bottom: 0.5rem;
          fill: none;
          color: var(--main-color);
        }

        span {
          margin-top: auto;
          color: var(--black);
          font-size: 0.8rem;
          line-height: 1.5rem;
        }

        &:hover {
          background-color: rgba(#e4e3e1, 0.45);
        }
      }
    }

    .filter {
      width: 100%;
      margin-top: 2rem;

      .uk-grid {
        margin-left: unset;
      }

      .see-more {
        display: block;
        width: 100%;
        color: red;
        font-size: 10pt;
        text-align: center;
      }

      .see-more:hover {
        color: #000 !important;
      }

      .select-selected {
        width: 100%;
      }

      @include fbx-ai-start-jc-start;
      justify-content: flex-end;

      form {
        width: 100%;
        @include fbx-ai-center-jc-end;

        .custom-select {
          width: 40%;

          select {
            cursor: pointer;
            width: 100%;
            border: 1px solid var(--gray);
            border-radius: 5px;
            padding: 0.75rem;
            color: var(--black);
            background-color: var(--white);
            transition: all 0.3s;
          }

          select:focus {
            border: 1px solid var(--main-color);
            outline: 0;
          }

          .select-selected {
            background-color: var(--white);
          }
        }
      }

      a {
        //margin-right: 1rem;
        padding: 0.5rem;
        border: 1px solid var(--gray);
        border-radius: 5px;
        transition: all 0.3s;

        svg {
          transition: all 0.3s;
          width: 2rem;
          fill: none;
          color: var(--black);
        }

        &:hover {
          svg {
            color: #2b2827;
          }

          background-color: var(--light-main-color);
        }
      }
    }
  }

  .watch-more {
    width: 100%;
    background-color: var(--inner-background-color);
    border-radius: 8px;
    @include fbx-ai-start-jc-between;
    flex-wrap: wrap;
    overflow: hidden;
    //display: none;
    transition: max-height 0.4s, margin-top 0.4s;
    max-height: 0;

    div {
      @include fbx-column-ai-start-jc-start;
      padding: 0 1.5rem 0 1.5rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
      width: 28%;
      border-left: 1px solid var(--gray);

      p {
        width: 100%;
        @include fbx-ai-start-jc-between;
        margin-bottom: 0.5rem;
        margin-top: 0.5rem;
        color: var(--black);
        font-weight: 500;
        font-size: 0.8rem;

        span:first-child {
          //width: 66%;
        }

        span:last-child {
          //width: 30%;
        }
      }

      &:last-child {
        border-left: 0;
      }
    }

    &.active {
      margin-top: 2rem;
      max-height: 10rem;
      overflow: inherit;
    }
  }

  .uk-inline {
    position: absolute;
    left: 0.5rem;
    top: 0.5rem;

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
      min-width: 150px;

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
}

@include mobile-device {
  .select-selected {
    margin-right: 0;
    width: 85%;
  }
  .box {
    padding: 1rem;
    margin-bottom: 1.5rem;

    &__right {
      width: 100%;
      margin-bottom: 1.5rem;
      @include fbx-ai-start-jc-between;

      .img {
        margin-left: 0;

        img {
          width: 4rem;
          height: 4rem;
        }

        .see-more {
          margin-top: 1rem;
          padding: 0.5rem;
          font-size: 0.75rem;
        }
      }

      .name {
        h3 {
          font-size: 0.9rem;
        }

        p {
          font-size: 0.8rem;
        }

        .write-comment {
          font-size: 0.75rem;
        }
      }
    }

    &__left {
      width: 100%;

      .options {
        @include fbx-ai-start-jc-start;
        overflow-x: auto;
        margin-left: -0.5rem;
        margin-right: -0.5rem;

        a {
          margin-left: 0.5rem;
          margin-right: 0.5rem;
          width: calc(33.33% - 1rem);
          min-width: calc(33% - 1rem);
          padding: 0.5rem;

          svg {
            width: 2rem;
          }

          span {
            font-size: 0.75rem;
          }
        }
      }

      .filter {
        margin-top: 1rem;
        justify-content: flex-start;

        form {
          width: 80%;
          justify-content: flex-start;

          .custom-select {
            width: 100%;

            select {
              font-size: 0.75rem;
            }
          }
        }
      }
    }

    .watch-more {
      div {
        padding: 0 1rem 0 1rem;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        width: 100%;
        border-left: 0;

        p {
          margin-bottom: 0.5rem;
          margin-top: 0.5rem;
          font-size: 0.75rem;
        }
      }

      &.active {
        margin-top: 1rem;
        max-height: inherit;
      }
    }
  }
}

@include tablet-device {
  .box {
    padding: 1rem;
    margin-bottom: 1.5rem;

    &__right {
      width: 100%;
      margin-bottom: 1.5rem;

      .img {
        img {
          width: 5rem;
          height: 5rem;
        }

        .see-more {
          margin-top: 1rem;
          padding: 0.5rem;
          font-size: 0.75rem;
        }
      }

      .name {
        h3 {
          font-size: 0.9rem;
        }

        p {
          font-size: 0.8rem;
        }

        .write-comment {
          font-size: 0.75rem;
        }
      }
    }

    &__left {
      width: 100%;

      .options {
        @include fbx-ai-start-jc-start;
        overflow-x: auto;
        margin-left: -0.5rem;
        margin-right: -0.5rem;

        a {
          margin-left: 0.5rem;
          margin-right: 0.5rem;
          width: calc(20% - 1rem);
          min-width: calc(20% - 1rem);
          padding: 0.5rem;

          svg {
            width: 2rem;
          }

          span {
            font-size: 0.75rem;
          }
        }
      }

      .filter {
        margin-top: 1rem;
        justify-content: flex-start;

        form {
          width: 40%;
          justify-content: flex-start;

          .custom-select {
            width: 100%;

            select {
              font-size: 0.75rem;
            }
          }
        }
      }
    }

    .watch-more {
      div {
        padding: 0 1rem 0 1rem;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        width: 100%;
        border-left: 0;

        p {
          margin-bottom: 0.5rem;
          margin-top: 0.5rem;
          font-size: 0.75rem;
        }
      }

      &.active {
        margin-top: 1rem;
        max-height: inherit;
      }
    }
  }
}
</style>
