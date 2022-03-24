import './Modal.scss'

const Modal = ({ modalOpen, action, openSignUpForm }) => {

  const closeModal = () => {
    console.log('nothing yet')
  }

  const openModal = () => {
    console.log('nothing yet')
  }

  return(
    <div className={ modalOpen? 'modal--open' : 'modal'}>
      <div className="modal-background"></div>
      <div className={`modal-body ${action === 'signup'?' modal-body--xl':''}`}>
        <button className="modal__close-button" onClick={closeModal} type="button">
          <span className="modal__close-icon"></span>
        </button>
      </div>
    </div>
  )
}

export default Modal;