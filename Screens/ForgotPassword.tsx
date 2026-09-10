import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  Alert,
} from 'react-native';

const ForgotPassword = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<{email?: string}>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors: {email?: string} = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
    if (errors.email) {
      setErrors(prev => ({...prev, email: undefined}));
    }
  };

  const handleResetPassword = () => {
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert(
        'Code Sent',
        'A password reset verification code has been sent to your email.',
        [
          {
            text: 'Continue to OTP',
            onPress: () => {
              if (navigation?.navigate) {
                navigation.navigate('Otp', {email});
              }
            },
          },
        ],
      );
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          <View style={styles.card}>
            {/* Top Bar */}
            <View style={styles.topBar}>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
                activeOpacity={0.7}
                hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
                <Text style={styles.backButtonIcon}>←</Text>
              </TouchableOpacity>
              <View style={styles.brandRow}>
                <View style={styles.logoBadge}>
                  <Text style={styles.logoBadgeIcon}>⚡</Text>
                </View>
                <Text style={styles.brandName}>ShopNest</Text>
              </View>
              <View style={{width: 32}} />
            </View>

            {/* Title & Subtitle */}
            <Text style={styles.title}>Forgot Password</Text>
            <Text style={styles.subTitle}>
              Enter your email address to receive a verification code.
            </Text>

            {/* Email Field */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>EMAIL ADDRESS</Text>
              <View style={styles.inputBox}>
                <Text style={styles.inputIcon}>✉</Text>
                <TextInput
                  placeholder="name@company.com"
                  placeholderTextColor="#9CA3AF"
                  style={styles.textInput}
                  value={email}
                  onChangeText={handleEmailChange}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>
              {errors.email ? (
                <Text style={styles.errorTextDownRight}>{errors.email}</Text>
              ) : null}
            </View>

            {/* Send Reset Code Button */}
            <TouchableOpacity
              style={[styles.button, isLoading && styles.buttonDisabled]}
              activeOpacity={0.88}
              disabled={isLoading}
              onPress={handleResetPassword}>
              {isLoading ? (
                <ActivityIndicator color="#FFFFFF" size="small" />
              ) : (
                <View style={styles.buttonContent}>
                  <Text style={styles.buttonText}>Send Reset Code</Text>
                  <Text style={styles.buttonArrow}>→</Text>
                </View>
              )}
            </TouchableOpacity>

            {/* Footer Back to Login Link */}
            <View style={styles.footerContainer}>
              <Text style={styles.footerText}>Remember password? </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                activeOpacity={0.7}>
                <Text style={styles.loginText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  keyboardView: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  card: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 32,
    borderRadius: 16,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonIcon: {
    fontSize: 22,
    color: '#374151',
    fontWeight: '600',
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoBadge: {
    width: 24,
    height: 24,
    borderRadius: 6,
    backgroundColor: '#1E1B4B',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  logoBadgeIcon: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  brandName: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111827',
    letterSpacing: -0.3,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 6,
    letterSpacing: -0.4,
  },
  subTitle: {
    fontSize: 13,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 24,
  },
  inputGroup: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    fontSize: 11,
    fontWeight: '700',
    color: '#374151',
    letterSpacing: 0.6,
    marginBottom: 6,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 48,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  inputIcon: {
    fontSize: 16,
    color: '#9CA3AF',
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    height: '100%',
    fontSize: 14,
    color: '#111827',
    padding: 0,
  },
  errorTextDownRight: {
    color: '#EF4444',
    fontSize: 11,
    fontWeight: '600',
    marginTop: 4,
    textAlign: 'right',
    alignSelf: 'flex-end',
  },
  button: {
    backgroundColor: '#1E1B4B',
    width: '100%',
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 24,
    shadowColor: '#1E1B4B',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 15,
    marginRight: 6,
  },
  buttonArrow: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 13,
    color: '#6B7280',
  },
  loginText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#4F46E5',
  },
});

export default ForgotPassword;
