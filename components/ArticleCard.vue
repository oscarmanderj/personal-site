<template>
  <div class="sm:w-1/2 md:w-1/3">
    <div
      class="shadow hover:shadow-2xl rounded-lg m-4 hover:bg-gray-400 hover:text-white transform duration-150 transition-all hover:-translate-y-3 text-gray-700"
    >
      <nuxt-link :to="article.path">
        <img :src="article.image" alt="" class="rounded-t-lg" />
        <div class="p-5">
          <h2 class="font-semibold leading-tight my-3">
            {{ article.title }}
          </h2>
          <p class="mb-2 text-lg">{{ article.description }}</p>
          <span>{{ article.createdAt }}</span>
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
