import React from "react";
import { Image, Text, Wrapper } from "./styles";

type Props = {
  text?: string;
  children?: React.ReactNode;
};

export function EmptyState({ text, children }: Props) {
  return (
    <Wrapper>
      <Image source={require("../../../assets/empty.png")} />
      <Text>{text ?? "Nenhum resultado encontrado"}</Text>
      {children}
    </Wrapper>
  );
}
