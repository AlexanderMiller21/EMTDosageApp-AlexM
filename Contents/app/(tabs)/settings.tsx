import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router } from "expo-router";
import { useState } from 'react'; // added for useState
import { Image, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

export default function SettingsScreen() {
    const [isToggled, setIsToggled] = useState(false);

    const toggleFeature = (featureName: string, isEnabled: boolean) => {
        // console.log("toggleFeature called with", featureName, isEnabled);
        switch (featureName) {
            case "EmployeeType":
                if (isEnabled) {
                    console.log("Paramedic Mode Active");
                    // Activate Paramedic Mode
                    setIsToggled(true);
                } else {
                    console.log("EMT Mode Active");
                    // Activate EMT Mode
                    setIsToggled(false);
                }
                break;

            default:
                console.log("Unknown feature");
        }
    };

    // Running Code
    return (
        <ParallaxScrollView
          headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
          headerImage={
            <Image
              source={require('@/assets/images/Gear-Background.png')}
              style={styles.settingsLogo}
            />
          }>
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">Settings</ThemedText>
          </ThemedView>
          <ThemedView style={styles.stepContainer}>
            <ThemedText type="subtitle">Account</ThemedText>
            <TouchableOpacity 
              style={[styles.signupButton, { backgroundColor: "#007AFF" }]}
              onPress={() => router.push("/register")}
            >
              <Text style={styles.signupButtonText}>Create Account</Text>
            </TouchableOpacity>
          </ThemedView>
          <ThemedView style={styles.stepContainer}>
            <ThemedText type="subtitle">Change Mode</ThemedText>
          </ThemedView>
          <View style={styles.switchStyle}>
            <Text>{isToggled ? 'Paramedic' : 'EMT'}</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isToggled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={setIsToggled}
              value={isToggled}
            />
          </View>

        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  settingsLogo: {
    height: 256,
    width: 417,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  switchStyle: {
      alignItems: 'flex-start',
      paddingLeft: 0
  },
  signupButton: {
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
  },
  signupButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});


