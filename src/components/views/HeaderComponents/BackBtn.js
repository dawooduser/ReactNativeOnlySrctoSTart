import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '../../../constant/icon'
import { COLORS } from '../../../constant/theme'
import { genericRatio } from '../../../helper/helper'
import { useNavigation } from '@react-navigation/native'

const BackBtn = () => {
    const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.pop()}>
        <Ionicons name={'arrow-back'} color={COLORS.black} size={genericRatio(25)} />
    </TouchableOpacity>
  )
}

export default BackBtn

const styles = StyleSheet.create({})