import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={{fontSize: 40}}>←</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Create Account</Text>

        <Text style={styles.subTitle}>
          Create your account to manage your products
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

        <Text style={styles.label}>CONFIRM PASSWORD</Text>

        <TextInput
          placeholder="••••••••                                              "
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>            CREATE ACCOUNT                     </Text>
        </TouchableOpacity>
             <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={styles.subTitle}>Don't have an account? </Text>
      {/* navigation  */}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={[styles.subTitle, {color: 'blue'}]}>
          Login
          </Text>
        </TouchableOpacity>
{/* navigation */}
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

  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
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

export default SignUp;