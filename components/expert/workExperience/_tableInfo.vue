<template>
    <div class="consulting__table">
        <div class="uk-overflow-auto">
            <table class="uk-table expert-table text-center">
                <thead>
                <tr>
                    <th>#</th>
                    <th style="width: 16%">نام کاربری</th>
                    <th style="width: 30%">موضوع</th>
                    <th>تاریخ</th>
                    <th>از ساعت</th>
                    <th>تا ساعت</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in workExperience" :key="index">
                    <td class="counter">{{ index + 1 }}</td>
                    <td class="name">
                        <template>
                            <div style="display: flex;">
                                <svg v-if="item.type === 2" height="30" viewBox="0 0 30 30" width="30"
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
                                            }
                                        </style>
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
                                <svg v-if="item.type === 3" height="30" viewBox="0 0 30 30" width="30"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <style>
                                            .a_2 {
                                                fill: #857c6a;
                                                stroke: #fff;
                                                stroke-width: 3px;
                                            }

                                            .b_2,
                                            .c_2 {
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
                                            <rect class="b_2" height="18.205" transform="translate(-3 44.133)"
                                                  width="18.205"/>
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
                                <svg v-if="item.upload_access" height="20" viewBox="0 0 20 20" width="20"
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
                                <a href="#" class="user-name" style="margin-right: 5px">
                                    {{ item.firstname }} {{ item.lastname }}
                                </a>
                            </div>
                        </template>
                    </td>
                    <td class="subject">{{ item.title }}</td>
                    <td class="date">{{ item.date }}</td>
                    <td class="date">{{ item.from_time }}</td>
                    <td class="date">{{ item.to_time }}</td>
                </tr>
                </tbody>
            </table>
        </div>

        <client-only>
            <infinite-loading @infinite="infiniteHandler" spinner="bubbles"
                              v-if="workExperienceCount !== workExperience.length && workExperience.length !== 0"></infinite-loading>
        </client-only>
    </div>
</template>

<script>
export default {
    computed: {
        workExperience() {
            return this.$store.getters["expert/workExperience"];
        },
        workExperienceCount() {
            return this.$store.getters["expert/workExperienceCount"];
        },
        filterForm() {
            return this.$store.getters["expert/filterForm"];
        },
    },
    methods: {

        async infiniteHandler($state) {
            await this.$axios
                .post(`v1/expert/workExperience`, {
                    ...this.filterForm,
                    take: this.workExperience ? this.workExperience.length + 10 : 10,
                })
                .then((res) => {
                    if (res.data && res.data.history) {
                        if (res.data.history.length) {
                            this.$store.commit("expert/SET_WorkExperience", res.data.history);
                            $state.loaded();
                        } else {
                            $state.complete();
                        }
                    } else {

                        $state.complete();

                    }
                });
        },
    },
};
</script>

<style lang="scss" scoped>
@import "~/assets/expert/scss/_mixins.scss";

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
