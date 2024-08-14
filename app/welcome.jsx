import { StyleSheet, Image, View, Text, Pressable } from 'react-native'
import React from 'react'
import  ScreenWrapper  from '../components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import { wp, hp } from '../helpers/common'
import {theme} from '../constants/theme'
import Button from '../components/Button'
import { useRouter } from 'expo-router'


const welcome = () => {
  const router = useRouter()
  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Image source={require('../assets/images/welcome.png')} resizeMode="contain" style={styles.welcomeImage} />

        <View style={{gap: 20}}>
          <Text style={styles.title}>TANGA</Text>
          <Text style={styles.punchline}>Votre aplication pour acheter ou recharger vos cartes SIM</Text>
        </View>

        <View style={styles.footer}>
          <Button title="Get Started" onPress={() => router.push('signUp')} />
            <View style={styles.bottomTextContainer}>
                <Text style={styles.loginText}>Already have an account ?</Text>
                <Pressable  onPress={() => router.push('login')}>
                    <Text style={[styles.loginText, {color: theme.colors.primaryDark, fontWeight: theme.fonts.bold}]}>Login</Text>
                </Pressable>
            </View>
        </View> 
      </View>
    </ScreenWrapper>
  )
}

export default welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: wp(4),
  },
  welcomeImage: {
    width: wp(100),
    height: hp(30),
    alignSelf: 'center',
  },
  title: {
    color: theme.colors.text,
    fontSize: hp(4),
    textAlign: 'center',
    fontWeight: theme.fonts.extraBold,
  },
  punchline: {
    textAlign: 'center',
    paddingHorizontal: wp(10),
    fontSize: hp(1.7),
    color: theme.colors.text,
  },
  footer: {
    width: '100%',
    gap: 20,
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  loginText: {
    color: theme.colors.text,
    fontSize: hp(1.6),
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: theme.colors.primary,
    padding: 10,
    borderRadius: 5,
  },
})