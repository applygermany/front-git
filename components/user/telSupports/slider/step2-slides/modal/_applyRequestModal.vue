<template>
  <div id="apply-request-modal" class="apply-request-modal" uk-modal>
    <div class="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
      <div class="title">
        <p>توجه</p>

        <button class="uk-modal-close-default" type="button" uk-close></button>
      </div>
      <div class="text">
        <p>{{ $auth.user.firstname }} عزیز شما باید درخواست خود را در مقطع کالج پر کنید!</p>
        <div class="buttons">
          <a class="change uk-modal-close" @click="$store.dispatch('applyRequest/setPosition', 'index')"> تغیر به کالج </a>
          <nuxt-link to="/user/dashboard" class="cancel uk-modal-close">
            انصراف
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
