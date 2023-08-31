import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Padding, Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const InfoPage4 = () => {
  return (
    <View style={styles.infoPage4}>
      <Text style={styles.loginToEnter}>{`Login To Enter The Placement
Drives of SDMCET and Kick-Start
Your Career`}</Text>
      <Image
        style={styles.infoPage4Child}
        resizeMode="cover"
        source={require("../../../assets/rectangle-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  frameLayout: {
    height: 11,
    width: 10,
  },
  sdmcetsWrapperFlexBox: {
    justifyContent: "center",
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_4xl,
    borderRadius: Border.br_xl,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  sdmcetsTypo: {
    fontSize: FontSize.size_lgi,
    textAlign: "center",
    fontFamily: FontFamily.sairaSemiCondensedMedium,
    fontWeight: "500",
  },
  loginToEnter: {
    marginLeft: -141,
    top: 29,
    fontSize: FontSize.size_xl,
    lineHeight: 26,
    width: 280,
    textAlign: "center",
    fontFamily: FontFamily.sairaSemiCondensedMedium,
    fontWeight: "500",
    color: Color.black,
    left: "50%",
    position: "absolute",
  },
  infoPage4Child: {
    marginLeft: -114,
    top: 136,
    width: 228,
    height: 256,
    left: "50%",
    position: "absolute",
  },
  frameItem: {
    marginLeft: 4,
  },
  ellipseParent: {
    flexDirection: "row",
  },
  infoPage4Inner: {
    marginLeft: -26,
    top: 421,
    flexDirection: "row",
    left: "50%",
  },
  loginToSdmcets: {
    color: Color.black,
    fontSize: FontSize.size_lgi,
  },
  loginToSdmcetsHireedgeWrapper: {
    backgroundColor: Color.buttonColor,
  },
  registerToSdmcets: {
    color: Color.white,
  },
  registerToSdmcetsHireedgeWrapper: {
    backgroundColor: Color.blackApp,
    marginTop: 24,
    width: 280,
  },
  frameParent: {
    top: 477,
    left: 47,
  },
  infoPage4: {
    backgroundColor: Color.yellowBackground,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default InfoPage4;
