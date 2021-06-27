import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
  SafeAreaView
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SplashScreen = ({navigation}) => {  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={{uri:'https://images.pexels.com/lib/api/pexels.png'}}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Animatable.View style={[
          styles.footer,
        ]}
       animation="fadeInUpBig"
      >
      <LinearGradient
                    colors={['#0F2027', '#203A43', '#2C5364']}
                    start={{ x: 1.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                    style={styles.buttonContainer}
                >
      
                
                 <View style={styles.buttonContainer}>
                        <Text style={[styles.buttonText,{fontSize:20}]}>
                            Welcome to the id & card holder.
                         </Text>
                         <Text style={styles.buttonText}>Sign in with account</Text>
                    </View>
            </LinearGradient>
            </Animatable.View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.30;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flex:2,
    width:'85%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    width: '100%',
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
},
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
  container: {
    flex: 1.0,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
},
grediant: {
    height: 150,
    width: 300,
    justifyContent: 'center',
    alignSelf: 'center'
},

buttonText: {
    textAlign: 'center',
    color: '#000',
    alignSelf: 'center',
}
});
