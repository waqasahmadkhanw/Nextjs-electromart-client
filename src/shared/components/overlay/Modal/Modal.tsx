'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { ReactNode } from 'react';

type Size = 'sm' | 'md' | 'lg';

interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  title: string;
  description?: string;
  children?: ReactNode;

  size?: Size;
}

const sizeClasses: Record<Size, string> = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
};

export function Modal({
  open,
  onOpenChange,
  title,
  description,
  children,
  size = 'md',
}: ModalProps) {
  return (
    <Dialog.Root
      open={open}
      onOpenChange={onOpenChange}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

        <Dialog.Content
          className={`
            fixed
            left-1/2
            top-1/2
            w-full
            ${sizeClasses[size]}
            -translate-x-1/2
            -translate-y-1/2
            rounded-xl
            bg-white
            p-6
            shadow-xl
            focus:outline-none
          `}
        >
          <Dialog.Title className="text-lg font-semibold">
            {title}
          </Dialog.Title>

          {description && (
            <Dialog.Description className="mt-2 text-sm text-gray-500">
              {description}
            </Dialog.Description>
          )}

          {children && (
            <div className="mt-4">
              {children}
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

