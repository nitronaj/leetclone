import React, { useEffect, useRef } from 'react';
import { useSignOut } from 'react-firebase-hooks/auth';
import { FiLogOut } from 'react-icons/fi';
import { Avatar, Button, Center, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Spinner } from '@chakra-ui/react';
import { User } from 'firebase/auth';
import { useRouter } from 'next/navigation';

import { auth } from '@/firebase/firebase';

type UserMenuProps = {
  user?: User | null;
};

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  const router = useRouter();
  const [signOut, loading] = useSignOut(auth);

  const seed = useRef('');
  const { email = '' } = user ?? {};

  const handleClick = () => {
    try {
      signOut();
      router.push('/');
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    seed.current = crypto.randomUUID();
  }, []);

  return (
    <Menu>
      <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0} isLoading={!user}>
        <Avatar size={'sm'} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`} />
      </MenuButton>
      <MenuList alignItems={'center'}>
        <Center>
          <Avatar size={'xl'} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`} />
        </Center>

        <Center>
          <p>{email}</p>
        </Center>

        <MenuDivider />
        <MenuItem icon={<FiLogOut />} onClick={handleClick}>
          Logout
          {loading && <Spinner />}
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserMenu;
