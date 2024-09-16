import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, commonStyles } from '../../constant/theme'
import { genericRatio } from '../../helper/helper'
import { AntDesign } from '../../constant/icon'

const ProductQtyCounContainer = ({ width, paddingVertical, fontSize, counter, plusCb, minusCb }) => {
  return (
    <View style={[styles.container, commonStyles.rowDirection, commonStyles.shadow, { width }]}>
      <TouchableOpacity style={[commonStyles.fillFullScreen, commonStyles.center, { paddingVertical }]} onPress={minusCb}>
        <AntDesign name={'minus'} size={genericRatio(15)} color={'#303030'} />
      </TouchableOpacity>
      <View style={[commonStyles.fillFullScreen, commonStyles.center, { paddingVertical }]}>
        <Text style={[styles.backColor, { fontSize }]} numberOfLines={1}>{counter}</Text>
      </View>
      <TouchableOpacity style={[commonStyles.fillFullScreen, commonStyles.center, { paddingVertical }]} onPress={plusCb}>
        <AntDesign name={'plus'} size={genericRatio(15)} color={'#303030'} />
      </TouchableOpacity>
    </View>
  )
}
ProductQtyCounContainer.defaultProps = {
  counter: 0,
  width: genericRatio(120),
  paddingVertical: genericRatio(8),
  fontSize: SIZES.body3,
  plusCb: () => console.log('press plus icon'),
  minusCb: () => console.log('press minus icon')

}
export default ProductQtyCounContainer

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: COLORS.darkgray,
    backgroundColor: '#ffffff',
    borderRadius: 5
  },
  backColor: {
    color: '#303030'
  }
})