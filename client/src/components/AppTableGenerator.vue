<template>
  <q-table
    :rows="rows"
    :columns="columns"
    row-key="name"
    flat
    bordered
  />
</template>

<script>
export default {
  name: 'AppTableGenerator',

  props: {
    columns: {
      type: Array,
      default: () => []
    },

    rows: {
      type: Array,
      default: () => []
    }
  }
}
</script>