<script>
import { VNetworkGraph } from "v-network-graph"
import "v-network-graph/lib/style.css"
var nodes = {
  node1: { name: "Node 1" },
  node2: { name: "Node 2" },
  node3: { name: "Node 3" },
  node4: { name: "Node 4" },
}

var edges = {
  edge1: { source: "node1", target: "node2" },
  edge2: { source: "node2", target: "node3" },
  edge3: { source: "node3", target: "node4" },
}
export default {
  name: 'SensennetGraph',
  components: {
    VNetworkGraph
  },
  data(){
    return {
      nodes: nodes,
      edges: edges
    }
  }
}
</script>

<template>
 <v-network-graph class="graph" :nodes="nodes" :edges="edges"></v-network-graph>
</template>

<style scoped>
.graph {
  border: 1px solid #000;
  width: 100%;
  height:100%;
}
</style>