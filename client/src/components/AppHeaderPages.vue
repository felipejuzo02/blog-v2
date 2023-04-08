<template>
  <div class="row items-center justify-between q-mb-md">
    <div>
      <h2 class="text-h2">
        {{ title }}
      </h2>

      <q-breadcrumbs>
        <q-breadcrumbs-el
          v-for="(item, index) in breadcrumbs"
          :key="index"
          :label="item.label"
          :class="breadcrumbsClass(item)"
          @click="$router.push({ name: item.route })"
        />
      </q-breadcrumbs>
    </div>

    <slot name="actions" />
  </div>
</template>

<script>
export default {
  name: 'AppHeaderPages',

  props: {
    title: {
      type: String,
      default: ''
    },

    breadcrumbs: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    breadcrumbsClass (item) {
      return item.route && 'cursor-pointer'
    }
  }
}
</script>