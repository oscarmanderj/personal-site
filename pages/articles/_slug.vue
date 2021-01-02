<template>
  <div
    class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto prose-indigo my-8 sm:my-20 p-4"
  >
    <img
      class="w-auto h-auto rounded-2xl shadow-md"
      :src="article.image.src"
      :alt="article.image.alt"
    />

    <Chip
      v-for="(category, index) in article.categories"
      :key="index"
      :title="category"
      :destination="'/articles/categories/' + category"
    />
    <hr />
    <span class="text-gray-500">{{ article.createdAt | prettyDate }}</span>
    <h1>{{ article.title }}</h1>
    <p class="text-xl">{{ article.description }}</p>
    <nuxt-content :document="article" />
    <hr />
    <Chip
      v-for="(tag, index) in article.tags"
      :key="index"
      :title="tag"
      :destination="'/articles/tags/' + tag"
    />

    <prev-next :prev="prev" :next="next" />
  </div>
</template>

<script>
import getSiteMeta from '~/utils/getSiteMeta'
export default {
  async asyncData({ $content, params, error }) {
    const slug = params.slug || 'index'
    const article = await $content('articles', slug).fetch()

    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next,
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
