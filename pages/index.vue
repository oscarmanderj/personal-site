<template>
  <section class="container mx-auto">
    <div class="text-center flex">
      <div class="self-center mx-auto">
        <h1>👋 Welcome!</h1>
        <p class="text-2xl">Peruse at your pleasure</p>
      </div>
    </div>
    <div class="flex flex-wrap">
      <div class="w-full px-8">
        <h3 class="text-4xl font-semibold">Thoughts</h3>
      </div>
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
