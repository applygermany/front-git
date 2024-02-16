<template>
    <div class="sixth-seventh">
        <div :class="'resume-box sixth '+(canFill ? 'fade' : '')">
            <h3>6- دانش نرم افزاری</h3>
            <hr/>

            <div class="items">
                <form :key="index" @submit.prevent=""
                      v-for="(softwareKnowledge, index) in resume.softwareKnowledges">
                    <div class="row">
                        <div class="form-group w-40">
                            <input
                                    :class="{ 'error-input': errors.includes('title-'+index) }"
                                    :value="softwareKnowledge.title"
                                    @change="changeSoftwareKnowledgesTitle({ val: $event.target.value, index })"

                                    @focus="removeFromError('title-'+index)"
                                    placeholder=" "
                            />
                            <label class="floating">نام نرم افزار</label>
                        </div>
                        <div class="language-level w-55">
                            <span>میزان تسلط</span>
                            <div class="choose-options">
                                <a
                                        :class="{
                  active: softwareKnowledge.fluencyLevel === 1,
                  'error-input': errors.includes('fluencyLevel-'+index),
                }"
                                        @click="
                  changeSoftwareKnowledgeLevel({index: index,val: 1,});
                "
                                >
                                    1
                                </a>
                                <a
                                        :class="{
                  active: softwareKnowledge.fluencyLevel === 2,
                  'error-input': errors.includes('fluencyLevel-'+index),
                }"
                                        @click="
                  changeSoftwareKnowledgeLevel({index: index,val: 2,});
                "
                                >
                                    2
                                </a>
                                <a
                                        :class="{
                  active: softwareKnowledge.fluencyLevel === 3,
                  'error-input': errors.includes('fluencyLevel-'+index),
                }"
                                        @click="
                  changeSoftwareKnowledgeLevel({index: index,val: 3,});
                "
                                >
                                    3
                                </a>
                                <a
                                        :class="{
                  active: softwareKnowledge.fluencyLevel === 4,
                  'error-input': errors.includes('fluencyLevel-'+index),
                }"
                                        @click="
                  changeSoftwareKnowledgeLevel({index: index,val: 4,});
                "
                                >
                                    4
                                </a>
                                <a
                                        :class="{
                  active: softwareKnowledge.fluencyLevel === 5,
                  'error-input': errors.includes('fluencyLevel-'+index),
                }"
                                        @click="
                  changeSoftwareKnowledgeLevel({index: index,val: 5,});
                "
                                >
                                    5
                                </a>
                            </div>
                        </div>
                    </div>
                    <div @click="deleteKnowledge(index)" class="delete-form" v-if="index > 0">
                        <a>
                            <svg
                                    class="uk-svg"
                                    fill="none"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                        d="M17.25 6.75L6.75 17.25"
                                        stroke="#141414"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                ></path>
                                <path
                                        d="M6.75 6.75L17.25 17.25"
                                        stroke="#141414"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                ></path>
                            </svg>
                        </a>
                    </div>

                </form>
            </div>
            <div class="add-more">
                <a @click="addKnowledge">
                    <svg
                            class="uk-svg"
                            fill="none"
                            height="24"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                                d="M12 5.75V18.25"
                                stroke="#141414"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                        ></path>
                        <path
                                d="M18.25 12H5.75"
                                stroke="#141414"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                        ></path>
                    </svg>
                </a>
            </div>

        </div>
        <div :class="'resume-box seventh '+(canFill ? 'fade' : '')">
            <h3>7- دوره ها و مدارک</h3>
            <hr/>
            <form @submit.prevent="">
                <div :key="index" class="row" v-for="(course, index) in resume.courses">
                    <div class="form-group w-35">
                        <div @click="deleteCourse(index)" class="delete-form" v-if="index > 0">
                            <a>
                                <svg
                                        class="uk-svg"
                                        fill="none"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                            d="M17.25 6.75L6.75 17.25"
                                            stroke="#141414"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="1.5"
                                    ></path>
                                    <path
                                            d="M6.75 6.75L17.25 17.25"
                                            stroke="#141414"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="1.5"
                                    ></path>
                                </svg>
                            </a>
                        </div>

                        <input
                                :class="{ 'error-input': errors.includes('courseTitle-'+index) }"

                                :value="course.courseTitle"
                                @change="changeCoursesTitle({ val: $event.target.value, index })"
                                @focus="removeFromError('courseTitle-'+index)"
                                placeholder=" "

                        />
                        <label class="floating">عنوان دوره</label>
                    </div>
                    <div class="form-group w-35">
                        <input
                                :class="{ 'error-input': errors.includes('courseOrganizer-'+index) }"

                                :value="course.courseOrganizer"
                                @change="changeCoursesOrganizer({ val: $event.target.value, index })"
                                @focus="removeFromError('courseOrganizer-'+index)"
                                placeholder=" "

                        />
                        <label class="floating">برگزار کننده</label>
                    </div>
                    <div class="form-group w-20">
                        <input
                                :class="{ 'error-input': errors.includes('courseYear-'+index) }"
                                :value="course.courseYear"
                                @change="changeCoursesYear({ val: $event.target.value, index })"


                                @focus="removeFromError('courseYear-'+index)"
                                placeholder=" "
                                type="number"

                        />
                        <label class="floating">تاریخ (سال)</label>
                    </div>
                </div>
                <div class="row">
                    <div class="add-more">
                        <a @click="addCourse">
                            <svg
                                    class="uk-svg"
                                    fill="none"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                        d="M12 5.75V18.25"
                                        stroke="#141414"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                ></path>
                                <path
                                        d="M18.25 12H5.75"
                                        stroke="#141414"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                ></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import {mapMutations} from "vuex";

    export default {
        props: ["resume"],
        data() {
            return {
                errors: [],
                setTime: null
            };
        },
        computed: {
            canFill() {
                return this.$store.getters['resume/canFill'];
            },
        },
        methods: {
            ...mapMutations({
                changeSoftwareKnowledgesTitle: "resume/SET_SoftwareKnowledgesTitle",
                changeSoftwareKnowledgesFluencyLevel:
                    "resume/SET_SoftwareKnowledgesFluencyLevel",
                changeCoursesTitle: "resume/SET_CoursesTitle",
                changeCoursesOrganizer: "resume/SET_CoursesOrganizer",
                changeCoursesYear: "resume/SET_CoursesYear",
                deleteCourse: "resume/Delete_Course",
                deleteKnowledge: "resume/Delete_Knowledge",

            }),
            removeFromError(name) {
                const newErrors = this.errors.filter((item) => item != name);

                this.errors = newErrors;
            },
            changeSoftwareKnowledgeLevel(payload) {
                this.removeFromError("fluencyLevel");
                this.$store.commit("resume/SET_SoftwareKnowledgesFluencyLevel", payload)
            },

            addCourse() {
                this.errors = [];
                // this.$store.dispatch("resume/checkCourseErrors", 1);
                this.resume.courses.forEach((item, index) => {
                    for (const key in item) {
                        if (item[key] == null || item[key] == "")
                            this.errors.push(`${key}-${index}`);
                    }
                });

                if (this.errors.length !== 0) {
                    return;
                }
                this.$store.commit("resume/Add_Course");
            },

            addKnowledge() {
                this.errors = [];
                this.$store.dispatch("resume/checkKnowledgeErrors", 1);
                this.resume.softwareKnowledges.forEach((item, index) => {
                    for (const key in item) {
                        if (item[key] == null || item[key] == "")
                            this.errors.push(`${key}-${index}`);
                    }
                });

                if (this.errors.length !== 0) {
                    return;
                }
                this.$store.commit("resume/Add_Knowledge");
            },
        },
    };
