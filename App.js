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
    <SafeAreaView style={styles.container}>
       <ScrollView style={styles.scrollView}>
       <Image
          source={require("./assets/sobreee.png")}
          style={{
            width: 300,
            height: 430,
            marginTop: 10,
            alignSelf: "center",
          }}
        />
         <Image
          source={require("./assets/fundo.png")}
          style={{
            width: 400,
            height: 400,
            marginTop: -140,
            alignSelf: "center",
          }}
        />
      
      <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: "#DF571D",
            marginTop: 20,
            width: 132,
            height: 50,
            borderRadius: 18,
            paddingHorizontal: 38,
            marginVertical: 20,
            paddingVertical: 15,
            backgroundColor: "#DF571D",
            alignSelf: "center",
            borderWidth: 2,
          }}
        >
          <Text style={{ color: "#FFF", textAlign: "center" }}>VOLTAR</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
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
            marginTop: -40,
            alignSelf: "center",
          }}
        />
        <Image
          source={require("./assets/cont.png")}
          style={{
            width: 350,
            height: 450,
            marginTop: -70,
            alignSelf: "center",
          }}
        />
        <Text
          style={{ textAlign: "center", marginHorizontal: 35, marginTop: -90 }}>
          A arte contemporânea é um movimento vasto e diversificado que abrange uma ampla gama de estilos, técnicas e ideias. Surgiu no final do século 20 e continua a evoluir até hoje. Caracterizada por sua natureza experimental e conceitual, a arte contemporânea desafia as convenções tradicionais e busca explorar questões sociais, políticas e culturais. Utiliza uma variedade de mídias, incluindo pintura, escultura, instalação, vídeo e performance. Muitas vezes, enfatiza a expressão individual, o engajamento com o público e a reflexão crítica sobre o mundo moderno. Artistas contemporâneos frequentemente buscam romper fronteiras entre disciplinas e provocar novas formas de pensamento e percepção.
        </Text>
        <Image
          source={require("./assets/pessoas.png")}
          style={{
            width: 250,
            height: 400,
            marginTop: -0,
            alignSelf: "center",
          }}
        />

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: "#DF571D",
            marginTop: 20,
            width: 132,
            height: 50,
            borderRadius: 18,
            paddingHorizontal: 38,
            marginVertical: 20,
            paddingVertical: 15,
            backgroundColor: "#DF571D",
            alignSelf: "center",
            borderWidth: 2,
          }}
        >
          <Text style={{ color: "#FFF", textAlign: "center" }}>VOLTAR</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function RA({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image
          source={require("./assets/raaa.png")}
          style={{
            width: 500,
            height: 400,
            marginTop: 50,
            alignSelf: "center",
          }}
        />
        <Text
          style={{ textAlign: "center", marginHorizontal: 35, marginTop: -330 }}
        >
          A realidade aumentada (RA) na arte é uma forma inovadora de combinar o mundo digital com o mundo físico, permitindo que os artistas criem experiências imersivas e interativas para o público. Na RA artística, elementos virtuais são sobrepostos ao ambiente real, geralmente visualizados através de dispositivos como smartphones, tablets ou óculos especiais.
           Isso possibilita novas formas de contar histórias, explorar narrativas multidimensionais e desafiar as percepções tradicionais da arte. 
       
           </Text>
           <Image
          source={require("./assets/mulher.png")}
          style={{
            width: 350,
            height: 450,
            marginTop: -110,
            alignSelf: "center",
          }}
        />
        <Text style={{ textAlign: "center", marginHorizontal: 35, marginTop: -130 }}>
        Alguns artistas usam robôs para criar obras de arte. Por exemplo, o artita Patrick Tresset desenvolveu robôs capazes de desenhar retratos realistas de pessoas. Patrick Tresset é um artista francês conhecido por sua exploração da interseção entre arte e inteligência artificial. Ele desenvolveu um projeto chamado "Paul the Robot", que é capaz de criar retratos realistas de pessoas. O projeto utiliza técnicas de visão computacional e algoritmos de aprendizado de máquina para permitir que o robô desenhe retratos a carvão em grandes folhas de papel.
        </Text>
        <Image
          source={require("./assets/robo.png")}
          style={{
            width: 350,
            height: 450,
            marginTop: -70,
            alignSelf: "center",
          }}
        />
        <Text style={{ textAlign: "center", marginHorizontal: 35, marginTop: -105 }}>
        Alguns museus e galerias brasileiros têm incorporado a RA em suas exposições para oferecer aos visitantes uma experiência mais envolvente e interativa. Por exemplo, o Museu de Arte Moderna de São Paulo (MAM-SP) já realizou exposições que incluíam elementos de RA para complementar as obras de arte em exibição.
        </Text>
        <Image
          source={require("./assets/brasil.png")}
          style={{
            width: 350,
            height: 450,
            marginTop: -70,
            alignSelf: "center",
          }}
        />
        <Text style={{ textAlign: "center", marginHorizontal: 35, marginTop: -105 }}>
        Outro ponto interessante é que, mesmo em um ano atípico, as tecnologias continuaram a receber investimentos. É o caso da RA, com mais de 2 milhões de dólares em financiamentos ao redor do globo, segundo a ABI Research.
        </Text>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: "#DF571D",
            marginTop: 20,
            width: 132,
            height: 50,
            borderRadius: 18,
            paddingHorizontal: 38,
            marginVertical: 20,
            paddingVertical: 15,
            backgroundColor: "#DF571D",
            alignSelf: "center",
            borderWidth: 2,
          }}
        >
          <Text style={{ color: "#FFF", textAlign: "center" }}>VOLTAR</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
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
