<template>
  <div class="app-header__actions">
    <div v-if="!userLogged">
      <q-btn
        flat
        color="grey-7"
        icon="login"
        label="login"
        class="q-mr-sm"
        @click="$router.push({ name: 'Authentication' })"
      />
      <q-btn
        text-color="white"
        color="primary"
        label="criar conta"
        unelevated
        rounded
      />
    </div>

    <div v-else>
      <q-btn
        flat
        class="position-relative"
      >
        <div class="row items-center">
          <q-avatar size="36px">
            <img src="https://cdn.quasar.dev/img/avatar4.jpg">
          </q-avatar>

          <p class="q-ml-sm">
            Olá, Luis Felipe
          </p>
        </div>

        <q-menu class="app-header-actions__dropdown text-center">
          <div class="app-header-actions__user-informations q-my-lg">
            <p class="app-header-actions__user-name">
              Luis Felipe
            </p>
            <p class="app-header-actions__user-email text-grey">
              felipejuzo@hotmail.com
            </p>
          </div>

          <q-list>
            <q-item
              class="row items-center justify-center"
              clickable
              @click="onClickEditProfile"
            >
              <q-icon
                class="q-mr-sm"
                name="edit"
              />
              <p>Editar perfil</p>
            </q-item>

            <q-item
              clickable
              class="row items-center justify-center"
              @click="onLogoutUser"
            >
              <q-icon
                class="q-mr-sm"
                name="logout"
              />
              <p>Sair</p>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeaderActions',

  data () {
    return {
      userLogged: false
    }
  },

  methods: {
    onLogoutUser () {
      console.log('cliquei em realizar logout')
    },

    onClickEditProfile () {
      console.log('cliquei em realizar edicao')
    }
  }
}
</script>

<style lang="scss">
.app-header-actions {
  &__dropdown {
    width: 220px;
    position: absolute;
  }

  &__user-name {
    font-size: 2rem;
  }

  &__user-email {
    font-size: 1.25rem;
  }
}
</style>