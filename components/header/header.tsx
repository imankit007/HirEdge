import { Image, View, Text ,StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Header =()=> {
  return (
    <SafeAreaView style={styles.header}>
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
    
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    header: {
    position: 'relative',
    top: 0,
      height: 60,
    padding: 0,
      backgroundColor: 'darkslateblue',
      flexDirection: 'row',
      alignItems: 'center'
    },
  
    image: {
      width: 100,
      height: 60,
      marginRight: 10
    },
  
    text: {
      color: '#FFF',
      fontSize: 43, 
      flex: 1,
      textAlign: 'left',
      paddingLeft:35,
    }
  })

export default Header;