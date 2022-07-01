<template>
  <div>
    <svg v-bind:id="name" width="300" height="125"></svg>
  </div>
</template>
<script>
import * as d3 from "d3";
export default {
  props: {
    id: Number,
    data: Object,
  },
  data() {
    return {
      name: "littlestChart" + this.id,
      datasource: null,
    };
  },
  methods: {
    async buildChart() {
      const target_copy = await JSON.parse(JSON.stringify(this.data));
      this.datasource = [];
      for (const row of target_copy) {
        await this.datasource.push(row);
      }

      const svg = await d3.select("#" + this.name);
      const margin = { top: 90, right: 125, bottom: 10, left: 70 };
      const width = +svg.attr("width") - margin.left - margin.right;
      const height = +svg.attr("height") - margin.top - margin.bottom;
      const g = await svg
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      const parseTime = await d3.timeParse("%d-%b-%y");

      const x = await d3.scaleTime().rangeRound([0, width]);

      const y = await d3.scaleLinear().rangeRound([height, 0]);

      const line = await d3
        .line()
        .x(function (d) {
          return x(parseTime(d.date));
        })
        .y(function (d) {
          return y(d.close);
        });

      const area = await d3
        .area()
        .x(function (d) {
          return x(parseTime(d.date));
        })
        .y0(y(0))
        .y1(function (d) {
          return y(d.close);
        });

      await svg
        .style("margin-top", -110 + "px")
        .style("margin-bottom", -30 + "px")
        .style("margin-left", -150 + "px")
        .style("margin-right", -120 + "px");

      //make defs and add the linear gradient
      var lg = await svg
        .append("defs")
        .append("linearGradient")
        .attr("id", "mygrad") //id of the gradient
        .attr("x1", "109%")
        .attr("x2", "-20%")
        .attr("y1", "109%")
        .attr("y2", "-30%"); //since its a vertical linear gradient
      await lg.append("stop")
        .attr("offset", "10%")
        .style("stop-color", "#313131") //end in gray
        .style("stop-opacity", 1);

      await lg.append("stop")
        .attr("offset", "100%")
        .style("stop-color", "#12d5df") //start in blue
        .style("stop-opacity", 0.5);

      await x.domain(
        await d3.extent(this.datasource, function (d) {
          return parseTime(d.date);
        })
      );
      await y.domain(
        await d3.extent(this.datasource, function (d) {
          return d.close;
        })
      );

      await g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(await d3.axisBottom(x).ticks(7));

      await g.append("g")
        .call(await d3.axisLeft(y))
        .append("text")
        .attr("fill", "none")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Price ($)");

      await g.append("path")
        .datum(this.datasource)
        .attr("fill", "url(#mygrad)")
        .attr("stroke", "none")
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", 1.5)
        .attr("d", area);

      await g.append("path")
        .datum(this.datasource)
        .attr("fill", "none")
        .attr("stroke", "#12d5df")
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", 1.5)
        .attr("d", line);
    },
  },
  async mounted() {
    await this.buildChart();
  },
  async updated() {
    await this.buildChart();
  },
};
</script>
<style>
.axis path,
.axis line {
  fill: none;
  stroke: none;
}

.tick text {
  font-size: 0px;
  stroke: none;
}

.tick line {
  opacity: 1;
  stroke: none;
}

.domain {
  stroke: none;
}
</style>
