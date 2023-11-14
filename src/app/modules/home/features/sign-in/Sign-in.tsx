import { AbsoluteCenter, Box, Button, Center, Heading, Input, Stack, useToast } from '@chakra-ui/react';
import { FormEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { SignInProps } from './models/sign-in.props';
import { LocalStorageUtils } from '../../../../shared/utils/local-storage.utils';
import { LocalStorageKeys } from '../../../../../config/local-storage.config';
import { SignInResponse } from '../../../../shared/providers';

export function SignIn({ authProvider }: SignInProps) {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();
  const [t] = useTranslation();
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const isLogged = LocalStorageUtils.getItem(LocalStorageKeys.ACCESS_TOKEN);
    if (isLogged) {
      navigate('/private');
    }
  }, []);

  async function onSubmitSignIn(event: FormEvent<HTMLFormElement>) {
    setLoading(true);
    event.preventDefault();
    const signInResponse = await authProvider.signIn({ username: email, password });
    signInResponse.error ? onSignInError() : onSignInSuccess(signInResponse);
    setLoading(false);
  }

  function onSignInError() {
    toast({
      title: t('sign-in.login'),
      description: t('sign-in.loginError'),
      status: 'error',
      duration: 9000,
      isClosable: true,
    });
  }

  function onSignInSuccess(signInResponse: SignInResponse) {
    LocalStorageUtils.setItem(LocalStorageKeys.ACCESS_TOKEN, signInResponse.accessToken);
    LocalStorageUtils.setItem(LocalStorageKeys.REFRESH_TOKEN, signInResponse.refreshToken);
    toast({
      title: t('sign-in.login'),
      description: t('sign-in.loginSuccess'),
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
    navigate('/private');
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
            <Heading>{t('sign-in.login')}</Heading>
          </Center>
        </Box>
        <Box>
          <form onSubmit={onSubmitSignIn}>
            <Stack spacing={3}>
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
              <Button variant="solid" mt="4" type="submit" isLoading={isLoading}>
                {t('sign-in.loginButton')}
              </Button>
            </Stack>
          </form>
        </Box>
        <Box>
          <Link to="sign-up">{t('sign-in.notAccount')}</Link>
        </Box>
      </AbsoluteCenter>
    </Box>
  );
}
