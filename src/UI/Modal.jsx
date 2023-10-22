import classes from './Modal.module.css'
import ReactDom from 'react-dom'




const Backdrop = (prop)=>{
    return(
        <div className={classes.backdrop} onClick={prop.onClose}>

        </div>
    )
}



const ModalOverlay=prop=>{
    return(
        <div className={classes.modal}>
            <div className={classes.content}>{prop.children} </div>
        </div>
    )
}


function Modal(prop) {


const portalElement = document.getElementById('overlays')

  return (
    <div>
        {ReactDom.createPortal(<Backdrop onClose={prop.onClose}/>,portalElement)}
        {ReactDom.createPortal(<ModalOverlay>{prop.children}</ModalOverlay>,portalElement) }
    


    </div>
  )
}

export default Modal