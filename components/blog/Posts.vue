<template>
  <div>
  <h1>Here's your raw API:</h1>
   <pre id="app" v-html="JSON.stringify(response, null, 2)"></pre>-->
  <!--<img v-bind:src="response['imagem']">
  <h3 style="color:#002147;width:150px;heigth:150px">{{ response['titulo'] }}</h3>
  <h5>{{ response['slug'] }}</h5>
  <p>{{ response['conteudo'] }}</p>-->
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      // Initialize "response"
      response: null
    }
  },
  methods: {
    async getContent() {
      // Query the API and assign the response to "response"
      const response = await this.$prismic.client.query('');
      /*var post = {
        'imagem':response['results'][0]['data']['imagem']['url'],
        'titulo':response['results'][0]['data']['titulo'][0]['text'],
        'slug':response['results'][0]['uid'],
        'conteudo':response['results'][0]['data']['conteudo'][0]['text'],
      }*/
      this.response = response
    }
  },
  created() {
    // Call the API query method
    this.getContent()
  }
}
</script>