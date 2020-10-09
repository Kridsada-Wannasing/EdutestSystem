import { apiClient } from "../axios";

const endpoint = "/teacher";

export default {
  registerTeachers(newTeachers) {
    return apiClient.post(`${endpoint}`, newTeachers);
  },
  getAllTeachers() {
    return apiClient.get("/all-teacher");
  },
  deleteTeacher(teacherId) {
    return apiClient.delete(`${endpoint}/${teacherId}`);
  },
};
