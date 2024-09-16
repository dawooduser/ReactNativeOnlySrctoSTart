import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React, { memo } from 'react'
import { basketIcon } from '../../constant/images'
import { genericRatio } from '../../helper/helper'
import { commonStyles } from '../../constant/theme'
import { useSelector } from 'react-redux'

const BasketCart = () => {
    const cartData = useSelector(x => x.cartData.data)
    return <ImageBackground source={basketIcon} style={styles.container}>
        <View style={[styles.badgeContainer, commonStyles.center]}>
            <Text style={[styles.badgeText, commonStyles.textColorWhite]} numberOfLines={1}>{cartData.length}</Text>
        </View>
    </ImageBackground>
}

export default memo(BasketCart)

const styles = StyleSheet.create({
    container: {
        height: genericRatio(25),
        width: genericRatio(25)
    },
    badgeContainer: {
        height: genericRatio(20),
        width: genericRatio(20),
        borderRadius: genericRatio(20),
        backgroundColor: 'red',
        alignSelf: 'flex-end',
        marginTop: -genericRatio(8),
        marginRight: -genericRatio(5)
    },
    badgeText: {
        fontSize: genericRatio(8),
        fontFamily: 'GeneralSans-Semibold',
        textAlign: 'center'
    }
})