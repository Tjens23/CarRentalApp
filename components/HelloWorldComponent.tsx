import {Text, View} from "react-native";

interface HelloWorldProps {
    text: string;
    name: string;
}

export function HelloWorldComponent(props: HelloWorldProps) {
    return (
        <View>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{props.text}, {props.name}!</Text>
        </View>
    )
}