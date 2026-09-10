import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface IconProps {
  color?: string;
  size?: number;
}

export const HomeGridIcon: React.FC<IconProps> = ({
  color = '#94A3B8',
}) => {
  const isWhite = color === '#FFFFFF';
  const bgStyle = isWhite ? styles.whiteBg : styles.transparentBg;

  return (
    <View style={styles.gridContainer}>
      <View style={[styles.gridCell, bgStyle, {borderColor: color}]} />
      <View style={[styles.gridCell, bgStyle, {borderColor: color}]} />
      <View style={[styles.gridCell, bgStyle, {borderColor: color}]} />
      <View style={[styles.gridCell, bgStyle, {borderColor: color}]} />
    </View>
  );
};

export const ProductsBoxIcon: React.FC<IconProps> = ({
  color = '#94A3B8',
}) => {
  const isWhite = color === '#FFFFFF';
  const topBgStyle = isWhite ? styles.translucentWhiteBg : styles.transparentBg;
  const bottomBgStyle = isWhite ? styles.whiteBg : styles.transparentBg;

  return (
    <View style={styles.boxContainer}>
      <View style={[styles.boxTop, topBgStyle, {borderColor: color}]} />
      <View style={[styles.boxBottom, bottomBgStyle, {borderColor: color}]} />
    </View>
  );
};

export const ProfileIcon: React.FC<IconProps> = ({
  color = '#94A3B8',
}) => {
  const isWhite = color === '#FFFFFF';
  const bgStyle = isWhite ? styles.whiteBg : styles.transparentBg;

  return (
    <View style={styles.profileContainer}>
      <View style={[styles.profileHead, bgStyle, {borderColor: color}]} />
      <View style={[styles.profileBody, bgStyle, {borderColor: color}]} />
    </View>
  );
};

export const PlusIcon: React.FC<IconProps> = ({
  color = '#FFFFFF',
  size = 24,
}) => {
  return (
    <View style={styles.plusContainer}>
      <Text style={[styles.plusText, {color, fontSize: size - 2}]}>+</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    width: 18,
    height: 18,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
  gridCell: {
    width: 7.5,
    height: 7.5,
    borderWidth: 1.8,
    borderRadius: 2.5,
  },
  boxContainer: {
    width: 19,
    height: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxTop: {
    width: 14,
    height: 4,
    borderWidth: 1.8,
    borderRadius: 2,
    marginBottom: 1,
  },
  boxBottom: {
    width: 17,
    height: 11,
    borderWidth: 1.8,
    borderTopWidth: 0,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
  profileContainer: {
    width: 19,
    height: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileHead: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    borderWidth: 1.8,
    marginBottom: 2,
  },
  profileBody: {
    width: 15,
    height: 6,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderWidth: 1.8,
    borderBottomWidth: 0,
  },
  plusContainer: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusText: {
    fontWeight: '600',
    lineHeight: 22,
    textAlign: 'center',
  },
  whiteBg: {
    backgroundColor: '#FFFFFF',
  },
  translucentWhiteBg: {
    backgroundColor: 'rgba(255,255,255,0.25)',
  },
  transparentBg: {
    backgroundColor: 'transparent',
  },
});
