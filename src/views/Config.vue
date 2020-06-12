<template>
  <div>
    <h1>Configuração</h1>

    <vs-row>
      <vs-col vs-w="3" vs-xs="1"></vs-col>
      <vs-col vs-w="6" vs-xs="10">
        <vs-table
          :sst="true"
          :data="items"
        >
          <template slot="header">
            <h3>Configuração</h3>
            <vs-button 
                color="primary" 
                type="border" 
                icon="add"
                @click="add()"
            />
          </template>
          <template slot="thead">
            <vs-th>ID</vs-th>
            <vs-th>Nome</vs-th>
            <vs-th>Valor</vs-th>
            <vs-th class="float-right">Ação</vs-th>
          </template>

          <template slot-scope="{data}">
            <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
              <vs-td :data="tr.id" class="float-left td-id">{{ tr.id }}</vs-td>
              <vs-td :data="tr.name">
                <vs-input
                    class="full-width"
                    v-model="tr.name"
                />
              </vs-td>
              <vs-td :data="tr.value">
                  <vs-input
                    class="full-width"
                    v-model="tr.value"
                  />
              </vs-td>
              <vs-td class="float-right">
                  <vs-button 
                    color="primary" 
                    type="filled"
                    icon="save"
                    @click="save(tr)"
                  >
                  </vs-button>
                  <vs-button 
                    color="warning" 
                    type="filled"
                    icon="delete"
                    @click="remove(tr, indextr)"
                  >
                  </vs-button>
              </vs-td>
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
import moment from 'moment'
export default {
  name: "config",
  filters: {
    formatDate: function(value) {
      return moment(value, 'YYYY-MM-DD HH:mm:ss').format('DD/MM/YYYY');
    }
  },
  data() {
    return {
      items: []
    };
  },
  methods: {
    getItems() {
      this.$axios.get('vote-config', {
        params: {}
      })
      .then((response) => {
        this.items = response.data;
      })
    },
    add() {
        this.items.push({
            id: '',
            name: '',
            value: ''
        });
    },
    remove(item, key) {
        if(typeof item.id == 'undefined' || item.id) {
            this.$axios.delete('vote-config/'+item.id, {
                    name: item.name,
                    value: item.value,
                })
                .then(() => {
                    this.getItems();
                })
            return;
        }
        this.items = this.items.filter((item, k) => k != key)
        
    },
    save(item) {
        if(typeof item.id == 'undefined' || item.id) {
            this.$axios.put('vote-config/'+item.id, {
                name: item.name,
                value: item.value,
            })
            .then(() => {
                this.getItems();
            })
            return;
        }

        this.$axios.post('vote-config', {
            name: item.name,
            value: item.value,
        })
        .then(() => {
            this.getItems();
        })
    }
  },
  beforeMount() {
    this.getItems()
  }
};
</script>