<template>
    <div class="university-items">
        <div :key="index" class="box" v-for="(university, index) in universities">
            <div class="title-description">
                <div class="description">
                    <p>{{ university.description }}</p>
                </div>
                <div class="title">
                    <div class="name-more">
                        <h2 class="latin-font">{{ university.title }}</h2>
                        <div class="uk-inline">
                            <button class="more-action">
                                <svg
                                        class="uk-svg"
                                        fill="none"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                            d="M12.5 8C12.5 8.27614 12.2761 8.5 12 8.5C11.7239 8.5 11.5 8.27614 11.5 8C11.5 7.72386 11.7239 7.5 12 7.5C12.2761 7.5 12.5 7.72386 12.5 8Z"
                                            stroke="#141414"
                                    ></path>
                                    <path
                                            d="M12.5 12C12.5 12.2761 12.2761 12.5 12 12.5C11.7239 12.5 11.5 12.2761 11.5 12C11.5 11.7239 11.7239 11.5 12 11.5C12.2761 11.5 12.5 11.7239 12.5 12Z"
                                            stroke="#141414"
                                    ></path>
                                    <path
                                            d="M12.5 16C12.5 16.2761 12.2761 16.5 12 16.5C11.7239 16.5 11.5 16.2761 11.5 16C11.5 15.7239 11.7239 15.5 12 15.5C12.2761 15.5 12.5 15.7239 12.5 16Z"
                                            stroke="#141414"
                                    ></path>
                                </svg>
                            </button>
                            <div uk-dropdown="mode: click">
                                <ul class="uk-nav uk-dropdown-nav">
                                    <li @click="changeStatus(university.id, 6)">
                                        <a> رد کردن </a>
                                    </li>
                                    <li @click="deleteUniversity(university.id)">
                                        <a> حذف کردن </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="type-line">
                        <span class="latin-font">{{ university.field }}</span>
                        <hr/>
                    </div>
                </div>
            </div>
            <div class="university-statuses-img">
                <div class="university-statuses">
                    <a
                            :class="[
              'status',
              university.levelStatus >= 1 ? 'status-done' : '',
              university.levelStatus === 6 ? 'status-cancel' : '',
            ]"
                            @click="changeStatus(university.id, 1)"
                    >
                        <div class="icon">
                            <svg
                                    class="uk-svg"
                                    fill="none"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                        d="M11.25 19.25H7.75C6.64543 19.25 5.75 18.3546 5.75 17.25V6.75C5.75 5.64543 6.64543 4.75 7.75 4.75H14L18.25 9V11.25"
                                        stroke="#141414"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                ></path>
                                <path
                                        d="M17 14.75V19.25"
                                        stroke="#141414"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                ></path>
                                <path
                                        d="M19.25 17H14.75"
                                        stroke="#141414"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                ></path>
                                <path
                                        d="M18 9.25H13.75V5"
                                        stroke="#141414"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                ></path>
                            </svg>
                            <span
                                    v-if="
                  university.levelStatus >= 1 && university.levelStatus !== 6
                "
                            >
                این مرحله انجام شد
              </span>
                            <span v-if="university.levelStatus === 6">
                این مرحله لغو شده است
              </span>
                        </div>
                        <h3>آپلود مدارک در سایت</h3>
                        <div class="polygon-f">
                            <div class="polygon-s">
                                <span class="counter latin-font"> 1 </span>
                            </div>
                        </div>
                    </a>
                    <a
                            :class="[
              'status',
              university.levelStatus >= 2 ? 'status-done' : '',
              university.levelStatus === 6 ? 'status-cancel' : '',
            ]"
                            @click="changeStatus(university.id, 2)"
                    >
                        <div class="icon">
                            <svg
                                    class="uk-svg"
                                    fill="none"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                        d="M4.75 9.75C4.75 8.64543 5.64543 7.75 6.75 7.75H17.25C18.3546 7.75 19.25 8.64543 19.25 9.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V9.75Z"
                                        stroke="#141414"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                ></path>
                                <path
                                        d="M8.75 7.5V6.75C8.75 5.64543 9.64543 4.75 10.75 4.75H13.25C14.3546 4.75 15.25 5.64543 15.25 6.75V7.5"
                                        stroke="#141414"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                ></path>
                                <path
                                        d="M5 13.25H19"
                                        stroke="#141414"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                ></path>
                                <path
                                        d="M8.75 11.75V14.25"
                                        stroke="#141414"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                ></path>
                                <path
                                        d="M15.25 11.75V14.25"
                                        stroke="#141414"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                ></path>
                            </svg>
                            <span
                                    v-if="
                  university.levelStatus >= 2 && university.levelStatus !== 6
                "
                            >
                این مرحله انجام شد
              </span>
                            <span v-if="university.levelStatus === 6">
                این مرحله لغو شده است
              </span>
                        </div>
                        <h3>در دست اپلای</h3>
                        <div class="polygon-f">
                            <div class="polygon-s">
                                <span class="counter latin-font"> 2 </span>
                            </div>
                        </div>
                    </a>
                    <a
                            :class="[
              'status',
              university.levelStatus >= 3 ? 'status-done' : '',
              university.levelStatus === 6 ? 'status-cancel' : '',
            ]"
                            @click="changeStatus(university.id, 3)"
                    >
                        <div class="icon">
                            <svg
                                    class="uk-svg"
                                    fill="none"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                        d="M4.75 19.25L12 4.75L19.25 19.25L12 15.75L4.75 19.25Z"
                                        stroke="#141414"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                ></path>
                                <path
                                        d="M12 15.5V12.75"
                                        stroke="#141414"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                ></path>
                            </svg>
                            <span
                                    v-if="
                  university.levelStatus >= 3 && university.levelStatus !== 6
                "
                            >این مرحله انجام شد</span
                            >
                            <span v-if="university.levelStatus === 6"
                            >این مرحله لغو شده است</span
                            >
                        </div>
                        <h3>ارسال مدارک به دانشگاه</h3>
                        <div class="polygon-f">
                            <div class="polygon-s">
                                <span class="counter latin-font"> 3 </span>
                            </div>
                        </div>
                    </a>
                    <a
                            :class="[
              'status',
              university.levelStatus >= 4 ? 'status-done' : '',
              university.levelStatus === 6 ? 'status-cancel' : '',
            ]"
                            @click="changeStatus(university.id, 4)"
                    >
                        <div class="icon">
                            <svg
                                    class="uk-svg"
                                    fill="none"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                        d="M18.25 11.5V19.25M5.75 19.25V11.5M9.75 19.25V11.5M14.25 19.25V11.5"
                                        stroke="#141414"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                ></path>
                                <path
                                        d="M12 4.75L19.25 11.25H4.75L12 4.75Z"
                                        stroke="#141414"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                ></path>
                                <path
                                        d="M4.75 19.25H19.25"
                                        stroke="#141414"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                ></path>
                            </svg>
                            <span
                                    v-if="
                  university.levelStatus >= 4 && university.levelStatus !== 6
                "
                            >این مرحله انجام شد</span
                            >
                            <span v-if="university.levelStatus === 6"
                            >این مرحله لغو شده است</span
                            >
                        </div>
                        <h3>بررسی توسط دانشگاه</h3>
                        <div class="polygon-f">
                            <div class="polygon-s">
                                <span class="counter latin-font"> 4 </span>
                            </div>
                        </div>
                    </a>
                    <a
                            :class="[
              'status',
              university.levelStatus >= 5 ? 'status-done' : '',
              university.levelStatus === 6 ? 'status-cancel' : '',
            ]"
                            @click="changeStatus(university.id, 5)"
                    >
                        <div class="icon">
                            <svg
                                    class="uk-svg"
                                    fill="none"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                        d="M15.25 8C15.25 9.79493 13.7949 11.25 12 11.25C10.2051 11.25 8.75 9.79493 8.75 8C8.75 6.20507 10.2051 4.75 12 4.75C13.7949 4.75 15.25 6.20507 15.25 8Z"
                                        stroke="#141414"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                ></path>
                                <path
                                        d="M12.25 19.25H6.94949C5.77001 19.25 4.88985 18.2103 5.49082 17.1954C6.36244 15.7234 8.23932 14 12.25 14"
                                        stroke="#141414"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                ></path>
                                <path
                                        d="M14.75 17.75L16 19.25L19.25 14.75"
                                        stroke="#141414"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                ></path>
                            </svg>
                            <span
                                    v-if="
                  university.levelStatus >= 5 && university.levelStatus !== 6
                "
                            >این مرحله انجام شد</span
                            >
                            <span v-if="university.levelStatus === 6"
                            >این مرحله لغو شده است</span
                            >
                        </div>
                        <h3>اخذ پذیرش</h3>
                        <div class="polygon-f">
                            <div class="polygon-s">
                                <span class="counter latin-font"> 5 </span>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="university-img">
                    <img
                            :alt="university.title"
                            :src="university.image"
                            v-if="university.levelStatus < 5 || university.levelStatus === 6"
                    />
                    <div
                            @click="handleUpload(university.id)"
                            class="js-upload uk-placeholder uk-text-center"
                            v-if="
              university.levelStatus === 5 &&
              uploadingFor !== university.id &&
              university.applyFile === 0
            "
                    >
                        <input
                                :id="`uploadApplyFile` + university.id"
                                @change="uploadApplyFile(university.userId, university.id,index)"
                                style="display: none"
                                type="file"
                        />
                        <svg
                                class="uk-svg"
                                height="33"
                                viewBox="0 0 33.001 33"
                                width="33.001"
                                xmlns="http://www.w3.org/2000/svg"
                        >
                            <g
                                    data-name="Group 8163"
                                    id="Group_8163"
                                    transform="translate(-460.5 -1692.5)"
                            >
                                <path
                                        d="M4.75,21.7a6.748,6.748,0,0,0,6.731,6.724H28.049a6.724,6.724,0,0,0,.5-13.428,8.8,8.8,0,0,0-17.562,0A6.727,6.727,0,0,0,4.75,21.7Z"
                                        fill="none"
                                        id="cloud"
                                        stroke="#e2ad42"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="3"
                                        transform="translate(457.25 1687.199)"
                                ></path>
                                <rect
                                        data-name="Rectangle 3170"
                                        fill="#fff"
                                        height="9.971"
                                        id="Rectangle_3170"
                                        transform="translate(466.44 1710.739)"
                                        width="21.121"
                                ></rect>
                                <path
                                        d="M0,13.448V0"
                                        data-name="Path 13809"
                                        fill="none"
                                        id="Path_13809"
                                        stroke="#e2ad42"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="3"
                                        transform="translate(477 1724) rotate(180)"
                                ></path>
                                <path
                                        d="M0,0,5.69,6.207,11.379,0"
                                        data-name="Path 13810"
                                        fill="none"
                                        id="Path_13810"
                                        stroke="#e2ad42"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="3"
                                        transform="translate(482.69 1716.759) rotate(180)"
                                ></path>
                            </g>
                        </svg>
                        <span>آپلود پذیرش</span>
                    </div>
                    <div
                            class="js-upload uk-placeholder uk-text-center"
                            dir="rtl"
                            v-if="
              university.levelStatus === 5 &&
              uploadPercent > 0 &&
              uploadingFor === university.id
            "
                    >
                        <span>در حال آپلود</span>
                        <span class="waiting">آپلود شده : {{ uploadPercent }}%</span>
                    </div>
                    <div
                            class="js-upload uk-placeholder uk-text-center"
                            v-if="university.levelStatus === 5 && university.applyFile !== 0"
                    >
                        <div class="file-info">
                            <svg
                                    class="uk-svg"
                                    fill="none"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                        d="M7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V9L14 4.75H7.75C6.64543 4.75 5.75 5.64543 5.75 6.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25Z"
                                        stroke="#141414"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                ></path>
                                <path
                                        d="M18 9.25H13.75V5"
                                        stroke="#141414"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                ></path>
                                <path
                                        d="M9.75 15.25H14.25"
                                        stroke="#141414"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                ></path>
                                <path
                                        d="M9.75 12.25H14.25"
                                        stroke="#141414"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                ></path>
                            </svg>
                            <div>
                <span class="name">
                  {{ university.applyFile }}
                </span>
                                <span class="size latin-font">{{
                  university.applyFileSize
                }}</span>
                            </div>
                        </div>
                        <button
                                @click="deleteFile(university.userId, university.id)"
                                class="trash"
                        >
                            <svg
                                    class="uk-svg"
                                    fill="none"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                        d="M6.75 7.75L7.59115 17.4233C7.68102 18.4568 8.54622 19.25 9.58363 19.25H14.4164C15.4538 19.25 16.319 18.4568 16.4088 17.4233L17.25 7.75"
                                        stroke="#141414"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                ></path>
                                <path
                                        d="M9.75 7.5V6.75C9.75 5.64543 10.6454 4.75 11.75 4.75H12.25C13.3546 4.75 14.25 5.64543 14.25 6.75V7.5"
                                        stroke="#141414"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                ></path>
                                <path
                                        d="M5 7.75H19"
                                        stroke="#141414"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            id() {
                return this.$store.getters["expert/applyId"];
            },
            universities() {
                return this.$store.getters["expert/applyUniversities"];
            },
        },
        data() {
            return {
                uploadPercent: 0,
                uploadingFor: 0,
                deleting: false,
            };
        },
        methods: {
            async deleteUniversity(id) {
                this.deleting = true;
                const deleteUniversity = await this.$axios.delete(
                    "v1/expert/deleteUniversity/" + id
                );
                if (deleteUniversity.data.status === 1) {
                    this.$toasted.success(deleteUniversity.data.msg, {
                        position: "bottom-left",
                        duration: 5000,
                    });
                    const userUniversities = await this.$axios.get(
                        "v1/expert/getApply/" + this.id
                    );
                    this.$store.commit("expert/applyUniversities", userUniversities.data.universities);
                } else if (deleteUniversity.data.status === 422) {
                    this.errors = deleteUniversity.data.errors;
                    this.$toasted.info(deleteUniversity.data.msg, {
                        position: "bottom-left",
                        duration: 5000,
                    });
                } else {
                    this.$toasted.error(deleteUniversity.data.msg, {
                        position: "bottom-left",
                        duration: 5000,
                    });
                }
                this.deleting = false;
            },
            async changeStatus(id, status) {
                const changeUniversityStatus = await this.$axios.post(
                    "v1/expert/changeUniversityStatus",
                    {id: this.id, universityId: id, status: status}
                );
                if (changeUniversityStatus.data.status === 1) {
                    this.$toasted.success(changeUniversityStatus.data.msg, {
                        position: "bottom-left",
                        duration: 5000,
                    });
                    const userUniversities = await this.$axios.get(
                        "v1/expert/getApply/" + this.id
                    );
                    this.$store.commit("expert/applyUniversities", userUniversities.data.universities);
                } else if (changeUniversityStatus.data.status === 422) {
                    this.errors = changeUniversityStatus.data.errors;
                    this.$toasted.info(changeUniversityStatus.data.msg, {
                        position: "bottom-left",
                        duration: 5000,
                    });
                } else {
                    this.$toasted.error(changeUniversityStatus.data.msg, {
                        position: "bottom-left",
                        duration: 5000,
                    });
                }
            },
            handleUpload(id) {
                var fileVal = document.getElementById("uploadApplyFile" + id);
                fileVal.click();
            },
            uploadApplyFile(userId, id, index) {
                if (this.uploadingFor !== 0) {
                    this.$toasted.error("در حال آپلود فایل . لطفا صبر کنید", {
                        position: "bottom-left",
                        duration: 5000,
                    });
                    return false;
                }
                this.uploadingFor = id;
                var fileVal = document.getElementById("uploadApplyFile" + id);
                const fd = new FormData();
                fd.append("id", id);
                fd.append("userId", userId);
                fd.append("file", fileVal.files[0]);
                this.$axios
                    .post("v1/expert/uploadApplyFile", fd, {
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
                            this.$axios.get("v1/expert/getApply/" + this.id).then((res2) => {
                                this.uploadPercent = 0;
                                this.uploadingFor = 0;
                                this.universities = res2.data.universities;
                                console.log(res.data.data)
                                this.$store.commit('expert/applyUniversityFile', {
                                    index: index,
                                    data: res.data.data,
                                });
                            });

                        } else if (res.data.status === 422) {
                            this.errors = res.data.errors;
                            this.uploadPercent = 0;
                            this.uploadingFor = 0;
                            this.$toasted.info(res.data.msg, {
                                position: "bottom-left",
                                duration: 5000,
                            });
                        } else {
                            this.uploadPercent = 0;
                            this.uploadingFor = 0;
                            this.$toasted.error(res.data.msg, {
                                position: "bottom-left",
                                duration: 5000,
                            });
                        }
                    });
            },
            async deleteFile(userId, id) {
                const deleteApplyFile = await this.$axios.post(
                    "v1/expert/deleteApplyFile",
                    {userId: userId, id: id}
                );
                if (deleteApplyFile.data.status === 1) {
                    this.$toasted.success(deleteApplyFile.data.msg, {
                        position: "bottom-left",
                        duration: 5000,
                    });
                    const userUniversities = await this.$axios.get(
                        "v1/expert/getApply/" + this.id
                    );
                    this.$store.commit("expert/applyUniversities", userUniversities.data.universities);
                } else if (deleteApplyFile.data.status === 422) {
                    this.errors = deleteApplyFile.data.errors;
                    this.$toasted.info(deleteApplyFile.data.msg, {
                        position: "bottom-left",
                        duration: 5000,
                    });
                } else {
                    this.$toasted.error(deleteApplyFile.data.msg, {
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

    .polygon-f {
        clip-path: polygon(0 0, 0% 100%, 100% 100%);
        background: var(--white);
        width: 52px;
        height: 74px;
        position: absolute;
        bottom: -2px;
        left: -2px;

        .polygon-s {
            clip-path: polygon(0 0, 0% 100%, 100% 100%);
            width: 39px;
            height: 59px;
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: rgba(#f1f0f0, 0.45);

            .counter {
                color: #737284 !important;
                bottom: 5px !important;
                left: 25% !important;
            }
        }
    }

    .university-items {
        .box {
            border-radius: 8px;
            @include boxshadow();
            padding: 1.5rem;
            background-color: var(--white);
            margin-bottom: 1.5rem;

            .title-description {
                @include fbx-ai-start-jc-between;
                margin-bottom: 2rem;

                .description {
                    width: 60%;
                    font-size: 0.8rem;
                    color: var(--text-gray);
                    line-height: 1.8rem;
                }

                .title {
                    @include fbx-column-ai-start-jc-start;
                    text-align: left;

                    .name-more {
                        @include fbx-ai-center-jc-start;

                        h2 {
                            font-size: 1.5rem;
                            font-weight: bold;
                            color: var(--black);
                        }

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
                            min-width: 120px;

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

                    .type-line {
                        @include fbx-ai-center-jc-end;
                        margin-right: auto;
                        margin-left: 2rem;
                        width: 80%;

                        span {
                            font-size: 0.9rem;
                            color: var(--black);
                        }

                        hr {
                            border-width: 2px;
                            border-color: var(--black);
                            width: 20px;
                            margin-right: 0.5rem;
                        }
                    }
                }
            }

            .university-statuses-img {
                @include fbx-ai-start-jc-between;
                align-items: stretch;

                .university-statuses {
                    @include fbx-ai-start-jc-start;
                    width: 68%;
                    margin-left: -0.5rem;
                    margin-right: -0.5rem;
                    align-self: stretch;

                    .status {
                        position: relative;
                        background-color: rgba(#f1f0f0, 0.45);
                        width: calc(19.8% - 2rem);
                        margin-left: 0.5rem;
                        margin-right: 0.5rem;
                        padding: 1rem 0.5rem;
                        border-radius: 5px;
                        @include fbx-column-ai-start-jc-start;

                        .icon {
                            margin-bottom: 1rem;
                            @include fbx-ai-start-jc-between;

                            svg {
                                opacity: 1;
                                width: 2.5rem;
                                padding-bottom: 1rem;
                                border-bottom: 1px solid var(--gray);
                                fill: none;
                                color: var(--gray);
                            }
                        }

                        h3 {
                            font-size: 0.8rem;
                            color: var(--black);
                            font-weight: 800;
                            line-height: 1.8rem;
                            max-width: 80%;
                        }

                        .counter {
                            position: absolute;
                            bottom: 0;
                            left: 8%;
                            color: var(--black);
                        }
                    }

                    .status-done {
                        background: linear-gradient(180deg, #acac9d 0%, #9d9e86 100%);

                        .icon {
                            svg {
                                border-color: rgba(white, 0.3);
                                color: var(--white);
                            }

                            span {
                                color: var(--white);
                                font-size: 0.75rem;
                                margin-right: 0.5rem;
                                max-width: 50%;
                            }
                        }

                        h3 {
                            color: var(--white);
                        }

                        .counter {
                            color: var(--white);
                        }
                    }

                    .status-cancel {
                        background: linear-gradient(180deg, #af4444 0%, #553a3a 100%);

                        .icon {
                            svg {
                                border-color: rgba(white, 0.3);
                                color: var(--white);
                            }

                            span {
                                color: var(--white);
                                font-size: 0.75rem;
                                margin-right: 0.5rem;
                                max-width: 50%;
                            }
                        }

                        h3 {
                            color: var(--white);
                        }

                        .counter {
                            color: var(--white);
                        }
                    }
                }

                .university-img {
                    width: 28%;
                    height: 160px;

                    img {
                        border-radius: 5px;
                        height: 10rem;
                        object-fit: cover;
                        width: 100%;
                    }

                    .js-upload {
                        margin-bottom: 0;
                        @include fbx-column-ai-center-jc-center;
                        height: 100%;
                        width: 100%;
                        padding: 0;

                        svg {
                            fill: none;
                            color: var(--main-color);
                        }

                        span {
                            margin-top: 1rem;
                            font-size: 0.9rem;
                            font-weight: 700;
                            color: var(--main-color);
                        }

                        .waiting {
                            color: var(--text-gray);
                            direction: rtl;
                            font-size: 0.8rem;
                        }

                        .file-info {
                            width: 100%;
                            @include fbx-ai-start-jc-start;
                            align-items: flex-start;

                            svg {
                                fill: none;
                                color: var(--main-color);
                                width: 15%;
                            }

                            div {
                                margin-left: 0.5rem;
                                width: 80%;
                                @include fbx-column-ai-start-jc-start;

                                .name {
                                    font-size: 0.8rem;
                                    color: var(--main-color);
                                    text-align: left;
                                    margin-top: 0;
                                }

                                .size {
                                    margin-top: 0.5rem;
                                    color: var(--text-gray);
                                    font-size: 0.9rem;
                                }
                            }
                        }

                        .trash {
                            background-color: var(--inner-background-color);
                            border: 0;
                            padding: 0.5rem;
                            border-radius: 5px;
                            cursor: pointer;
                            align-self: flex-end;
                            margin-right: 1rem;

                            svg {
                                fill: none;
                                color: var(--black);
                            }
                        }
                    }
                }
            }
        }
    }

    @include mobile-device {
        .university-items {
            .box {
                padding: 1rem;

                .title-description {
                    margin-bottom: 1.5rem;

                    .description {
                        width: 50%;
                        text-align: justify;
                        font-size: 0.75rem;
                    }

                    .title {
                        .name-more {
                            h2 {
                                font-size: 1.2rem;
                                text-align: left;
                            }
                        }

                        .type-line {
                            span {
                                font-size: 0.8rem;
                            }
                        }
                    }
                }

                .university-statuses-img {
                    flex-wrap: wrap;

                    .university-statuses {
                        @include fbx-ai-start-jc-start;
                        margin-top: 1.5rem;
                        width: 100%;
                        order: 2;
                        overflow-x: auto;

                        .status {
                            min-width: calc(45% - 2rem);
                            width: calc(45% - 2rem);
                            padding: 0.5rem 0.5rem;

                            .icon {
                                margin-bottom: 0.75rem;

                                svg {
                                    width: 2.5rem;
                                    padding-bottom: 0.75rem;
                                }
                            }

                            h3 {
                                font-size: 0.75rem;
                            }
                        }
                    }

                    .university-img {
                        width: 100%;
                        order: 1;
                    }
                }

                .download-apply {
                    margin-top: 1.5rem;
                    padding-top: 1rem;
                    padding-bottom: 1rem;
                    flex-wrap: wrap;
                    background-color: #fdf8ee;
                    justify-content: center;

                    p {
                        font-size: 0.75rem;
                        line-height: 1.8rem;
                    }

                    a {
                        background-color: var(--main-color);
                        margin-top: 1rem;
                        font-size: 0.75rem;
                        padding: 0.25rem 2rem;
                        color: var(--white);

                        svg {
                            color: var(--white);
                        }
                    }
                }
            }
        }
    }

    @include tablet-device {
        .university-items {
            .box {
                padding: 1rem;

                .title-description {
                    margin-bottom: 1.5rem;

                    .description {
                        width: 50%;
                        text-align: justify;
                        font-size: 0.75rem;
                    }

                    .title {
                        .name-more {
                            h2 {
                                font-size: 1.2rem;
                                text-align: left;
                            }
                        }

                        .type-line {
                            span {
                                font-size: 0.8rem;
                            }
                        }
                    }
                }

                .university-statuses-img {
                    flex-wrap: wrap;

                    .university-statuses {
                        @include fbx-ai-start-jc-start;
                        margin-top: 1.5rem;
                        width: 100%;
                        order: 2;
                        overflow-x: auto;

                        .status {
                            min-width: calc(30% - 2rem);
                            width: calc(30% - 2rem);
                            padding: 0.5rem 0.5rem;

                            .icon {
                                margin-bottom: 0.75rem;

                                svg {
                                    width: 2.5rem;
                                    padding-bottom: 0.75rem;
                                }
                            }

                            h3 {
                                font-size: 0.75rem;
                            }
                        }
                    }

                    .university-img {
                        width: 100%;
                        order: 1;
                    }
                }

                .download-apply {
                    margin-top: 1.5rem;
                    padding-top: 1rem;
                    padding-bottom: 1rem;
                    flex-wrap: wrap;
                    background-color: #fdf8ee;
                    justify-content: center;

                    p {
                        font-size: 0.75rem;
                        line-height: 1.8rem;
                    }

                    a {
                        background-color: var(--main-color);
                        margin-top: 1rem;
                        font-size: 0.75rem;
                        padding: 0.25rem 2rem;
                        color: var(--white);

                        svg {
                            color: var(--white);
                        }
                    }
                }
            }
        }
    }

    @include large-device {
        .university-items {
            .box {
                .title-description {
                    .title {
                        .name-more {
                            h2 {
                                text-align: left;
                            }
                        }
                    }
                }

                .university-statuses-img {
                    flex-wrap: wrap;

                    .university-statuses {
                        width: 100%;
                        margin-top: 1.5rem;
                        order: 2;
                        overflow-x: auto;

                        .status {
                            min-width: calc(28% - 2rem);
                            width: calc(28% - 2rem);
                        }
                    }

                    .university-img {
                        width: 100%;
                        order: 1;
                    }
                }

                .download-apply {
                    p {
                        width: 75%;
                        line-height: 1.8rem;
                    }
                }
            }
        }
    }
</style>
