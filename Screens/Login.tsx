import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={{fontSize: 40}}>←</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Welcome Back</Text>

        <Text style={styles.subTitle}>
          Login to manage your products
        </Text>

        <Text style={styles.label}>EMAIL ADDRESS</Text>

        <TextInput
          placeholder="name@company.com                 "
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>PASSWORD</Text>

        <TextInput
          placeholder="••••••••                                               "
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Text style={styles.forgotPassword}>Forgot your password?</Text>


        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>                           LOGIN                     </Text>
        </TouchableOpacity>
       <View style={{flexDirection: 'row', justifyContent: 'center'}}>
  <Text style={styles.subTitle}>Don't have an account? </Text>

  <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
    <Text style={[styles.subTitle, {color: 'blue'}]}>
      Sign Up
    </Text>
  </TouchableOpacity>
</View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  card: {
    backgroundColor: 'white',
    width: '100%',
    padding: 25,
    borderRadius: 10,

    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 10,
  },

  subTitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 25,
  },

  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 7,
  },

  forgotPassword: {
    fontSize: 14,
    color: 'blue',
    textAlign: 'right',
    marginBottom: 20,


  },

  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 14,
    height: 50,
    marginBottom: 20,
    width: '90%',
    fontSize: 16,
    textAlign: 'center',
  },

  button: {
    backgroundColor: 'blue',
    width: '100%',
    height: 65,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    textAlign: 'center',
    padding: 10,
    marginBottom: 20,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default Login;