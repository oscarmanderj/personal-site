<template>
  <div class="prose my-20">
    <h1>{{ article.title }}</h1>
    <p class="text-xl">{{ article.description }}</p>
    <nuxt-content :document="article" />
  </div>
</template>

<script>
import getSiteMeta from '~/utils/getSiteMeta'
export default {
  async asyncData({ $content, params, error }) {
    const slug = params.slug || 'index'
    const article = await $content('articles', slug).fetch()

    return {
      article,
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'article',
        title: this.article.title,
        description: this.article.description,
        url: `${this.$config.baseUrl}/articles/${this.$route.params.slug}`,
        mainImage: this.article.image,
      }
      return getSiteMeta(metaData)
    },
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        ...this.meta,
        {
          property: 'article:published_time',
          content: this.article.createdAt,
        },
        {
          property: 'article:modified_time',
          content: this.article.updatedAt,
        },
        {
          property: 'article:tag',
          content: this.article.tags ? this.article.tags.toString() : '',
        },
        { name: 'twitter:label1', content: 'Written by' },
        { name: 'twitter:data1', content: 'Oscar Mander-Jones' },
        { name: 'twitter:label2', content: 'Filed under' },
        {
          name: 'twitter:data2',
          content: this.article.tags ? this.article.tags.toString() : '',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://bobross.com/articles/${this.$route.params.slug}`,
        },
      ],
    }
  },
}
</script>
