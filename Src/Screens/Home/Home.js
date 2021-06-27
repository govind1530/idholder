import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable,
  Animated,
  FlatList,
  Dimensions,
  StatusBar,
} from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';
const {width, height} = Dimensions.get('screen');
const SPACING = 10;
const AVATAR_SIZE = 72;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;
const Home = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  function generateGreetings() {
    var currentHour = moment().format('HH');

    if (currentHour >= 3 && currentHour < 12) {
      return 'Good Morning';
    } else if (currentHour >= 12 && currentHour < 15) {
      return 'Good Afternoon';
    } else if (currentHour >= 15 && currentHour < 20) {
      return 'Good Evening';
    } else if (currentHour >= 20 && currentHour < 3) {
      return 'Good Night';
    } else {
      return 'Hello';
    }
  }

  const renderItem = ({item, index}) => {
    const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];
    const opacityInputRange = [
      -1,
      0,
      ITEM_SIZE * index,
      ITEM_SIZE * (index + 0.5),
    ];
    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 0],
    });
    const opacity = scrollY.interpolate({
      inputRange: opacityInputRange,
      outputRange: [1, 1, 1, 0],
    });
    return (
      <Animated.View
        style={{
          flexDirection: 'row',
          padding: SPACING,
          marginBottom: SPACING,
          borderRadius: 12,
          backgroundColor: 'rgba(255,255,255,0.8)',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.3,
          shadowRadius: 20,
          transform: [{scale}],
          opacity,
          borderWidth: 1,
          borderColor:randomColor(),
        }}>
        <View style={{justifyContent: 'center',alignItems: 'center',flex:1}}>
          <Text style={{fontSize: 22, fontWeight: '700'}}>{'name'}</Text>
          <Text style={{fontSize: 16, opacity: 0.7}}>{'job'}</Text>
          <Text style={{fontSize: 14, opacity: 0.8, color: '#0099cc'}}>
            {'email'}
          </Text>
        </View>
      </Animated.View>
    );
  };

  const randomColor = (() => {
    "use strict";
  
    const randomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
  
    return () => {
      var h = randomInt(0, 360);
      var s = randomInt(42, 98);
      var l = randomInt(40, 90);
      return `hsl(${h},${s}%,${l}%)`;
    };
  })();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.morningConatiner}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{color: 'red'}}>{generateGreetings()}</Text>

          <Pressable onPress={() => alert('ok')}>
            <Icon name="cog" size={30} color="#fff" />
          </Pressable>
        </View>

        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection:"row"
          }}>
          <Pressable style={styles.buyMeCoffeeButton}>
          <Icon name="coffee" size={30} color="#000" />
            <Text>Buy Me Coffee</Text>
          </Pressable>
          <Pressable onPress={() => alert('ok')}>
            <Icon name="plus" size={30} color="#fff" />
          </Pressable>
        </View>
      </View>

      <View style={styles.docListContainer}>
        <Animated.FlatList
          data={[1, 2, 3, 4, 5,6,3,1,2,3,4,5,6]}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: true},
          )}
          contentContainerStyle={{
            padding: SPACING,
            paddingTop: StatusBar.currentHeight || 42,
          }}
          keyExtractor={item => item.key}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor:"#000"
  },
  morningConatiner: {
    width: '100%',
    height: 130,
    backgroundColor: 'black',
    paddingHorizontal: 20,
   // position: 'absolute',
    justifyContent:'space-around'
  },
  docListContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 35,
    //top: 110,
    borderTopRightRadius: 35,
    // position:"absolute"
  },
  buyMeCoffeeButton: {
    width: '55%',
    height: 40,
    backgroundColor: '#593e2c',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 20,
    flexDirection:"row",
    paddingHorizontal:10
  },
  
  addCardButton: {
    width: '30%',
    height: 50,
    borderRadius: 30,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
