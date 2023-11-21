
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Checkbox, TextInput, IconButton, Button } from "react-native-paper";




const FirstPage = () => {


    return (
        <ScrollView style={styles.mainContainer} contentContainerStyle={{
            rowGap: 5
        }}>
            <TextInput
                label={"Company Name"}
            />
            <Text>Branch</Text>
            <View style={{
                height: 160,
                flexWrap: 'wrap',
            }}>

                <Checkbox.Item
                    style={styles.checkboxItem}
                    label="CSE"
                    status="unchecked"
                />
                <Checkbox.Item
                    style={styles.checkboxItem}
                    label="ISE"
                    status="unchecked"
                />
                <Checkbox.Item style={styles.checkboxItem}
                    label="ECE"
                    status="unchecked"
                />
                <Checkbox.Item style={styles.checkboxItem}
                    label="Civil"
                    status="unchecked"
                />
                <Checkbox.Item style={styles.checkboxItem}
                    label="EEE"
                    status="unchecked"
                /><Checkbox.Item style={styles.checkboxItem}
                    label="Mechanical"
                    status="unchecked"
                /><Checkbox.Item style={styles.checkboxItem}
                    label="Chemical"
                    status="unchecked"
                />
            </View>
            <Text>Eligibility</Text>
            <View style={{
                flexDirection: 'row'
            }}>
                <Checkbox.Item
                    label="B.E."
                    status="unchecked"
                />
                <IconButton icon={"minus"} mode="outlined" />
                <TextInput
                    label={"Percentage"}
                    value={"70"} editable={false}
                />
                <IconButton icon={"plus"} mode="outlined" />
            </View>
            <View style={{
                flexDirection: 'row'
            }}>
                <Checkbox.Item
                    label="12th"
                    status="unchecked"
                />
                <IconButton icon={"minus"} mode="outlined" />
                <TextInput
                    label={"Percentage"}
                    value={"70"} editable={false}
                />
                <IconButton icon={"plus"} mode="outlined" />
            </View>
            <View style={{
                flexDirection: 'row'
            }}>
                <Checkbox.Item
                    label="10th"
                    status="unchecked"
                />
                <IconButton icon={"minus"} mode="outlined" />
                <TextInput
                    label={"Percentage"}
                    value={"70"}
                    editable={false}
                />
                <IconButton icon={"plus"} mode="outlined" />
            </View>
            <Text> Job Description</Text>
            <TextInput
                label={"Job Description"}
            />
            <Button mode="contained" style={{ position: 'relative', bottom: 0 }}>Submit</Button>
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        height: "100%",
        flex: 1,
    },
    checkboxItem: {
        width: '50%',
        margin: 0,
        padding: 0,
        maxHeight: 40,
        maxWidth: 160
    }
})

export default FirstPage;