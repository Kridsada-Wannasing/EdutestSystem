import adminServices from "../../api/services/admin";

export const namespaced = true;

export const state = {
  admin: {},
};

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
    localStorage.setItem("token_admin", token);
  },
  SET_ADMIN(state, admin) {
    state.admin = admin;
    localStorage.setItem("admin", JSON.stringify(admin));
  },
  CLEAR_ADMIN() {
    localStorage.removeItem("token_admin");
    localStorage.removeItem("admin");
    location.reload();
  },
};

export const actions = {
  async login({ commit }, credentials) {
    const response = await adminServices.login(credentials);

    commit("SET_TOKEN", response.data.token);
    commit("SET_ADMIN", response.data.admin);
  },
  logout({ commit }) {
    commit("CLEAR_ADMIN");
  },
  async updateMe({ commit }, data) {
    const response = await adminServices.updateMe(data);

    commit("SET_ADMIN", response.data.admin);
  },
  async updatePassword({ oldPassword, newPassword }) {
    await adminServices.updatePassword(oldPassword, newPassword);
  },
  async forgotPassword(email) {
    await adminServices.forgotPassword(email);
  },
};

export const getters = {};
