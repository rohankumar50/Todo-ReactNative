import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
// @ts-ignore
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const Login = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submit = () => {
    if (email === 'test@123' && password === 'test') {
      // Alert.alert('login successful');
      navigation.navigate('home');
    } else {
      Alert.alert('Kindly enter correct email and password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Welcome Back</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputTextFields}
          placeholder="Email"
          autoCorrect={false}
          autoCapitalize="none"
          value={email}
          onChangeText={value => setEmail(value)}></TextInput>

        <TextInput
          style={styles.inputTextFields}
          placeholder="Password"
          autoCorrect={false}
          autoCapitalize="none"
          // @ts-ignore
          secureTextEntry="true"
          onChangeText={value => setPassword(value)}></TextInput>

        <BouncyCheckbox
          textComponent={
            <Text style={styles.term_and_c}>I have read all the T & C</Text>
          }
          fillColor="#FF5722"
          size={16}
          textStyle={{fontSize: 12, textDecorationLine: 'none'}}
          style={styles.term_and_c}
          isChecked={checked}
          onPress={() => {
            setChecked(!checked);
          }}
        />

        <TouchableOpacity
          style={[
            styles.loginButton,
            {backgroundColor: checked ? '#FF5722' : '#FFCCBC'},
          ]}
          onPress={() => submit()}
          disabled={!checked}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  loginText: {
    fontSize: 24,
    color: '#FF5722',
  },

  inputContainer: {
    // backgroundColor: '#90A4AE',
    width: '70%',
    marginTop: 30,
    display: 'flex',
  },

  inputTextFields: {
    backgroundColor: '#EEEEEE',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
    width: '100%',
  },

  term_and_c: {
    marginVertical: 5,
    marginLeft: 5,
    fontSize: 12,
  },

  forgotPasswordContainer: {
    display: 'flex',
    alignItems: 'center',
    marginVertical: 10,
  },

  loginButton: {
    backgroundColor: '#FF5722',
    padding: 10,
    borderRadius: 8,
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    marginTop: 40,
    width: '100%',
  },

  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  forgotPassword: {
    fontSize: 12,
    marginVertical: 5,
  },
});
