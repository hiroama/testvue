<template>
  <div>
    <vue-good-table
    :columns="columns"
    :rows="rows"
    :select-options="{ enabled: true}"
    :search-options="{ enabled: true }"
    @on-selected-rows-change="selectionChanged">
    </vue-good-table>
    <br>
    <a-button type="primary" @click="sendData">Plot</a-button>
  </div>
</template>

<script>
import { eventBus } from "../main.js";

export default {
  name: 'MyTable',
  data(){
    return {
      selectedNames:[],
      selectedValues:[],
      columns: [
        {
          label: 'UniProt',
          field: 'uniprot',
          type:'string',
        },
        {
          label: 'Symbol',
          field: 'symbol',
          type: 'string',
        },
        {
          label: 'Category',
          field: 'category',
          type: 'string',
        },
        {
          label: 'Modification',
          field: 'modification',
          type: 'string',
        },
        {
          label: 'Position',
          field: 'position',
          type: 'number',
        },
        {
          label: 'Value',
          field: 'value',
          type: 'number',
          hidden:true,
        },
      ],
      rows: [
        { id:1, uniprot:"Q9C0B1", symbol:"FTO", category:"Methylation Eraser", modification:"m6A;m1A", position:58, value:61},
        { id:2, uniprot:"Q96G46", symbol:"DUS3L", category:"Dihydrouridine Modification", modification:"D", position:47, value:66},
        { id:3, uniprot:"Q96PZ0", symbol:"PUS7", category:"Pseudouridylase", modification:"ψ", position:13, value:20},
        { id:4, uniprot:"Q8TCB7", symbol:"METTL6", category:"Methylase", modification:"m3C", position:32, value:44},
      ],
    };
  },
  methods: {
    selectionChanged(params){
      this.selectedNames=[]
      this.selectedValues=[]
      //console.log(params.selectedRows)
      params.selectedRows.forEach(e => { 
      this.selectedNames.push(e.symbol)
      this.selectedValues.push(e.value)
      })
    },
    sendData(){
      eventBus.$emit("getNames",this.selectedNames)
      eventBus.$emit("getValues",this.selectedValues)
    }
  }
};
</script>
