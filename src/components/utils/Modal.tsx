import React from 'react'
import ReactModal from 'react-modal'

ReactModal.setAppElement('#__next')

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(140, 140, 140, 0.5)',
  },
  content: {
    width: '70%',
    height: '80%',
    margin: 'auto auto',
  },
}

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
      style={customStyles}
      contentLabel="Example Modal"
    >
      {children}
    </ReactModal>
  )
}

export default Modal
