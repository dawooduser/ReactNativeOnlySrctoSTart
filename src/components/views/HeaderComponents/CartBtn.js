import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '../../../constant/icon'
import { COLORS, SIZES } from '../../../constant/theme'

const CartBtn = ({color = COLORS.secondary, onPress = () => {}}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <MaterialCommunityIcons name="cart" color={color} size={SIZES.iconSize} />
        </TouchableOpacity>
    )
}

export default CartBtn

const styles = StyleSheet.create({})