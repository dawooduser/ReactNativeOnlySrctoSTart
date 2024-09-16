import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { authScreen } from '../../screens';
import CustomBottomBar from './CustomBottomBar';
import { SafeAreaView } from 'react-native';

const Tab = createBottomTabNavigator();
const { Dashboard, Notification, UserProfile, MyCart } = authScreen

function MyTabs() {
    return (
        <SafeAreaView
            style={{ flex: 1 }} 
            // edges={["right", "top", "left"]}
        >
        <Tab.Navigator 
        screenOptions={{ headerShown: false }}
        tabBar={props => <CustomBottomBar {...props} />}>
            {Object.keys({ Dashboard, Notification, MyCart, UserProfile }).map((val, index) =>
                <Tab.Screen key={index} name={val} component={authScreen[val]} />
            )}
        </Tab.Navigator>
        </SafeAreaView>
    );
}
export default MyTabs