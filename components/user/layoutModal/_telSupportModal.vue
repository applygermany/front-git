<template>
    <div class="start-modal" id="start-tel-support-modal" uk-modal>
        <div class="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
            <div class="title">
                <p>فرم مشاوره تلفنی</p>
                <button
                        id="close-start-modal"
                        class="uk-modal-close-default"
                        type="button"
                        uk-close
                ></button>
            </div>

            <div class="row">
                <p>{{ user.firstname }} عزیز در جهت بهبود شیوه ی پاسخ دهی و افزایش کیفیت مشاوره تلفنی ، فرمی شامل
                    اطلاعات فردی و تحصیلی تدارک دیده شده است که تکمیل این فرم کمتر از 3 دقیقه زمان میبرد که بعد از آن به
                    صورت اتوماتیک به صفحه ی انتخاب مشاور منتقل میشوید.</p>
            </div>

            <a class="button uk-modal-close">تکمیل فرم</a>

        </div>
    </div>
</template>

<script>
export default {
    computed: {
        user() {
            return this.$store.getters["user/user"];
        },
    },
    methods: {
        closeModal(){

        }
    },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

.button {
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 20px;
    transition: all 0.3s;
    background-color: var(--main-color);
    color: var(--white);
    font-size: 0.8rem;
    border-radius: 5px;
    border: none;
    padding: 0.5rem 2rem;
    outline: none;
    cursor: pointer;
}

.start-modal {
  .uk-modal {
    background-color: var(--gray);
  }

  .uk-modal-body {
    display: flex;
    flex-direction: column;
    padding: 0;
    background-color: var(--white);
    border-radius: 8px;

    .title {
      @include fbx-ai-center-jc-between;
      background-color: var(--inner-background-color);
      padding: 1rem 1.5rem;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;

      button {
        position: inherit;

        &:hover {
          svg {
            color: var(--red);
          }
        }
      }

      p {
        font-size: 1rem;
        font-weight: bold;
        color: var(--black);
      }
    }


    .row {
      p {
        font-size: 0.7rem;
        color: var(--black);
        margin: 20px;
        text-align: center;
        line-height: 25px;
      }
    }
  }
}

@include mobile-device {
  .question-box {
    flex: 50%;
  }
  .start-modal {
    .uk-modal-body {
      width: 100% !important;

      .title {
        padding: 0.75rem 1.25rem;

        p {
          font-size: 0.9rem;
        }
      }

      .table {
        padding: 1rem;

        table {
          thead {
            th {
              font-size: 0.75rem;

              &.description {
                padding-right: 1rem;
              }
            }
          }

          tbody {
            td {
              font-size: 0.75rem;

              &.description {
                padding-right: 1rem;
              }
            }
          }
        }
      }
    }
  }
}

@include tablet-device {
  .question-box {
    flex: 50%;
  }
  .start-modal {
    .uk-modal-body {
    }
  }
}
</style>
