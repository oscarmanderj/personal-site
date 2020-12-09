<template>
  <section class="container mt-20">
    <div class="mb-8 text-center">
      <h1>Tagged: {{ slug }}</h1>
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
    const slug = params.slug

    const articles = await $content('articles')
      .where({ tags: { $contains: slug } })
      .fetch()

    return {
      articles,
      slug,
    }
  },
}
</script>
