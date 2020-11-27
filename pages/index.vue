<template>
  <div class="flex flex-wrap">
    <nuxt-link
      v-for="(article, index) in articles"
      :key="index"
      class="p-5 border rounded w-full my-4 hover:bg-gray-100"
      :to="article.path"
    >
      <h2>{{ article.title }}</h2>
      <p>{{ article.description }}</p>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const articles = await $content('articles').sortBy('date', 'asc').fetch()

    return {
      articles,
    }
  },
}
</script>