</script>

<style lang="scss" scoped>
    @import "~/assets/user/scss/_mixins.scss";

    ::-webkit-scrollbar {
        width: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
        border-radius: 15px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: var(--main-color);
        border-radius: 15px;
    }

    .sixth-seventh {
        @include fbx-ai-start-jc-between;

        form {
            .row {
                @include fbx-ai-center-jc-between;
                flex-wrap: wrap;
                margin-bottom: 1.5rem;

                .add-more {
                    a {
                        @include fbx-ai-center-jc-center;
                        background-color: var(--inner-background-color);
                        border-radius: 5px;
                        width: 2rem;
                        height: 2rem;
                        transition: all 0.3s;

                        svg {
                            transition: all 0.3s;
                            color: var(--text-gray);
                        }

                        &:hover {
                            background-color: var(--light-main-color);

                            svg {
                                color: #2b2827;
                            }
                        }
                    }
                }

                .language-level {
                    @include fbx-column-ai-start-jc-start;
                    position: relative;

                    span {
                        top: -2rem;
                        position: absolute;
                        font-size: 0.8rem;
                        color: var(--black);
                        margin-bottom: 1rem;
                        align-self: flex-end;
                    }

                    .choose-options {
                        align-self: flex-end;
                        @include fbx-ai-start-jc-start;

                        a {
                            @include fbx-ai-center-jc-center;
                            margin-right: 1rem;
                            width: 2rem;
                            height: 2rem;
                            border-radius: 50%;
                            border: 1px solid var(--gray);
                            color: var(--black);
                            font-size: 0.9rem;
                            transition: all 0.3s;

                            &:hover {
                                background-color: var(--inner-background-color);
                            }

                            &.active {
                                background-color: var(--main-color);
                                color: var(--white);
                            }
                        }
                    }
                }
            }
        }

        .sixth {
            width: 43%;
            height: 13rem;
            overflow-y: scroll;

        }


        .seventh {
            width: 43%;
            height: 13rem;
            overflow-y: scroll;

        }
    }

    @include mobile-device {
        .sixth-seventh {
            flex-wrap: wrap;

            form {
                .row {
                    margin-bottom: 0;

                    .form-group {
                        margin-bottom: 1.5rem;
                        width: 100% !important;
                    }

                    .language-level {
                        width: 100% !important;
                        align-items: center;
                        margin-bottom: 1rem;

                        span {
                            position: unset;
                            width: 100%;
                            text-align: center;
                        }

                        .choose-options {
                            width: 100%;
                        }
                    }
                }
            }

            .sixth {
                width: 100%;
                margin-bottom: 1.5rem;
            }

            .seventh {
                width: 100%;
            }
        }
    }

    @include tablet-device {
        .sixth-seventh {
            flex-wrap: wrap;

            form {
                .row {
                    margin-bottom: 0;

                    .form-group {
                        margin-bottom: 1.5rem;
                        width: 100% !important;
                    }

                    .language-level {
                        width: 100% !important;
                        align-items: center;
                        margin-bottom: 1rem;

                        span {
                            position: unset;
                            width: 100%;
                            text-align: center;
                        }

                        .choose-options {
                            width: 100%;
                        }
                    }
                }
            }

            .sixth {
                width: 100%;
                margin-bottom: 1.5rem;
            }

            .seventh {
                width: 100%;
            }
        }
    }
</style>
