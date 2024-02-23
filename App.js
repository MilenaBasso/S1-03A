import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ImageBackground } from 'react-native-web';

export default function App() {

    pressButon = () => {
        alert("Você apertou o botão")
    }

    const imagem = { uri: 'https://urldaimagem.com' }

    return (
        <View style={styles.container}>



            <Image
                source={imagem}
            />

            <Image
                source={require('./assets/favicon.png')}
                style={[styles.img, { resizeMode: "cover" }]}
            />


            <ImageBackground>

            </ImageBackground>


            <View style={{ backgroundColor: 'gray', width: '100%', height: 60 }}>
            </View>
            <View style={styles.secondaryContainer}>

                <TextInput style={styles.inputName}
                    placeholder='Digite seu Nome'
                    inputMode='text'
                    placeholderTextColor='purple'
                    onChangeText={changeText}
                />

<TextInput style={styles.inputName}
                    placeholder='Digite sua Senha'
                    inputMode='numeric'
                    secureTextEntry={true}
                    placeholderTextColor='pink'
                    onChangeText={changeText}
                />

                <Text style={{ color: 'blue', fontSize: 30, fontWeight: 'bold', textAlign: 'end' }}>Milena Basso</Text>
                <Text style={{ color: 'black', fontStyle: 'italic', fontSize: 25, textAlign: 'start', borderWidth: 1, borderColor: 'purple' }}>Note 27</Text>
                <Text style={{ backgroundColor: 'pink', fontSize: 20, textAlign: 'center' }}>Sala 07</Text>
            </View>
            <View style={{ backgroundColor: 'gray', width: '100%', height: 60 }}>
            </View>

        </View>
    );
}

<Button
    style={{ backgroundColor: 'red' }}
    onPress={pressButon}
    title='Click Me!'
    color='pink'
/>


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    secondaryContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
});