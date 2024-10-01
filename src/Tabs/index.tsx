import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TEMAS } from "../estilos/temas";
import Consulta from "./Consulta";
import Perfil from "./Perfil";
import Principal from "./Principal";
import Remedios from "./Remedios";

const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarStyle: {
        backgroundColor: TEMAS.colors.darkGreen,
    },
    tabBarActiveTintColor: TEMAS.colors.lightBlue,
    tabBarInactiveTintColor: TEMAS.colors.white,
};

const tabsInfo = [
    {
        name: 'Principal',
        component: Principal, // Corrigido para referenciar o componente
        icon: 'home',
    },
    {
        name: 'Consultas',
        component: Consulta, // Corrigido para referenciar o componente
        icon: 'calendar',
    },
    {
        name: 'Remédios',
        component: Remedios, // Corrigido para referenciar o componente
        icon: 'medkit',
    },
    {
        name: 'Perfil',
        component: Perfil, // Corrigido para referenciar o componente
        icon: 'person',
    },
];

export default function Tabs() {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            {tabsInfo.map((tab, index) => (
                <Tab.Screen
                    key={tab.name} // Sempre adicione uma key ao mapear arrays
                    name={tab.name}
                    component={tab.component}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name={tab.icon} color={color} size={size} />
                        ),
                    }}
                />
            ))}
        </Tab.Navigator>
    );
}
