import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Portal, Dialog, Paragraph, Button, Provider } from 'react-native-paper';

const SuccessPopup = () => {
  const [visible, setVisible] = useState(false);

  const handleShowDialog = () => {
    setVisible(true);
  };

  const handleHideDialog = () => {
    setVisible(false);
  };

  return (
    <Provider>
      <View style={styles.container}>
        <Button mode="contained" onPress={handleShowDialog}>
          Show Success Popup
        </Button>
        <Portal>
          <Dialog visible={visible} onDismiss={handleHideDialog}>
            <Dialog.Title>Success</Dialog.Title>
            <Dialog.Content>
              <Paragraph>Your operation was successful.</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={handleHideDialog}>OK</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default SuccessPopup;
