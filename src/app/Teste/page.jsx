import React, { useState } from 'react';
import { FormControl, Input, Button, Link, Box, Image, Text } from 'native-base';
import Logo from './assets/Logo.png';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState(null);

  const postRequest = async () => {
    try {
      const response = await fetch('https://apiteste.pagekite.me/Usuario/LoginUsuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Adicione quaisquer outros headers necessários
        },
        body: JSON.stringify({
          emailUser: username,
          senha: password,
        }),
      });

      if (response.ok) {
        console.log('Usuário logado com sucesso!');
      } else {
        console.log('Erro ao fazer login:', response.status);
      }
    } catch (error) {
      console.error('Erro ao fazer requisição POST:', error);
    }
  };

  return (
    <Box flex={1} alignItems="center" justifyContent="center" padding={5}>
      <Image source={Logo} alt="Logo Voll" />

      <Box>
        <FormControl marginTop={3}>
          <FormControl.Label>Email</FormControl.Label>
          <Input
            placeholder="Insira seu email"
            size="lg"
            width="100%"
            borderRadius="lg"
            backgroundColor="gray.100"
            shadow={1}
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </FormControl>
        <FormControl marginTop={3}>
          <FormControl.Label>Senha</FormControl.Label>
          <Input
            placeholder="Insira sua senha"
            size="lg"
            width="100%"
            borderRadius="lg"
            bg="gray.100"
            shadow={3}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
        </FormControl>
      </Box>
      <Button w="100%" bg="blue.800" mt={10} borderRadius="lg" onPress={postRequest}>
        Entrar
      </Button>
      <Link href="https://www.alura.com.br" mt={2}>
        Esqueceu sua senha?
      </Link>

      <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
        <Text>Ainda não tem cadastro?</Text>
        <Button onPress={() => {}}>
          <Text color="blue.500">Faça seu cadastro</Text>
        </Button>
      </Box>
    </Box>
  );
}
