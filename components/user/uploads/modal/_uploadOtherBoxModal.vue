<template>
    <div
            @click.self="closeModal"
            class="upload-box-modal"
            id="upload-other-box-modal"
            uk-modal
    >
        <div class="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
            <div class="title">
                <p>آپلود</p>
                <button
                        @click="closeModal"
                        class="uk-modal-close-default"
                        type="button"
                        uk-close
                ></button>
            </div>
            <div class="text" v-if="sent == true">فایل شما با موفقیت آپلود شد</div>
            <div class="text" v-else>
                <div class="w-100 custom-select" v-click-outside-element="outSideType">
                    <div @click="selectType = !selectType" class="select-selected">
                        <p v-if="type == ''">عنوان مدرک را انتخاب کنید</p>
                        <p v-else>
                            {{ otherFiles.filter((item) => item.type == type)[0].title }}
                        </p>
                        <svg
                                :class="{ rotate: selectType }"
                                height="24"
                                style="transition: 0.3s all; fill: var(--black)"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path
                                    d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"
                            />
                        </svg>
                    </div>
                    <transition name="fade">
                        <div class="select-items" v-show="selectType">
                            <div
                                    :key="index"
                                    @click="changeType(file.type)"
                                    style="text-align: right"
                                    v-for="(file, index) in otherFiles"
                                    v-if="file.type !=2"
                            >
                                {{ file.title }}
                            </div>
                        </div>
                    </transition>
                </div>
                <dropzone
                        :destroyDropzone="true"
                        :include-styling="false"
                        :options="options"
                        :useCustomSlot="true"
                        @vdropzone-file-added="selectFile"
                        id="uploadMandatoryFile"
                        ref="uploadMandatoryFile"
                        v-if="sending === false && selected === false"
                >
                    <div class="dropzone-custom-content">
                        <div class="js-upload uk-placeholder uk-text-center">
                            <span class="uk-text-middle latin-font">Drag and drop or</span>
                            <div uk-form-custom>
                                <span class="uk-link latin-font">Browse</span>
                            </div>
                            <br/><span class="rule latin-font"
                        >Only PDF files are allowed</span
                        >
                        </div>
                    </div>
                </dropzone>
                <div
                        class="upload-progressing"
                        v-if="sending === true && selected === false"
                >
                    <img
                            alt=""
                            class="dark-icon"
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3OCIgaGVpZ2h0PSI5MCIgdmlld0JveD0iMCAwIDc4IDkwIj4NCiAgPGcgaWQ9Ikljb24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjkgLTkwKSI+DQogICAgPHBhdGggaWQ9IlBhdGhfMjMiIGRhdGEtbmFtZT0iUGF0aCAyMyIgZD0iTTYsMEg2M0w3OCwxNVY4NGE2LDYsMCwwLDEtNiw2SDZhNiw2LDAsMCwxLTYtNlY2QTYsNiwwLDAsMSw2LDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjkgOTApIiBmaWxsPSIjZGJkYWUxIiBvcGFjaXR5PSIwLjU2Ii8+DQogICAgPHBhdGggaWQ9IlBhdGgiIGQ9Ik0xNTEuNTExLDE4OS4wMzFhMzkuODUzLDM5Ljg1MywwLDAsMS0zLjI4OC0yLjgzN2MtMS4wNDctMS4wNDctMS45ODEtMi4wNjItMi43OTItMy4wMjksMS4yNjUtMy45MDksMS44MTktNS45MjQsMS44MTktNywwLTQuNTY0LTEuNjQ5LTUuNS00LjEyNS01LjUtMS44ODEsMC00LjEyNS45NzgtNC4xMjUsNS42MzIsMCwyLjA1MiwxLjEyNCw0LjU0MywzLjM1Miw3LjQzOC0uNTQ1LDEuNjY0LTEuMTg2LDMuNTgzLTEuOTA1LDUuNzQ2LS4zNDcsMS4wMzgtLjcyMiwyLTEuMTIsMi44ODgtLjMyMy4xNDQtLjYzOC4yOS0uOTQxLjQ0Mi0xLjA5My41NDctMi4xMzEsMS4wMzgtMy4wOTQsMS40OTUtNC4zOTEsMi4wNzktNy4yOTEsMy40NTQtNy4yOTEsNi4xNjksMCwxLjk3MSwyLjE0MiwzLjE5Miw0LjEyNSwzLjE5MiwyLjU1NywwLDYuNDE3LTMuNDE1LDkuMjM3LTkuMTY3YTU0LjcsNTQuNywwLDAsMSw5LjQzOC0yLjU0NmMyLjMsMS43Nyw0Ljg0MywzLjQ2Myw2LjA3NSwzLjQ2MywzLjQwOSwwLDQuMTI1LTEuOTcxLDQuMTI1LTMuNjI0LDAtMy4yNTEtMy43MTQtMy4yNTEtNS41LTMuMjUxQTMyLjU2NywzMi41NjcsMCwwLDAsMTUxLjUxMSwxODkuMDMxWm0tMTkuMzg2LDExLjg4NWEyLjE3NCwyLjE3NCwwLDAsMS0xLjM3NS0uNDQyYzAtLjk3NSwyLjkwNy0yLjM1Myw1LjcxOS0zLjY4NWwuNTQ0LS4yNTdDMTM0Ljk0NywxOTkuNTI4LDEzMi45MDUsMjAwLjkxNiwxMzIuMTI1LDIwMC45MTZaTTE0MS43NSwxNzYuM2MwLTIuODgyLjg5NC0yLjg4MiwxLjM3NS0yLjg4Mi45NzIsMCwxLjM3NSwwLDEuMzc1LDIuNzVhMjIuMDUxLDIyLjA1MSwwLDAsMS0xLjA5NCw0LjI5NEE4LjQ0OSw4LjQ0OSwwLDAsMSwxNDEuNzUsMTc2LjNabTEuMDU0LDE0Ljc3OXEuMTI5LS4zNTguMjUtLjcyNWMuNTEtMS41MzEuOTctMi45MDYsMS4zNzktNC4xNDRxLjg1Ni45NDMsMS44NDUsMS45MzFjLjI1OC4yNTguOS44MzgsMS43NDgsMS41NjRDMTQ2LjMzMSwxOTAuMDcyLDE0NC41MjgsMTkwLjUzLDE0Mi44LDE5MS4wNzZabTE1LjQ0Ni43MTZjMCwuNjE4LDAsLjg3NC0xLjI3Ni44ODJhMTAuMTMyLDEwLjEzMiwwLDAsMS0yLjMxLTEuMzE5Yy4zODgtLjA0My42NzQtLjA2NC44MzUtLjA2NEMxNTcuNTMyLDE5MS4yOTEsMTU4LjEwOCwxOTEuNDksMTU4LjI1LDE5MS43OTJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMy41IC01Mi4xNjYpIiBmaWxsPSIjMzMzIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMC4yNSIvPg0KICA8L2c+DQo8L3N2Zz4NCg=="
                    />
                    <div>
                        <div class="top">
                            <span class="name latin-font">{{ fileName }}</span>
                        </div>
                        <div class="bottom">
                            <span class="size latin-font">{{ fileSize }}</span>
                            <span class="percent latin-font">{{ uploadPercent }}%</span>
                        </div>
                        <progress
                                :value="uploadPercent"
                                class="uk-progress"
                                max="100"
                        ></progress>
                    </div>
                </div>
                <div
                        class="uploaded-file-info"
                        v-if="sending === false && selected === true"
                >
                    <img
                            alt=""
                            class="dark-icon"
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3OCIgaGVpZ2h0PSI5MCIgdmlld0JveD0iMCAwIDc4IDkwIj4NCiAgPGcgaWQ9Ikljb24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjkgLTkwKSI+DQogICAgPHBhdGggaWQ9IlBhdGhfMjMiIGRhdGEtbmFtZT0iUGF0aCAyMyIgZD0iTTYsMEg2M0w3OCwxNVY4NGE2LDYsMCwwLDEtNiw2SDZhNiw2LDAsMCwxLTYtNlY2QTYsNiwwLDAsMSw2LDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjkgOTApIiBmaWxsPSIjZGJkYWUxIiBvcGFjaXR5PSIwLjU2Ii8+DQogICAgPHBhdGggaWQ9IlBhdGgiIGQ9Ik0xNTEuNTExLDE4OS4wMzFhMzkuODUzLDM5Ljg1MywwLDAsMS0zLjI4OC0yLjgzN2MtMS4wNDctMS4wNDctMS45ODEtMi4wNjItMi43OTItMy4wMjksMS4yNjUtMy45MDksMS44MTktNS45MjQsMS44MTktNywwLTQuNTY0LTEuNjQ5LTUuNS00LjEyNS01LjUtMS44ODEsMC00LjEyNS45NzgtNC4xMjUsNS42MzIsMCwyLjA1MiwxLjEyNCw0LjU0MywzLjM1Miw3LjQzOC0uNTQ1LDEuNjY0LTEuMTg2LDMuNTgzLTEuOTA1LDUuNzQ2LS4zNDcsMS4wMzgtLjcyMiwyLTEuMTIsMi44ODgtLjMyMy4xNDQtLjYzOC4yOS0uOTQxLjQ0Mi0xLjA5My41NDctMi4xMzEsMS4wMzgtMy4wOTQsMS40OTUtNC4zOTEsMi4wNzktNy4yOTEsMy40NTQtNy4yOTEsNi4xNjksMCwxLjk3MSwyLjE0MiwzLjE5Miw0LjEyNSwzLjE5MiwyLjU1NywwLDYuNDE3LTMuNDE1LDkuMjM3LTkuMTY3YTU0LjcsNTQuNywwLDAsMSw5LjQzOC0yLjU0NmMyLjMsMS43Nyw0Ljg0MywzLjQ2Myw2LjA3NSwzLjQ2MywzLjQwOSwwLDQuMTI1LTEuOTcxLDQuMTI1LTMuNjI0LDAtMy4yNTEtMy43MTQtMy4yNTEtNS41LTMuMjUxQTMyLjU2NywzMi41NjcsMCwwLDAsMTUxLjUxMSwxODkuMDMxWm0tMTkuMzg2LDExLjg4NWEyLjE3NCwyLjE3NCwwLDAsMS0xLjM3NS0uNDQyYzAtLjk3NSwyLjkwNy0yLjM1Myw1LjcxOS0zLjY4NWwuNTQ0LS4yNTdDMTM0Ljk0NywxOTkuNTI4LDEzMi45MDUsMjAwLjkxNiwxMzIuMTI1LDIwMC45MTZaTTE0MS43NSwxNzYuM2MwLTIuODgyLjg5NC0yLjg4MiwxLjM3NS0yLjg4Mi45NzIsMCwxLjM3NSwwLDEuMzc1LDIuNzVhMjIuMDUxLDIyLjA1MSwwLDAsMS0xLjA5NCw0LjI5NEE4LjQ0OSw4LjQ0OSwwLDAsMSwxNDEuNzUsMTc2LjNabTEuMDU0LDE0Ljc3OXEuMTI5LS4zNTguMjUtLjcyNWMuNTEtMS41MzEuOTctMi45MDYsMS4zNzktNC4xNDRxLjg1Ni45NDMsMS44NDUsMS45MzFjLjI1OC4yNTguOS44MzgsMS43NDgsMS41NjRDMTQ2LjMzMSwxOTAuMDcyLDE0NC41MjgsMTkwLjUzLDE0Mi44LDE5MS4wNzZabTE1LjQ0Ni43MTZjMCwuNjE4LDAsLjg3NC0xLjI3Ni44ODJhMTAuMTMyLDEwLjEzMiwwLDAsMS0yLjMxLTEuMzE5Yy4zODgtLjA0My42NzQtLjA2NC44MzUtLjA2NEMxNTcuNTMyLDE5MS4yOTEsMTU4LjEwOCwxOTEuNDksMTU4LjI1LDE5MS43OTJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMy41IC01Mi4xNjYpIiBmaWxsPSIjMzMzIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMC4yNSIvPg0KICA8L2c+DQo8L3N2Zz4NCg=="
                    />
                    <div>
                        <div class="left">
                            <span class="name latin-font">{{ fileName }}</span>
                            <span class="size latin-font">{{ fileSize }}</span>
                        </div>
                        <div class="right">
                            <a @click="deleteFile" class="" uk-close></a>
                        </div>
                    </div>
                </div>
                <div class="explain">
                    <form>
            <textarea
                    placeholder="توضیحات..."
                    rows="4"
                    v-model="text"
            ></textarea>
                    </form>
                </div>
                <div class="submit">
                    <button
                            @click="uploadMandatoryFile"
                            v-if="sending === false && sent === false"
                    >
                        آپلود و ارسال
                    </button>
                    <button v-else>چند لحظه صبر کنید</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Dropzone from "nuxt-dropzone";

    export default {
        components: {
            Dropzone,
        },
        data() {
            return {
                options: {
                    url: "http://httpbin.org/anything",
                },
                fileName: null,
                fileSize: null,
                type: "",
                title: null,
                text: null,
                uploadPercent: 0,
                sending: false,
                selected: false,
                sent: false,
                errors: [],
                file: null,
                selectType: null,
            };
        },
        computed: {
            uploads() {
                return this.$store.getters["uploads/uploads"];
            },
            otherFiles() {
                return this.$store.getters["uploads/otherFiles"];
            },
        },
        methods: {
            outSideType() {
                this.selectType = false;
            },
            changeType(val) {
                this.type = val;
                this.selectType = false;
            },
            closeModal() {
                setTimeout(() => {
                    this.fileName = null;
                    this.file = null;
                    this.fileSize = null;
                    this.type = "";
                    this.title = null;
                    this.text = null;
                    this.uploadPercent = 0;
                    this.sending = false;
                    this.selected = false;
                    this.sent = false;
                }, 500);
            },
            checkUploaded(id) {
                return this.uploads.mandatoryUploaded.includes(id);
            },
            selectFile() {
                if (this.$refs.uploadMandatoryFile.dropzone.files.length === 0) {
                    this.$toasted.error("لطفا ابتدا یک فایل را انتخاب کنید", {
                        position: "bottom-left",
                        duration: 5000,
                    });
                    return false;
                }
                if (this.type !== 6) {
                    this.$refs.uploadMandatoryFile.dropzone.files[0] = this.$refs.uploadMandatoryFile.dropzone.files[this.$refs.uploadMandatoryFile.dropzone.files.length - 1];

                    if (this.$refs.uploadMandatoryFile.dropzone.files[0].type !== "application/pdf") {
                        this.$toasted.error("لطفا فایل با پسوند Pdf ارسال کنید", {
                            position: "bottom-left",
                            duration: 5000,
                        });
                        return false;
                    }
                }
                const file = this.$refs.uploadMandatoryFile.dropzone.files[0];
                this.file = file;
                this.selected = true;
                const fd = new FormData();
                fd.append("type", this.type);
                fd.append("text", this.text);
                fd.append("file", file);
                var _size = file.size;
                var fSExt = ["Bytes", "KB", "MB", "GB"],
                    i = 0;
                while (_size > 900) {
                    _size /= 1024;
                    i++;
                }
                this.fileSize = Math.round(_size * 100) / 100 + " " + fSExt[i];
                this.fileName = file.name;
            },
            deleteFile() {
                this.file = null;
                this.selected = false;
            },
            async uploadMandatoryFile() {
                const file = this.file;
                if (this.type == null || this.file == null) return false;
                this.sending = true;
                this.selected = false;
                const fd = new FormData();
                fd.append("type", this.type);
                fd.append("text", this.text);
                fd.append("file", file);
                var _size = file.size;
                var fSExt = ["Bytes", "KB", "MB", "GB"],
                    i = 0;
                while (_size > 900) {
                    _size /= 1024;
                    i++;
                }
                this.fileSize = Math.round(_size * 100) / 100 + " " + fSExt[i];
                this.fileName = file.name;
                this.$axios
                    .post("v1/user/uploadMandatoryFile", fd, {
                        onUploadProgress: (uploadEvent) => {
                            this.uploadPercent = Math.round(
                                (uploadEvent.loaded / uploadEvent.total) * 100
                            );
                        },
                    })
                    .then((res) => {
                        if (res.data.status === 1) {
                            this.$toasted.success(res.data.msg, {
                                position: "bottom-left",
                                duration: 5000,
                            });
                            this.sent = true;
                            this.$store.dispatch("uploads/uploads");
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
                        this.sending = false;
                    });
            },
        },
    };
</script>

<style lang="scss">
    .dz-preview {
        display: none;
    }

    .custom-select {
        width: 50%;
        position: relative;
    }

    .select-selected {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 91%;
        border-radius: 5px;
        color: var(--black);
        font-size: 0.8rem;
        padding: 0.6rem 1rem;
        border: 1px solid var(--gray);
        cursor: pointer;
        user-select: none;
    }

    /*style items (options):*/
    .select-items {
        width: 91%;
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
        z-index: 9999;
        border-radius: 5px;
        max-height: 200px;
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
</style>
