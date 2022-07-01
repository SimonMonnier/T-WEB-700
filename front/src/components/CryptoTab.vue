<template>
  <div
    class="container"
    style="padding-top: 15px; margin-left: -12px; margin-top: 0px"
  >
    <div
      class="card card-style"
      style="
        width: 82.65rem;
        border-radius: 10px;
        margin-bottom: -15px;
        height: 60px;
      "
    >
      <div class="card-body">
        <div class="row align-items-start">
          <div class="col-1" style="margin-left: 10px; margin-right: -75px">
            {{ id }}
          </div>
          <div class="col-1" style="margin-right: 40px">
            <p class="card-title" v-if="name === 'BTC'">BITCOIN</p>
            <p class="card-title" v-if="name === 'ETH'">ETHERUM</p>
            <p class="card-title" v-if="name === 'BNB'">BINANCE</p>
            <p class="card-title" v-if="name === 'SOL'">SOLANA</p>
            <p class="card-title" v-if="name === 'LUNA'">TERRA</p>
            <p class="card-title" v-if="name === 'XRP'">XRP</p>
            <p class="card-title" v-if="name === 'DOT'">POLKADOT</p>
            <p class="card-title" v-if="name === 'MATIC'">POLYGON</p>
          </div>
          <div class="col-1" style="margin-right: 50px">
            <p>{{ data[20].close }}$</p>
          </div>
          <div class="col-1" style="margin-right: 65px">
            <span v-if="percent > 0" style="color: #12d5df; font-size: 14px"
              >+{{ percent }}%</span
            >
            <span v-if="percent < 0" style="color: #12d5df; font-size: 14px"
              >{{ percent }}%</span
            >
          </div>
          <div class="col-1" style="margin-right: 91px">
            <p>{{ lowest }}$</p>
          </div>
          <div class="col-1" style="margin-right: 150px">
            <p>{{ highest }}$</p>
          </div>
          <div class="col-2" style="margin-right: -82px">
            <LittlestLineChart :data="dataSource" :id="id"  v-on:dblclick="none"/>
          </div>
          <div class="col-1">
            <box-icon type="solid" color="white" name="heart"></box-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LittlestLineChart from "./LittlestLineChart.vue";
import "boxicons";
export default {
  components: {
    LittlestLineChart,
  },
  props: {
    id: Number,
    data: Object,
  },
  async mounted() {
    this.getData();
  },
  data() {
    const dataSource = null;
    const name = this.data[0].name;
    let percent = (
      ((this.data[20].close - this.data[0].close) / this.data[0].close) *
      100
    ).toFixed(2);
    let low = [];
    for (let i = 0; i < 21; i++) {
      low.push(this.data[i].low);
    }
    var lowest = Math.min.apply(Math, low);
    let high = [];
    for (let i = 0; i < 21; i++) {
      high.push(this.data[i].high);
    }
    var highest = Math.max.apply(Math, high);
    return {
      dataSource,
      name,
      percent,
      lowest,
      highest,
    };
  },
  methods: {
    getData() {
      this.dataSource = this.data.map(({ time, close }) => {
        var datearray = new Date(time * 1000)
          .toLocaleString("en-US", {
            dateStyle: "medium",
          })
          .split(" ");
        var newdate =
          datearray[1].replace(",", "") +
          "-" +
          datearray[0] +
          "-" +
          datearray[2].slice(2, 4);
        return {
          date: newdate,
          close: close,
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
