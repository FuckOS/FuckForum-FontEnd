<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" app>
        <template v-slot:prepend>
          <v-list-item two-line :to="isLogin ? '/user' : '/login'">
            <v-list-item-avatar color="blue" class="white--text">
              <!-- <img src="https://randomuser.me/api/portraits/women/81.jpg" /> -->
              ?
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ isLogin ? userInfo.username : "恁还没有登入，，，" }}</v-list-item-title>
              <v-list-item-subtitle>{{ isLogin ? userInfo.bio : "快来登入罢" }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>

        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item
            v-for="(item, index) in navlist"
            :key="index"
            :to="item.path"
            link
            active-class="blue white--text"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app color="blue" dark>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>FuckOS</v-toolbar-title>
      </v-app-bar>

      <v-main>
        <router-view />
      </v-main>
    </v-app>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapGetters(["userInfo", "isLogin"]),
  },
  data() {
    return {
      drawer: null,
      navlist: [{ title: "主页", path: "/", icon: "mdi-home" }],
    };
  },
};
</script>

<style>
@import "./App.less";
</style>
