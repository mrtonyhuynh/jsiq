import { Box, Text, Stack, Link, chakra } from '@chakra-ui/react';
import { IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { DiGithubBadge } from 'react-icons/di';
import { AiOutlineEdit } from 'react-icons/ai';
import { LinkIconButton } from 'components/LinkIconButton';
import { links } from 'config';

const iconButtons = [
  {
    icon: DiGithubBadge,
    label: 'GitHub',
    href: links.github,
  },
  {
    icon: IoLogoTwitter,
    label: 'Twitter',
    href: links.twitter,
  },
  {
    icon: IoLogoLinkedin,
    label: 'LinkedIn',
    href: links.linkedin,
  },
  {
    icon: MdEmail,
    label: 'Email',
    href: links.email,
  },
];

type Props = {
  editPageHref?: string;
};

export const Footer = ({ editPageHref }: Props) => (
  <Box as="footer">
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box mt={4} mb={4} display="flex" flexDir="column" textAlign="center">
        <Text fontSize="md">
          <span>MIT License</span>
        </Text>
      </Box>

      {editPageHref && (
        <Link isExternal href={editPageHref} display="flex" alignItems="center">
          <AiOutlineEdit size={20} />
          <chakra.span ml={2}>Edit this page</chakra.span>
        </Link>
      )}
    </Box>

    <Box mt={4} display="flex" flexDir="column" textAlign="center">
      <Text fontSize="md">
        <span>Mikhail Sakhnyuk</span>
      </Text>
    </Box>

    <Stack mb={10} direction="row" spacing="12px" justify="center">
      {iconButtons.map((link) => (
        <LinkIconButton key={link.href} {...link} />
      ))}
    </Stack>
  </Box>
);
