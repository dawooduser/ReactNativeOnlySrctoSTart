import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { CommonActions } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { PhoneNumberUtil } from "google-libphonenumber";
const phoneUtil = PhoneNumberUtil.getInstance();

export const genericWidth = (ratio) => scale(ratio);
export const genericHeight = (ratio) => verticalScale(ratio);
export const genericRatio = (ratio) => moderateScale(ratio);

// export const dispatch = useDispatch()

export const screenNavigation = (navigation, path = "", data = {}) => {
  // console.log("navigation", navigation)
  navigation.navigate(path, data);
};
export const hardScreenNavigation = (navigaiton, name = "", params = {}) =>
  navigaiton.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name, params }],
    })
  );
export const HttpToastMsg = (msg = "") => showToastMsg("info", msg);

export function showToastMsg(type = "success", msg = "", position = "bottom") {
  // success, error, info
  return Toast.show({
    type, //'success' | 'error' | 'info'
    text1: msg,
    position,
  });
}
export function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}
export function textDotDot(mytextvar, maxlimit) {
  return mytextvar.length > maxlimit
    ? mytextvar.substring(0, maxlimit - 3) + "..."
    : mytextvar;
}
export function getRandomValueRange(min, max) {
  return Math.random() * (max - min) + min;
}

export function PerDecimal(params) {
  if (params === '') return 1
  let decimal = parseFloat(params);
  return decimal/100
}



export function GrandTotal(data = []) {
  const total = data.reduce(function (acc, obj) { return acc + obj.total; }, 0)
  const calculatorPerDeci = PerDecimal(shippingTax.tax)
  let TotalPayment = total * calculatorPerDeci + total
  TotalPayment = parseFloat(TotalPayment + shippingTax.shipping)
  return TotalPayment
}

export const isValidNumber = (number) => {
  try {
    const parsedNumber = phoneUtil.parse(number, "+92");
    return phoneUtil.isValidNumber(parsedNumber);
  } catch (err) {
    return false;
  }
};