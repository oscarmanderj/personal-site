<template>
  <div class="flex flex-wrap">
    <ArticleCard
      v-for="(article, index) in articles"
      :key="index"
      :article="article"
    />
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
