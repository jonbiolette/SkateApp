import React, {useState, useEffect,useRef} from 'react';
import {Text,View,SafeAreaView,StyleSheet,TextInput,Button} from 'react-native';

const LoginScreen = ({navigation}) => {
    const[userName,onNameChange] = useState("");
    const[passWord,onPassChange] = useState("");

    return(
    <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={onNameChange}
            value={userName}
            placeholder="Username"
          />
          <TextInput
            style={styles.input}
            onChangeText={onPassChange}
            value={passWord}
            placeholder="Password"
            keyboardType="password"
            secureTextEntry={true}
          />
          <Button
              onPress={() => navigation.navigate('Products')}
              title="Login"
              color="#2196F3"
          />
        <Button
            onPress={() => navigation.navigate('Products')}
            title="Forgot Password"
            color="#2196F3"
        />
    </SafeAreaView>
    )
};

//                <View style={styles.middleContainer}>
//                    <Text>Your cart is empty</Text>
//                    <Button
//                        onPress={() => navigation.navigate('Products')}
//                        title="Continue Shopping"
//                        color="#2196F3"
//                    />
//                </View>

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default LoginScreen;