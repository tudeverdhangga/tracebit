<template>
  <div class="the-navbar">
    <v-toolbar outlined>
      <div class="lg:hidden">
        <v-app-bar-nav-icon @click="toogle = !toogle" />
      </div>
      <!-- Laptop and up navbar -->
      <div class="h-[30px] max-lg:hidden">
        <a href="/">
          <img
            src="@/assets/images/logo/tracebit-text-large.svg"
            alt="Tracebit Logo"
            class="h-full"
          >
        </a>
      </div>
      <v-spacer />
      <div class="max-lg:hidden h-full">
        <v-toolbar-items>
          <v-btn
            v-for="menu in menus"
            :key="menu.label"
            class="px-6"
            :to="menu.to"
            text
          >
            {{ menu.label.toUpperCase() }}
          </v-btn>
        </v-toolbar-items>
      </div>
      <!-- Tablet and down navbar -->
      <v-navigation-drawer
        v-model="toogle"
        class="lg:hidden"
        app
        absolute
        temporary
      >
        <v-list-item>
          <div class="h-[30px]">
            <img
              src="@/assets/images/logo/tracebit-text-large.svg"
              alt="Tracebit Logo"
              class="h-full"
            >
          </div>
          <v-spacer />
          <v-btn
            icon
            @click.native="toogle = !toogle"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-list-item>
        <v-divider />
        <v-list dense>
          <v-list-item
            v-for="menu in menus"
            :key="menu.label"
            :href="menu.to"
          >
            <v-icon>
              {{ menu.icon }}
            </v-icon>
            {{ menu.label }}
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <!-- User profile -->
      <v-spacer />
      <div class="the-navbar__profile">
        <p class="profile-username">
          {{ username }}
        </p>
        <v-menu
          transition="slide-x-transition"
          :nudge-width="100"
          bottom
          offset-y
        >
          <template #activator="{ on, attrs }">
            <v-avatar
              color="accent"
              size="40"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon color="primary">
                mdi-account-outline
              </v-icon>
            </v-avatar>
          </template>
          <v-list>
            <v-list-item class="px-0">
              <v-btn
                class="pl-0"
                block
                text
              >
                <v-icon left>
                  mdi-cog-outline
                </v-icon>
                Setting
              </v-btn>
            </v-list-item>
            <v-list-item class="px-0">
              <v-btn
                class="pl-0"
                block
                text
              >
                <v-icon left>
                  mdi-logout-variant
                </v-icon>
                Logout
              </v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-toolbar>
    <div class="the-navbar__breadcrumbs">
      <v-breadcrumbs
        v-if="breadcrumbs && breadcrumbs.length"
        divider=">"
        :items="breadcrumbs"
      />
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import store from 'store'

export default {
  name: 'TheNavbar',
  props: {
    breadcrumbs: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const toogle = ref(false)
    const menus = [
      {
        label: 'Dashboard',
        icon: 'mdi-home-outline',
        to: '/dashboard'
      },
      {
        label: 'Form',
        icon: 'mdi-file-document-outline',
        to: '/form'
      },
      {
        label: 'Landing Page',
        icon: 'mdi-laptop',
        to: '/landing-pages'
      },
      {
        label: 'Leads',
        icon: 'mdi-checkbox-marked-outline',
        to: '/leads'
      },
      {
        label: 'Settings',
        icon: 'mdi-cog-outline',
        to: '/settings'
      }
    ]

    const username = computed(() => store.get('session').name)

    return {
      toogle,
      menus,
      username
    }
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>
