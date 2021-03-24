// `~/src/main.js`

import Vue from 'vue'
import Posts from '../../components/blog/Posts'
import PrismicVue from '@prismicio/vue'
import linkResolver from '../../src/link-resolver' // Update this path if necessary

const accessToken = '' // Leave empty if your repo is public
const endpoint = 'https://imobanco.cdn.prismic.io/api/v2' // Use your repo name

// Register plugin
Vue.use(PrismicVue, {
  endpoint,
  apiOptions: { accessToken },
  linkResolver
})

// Create a Vue instance
new Vue({
  render: (h) => h(Posts)
}).$mount('#app')