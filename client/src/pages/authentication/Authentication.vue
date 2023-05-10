<template>
  <div class="page-signin relative-position">
    <div class="page-signin__inner-box">
      <div class="page-signin__form-wrapper">
        <form
          action="submit"
          autocomplete="off"
          class="page-signin__signin-form"
        >
          <div
            class="cursor-pointer row items-center q-gutter-md"
            @click="$router.push({ name: 'Root' })"
          >
            <q-icon
              name="arrow_back"
              size="2rem"
            />
            <div>
              Voltar ao blog
            </div>
          </div>

          <div class="page-signin__heading">
            <h2 class="page-signin__welcome">
              Bem vindo
            </h2>
            <div class="row">
              <h6>Ainda não tem um conta??</h6>
              <a
                class="q-ml-xs cursor-pointer"
                @click="toggleModeClass"
              >Criar uma conta</a>
            </div>
          </div>

          <div class="page-signin__actual-form">
            <app-input
              v-model="signInValues.email"
              label="E-mail"
              v-bind="handleErrors(!!signInErrors.email, signInErrors.email)"
              debounce="800"
              @update:model-value="onUpdateEmailSignIn"
            />
            <app-input
              v-model="signInValues.password"
              label="Senha"
              v-bind="handleErrors(!!signInErrors.password, signInErrors.password)"
            />
            <app-button
              class="q-mt-md"
              label="Entrar"
              @click="onSignIn"
            />

            <p class="page-signin__forgot q-mt-lg">
              Esqueceu sua senha e precisa de ajuda para acessar sua conta? <a href="#">Clique aqui!</a>
            </p>
          </div>
        </form>

        <form
          action="submit"
          autocomplete="off"
          class="page-signin__signup-form"
        >
          <div
            class="cursor-pointer row items-center q-gutter-md"
            @click="$router.push({ name: 'Root' })"
          >
            <q-icon
              name="arrow_back"
              size="2rem"
            />
            <div>
              Voltar ao blog
            </div>
          </div>

          <div class="page-signin__heading">
            <h2 class="page-signin__welcome">
              Vamos começar
            </h2>
            <div class="row">
              <h6>Já possui uma conta?</h6>
              <a
                class="q-ml-xs cursor-pointer"
                @click="toggleModeClass"
              >Realizar o login</a>
            </div>
          </div>

          <div class="page-signin__actual-form">
            <app-input
              v-model="signUpValues.name"
              label="Nome"
            />
            <app-input
              v-model="signUpValues.email"
              label="E-mail"
            />
            <app-input
              v-model="signUpValues.password"
              label="Senha"
            />
            <app-input
              v-model="signUpValues.repeatPassword"
              label="Repita a senha"
            />
            <app-button
              label="Criar conta"
              @click="onSignUp"
            />

            <p class="page-signin__forgot q-mt-lg">
              Ao criar sua conta, você concorda com os <a
                class="cursor-pointer text-primary"
                @click="openTermsModal"
              >Termos e Políticas de Privacidade.</a>
            </p>
          </div>
        </form>
      </div>

      <div class="page-signin__carousel">
        <q-carousel
          v-model="slide"
          transition-prev="scale"
          transition-next="scale"
          swipeable
          animated
          navigation
          padding
          class="full-height text-white"
        >
          <template #navigation-icon="{ active, btnProps, onClick }">
            <div class="q-my-md">
              <q-btn
                v-if="active"
                size="xs"
                :icon="btnProps.icon"
                color="grey-10"
                flat
                round
                dense
                @click="onClick"
              />

              <q-btn
                v-else
                size="xs"
                :icon="btnProps.icon"
                color="grey-8"
                flat
                round
                dense
                @click="onClick"
              />
            </div>
          </template>

          <q-carousel-slide
            name="style"
            class="column no-wrap flex-center justify-between"
          >
            <q-img
              class="page-signin__carousel-image"
              src="../../assets/image1.png"
            />
            <div class="page-signin__carousel-text q-mt-md text-center">
              Postagens todas as semanas
            </div>
          </q-carousel-slide>
          <q-carousel-slide
            name="stayle"
            class="column no-wrap flex-center"
          >
            <q-img
              class="page-signin__carousel-image"
              src="../../assets/image2.png"
            />
            <div class="page-signin__carousel-text q-mt-md text-center">
              Postagens todas as semanas
            </div>
          </q-carousel-slide>
          <q-carousel-slide
            name="styldse"
            class="column no-wrap flex-center"
          >
            <q-img
              class="page-signin__carousel-image"
              src="../../assets/image3.png"
            />
            
            <div class="page-signin__carousel-text q-mt-md text-center">
              Postagens todas as semanas
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>

    <app-dialog
      ref="dialog"
      v-model="termsModel"
      :content="dialogContent"
    >
      <template #default>
        <div class="column full-width items-center">
          <app-terms-content />
        </div>
      </template>

      <template #actions>
        <q-card-actions class="column full-width items-center q-gutter-md q-my-md">
          <q-btn
            outline
            rounded
            color="primary"
            label="Entendi"
            no-caps
            @click="$refs.dialog.hide()"
          />
        </q-card-actions>
      </template>
    </app-dialog>
  </div>
