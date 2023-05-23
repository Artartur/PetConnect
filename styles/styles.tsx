import { StyleSheet } from "react-native";

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
})

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

export const stylesLogin = StyleSheet.create({

  imageContainer: {},

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
})

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

export const stylesRegister = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    width: "100%"
  },
  image:{
    width: 250,
    height: 250,
  }
});
