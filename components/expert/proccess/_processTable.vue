<template>
  <div class="process__table">
    <div class="uk-overflow-auto">
      <table class="uk-table expert-table">
        <thead>
          <tr class="uk-table-middle">
            <th class="name"></th>
            <th class="first-part">شماره تماس</th>
            <th class="first-part">رشته تحصیلی</th>
            <th class="first-part">مقطع</th>
            <th class="first-part">معدل</th>
            <th class="first-part">مدرک زبان</th>
            <th class="first-part">کارشناس</th>
            <th class="first-part">پیگیری بعدی</th>
            <th class="first-part">فاصله تا پیگیری بعدی</th>
            <th class="first-part">توضیحات</th>
            <th class="first-part">قدم بعدی</th>
            <th class="second-part">ارسال قرارداد</th>
            <th class="second-part">امضای قرارداد</th>
            <th class="second-part">مدرک زبان</th>
            <th class="second-part">ترجمه</th>
            <th class="second-part">تایید سفارت</th>
            <th class="second-part">آپلود مدارک</th>
            <th class="second-part">بررسی مدارک</th>
            <th class="second-part">نگارش رزومه</th>
            <th class="second-part">نگارش انگیزه نامه</th>
            <th class="second-part">لیست دانشگاه ها</th>
            <th class="second-part">پست مدارک</th>
            <th class="second-part">تسویه حساب</th>
            <th class="second-part">پیشرفت</th>
            <template v-for="index in universitiesCount">
              <th class="third-part latin-font uni-name" :key="index">
                Uni-{{ index }}
              </th>
              <th class="third-part latin-font deadline" :key="index">
                Deadline
              </th>
            </template>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(process, index) in processes" :key="index">
            <td
              class="name"
              @click="selectProcess(process)"
              uk-toggle="target: #edit-process-modal"
            >
              <a>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="uk-svg"
                >
                  <path
                    d="M4.75 19.25L9 18.25L18.2929 8.95708C18.6834 8.56655 18.6834 7.93339 18.2929 7.54286L16.4571 5.70708C16.0666 5.31655 15.4334 5.31655 15.0429 5.70708L5.75 15L4.75 19.25Z"
                    stroke="#141414"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M19.25 19.25H13.75"
                    stroke="#141414"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
              <a class="user-name">
                {{ process.user.firstname }} {{ process.user.lastname }}
              </a>
            </td>
            <td class="phone" v-if="process.user.mobile === null">
              {{ process.phone }}
            </td>
            <td class="phone" v-else>{{ process.user.mobile }}</td>
            <td v-if="process.admittance === 'ارشد'">
              {{ process.field_license }}
            </td>
            <td v-else>{{ process.field_grade }}</td>
            <td>{{ process.admittance }}</td>
            <td v-if="process.admittance === 'ارشد'">
              {{ process.average_license }}
            </td>
            <td v-else>{{ process.diploma_grade_average }}</td>
            <td>{{ process.what_grade_language }}</td>
            <td>
              {{ process.expert.firstname }} {{ process.expert.lastname }}
            </td>
            <td>{{ process.process.next_tracking }}</td>
            <td>{{ process.process.time_to_next_tracking }}</td>
            <td>{{ process.process.text }}</td>
            <td>{{ process.process.next_step }}</td>
            <td class="second-part">
              <a
                v-bind:class="
                  process.process.contract_sent === 1 ? 'active' : ''
                "
                @click="changeContractSent(process.process, process.userId)"
              ></a>
            </td>
            <td class="second-part">
              <a
                v-bind:class="
                  process.process.contract_sign === 1 ? 'active' : ''
                "
                @click="changeContractSign(process.process, process.userId)"
              ></a>
            </td>
            <td class="second-part">
              <a
                v-bind:class="
                  process.process.language_degree === 1 ? 'active' : ''
                "
                @click="changeLanguageDegree(process.process, process.userId)"
              ></a>
            </td>
            <td class="second-part">
              <a
                v-bind:class="process.process.translate === 1 ? 'active' : ''"
                @click="changeTranslate(process.process, process.userId)"
              ></a>
            </td>
            <td class="second-part">
              <a
                v-bind:class="
                  process.process.embassy_approve === 1 ? 'active' : ''
                "
                @click="changeEmbassyApprove(process.process, process.userId)"
              ></a>
            </td>
            <td class="second-part">
              <a
                v-bind:class="
                  process.process.document_upload === 1 ? 'active' : ''
                "
                @click="changeDocumentUpload(process.process, process.userId)"
              ></a>
            </td>
            <td class="second-part">
              <a
                v-bind:class="
                  process.process.document_check === 1 ? 'active' : ''
                "
                @click="changeDocumentCheck(process.process, process.userId)"
              ></a>
            </td>
            <td class="second-part">
              <a
                v-bind:class="process.process.resume === 1 ? 'active' : ''"
                @click="changeResume(process.process, process.userId)"
              ></a>
            </td>
            <td class="second-part">
              <a
                v-bind:class="process.process.motivation === 1 ? 'active' : ''"
                @click="changeMotivation(process.process, process.userId)"
              ></a>
            </td>
            <td class="second-part">
              <a
                v-bind:class="
                  process.process.university_list === 1 ? 'active' : ''
                "
                @click="changeUniversityList(process.process, process.userId)"
              ></a>
            </td>
            <td class="second-part">
              <a
                v-bind:class="
                  process.process.document_post === 1 ? 'active' : ''
                "
                @click="changeDocumentPost(process.process, process.userId)"
              ></a>
            </td>
            <td class="second-part">
              <a
                v-bind:class="process.process.purify === 1 ? 'active' : ''"
                @click="changePurify(process.process, process.userId)"
              ></a>
            </td>
            <td class="second-part">{{ process.process.progress }}</td>
            <client-only>
              <template v-for="(university, index) in process.universities">
                <td class="third-part uni-name" :key="index">
                  <a>{{ university.university.title }}</a>
                </td>
                <td class="third-part latin-font deadline" :key="index">
                  <input
                    :id="`uni` + university.id"
                    class="latin-font"
                    placeholder="Enter Deadline"
                    :value="university.deadline"
                  />
                  <date-picker
                    v-model="university.deadline"
                    :custom-input="`#uni` + university.id"
                    format="YYYY-MM-DD"
                    display-format="YYYY-MM-DD"
                    locale="en"
                    @change="changeDeadLine(university, process.userId)"
                  />
                </td>
              </template>
            </client-only>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ["universitiesCount", "processes"],
  methods: {
    selectProcess(process) {
      this.$store.dispatch("expert/setProcess", {
        userId: process.userId,
        mobile: process.user.mobile,
        phone: process.phone,
        admittance: process.admittance,
        field_license: process.field_license,
        field_grade: process.field_grade,
        average_license: process.average_license,
        diploma_grade_average: process.diploma_grade_average,
        what_grade_language: process.what_grade_language,
        last_tracking: process.process.last_tracking,
        next_tracking: process.process.next_tracking,
        text: process.process.text,
        next_step: process.process.next_step,
      });
    },
    async updateProccess() {
      this.updating = true;
      this.errors = [];
      const updateProccess = await this.$axios.post(
        "v1/expert/updateProcess",
        this.process
      );
      if (updateProccess.data.status === 1) {
        this.$toasted.success(updateProccess.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
        const getProcesses = await this.$axios.post(
          `v1/expert/getProcesses`,
          this.form
        );
        this.processes = getProcesses.data.processes;
        this.categories = getProcesses.data.categories;
        this.experts = getProcesses.data.experts;
      } else if (updateProccess.data.status === 422) {
        this.errors = updateProccess.data.errors;
        this.$toasted.info(updateProccess.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      } else {
        this.$toasted.error(updateProccess.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      }
      this.updating = false;
    },
    changeContractSent(process, userId) {
      process.contract_sent = !process.contract_sent;
      this.process = {
        userId: userId,
        contract_sent: process.contract_sent,
      };
      this.updateProccess();
    },
    changeContractSign(process, userId) {
      process.contract_sign = !process.contract_sign;
      this.process = {
        userId: userId,
        contract_sign: process.contract_sign,
      };
      this.updateProccess();
    },
    changeLanguageDegree(process, userId) {
      process.language_degree = !process.language_degree;
      this.process = {
        userId: userId,
        language_degree: process.language_degree,
      };
      this.updateProccess();
    },
    changeTranslate(process, userId) {
      process.translate = !process.translate;
      this.process = {
        userId: userId,
        translate: process.translate,
      };
      this.updateProccess();
    },
    changeEmbassyApprove(process, userId) {
      process.embassy_approve = !process.embassy_approve;
      this.process = {
        userId: userId,
        embassy_approve: process.embassy_approve,
      };
      this.updateProccess();
    },
    changeDocumentUpload(process, userId) {
      process.document_upload = !process.document_upload;
      this.process = {
        userId: userId,
        document_upload: process.document_upload,
      };
      this.updateProccess();
    },
    changeDocumentCheck(process, userId) {
      process.document_check = !process.document_check;
      this.process = {
        userId: userId,
        document_check: process.document_check,
      };
      this.updateProccess();
    },
    changeResume(process, userId) {
      process.resume = !process.resume;
      this.process = {
        userId: userId,
        resume: process.resume,
      };
      this.updateProccess();
    },
    changeMotivation(process, userId) {
      process.motivation = !process.motivation;
      this.process = {
        userId: userId,
        motivation: process.motivation,
      };
      this.updateProccess();
    },
    changeUniversityList(process, userId) {
      process.university_list = !process.university_list;
      this.process = {
        userId: userId,
        university_list: process.university_list,
      };
      this.updateProccess();
    },
    changeDocumentPost(process, userId) {
      process.document_post = !process.document_post;
      this.process = {
        userId: userId,
        document_post: process.document_post,
      };
      this.updateProccess();
    },
    changePurify(process, userId) {
      process.purify = !process.purify;
      this.process = {
        userId: userId,
        purify: process.purify,
      };
      this.updateProccess();
    },
    async changeDeadLine(university, userId) {
      let data = {
        userId: userId,
        universityId: university.id,
        deadline: university.deadline,
      };
      const updateProcessUniversity = await this.$axios.post(
        "v1/expert/updateProcessUniversity",
        data
      );
      if (updateProcessUniversity.data.status === 1) {
        this.$toasted.success(updateProcessUniversity.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
        const getProcesses = await this.$axios.post(
          `v1/expert/getProcesses`,
          this.form
        );
        this.processes = getProcesses.data.processes;
        this.categories = getProcesses.data.categories;
        this.experts = getProcesses.data.experts;
      } else if (updateProcessUniversity.data.status === 422) {
        this.errors = updateProcessUniversity.data.errors;
        this.$toasted.info(updateProcessUniversity.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      } else {
        this.$toasted.error(updateProcessUniversity.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/expert/scss/_mixins.scss";

.process__table {
  background-color: var(--white);
  border-radius: 8px;
  @include boxshadow();
  padding: 1.5rem;
  position: relative;
  .uk-overflow-auto {
    margin-right: 10rem;

    &::-webkit-scrollbar {
      height: 8px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: var(--main-color);
      border-radius: 10px;
    }

    /* Handle on hover */
    //&::-webkit-scrollbar-thumb:hover {
    //    background: #FFE163;
    //}
  }
  table {
    table-layout: fixed;
    thead {
      border-bottom: inherit;
      th {
        font-size: 0.9rem;
        color: var(--black);
        width: 8rem;
        height: 2.65rem;
        vertical-align: middle;
        padding: 0.5rem 1rem;
        text-align: right;
      }
      th.name {
        position: absolute;
        background-color: var(--white);
        margin-right: -10rem;
      }
      th.first-part {
        background-color: #e6dfe4;
      }
      .first-part:first-child {
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
      }
      .first-part:last-child {
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
        margin-left: 2rem;
      }
      th.second-part {
        background-color: #f0eefa;
      }
      th.third-part {
        background-color: #e4ddc0;
        width: 5rem;
      }
      th.third-part.deadline {
        padding-left: 5rem;
      }
    }
    tbody {
      td {
        font-size: 0.9rem;
        color: var(--black);
        width: 8rem;
        //vertical-align: middle;
        padding: 1rem;
      }
      td.name {
        position: absolute;
        background-color: var(--white);
        margin-right: -10rem;
        a {
          svg {
            fill: none;
            margin-left: 0.5rem;
            color: var(--text-gray);
            transition: all 0.3s;
          }
          &:hover {
            svg {
              color: var(--black);
            }
          }
        }
      }
      td.second-part {
        a {
          border-radius: 5px;
          background-color: #f1f0f0;
          padding: 0.5rem 3rem;
        }
        a.active {
          background-color: #e0ddee;
        }
      }
      td.third-part.uni-name {
        a {
          color: var(--black);
        }
      }
      td.third-part.deadline {
        color: var(--text-gray);
        input {
          background-color: inherit;
          color: var(--text-gray);
          border: 0;
          font-size: 0.9rem;
          font-weight: 500;
          &::placeholder {
            font-size: 0.9rem;
          }
          &:focus {
            outline: 0;
          }
        }
      }
    }
  }
}

@include mobile-device {
  .process__table {
    padding: 0.25rem;
    .uk-overflow-auto {
      margin-right: 6rem;
    }
    table {
      thead {
        th {
          font-size: 0.75rem;
          width: 4rem;
          height: 2rem;
          padding: 0.5rem 0.5rem;
        }
        th.name {
          width: 4rem;
          margin-right: -6rem;
        }
        .first-part:last-child {
          margin-left: 0;
        }
        th.third-part.deadline {
          padding-left: 3rem;
        }
      }
      tbody {
        td {
          font-size: 0.75rem;
          width: 4rem;
          padding: 0.5rem;
        }
        td.name {
          margin-right: -6rem;
        }
        td.second-part {
          a {
            padding: 0.5rem 2rem;
          }
        }
        td.third-part.deadline {
          input {
            font-size: 0.75rem;
            &::placeholder {
              font-size: 0.75rem;
            }
          }
        }
      }
    }
  }
}
</style>
