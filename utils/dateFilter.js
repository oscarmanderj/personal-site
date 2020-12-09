import Vue from 'vue'

Vue.filter('prettyDate', function (date) {
  const newDate = new Date(date)
  const dateFormat = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return newDate.toLocaleDateString('en-GB', dateFormat)
})
