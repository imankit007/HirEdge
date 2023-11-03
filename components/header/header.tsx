import { Image, View, Text ,StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Header =()=> {
  return (
    <View style={styles.header}>
      <Image
        style={styles.image}
        source={require("../../assets/images/HirEdge-removebg-preview.png")}
        resizeMode='cover'
      />
      {/* <Text style={styles.text}>HirEdge</Text> */}
      <Image
        style={styles.image_sdm}
        source={require("../../assets/images/sdmcet-j.png")}
        resizeMode='cover'
      />
    </View>
  )
}
const styles = StyleSheet.create({
    header: {
    position: 'relative',
    height: 90,
    backgroundColor: 'darkslateblue',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    },
  
    image: {
    width: 150,
    height: 190,
    marginLeft: 15
  },

  image_sdm: {
    width: 50,
    height: 70,
    marginRight: 25
    },
  
    text: {
      color: '#FFF',
      fontSize: 43, 
      textAlign: 'center',
    }
  })

export default Header;