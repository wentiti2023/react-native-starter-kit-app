import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState,useRef } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import {theme} from '../constants/theme'
import Icon from '../assets/icons'
import BackButton from '../components/BackButton'
import { StatusBar } from 'expo-status-bar'
import { useRouter } from 'expo-router'
import { wp, hp } from '../helpers/common'
import Input from '../components/Input'
import Button from '../components/Button'

const Login = () => {
  const router = useRouter();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [loading, setLoading] = useState(false);

  const onSubmit = ()=>{

  }
  return (
    <ScreenWrapper bgg="white">
    <StatusBar style="dark"/>
    <View style={styles.container}>
            <BackButton router={router}/>

            <View >
                <Text style={styles.welcomeText}>Bonjour !</Text>
                <Text style={styles.welcomeText}>Welcome back !</Text>
            </View>

            <View style={styles.form}>
              <Text style={{fontSize: hp(1.5),  color: theme.colors.text}}>
                Connectez-vous pour continuer
              </Text>
                <Input 
                icon={<Icon name="mail" size={26} strokeWidth={1.6} />}
                placeholder="Entrez votre Email" 
                onChangeText={value=> emailRef.current = value} 
                />
                 <Input 
                icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
                placeholder="Entrez votre Mot de passe" 
                secureTextEntry
                onChangeText={value=> passwordRef.current = value} 
                />
                <Text style={styles.forgotPassword}>
                  Mot de passe oublié ?
                </Text>

                <Button title={'Connexion'} loading={loading} onPress={onSubmit} />

                <View style={styles.footer}>
                  <Text style={styles.footerText}>
                    Avez-vous un compte ?
                  </Text>
                  <Pressable>
                    <Text style={[styles.footerText, {color: theme.colors.primaryDark, fontWeight: theme.fonts.bold}]}>
                      S'inscrire
                    </Text>
                  </Pressable>
                </View>
            </View>

      
    </View>
    </ScreenWrapper>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 45,
        paddingHorizontal: wp(5),
    },
    welcomeText: {
        fontSize: hp(4),
        fontWeight: theme.fonts.bold,
        color: theme.colors.text,
    },
    form: {
        gap: 25,
    },
    forgotPassword: {
      textAlign: 'right',
      fontWeight: theme.fonts.semibold,
      color: theme.colors.text
    },
    footer:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 6
    },
    footerText: {
      textAlign: 'center',
      color: theme.colors.text,
      fontSize: hp(1.6)
    }
})