import Vue from "vue";
import Vuex from "vuex";
import * as student from "../store/modules/student";
import * as teacher from "../store/modules/teacher";
import * as admin from "../store/modules/admin";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { student, teacher, admin },
});
