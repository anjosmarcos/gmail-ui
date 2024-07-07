import { Text, View } from "react-native";
import { Avatar } from './avatar';
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

export default function Email() {
    return (
    <View className="w-full flex-row gap-4">
        <Avatar source={{uri:'https://github.com/anjosmarcos.png'}}  />
        
        <View className="flex-1">
            <View className="flex-row items-center gap-1">
                <MaterialIcons name="label-important" size={16} color={colors.yellow[600]} />

                <Text className="text-lg font-subtitle text-gray-400 flex-1 ">
                    Marcos Anjos
                </Text>

                <Text className="text-sm text-gray-500 font-body">
                    07 de Jun
                </Text>
            </View>
            <Text 
                className="text-gray-400 text-base font-body"
                numberOfLines={1}
                ellipsizeMode="tail"
                >
                    Assunto do Email
                </Text>
            <View className="flex-row items-center gap-4">
                <Text 
                    className="text-gray-400 text-base font-body flex-1"
                    numberOfLines={1}
                    ellipsizeMode="tail"
                >
                    Essa e mesangem do email
                </Text>

                <MaterialIcons name="star" size={22} color={colors.blue[600]} />
            </View>
        </View>
    </View>
    )
}