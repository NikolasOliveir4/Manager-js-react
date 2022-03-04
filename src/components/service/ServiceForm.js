import { useState } from 'react'

import Input from '../form/input'
import SubmitButton from '../form/SubmitButton'
import Message from '../layouts/Message'

import styles from '../project/ProjectForm.module.css'

function ServiceForm({handleSubmit, btnText, projecData}){

    const [service,setService] = useState({})
    const [message, setMessage] = useState()
    const [type, setType] = useState()

    function submit(e){
        
        e.preventDefault()
        if(service.cost == '' || service.name == null || service.description == null ){
            setMessage('Preencha todos os campos')
            setType('error')
            
        }
        else{
        projecData.services.push(service)
        handleSubmit(projecData)
    }
    }


    function handleChange(e){
        setService({...service,[e.target.name]: e.target.value})
        
    }

    return(
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type='text'
                text='Nome do serviço'
                name='name'
                placeholder='Insira o nome do serviço'
                handleOnChange={handleChange}
            />
            <Input 
                type='number'
                text='Custo do serviço'
                name='cost'
                placeholder='Insira o valor total'
                handleOnChange={handleChange}
            />
            <Input 
                type='text'
                text='Descrição do serviço'
                name='description'
                placeholder='Descreva o serviço'
                handleOnChange={handleChange}
            />
            <SubmitButton text={btnText} />
            {message && <Message type={type} msg={message} />}
        </form>
    )
}

export default ServiceForm
