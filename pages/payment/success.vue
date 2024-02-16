<template>
  <main class="main" id="payment">
    <section>
      <div class="title">
        <p>پرداخت</p>
      </div>
      <div class="body">
        <div class="img">
          <img src="@/assets/images/payment/Success.svg" alt="" />
        </div>
        <div class="text">
          <p>عملیات پرداخت با <span class="success">موفقیت</span> انجام شد</p>
          <button>تایید</button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/site/css/mixins.scss";
#payment {
  height: 100vh;
  @include fbx-column-ai-center-jc-center;
  > section {
    width: 600px;
    background-color: var(--white);
    padding: 0 !important;
    border-radius: 8px;
    margin: 2rem auto 2rem auto;
    @include boxshadow();
    .title {
      @include fbx-ai-center-jc-between;
      background-color: #f1f0f0;
      padding: 1rem 1.5rem;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      button {
        position: inherit;
        &:hover {
          svg {
            color: #cc2a2a;
          }
        }
      }
      p {
        font-size: 0.9rem;
        font-weight: bold;
        color: #2b2827;
      }
    }
    .body {
      padding: 1.5rem;
      @include fbx-column-ai-center-jc-center;
      .img {
        margin-bottom: 1.5rem;
        text-align: center;
        img {
          width: 80%;
        }
      }
      .text {
        width: 100%;
        @include fbx-column-ai-center-jc-center;
        p {
          font-size: 0.8rem;
          color: var(--black);
          font-weight: 600;
          margin-bottom: 1.5rem;
          line-height: 2rem;
          .success {
            color: #9ea226;
          }
          .error {
            color: #cc2a2a;
          }
        }
        form {
          width: 60%;
          margin-bottom: 1.5rem;
          .form-group {
            position: relative;
            input {
              background-color: var(--white);
              padding: 0.75rem;
              font-size: 0.8rem;
              border-radius: 5px;
              border: 1px solid var(--gray);
              width: calc(100% - 1.5rem);
              color: var(--black);
              font-weight: 600;
              transition: all 0.3s;
              &::placeholder {
                transition: all 0.3s;
                color: var(--text-gray);
                font-size: 0.8rem;
              }
              &:focus {
                outline: 0;
                border-color: var(--main-color);
              }
              &:focus ~ label,
              &:not(:placeholder-shown) ~ label {
                top: -20%;
                padding-right: 0.25rem;
                padding-left: 0.25rem;
              }
            }
            label {
              pointer-events: none;
              transition: all 0.3s;
              color: var(--text-gray);
              position: absolute;
              top: 30%;
              right: 0.75rem;
              font-size: 0.8rem;
              font-weight: 300;
              background-color: var(--white);
            }
            span {
              position: absolute;
              top: 30%;
              left: 0.75rem;
              font-size: 0.8rem;
              text-decoration: underline;
              &.done {
                color: #9ea226;
              }
              &.error {
                color: #cc2a2a;
              }
            }
          }
        }
        .info {
          width: 60%;
          margin-bottom: 1.5rem;
          .additional {
            border-bottom: 1px solid var(--gray);
            padding-bottom: 1rem;
            margin-bottom: 1rem;
          }
          p {
            margin-bottom: 0;
            width: 100%;
            @include fbx-ai-center-jc-between;
          }
        }
        button {
          cursor: pointer;
          background-color: #e6c55b;
          font-size: 0.8rem;
          color: var(--white);
          width: 60%;
          border-radius: 5px;
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
          border: 1px solid #e6c55b;
        }
      }
    }
  }
}
</style>
