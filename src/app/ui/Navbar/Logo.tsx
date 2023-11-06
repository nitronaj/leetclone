import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/images/leecode.png" width={30} height={30} alt="Picture of the author" />
    </Link>
  );
};

export default Logo;
