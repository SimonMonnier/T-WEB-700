<template>
  <div>
    <HeaderBar />
    <div class="container" style="margin-left: 80px">
      <div class="row align-items-start">
        <div class="col-6">
          <CandleSticks :data="dataCandleSticks" :key="count" :name="name" />
        </div>
        <div
          class="container-sm col-6"
          style="padding: 15px; margin-left: 0px; margin-right: 0px"
        >
          <div class="row align-items-start">
            <h4 class="col-12" style="color: whitesmoke; margin-left: 25px">
              Favorite Crypto Money
            </h4>
            <div
              class="col-6"
              v-for="(row, index) in dataFavorite"
              :key="index"
            >
              <FavoriteCrypto
                :id="index + 1"
                :data="row"
                v-on:dblclick="pushData(row)"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row align-items-start">
        <div class="col-5"></div>
        <div class="col-6">
          <h4
            class="col-12"
            style="color: whitesmoke; margin-left: 75px; margin-top: 5px"
          >
            Crypto List
          </h4>
        </div>
        <div
          class="container"
          style="
            padding-top: 15px;
            margin-left: 12px;
            margin-top: 0px;
            margin-bottom: 15px;
          "
        >
          <div
            class="card card-style"
            style="width: 82.65rem; border-radius: 10px; margin-bottom: -24.5px"
          >
            <div class="card-body">
              <table
                class="table table-dark table-hover table-borderless"
                style="margin-bottom: 0px"
              >
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <!-- <th scope="col"></th> -->
                    <th scope="col" style="width: 150px">NAME</th>
                    <th scope="col" style="width: 150px">PRICE</th>
                    <th scope="col" style="width: 150px">CHANGE</th>
                    <th scope="col" style="width: 200px">LOWEST PRICE</th>
                    <th scope="col" style="width: 200px">HIGHEST PRICE</th>
                    <th scope="col" style="width: 200px"></th>
                    <th scope="col" style="width: 200px">FAVORITE</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
        <div
          class="col-12"
          style="margin-left: 0px; margin-bottom: 5px"
          v-for="(row, index) in dataFavorite"
          :key="index"
        >
          <CryptoTab
            :id="index + 1"
            :data="row"
            v-on:dblclick="pushData(row)"
          />
        </div>
        
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import CandleSticks from "../components/CandleSticks.vue";
import FavoriteCrypto from "../components/FavoriteCrypto.vue";
import CryptoTab from "../components/CryptoTab.vue";
import axios from "axios";
import HeaderBar from "../components/HeaderBar.vue";
import Footer from "../components/Footer.vue";


export default {
  components: {
    HeaderBar,
    CandleSticks,
    FavoriteCrypto,
    CryptoTab,
    Footer
  },
  data() {
    const coinListFavorite = ["BTC", "ETH", "BNB", "SOL", "LUNA", "XRP"];
    const dataCandleSticks = [];
    const dataFavorite = [];
    const count = 0;
    const name = "BTC";

    return {
      dataCandleSticks,
      dataFavorite,
      coinListFavorite,
      count,
      name,
      timer1: "",
      timer2: "",
    };
  },
  async update() {
    
  },
  async created() {
    await this.getDataCandleSticks();
    await this.getDataFavorite();
  },
  mounted() {
    this.updateData();
  },
  methods: {
    updateData() {
      const that = this;
      setTimeout(function () {
        that.getDataCandleSticks();
        that.getDataFavorite();
        that.updateData();
      }, 300000);
    },
    pushData(row) {
      this.getDataCandleSticks(row[0].name);
    },
    async getDataCandleSticks(coin) {
      if (coin) {
        this.name = coin;
      }
      await axios
        .get(
          `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${this.name}&tsym=USD&limit=20`
        )
        .then((response) => {
          this.dataCandleSticks = response.data.Data.Data;
        })
        .catch((error) => {
          console.log(error);
        });
      this.count = this.count + 1;
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
<style>
center {
  color: white;
}
</style>
