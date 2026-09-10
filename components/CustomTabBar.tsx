import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Platform,
} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HomeGridIcon, ProductsBoxIcon, ProfileIcon} from './TabIcons';

interface TabButtonProps {
  label: string;
  isFocused: boolean;
  onPress: () => void;
  onLongPress: () => void;
  routeName: string;
}

const TabButton: React.FC<TabButtonProps> = ({
  label,
  isFocused,
  onPress,
  onLongPress,
  routeName,
}) => {
  const scaleAnim = useRef(new Animated.Value(isFocused ? 1 : 0.9)).current;
  const pillOpacity = useRef(new Animated.Value(isFocused ? 1 : 0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: isFocused ? 1 : 0.9,
        friction: 5,
        tension: 100,
        useNativeDriver: true,
      }),
      Animated.timing(pillOpacity, {
        toValue: isFocused ? 1 : 0,
        duration: 180,
        useNativeDriver: true,
      }),
    ]).start();
  }, [isFocused, scaleAnim, pillOpacity]);

  const renderIcon = () => {
    const color = isFocused ? '#FFFFFF' : '#94A3B8';
    switch (routeName) {
      case 'Home':
        return <HomeGridIcon color={color} size={20} />;
      case 'Products':
        return <ProductsBoxIcon color={color} size={20} />;
      case 'Profile':
        return <ProfileIcon color={color} size={20} />;
      default:
        return <HomeGridIcon color={color} size={20} />;
    }
  };

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={isFocused ? {selected: true} : {}}
      accessibilityLabel={label}
      onPress={onPress}
      onLongPress={onLongPress}
      activeOpacity={0.8}
      style={styles.tabItem}>
      <Animated.View
        style={[
          styles.pillContainer,
          isFocused ? styles.activePill : styles.inactivePill,
          {
            transform: [{scale: scaleAnim}],
          },
        ]}>
        {renderIcon()}
      </Animated.View>
      <Text
        style={[
          styles.tabLabel,
          isFocused ? styles.activeTabLabel : styles.inactiveTabLabel,
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export const CustomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: Math.max(insets.bottom, 12),
        },
      ]}>
      <View style={styles.tabBarInner}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? (options.tabBarLabel as string)
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TabButton
              key={route.key}
              label={label}
              isFocused={isFocused}
              onPress={onPress}
              onLongPress={onLongPress}
              routeName={route.name}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#EEF2F6',
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: -3},
        shadowOpacity: 0.06,
        shadowRadius: 8,
      },
      android: {
        elevation: 12,
      },
    }),
  },
  tabBarInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 8,
    paddingHorizontal: 16,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
  },
  pillContainer: {
    width: 60,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  activePill: {
    backgroundColor: '#1E1B4B',
  },
  inactivePill: {
    backgroundColor: 'transparent',
  },
  tabLabel: {
    fontSize: 11,
    letterSpacing: -0.2,
  },
  activeTabLabel: {
    color: '#0F172A',
    fontWeight: '700',
  },
  inactiveTabLabel: {
    color: '#94A3B8',
    fontWeight: '500',
  },
});
