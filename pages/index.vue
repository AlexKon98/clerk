<template>
  <div class="main">
    <section class="main__nav">
      <div class="container">
        <TheBreadcrumbs :breadcrumbs="breadcrumbs" />

        <h1 class="main__title">Подписки &laquo;Клерка&raquo;</h1>

        <TabsList :tabs="tabs" @change-active="changeActiveTab" />
      </div>
    </section>

    <section class="main__subscribe">
      <div class="container">
        <h2 class="main__subtitle">Выберите рассылки, которые подходят именно вам</h2>

        <SubscribeForm @checkall="checkAll" />

        <ul class="main__list">
          <li v-for="sub in subscribeList" :key="sub.id">
            <SubscribeItem :sub-item="sub" @change="changeItem" />
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>


<script lang="ts" setup>
import { ref } from 'vue';
import TheBreadcrumbs from '~/components/TheBreadcrumbs.vue';
import SubscribeForm from '~/components/SubscribeForm.vue';
import type { Breadcrumb, Tab, SubscribeItem } from '~/types';

const breadcrumbs = ref<Array<Breadcrumb>>([
  {
    id: 0,
    name: 'Главная',
    link: '/'
  },
  {
    id: 1,
    name: 'Рассылки',
    link: '/'
  },
  {
    id: 2,
    name: 'Хлебные крошки'
  }
]);

const tabs = ref<Array<Tab>>([
  {
    id: 0,
    name: 'Рассылки',
    isActive: true
  },
  {
    id: 1,
    name: 'Соцсети',
    isActive: false
  },
  {
    id: 2,
    name: 'Мессенджеры',
    isActive: false
  }
]);

const changeActiveTab = (id: number) => {
  tabs.value.forEach(tab => {
    tab.isActive = tab.id === id;
  });
};

const subscribeList = ref<SubscribeItem[]>([
  {
    id: 0,
    title: 'Утренний бухгалтер',
    heading: 'Перед рассветом',
    text: 'Самые важные новости и события за день. Кратко, по делу, структурировано.',
    image: {
      desktop: './images/morning.jpg',
      mobile: './images/morning-mobile.jpg'
    },
    list: [
      'Новости для бухгалтеров, ИП и директора',
      'Подборка статей за день'
    ],
    checkbox: {
      title: 'Уже получает 59 342 человек',
      isActive: false
    }
  },
  {
    id: 1,
    title: 'Ночной бухгалтер',
    heading: 'После заката',
    text: 'Самая краткая газета о налогах и бухучете в мире — современная рассылка для чтения.',
    image: {
      desktop: './images/evening.jpg',
      mobile: './images/evening-mobile.jpg'
    },
    list: [
      'Анализ, оценка и только самое главное',
      'Лучшие комменты юзеров в обзоре'
    ],
    checkbox: {
      title: 'Уже получает 37 480 человек',
      isActive: false
    }
  },
  {
    id: 2,
    title: 'Ножницы скидок',
    heading: 'Раз в две недели',
    text: 'Подборка самых выгодных и полезных спецпредложений от надежных компаний.',
    image: {
      desktop: './images/scissors.jpg',
      mobile: './images/scissors-mobile.jpg'
    },
    list: [
      'Акции и скидки от лидеров рынка',
      'Те, кто подписался – экономят много денег'
    ],
    checkbox: {
      title: 'Уже получает 92 118 человек',
      isActive: false
    }
  },
  {
    id: 3,
    title: 'Чемодан вебинаров',
    heading: 'По мере появления анонсов',
    text: 'Подборка с анонсами бесплатных вебинаров на самые топовые темы при участии экспертов.',
    image: {
      desktop: './images/vebinars.jpg',
      mobile: './images/vebinars-mobile.jpg'
    },
    list: [
      'Никогда не пришлем платные вебинары',
      'Подборка топовых тем для вебинаров'
    ],
    checkbox: {
      title: 'Уже получает 92 082 человек',
      isActive: false
    }
  }
]);

const changeItem = (id: number | string) => {
  subscribeList.value.forEach(sub => {
    if (sub.id === id) sub.checkbox.isActive = !sub.checkbox.isActive; 
  });
};

const checkAll = (isChecked: boolean) => {
  subscribeList.value.forEach(sub => sub.checkbox.isActive = isChecked);
};
</script>

<style lang="scss" scoped>
.main {
  margin-top: 24px;

  @media (max-width: 1055px) {
    margin-top: 28px;
  }

  &__nav {

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  &__title {
    margin-bottom: 24px;
  }

  &__subtitle {
    margin-bottom: 24px;
    font-weight: 600;

    @media (max-width: 1055px) {
      margin-bottom: 16px;
    }
  }

  &__subscribe {
    margin-bottom: 48px;

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 48px 24px;
      border-radius: 16px;
      background-color: $lightGrey2;

      @media (max-width:1055px) {
        padding: 32px 16px;
        border-radius: 0;
      }
    }
  }

  &__list {
    width: 100%;
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 1055px) {
      grid-template-columns: 1fr;
    }

    li {
      padding: 24px;
      border-radius: 16px;
      box-shadow: 0px 8px 16px 0px #00000014;
      background-color: $white;
    }
  }
}
</style>
