import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const InfoPage3 = () => {
  return (
    <View style={styles.infoPage3}>
      <Text style={[styles.giveInsightsTo, styles.giveInsightsToTypo]}>
        Give Insights to Students By Reviewing Your Company. Your Reviews
        Matter!
      </Text>
      <Text style={[styles.hiredgeForCollege, styles.loginToSdmcetsTypo]}>
        HirEdge For College Alumni
      </Text>
      <Image
        style={[styles.infoPage3Child, styles.frameParentPosition]}
        resizeMode="cover"
        source={require("../../../assets/rectangle-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  giveInsightsToTypo: {
    textAlign: "center",
    fontFamily: FontFamily.sairaSemiCondensedMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lgi,
  },
  loginToSdmcetsTypo: {
    color: Color.black,
    textAlign: "center",
    fontFamily: FontFamily.sairaSemiCondensedMedium,
    fontWeight: "500",
  },
  frameLayout: {
    height: 11,
    width: 10,
  },
  frameParentPosition: {
    left: 40,
    position: "absolute",
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
  giveInsightsTo: {
    marginLeft: -156,
    top: 337,
    color: Color.blackApp,
    width: 311,
    height: 50,
    left: "50%",
    position: "absolute",
  },
  hiredgeForCollege: {
    marginLeft: -112,
    top: 31,
    fontSize: FontSize.size_xl,
    lineHeight: 26,
    left: "50%",
    position: "absolute",
  },
  frameItem: {
    marginLeft: 4,
  },
  ellipseParent: {
    flexDirection: "row",
  },
  infoPage3Inner: {
    top: 426,
    left: 154,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  infoPage3Child: {
    top: 70,
    height: 250,
    width: 280,
  },
  loginToSdmcets: {
    fontSize: FontSize.size_lgi,
    color: Color.black,
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
    top: 480,
    alignItems: "center",
  },
  infoPage3: {
    backgroundColor: Color.yellowBackground,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default InfoPage3;
