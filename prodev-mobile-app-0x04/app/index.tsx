import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useRouter } from "expo-router"; // ✅ Import useRouter for navigation

export default function Index() {
  const router = useRouter(); // ✅ Initialize router

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={require("../assets/images/background-image.png")}
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.container}>
            {/* Logo Section */}
            <View style={styles.companyLogo}>
              <Image
                source={require("../assets/images/Logo.png")}
                style={styles.logo}
              />
            </View>

            {/* Text Section */}
            <View style={styles.textGroup}>
              <Text style={styles.textLarge}>
                Find your favorite place here
              </Text>
              <Text style={styles.textSmall}>
                The best prices for over 2 million properties worldwide
              </Text>
            </View>

            {/* Buttons Section */}
            <View style={styles.bottomContainer}>
              <View style={styles.buttonGroup}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => router.push("/join")} // ✅ Navigate to Join screen
                >
                  <Text style={styles.buttonText}>Join here</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.transparentButton}
                  onPress={() => router.push("/signin")} // ✅ Navigate to Sign In screen
                >
                  <Text style={styles.textSmall}>Sign In</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.continueTextContainer}>
                <Text style={styles.continueText}>Continue to home</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

// Styles
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  companyLogo: {
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  textGroup: {
    alignItems: "center",
    marginBottom: 30,
  },
  textLarge: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  textSmall: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    alignItems: "center",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 10,
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 5,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  transparentButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "white",
    marginHorizontal: 5,
    alignItems: "center",
  },
  continueTextContainer: {
    marginTop: 10,
  },
  continueText: {
    color: "white",
    fontSize: 16,
  },
});
