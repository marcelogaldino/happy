import React from 'react'

import { useFonts } from 'expo-font'
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito'

import Routes from './src/routes'

export default function App() {
  const [fontLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold
  })

  if (!fontLoaded) {
    return null
  }

  return (
    <Routes />
  );
}


