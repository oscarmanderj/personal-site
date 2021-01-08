<template>
  <nav>
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div
          class="flex-1 flex items-center sm:justify-center sm:items-stretch sm:justify-start"
        >
          <div class="sm:ml-6">
            <div class="flex space-x-4">
              <nuxt-link
                v-for="(link, index) in links"
                :key="index"
                :to="link.url"
                class="px-3 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-gray-700"
                ><svg
                  v-if="link.title === ''"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-home"
                >
                  <path
                    d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                  ></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                {{ link.title }}</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  setup() {
    const links = [
      {
        title: '',
        url: '/',
      },
      {
        title: 'articles',
        url: '/articles',
      },
      {
        title: 'me',
        url: '/me',
      },
    ]
    return {
      links,
    }
  },
}
</script>
