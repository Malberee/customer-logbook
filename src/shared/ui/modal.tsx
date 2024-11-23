import { type FC, type ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'

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
      <div className="absolute h-full w-full bg-black/50" onClick={onClose} />
      <div className="z-10">{children}</div>
    </div>,
    document.body,
  )
}
