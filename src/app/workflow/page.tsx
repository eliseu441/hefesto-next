
"use client";
import React, { useState, useEffect } from 'react';

import { DropdownList, Multiselect, Combobox } from 'react-widgets';
import 'react-widgets/scss/styles.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import moment from 'moment';
//import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer, toast, Slide } from 'react-toastify';
import Switch from "react-switch";
import 'react-toastify/dist/ReactToastify.css';



const createWorflow = () => {

    const [project, setProject] = useState('');
    const [company, setCompany] = useState('');
    const [prazo, setPrazo] = useState('');
    const [products, setProducts] = useState('');
    const [insertProducts, setInsertProducts] = useState({});
    const [detailProdutcs, setDetailProducts] = useState(<></>);;
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [workflow, setWorkflow] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [loading, setLoading] = useState(false);
    const [existent, setExistent] = useState(false);
    const [comboProjects, setComboProjects] = useState([]);
    const [testeDiv, setTesteDiv] = useState([<></>]);
const teste = [{id: 1, nome: 'nome1'},{id:2, nome:'nome2'}]

    const handleDateChange = (date: any) => {
        setSelectedDate(date);
    };
    useEffect(() => {
        let array:any[] = []
        for (let item of teste) {
            array = [...array, 
<div className='col-4 d-flex justify-content-center mt-4  p-0' data-aos="fade-up" >
                    <h2>{item.id}</h2>
                    <h2>{item.nome}</h2>
                    <h2>teste</h2>
                    <h2>teste</h2>
                    <h2>teste</h2>
                </div>
            ]
            setTesteDiv(array)
        }
        
    }, []);

 
    const showProducts = async () => {
        //   onClick={e=> deleteProduct(detailProdutcs.length)}
        let cardProducts = [...[],
        <div className='col-sm-4 d-flex justify-content-center mt-4  p-0' data-aos="fade-up" >
            <div className="product ">
                <div className="info__title col-12" style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>{products}</div>
                <div className="info__title col-12">Preço: R${price}</div>
                <div className="info__title col-12">Quantidade: {quantity}</div>
            </div>
        </div>
        ]
        let finalProducts = [...[], { item: products, price: price, quantity: quantity }]

        setInsertProducts(finalProducts)
        setDetailProducts(cardProducts[0])

    }





    return (
        <>

            {loading == true ? <div className=" bg-loader">
                <div className="loader"></div>
            </div> : <></>}

            <ToastContainer limit={2} />
            <div className="page-content" >


                <div className="card cadastro-project" data-aos="zoom-in" data-aos-duration="800">

                    <div className="card-body">

                        <div id="linha-horizontal">
                            <h2 className='col-11 d-flex justify-content-center status-macro'>CADASTRO DE NOVO WORKFLOW </h2>
                        </div>
                        <div className='row'>
                            <div className='col-sm-6 mt-4'>
                                <span className="comboTitles">Nome do projeto</span>
                                <input type="text" placeholder="ex: Produção de hardware" className="default-input"
                                    value={project} onChange={e => setProject(e.target.value)}
                                />
                            </div>
                            <div className='col-sm-3 mt-4'>
                                <span className="comboTitles">Empresa</span>
                                <input type="text" placeholder="ex: Microsoft" className="default-input"
                                    value={company} onChange={e => setCompany(e.target.value)}
                                />
                            </div>
                            <div className='col-2 mt-4'>
                                <span className='comboTitles '>Prazo Estimado:</span>
                                <div className='col-8 datePicker d-flex p-2'>
                                    <button className="btn ms-3 deleteDate" onClick={e => handleDateChange(null)}> <i className="bi bi-trash-fill"></i> </button>
                                </div>
                            </div>


                            <div className=' col-sm-4'>
                                <div className='col-12 m-1 d-flex align-items-center'>

                                    <Switch
                                        height={15}
                                        handleDiameter={20}
                                        width={35}
                                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                        onChange={e => setExistent(!existent)}
                                        onColor="#86d3ff"
                                        onHandleColor="#2693e6"
                                        checked={existent} />
                                    <span className='comboTitles'>Usar projeto existente</span>
                                </div>
                                <DropdownList
                                    textField='PROJECT'
                                    data={comboProjects}
                                    className="dropdownText"
                                    placeholder="selecione"
                                    disabled={!existent}
                                />

                            </div>

                            <div className=" sendProducts mt-4 me-2 ms-3" onClick={e=> setWorkflow(project)}>
                                <i className="bi bi-send-x-fill" >
                                    <span className="tooltiptext">adicionar projeto</span>
                                </i>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='col-12 d-flex justify-content-center'>
                {testeDiv}
                </div>


            </div>
        </>


    );
}

export default createWorflow;