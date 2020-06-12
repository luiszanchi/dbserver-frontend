<template>
  <div>
    <h1>Desenvolvido por Luis Zanchi</h1>
    <vs-row>
      <vs-col vs-w="3" vs-xs="1"></vs-col>
      <vs-col vs-w="6" vs-xs="10">
        <vs-table
          :sst="true"
          :data="items"
        >
          <template slot="header">
            <h3>Placar</h3>
          </template>
          <template slot="thead">
            <vs-th>Restaurante</vs-th>
            <vs-th>Total</vs-th>
          </template>

          <template slot-scope="{data}">
            <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
              <vs-td :data="tr.name" class="float-left">{{ tr.name }}</vs-td>
              <vs-td :data="tr.total" class="float-right">{{ tr.total }}</vs-td>
            </vs-tr>
          </template>
        </vs-table>
      </vs-col>
      <vs-col vs-w="3" vs-xs="1"></vs-col>
    </vs-row>
  </div>
</template>

<style scoped>
.float-left {
    float: left;
}
.float-right {
    float: right;
}
.td-id {
    padding-bottom: 20px !important;
}
</style>

<script>
export default {
  name: 'home',
  data() {
    return {
      items: []
    }
  },
  methods: {
    get() {
      this.$axios.get('/votes/of-day', {
        params: {}
      })
      .then((response) => {
        this.items = response.data;
      })
    }
  },
  mounted() {
    this.get();
  }
}
</script>
