import React from 'react';
import Badge from '@/components/Badge';
import Link from 'next/link';


const page = () => {
  return (
    <div>
        <Link href={'/'}>

            <Badge />
        </Link>

    </div>
  )
}

export default page