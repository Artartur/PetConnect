import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});

export const stylesButton = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    backgroundColor: "#AB8262",
    borderRadius: 10,
    height: 60,
    justifyContent: "center",
    marginTop: "5%",
    width: "80%",
  },

  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export const stylesCard = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#AB8262",
    borderRadius: 10,
    flexDirection: "column",
    height: 120,
    justifyContent: "center",
    marginVertical: "10%",
    width: "60%",
  },
  view: { alignItems: "center", flexDirection: "column", textAlign: "center" },
});

export const stylesCheckbox = StyleSheet.create({
  checkbox: {
    borderColor: "gray",
    borderRadius: 4,
    borderWidth: 2,
    height: 24,
    marginHorizontal: 5,
    width: 24,
  },

  checkBoxContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
});

export const stylesHeader = StyleSheet.create({
  header: {
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    flexDirection: "row",
    height: 60,
    position: "absolute",
    justifyContent: "center",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },

  navigator: {
    position: "absolute",
    left: 16,
  },

  text: {
    textAlign: "center",
    fontSize: 18,
  },
});

export const stylesInput = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
    marginVertical: "4%",
    marginLeft: "5%",
  },

  icon: {
    marginHorizontal: 2,
  },

  textInput: {
    backgroundColor: "#C4C4C433",
    borderRadius: 10,
    fontSize: 16,
    height: 60,
    paddingHorizontal: 12,
    width: "80%",
  },
});

export const stylesLogin = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
  },

  managerAccessContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: "5%",
    width: "100%",
  },

  markup: {
    color: "#E88181",
  },

  text: {
    fontSize: 18,
  },
});

export const stylesMainScreen = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight || 0,
    textAlign: "center",
    width: "100%",
  },
  icon: {
    marginBottom: 10,
  },
  navigator: {
    width: "90%",
  },
});

export const stylesModal = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    flex: 1,
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    height: "60%",
    width: "80%",
  },
  childrenContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "80%",
    width: "80%",
  },
});

export const stylesRegister = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight || 0,
    width: "100%",
  },
  image: {
    width: 250,
    height: 250,
  },
  checkbox: {
    justifyContent: "flex-start",
    width: "80%",
  },
});

export const stylesReport = StyleSheet.create({
  buttons: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },

  container: {
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight || 0,
    width: "100%",
  },

  form: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});

export const stylesReportConfirm = StyleSheet.create({
  container:{
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight || 0,
    width: "100%",
  },
  content:{
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    flex: 1,
    width: "100%",
    backgroundColor: "blue",
  },
  contentDatas:{
      justifyContent: "space-evenly",
      flexDirection: "row",
  }
});

export const stylesSelect = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: "4%",
    width: "100%",
  },
  picker: {
    backgroundColor: "#C4C4C433",
    marginRight: "3%",
    borderRadius: 12,
    fontSize: 16,
    height: 60,
    width: "79%",
  },
});
