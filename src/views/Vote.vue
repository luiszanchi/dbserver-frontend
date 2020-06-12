<template>
  <div>
    <h1>Votação</h1>

    <vs-row>
        <vs-button 
            v-if="personSelected && restaurantSelected"
            color="primary" 
            type="border" 
            icon="save"
            style="margin-left: auto; margin-right: auto;"
            @click="vote()"
        />
    </vs-row>
    <vs-row>
      <vs-col vs-w="3" vs-xs="1"></vs-col>
      <vs-col vs-w="3" vs-xs="5">
        <vs-table
          :sst="true"
          :data="persons"
        >
          <template slot="header">
            <h3>Pessoas</h3>
          </template>
          <template slot="thead">
            <vs-th>Pessoas</vs-th>
          </template>

          <template slot-scope="{data}">
            <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
              <vs-td :data="tr.id" class="float-left td-id">
                  <vs-radio v-model="personSelected" vs-name="personSelected" :vs-value="tr.id">
                      {{ tr.name }}
                  </vs-radio>                  
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>
      </vs-col>

      <vs-col vs-w="3" vs-xs="5">

        <vs-table
          :sst="true"
          :data="restaurants"
        >
          <template slot="header">
            <h3>Restaurantes</h3>
          </template>
          <template slot="thead">
            <vs-th>Restaurantes</vs-th>
          </template>

          <template slot-scope="{data}">
            <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
              <vs-td :data="tr.id" class="float-left td-id">
                  <vs-radio v-model="restaurantSelected" vs-name="restaurantSelected" :vs-value="tr.id">
                      {{ tr.name }}
                  </vs-radio>                  
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
  name: "person",
  filters: {
    formatDate: function(value) {
      return moment(value, 'YYYY-MM-DD HH:mm:ss').format('DD/MM/YYYY');
    }
  },
  data() {
    return {
      persons: [],
      personSelected: '',
      restaurants: [],
      restaurantSelected: '',
    };
  },
  methods: {
    getItems() {
      this.$axios.get('votes', {
        params: {}
      })
      .then((response) => {
        this.persons = response.data.persons;
        this.restaurants = response.data.restaurants;
      })
    },
    vote() {
        this.$axios.post('/votes/vote', {
            person_id: this.personSelected,
            restaurant_id: this.restaurantSelected
        })
        .then(() => {
            this.$vs.notify({
                title: 'Erro',
                text: 'Votação realizada com sucesso!',
                color: 'success'
            })
            this.personSelected = ''
            this.restaurantSelected = ''
        })
        .catch((message) => {
            this.$vs.notify({
                title: 'Erro',
                text: message.data.message || message.data.error.message,
                color: 'danger'
            })
        })
        .finally(() => {
            this.getItems()
        })
    },
  },
  beforeMount() {
    this.getItems()
  }
};
</script>