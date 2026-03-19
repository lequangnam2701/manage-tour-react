import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      dashboard: "Dashboard",
      logout: "Logout",
      profile: "Profile",
      inbox: "Inbox",
      tasks: "Tasks",
      search: "Search...",
    },
  },
  vi: {
    translation: {
      dashboard: "Bảng điều khiển",
      logout: "Đăng xuất",
      profile: "Hồ sơ",
      inbox: "Hộp thư",
      tasks: "Công việc",
      search: "Tìm kiếm...",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lang") || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
