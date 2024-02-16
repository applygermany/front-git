<template>
  <div class="university__table" v-if="university.name !== null">
    <div class="uk-overflow-auto">
      <table class="uk-table expert-table latin-table" dir="ltr">
        <thead>
        <tr>
          <th class="align-right">نام دانشگاه</th>
          <th class="align-right">مقطع</th>
          <th class="align-right">رشته</th>
          <th class="align-right">زبان تحصیلی</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="university-name uk-width-1-7 align-right">{{ university.name }}</td>
          <td class="subject uk-width-1-7 align-right">{{ university.grade }}</td>
          <td class="subject uk-width-1-7 align-right">{{ university.field }}</td>
          <td class="subject uk-width-1-7 align-right">{{ university.language }}</td>
        </tr>
        <tr>
          <td colspan="1">
            علت انتخاب این دانشگاه
          </td>
          <td colspan="3">
            {{university.text1}}
          </td>
        </tr>
        <tr>
          <td colspan="1">
            علت انتخاب این رشته
          </td>
          <td colspan="3">
            {{university.text2}}
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ["university"],
};
</script>

<style lang="scss" scoped>
@import "~/assets/expert/scss/_mixins.scss";

.university__table {
  background-color: var(--white);
  border-radius: 8px;
  direction: rtl;
  div.uk-overflow-auto {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    tbody {
      display: block;
      width: 100%;
      overflow: auto;
      direction: rtl;
      &::-webkit-scrollbar {
        width: 0px;
      }

      /* Track */
      &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
        border-radius: 15px;
      }

      /* Handle */
      &::-webkit-scrollbar-thumb {
        background: var(--main-color);
        border-radius: 15px;
      }
    }
    thead tr {
      display: block;
      direction: rtl;
      th {
        width: calc(97% * 1 / 6.001);
        &:nth-child(1) {
          width: 4.5%;
        }
        &:last-child {
          width: 4.5%;
        }
      }
    }
  }
  table {
    th.check,
    td.check {
      text-align: right;
      .uk-checkbox:checked {
        background-image: url("assets/expert/images/icons/white-check.svg");
        background-size: 80%;
      }
    }
  }
  .table-filter {
    @include fbx-ai-center-jc-between;
    form {
      width: 40%;
      input {
        background-color: inherit;
        text-align: center;
        direction: ltr;
        width: 10%;
        padding: 0.5rem;
        border: 1px solid var(--gray);
        font-size: 1rem;
        color: var(--black);
        border-radius: 5px;
        transition: all 0.3s;
      }
      input:focus {
        border-color: var(--main-color);
        outline: 0;
      }
      label {
        font-size: 0.8rem;
        color: var(--black);
        margin-right: 0.5rem;
      }
    }
    .clear-submit {
      width: 48%;
      @include fbx-ai-center-jc-end;
      .clear {
        text-align: center;
        border-radius: 5px;
        border: 1px solid var(--gray);
        font-size: 0.8rem;
        color: var(--black);
        padding: 0.75rem 0;
        width: 35%;
        transition: all 0.3s;
        font-weight: 500;
        &:hover {
          background-color: var(--text-gray);
          color: var(--white);
        }
      }
      .submit {
        text-align: center;
        width: 35%;
        font-weight: 500;
        margin-right: 1rem;
        font-size: 0.8rem;
        color: var(--black);
        border: 1px solid var(--inner-background-color);
        border-radius: 5px;
        background-color: var(--inner-background-color);
        padding: 0.75rem 0;
        transition: all 0.3s;
        &:hover {
          color: #2b2827;
          background-color: var(--light-main-color);
        }
      }
    }
  }
}

@include mobile-device {
  .university__table {
    direction: ltr;
    padding: 0.5rem;
    margin-bottom: 2rem;
    .table-filter {
      direction: rtl;
      @include fbx-ai-center-jc-between;
      flex-wrap: wrap;
      form {
        width: 100%;
        margin-top: 1rem;
        margin-bottom: 1rem;
        input {
          padding: 0.25rem;
          font-size: 0.9rem;
        }
        label {
          font-size: 0.75rem;
        }
      }
      .clear-submit {
        justify-content: flex-start;
        width: 100%;
        .clear {
          font-size: 0.75rem;
          padding: 0.5rem 0;
          width: 40%;
        }
        .submit {
          width: 40%;
          font-size: 0.75rem;
          padding: 0.5rem 0;
        }
      }
    }
  }
}

@include tablet-device {
  .university__table {
    direction: ltr;
    padding: 0.5rem;
    margin-bottom: 2rem;
    .table-filter {
      direction: rtl;
      @include fbx-ai-center-jc-between;
      flex-wrap: wrap;
      form {
        width: 50%;
        margin-top: 1rem;
        margin-bottom: 1rem;
        input {
          padding: 0.25rem;
          font-size: 0.9rem;
        }
        label {
          font-size: 0.75rem;
        }
      }
      .clear-submit {
        width: 50%;
        .clear {
          font-size: 0.75rem;
          padding: 0.5rem 0;
          width: 40%;
        }
        .submit {
          width: 40%;
          font-size: 0.75rem;
          padding: 0.5rem 0;
        }
      }
    }
  }
}
</style>