</template>

<script>
import AppInput from 'src/components/AppInput.vue';
import AppButton from 'src/components/AppButton.vue';
import AppDialog from 'src/components/AppDialog.vue';
import AppTermsContent from 'src/components/AppTermsContent.vue';

import { handleErrors, validateEmail } from '../../helpers/index';

export default {
  name: 'SignIn',

  components: {
    AppInput,
    AppButton,
    AppDialog,
    AppTermsContent
  },

  data () {
    return {
      slide: 'style',
      signUpValues: {},
      signInValues: {},
      signInErrors: {
        password: '',
        email: ''
      },
      termsModel: false
    }
  },

  computed: {
    dialogContent () {
      return {
        title: 'Termos e políticas de privacidade'
      }
    },

    isInvalidEmail () {
      return this.signInValues.email === 'teste'
    },

    isSignUpMode () {
      return this.$route.query?.createAccount
    }
  },

  mounted () {
    if (!this.isSignUpMode) return

    this.toggleModeClass()
  },

  methods: {
    handleErrors,

    toggleModeClass () {
      const signinPage = document.querySelector('.page-signin')

      this.resetAllValues()

      signinPage.classList.toggle('sign-up-mode')
    },

    openTermsModal () {
      this.termsModel = true
    },

    resetAllValues () {
      this.signInValues = {}
      this.signUpValues = {}
    },

    onUpdateEmailSignIn () {
      validateEmail(this.signInValues.email)
        ? this.signInErrors.email = ''
        : this.signInErrors.email = 'invalidEmail'
    },

    onSignUp () {
      console.log(this.signUpValues)
    },

    onSignIn () {
      this.signInErrors.password = 'O e-mail ou senha não conferem!'

      console.log(this.signInValues)
    }
  }
}
</script>

<style lang="scss">
.page-signin {
  background-color: white;
  max-width: 1024px;
  width: 100%;
  height: 640px;
  position: relative;

  border-radius: 3.3rem;
  box-shadow: 0 60px 40px -30px rgba($color: #000000, $alpha: 0.27);

  &.sign-up-mode &__form-wrapper {
    left: 55%;
  }

  &.sign-up-mode &__carousel {
    left: 0;
  }

  &.sign-up-mode &__signup-form {
    opacity: 1;
    pointer-events: all;
  }

  &.sign-up-mode &__signin-form {
    opacity: 0;
    pointer-events: none;
  }

  &__inner-box {
    position: absolute;
    width: calc(100% - 4.1rem);
    height: calc(100% - 4.1rem);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__form-wrapper {
    position: absolute;
    width: 45%;
    height: 100%;
    left: 0;
    top: 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    transition: .8s ease-in-out;

    & form {
      max-width: 280px;
      width: 100%;
      margin: 0 auto;
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: space-evenly;
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      transition: opacity 0.02s 0.4s;
    }
  }

  &__signup-form {
    opacity: 0;
    pointer-events: none;
  }

  &__carousel {
    position: absolute;
    width: 55%;
    height: 100%;
    left: 45%;
    top: 0;
    background-color: #b3baff;
    border-radius: 3.3rem;
    transition: .8s ease-in-out;

    & .q-carousel {
      background-color: #c4c9ff;
      border-radius: 3.3rem;
    }
  }

  &__carousel-text {
    color: $dark;
    font-size: 2rem;
    font-weight: 800;
    position: absolute;
    bottom: 80px;
  }

  &__carousel-image {
    width: 100%;
  }

  &__carousel-navigation {
    &--active {
      height: 1.4rem;
      width: 3.2rem;
      background-color: $grey-8;
      border-radius: 1rem;
    }
  }

  &__heading  {
    & h2 {
      font-size: 3rem;
      font-weight: 700;
    }

    & h6 {
      font-size: 1.25rem;
      color: $grey-7;
    }

    a {
      font-size: 1.25rem;
      font-weight: 600;
      text-decoration: none;
      color: $primary;
    }
  }

  &__forgot {
    font-size: 1.25rem;
    font-weight: 600;
    text-decoration: none;
    color: $grey-7;
  }
}

</style>