<template>
  <div class="consulting__table">
    <div class="uk-overflow-auto">
      <table class="uk-table expert-table text-center">
        <thead>
        <tr>
          <th>#</th>
          <th>تاریخ</th>
          <th style="width: 16%">نام کاربری</th>
          <th>از ساعت</th>
          <th>تا ساعت</th>
          <th style="width: 30%">موضوع</th>
          <th> عملیات</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(monthTel, index) in monthTels" :key="index">
          <td class="counter">{{ index + 1 }}</td>
          <td class="date">{{ monthTel.dayTelFa }}</td>
          <td class="name">
            <template v-if="monthTel.user.length == 0 || monthTel.user == ''"> -----</template>
            <template v-else>
              <div style="display: flex;">
                <div v-if="monthTel.user.hasContract" style="margin-left: 5px">
                  <svg height="20" viewBox="0 0 20 20" width="20"
                       xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <style>
                        .a {
                          fill: #146fe9;
                        }

                        .b {
                          fill: none;
                          stroke: #fff;
                          stroke-linejoin: round;
                          stroke-width: 2px;
                        }
                      </style>
                    </defs>
                    <g transform="translate(-550.5 -1254)">
                      <path class="a"
                            d="M13.758.111a.5.5,0,0,1,.577.239l1.818,3.3a.5.5,0,0,0,.2.2l3.3,1.818a.5.5,0,0,1,.239.577L18.84,9.861a.5.5,0,0,0,0,.278l1.048,3.619a.5.5,0,0,1-.239.577l-3.3,1.818a.5.5,0,0,0-.2.2l-1.818,3.3a.5.5,0,0,1-.577.239L10.139,18.84a.5.5,0,0,0-.278,0L6.242,19.889a.5.5,0,0,1-.577-.239l-1.818-3.3a.5.5,0,0,0-.2-.2L.35,14.335a.5.5,0,0,1-.239-.577L1.16,10.139a.5.5,0,0,0,0-.278L.111,6.242A.5.5,0,0,1,.35,5.665l3.3-1.818a.5.5,0,0,0,.2-.2L5.665.35A.5.5,0,0,1,6.242.111L9.861,1.16a.5.5,0,0,0,.278,0Z"
                            transform="translate(550.5 1254)"/>
                      <path class="b" d="M-19664.293,10788.184l2.582,2.541,5.414-5.33"
                            transform="translate(20220.793 -9523.895)"/>
                    </g>
                  </svg>
                </div>
                <div v-else>
                  <svg v-if="monthTel.user.type === 2"
                       height="30" viewBox="0 0 30 30" width="30"
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
                  <svg v-if="monthTel.user.type === 3"
                       height="30" viewBox="0 0 30 30" width="30"
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
                  <p class="free" v-if="monthTel.user.type === 1">
                    Free
                  </p>
                </div>

                <nuxt-link :to="'/expert/resume/' + monthTel.user.id">
                  <a :class="monthTel.user.type === 2 ? 'user-name-gold' : 'user-name-bronze'">
                    {{ monthTel.user.firstname }} {{ monthTel.user.lastname }}
                  </a>
                </nuxt-link>
