import React from 'react';
import { useRouter } from 'next/navigation';

import { CheckCircleIcon } from 'lucide-react';

import { Loading } from '@/components/loading/Loading';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

type SuccessModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  loading: boolean;
};
export const SuccessModal: React.FC<SuccessModalProps> = ({ open, setOpen, loading }) => {
  const navigate = useRouter();
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        {loading ? (
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center justify-center gap-2">
              <Loading />
            </AlertDialogTitle>
          </AlertDialogHeader>
        ) : (
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center justify-center gap-2">
              <CheckCircleIcon />
              Payment is success
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              Congratulations. You bought ticket.
            </AlertDialogDescription>
            <Button onClick={() => navigate.push('/home')}>Go to Home Page</Button>
          </AlertDialogHeader>
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
};
