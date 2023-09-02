import { Button } from "@/components/Button";
import { Container, ContainerActionButtons, TextArea } from "@/styles/pages/home";

import TrashIconSvg from '../assets/trash-icon.svg';
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState<string>('');

  const convertToLowerCase = () => {
    setText(text.toLowerCase());
  };

  const convertToUpperCase = () => {
    setText(text.toUpperCase());
  };

  const convertToCapitalizedCase = () => {
    setText(text?.toLowerCase().replace(/(?:^|\s)\S/g, (l) => l.toUpperCase()));
  };

  const clearTextArea = () => {
    setText('');
  };

  return (
    <Container>
      <TextArea value={text} onChange={(event) => setText(event.target.value)} placeholder="Digite ou cole o conteúdo aqui" />
      <ContainerActionButtons>
        <Button onClickFunction={convertToLowerCase}>lower case</Button>
        <Button onClickFunction={convertToUpperCase}>UPPER CASE</Button>
        <Button onClickFunction={convertToCapitalizedCase}>Capitalized Case</Button>
        <Button onClickFunction={clearTextArea}>
          <Image src={TrashIconSvg} width={16} height={16} alt="" /> 
          Limpar
        </Button>
      </ContainerActionButtons>
    </Container>
  );
}