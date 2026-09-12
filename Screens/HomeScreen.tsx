import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

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
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>

        {/* Header */}
        <View style={styles.header}>
          <View style={styles.brandContainer}>
            <View style={styles.logo}>
              <Text style={styles.logoText}>S</Text>
            </View>

            <Text style={styles.brandName}>ShopFlow</Text>
          </View>

          <TouchableOpacity style={styles.notificationButton}>
            <Text style={styles.notificationIcon}>🔔</Text>
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
              <Text style={styles.statIcon}>▣</Text>
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
              <Text style={styles.plusIcon}>+</Text>
            </View>

            <Text style={styles.smallNumber}>+5</Text>
            <Text style={styles.smallLabel}>Added Today</Text>
          </View>

          {/* Total Value */}
          <View style={styles.smallStatCard}>
            <View style={styles.smallIcon}>
              <Text style={styles.emoji}>💵</Text>
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

        {/* Product Cards */}
        {products.map(product => (
          <View style={styles.productCard} key={product.id}>

            {/* Product Image */}
            <View style={styles.imageContainer}>
              <Image
                source={{uri: product.image}}
                style={styles.productImage}
                resizeMode="cover"
              />

              <View style={styles.productId}>
                <Text style={styles.productIdText}>
                  ID: {product.id}
                </Text>
              </View>
            </View>

            {/* Product Information */}
            <View style={styles.productInfo}>

              <View style={styles.productTitleRow}>
                <Text style={styles.productName}>
                  {product.name}
                </Text>

                <Text style={styles.productPrice}>
                  {product.price}
                </Text>
              </View>

              <Text style={styles.productDescription}>
                {product.description}
              </Text>

              {/* Actions */}
              <View style={styles.actionRow}>

                <TouchableOpacity style={styles.actionButton}>
                  <Text style={styles.actionIcon}>👁️‍🗨️</Text>
                  <Text style={styles.actionText}>View</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton}>
                  <Text style={styles.actionIcon}>✎</Text>
                  <Text style={styles.actionText}>Edit</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton}>
                  <Text style={styles.deleteIcon}>▢</Text>
                  <Text style={styles.deleteText}>Delete</Text>
                </TouchableOpacity>

              </View>
            </View>
          </View>
        ))}

        {/* Bottom spacing for floating button */}
        <View style={{height: 100}} />

      </ScrollView>

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
    paddingBottom: 30,
  },

  // Header
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

  notificationIcon: {
    fontSize: 27,
    color: '#111827',
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

  // Greeting
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

  // Main Stat
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

  // Small stats
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

  moneyIcon: {
    fontSize: 19,
    fontWeight: '800',
    color: '#168477',
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

  // Products
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

  // Product Card
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

  // Actions
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

  // Floating Button
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