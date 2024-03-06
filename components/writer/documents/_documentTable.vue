<template>
  <div class="document__table">
    <div class="">
      <table v-if="uploads && uploads.length > 0" class="uk-table expert-table">
        <thead>
         <tr>
          <th>تاریخ</th>
          <th>لیست مدارک</th>
          <th>توضیحات</th>
         </tr>
        </thead>
        <tbody>
        <tr :key="index" v-for="(upload, index) in uploads" v-if="upload.type !== 7">
          <td class="date">{{ upload.date }}</td>
          <td class="description yellow uk-inline" v-if="upload.title !== null && upload.title.length > 50">
            <span>{{ upload.title.substr(0, 50) }} ...</span>
            <div uk-dropdown>
              {{ upload.title }}
            </div>
          </td>
          <td
              class="type"
              v-else-if="
                upload.title == 'null' ||
                upload.title == null ||
                upload.title == ''
              "
          ></td>
          <td class="type" v-else>
            {{ upload.title }}
          </td>
          <td
              class="description uk-inline"
              v-if="upload.text !== null && upload.text.length > 100"
          >
            <span>{{ upload.text.substr(0, 100) }} ...</span>
            <div uk-dropdown>
              {{ upload.text }}
            </div>
          </td>
          <td
              class="description"
              v-else-if="
                upload.text == 'null' ||
                upload.text == null ||
                upload.text == ''
              "
          ></td>
          <td class="description" v-else>
            {{ upload.text }}
          </td>
          <td class="other uk-text-nowrap align-left">
            <a @click="doTheAxios('madarek',upload.id)" class="download" target="_blank">
              <svg
                  class="uk-svg"
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75"
                    stroke="#141414"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                ></path>
                <path
                    d="M12 14.25L12 4.75"
                    stroke="#141414"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                ></path>
                <path
                    d="M8.75 10.75L12 14.25L15.25 10.75"
                    stroke="#141414"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                ></path>
              </svg>
              دانلود
            </a>
            <!-- @click="deleteDocument(upload.id)" -->
          </td>
        </tr>
        </tbody>
      </table>
      <div v-else-if="!uploads || uploads.length === 0" class="d-flex justify-content-center not_found">
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
          <p style="display: block;margin-top: 1em;">هنوز این کاربر هیچ یک از مدارک را آپلود نکرده است</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deleting: false,
    };
  },
  computed: {
    uploads() {
      return this.$store.getters["writer/uploads"];
    },
    userId() {
      return this.$store.getters["writer/userId"];
    },
  },
    methods:{
        doTheAxios(type,id){
            this.$axios.get(`v1/writer/getFileNameAndFormat/${type}/${id}`).then((res)=>{
                if(res.data.status==1){
                    this.fileName=res.data.fileName;
                    this.downloadFile(type,id);
                }else{
                    this.$toasted.info(res.data.msg, {
                        position: "bottom-left",
                        duration: 5000,
                    });
                }
            }).catch((err)=>{
                this.$toasted.error('مشکلی رخ داده است ، از اتصال اینترنت خود مطمئن شوید', {
                    position: "bottom-left",
                    duration: 5000,
                });
                console.log(err,'error is here')
            })
        },
        async downloadFile(type,id) {
            try {
                const response = await this.$axios.get('v1/writer/getDownloadByFormat/'+type+'/'+id, {
                    responseType: 'blob' // Specify the response type as blob to handle binary data
                });
                // Create a blob URL for the downloaded file
                const url = window.URL.createObjectURL(new Blob([response.data]));
                // Create a link element and click on it to trigger the file download
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', this.fileName); // Specify the filename
                document.body.appendChild(link);
                link.click();

                // Clean up
                window.URL.revokeObjectURL(url);
            } catch (error) {
                console.error('Error downloading file:', error);
            }
        },
    }
};
</script>

<style lang="scss" scoped>
@import "~/assets/expert/scss/_mixins.scss";

.not_found {
  text-align: center;
}

.download {
  transition: all 0.3s;

  svg {
    transition: all 0.3s;
  }

  &:hover {
    color: #2b2827 !important;
    background-color: var(--light-main-color) !important;

    svg {
      color: #2b2827 !important;
    }
  }
}

.trash {
  transition: all 0.3s;

  svg {
    transition: all 0.3s;
  }

  &:hover {
    color: #2b2827 !important;
    background-color: #ff3535 !important;

    svg {
      color: #2b2827 !important;
    }
  }
}

.document__table {
  background-color: var(--white);
  border-radius: 8px;
  @include boxshadow();
  padding: 1.5rem;

  table {
    tbody {
      td.type,
      td.date {
        width: 15%;
      }

      td.description {
        width: 50%;
        text-align: center;

        .uk-dropdown {
          padding: 1.5rem;
          width: 500px;
          border-radius: 5px;
          background-color: var(--white);
          font-size: 0.8rem;
          line-height: 1.8rem;
          text-align: justify;
          color: var(--black);
          max-height: 20rem;
          overflow-y: auto;

          &::-webkit-scrollbar {
            width: 8px;
          }

          /* Track */
          &::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
            border-radius: 15px;
          }

          /* Handle */
          &::-webkit-scrollbar-thumb {
            background: var(--main-color);
            border-radius: 15px;
          }
        }
      }

      td.other {
        width: 20%;
      }
    }
  }
}

@include mobile-device {
  .document__table {
    padding: 0 1rem 1rem 1rem;

    table {
      tbody {
        td.description {
          width: 50%;

          .uk-dropdown {
            padding: 1rem;
            width: 280px;
            right: -2rem;
            font-size: 0.75rem;
            max-height: 15rem;
          }
        }
      }
    }
  }
}

@include tablet-device {
  .document__table {
    padding: 0 1rem 1rem 1rem;

    table {
      tbody {
        td.description {
          .uk-dropdown {
            padding: 1rem;
            right: -3rem;
            font-size: 0.8rem;
            max-height: 15rem;
          }
        }
      }
    }
  }
}
</style>
