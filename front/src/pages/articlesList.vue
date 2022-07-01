<template>
  <div>
    <HeaderBar />
    <div
        class="col-12"
        style="margin-left: 112px; margin-bottom: 5px; margin-top: 15px; width: 1200px;"
      >
        <Articles />
      </div>
    <Footer />
  </div>
</template>

<script>
import HeaderBar from "../components/HeaderBar.vue";
import Articles from "../components/Articles.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Article",
  components: {
    HeaderBar,
    Articles,
    Footer
  },
};
</script>
<style>
center {
  color: white;
}
</style>

