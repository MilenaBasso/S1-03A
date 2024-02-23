import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ImageBackground, Image, Button } from 'react-native';

export default function App() {

    pressButon = () => {
        alert("Heeyyyy!!")
    }



    return (
        <View style={styles.container}>



            <ImageBackground
                source={require('./src/assets/images/fundo.jpg')}
                style={styles.img}>

                <View style={{ backgroundColor: 'pink', width: '100%', height: 60 }}>
                </View>
                <View style={styles.secondaryContainer}>

                    <TextInput style={styles.inputName}
                        placeholder='User'
                        inputMode='text'
                        placeholderTextColor='purple'
                    />

                    <TextInput style={styles.inputName}
                        placeholder='PassWord'
                        inputMode='numeric'
                        secureTextEntry={true}
                        placeholderTextColor='pink'
                    />

                    <Text style={{ color: 'black', fontStyle: 'italic', fontSize: 25, textAlign: 'center', borderWidth: 3, borderColor: 'purple' }}>Welcome!!</Text>
                    <Button
                        style={{ backgroundColor: 'red' }}
                        onPress={pressButon}
                        title='Click Me!'
                        color='pink'
                    />
                </View>
                <View style={{ backgroundColor: 'pink', width: '100%', height: 60 }}>
                </View>
            </ImageBackground>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    secondaryContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    img: {
        width: '100%',
        height: '100%'
    },

    inputName: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 2,

    }
});