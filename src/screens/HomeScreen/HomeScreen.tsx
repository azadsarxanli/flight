import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React, {useMemo, useCallback} from 'react';
// importing Button components from @rneui/themed
import {Button, Header as HeaderRNE} from '@rneui/themed';
import {FlashList} from '@shopify/flash-list';
import {useNavigation} from '@react-navigation/native';

export const HomeScreen = () => {
  const navigation = useNavigation();
  const stories = useMemo(
    () => [
      {
        uri: 'https://picsum.photos/200/300',
      },
      {
        uri: 'https://picsum.photos/200/300',
      },
      {
        uri: 'https://picsum.photos/200/300',
      },
      {
        uri: 'https://picsum.photos/200/300',
      },
      {
        uri: 'https://picsum.photos/200/300',
      },
      {
        uri: 'https://picsum.photos/200/300',
      },
    ],
    [],
  );

  const handleNavigation = useCallback(() => {
    navigation.navigate('BookFlights' as never);
  }, [navigation]);

  return (
    <View style={style.container}>
      <HeaderRNE
        leftComponent={{icon: 'menu', color: '#fff'}}
        centerComponent={{
          text: 'Book a Flight!',
          style: {color: '#ffffff', fontSize: 20},
        }}
        backgroundColor="#18416c"
        style={{
          borderBottomWidth: 0,
          borderBottomColor: '#c90e0e',
          height: 100,
        }}
      />
      <View style={style.storiesContainer}>
        <FlashList
          data={stories}
          renderItem={({item}) => renderImage(item)}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          estimatedItemSize={100}
        />
      </View>
      <View style={style.buttonContainer}>
        <View style={{marginBottom: 10}}>
          <Button
            title="Book a Flight"
            buttonStyle={{
              backgroundColor: 'rgba(78, 116, 289, 1)',
              borderRadius: 3,
            }}
            onPress={handleNavigation}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
          />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#18416c',
  },
  storiesContainer: {
    height: 100,
    marginVertical: 10,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function renderImage(item: {uri: string}) {
  return (
    <Image
      source={{uri: item.uri}}
      style={{
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 10,
      }}
    />
  );
}
