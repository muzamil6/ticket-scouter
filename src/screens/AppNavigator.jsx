import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import GetStarted from './GetStarted/GetStarted';
import { Easing } from "react-native-reanimated";
import SignIn from './SignIn/SignIn';
import ChooseLocation from './ChooseLocation/ChooseLocation';
import ChooseLocationMap from './ChooseLocationMap/ChooseLocationMap';
import CreateAccount from './CreateAccount/CreateAccount';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import CreateNewPassword from './CreateNewPassword/CreateNewPassword';
import Otp from './OTP/Otp';
import ChooseInterests from './ChooseInterests/ChooseInterests';
import Home from './Home/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon5 from 'react-native-vector-icons/MaterialCommunityIcons';
import User from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Favourites from './Favourites/Favourites';
import Ticket from './Ticket/Ticket';
import Explore from './Explore/Explore';
import Search from './Search/Search';
import TicketCalendar from './TicketCalendar/TicketCalendar';
import SearchMap from './SearchMap/SearchMap';
import ViewTicket from './ViewTicket/ViewTicket';
import TicketPreview from './TicketPreview/TicketPreview';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import LegalPolicy from './LegalPolicy/LegalPolicy';
import GetTicket from './GetTicket/GetTicket';
import HelpSupport from './HelpSupport/HelpSupport';
import ContactInformation from './ContactInformation/ContactInformation';
import Security from './Security/Security';
import Notifications from './Notifications/Notifications';
import Language from './Language/Language';
import DetailOrder from './DetailOrder/DetailOrder';
import Profile from './Profile/Profile';
import AddNewCard from './AddNewCard/AddNewCard';
import ProfileMain from './ProfileMain/ProfileMain';
import TicketProfile from './TicketProfile/TicketProfile';
import PriceComparison from './PriceComparison/PriceComparison';
import PickPlan from './PickPlan/PickPlan';
import TicketAlert from './TicketAlert/TicketAlert';
import SeatSelection from './SeatSelection/SeatSelection';
import NotificationsScreen from './NotificationsScreen/NotificationsScreen';
import YourCard from './YourCard/YourCard';
import homeIcon from '../assets/Icons/home.png'

