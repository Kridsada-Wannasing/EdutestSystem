import studentServices from "../../api/services/student";

export const namespaced = true;

export const state = {
  students: [],
};

export const mutations = {
  SET_STUDENTS(state, students) {
    state.students = students;
  },
  ADD_STUDENT(state, students) {
    state.students.push(students);
  },
  DELETE_STUDENT(state, studentId) {
    let target = state.students.findIndex(
      (student) => student.studentId == studentId
    );
    state.students.splice(target, 1);
  },
};

export const actions = {
  async registerStudents({ commit }, newStudents) {
    try {
      const response = await studentServices.registerStudents(newStudents);
      response.data.newAccount.map((student) => commit("ADD_STUDENT", student));
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  async getAllStudents({ commit }) {
    try {
      const response = await studentServices.getAllStudents();
      commit("SET_STUDENTS", response.data.allStudents);
      return response.data.newStudents;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  async deleteStudent({ commit }, studentId) {
    try {
      const response = await studentServices.deleteStudent(studentId);
      commit("DELETE_STUDENT", studentId);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export const getters = {};
