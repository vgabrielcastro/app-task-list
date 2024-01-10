import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";
import { Home } from "./src/screens/home";
import { useFonts } from "@expo-google-fonts/poppins";
import * as Updates from "expo-updates";

export default function App() {
  const [fontsLoaded] = useFonts({
    Aller_Std_Bold: require("./assets/fonts/Aller/Aller_Std_Bold.ttf"),
    Aller_Std_Light: require("./assets/fonts/Aller/Aller_Std_Light.ttf"),
    Aller_Std_Regular: require("./assets/fonts/Aller/Aller_Std_Regular.ttf"),
    Aller_Std_Italic: require("./assets/fonts/Aller/Aller_Std_Italic.ttf"),
    Aller_Std_BoldItalic: require("./assets/fonts/Aller/Aller_Std_BoldItalic.ttf"),
    Aller_Std_LightItalic: require("./assets/fonts/Aller/Aller_Std_LightItalic.ttf"),
  });

  const [isUpdateAvailable, setUpdateAvailable] = useState(false);

  useEffect(() => {
    const checkForUpdates = async () => {
      try {
        const update = await Updates.checkForUpdateAsync();
        if (update.isAvailable) {
          setUpdateAvailable(true);
          // Atualização disponível, você pode mostrar uma mensagem ao usuário se desejar.
        }
      } catch (error) {
        console.error("Erro ao verificar atualizações:", error);
      }
    };

    checkForUpdates();
  }, []);

  const handleUpdate = async () => {
    try {
      await Updates.fetchUpdateAsync();
      // Atualização baixada, pronto para recarregar o aplicativo
      await Updates.reloadAsync();
    } catch (error) {
      console.error("Erro ao baixar e recarregar a atualização:", error);
    }
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Home />

      {isUpdateAvailable && (
        <button onClick={handleUpdate}>
          Uma atualização está disponível. Clique para atualizar.
        </button>
      )}
    </ThemeProvider>
  );
}
