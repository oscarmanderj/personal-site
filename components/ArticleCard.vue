<template>
  <div class="sm:w-1/2 md:w-1/3">
    <div
      class="group shadow hover:shadow-2xl rounded-lg m-4 hover:bg-gray-400 transform duration-150 transition-all hover:-translate-y-3 text-gray-700"
    >
      <nuxt-link :to="article.path">
        <img :src="article.image" alt="" class="rounded-t-lg" />
        <div class="p-5">
          <span
            v-for="(category, index) in article.categories"
            :key="index"
            class="px-2 py-1 rounded-lg bg-gray-200 group-hover:text-black shadow-sm mr-2"
            >{{ category }}</span
          >
          <h2 class="font-semibold leading-tight my-3 group-hover:text-white">
            {{ article.title }}
          </h2>
          <p class="mb-2 text-lg group-hover:text-white">
            {{ article.description }}
          </p>
          <span class="text-gray-500">{{
            article.createdAt | prettyDate
          }}</span>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    article: {
      type: Object,
      require: false,
      default: () => ({}),
    },
  },
}
</script>
