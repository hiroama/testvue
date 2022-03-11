<template>
  <div style="background-color: #ececec; padding: 20px;">
    <a-row :gutter="16">
      <a-col :span="16">
        <a-card title="Table" :bordered="false">
          <my-table></my-table>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="Chart" :bordered="false">
          <my-chart></my-chart>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script>
  import Vue from 'vue'
  import VueGoodTablePlugin from 'vue-good-table'
  import 'vue-good-table/dist/vue-good-table.css'
  import MyTable from './MyTable.vue';
  import MyChart from './MyChart.vue'
  Vue.use(VueGoodTablePlugin);

    export default {
    name: 'MyCard',
    components: {
      MyTable,
      MyChart
   }
  }
</script>