import ConsultationsPageAdmin from "@/app/ConsultationsPageAdmin";
import ConsultationPage from "@/app/ConsultationPage";
import HomeClient from "@/app/HomeClient";
import HomeAdmin from "@/app/HomeAdmin";
import Login from "@/app/Login";
import Register from "@/app/Register";
import UseTerms from "@/app/UseTerms";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ConsultationsPageAdmin" component={ConsultationsPageAdmin}/>
      <Stack.Screen name="HomeAdmin" component={HomeAdmin} />
      <Stack.Screen name="ConsultationPage" component={ConsultationPage} />
      <Stack.Screen name="HomeClient" component={HomeClient} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="UseTerms" component={UseTerms} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
