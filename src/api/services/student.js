import { apiClient } from "../axios";

const endpoint = "/student";

export default {
  registerStudents(newStudents) {
    return apiClient.post(`${endpoint}`, newStudents);
  },
  getAllStudents() {
    return apiClient.get("/all-student");
  },
  deleteStudent(studentId) {
    return apiClient.delete(`${endpoint}/${studentId}`);
  },
};
