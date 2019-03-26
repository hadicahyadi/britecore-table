<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th v-for="column in columns" v-bind:key="column">
            {{column}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" v-bind:key="index">
          <td v-for="column in columns" v-bind:key="column">
            <input :item-id="index" @input="descriptionChanged" type="text" class="form-control form-control-sm" v-if="column === 'Description'" :value="getRowValue(item, column)" />
            <span v-else>{{getRowValue(item, column)}}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'DataTable',
  props: {
    items: {
      type: Array,
      required: true
    },
    fields: Array,
    changeHandler: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      columns: this.fields || [],
      datas: []
    }
  },
  methods: {
    getRowValue (item, columnName) {
      return item[columnName]
    },
    descriptionChanged(e) {
      this.$emit('descriptionUpdated', {id: e.target.getAttribute('item-id'), value:  e.target.value})
    }
  },
  created () {
    if (this.fields === undefined || !this.fields.length) {
      this.columns = Object.keys(this.items[0])
    }
  }
}
</script>
