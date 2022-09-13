const appSettingsReducer = (state, action) => {
  switch (action.type) {
    case "setDarkTheme":
      return { ...state, theme: "gray" };
    case "setLightTheme":
      return { ...state, theme: "white" };

    case "setDeutsch":
      return { ...state, language: "German" };
    case "setEnglish":
      return { ...state, language: "English" };

    default:
      return new Error("Unknown action type.");
  }
};

export default appSettingsReducer;
