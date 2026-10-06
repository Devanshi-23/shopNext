import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Svg, {Path,Circle,Rect} from 'react-native-svg';
const products = [
  {
    id: 'PRD-001',
    name: 'Smart Hub Pro',
    price: '$299.00',
    description:
      'Centralized control for all your smart home devices with advanced automation features.',
    image:
      'https://images.unsplash.com/photo-1558008258-3256797b43f3?w=800',
  },
  {
    id: 'PRD-002',
    name: 'Aura Headphones',
    price: '$349.50',
    description:
      'Industry-leading noise cancellation and high-fidelity audio for immersive listening.',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
  },
];

const HomeScreen = ({navigation}: any) => {
  // ---------------- PRODUCT CARD ----------------
  const renderProduct = ({item}: any) => {
    return (
      <View style={styles.productCard}>
        {/* Product Image */}
        <View style={styles.imageContainer}>
          <Image
            source={{uri: item.image}}
            style={styles.productImage}
            resizeMode="cover"
          />

          <View style={styles.productId}>
            <Text style={styles.productIdText}>ID: {item.id}</Text>
          </View>
        </View>

        {/* Product Information */}
        <View style={styles.productInfo}>
          <View style={styles.productTitleRow}>
            <Text style={styles.productName}>{item.name}</Text>

            <Text style={styles.productPrice}>{item.price}</Text>
          </View>

          <Text style={styles.productDescription}>
            {item.description}
          </Text>

          {/* Actions */}
          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.actionButton}>
              <Svg width={18} height={18} viewBox="0 0 24 24">
  <Path
    d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z"
    fill="none"
    stroke="#555555"
    strokeWidth="1.6"
  />
  <Circle
    cx="12"
    cy="12"
    r="2.5"
    fill="none"
    stroke="#555555"
    strokeWidth="1.6"
  />
</Svg>
              <Text style={styles.actionText}>View</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
              <Svg width={18} height={18} viewBox="0 0 24 24">
  <Path
    d="M4 20h4L19 9a2 2 0 0 0-4-4L4 16v4z"
    fill="none"
    stroke="#555555"
    strokeWidth="1.7"
    strokeLinejoin="round"
  />
  <Path
    d="M13.5 6.5l4 4"
    stroke="#555555"
    strokeWidth="1.7"
  />
</Svg>
              <Text style={styles.actionText}>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
              <Svg width={18} height={18} viewBox="0 0 24 24">
  <Path
    d="M5 7h14M10 11v6M14 11v6M9 7V4h6v3M7 7l1 13h8l1-13"
    fill="none"
    stroke="#C47B7B"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</Svg>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  // ---------------- HEADER ----------------
  const renderHeader = () => {
    return (
      <>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.brandContainer}>
            <View style={styles.logo}>
              <Text style={styles.logoText}>S</Text>
            </View>

            <Text style={styles.brandName}>ShopFlow</Text>
          </View>

          <TouchableOpacity style={styles.notificationButton}>
            <Svg width={27} height={27} viewBox="0 0 24 24">
    <Path
      d="M18 8C18 5.79 16.21 4 14 4C11.79 4 10 5.79 10 8C10 13 7 15 7 17H21C21 15 18 13 18 8Z"
      fill="none"
      stroke="#111827"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13 20C13.55 20.61 14.45 20.61 15 20"
      fill="none"
      stroke="#111827"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </Svg>
            <View style={styles.notificationDot} />
          </TouchableOpacity>
        </View>

        {/* Greeting */}
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>Hello, User</Text>

          <Text style={styles.greetingSubtitle}>
            Here's a quick overview of your products today.
          </Text>
        </View>

        {/* Main Stats Card */}
        <View style={styles.mainStatCard}>
          <View style={styles.statTopRow}>
            <View style={styles.statIconContainer}>
              <Svg width={23} height={23} viewBox="0 0 24 24">
  <Rect
    x="5"
    y="5"
    width="14"
    height="14"
    rx="2"
    fill="none"
    stroke="#167D70"
    strokeWidth="1.8"
  />
  <Rect
    x="9"
    y="9"
    width="6"
    height="6"
    fill="none"
    stroke="#167D70"
    strokeWidth="1.8"
  />
</Svg>
            </View>

            <View style={styles.totalBadge}>
              <Text style={styles.totalBadgeText}>TOTAL</Text>
            </View>
          </View>

          <Text style={styles.mainNumber}>128</Text>

          <Text style={styles.mainLabel}>Products Managed</Text>
        </View>

        {/* Small Stats */}
        <View style={styles.smallStatsRow}>
          {/* Added Today */}
          <View style={styles.smallStatCard}>
            <View style={styles.smallIcon}>
              <Svg width={22} height={22} viewBox="0 0 24 24">
  <Path
    d="M12 5v14M5 12h14"
    stroke="#6070A5"
    strokeWidth="2"
    strokeLinecap="round"
  />
</Svg>
            </View>

            <Text style={styles.smallNumber}>+5</Text>

            <Text style={styles.smallLabel}>Added Today</Text>
          </View>

          {/* Total Value */}
          <View style={styles.smallStatCard}>
            <View style={styles.smallIcon}>
              <Svg width={24} height={24} viewBox="0 0 24 24">
  <Rect
    x="3"
    y="6"
    width="18"
    height="12"
    rx="2"
    fill="none"
    stroke="#167D70"
    strokeWidth="1.8"
  />
  <Circle
    cx="12"
    cy="12"
    r="3"
    fill="none"
    stroke="#167D70"
    strokeWidth="1.6"
  />
  <Path
    d="M6 9h1M17 15h1"
    stroke="#167D70"
    strokeWidth="1.5"
    strokeLinecap="round"
  />
</Svg>
            </View>

            <Text style={styles.smallNumber}>$45.2k</Text>

            <Text style={styles.smallLabel}>Total Value</Text>
          </View>
        </View>

        {/* My Products */}
        <View style={styles.productsHeader}>
          <Text style={styles.sectionTitle}>My Products</Text>

          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* ONE FLATLIST - EVERYTHING SCROLLS TOGETHER */}
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={renderProduct}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      />

      {/* Floating Add Button */}
      <TouchableOpacity
        style={styles.floatingButton}
        activeOpacity={0.8}
        onPress={() => navigation?.navigate('Products')}>
        <Text style={styles.floatingPlus}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  scrollContent: {
    paddingBottom: 10,
  },

  // ---------------- HEADER ----------------

  header: {
    height: 70,
    paddingHorizontal: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F1F1',
    backgroundColor: '#FFFFFF',
  },

  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logo: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#111827',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  logoText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
  },

  brandName: {
    fontSize: 21,
    fontWeight: '800',
    color: '#111827',
  },

  notificationButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

 

  notificationDot: {
    position: 'absolute',
    right: 8,
    top: 7,
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#5B8DEF',
  },

  emoji: {
    fontSize: 20,
  },

  // ---------------- GREETING ----------------

  greetingContainer: {
    paddingHorizontal: 22,
    paddingTop: 28,
    paddingBottom: 20,
  },

  greeting: {
    fontSize: 29,
    fontWeight: '800',
    color: '#171717',
    marginBottom: 8,
  },

  greetingSubtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: '#777777',
    maxWidth: 330,
  },

  // ---------------- MAIN STAT ----------------

  mainStatCard: {
    marginHorizontal: 20,
    backgroundColor: '#F9FAFB',
    borderRadius: 20,
    padding: 20,
    minHeight: 145,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },

  statTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  statIconContainer: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: '#B8EDE2',
    justifyContent: 'center',
    alignItems: 'center',
  },

  statIcon: {
    fontSize: 22,
    color: '#167D70',
  },

  totalBadge: {
    backgroundColor: '#B8EDE2',
    paddingHorizontal: 13,
    paddingVertical: 6,
    borderRadius: 15,
  },

  totalBadgeText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#167D70',
  },

  mainNumber: {
    fontSize: 30,
    fontWeight: '800',
    color: '#171717',
    marginTop: 8,
  },

  mainLabel: {
    fontSize: 14,
    color: '#777777',
    marginTop: 2,
  },

  // ---------------- SMALL STATS ----------------

  smallStatsRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 14,
    gap: 12,
  },

  smallStatCard: {
    flex: 1,
    padding: 15,
    minHeight: 120,
    backgroundColor: '#FAFAFA',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },

  smallIcon: {
    width: 38,
    height: 38,
    borderRadius: 20,
    backgroundColor: '#DFF4F0',
    justifyContent: 'center',
    alignItems: 'center',
  },

  plusIcon: {
    fontSize: 25,
    fontWeight: '500',
    color: '#6070A5',
  },

  smallNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222222',
    marginTop: 9,
  },

  smallLabel: {
    fontSize: 12,
    color: '#8A8A8A',
    marginTop: 3,
  },

  // ---------------- PRODUCTS ----------------

  productsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    marginTop: 28,
    marginBottom: 14,
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: '800',
    color: '#202020',
  },

  seeAll: {
    fontSize: 14,
    fontWeight: '600',
    color: '#5578D6',
  },

  // ---------------- PRODUCT CARD ----------------

  productCard: {
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },

  imageContainer: {
    height: 205,
    backgroundColor: '#F4F4F4',
    position: 'relative',
  },

  productImage: {
    width: '100%',
    height: '100%',
  },

  productId: {
    position: 'absolute',
    right: 12,
    top: 12,
    backgroundColor: 'rgba(255,255,255,0.92)',
    paddingHorizontal: 11,
    paddingVertical: 7,
    borderRadius: 14,
  },

  productIdText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#555555',
  },

  productInfo: {
    padding: 17,
  },

  productTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },

  productName: {
    flex: 1,
    fontSize: 20,
    fontWeight: '800',
    color: '#202020',
  },

  productPrice: {
    fontSize: 17,
    fontWeight: '700',
    color: '#333333',
  },

  productDescription: {
    fontSize: 14,
    lineHeight: 21,
    color: '#777777',
    marginTop: 8,
  },

  // ---------------- ACTIONS ----------------

  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: '#F1F1F1',
  },

  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },

  actionIcon: {
    fontSize: 15,
    color: '#555555',
    marginRight: 6,
  },

  actionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#555555',
  },

  deleteIcon: {
    fontSize: 15,
    color: '#C47B7B',
    marginRight: 6,
  },

  deleteText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#C47B7B',
  },

  // ---------------- FLOATING BUTTON ----------------

  floatingButton: {
    position: 'absolute',
    right: 22,
    bottom: 78,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4267B2',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 7,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  floatingPlus: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: '300',
    lineHeight: 38,
  },
});

export default HomeScreen;