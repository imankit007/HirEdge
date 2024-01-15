
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Button } from "@rneui/base";

const OngoingDrivePanel = ({ data }: { data: DriveCardData[] }) => {

    const renderOngoingDrive = ({ item }: { item: DriveCardData }) => {

        return (
            <View style={styles.cardStyle}>
                <Text style={styles.fontStyle}>{item.company_name}</Text>
                <Text style={styles.fontStyle}>{item.job_title}</Text>
                <Text style={styles.fontStyle}>{item.job_ctc}</Text>
            </View>
        )
    }


    return (
        <View >
            <FlatList
                data={data}
                renderItem={renderOngoingDrive}
                showsHorizontalScrollIndicator
                keyExtractor={item => item._id}
                horizontal
            />
        </View>
    );
}

const styles = StyleSheet.create({
    fontStyle: {
        fontSize: 14
    },
    cardStyle: {
        borderRadius: 10,
        borderColor: '#647D87',
        borderWidth: 1
    }

})


export default OngoingDrivePanel;