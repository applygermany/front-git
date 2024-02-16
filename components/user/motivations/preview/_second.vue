<template>
  <div class="resume-box second">
    <h3>اطلاعات فردی دقیقا مطابق با پاسپورت</h3>
    <hr />
    <div class="body">
      <form  >
        <div class="row">
          <div class="form-group">
            <input :value="previewMotivation.name" placeholder=" "  disabled />
            <label>نام (انگلیسی)</label>
          </div>
          <div class="form-group">
            <input :value="previewMotivation.family" placeholder=" " disabled  />
            <label>نام خانوادگی (انگلیسی)</label>
          </div>
          <div class="form-group">
            <input :value="previewMotivation.phone" type="number" placeholder=" " disabled  />
            <label>شماره تماس</label>
          </div>
        </div>
        <div class="row">
          <div class="form-group">
            <client-only>
              <input placeholder=" " id="birthDate" disabled  />
              <label>تاریخ تولد</label>
              <svg

                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="uk-svg uk-svg"
              >
                <path
                  d="M19.25 11.25V8.75C19.25 7.64543 18.3546 6.75 17.25 6.75H6.75C5.64543 6.75 4.75 7.64543 4.75 8.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H11.25M17 14.75V19.25M19.25 17H14.75M8 4.75V8.25M16 4.75V8.25M7.75 10.75H16.25"
                  stroke="#141414"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <date-picker
                :value="previewMotivation.birth_date"
                custom-input="#birthDate"
                color="#e2ad42"
                format="YYYY-MM-DD"
                display-format="jDD jMMMM jYYYY"
                disabled
              />
            </client-only>
          </div>
          <div class="form-group">
            <input :value="previewMotivation.birth_place" placeholder=" " disabled  />
            <label>محل تولد</label>
          </div>
          <div class="form-group">
            <input :value="previewMotivation.email" type="email" placeholder=" " disabled  />
            <label>ایمیل</label>
          </div>
        </div>
        <div class="row">
          <div class="form-group w-100">
            <input :value="previewMotivation.address" placeholder=" " disabled  />
            <label>آدرس</label>
          </div>
        </div>
      </form>
      <div class="vector">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="376"
          height="398.299"
          viewBox="0 0 376 398.299"
          class="back-triangle uk-svg"
        >
          <path
            id="BG"
            d="M0-72.3V326H376Z"
            transform="translate(0 72.299)"
            fill="#26262e"
            opacity="0.6"
          ></path>
        </svg>
        <div class="main">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI4OC44MjQiIHZpZXdCb3g9IjAgMCAyNDAgMjg4LjgyNCI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6I2E0NmYzYTt9LmJ7ZmlsbDp1cmwoI2EpO30uY3tmaWxsOiNiYTdiNDA7b3BhY2l0eTowLjg7fS5jLC5nLC5oLC5qe2ZpbGwtcnVsZTpldmVub2RkO30uZHtmaWxsOnVybCgjYik7fS5le2ZpbGw6dXJsKCNjKTt9LmZ7ZmlsbDojZTM2ZTVkO30uZiwuaXtvcGFjaXR5OjAuNTt9Lmd7ZmlsbDojODk4ODhjO29wYWNpdHk6MC40NTt9Lmh7ZmlsbDp1cmwoI2QpO30uaXtmaWxsOiM5MzYyMzM7fS5qe2ZpbGw6I2VmZWZlZjt9PC9zdHlsZT48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIwLjUiIHkxPSIxLjAwMSIgeDI9IjAuNSIgeTI9IjAuMDAxIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZTJhZDQyIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZjdkYzc3Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgxPSIwLjUiIHkxPSIxIiB4Mj0iMC41IiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZThlOGU4Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjY2RjZGNkIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImMiIHgxPSIwLjUwMSIgeTE9IjEiIHgyPSIwLjUwMSIgeTI9Ii0wLjAwMSIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmYWU3OCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmOTU3YyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJkIiB4MT0iMC41MDEiIHkxPSIxLjAwMiIgeDI9IjAuNTAxIiB5Mj0iMC4wMDIiIGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMyNzEyMDkiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM2YTNkMWIiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBjbGFzcz0iYSIgZD0iTTM3MS4zNDksNTQ2LjgxOWM0NS42Ni05LjI5NCw1OC41MjQtMTk5LjAzOCw0My4xODYtMjI1LjQzOHMtMTcwLjk3OC01OS4wOS0yMTAuNjMtNDAuMjg4LDQuNzcxLDI0NC4zMSwxNS4zNzMsMjYzLjIxN1MzNDMuNSw1NTIuNTA5LDM3MS4zNDksNTQ2LjgxOVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xODcuNzM1IC0yNzUuMjc3KSIvPjxwYXRoIGNsYXNzPSJiIiBkPSJNMjAzLjM3Miw0OTAuODQxaDBjNS41NDksMjcuNzQyLDExLjAyNiw0OC40NTIsMTMuOTI0LDUzLjY0Nyw0LjUyNCw4LjAyMiwyNy41MywxMC42LDU0LjY3MiwxMC42YTYxNC42NSw2MTQuNjUsMCwwLDAsNjIuMDIzLTMuNTM0YzE1LjMzOC0xLjU1NSwyOC4yNzMtMy4zMjIsMzUuMzQxLTQuODA2LDQ1LjY2LTkuMjk0LDU4LjUyNC0xOTkuMDM4LDQzLjE4Ni0yMjUuNDM4cy0xNzEuMDEzLTU5LjA5LTIxMC42My00MC4yODhDMTczLjE1NiwyOTUuMDU0LDE4OC42MzUsNDE3LjQ3NCwyMDMuMzcyLDQ5MC44NDFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTc4LjY4NSAtMjc1LjQ1NCkiLz48cGF0aCBjbGFzcz0iYyIgZD0iTTIzNC4wNDEsNDM4LjYxOWwxMC4xNDMtMjUuNDFjLjQ5NS04LjE2NC45OS0xNy4wNjkuNzc3LTE4LjU1NGExNS44NjksMTUuODY5LDAsMCwxLTkuNDcxLS41M2MtMy41MzQtMS45NzktMTMuMzIzLTIwLjUtMTIuNTgxLTI1LjM3NWExNi4yOTIsMTYuMjkyLDAsMCwxLDguNjU4LTkuOTMxYy45OS0uNDI0LDIuNzkyLjM4OSw0LjQ1MywxLjQxM2gwYy0uNDI0LTEuNy03LjYtMjguNTItNy43LTMxLjgwN2EyLjM2NywyLjM2NywwLDAsMSwuMjQ3LS45NTRjMS44LTQuNDg4LDE0LjEzNi0xNi44OTMsMjYuMDExLTIyLjY4OSwxMi45Ny02LjI5MSwzNC45MTctMTcuNjcsMzcuNTY3LTE2LjI5MmE5Mi43NDQsOTIuNzQ0LDAsMCwxLDkuNTQyLDcuNjY5bDkuMTUzLDMuNTM0czkuMTg5LDIyLjI2NSw5LjU3NywyNi43NTNhMy4yODksMy4yODksMCwwLDEsMCwuODEzYy0uNiw0Ljc3MS04LjMsMTUuMzM4LTkuMjU5LDE2LjY0NWgwYy0uNzA3LDcuNTYzLTEuNDE0LDE1LjI2Ny0xLjQxNCwxNi4zNjMsMCwxLjk3OSw1LjA1NCw1LjQwNyw2LjE0OSwxMS4xNjhzLTEyLjYxNyw0Ny4xMDktMTQuMTM2LDQ3Ljk1N2EzNC4xLDM0LjEsMCwwLDEtMTUuODMzLDBsLS43NzgsOC41MTcsMTUuOCwyMi40MDZjMTMuNzQ3LDkuMDgzLDMxLjEsMjAuOTIyLDMyLjM3MiwyMy40MzEsMS44LDMuNTM0LDUuNjE5LDM0Ljc3NSw2Ljg1Niw0NS4yNzEuMjgzLDIuMTIuNDI0LDMuNTM0LjQyNCwzLjUzNEgyNzguMTQ2Yy0yNy4xNDIsMC01MC4xNDgtMi42ODYtNTQuNjcyLTEwLjYtMi45LTUuMi04LjM3Ni0yNS45LTEzLjkyNC01My42NDdoMEMyMTguODQ0LDQ1MC4yNDYsMjI5LjIsNDQyLjMzLDIzNC4wNDEsNDM4LjYxOVptMi4wNS03OC4zNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xODQuNzIxIC0yNDIuNzA1KSIvPjxwYXRoIGNsYXNzPSJkIiBkPSJNMTkzLjQzOSw0MzUuNTA4SDM2OC4wNTdzLTUuNzI1LTQ5LjkzNi04LjE2NC01NC42Yy0xLjkwOC0zLjc0Ni0zNS44NzEtMjYuMTUyLTQ5LjQ3Ny0zNS4wOTNsLTUuNjktMy43MTEtNDUuNy0xNS44MzMtNy4wNjgsMTIuNzIzUzIwNS4zNDgsMzc0LjA4NiwxOTguNywzODQuMzcsMTkzLjQzOSw0MzUuNTA4LDE5My40MzksNDM1LjUwOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNTQuODI3IC0xNDYuNjg0KSIvPjxwYXRoIGNsYXNzPSJlIiBkPSJNMjE1LjU1OCwzODguMjE3YTE3LjkxNywxNy45MTcsMCwwLDAsMTAuNi42MzZjLjQyNCwzLjIxNi0xLjk3OSwzNy4yODQtMS45NzksMzcuMjg0LDkuMjk1LDEyLjcyMyw0OC40MTcsMzcuNzQ0LDQ5LjgzLDM3LjM1NXMtMS40MTQtMTguOTc4LTEuNDE0LTE4Ljk3OGwtMy4wMzktMi40MzhMMjcyLDQxNi42NjdhMzkuMzY5LDM5LjM2OSwwLDAsMCwxNy42NywwYzEuNTktLjk5LDE2LjkyOC00Ny40MjcsMTUuNzYyLTUzLjg1OXMtNi44NTYtMTAuMjg0LTYuODU2LTEyLjUxMWMwLTEuNTU1LDEuMjcyLTE1LjIzMiwyLjE1Ni0yNS4yaDBhMS41OTMsMS41OTMsMCwwLDEsMC0uMzg5Yy4zNTQtNC4wMjkuNjM2LTcuMzg2LjcwNy05LjA0Ny4zMTgtNS43NjEtMTUuMi0yNC4yMDgtMTUuMi0yNC4yMDgtMzIuNzI1LTEwLjI4NC02Ni44MjksNS40NDMtNzAuNjgxLDE0LjM0OHM0LjI0MSw0Ny4wNzQsNC4yNDEsNDcuMDc0YTMzLjMsMzMuMywwLDAsMC0zLjgxNy0yLjU4aDBjLTEuODczLTEuMTMxLTMuOTIzLTIuMDUtNC45NDgtMS41OS0yLjI2Mi44ODQtOC45NzcsNS43MjUtOS43ODksMTEuMTY4UzIxMS40OTMsMzg1Ljk5MSwyMTUuNTU4LDM4OC4yMTdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTIwLjExOCAtMjQzLjQ0MikiLz48cGF0aCBjbGFzcz0iZiIgZD0iTTIwNS42NywzNTMuODg1YzkuMjk1LDEyLjcyMyw0OC40MTcsMzcuNzQ0LDQ5LjgzLDM3LjM1NXMtMS40MTQtMTguOTc4LTEuNDE0LTE4Ljk3OGwtMy4wMzktMi40MzgsMi40MzktMjUuNDFhMzkuMzY4LDM5LjM2OCwwLDAsMCwxNy42Nywwcy0yMC45OTItMi4wMTUtMzEuMjc2LTQuNDUzYTY2Ljc5Myw2Ni43OTMsMCwwLDEtMjUuNDEtMTMuNzEyLDc4Ljk0MSw3OC45NDEsMCwwLDEtNi44OTEtOS42NDhDMjA4LjA3MywzMTkuODE2LDIwNS42NywzNTMuODg1LDIwNS42NywzNTMuODg1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwMS41NzIgLTE3MS4xODgpIi8+PHBhdGggY2xhc3M9ImciIGQ9Ik0xOTMuMzIsMzYwLjg0czEzMS40MzItMTEuNDg2LDE3NC42MTgsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNTQuNzA4IC03Mi4wMTYpIi8+PHBhdGggY2xhc3M9ImgiIGQ9Ik0xOTkuNzQsMzI3Ljk0OGMwLDMuNTM0LDguMTI4LDMzLjYwOSw4LjYyMywzNS41MTdoMGw3Ljk4Nyw5LjIyNHMzLjUzNC0zNS44LDMuNTM0LTM4LjQ1MSw0Ljg0Mi0xNS40MDgsMTEuMDYyLTE2LjA0NSw2MC4wNzksMTcuNjcsNjAuMDc5LDE3LjY3bDIuMjYyLTEuNzMyLS44MTMsOS4zNjV2MS41NTVoMGMxLjEtMS40ODQsOS43NTQtMTMuMzIzLDEwLjM5LTE4LjdhMi41NDEsMi41NDEsMCwwLDAsMC0uODg0Yy0uMzg5LTUuMDU0LTEwLjYtMzAuMDc1LTEwLjYtMzAuMDc1bC0xMC4yODQtMy44MTdhMTEyLjAzNCwxMTIuMDM0LDAsMCwwLTEwLjYtOC42MjNjLTMtMS43LTI3LjYzNiwxMS4yMzktNDIuMiwxOC4yNzEtMTMuMzIzLDYuNS0yNy4xNzcsMjAuNDYyLTI5LjE5MSwyNS40ODFhMi44MjcsMi44MjcsMCwwLDAtLjI0NywxLjIzN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTIuMzU4IC0yNTYuODIyKSIvPjxwYXRoIGNsYXNzPSJpIiBkPSJNMjAwLjA2NSwzMTQuODE0YzAsMy41MzQsOC4xMjgsMzMuNjA5LDguNjIzLDM1LjUxN2gwbDUuNjU1LDExLjAyNiwyLjMzMi0xLjhzNS44MzEtMzkuODI5LDEwLjYtNDIuNDA5LDYwLjA3OSwyLjIyNiw2NS40MTYsMTMuMjg4aDBsLS4yMTIsMS4xdi4yODNoMGMxLjEtMS40ODQsOS43NTQtMTMuMzIzLDEwLjM5LTE4LjdsLS4yODMtMi43MjFMMjgxLjk0OSwyODcuOTlsNS40MDcsMTQuOTE0aDBsMi4xNTYsNS45NzMtMzguMjM5LTE2LjUsOC44LDguMzA1cy0zNy4zNTUtLjQ5NS00Ni42ODUsMy4yMTZhMzAuMzkxLDMwLjM5MSwwLDAsMC02LjA0MywzLjM1Nyw2Mi44NzEsNjIuODcxLDAsMCwwLTcuNDkyLDYuMTg1LDIuODI4LDIuODI4LDAsMCwwLC4yMTIsMS4zNzhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTEyLjY4MyAtMjQzLjY4OCkiLz48cGF0aCBjbGFzcz0iaiIgZD0iTTI2MS41NzEsMzU0Ljk3M3MtMi45MzMsOC4zMDUtNS4zMzYsOS4zNjUtMTIuODY0LTUuNzYtMTIuODY0LTUuNzZsLTI3LjE3Ny0xOS41NDMsMS4xMzEtMTYuNTc1TDIwNS45MSwzNTEuMDUxczEwLjYsMzQuOTE3LDI1LjA1Nyw0NS45NDNsOC40NDYtMjQuNzM4UzI1NC40LDM4Ny4yLDI1Ni4yMzUsMzg2Ljg4NnMxMS4zNDQtMTIuMjYzLDExLjM0NC0xMi4yNjNhNTMuMjUyLDUzLjI1MiwwLDAsMSwxMS4zNDQsMTQuMTM2bDEuOTA4LTI0LjczOC0xNy42Ny0yNS4xMjdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTEyLjA5NiAtMTU2LjMzOSkiLz48L3N2Zz4="
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    previewMotivation() {
      return this.$store.getters["motivations/previewMotivation"];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

.second {
  .body {
    @include fbx-ai-start-jc-between;
    form {
      width: 65%;
      max-width: 65%;
    }
    .vector {
      position: relative;
      .back-triangle {
        z-index: 1;
        left: 0;
        bottom: 0;
        position: absolute;
        fill: none;
        color: var(--inner-background-color);
      }
      .main {
        img {
          width: 60%;
          //margin-bottom: 5rem;
        }
        z-index: 9999;
      }
      width: 30%;
      max-width: 30%;
    }
  }
}

@include mobile-device {
  .second {
    .body {
      form {
        width: 100%;
        max-width: 100%;
      }
      .vector {
        display: none;
      }
    }
  }
}

@include tablet-device {
  .second {
    .body {
      form {
        width: 100%;
        max-width: 100%;
      }
      .vector {
        display: none;
      }
    }
  }
}

@include large-device {
}
</style>
