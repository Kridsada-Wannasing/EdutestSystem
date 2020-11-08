import teacherServices from "../../api/services/teacher";

export const namespaced = true;

export const state = {
  teachers: [],
};

export const mutations = {
  SET_TEACHERS(state, teachers) {
    state.teachers = teachers;
  },
  ADD_TEACHER(state, teachers) {
    state.teachers.push(teachers);
  },
  DELETE_TEACHER(state, teacherId) {
    let target = state.teachers.findIndex(
      (teacher) => teacher.teacherId == teacherId
    );
    state.teachers.splice(target, 1);
  },
};

export const actions = {
  async registerTeachers({ commit }, newTeachers) {
    try {
      const response = await teacherServices.registerTeachers(newTeachers);

      if (!response.data.newAccount) throw response.data;

      response.data.newAccount.map((teacher) => commit("ADD_TEACHER", teacher));
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  },
  async getAllTeachers({ commit }) {
    try {
      const response = await teacherServices.getAllTeachers();
      commit("SET_TEACHERS", response.data.allTeachers);
      return response.data.newTeachers;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  async deleteTeacher({ commit }, teacherId) {
    try {
      const response = await teacherServices.deleteTeacher(teacherId);
      commit("DELETE_TEACHER", teacherId);
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export const getters = {};
