import { Trans } from 'next-i18next';
import { Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';

import { useModalActions } from '@packages/features/modal-context';
import { Illustration } from '@packages/components/icons';
import { useI18n } from '@packages/utils/i18n-react';

import Section from './Section';

export default function CallToActionSection() {
  const { open } = useModalActions();
  const { t } = useI18n('callToAction');
  return (
    <Section py="10rem">
      <Stack textAlign="center" align="center" spacing={{ base: 8, md: 10 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl' }}
          lineHeight="110%"
        >
          <Trans
            i18nKey={t`title`}
            components={{
              span: <Text as="span" color="purple.400" />,
            }}
          />
        </Heading>
        <Text color="gray.500" maxW="3xl">
          {t`description`}
        </Text>
        <Stack
          spacing={6}
          w={{ base: '100%', sm: 'auto' }}
          direction={{ base: 'column', sm: 'row' }}
        >
          <Button
            rounded="full"
            px={6}
            colorScheme="purple"
            bg="purple.400"
            _hover={{ bg: 'purple.500' }}
            onClick={open}
          >
            {t`mainButton`}
          </Button>
          <Button rounded="full" px={6}>
            {t`secondaryButton`}
          </Button>
        </Stack>
        <Flex w="full">
          <Illustration height={{ sm: '24rem', lg: '28rem' }} />
        </Flex>
      </Stack>
    </Section>
  );
}
