<template>
  <div class="page-title">
    <div class="return-back">
      <a  >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="uk-svg"
        >
          <path
            d="M10.75 8.75L14.25 12L10.75 15.25"
            stroke="#141414"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </a>
      <h1>وضعیت اپلای</h1>
    </div>
    <p>
      وضعیت اپلای دانشگاه‌های کاربر
      <span class="name">
        {{ $auth.user.firstname }} {{ $auth.user.lastname }}
      </span>
      در اپلای جرمنی
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
