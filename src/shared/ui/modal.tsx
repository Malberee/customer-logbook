import { X } from 'lucide-react'
import { type FC, type ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'

import { Button } from './button'

interface ModalProps {
  isOpen?: boolean
  onClose?: () => void
  children?: ReactNode
}

export const Modal: FC<ModalProps> = ({ isOpen, children, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
  }, [isOpen])

  if (!isOpen) {
    return null
  }

  return createPortal(
    <div className="absolute top-0 flex h-screen w-screen items-center justify-center">
      <div
        className="absolute h-full w-full bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10">
        <Button
          className="absolute right-0 top-0 z-10 !mt-2 mr-2"
          variant="ghost"
          size="icon"
          onClick={onClose}
        >
          <X />
        </Button>
        {children}
      </div>
    </div>,
    document.body,
  )
}
