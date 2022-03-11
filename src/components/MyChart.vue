<template>
  <div id="myChart" :style="{width: '400px', height: '300px'}"></div>
</template>

<script>
import { eventBus } from "../main";
export default {
  name: 'MyChart',
  data () {
    return {
        names:[],
        values:[]
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine(){
        // 基于刚刚准备好的 DOM 容器，初始化 EChart 实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            tooltip: {},
            xAxis: {
                data: this.names
            },
            yAxis: {},
            series: [{
                name: 'expression value',
                type: 'bar',
                data: this.values
            }]
        });
    }
  },
  created(){
      eventBus.$on("getNames",data=>{
          this.names = data;
      }),
      eventBus.$on("getValues",data=>{
          this.values = data;
      })
    },
  watch:{
    names:{
      immediate:false,
      handler(){
        this.drawLine();
      }
    }
  }
}
</script>