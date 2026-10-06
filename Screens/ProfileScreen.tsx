import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Svg, {Path, Circle, Rect} from 'react-native-svg';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>

        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image
              source={{
                uri: 'https://randomuser.me/api/portraits/women/44.jpg',
              }}
              style={styles.headerProfile}
            />

            <Text style={styles.brandName}>ShopFlow</Text>
          </View>

          {/* Notification Bell */}
          <TouchableOpacity style={styles.bellButton}>
            <Svg width={22} height={22} viewBox="0 0 24 24">
              <Path
                d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"
                fill="none"
                stroke="#333333"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M10 21h4"
                fill="none"
                stroke="#333333"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </Svg>
          </TouchableOpacity>
        </View>

        {/* PROFILE CARD */}
        <View style={styles.profileCard}>
          <View style={styles.profileImageWrapper}>
            <Image
              source={{
                uri: 'https://randomuser.me/api/portraits/men/32.jpg',
              }}
              style={styles.profileImage}
            />
          </View>

          <Text style={styles.userName}>Alex Johnson</Text>

          <Text style={styles.email}>alex@example.com</Text>
        </View>

        {/* MENU OPTIONS */}

        {/* EDIT PROFILE */}
        <TouchableOpacity style={styles.menuCard}>
          <View style={styles.menuIcon}>
            <Svg width={21} height={21} viewBox="0 0 24 24">
              <Circle
                cx="12"
                cy="8"
                r="3.2"
                fill="none"
                stroke="#5879A8"
                strokeWidth="1.8"
              />
              <Path
                d="M5.5 19c.7-3.2 2.9-5 6.5-5s5.8 1.8 6.5 5"
                fill="none"
                stroke="#5879A8"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </Svg>
          </View>

          <Text style={styles.menuText}>Edit Profile</Text>

          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        {/* APP SETTINGS */}
        <TouchableOpacity style={styles.menuCard}>
          <View style={styles.menuIcon}>
            <Svg width={21} height={21} viewBox="0 0 24 24">
              <Circle
                cx="12"
                cy="12"
                r="3"
                fill="none"
                stroke="#5879A8"
                strokeWidth="1.8"
              />

              <Path
                d="M19 12a7 7 0 0 0-.1-1.2l2-1.5-2-3.4-2.3.9a7 7 0 0 0-2-1.2L14.3 3h-4.6l-.3 2.6a7 7 0 0 0-2 1.2l-2.3-.9-2 3.4 2 1.5A7 7 0 0 0 5 12c0 .4 0 .8.1 1.2l-2 1.5 2 3.4 2.3-.9a7 7 0 0 0 2 1.2l.3 2.6h4.6l.3-2.6a7 7 0 0 0 2-1.2l2.3.9 2-3.4-2-1.5c.1-.4.1-.8.1-1.2z"
                fill="none"
                stroke="#5879A8"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
            </Svg>
          </View>

          <Text style={styles.menuText}>App Settings</Text>

          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        {/* HELP & SUPPORT */}
        <TouchableOpacity style={styles.menuCard}>
          <View style={styles.menuIcon}>
            <Text style={styles.questionMark}>?</Text>
          </View>

          <Text style={styles.menuText}>Help & Support</Text>

          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        {/* LOGOUT */}
        <TouchableOpacity style={styles.menuCard}>
          <View style={styles.menuIcon}>
            <Svg width={21} height={21} viewBox="0 0 24 24">
              <Path
                d="M10 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5"
                fill="none"
                stroke="#5879A8"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <Path
                d="M13 8l4 4-4 4M9 12h8"
                fill="none"
                stroke="#5879A8"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </View>

          <Text style={styles.menuText}>Logout</Text>

          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },

  scrollContent: {
    paddingBottom: 30,
  },

  // HEADER
  header: {
    height: 65,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerProfile: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },

  brandName: {
    fontSize: 17,
    fontWeight: '800',
    color: '#11183D',
  },

  bellButton: {
    width: 38,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // PROFILE CARD
  profileCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: 18,
    borderRadius: 9,
    height: 235,
    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: '#E4E6EA',
  },

  profileImageWrapper: {
    width: 82,
    height: 82,
    borderRadius: 41,
    borderWidth: 3,
    borderColor: '#E7EBEE',
    padding: 3,
    marginBottom: 14,
  },

  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 38,
  },

  userName: {
    fontSize: 24,
    fontWeight: '800',
    color: '#05052F',
    marginBottom: 5,
  },

  email: {
    fontSize: 13,
    color: '#333333',
  },

  // MENU
  menuCard: {
    height: 64,
    marginHorizontal: 20,
    marginTop: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 7,

    borderWidth: 1,
    borderColor: '#E3E5E8',

    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
  },

  menuIcon: {
    width: 38,
    height: 38,
    borderRadius: 20,
    backgroundColor: '#DCE9FC',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  questionMark: {
    fontSize: 17,
    fontWeight: '700',
    color: '#5879A8',
  },

  menuText: {
    flex: 1,
    fontSize: 14,
    color: '#111111',
    fontWeight: '500',
  },

  arrow: {
    fontSize: 29,
    color: '#B7C0CE',
    fontWeight: '300',
    marginTop: -3,
  },
});

export default ProfileScreen;