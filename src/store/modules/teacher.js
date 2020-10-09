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
    const response = await teacherServices.registerTeachers(newTeachers);
    response.data.newAccount.map((teacher) => commit("ADD_TEACHER", teacher));
    return response.data;
  },
  async getAllTeachers({ commit }) {
    const response = await teacherServices.getAllTeachers();
    commit("SET_TEACHERS", response.data.allTeachers);
    return response.data.newTeachers;
  },
  async deleteTeacher({ commit }, teacherId) {
    const response = await teacherServices.deleteTeacher(teacherId);
    commit("DELETE_TEACHER", teacherId);
    return response;
  },
};

export const getters = {};
