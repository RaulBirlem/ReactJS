import ModelCloseButton from './ModalCloseButton';
import './ModelWindow.scss';
 
function ModelWindow({children}) {
    return (
    <>
        <div className="model-wrapper" aria-modal="true"
            role="dialog" tabIndex="-1">
            <div className="inner">
            <ModelCloseButton/>

            {children}

            </div>
        </div>
    </>
    )
  }
  
  export default ModelWindow
