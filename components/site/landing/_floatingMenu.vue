<template>
  <div class="floating-menu">
    <ul :class="{ panels: position == 'panels' }">
      <li :class="{ active: position == 'first-part' }">
        <a href="#first-part" uk-scroll>اپلای جرمنی</a>
      </li>
      <li :class="{ active: position == 'why-apply' }">
        <a href="#why-apply" uk-scroll>چرا اپلای</a>
      </li>
      <li :class="{ active: position == 'steps-slider' }">
        <a href="#steps-slider" uk-scroll>مراحل اپلای</a>
      </li>
      <li :class="{ active: position == 'panels' }">
        <a href="#panels" uk-scroll>تعرفه و خدمات</a>
      </li>
      <li :class="{ active: position == 'coming-soon' }">
        <a href="#coming-soon" uk-scroll>دانلود اپلیکیشن</a>
      </li>
      <li :class="{ active: position == 'comments-slider' }">
        <a href="#comments-slider" uk-scroll>نظرات کاربران</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    position() {
      return this.$store.getters.position;
    },
  },
  methods: {
    check() {
      console.log(this.$route);
      console.log(this.$router);
    },
  },
  mounted() {

    const el = document.querySelector(".floating-menu");
    el.style.top = `25%`;
  },
  beforeDestroy() {
    document.removeEventListener("scroll", () => {});
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/site/css/mixins";
.panels li a {
  color: white !important;
}
.floating-menu {
  width: 12% !important;
  position: fixed!important;
  right: 2.5rem!important;
  //bottom: 6rem!important;
  bottom: 20% !important;
  z-index: 90000000!important;
  ul {
    //width: 12%!important;
    list-style: none!important;
    padding: 0!important;
    li {
      margin-bottom: 1rem!important;
      position: relative!important;
      width: fit-content!important;
      a {
        width: fit-content!important;
        color: var(--black);
        font-size: 0.8rem!important;
        font-weight: 300!important;
        transition: all 0.3s!important;
        margin-right: 1rem!important;
      }
      &:last-child {
        margin-bottom: 0!important;
      }
      &.active {
        a {
          font-weight: 700!important;
        }
        &::before {
          color: var(--main-red-color)!important;
          content: "|"!important;
          font-size: 1.3rem!important;
          top: -0.2rem!important;
        }
      }
      &:hover {
        a {
          font-weight: 700!important;
        }
        &::before {
          color: var(--main-red-color)!important;
          content: "|"!important;
          font-size: 1.3rem!important;
          top: -0.2rem!important;
        }
      }
      &::before {
        position: absolute!important;
        transition: all 0.3s!important;
        color: #d9d9d9!important;
        font-weight: 700!important;
        content: "\2022"!important;
      }
    }
  }

  &.with-panels {
    li {
      a {
        color: var(--white)!important;
      }
    }
  }
}

@include mobile-device {
  .floating-menu {
    display: none;
  }
}

@include tablet-device {
  .floating-menu {
    display: none;
  }
}
</style>
