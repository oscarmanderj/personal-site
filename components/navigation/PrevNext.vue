<template>
  <div class="flex justify-between my-4">
    <NuxtLink
      v-if="prev"
      :to="{ name: 'articles-slug', params: { slug: prev.slug } }"
      class="border shadow-xl p-4 rounded-2xl"
    >
      previous: {{ prev.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="next"
      :to="{ name: 'articles-slug', params: { slug: next.slug } }"
      class="border shadow hover:shadow-xl p-4 rounded-2xl hover:bg-gray-100"
    >
      {{ next.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>
<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
}
</script>
