import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const InfoPage2 = () => {
  return (
    <View style={styles.infoPage2}>
      <Text style={[styles.scheduleAndManage, styles.scheduleAndManageTypo]}>
        Schedule and Manage Placement Drives Easily
      </Text>
      <Text
        style={[styles.hiredgeForTpos, styles.hiredgeForTposTypo]}
      >{`HirEdge For TPOs of 
SDMCET`}</Text>
      <Image
        style={[styles.infoPage2Child, styles.frameParentPosition]}
        resizeMode="cover"
        source={require("../../../assets/rectangle-21.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  scheduleAndManageTypo: {
    textAlign: "center",
    fontFamily: FontFamily.sairaSemiCondensedMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lgi,
  },
  hiredgeForTposTypo: {
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
    left: 41,
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
  scheduleAndManage: {
    marginLeft: -134,
    top: 342,
    color: Color.blackApp,
    width: 266,
    height: 50,
    left: "50%",
    position: "absolute",
  },
  hiredgeForTpos: {
    marginLeft: -85,
    top: 28,
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
  infoPage2Inner: {
    top: 432,
    left: 153,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  infoPage2Child: {
    top: 80,
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
    top: 476,
    alignItems: "center",
  },
  infoPage2: {
    backgroundColor: Color.yellowBackground,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
    justifyContent: 'center'
  },
});

export default InfoPage2;
