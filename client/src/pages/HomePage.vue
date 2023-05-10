<template>
  <main class="page-home container">
    <app-news-blog class="q-my-xl" />

    <div class="page-home__section-title">
      Destaque da semana
    </div>

    <section class="page-home__main q-my-lg">
      <div class="page-home__main-card">
        <q-img
          class="page-home__main-image"
          src="../assets/Kayla-Person.jpg"
        />

        <div class="page-home__main-text q-my-md">
          <h3>Lorem ipsum dolor sit amet</h3>
          <p class="q-mt-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat at impedit dolorum consequuntur maxime, officia molestias sint eveniet consequatur accusantium quisquam nam quae voluptatum suscipit, beatae magni assumenda nostrum nihil?
          </p>
        </div>
      </div>
      <div class="q-ml-md">
        <q-tabs
          v-model="tab"
          indicator-color="primary"
          class="text-grey-9"
          @update:model-value="changeTabs"
        >
          <q-tab
            name="recents"
            label="Posts Recentes"
            no-caps
            content-class="page-home__tab"
          />
          <q-tab
            name="authors"
            label="Principais Autores"
            no-caps
            content-class="page-home__tab"
          />
        </q-tabs>

        <q-tab-panels
          v-model="tab"
          animated
        >
          <q-tab-panel
            class="no-padding q-mt-md"
            name="recents"
          >
            <app-recents-posts-card />
          </q-tab-panel>

          <q-tab-panel
            class="no-padding q-mt-md"
            name="authors"
          >
            <app-main-authors-card />
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </section>

    <section>
      <div class="page-home__section-title q-my-lg">
        Outros assuntos
      </div>

      <div class="page-home__others">
        <div class="page-home__others-card">
          Card
        </div>
        <div class="page-home__others-card">
          Card
        </div>
        <div class="page-home__others-card">
          Card
        </div>
      </div>

      <div class="page-home__announcement q-my-lg">
        Card reservado para o Google ADS
      </div>
    </section>

    <footer class="page-home__footer q-py-lg">
      <div class="column items-center">
        <h3>Blog v2</h3>

        <q-list class="page-home__list flex q-gutter-lg q-py-lg">
          <p @click="$router.push({ name: 'PostsList' })">
            Postagens
          </p>
          <p @click="$router.push({ name: 'CategoriesList' })">
            Categorias
          </p>
          <p @click="$router.push({ name: 'AuthorsList' })">
            Autores
          </p>
          <p @click="$router.push({ name: 'AboutSingle' })">
            Sobre
          </p>
        </q-list>

        <div class="page-home__footer-separator" />

        <p>Desenvolvido para estudo - Luis Juzo</p>
      </div>
    </footer>
  </main>
</template>

<script>
import AppNewsBlog from 'src/components/AppNewsBlog.vue';
import AppRecentsPostsCard from 'src/components/AppRecentsPostsCard.vue';
import AppMainAuthorsCard from 'src/components/AppMainAuthorsCard.vue';

export default {
  name: 'HomePage',

  components: {
    AppNewsBlog,
    AppRecentsPostsCard,
    AppMainAuthorsCard
  },

  data () {
    return {
      tab: 'recents'
    }
  },

  methods: {
    changeTabs () {
      console.log('teste', this.tab)
    }
  }
}
</script>

<style lang="scss">
.page-home {
  &__section-title {
    font-size: 2.2rem;
    font-weight: 600;
    position: relative;
    color: #0B0B0B;

    &::after {
      content: "";
      width: calc(100% - 250px);
      height: 3px;
      background-color: $grey-4;
      right: 0;
      bottom: 12px;
      position: absolute;
    }
  }

  &__main {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }

  &__main-image {
    aspect-ratio: 16/9;
    border-radius: 24px;
  }

  &__main-text {
    & h3 {
      color: #1e1e1e;
      font-size: 3.6rem;
      font-weight: 600;
    }

    & p {
      color: $grey-6;
    }
  }

  &__tab {
    font-weight: 600;
    font-size: 1.8rem;
  }

  &__others {
    display: flex;
    justify-content: space-between;
  }

  &__others-card {
    background-color: red;
    width: 32%;
    height: 200px;
    border-radius: 24px;
  }

  &__announcement {
    background-color: $primary;
    height: 150px;
    border-radius: 24px;
  }

  &__footer {
    background-color: $primary;
    color: white;
    position: absolute;
    width: 100%;
    left: 0;
  }

  &__list {
    cursor: pointer;

    & p:hover {
      text-decoration: underline;
    }
  }
}
</style>