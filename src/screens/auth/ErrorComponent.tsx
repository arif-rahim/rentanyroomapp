import React from 'react';
import { Text, View, Linking,color } from 'react-native';
import HTML from 'react-native-render-html';

const ErrorComponent = ({ response }) => {
  const { token } = response;
  let keyCounter = 0;

  const handlePasswordReset = () => {
    Linking.openURL('https://staging.webpenter.com/wp-login.php?action=lostpassword');
  };

  const generateUniqueKey = () => {
    keyCounter += 1;
    return `key-${keyCounter}`;
  };

  const renderers = {
    strong: (htmlAttribs, children, convertedCSSStyles, passProps) => (
      <Text style={{ fontWeight: 'bold'}} key={generateUniqueKey()}>
        {children[0]}
      </Text>
    ),
    a: (htmlAttribs, children, convertedCSSStyles, passProps) => (
      <Text
        style={{ color: 'blue', textDecorationLine: 'underline' }}
        key={generateUniqueKey()}
        onPress={handlePasswordReset}
      >
        {children[0]}
      </Text>
    ),
  };

  return (
    <View style={{ color: 'red' }}>
      <HTML source={{ html: token?token[0]:'' }} renderers={renderers} />
    </View>
  );
};

export default ErrorComponent;
