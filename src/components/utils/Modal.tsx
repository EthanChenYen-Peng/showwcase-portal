import React from 'react'
import ReactModal from 'react-modal'

ReactModal.setAppElement('#__next')

interface Props {
  children: React.ReactNode
  isOpen: boolean
  close: () => void
}

function Modal({ children, isOpen, close }: Props) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={close}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(125, 125, 125, 0.7)',
        },
        content: {
          width: '70%',
          height: '80%',
          margin: 'auto auto',
        },
      }}
      contentLabel="Example Modal"
    >
      {children}
    </ReactModal>
  )
}

export default Modal
