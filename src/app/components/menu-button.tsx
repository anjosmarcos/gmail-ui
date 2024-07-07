import { Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

export function MenuButton() {
    return <Pressable >
        <MaterialIcons name="menu" size={24} color={colors.write} />
    </Pressable>
}