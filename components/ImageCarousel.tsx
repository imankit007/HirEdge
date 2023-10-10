import { FC } from 'react';
import { Dimensions, View, StyleSheet, FlatList, Image, Text } from 'react-native';

interface ImageCaraouselProps {
    data: ImageCarouselItem[]
}

const width = Dimensions.get('window').width;
const ITEM_LENGTH = width * 0.8;
const SPACING = 5;
const BORDER_RADIUS = 20;
const ImageCarousel: FC<ImageCaraouselProps> = ({ data }) => {



    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item, index }) => (
                    <View style={{ width: width * 0.8 }}>
                        <View style={styles.itemContent}>
                            <Image source={{ uri: item.uri }} style={styles.itemImage} />
                            <Text style={styles.itemText} numberOfLines={1}>
                                {item.title}
                            </Text>
                        </View>
                    </View>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.title}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
    },
    itemContent: {
        marginHorizontal: SPACING * 3,
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: BORDER_RADIUS + SPACING * 2,
    },
    itemText: {
        fontSize: 24,
        position: 'absolute',
        bottom: SPACING * 2,
        right: SPACING * 2,
        color: 'black',
        fontWeight: '600',
    },
    itemImage: {
        width: '100%',
        height: ITEM_LENGTH,
        borderRadius: BORDER_RADIUS,
        resizeMode: 'cover',
    },
});

export default ImageCarousel;