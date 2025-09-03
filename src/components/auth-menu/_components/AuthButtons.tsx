import { useRouter } from 'next/navigation';

import { Separator } from '@radix-ui/react-separator';
import { UserRoundIcon, UserRoundPlusIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';

export const AuthButtons = () => {
  const navigate = useRouter();
  return (
    <div className="flex items-center gap-0.5">
      <Button variant={'ghost'} className="cursor-pointer" onClick={() => navigate.push('/login')}>
        <UserRoundIcon />
        <span>Login</span>
      </Button>
      <Separator orientation="vertical" className="rounded bg-black/50 px-0.5 py-3" />
      <Button
        variant={'ghost'}
        className="cursor-pointer"
        onClick={() => navigate.push('/register')}
      >
        <UserRoundPlusIcon />
        <span>Register</span>
      </Button>
    </div>
  );
};
