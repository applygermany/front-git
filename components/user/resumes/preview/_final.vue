<template>
  <div class="final-submit">
    <form  >
      <div class="go-pay">
        <nuxt-link to="user/resumes" tag="button" >
          بازگشت
        </nuxt-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

.final-submit {
  form {
    .form-group {
      margin-bottom: 1.5rem;
      .uk-checkbox:checked {
        background-image: url("@/assets/user/images/icons/white-check.svg");
        background-size: 80%;
      }
      label {
        color: var(--black);
        font-size: 0.8rem;
        font-weight: 500;
      }
    }
    .go-pay {
      button {
        cursor: pointer;
        border: 0;
        background-color: var(--light-main-color);
        color: #2b2827;
        font-size: 0.8rem;
        font-weight: 600;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        width: 20%;
        border-radius: 5px;
      }
    }
  }
}

@include mobile-device {
  .final-submit {
    form {
      .go-pay {
        button {
          width: 50%;
        }
      }
    }
  }
}

@include tablet-device {
  .final-submit {
    form {
      .go-pay {
        button {
          width: 50%;
        }
      }
    }
  }
}
</style>
