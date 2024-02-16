<template>
    <div id="write-comment-modal" uk-modal @click.self="closeModal">
        <div class="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
            <div class="title">
                <button
                        class="uk-modal-close-default"
                        type="button"
                        uk-close
                        style="right: unset; left: 10px"
                ></button>
                <h3>یادداشت ها</h3>
            </div>
            <div class="text">
                <form>
                    <div class="comment-box">
                        <img style="width: 50px; height: 50px; border-radius: 50%" :src="$auth.user.image" alt=""/>
                        <div style="border-radius: 20px; border: 1px solid var(--gray);
                             padding: 10px; margin-right: 20px; width: 80%" v-if="isOpenComment">
                            <textarea
                                    rows="2"
                                    placeholder="نوشتن کامنت..."
                                    v-model="comment"
                                    :class="{
                        'error-input': errors.includes('comment'),
                      }"
                                    @focus="errors = []"></textarea>
                            <button
                                    type="button"
                                    v-if="comment == null || comment == ''"
                                    @click="sendComment"
                            >
                                ذخیره
                            </button>
                            <button
                                    v-else
                                    type="button"
                                    class="uk-button-default uk-modal-close"
                                    @click="sendComment"
                            >
                                ذخیره
                            </button>
                        </div>
                        <div v-else style="border-radius: 20px; border: 1px solid var(--gray);
                             padding: 10px; margin-right: 10px; width: 80%; cursor: pointer" @click="handleOpenComment">
                            <p style="font-size: 13px; vertical-align: center; color: var(--text-gray); margin-top: 5px">
                                نوشتن کامنت ...</p>
                        </div>
                    </div>
                </form>
            </div>
            <div style="max-height: 400px; overflow: auto">
                <div v-for="(_comment, index) in comments">
                    <div style="display: flex; margin-top: 40px; ">
                        <img style="width: 50px; height: 50px; border-radius: 50%" :src="_comment.image" alt=""/>

                        <div style="margin-right: 20px; width: 90%">
                            <div style="display: flex; flex-flow: row wrap;">
                                <strong style="text-align: right; font-size: 15px">{{ _comment.owner }}</strong>
                                <small style="text-align: left; margin-right: 5px; color: var(--text-gray)">{{
                                    _comment.date
                                    }}</small>
                            </div>
                            <p style="margin-top: 5px; font-size: 13px; line-height: 30px">{{ _comment.text }}</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            comment: null,
            comments: null,
            sendingComment: false,
            isOpenComment: false,
            errors: [],
        };
    },
    computed: {
        user() {
            return this.$store.getters["expert/userId"];
        },
        userComments() {
            return this.$store.getters["expert/userComments"];
        },
        openComment() {
            if (this.comment === null)
                return this.isOpenComment = false;
            else
                return this.isOpenComment = true;
        }
    },
    watch: {
        userComments() {
            if (this.userComments.comments != null) {
                this.comments = this.userComments.comments;
            } else {
                this.comments = null;
            }
        },
        openComment() {
            if (this.comment === null)
                return this.isOpenComment = false;
            else
                return this.isOpenComment = true;
        }
    },
    methods: {
        handleOpenComment() {
            return this.isOpenComment = true;
        },
        closeModal() {
            return this.isOpenComment = false;
        },
        async sendComment() {

            this.sendingComment = true;
            let sendComment = null;
            sendComment = await this.$axios.post(
                "v1/expert/sendComment/" + this.userComments.id,
                {text: this.comment}
            );
            if (sendComment.data.status === 1) {
                this.$toasted.success(sendComment.data.msg, {
                    position: "bottom-left",
                    duration: 5000,
                });

                this.$store.commit("expert/UPDATE_Users", {
                    id: this.userComments.id,
                    comment: this.comment,
                    comments: sendComment.comments,
                });

                this.$store.dispatch('expert/getAllUsers')

                setTimeout(() => (this.comment = ""), 300);
            } else if (sendComment.data.status === 422) {
                this.errors = sendComment.data.errors;
                this.$toasted.info(sendComment.data.msg, {
                    position: "bottom-left",
                    duration: 5000,
                });
            } else {
                this.$toasted.error(sendComment.data.msg, {
                    position: "bottom-left",
                    duration: 5000,
                });
            }
            this.sendingComment = false;
        },
    },
};
</script>

<style lang="scss" scoped>
@import "~/assets/expert/scss/_mixins.scss";

.uk-modal-dialog {
  width: 50%;
}

.comment-box {
  display: flex;
  width: 110%;
  margin-top: 20px
}

#write-comment-modal {
  .uk-modal-body {
    padding: 2rem;
    border-radius: 8px;
    background-color: var(--white);

    .title {
      margin-bottom: 1.5rem;

      h3 {
        font-size: 1rem;
        color: var(--black);
        font-weight: 800;
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--gray);
      }
    }

    .text {
      form {
        @include fbx-column-ai-start-jc-start;

        textarea {
          border: 0;
          width: 99%;
          line-height: 1.8rem;
          background-color: var(--white);
        }

        textarea:focus {
          outline: 0;
        }

        button {
          margin-top: 1rem;
          margin-bottom: 1rem;
          margin-right: 80%;
          cursor: pointer;
          font-size: 0.9rem;
          background-color: var(--light-main-color);
          padding: 0.5rem;
          border-radius: 50px;
          border: 0;
          width: 17%;
          transition: all 0.3s;
          color: #2b2827;
        }

        .loading-button {
          margin-right: auto;
        }
      }
    }

    .comments:first-child {
      margin-top: 20px;
    }

    .comments {
      padding: 10px;
      margin: 5px;
      border-radius: 10px;
    }
  }
}

@include mobile-device {
  .uk-modal-dialog {
    width: 100%;
  }

  .comment-box {
    width: 100%;
  }

  #write-comment-modal {
    .uk-modal-body {
      padding: 1rem;

      .title {
        margin-bottom: 1rem;

        h3 {
          font-size: 0.9rem;
        }
      }

      .text {
        form {
          button {
            font-size: 0.8rem;
            width: 20%;
            margin-bottom: 0.2rem;
          }
        }
      }
    }
  }
}
</style>
