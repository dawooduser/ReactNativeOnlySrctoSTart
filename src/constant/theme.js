import { Dimensions, StyleSheet } from "react-native";
import { genericRatio } from "../helper/helper";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  // base colors
  primary: "#ed1c24",
  secondary: "#f4f4f4",
  lightPrimaryColor: "#5d9cec",
  primaryHard: "#357bd8",
  // colors
  black: "#1E1F20",
  white: "#FFFFFF",
  lightGray: "#F5F5F6",
  lightGray2: "#F6F6F7",
  lightGray3: "#EFEFF1",
  lightGray4: "#F8F8F9",
  lightGray5: "#e1e1e5",
  lightGray6: "#e0e0e0",
  lightGray7: "#6B7280",
  transparent: "transparent",
  darkgray: "#898C95",
  backdrop: "rgba(0, 0, 0, 0.5)",
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
  iconSize: 25
};

export const FONTS = {
  largeTitle: { fontFamily: "GeneralSans-Regular", fontSize: SIZES.largeTitle },
  h1: { fontFamily: "GeneralSans-Bold", fontSize: SIZES.h1 },
  h2: { fontFamily: "GeneralSans-Light", fontSize: SIZES.h2 },
  h3: { fontFamily: "GeneralSans-Light", fontSize: SIZES.h3 },
  h4: { fontFamily: "GeneralSans-Light", fontSize: SIZES.h4 },
  body1: { fontFamily: "GeneralSans-Regular", fontSize: SIZES.body1 },
  body2: { fontFamily: "GeneralSans-Regular", fontSize: SIZES.body2 },
  body3: { fontFamily: "GeneralSans-Regular", fontSize: SIZES.body3 },
  body4: { fontFamily: "GeneralSans-Regular", fontSize: SIZES.body4 },
  body5: { fontFamily: "GeneralSans-Regular", fontSize: SIZES.body5 },
};
export const commonStyles = StyleSheet.create({
    fillFullScreen: { flex: 1 },
    rowDirection: { flexDirection: 'row' },
    rowDirectionCenter: { flexDirection: 'row', alignItems: 'center' },
    center: { justifyContent: 'center', alignItems: 'center' },
    fullWidth: { width: '100%' },
    spaceBetween: { justifyContent: 'space-between' },
    backgroundColorColorCommon: {
        backgroundColor: '#f4f6f6'
    },
    columnTag: { paddingHorizontal: 15, paddingVertical: 5, backgroundColor: COLORS.secondary, borderRadius: 10 },
    columnItemTag: { justifyContent: 'space-between', backgroundColor: COLORS.secondary, paddingVertical: 10, paddingHorizontal: 5 },
    shadow: {
        shadowColor: 'rgba(0,0,0,0.4)',
        shadowOffset: {
          width: 1,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 1,
      
  },
  textFamily100: {
    fontFamily: "GeneralSans-Thin",
  },
  textFamily200: {
    fontFamily: "GeneralSans-ExtraLight",
  },
  textFamily300: {
    fontFamily: "GeneralSans-Light",
  },
  textFamily400: {
    fontFamily: "GeneralSans-Regular",
  },
  textFamily500: {
    fontFamily: "GeneralSans-Medium",
  },
  textFamily600: {
    fontFamily: "GeneralSans-SemiBold",
  },
  textFamily700: {
    fontFamily: "GeneralSans-Bold",
  },
  textFamily800: {
    fontFamily: "GeneralSans-ExtraBold",
  },
  textFamily900: {
    fontFamily: "GeneralSans-Black",
  },
  textColorWhite: {
    color: 'white',
  },
  textColorBlack: {
    color: '#101317',
  },
  screenCommonPaddingHorizontal: {
    paddingHorizontal: 10
  },
  backgroundBackDropColor: {
    backgroundColor: COLORS.backdrop
  }
});


const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
