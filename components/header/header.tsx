import { Image, View, Text ,StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Header =()=> {
  return (
    <View style={styles.header}>
      <Image
        style={styles.image}
        source={require("../../assets/images/adaptive-icon.png")}
        resizeMode='cover'
      />
      <Text style={styles.text}>HirEdge</Text>
      <Image
        style={styles.image}
        source={require("../../assets/images/adaptive-icon.png")}
        resizeMode='cover'
      />
    
    </View>
  )
}
const styles = StyleSheet.create({
    header: {
    position: 'relative',
    height: 60,
    backgroundColor: 'darkslateblue',
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'space-between'
    },
  
    image: {
      width: 100,
      height: 60,
    },
  
    text: {
      color: '#FFF',
      fontSize: 43, 
      textAlign: 'center',
    }
  })

export default Header;