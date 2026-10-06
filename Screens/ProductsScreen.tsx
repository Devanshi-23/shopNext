import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';

import Svg, {Path, Circle} from 'react-native-svg';

const {width} = Dimensions.get('window');

const products = [
  {
    id: 'PRD-8924',
    name: 'Acoustic Pro',
    price: '$299.00',
    status: 'IN STOCK',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
  },
  {
    id: 'PRD-7712',
    name: 'ErgoType Keyboard',
    price: '$149.50',
    status: 'IN STOCK',
    image:
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500',
  },
  {
    id: 'PRD-4091',
    name: 'Chrono Smart Watch',
    price: '$199.99',
    status: 'DRAFT',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
  },
];

const ProductsScreen = () => {
  const renderProduct = ({item}: any) => {
    return (
      <TouchableOpacity style={styles.productCard} activeOpacity={0.8}>
        {/* IMAGE */}
        <View style={styles.imageContainer}>
          <Image
            source={{uri: item.image}}
            style={styles.productImage}
            resizeMode="cover"
          />
        </View>

        {/* DETAILS */}
        <View style={styles.productDetails}>
          <View style={styles.nameRow}>
            <Text style={styles.productName} numberOfLines={1}>
              {item.name}
            </Text>

            <View
              style={[
                styles.statusBadge,
                item.status === 'DRAFT' && styles.draftBadge,
              ]}>
              <Text
                style={[
                  styles.statusText,
                  item.status === 'DRAFT' && styles.draftText,
                ]}>
                {item.status}
              </Text>
            </View>
          </View>

          <Text style={styles.productId}>ID: {item.id}</Text>

          <Text style={styles.productPrice}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* ================= HEADER ================= */}

      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            source={{
              uri: 'https://randomuser.me/api/portraits/women/44.jpg',
            }}
            style={styles.headerAvatar}
          />

          <Text style={styles.shopName}>ShopFlow</Text>
        </View>

        {/* SVG BELL */}
        <TouchableOpacity style={styles.bellButton}>
          <Svg width={23} height={23} viewBox="0 0 24 24">
            <Path
              d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"
              fill="none"
              stroke="#222222"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <Path
              d="M10 21h4"
              fill="none"
              stroke="#222222"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
          </Svg>
        </TouchableOpacity>
      </View>

      {/* ================= PRODUCTS ================= */}

      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={renderProduct}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <>
            {/* TITLE */}

            <View style={styles.titleRow}>
              <Text style={styles.title}>Products</Text>

              <Text style={styles.productCount}>128 Products</Text>
            </View>

            {/* SEARCH + FILTER */}

            <View style={styles.searchRow}>
              <View style={styles.searchBox}>

                <Svg width={18} height={18} viewBox="0 0 24 24">
                  <Circle
                    cx="10.5"
                    cy="10.5"
                    r="5.5"
                    fill="none"
                    stroke="#64748B"
                    strokeWidth="1.6"
                  />

                  <Path
                    d="M15 15l4 4"
                    stroke="#64748B"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </Svg>

                <TextInput
                  placeholder="Search products, IDs..."
                  placeholderTextColor="#8A8A8A"
                  style={styles.searchInput}
                />
              </View>

              <TouchableOpacity style={styles.filterButton}>
                <Svg width={20} height={20} viewBox="0 0 24 24">
  <Path
    d="M5 7h14"
    stroke="#374151"
    strokeWidth="1.6"
    strokeLinecap="round"
  />

  <Circle
    cx="9"
    cy="7"
    r="1.8"
    fill="#FFFFFF"
    stroke="#374151"
    strokeWidth="1.5"
  />

  <Path
    d="M5 12h14"
    stroke="#374151"
    strokeWidth="1.6"
    strokeLinecap="round"
  />

  <Circle
    cx="15"
    cy="12"
    r="1.8"
    fill="#FFFFFF"
    stroke="#374151"
    strokeWidth="1.5"
  />

  <Path
    d="M5 17h14"
    stroke="#374151"
    strokeWidth="1.6"
    strokeLinecap="round"
  />

  <Circle
    cx="10"
    cy="17"
    r="1.8"
    fill="#FFFFFF"
    stroke="#374151"
    strokeWidth="1.5"
  />
</Svg>
              </TouchableOpacity>
            </View>
          </>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7F9',
  },

  /* ================= HEADER ================= */

  header: {
    height: 64,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,

    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },

  shopName: {
    fontSize: 17,
    fontWeight: '800',
    color: '#11183D',
  },

  bellButton: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* ================= LIST ================= */

  listContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },

  /* ================= TITLE ================= */

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginBottom: 12,
  },

  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#080832',
  },

  productCount: {
    fontSize: 10,
    color: '#64748B',
  },

  /* ================= SEARCH ================= */

  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginBottom: 14,
  },

  searchBox: {
    flex: 1,
    height: 50,

    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: '#E0E4E8',
    borderRadius: 8,

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 11,
  },

  searchInput: {
    flex: 1,
    height: 46,

    padding: 0,
    marginLeft: 7,

    fontSize: 15,
    color: '#333333',
  },
  filterButton: {
  width: 42,
  height: 42,
  marginLeft: 7,
  backgroundColor: '#FFFFFF',
  borderWidth: 1,
  borderColor: '#E1E5E9',
  borderRadius: 8,
  justifyContent: 'center',
  alignItems: 'center',
},


  /* ================= PRODUCT CARD ================= */

  productCard: {
    width: '100%',
    minHeight: 135,

    backgroundColor: '#FFFFFF',

    borderRadius: 9,

    borderWidth: 1,
    borderColor: '#E1E5E9',

    marginBottom: 15,

    padding: 10,

    flexDirection: 'row',
  },

  imageContainer: {
    width: 105,
    height: 105,

    borderRadius: 7,

    overflow: 'hidden',

    backgroundColor: '#E7E9EB',
  },

  productImage: {
    width: '100%',
    height: '100%',
  },

  productDetails: {
    flex: 1,

    marginLeft: 14,

    paddingTop: 3,
  },

  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'space-between',
  },

  productName: {
    flex: 1,

    fontSize: 15,
    fontWeight: '700',

    color: '#1E293B',

    marginRight: 9,
  },

  productId: {
    fontSize:10,

    color: '#64748B',

    marginTop: 5,
  },

  productPrice: {
    fontSize: 18,

    fontWeight: '800',

    color: '#05052F',

    marginTop: 18,
  },

  /* ================= STATUS ================= */

  statusBadge: {
    backgroundColor: '#DDF5EA',

    paddingHorizontal: 8,
    paddingVertical: 4,

    borderRadius: 4,
  },

  statusText: {
    fontSize: 8,

    fontWeight: '700',

    color: '#16805D',
  },

  draftBadge: {
    backgroundColor: '#F0F1F2',
  },

  draftText: {
    color: '#777777',
  },
});

export default ProductsScreen;