import { AbsoluteCenter, Box, Button, Center, Heading, Input, Stack, useToast } from '@chakra-ui/react';
import { FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { autoRepairApiAuthRepository } from '../../../../shared/repositories/auto-repair-api';

export function SignUp() {
  const toast = useToast();
  const [t] = useTranslation();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  async function onSubmitSignUp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const passCoincidence = checkPasswordCoincidence(password, confirmPassword);
    if (passCoincidence) {
      const signUpResponse = await autoRepairApiAuthRepository().signUp({ email, name, surname, password });
      signUpResponse.error ? onSignUpError() : onSignUpSuccess();
    } else {
      onPassCoincidenceError();
    }
  }

  function onSignUpError() {
    toast({
      title: t('sign-up.register'),
      description: t('sign-up.registerError'),
      status: 'error',
      duration: 9000,
      isClosable: true,
    });
  }

  function onSignUpSuccess() {
    toast({
      title: t('sign-up.register'),
      description: t('sign-up.registerSuccess'),
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
    navigate('/');
  }

  function onPassCoincidenceError() {
    toast({
      title: t('sign-up.register'),
      description: t('sign-up.registerPassError'),
      status: 'error',
      duration: 9000,
      isClosable: true,
    });
  }

  function checkPasswordCoincidence(pass: string, confirmPass: string) {
    return pass === confirmPass;
  }

  return (
    <Box h="100%">
      <AbsoluteCenter maxWidth={500} minWidth={300}>
        <Box pb={50}>
          <Box px={4} py={2} borderWidth={2} borderColor="black">
            <Center>
              <Heading as="h3" size="lg">
                auto-repair
              </Heading>
            </Center>
          </Box>
        </Box>
        <Box pb={50}>
          <Center>
            <Heading>{t('sign-up.register')}</Heading>
          </Center>
        </Box>
        <Box>
          <form onSubmit={onSubmitSignUp}>
            <Stack spacing={3}>
              <Input placeholder={t('sign-up.name')} value={name} onChange={(event) => setName(event.target.value)} />
              <Input
                placeholder={t('sign-up.surname')}
                value={surname}
                onChange={(event) => setSurname(event.target.value)}
              />
              <Input
                placeholder={t('sign-up.email')}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <Input
                placeholder={t('sign-up.password')}
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <Input
                placeholder={t('sign-up.confirmPassword')}
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
              <Button variant="solid" mt={4} type="submit">
                {t('sign-up.register')}
              </Button>
            </Stack>
          </form>
        </Box>
        <Box>
          <Link to="/">{t('sign-up.alreadyAccount')}</Link>
        </Box>
      </AbsoluteCenter>
    </Box>
  );
}
