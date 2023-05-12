import * as React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Button } from 'react-native';
import ReactNativeDMBiometrics from 'react-native-dm-biometrics';
const rnBiometrics = new ReactNativeDMBiometrics({
  allowDeviceCredentials: true,
});

export default function App() {
  const openToggleTouch = async () => {
    try {
      const { biometryType, available } =
        await rnBiometrics.isSensorAvailable();
      console.log('biometryType', biometryType, available);

      // supported android 10 => Platform.Version === 29
      if (available && biometryType) {
        rnBiometrics
          .simplePrompt({
            promptMessage: 'Authentication Required',
            cancelButtonText: 'Cancel',
          })
          .then((res) => {
            console.log(res);
          });
      }
    } catch (error) {
      console.log('openToggleTouch -> error ', error);
    }
  };
  return (
    <View style={styles.container}>
      <Button title="Button" onPress={() => openToggleTouch()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
