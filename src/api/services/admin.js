import { apiClient } from "../axios";

export default {
  login(credentials) {
    return apiClient.post("/login", credentials);
  },
  forgotPassword(email) {
    return apiClient.post("/forgotPassword", email);
  },
  updateMe(data) {
    return apiClient.patch("/me", data);
  },
  updatePassword(oldPassword, newPassword) {
    return apiClient.patch("/newPassword", {
      oldPassword,
      newPassword,
    });
  },
};