<!--                <a v-if="monthTel.user.type === 1" class="user-name-free"-->
<!--                   @click="openUserModal(monthTel.user)"-->
<!--                   uk-toggle-->
<!--                   href="#show-user-tel-support-information-modal">-->
<!--                  {{ monthTel.user.firstname }} {{ monthTel.user.lastname }}-->
<!--                </a>-->
              </div>
            </template>
          </td>
          <td class="date">{{ monthTel.fromTime }}</td>
          <td class="date">{{ monthTel.toTime }}</td>
          <td class="subject">{{ monthTel.advise }}</td>
          <td class="other align-left">
            <template v-if="monthTel.user.length == 0  || monthTel.user == null">
              <a
                  class="delete"
                  v-if="deleting === true && deleteId === monthTel.id"
              >
                چند لحظه صبر کنید
              </a>
              <a class="delete" v-else @click="deleteTelSupport(monthTel.id)">
                حذف جلسه
              </a>
            </template>
            <template v-else>
              <a v-if="$auth.user.level === 3" class="button" style="margin-left: 10px" title="حذف مشاوره"
                 @click="openDeleteSupport(monthTel.id)"
                 href="#toggle-delete-support" uk-toggle>
                حذف مشاوره
              </a>
              <a class="button" style="margin-left: 10px" @click="openUserModal(monthTel.user)"
                 href="#write-comment-modal" uk-toggle title="کامنت">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M12 18.25C15.5 18.25 19.25 16.5 19.25 12C19.25 7.5 15.5 5.75 12 5.75C8.5 5.75 4.75 7.5 4.75 12C4.75 13.0298 4.94639 13.9156 5.29123 14.6693C5.50618 15.1392 5.62675 15.6573 5.53154 16.1651L5.26934 17.5635C5.13974 18.2547 5.74527 18.8603 6.43651 18.7307L9.64388 18.1293C9.896 18.082 10.1545 18.0861 10.4078 18.1263C10.935 18.2099 11.4704 18.25 12 18.25Z"/>
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        d="M9.5 12C9.5 12.2761 9.27614 12.5 9 12.5C8.72386 12.5 8.5 12.2761 8.5 12C8.5 11.7239 8.72386 11.5 9 11.5C9.27614 11.5 9.5 11.7239 9.5 12Z"/>
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        d="M12.5 12C12.5 12.2761 12.2761 12.5 12 12.5C11.7239 12.5 11.5 12.2761 11.5 12C11.5 11.7239 11.7239 11.5 12 11.5C12.2761 11.5 12.5 11.7239 12.5 12Z"/>
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        d="M15.5 12C15.5 12.2761 15.2761 12.5 15 12.5C14.7239 12.5 14.5 12.2761 14.5 12C14.5 11.7239 14.7239 11.5 15 11.5C15.2761 11.5 15.5 11.7239 15.5 12Z"/>
                </svg>
              </a>
              <a class="button"
                 :title="uploadAccess ? (monthTel.user.upload_access ? 'غیر فعال کردن دسترسی آپلود قرارداد' : 'فعالسازی دسترسی آپلود قرارداد') : (!uploadAccess ? 'فعالسازی دسترسی آپلود قرارداد' : 'غیر فعال کردن دسترسی آپلود قرارداد')">
                <svg v-if="monthTel.user.upload_access" width="24" height="24" fill="none"
                     viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M5.75 11.75C5.75 11.1977 6.19772 10.75 6.75 10.75H17.25C17.8023 10.75 18.25 11.1977 18.25 11.75V17.25C18.25 18.3546 17.3546 19.25 16.25 19.25H7.75C6.64543 19.25 5.75 18.3546 5.75 17.25V11.75Z"/>
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M7.75 10.5V9.84343C7.75 8.61493 7.70093 7.29883 8.42416 6.30578C8.99862 5.51699 10.0568 4.75 12 4.75C14 4.75 15.25 6.25 15.25 6.25"/>
                </svg>
                <svg v-else width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M5.75 11.75C5.75 11.1977 6.19772 10.75 6.75 10.75H17.25C17.8023 10.75 18.25 11.1977 18.25 11.75V17.25C18.25 18.3546 17.3546 19.25 16.25 19.25H7.75C6.64543 19.25 5.75 18.3546 5.75 17.25V11.75Z"/>
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M7.75 10.5V10.3427C7.75 8.78147 7.65607 7.04125 8.74646 5.9239C9.36829 5.2867 10.3745 4.75 12 4.75C13.6255 4.75 14.6317 5.2867 15.2535 5.9239C16.3439 7.04125 16.25 8.78147 16.25 10.3427V10.5"/>
                </svg>
              </a>
            </template>

          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cancelId: 0,
      canceling: false,
      deleteId: 0,
      deleting: false,
    };
  },
  computed: {
    monthTels() {
      return this.$store.getters["expert/monthTels"];
    },
    uploadAccess() {
      if (this.$store.getters["expert/uploadAccess"])
        return this.$store.getters["expert/uploadAccess"];
      else
        return null;
    },
  },
  methods: {
    changeUploadAccess(id, uploadAccess) {
      let elements = document.getElementsByClassName('uk-dropdown');
      for (const element of elements) {
        element.classList.remove('uk-open')
      }
      this.$store.commit("expert/SET_SelectedUser", {
        id,
        hasUploadAccess: uploadAccess,
      });
    },
    openDeleteSupport(id) {
      this.$store.commit("telSupports/SET_TelSupportId", id);
    },
    openUserModal(user) {
      this.$store.commit("expert/SET_User", user);
    },
    async deleteTelSupport(id) {
      this.deleting = true;
      this.deleteId = id;
      this.errors = [];
      const deleteTelSupport = await this.$axios.delete(
          "v1/expert/deleteTelSupport/" + id
      );
      if (deleteTelSupport.data.status === 1) {
        this.$toasted.success(deleteTelSupport.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
        this.$store.dispatch("expert/monthTels");
      } else if (deleteTelSupport.data.status === 422) {
        this.errors = deleteTelSupport.data.errors;
        this.$toasted.info(deleteTelSupport.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      } else {
        this.$toasted.error(deleteTelSupport.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      }
      this.deleting = false;
      this.deleteId = 0;
    },
    async cancelTelSupport(id) {
      this.canceling = true;
      this.cancelId = id;
      this.errors = [];
      const cancelTelSupport = await this.$axios.delete(
          "v1/expert/cancelUserTelSupport/" + id
      );
      if (cancelTelSupport.data.status === 1) {
        this.$toasted.success(cancelTelSupport.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
        this.$store.dispatch("expert/monthTels");
      } else if (cancelTelSupport.data.status === 422) {
        this.errors = cancelTelSupport.data.errors;
        this.$toasted.info(cancelTelSupport.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      } else {
        this.$toasted.error(cancelTelSupport.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      }
      this.canceling = false;
      this.cancelId = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/expert/scss/_mixins.scss";

.button {
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

.user-name-gold {
  color: #e2ad42;
}

.user-name-bronze {
  color: #857c6a;
}

.user-name-free {
  color: #A4A69B
}

.free {
  background-color: #A4A69B;
  border-radius: 5px;
  font-size: 12px;
  color: #ffffff;
  margin-left: 5px;
  padding-right: 5px;
  padding-left: 5px;
}

.uk-table thead tr th {
  text-align: right;
}

.consulting__table {
  background-color: var(--white);
  border-radius: 8px;
  @include boxshadow();
  padding: 1.5rem;
}

@include mobile-device {
  .consulting__table {
    padding: 0;

    table {
      td.other {
        white-space: nowrap;
        text-align: right !important;
      }
    }
  }
}

@include tablet-device {
  .consulting__table {
    padding: 0;

    table {
      td.other {
        white-space: nowrap;
        text-align: right !important;
      }
    }
  }
}
</style>
