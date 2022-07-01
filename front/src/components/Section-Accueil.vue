<template>
  <section class="col-12" style="margin-top:50px">
      <div class="content-col-large">
          <div class="row">
            <div class="col-7">
              <div style="height:100%;overflow:hidden; border-radius:15px; position: relative; ">
                <div style="padding:25px; position: relative; z-index:2">
                  <h1>Welcome on Kryptos.com !</h1>
                  <p style="max-width: 600px; margin-left: 50px">
                    Welcome on the best crypto money dashboard on the internet. You are in the right place to manage your cryptos and know how and when to invest and get rich.
                    If you are not familiar with crypto money, you are invite to go to our <a herf="/cryptos" style="color:var(--main)">Help page</a> and watch our tutorial. You will discover EVERYTHING you need to know about crypto and how to get rich !
                  </p>
                  <a class="big-btn" style="margin-left: 100px">Get Rich !</a>
                </div>
                <img src="../../public/image/Welcome.jpg" style="opacity:50%; position: absolute; top:0; right:0; z-index:1"/>

              </div>
            </div>
            <div class="col-5">
                <div class="row">
                  <div class="col-6" v-for="(row, index) in dataFavorite" :key="index" style="padding:0">
                    <Crypto :id="index + 1" :data="row" />
                  </div>
                </div>
            </div>

          </div>

      </div>
  </section>
</template>

<script>
import Crypto from "../snippets/CryptoPreview";
import axios from "axios";
export default {
  name: "Section-Accueil",
  components: {
    Crypto,
  },
  
  data() {
    const coinListFavorite = ["BTC", "ETH", "BNB", "SOL", "LUNA", "XRP"];
    const dataFavorite = [];
    const count = 0;
    const name = "BTC";

    return {
      dataFavorite,
      coinListFavorite,
      count,
      name,
      timer1: "",
      timer2: "",
    };
  },
  async update() {
    this.updateData();
  },
  async created() {
    await this.getDataFavorite();
  },
  mounted() {
    this.updateData();
  },
  methods: {
    updateData() {
      const that = this
      setTimeout(function () {
        that.getDataFavorite();
        that.updateData();
      }, 300000);
    },
    async getDataFavorite() {
      this.dataFavorite = [];
      for (const coin of this.coinListFavorite) {
        await axios
          .get(
            `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${coin}&tsym=USD&limit=20`
          )
          .then((response) => {
            let data = [];
            data = response.data.Data.Data;
            for (let row of data) {
              row = Object.assign(row, { name: coin });
            }
            this.dataFavorite.push(data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style scoped>
</style>