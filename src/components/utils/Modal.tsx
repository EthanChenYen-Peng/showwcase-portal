import React from 'react'
import ReactModal from 'react-modal'
import styled from 'styled-components'

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
      contentLabel="Example Modal"
      className="Modal"
      overlayClassName="Overlay"
    >
      {children}
    </ReactModal>
  )
}

export default Modal

const StyledModal = styled(ReactModal)`
  background-color: red;
  position: absolute;
  border: 1px solid #ccc;
  background: #fff;
  overflow: auto;
  webkitoverflowscrolling: touch;
  borderradius: 4px;
  outline: none;
  padding: 20px;
  width: 70%;
  height: 80%;
  margin: auto auto;
`
