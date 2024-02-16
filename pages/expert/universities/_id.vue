<template>
    <div>
        <section class="wrapper" id="select-university">
            <UniversityTable/>

            <UniversityInfos/>

            <CloneUniversities/>
        </section>
    </div>
</template>

<script>
import UniversityTable from "@/components/expert/universities/universityTable/index.vue";
import UniversityInfos from "@/components/expert/universities/universityInfos/index.vue";
import CloneUniversities from "~/components/expert/universities/universityTable/modals/_cloneUniversities.vue";

export default {
    layout: "expertLayout",
    components: {
        CloneUniversities,
        UniversityTable,
        UniversityInfos,
    },
    async asyncData({params, store, $auth, $axios, redirect}) {
        if (!$auth.loggedIn) redirect("/auth/signin");
        else {
            if ($auth.user.level === 1 || $auth.user.level === 6 || $auth.user.level === 4) {
                $auth.logout();
                redirect("/auth/signin");
            }
        }
        const {data: allUniversities} = await $axios.post(
            "v1/expert/getAllUniversities"
        );
        const {data: userUniversities} = await $axios.get(
            "v1/expert/getUniversities/" + params.id
        );

      const {data: users} = await $axios.get(
          "v1/expert/users/1"
      );

        store.commit("expert/SET_AllUniversities", allUniversities.universities);
        store.commit("expert/SET_Cities", allUniversities.cities);
        store.commit("expert/SET_States", allUniversities.states);
        store.commit(
            "expert/SET_GeographicalLocations",
            allUniversities.geographicalLocations
        );

        store.commit("expert/SET_UserUniversities", userUniversities.universities);
        store.commit("expert/SET_User", userUniversities.user);
        store.commit("expert/SET_Count", userUniversities.user.maxUniversityCount);
        store.commit("expert/SET_UserId", params.id);
        store.commit("expert/SET_Users", users.users);
    },

    head() {
        return {
            title: "دانشگاه های کاربر",
        };
    },
};
</script>
