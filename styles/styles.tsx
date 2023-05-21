import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});

export const stylesLogin = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    backgroundColor: "#AB8262",
    borderRadius: 10,
    height: 60,
    justifyContent: "center",
    marginBottom: "5%",
    width: "80%",
  },

  buttonText: {
    color: "white",
    fontSize: 18,
  },

  checkbox: {
    borderColor: "gray",
    borderRadius: 3,
    borderWidth: 1,
    height: 24,
    marginBottom: "10%",
    marginHorizontal: 5,
    width: 24,
  },

  checkBoxContainer: {
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "row",
    width: "50%",
    marginHorizontal: "2%",
  },

  forgotPasswordContainer: {
    width: "50%",
  },

  imageContainer: {
    marginRight: "5%",
  },

  managerAccessContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginLeft: "5%",
  },

  markup: {
    color: "#E88181",
  },

  text: {
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
