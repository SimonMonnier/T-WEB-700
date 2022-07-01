<template>
  <section class="col-12" style="margin-top: 100px">
      <div class="content-col">
          <center style="max-width:800px; margin: auto">
              <h2>Articles</h2>
              <p style="text-align: center">
                  Discover all the news on cryptocurrency! You will find the best articles on investments, conferences of successful people and many more !
              </p>
          </center>

          <section class="row">
            <Article 
                title="titre 1"
                texte="message 1"
                image="image1.url"
                />
            <Article 
                title="titre 2"
                texte="message 2"
                image="image2.url"
                />
            <Article 
                title="titre 3"
                texte="message 3 message 3 message 3 v message 3 v v v vmessage 3 message 3message 3"
                image="image3.url"
                />
          </section>

      </div>
  </section>
</template>

<script>
import Article from "../snippets/Article";
export default {
  name: "Section-Articles",
  components: {
    Article,
  },
};
</script>

<style scoped>
</style>