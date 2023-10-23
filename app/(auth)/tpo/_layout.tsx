
import { Slot, Tabs } from 'expo-router';



const Layout = () => {


    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false
            }}
        >

            <Tabs.Screen
                name='index'
            />


        </Tabs>
    )

}

export default Layout;