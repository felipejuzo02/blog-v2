<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Blog v2
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" elevated>
      <q-list>
        <q-item class="column" v-for="(item, index) in drawerContent" :key="index">
          <q-item-label header>{{ item.title }}</q-item-label>

          <q-item clickable v-ripple v-for="(option, optionIndex) in item.options" :key="optionIndex">
            <q-item-section avatar>
              <q-icon color="grey-7" :name="option.icon" />
            </q-item-section>

            <q-item-section>{{ option.title }}</q-item-section>
          </q-item>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      leftDrawerOpen: false
    }
  },

  methods: {
    toggleLeftDrawer () {
      this.leftDrawerOpen = !this.leftDrawerOpen
    }
  },

  computed: {
    drawerContent () {
      return [
        {
          title: 'Postagens',
          options: [
            { title: 'Postagens', icon: 'grade' },
            { title: 'Categorias', icon: 'category' },
          ]
        },
        {
          title: 'Autores',
          options: [
            { title: 'Autores', icon: 'person' },
          ]
        }
      ]
    }
  }
}
</script>