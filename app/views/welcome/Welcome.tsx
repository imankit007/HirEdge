import React from 'react'

import { View, Text, Dimensions, TouchableOpacity, StyleSheet, Image, Animated, FlatList } from 'react-native'
import InfoPage1 from './screens/InfoPage1';
import InfoPage2 from './screens/InfoPage2';
import InfoPage3 from './screens/InfoPage3';
import InfoPage4 from './screens/InfoPage4';
import { FontSize, Color, FontFamily, Padding, Border } from './GlobalStyles';
import { useSelector, useDispatch } from 'react-redux';
import { selectWelcomePageIndex, setvalue } from '../../features/welcomePageIndexSlice';
import Carousel, { Pagination } from 'react-native-snap-carousel';


function _renderItem({ item, index }: { item: any, index: Number }) {
    return (
        <View style={{
            height: '100%',
        }}>{item}
        </View>
    )
}

const Welcome = () => {
    const welcomeSlides = [<InfoPage1 />, <InfoPage2 />, <InfoPage3 />, <InfoPage4 />]
    const isCarousel = React.useRef(null)
    const index = useSelector(selectWelcomePageIndex);
    const dispatch = useDispatch();
    const width = Dimensions.get("screen").width;
    const height = Dimensions.get('screen').height;


    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            backgroundColor: '#FFC436',
            alignItems: 'center',
            height: height,
        }}>
            <Carousel
                layout='tinder'
                layoutCardOffset={9}
                ref={isCarousel}
                data={welcomeSlides}
                renderItem={_renderItem}
                sliderWidth={width}
                itemWidth={width}
                inactiveSlideShift={0}
                useScrollView={true}
                containerCustomStyle={{
                    flexGrow: 0,
                    height: height * 0.7,
                    marginBottom: 0,
                    borderStyle: 'solid',
                    borderWidth: 1.0,
                    borderColor: 'black',
                }}
                loop
                firstItem={0}
                onSnapToItem={(index) => dispatch(setvalue(index))}
            />
            <Pagination
                dotsLength={welcomeSlides.length}
                activeDotIndex={index}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.92)',
                    borderStyle: 'solid',
                    borderWidth: 1.0,
                    borderColor: 'black',
                }}
                activeOpacity={1}
                dotContainerStyle={{
                    width: 10,
                    height: 0,
                    margin: 0,

                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
            <View style={{
                backgroundColor: "#FFC436",
                justifyContent: 'center',
                flex: 1,
                width: width * 0.95,
                margin: '1%',
                borderRadius: 20,
                borderStyle: 'solid',
                borderWidth: 1.0,
                borderColor: 'black',
                gap: 10,
            }}>
                <View style={{
                    justifyContent: 'center',
                    borderStyle: 'solid',
                    borderWidth: 1.0,
                    borderColor: 'black',
                    alignItems: 'center',
                    borderRadius: 20,
                    paddingVertical: 2,
                    paddingHorizontal: 0,

                }}>
                    <Text style={{
                        color: 'blue',
                        fontSize: FontSize.size_xl
                    }}>{`Register To SDMCET’s HireEdge`}</Text>
                </View>
                <View style={{
                    justifyContent: 'center',
                    borderStyle: 'solid',
                    borderWidth: 1.0,
                    borderColor: 'black',
                    alignItems: 'center',
                    borderRadius: 20,
                    paddingVertical: 2,
                    paddingHorizontal: 0,
                }}><Text style={{
                    color: 'blue',
                    fontSize: FontSize.size_xl,
                }}>{`Login To SDMCET’s HireEdge`}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    registerTypo: {
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
    frameParentFlexBox: {
        alignItems: "center",
        position: "absolute",
    },
    registerToSdmcets: {
        color: Color.white,
    },
    registerToSdmcetsHireedgeWrapper: {
        backgroundColor: Color.blackApp,
        marginTop: 24,
        width: 280,
    },
    loginToSdmcets: {
        fontSize: FontSize.size_lgi,
        color: Color.black,
    },
    loginToSdmcetsHireedgeWrapper: {
        backgroundColor: Color.buttonColor,
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
})

export default Welcome;