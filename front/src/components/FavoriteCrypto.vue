<template>
  <div class="container" style="padding-top: 15px; padding-bottom: 0px">
    <div
      class="card card-style"
      style="width: 20rem; border-radius: 10px; height: 8.672rem"
    >
      <div class="card-body">
        <div class="row align-items-start">
          <div class="col-7">
            <h5 class="card-title" v-if="name === 'BTC'">
              BITCOIN <span style="color: grey; font-size: 13px">{{name}}</span>
            </h5>
            <h5 class="card-title" v-if="name === 'ETH'">
              ETHERUM <span style="color: grey; font-size: 13px">{{name}}</span>
            </h5>
            <h5 class="card-title" v-if="name === 'BNB'">
              BINANCE <span style="color: grey; font-size: 13px">{{name}}</span>
            </h5>
            <h5 class="card-title" v-if="name === 'SOL'">
              SOLANA <span style="color: grey; font-size: 13px">{{name}}</span>
            </h5>
            <h5 class="card-title" v-if="name === 'LUNA'">
              TERRA <span style="color: grey; font-size: 13px">{{name}}</span>
            </h5>
            <h5 class="card-title" v-if="name === 'XRP'">
              XRP <span style="color: grey; font-size: 13px">{{name}}</span>
            </h5>
            <h5 class="card-title" v-if="name === 'DOT'">
              POLKADOT <span style="color: grey; font-size: 13px">{{name}}</span>
            </h5>
            <h5 class="card-title" v-if="name === 'MATIC'">
              POLYGON <span style="color: grey; font-size: 13px">{{name}}</span>
            </h5>
          </div>
          <div class="col-5" style="padding: 0px;">
            <p style="color: whitesmoke; font-size: 14px; padding-top: 3px;">
              {{data[20].close}}$
              <span v-if="percent > 0" style="color: #12d5df; font-size: 12px">+{{percent}}%</span>
              <span v-if="percent < 0" style="color: #12d5df; font-size: 12px">{{percent}}%</span>
            </p>
          </div>
          <div
            class="col-2"
            style="padding-right: 0px; margin-top: 50px; margin-left: 4px"
          >
            <h5 class="card-title"># {{ id }}</h5>
          </div>
          <div class="col-1" style="padding-left: 0px; margin-top: 50px">
            <box-icon type="solid" color="white" name="heart"></box-icon>
          </div>
          <div class="col" style="position: absolute">
            <LittelLineChart :data="dataSource" :id="id" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LittelLineChart from "./LittelLineChart.vue";
import "boxicons";
export default {
  components: {
    LittelLineChart,
  },
  props: {
    id: Number,
    data: Object,
  },
  mounted() {
    this.getData();
  },
  data() {
    const dataSource = null;
    const name = this.data[0].name;
    let percent = (((this.data[20].close - this.data[0].close) / this.data[0].close) * 100).toFixed(2);
    return {
      dataSource,
      name,
      percent
    };
  },
  methods: {
    getData() {
      this.dataSource = this.data.map(({ time, close }) => {
        var datearray = new Date(time * 1000).toLocaleString("en-US", {
            dateStyle: "medium"
          }).split(" ");
        var newdate = datearray[1].replace(",","") + '-' + datearray[0] + '-' + datearray[2].slice(2, 4);
        return {
          date: newdate,
          close: close
        };
      });
    },
  },
};
</script>
<style>
.card-style {
  background-color: #313131 !important;
  color: whitesmoke !important;
}
</style>
