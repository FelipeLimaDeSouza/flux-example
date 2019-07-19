import React from 'react';
import {
  SafeAreaView
} from 'react-native';
import Application from './src/components/Application';

console.disableYellowBox = true;
export default function App() {
  return (
    <SafeAreaView>
      <Application />
    </SafeAreaView>
  );
}
