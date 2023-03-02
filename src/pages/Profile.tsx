import { Text, View, Button } from "react-native";
import * as React from "react";
import { useAuthentication } from "../lib/useAuth";
import { auth, googleAuthProvider } from "../lib/firebase";
import {
  signInWithPopup,
  getAuth,
  GoogleAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import * as Google from "expo-auth-session/providers/google";

export function ProfileScreen() {
  const { user } = useAuthentication();
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: "jaguarpics-82abd.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const auth = getAuth();
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {user ? (
        <Text>Bla</Text>
      ) : (
        <Button
          title="Fazer login"
          onPress={() => {
            promptAsync();
          }}
        />
      )}
    </View>
  );
}
