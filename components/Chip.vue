<template>
  <nuxt-link
    :to="destination"
    class="bg-gray-200 px-3 py-2 rounded-xl m-1 hover:bg-gray-300 no-underline"
    >{{ title }}</nuxt-link
  >
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
    destination: {
      type: String,
      required: true,
      default: '',
    },
  },
}
</script>
