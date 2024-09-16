import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Pdf from 'react-native-pdf';
import { genericRatio } from '../../helper/helper';
import { COLORS, FONTS, SIZES, commonStyles } from '../../constant/theme';

const PdfView = ({url = "http://samples.leanpub.com/thereactnativebook-sample.pdf", close}) => {
    return (
        <View style={[styles.modalContainre, { height: SIZES.height - 100 }]}>
            <Pdf
                trustAllCerts={false}
                source={{url}}
                onLoadComplete={(numberOfPages, filePath) => {
                    console.log(`Number of pages: ${numberOfPages}`);
                }}
                onPageChanged={(page, numberOfPages) => {
                    console.log(`Current page: ${page}`);
                }}
                onLoadProgress={(per) => {
                    console.log(`per: ${per}`);
                }}
                onError={(error) => {
                    console.log(error);
                }}
                onPressLink={(uri) => {
                    console.log(`Link pressed: ${uri}`);
                }}
                singlePage
                fitWidth
                enablePaging
                spacing={0}
                progressContainerStyle={[
                    commonStyles.center, commonStyles.fillFullScreen,
                ]}
                style={{ height: SIZES.height - 150, width: '100%', }}
            />
            <View style={[commonStyles.fillFullScreen, { }]}>
                <TouchableOpacity
                onPress={close}
                style={[commonStyles.center, commonStyles.fullWidth, 
                    {backgroundColor: COLORS.primary, height: '100%', 
                    borderBottomRightRadius: genericRatio(20),
                    borderBottomLeftRadius: genericRatio(20)}]}>
                    <Text style={[FONTS.body2, commonStyles.textColorWhite]}>{"Close"}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PdfView

const styles = StyleSheet.create({
    modalContainre: {
        backgroundColor: COLORS.white,
        width: '90%',
        borderRadius: genericRatio(20)
    }
})
