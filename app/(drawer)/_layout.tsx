import CustomDrawer from "@/components/shared/CustomDrawer";
import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import React from "react";

const DrawerLayout = () => {
    return (
        <Drawer
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                overlayColor: "rgba(0,0,0,0.5)",
                drawerActiveTintColor: "indigo",
                headerShadowVisible: false,
                sceneContainerStyle: { backgroundColor: "white" },
            }}
        >
            <Drawer.Screen
                name="(tabs)" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: "Tabs + Stack",
                    title: "Tabs + Stack",
                }}
            />
            <Drawer.Screen
                name="user/index" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: "User",
                    title: "Usuarios",
                }}
            />
            <Drawer.Screen
                name="schedule/index" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: "Schedule",
                    title: "Horarios",
                    drawerIcon: ({ color, size }) => (
                        <Ionicons
                            size={size}
                            name="calendar-outline"
                            color={color}
                        />
                    ),
                }}
            />
        </Drawer>
    );
};

export default DrawerLayout;
