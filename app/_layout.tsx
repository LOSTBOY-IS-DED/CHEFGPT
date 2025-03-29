import { useFonts } from 'expo-font';
import { Stack } from "expo-router";

export default function RootLayout() {

    const [loaded , isLoaded] = useFonts({
        'outfit': require('./../assets/fonts/Outfit-Regular.ttf'),
        'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf'),
    })

    return <Stack />;
}
