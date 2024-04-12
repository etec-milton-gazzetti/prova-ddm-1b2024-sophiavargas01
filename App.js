import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFE48A",
      }}
    >
      <Image
        source={require("./assets/looo.png")} // ou URL da imagem se for externa
        style={{ width: 450, height: 350 }} // Estilo para a imagem (largura e altura)
      />
      <Text></Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("História")}
      >
        <Text style={styles.buttonText}>História</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.raButton]} // Combine estilos
        onPress={() => navigation.navigate("RA")}
      >
        <Text style={styles.buttonText}>RA - ARTE</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Sobre")}
      >
        <Text style={styles.buttonText}>Sobre</Text>
      </TouchableOpacity>
    </View>
  );
}
function Sobre({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Sobre</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

function História({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image
          source={require("./assets/arte.png")}
          style={{
            width: 500,
            height: 400,
            marginTop: 50,
            alignSelf: "center",
          }}
        />
        <Text
          style={{ textAlign: "center", marginHorizontal: 35, marginTop: -150 }}
        >
          A arte pré-histórica é aquela produzida durante os períodos
          cronológicos da Pré-História, com destaque para os períodos
          Paleolítico e Neolítico. A arte pré-histórica inclui produções
          artísticas como as pinturas rupestres e gravuras feitas em pedra, além
          de esculturas e estatuetas. A arte pré-histórica varia
          significativamente de uma região para outra, refletindo a diversidade
          cultural das sociedades antigas. Por exemplo, as pinturas rupestres na
          França diferem das encontradas na Austrália ou na África.
        </Text>
        <Image
          source={require("./assets/pinturas.png")}
          style={{
            width: 300,
            height: 350,
            marginTop: 20,
            alignSelf: "center",
          }}
        />

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: "black",
            marginTop: 20,
            width: 20,
            height: 40,
            borderRadius: 18,
            paddingHorizontal: 38,
            marginVertical: 20,
            paddingVertical: 15,
            backgroundColor: "#DF571D",
            alignSelf: "center",
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Voltar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function RA({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>RA</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#DF571D",
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 38,
    marginVertical: 12,
    borderWidth: 2, // Adicione uma borda
    borderColor: "#2F1800", // Defina a cor da borda (vermelha neste exemplo)
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  raButton: {
    backgroundColor: "#ED7C10",
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#F0EFEC",
  },
  scrollView: {
    marginHorizontal: 0,
    backgroundColor: "#FFE48A",
  },
});

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sobre" component={Sobre} />
        <Stack.Screen name="História" component={História} />
        <Stack.Screen name="RA" component={RA} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
