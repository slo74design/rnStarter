import React from "react";
import { Pressable, PressableProps, Text } from "react-native";

interface Props extends PressableProps {
    children: string;
    bgcolor?: "bg-slate-100" | "bg-slate-800";
    txtcolor?: "text-slate-50" | "text-slate-800";
    variant?: "contained" | "text-only";
    className?: string;
}

const CustomButton = ({
    children,
    bgcolor = "bg-slate-100",
    txtcolor = "text-slate-800",
    variant = "contained",
    className,
    onPress,
}: Props) => {
    if (variant === "text-only") {
        return (
            <Pressable className={`py-3 px-5 ${className}`} onPress={onPress}>
                <Text
                    className={`text-center text-xl font-work-regular uppercase ${txtcolor}`}
                >
                    {children}
                </Text>
            </Pressable>
        );
    }

    return (
        <Pressable
            className={`${className} py-3 px-5 rounded-md ${bgcolor} active:opacity-70 `}
            onPress={onPress}
        >
            <Text
                className={`text-center text-xl font-work-bold uppercase ${txtcolor}`}
            >
                {children}
            </Text>
        </Pressable>
    );
};

export default CustomButton;
