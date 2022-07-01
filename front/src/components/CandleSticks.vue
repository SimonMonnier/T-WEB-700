<template>
  <div
    class="container-sm"
    style="padding: 15px; margin-left: 0px; margin-right: 0px"
  >
    <DxChart
      id="chart"
      :data-source="dataSource"
      :title="name"
      style="padding: 15px; border-radius: 10px"
    >
      <DxCommonSeriesSettings
        argument-field="date"
        type="candlestick"
        color="#12d5df"
      />
      <DxSeries
        name="BTC/USD"
        open-value-field="o"
        high-value-field="h"
        low-value-field="l"
        close-value-field="c"
      >
        <DxReduction color="#f70fff" />
      </DxSeries>
      <DxArgumentAxis :workdays-only="true">
        <DxLabel format="shortDate" />
      </DxArgumentAxis>
      <DxValueAxis :tick-interval="1">
        <DxTitle text="US dollars" />
        <DxLabel>
          <DxFormat :precision="0" type="currency" />
        </DxLabel>
      </DxValueAxis>
      <DxLegend item-text-position="left" />
      <DxExport :enabled="true" />
      <DxTooltip
        :enabled="true"
        :customize-tooltip="customizeTooltip"
        location="edge"
      />
    </DxChart>
  </div>
</template>
<script>
import DxChart, {
  DxCommonSeriesSettings,
  DxSeries,
  DxReduction,
  DxArgumentAxis,
  DxLabel,
  DxFormat,
  DxValueAxis,
  DxTitle,
  DxLegend,
  DxExport,
  DxTooltip,
} from "devextreme-vue/chart";

export default {
  components: {
    DxChart,
    DxCommonSeriesSettings,
    DxSeries,
    DxReduction,
    DxArgumentAxis,
    DxLabel,
    DxFormat,
    DxValueAxis,
    DxTitle,
    DxLegend,
    DxExport,
    DxTooltip,
  },
  props: {
    data: Array,
    name: String
  },
  async mounted() {
    await this.getData();
  },
  async update() {
    await this.getData();
  },
  async created() {
    await this.getData();
  },
  data() {
    let dataSource = null;
    return {
      dataSource
    };
  },
  methods: {
    async getData() {
      this.dataSource = null;
      this.dataSource = this.data.map(({ time, high, low, open, close }) => {
        return {
          date: new Date(time * 1000).toLocaleString("fr-FR", {
            month: "2-digit",
            day: "2-digit",
          }),
          l: low,
          h: high,
          o: open,
          c: close,
        };
      });
    },
    customizeTooltip(pointInfo) {
      return {
        text: `Open: $${pointInfo.openValue}<br/>
Close: $${pointInfo.closeValue}<br/>
High: $${pointInfo.highValue}<br/>
Low: $${pointInfo.lowValue}<br/>`,
      };
    },
  },
};
</script>
<style>
#chart {
  height: 498px;
  width: 108.5%;
  background-color: #313131;
}
.dxc-background rect {
  fill: #212529;
}
.default-positive-markers {
  fill: #12d5df !important;
}
.reduction-markers path:hover {
  fill: #000000 !important;
}
.dxc-val-grid path {
  stroke: none;
}
.dx-export-menu-button rect {
  fill: #313131;
}
</style>