global.backendUrl = "http://192.168.18.5:3333"
export default function AppNavigator() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  function MyTabs() {
    return (
      <Tab.Navigator screenOptions={{
        tabBarStyle: {
          paddingBottom: 10,
          paddingTop: 6,
          height: 65,
        },
        tabBarLabelStyle: {
          fontSize: 13,
          paddingTop: 1,
          fontWeight: "500"
        },
      }}>
        <Tab.Screen name="HomeTab" component={Home} options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="envelope-open" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="Explore" component={Explore} options={{
          tabBarLabel: 'Explore',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon2 name="search" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="Favourite" component={Favourites} options={{
          tabBarLabel: 'Favourite',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="Ticket" component={Ticket} options={{
          tabBarLabel: 'Ticket',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon5 name="ticket-confirmation-outline" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="ProfileMain" component={ProfileMain} options={{
          tabBarLabel: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <User name="person-outline" color={color} size={size} />
          ),
        }} />
      </Tab.Navigator>
    );
  }


  const config = {
    animation: 'timing',
    config: {
      stiffness: 1000,
      damping: 50,
      mass: 3,
      overshootClamping: false,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01
    }
  }

  const closeConfig = {
    animation: "timing",
    config: {
      duration: 200,
      easing: Easing.linear
    }
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        gestureEnabled: true,
        transitionSpec: {
          open: config,
          close: closeConfig
        },
        animationEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        cardStyle: { elevation: 20 },
        cardShadowEnabled: true,
      }}
      >
        <Stack.Screen name="GetStarted" component={GetStarted} options={() => ({ headerShown: false })} />
        <Stack.Screen name="ChooseLocation" component={ChooseLocation} options={() => ({ headerShown: false })} />
        <Stack.Screen name="ChooseLocationMap" component={ChooseLocationMap} options={() => ({ headerShown: false })} />
        <Stack.Screen name='Forgot Password' component={ForgotPassword} options={() => ({ headerShown: false })} />
        <Stack.Screen name='Create New Password' component={CreateNewPassword} options={() => ({ headerShown: false })} />
        <Stack.Screen name='Create Account' component={CreateAccount} options={() => ({ headerShown: false })} />
        <Stack.Screen name="ChooseInterests" component={ChooseInterests} options={() => ({ headerShown: false })} />
        <Stack.Screen name="SignIn" component={SignIn} options={() => ({ headerShown: false })} />
        <Stack.Screen name="OTP" component={Otp} options={() => ({ headerShown: false })} />
        <Stack.Screen name="Home" component={MyTabs} options={() => ({ headerShown: false })} />
        <Stack.Screen name="Search" component={Search} options={() => ({ headerTitleAlign: 'center', headerStyle: { backgroundColor: '#f6f6f6' } })} />
        <Stack.Screen name="Calendar" component={TicketCalendar} options={() => ({ headerTitleAlign: 'center' })} />
        <Stack.Screen name="SearchMap" component={SearchMap} options={() => ({ headerShown: false })} />
        <Stack.Screen name="ViewTicket" component={ViewTicket} options={() => ({ headerShown: false })} />
        <Stack.Screen name="GetTicket" component={GetTicket} options={() => ({ headerTitleAlign: 'center', headerStyle: { backgroundColor: '#f6f6f6' } })} />
        <Stack.Screen name="TicketView" component={TicketPreview} options={() => ({ headerTitleAlign: 'center' })} />
        <Stack.Screen name="PersonalInfo" component={PersonalInfo} options={() => ({ headerShown: false })} />
        <Stack.Screen name="LegalPolicy" component={LegalPolicy} options={() => ({ headerShown: false })} />
        <Stack.Screen name="Help Support" component={HelpSupport} options={() => ({ headerShown: false })} />
        <Stack.Screen name="Contact Information" component={ContactInformation} options={() => ({ headerTitleAlign: 'center', headerStyle: { backgroundColor: '#f6f6f6' } })} />
        <Stack.Screen name="Security" component={Security} options={() => ({ headerShown: false })} />
        <Stack.Screen name="Notifications" component={Notifications} options={() => ({ headerShown: false })} />
        <Stack.Screen name="Language" component={Language} options={() => ({ headerShown: false })} />
        <Stack.Screen name="Profile" component={Profile} options={() => ({ headerShown: false })} />
        <Stack.Screen name="Detail Order" component={DetailOrder} options={() => ({ headerTitleAlign: 'center', headerStyle: { backgroundColor: '#f6f6f6' } })} />
        <Stack.Screen name="Add New Card" component={AddNewCard} options={() => ({ headerTitleAlign: 'center', headerStyle: { backgroundColor: '#f6f6f6' } })} />
        <Stack.Screen name="TicketProfile" component={TicketProfile} options={() => ({ headerShown: false })} />
        <Stack.Screen name="Price Comparison" component={PriceComparison} options={() => ({ headerShown: false })} />
        <Stack.Screen name="Pick you plan" component={PickPlan} options={() => ({ headerShown: false })} />
        <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} options={() => ({ headerShown: false })} />
        <Stack.Screen name="Ticket alert" component={TicketAlert} options={() => ({ headerTitleAlign: 'center', headerStyle: { backgroundColor: '#f6f6f6' } })} />
        <Stack.Screen name="Seat Selection" component={SeatSelection} options={() => ({ headerTitleAlign: 'center', headerStyle: { backgroundColor: '#f6f6f6' } })} />
        <Stack.Screen name="Your Card" component={YourCard} options={() => ({ headerTitleAlign: 'center', headerStyle: { backgroundColor: '#f6f6f6' } })} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

