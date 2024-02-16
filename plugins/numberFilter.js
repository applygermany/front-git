import Vue from "vue";

function numberFilter(num, sep) {
  const number = String(num);
  const separator = typeof sep === "undefined" ? "," : sep;
  return number.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + separator);
}

Vue.filter("numberFilter",numberFilter);
