import React , {useState} from 'react'
import './Modal.css'
// import { Modal } from '@material-ui/core'
export default function Modal() {

    const[modal , setModal]=useState(false);

    const toggleModal = ()=>{
        setModal(!modal)
    };

    if(modal){
        document.body.classList.add('active-modal')
    }else{
        document.body.classList.remove('active-modal')

    }
  return (
    <>
    <div>
    <button onClick={toggleModal} className='ingredients'> Show all ingredients</button>
    </div>
    {modal && (

        <div className='modal'>
        <div className='overlay' onClick={toggleModal}></div>
            <div className='modal-content'>
                <h2 className='head'>Ingredients</h2>
                <table className='table'>
                <tr>
                    <th  className='row'>Material</th>
                    <th className='row'>Quantity</th>
                </tr>
                <tr>
                    <td><hr/></td>
                    <td><hr/></td>
            
                </tr>
               
                <tr>
                    <td>Maida</td>
                    <td>20g</td>
                </tr>
                <tr>
                <td>Salt</td>
                <td>30g</td>
                </tr>
                <tr>
                <td>Sugar</td>
                <td>50g</td>
                </tr>
                
                </table>
            <button className='close' onClick={toggleModal}>Close</button>
        </div>
    </div>

    )}
    
    </>
  )
}

