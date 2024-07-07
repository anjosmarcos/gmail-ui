import { Avatar } from "@/app/components/avatar";
import Email from "@/app/components/email";
import { Input } from "@/app/components/input";
import { MenuButton } from "@/app/components/menu-button";
import { View } from "react-native";

export default function Home() {
    return (
        <View className="flex-1 bg-gray-900 pt-14 p-4">
            <Input>
                <MenuButton />
                <Input.Field placeholder="Pesquisar no E-mail" />
                <Avatar source={{uri: "https://github.com/anjosmarcos.png"}} size="small" />
            </Input>

            <Email />
        </View>
    )
}