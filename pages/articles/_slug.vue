<template>
  <div class="prose my-20">
    <h1>{{ page.title }}</h1>
    <p class="text-xl">{{ page.description }}</p>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const slug = params.slug || 'index'
    const page = await $content('articles', slug).fetch()

    return {
      page,
    }
  },
}
</script>
