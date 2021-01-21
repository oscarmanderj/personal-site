<template>
  <section class="container mx-auto">
    <div class="flex flex-wrap">
      <div class="w-full p-10 text-center">
        <div class="mb-4">
          <h1>Say Hi</h1>
          <p class="text-2xl">
            I am always up for a chat with interesting people.
          </p>
        </div>
      </div>
      <div class="mt-5 w-full mx-auto w-full sm:w-1/2">
        <form
          name="contact"
          action="/success"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="flex flex-wrap">
                <div class="w-full my-4">
                  <label
                    for="first_name"
                    class="block text-sm font-medium text-gray-700"
                    >First name</label
                  >
                  <input
                    id="first_name"
                    type="text"
                    name="first_name"
                    autocomplete="given-name"
                    class="mt-1 focus:ring-indigo-500 h-12 focus:border-indigo-500 w-full block shadow-sm sm:text-sm border-gray-300 rounded-md p-4"
                  />
                </div>
                <div class="w-full my-4">
                  <label
                    for="first_name"
                    class="block text-sm font-medium text-gray-700"
                    >Email</label
                  >
                  <input
                    id="email"
                    type="text"
                    name="email"
                    autocomplete="email"
                    class="mt-1 focus:ring-indigo-500 h-12 focus:border-indigo-500 w-full block shadow-sm sm:text-sm border-gray-300 rounded-md p-4"
                  />
                </div>
                <div class="w-full my-4">
                  <label
                    for="email_address"
                    class="block text-sm font-medium text-gray-700"
                    >Your message</label
                  >
                  <textarea
                    id="email_address"
                    type="text"
                    name="email_address"
                    autocomplete="email"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 w-full block shadow-sm sm:text-sm border-gray-300 rounded-md h-64 p-4"
                  />
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
