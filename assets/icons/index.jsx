import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './home'
import Mail from './mail'
import ArrowLeft from './arrowLeft'
import Lock from './lock'
import {theme} from '../../constants/theme'

const icons = {
    home : Home,
    mail : Mail,
    lock : Lock,
    arrowLeft : ArrowLeft
}
const Icon = ({name, ...props}) => {
  const IconComponent = icons[name]
  return (
   <IconComponent 
   height={props.size || 24}
   width={props.size || 24}
   strokeWidth={props.strokeWidth || 1.9}
   color={theme.colors.textLight}
   {...props}
   />
  )
}

export default Icon

