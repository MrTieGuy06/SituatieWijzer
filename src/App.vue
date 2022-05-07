<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Menu
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <!--  -->
      <v-divider></v-divider>

      <v-list dense nav
      >
        <v-list-item v-for="item in menuItems" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      absolute
      color="#fcb69f"
      dark
      shrink-on-scroll
      src="../public/clouds.jpg"
      scroll-target="#main-content"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Situatie Wijzer</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon to="/nieuwe-situatie">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main id="main-content">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
      drawer: null,
      menuItems: [
        { title: 'Home', icon: 'mdi-home', to: '/' },
        { title: 'Nieuwe Situatie', icon: 'mdi-plus', to: '/nieuwe-situatie' },
        { title: 'Mijn Situaties', icon: 'mdi-view-dashboard', to: '/mijn-situaties' },
        { title: 'Mijn Voortgang', icon: 'mdi-calendar', to: '/mijn-voortgang'},
      ]
    }),
  }
</script>