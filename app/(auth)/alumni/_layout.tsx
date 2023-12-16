import { Tabs } from "expo-router"
import { Icon } from "react-native-paper";


const Layout = () => {

    return (
        <Tabs

            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
            }}
        >
            <Tabs.Screen
                name="dashboard"
                options={{

                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: () => (<Icon source={require('../../../assets/images/icons/profile-icon.png')} size={30} />)
                }}
            />



        </Tabs>
    )
}

export default Layout;