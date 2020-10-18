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
    try {
      const response = await adminServices.login(credentials);

      commit("SET_TOKEN", response.data.token);
      commit("SET_ADMIN", response.data.admin);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  logout({ commit }) {
    commit("CLEAR_ADMIN");
  },
  async updateMe({ commit }, data) {
    try {
      const response = await adminServices.updateMe(data);

      commit("SET_ADMIN", response.data.admin);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  async updatePassword({ oldPassword, newPassword }) {
    try {
      await adminServices.updatePassword(oldPassword, newPassword);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  async forgotPassword(email) {
    try {
      const response = await adminServices.forgotPassword(email);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export const getters = {};
