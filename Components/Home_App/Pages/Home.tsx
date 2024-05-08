import { StyleSheet, Text, View } from 'react-native';
import useFindMeaning from '../../Hooks/useFindMeaning.ts';
import DisplayMeaning from '../Reuseablecomponent/DisplayMeaning';
import React, { useEffect } from 'react';

export default function Home() {
  const [isRecieved, setIsRecieved] = React.useState(false);
  const { dict, isLoading } = useFindMeaning('good');

  useEffect(() => {
    if (!isLoading) {
      setIsRecieved(true);
    }
  }, [isLoading]);

  return (
    <View>
      <View className='flex items-center mt-7 '>
        <Text className='text-3xl font-bold '>Word of the Day</Text>
      </View>
      {isRecieved && (<DisplayMeaning data={dict}/>)}
    </View>
  );
}

const styles = StyleSheet.create({});