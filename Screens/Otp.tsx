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

import {verifyOTP, sendOTP, showToast} from '../api/backend';

const Otp = ({navigation, route}: any) => {
  const email = route?.params?.email || '';
  const [otp, setOtp] = useState('');
  const [errors, setErrors] = useState<{otp?: string}>({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors: {otp?: string} = {};
    if (!otp.trim()) {
      newErrors.otp = 'Code is required';
    } else if (otp.trim().length < 4) {
      newErrors.otp = 'Enter 4-digit code';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOtpChange = (text: string) => {
    setOtp(text);
    if (errors.otp) {
      setErrors(prev => ({...prev, otp: undefined}));
    }
  };

  const handleVerify = async () => {
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      const res = await verifyOTP({email: email.trim(), otp: otp.trim()});
      showToast(res.message || 'OTP verified successfully');
      navigation.navigate('MainTabs');
    } catch (error: any) {
      const msg = error?.response?.data?.message || 'Invalid or expired OTP';
      showToast(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!email.trim()) {
      showToast('Email address is missing');
      return;
    }

    try {
      const res = await sendOTP({email: email.trim()});
      showToast(res.message || 'New OTP sent to your email');
    } catch (error: any) {
      const msg = error?.response?.data?.message || 'Failed to resend OTP';
      showToast(msg);
    }
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
              <View style={styles.topBarSpacer} />
            </View>

            <Text style={styles.title}>OTP Verification</Text>
            <Text style={styles.subTitle}>
              Enter the 4-digit verification code sent to{' '}
              <Text style={styles.boldEmail}>{email || 'your email'}</Text>
            </Text>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>ENTER VERIFICATION CODE</Text>
              <View style={styles.inputBox}>
                <TextInput
                  placeholder="• • • •"
                  placeholderTextColor="#9CA3AF"
                  style={styles.otpInput}
                  value={otp}
                  onChangeText={handleOtpChange}
                  keyboardType="number-pad"
                  maxLength={4}
                  autoFocus
                />
              </View>
              {errors.otp ? (
                <Text style={styles.errorTextDownRight}>{errors.otp}</Text>
              ) : null}
            </View>

            <TouchableOpacity
              style={[styles.button, loading && styles.buttonDisabled]}
              activeOpacity={0.88}
              disabled={loading}
              onPress={handleVerify}>
              {loading ? (
                <ActivityIndicator color="#FFFFFF" size="small" />
              ) : (
                <View style={styles.buttonContent}>
                  <Text style={styles.buttonText}>Verify & Proceed</Text>
                  <Text style={styles.buttonArrow}>→</Text>
                </View>
              )}
            </TouchableOpacity>

            <View style={styles.footerContainer}>
              <Text style={styles.footerText}>Didn't receive the code? </Text>
              <TouchableOpacity
                onPress={handleResend}
                activeOpacity={0.7}>
                <Text style={styles.resendText}>Resend</Text>
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
    lineHeight: 19,
  },
  boldEmail: {
    fontWeight: '600',
    color: '#111827',
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
    width: '100%',
    height: 52,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    paddingHorizontal: 12,
    justifyContent: 'center',
  },
  otpInput: {
    height: '100%',
    fontSize: 20,
    letterSpacing: 10,
    color: '#111827',
    textAlign: 'left',
    fontWeight: '700',
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
  resendText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#4F46E5',
  },
  topBarSpacer: {
    width: 32,
  },
});

export default Otp;
