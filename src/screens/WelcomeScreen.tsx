import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { welcomeScreenData } from '../assets/data/data';
import { images } from '../assets';
import Button from '../components/Button';
import { RootParamList } from './../navigation/navigationParamList';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const { welcome } = images;

export default function WelcomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList>>();
  return (
    <SafeAreaView className="flex-1 bg-bgWhite">
      <View className="flex-1 flex justify-around my-4">
        {/** ====================== Image =================================== */}
        <View className="flex-row justify-center">
          <Image source={welcome} style={{ width: 324, height: 324 }} />
        </View>

        {/** ====================== Welcome Text ============================= */}
        <View className="flex flex-col gap-2 mt-[-25%]">
          <Text className="text-darkGrayText text-xl text-center font-exoSemibold">
            {welcomeScreenData.title}
          </Text>
          <Text className="text-darkGrayText text-lg text-center font-exo">
            {welcomeScreenData.subtitle}
          </Text>
        </View>

        {/** ====================== Action button ============================= */}
        <Button
          primaryBtnText={'Sign Up'}
          onPrimaryBtnPress={() => {
            navigation.navigate('SignUp')
          }}
          secondaryBtnText2={'Skip'}
          onSecondaryBtnPress={() => {
            navigation.navigate('SignIn')
          }}
        />
      </View>
    </SafeAreaView>
  );
}
