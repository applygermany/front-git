<template>
  <div @click.self="closeModal" class="upload-box-modal" id="delete-file-modal" uk-modal>
    <div class="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
      <div class="title">
        <p>حذف فایل</p>
        <button
          @click="closeModal"
          class="uk-modal-close-default"
          type="button"
          uk-close
        ></button>
      </div>
      <div class="text" v-if="deleteFile == true">فایل شما با موفقیت حذف شد</div>
      <div class="text" v-else>
        <div class="download">
          <div class="" style="width: 100%">
            <p>آیا مایل به حذف فایل میباشید؟</p>
          </div>
        </div>
        <div class="submit" style="display: flex">
          <button
            style="margin: 5px"
            @click="deleteFileFunction()"
            v-if="deletingFile === false && deleteFile === false"
          >
            بله
          </button>
          <button v-else>چند لحظه صبر کنید</button>

          <button class="uk-modal-close" style="margin: 5px" @click="closeModal" type="button">بستن</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deletingFile: false,
      deleteFile: false,
    };
  },
  computed: {
    dataId() {
      return this.$store.getters["writer/dataId"];
    },
    type() {
      return this.$store.getters["writer/type"];
    },
    file() {
      return this.$store.getters["writer/file"];
    },
  },
  methods: {
    closeModal() {
      setTimeout(() => {
        this.deletingFile = false;
        this.deleteFile = false;
      }, 500);
    },
    async deleteFileFunction() {
      this.deletingFile = true;
      this.deleteFile = false;
      this.$axios
        .post("v1/writer/deleteFile", {
          file: this.$store.getters['writer/file'],
          id: this.$store.getters['writer/dataId'],
          type: this.$store.getters['writer/type'],
        })
        .then((res) => {
          if (res.data.status === 1) {
            this.$toasted.success(res.data.msg, {
              position: "bottom-left",
              duration: 5000,
            });

            this.$store.dispatch("writer/uploads", { id: this.$store.getters['writer/dataId'], type: this.$store.getters['writer/type'] });
          } else if (res.data.status === 422) {
            this.errors = res.data.errors;
            this.$toasted.info(res.data.msg, {
              position: "bottom-left",
              duration: 5000,
            });
          } else {
            this.$toasted.error(res.data.msg, {
              position: "bottom-left",
              duration: 5000,
            });
          }
          this.deletingFile = false;
          this.deleteFile = true;
        });
    },
  },
  computed: {},
};
</script>
<style></style>
