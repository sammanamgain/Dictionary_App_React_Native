import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import SoundPlayer from 'react-native-sound-player'

export default function DisplayMeaning({data}) {

  const playsound=()=>{
    console.log("function called")
    try {
      // play the file tone.mp3
     
      // or play from url
      SoundPlayer.playUrl('https://cdn.freesound.org/previews/734/734908_9034501-lq.mp3')
      console.log("played")
  } catch (e) {
      console.log(`cannot play the sound file`, e)
  }
  }
    
  return (
    <View>
   
      <View className='mt-3 flex items-center'>
        <Text className='text-3xl'> {data[0]['word']}</Text>
        <Text> {data[0]['phonetics']['audio']}</Text>
        <TouchableOpacity onPress={playsound}>
        <Text>play sound</Text>
        </TouchableOpacity>
       
      </View>
    </View>
  )
}