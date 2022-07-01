<template>
  <div>
    <link rel="stylesheet" href="style.css" />
    <HeaderBar />
    <main class="row">
      <SectionAccueil />
      <h4 style="margin-left: 715px; margin-bottom: 5px; margin-top: 15px">Articles</h4>
      <div
        class="col-12"
        style="margin-left: 112px; margin-bottom: 5px; margin-top: 15px; width: 1200px;"
      >
        <Articles />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import HeaderBar from "../components/HeaderBar.vue";
import SectionAccueil from "../components/Section-Accueil.vue";
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import Articles from "../components/Articles.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    HeaderBar,
    SectionAccueil,
    Articles,
    Footer
  },
};
</script>
