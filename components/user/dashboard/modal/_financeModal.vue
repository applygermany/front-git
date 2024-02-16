<template>
  <div id="finance-modal" class="finance-modal" uk-modal>
    <div class="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
      <div class="title">
        <p>تاریخچه تراکنش ها</p>
        <button class="uk-modal-close-default" type="button" uk-close></button>
      </div>
      <div class="table">
        <table class="uk-table">
          <caption></caption>
          <thead>
            <tr>
              <th>ردیف</th>
              <th class="description">توضیحات</th>
              <th class="date">تاریخ</th>
              <th class="date">وضعیت</th>
              <th class="date">نوع پرداخت</th>
              <th style="text-align: center">مبلغ</th>
              <th style="text-align: center">فاکتور</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(transaction, index) in transactions" :key="index">
              <td class="counter">{{ index + 1 }}</td>
              <td class="description">
                <span>{{transaction.type_title}}</span>
              </td>
              <td class="date">{{ transaction.date }}</td>
              <td class="date">
                <div v-if="(transaction.method === 'cash' || transaction.method === 'bank') && transaction.status === 'unpaid'">
                  <span>بدهکار</span>
                </div>
                <div v-else>
                  <span v-if="transaction.status === 'paid'">تسویه</span>
                  <button class="payment uk-modal-close" @click="payment(transaction.hash)" v-else>
                    پرداخت
                  </button>
                </div>
              </td>
              <td class="date">{{ transaction.method === 'online' ? transaction.methodTitle :
                  (transaction.status ==='paid' ?  transaction.methodTitle : '---') }}</td>
              <td class="d-flex date" style="float: left">
                  <span style="margin-left: 5px">{{ transaction.amount | numberFilter }}  </span>
                  <img width="15" v-if="transaction.currency_sym === 'euro'" alt="" class="light" src="@/assets/user/images/euro.svg">
                  <span class="toman" v-if="transaction.currency_sym === 'ir'">IR</span>
              </td>
              <td class="date">
                <a class="payment" :href="'https://api.applygermany.net/invoice/' + transaction.id" target="_blank">دانلود</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    transactions() {
      return this.$store.getters["user/transactions"];
    },
  },
  methods:{
    payment(hash){
      this.$router.push(`/payment/${hash}`);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

.toman{
  border-radius: 50%;
  border: 1.5px solid #e2ad42;
  color: #e2ad42;
  padding: 2px;
  font-size: 10px;
  width: 10px;
  height: 10px;
  text-align: center;
  font-weight: bold;
}

.payment {
  margin-right: auto;
  margin-left: auto;
  transition: all 0.3s;
  background-color: var(--inner-background-color);
  color: var(--black);
  font-size: 0.8rem;
  border-radius: 5px;
  border: none;
  padding: 0.5rem 2rem;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: var(--light-main-color);
    color: #2b2827;
  }
}
.finance-modal {
  .uk-modal-body {
    display: flex;
    flex-direction: column;
    height: 80%;
    padding: 0;
    background-color: var(--white);
    width: 900px;
    border-radius: 8px;
    .title {
      @include fbx-ai-center-jc-between;
      background-color: var(--inner-background-color);
      padding: 1rem 1.5rem;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      button {
        position: inherit;
        &:hover {
          svg {
            color: var(--red);
          }
        }
      }
      p {
        font-size: 1rem;
        font-weight: bold;
        color: var(--black);
      }
    }
    .table {
      overflow-y: auto;
      padding: 0.5rem 1.5rem 0;
      &::-webkit-scrollbar {
        width: 8px;
      }

      /* Track */
      &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
        border-radius: 15px;
      }

      /* Handle */
      &::-webkit-scrollbar-thumb {
        background: #e2ad42;
        border-radius: 15px;
      }
      table {
        thead {
          th {
            color: var(--main-color);
            font-size: 0.8rem;
            font-weight: 500;
            border-bottom: 1px solid var(--gray);
            border-top: 1px solid var(--gray);
            text-align: right;
            &.description {
              padding-right: 1.5rem;
            }
            &.date {
              text-align: center;
            }
            &:first-child {
              border-radius: 10px;
              border-right: 1px solid var(--gray);
            }
            &:last-child {
              border-radius: 10px;
              border-left: 1px solid var(--gray);
              text-align: left;
            }
          }
        }
        tbody {
          td {
            font-size: 0.8rem;
            color: var(--black);
            border-left: 1px solid var(--gray);
            &:last-child {
              border-left: 0;
              text-align: center;
            }
            &.counter {
              color: var(--text-gray);
            }
            &.description {
              padding-right: 1.5rem;
            }
            &.date {
              text-align: center;
            }
          }
        }
      }
    }
  }
}

@include mobile-device {
  .finance-modal {
    .uk-modal-body {
      .title {
        padding: 0.75rem 1.25rem;
        p {
          font-size: 0.9rem;
        }
      }
      .table {
        padding: 1rem;
        table {
          thead {
            th {
              font-size: 0.75rem;
              &.description {
                padding-right: 1rem;
              }
            }
          }
          tbody {
            td {
              font-size: 0.75rem;
              &.description {
                padding-right: 1rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
