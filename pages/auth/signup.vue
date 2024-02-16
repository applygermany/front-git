<template>
    <div>
        <main class="main">
            <!-- Register Section -->
            <section class="auth uk-container">
                <!-- Register Form -->
                <Form/>

                <div class="background">
                    <img alt="" src="/auth/images/auth/register.svg"/>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
    import Form from "@/components/auth/signup/_form.vue";

    export default {
        layout: "authLayout",
        components: {Form},
        async asyncData({$auth, redirect}) {
            if ($auth.loggedIn) {
              if ($auth.user.level === 1) redirect('/user/dashboard');
              if ($auth.user.level === 6) redirect('/writer/dashboard');
              if ($auth.user.level === 7) redirect('/expert/telSupports');
              else if ($auth.user.level === 2 || $auth.user.level === 3 || $auth.user.level === 5)
                redirect('/expert/dashboard');
                else $auth.logout();
            }
        },
        head() {
            return {
                title: "عضویت",
            };
        },
    };
</script>
