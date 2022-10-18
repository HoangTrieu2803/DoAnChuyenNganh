import React , {useState} from 'react'
import "./style.css"
import danhsachghe from "./chairs.json"
import HangGhe from './HangGhe'
export default function Booking() {
    return (
        <div className='bookingMovie' style={{position:'fixed',width:'100%',height:'100%',backgroundImage:'url(./img/bgmovie.jpg)',backgroundSize:'100%'}}>
            <div style={{backgroundColor:'rgba(0,0,0,0.5)',position:'fixed',width:'100%',height:'100%'}}>
                <div className='container-fluid'>
                <div className='row'>
                    <div className='col-8'>
                        <h2 className='mr-5 mt-2 text-light text-center' style={{fontSize:'25px'}}>Screen</h2>
                        <div className='mt-1' style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                            
                            <div className='screen ml-5'></div>
                        </div>
                    </div>
                    <div className='col-4'>
                    <h3 className='text-light mt-2'>DANH SACH GHE CHON</h3>
                    {/* <HangGhe/> */}
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
