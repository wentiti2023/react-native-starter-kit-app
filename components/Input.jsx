import React from 'react'
import { TextInput, Text, View, StyleSheet } from 'react-native'
import { wp, hp } from '../helpers/common'
import {theme} from '../constants/theme'

const Input = (props) => {
    return (
        <View style={[styles.container, props.containerStyles && props.containerStyles]}>
            {
                props.icon && props.icon
            }
            <TextInput 
            style={{flex: 1}}
            placeholderTextColor={theme.colors.textLight}
            ref={props.inputRef && props.inputRef}
            {...props}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: hp(7.2),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.4,
        borderColor: theme.colors.text,
        borderRadius: theme.radius.xxl,
        borderColor: 'continuous',
        paddingHorizontal: 18,
        gap: 12
    }
})