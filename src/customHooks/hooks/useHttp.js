import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hide, show } from '../../redux/reducers/spinner'
import axiosInstance from '../../http/config'
import { HttpToastMsg, showToastMsg } from '../../helper/helper'
import { updateProductList, updateProductListByID } from '../../redux/reducers/categories'

const useHttp = () => {
    const dispatch = useDispatch()
    const spinnerToggle = useSelector(x => x.spinner)
    const user = useSelector(x => x.user)

    function errorHttpHandler(error) {
        dispatch(hide())
        console.log('error', error);
        console.log('error', error?.response);
        console.log('error', error?.response?.data);
        console.log('error', error?.response?.status);
        console.log('error', error?.response?.headers);
        showToastMsg('error', 'Something went wrong')
    }

   

    


    return {}
}

export default useHttp

const styles = StyleSheet.create({})