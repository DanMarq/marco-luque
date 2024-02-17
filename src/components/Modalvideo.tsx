import {Modal} from 'react-bootstrap'

import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface modalVideo {
  show: boolean
  handleClose: () => void
  video: string
}

export default function Modalvideo(props:modalVideo) {

  const { show, handleClose, video } = props;

    return (
        <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            
            <ReactPlayer url={video} controls height='auto' width='100%' playing />

          </Modal.Body>
        </Modal>
      </>
    )
}