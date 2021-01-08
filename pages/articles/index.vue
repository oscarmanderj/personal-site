<template>
  <section class="container sm:mt-20">
    <div class="mb-8 text-center">
      <h1>Articles</h1>
      <p class="text-2xl">
        Some light and not so light reading about my random interests and
        perspectives on current events.
      </p>
    </div>
    <div class="flex flex-wrap">
      <ArticleCard
        v-for="(article, index) in articles"
        :key="index"
        :article="article"
      />
    </div>
  </section>
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
