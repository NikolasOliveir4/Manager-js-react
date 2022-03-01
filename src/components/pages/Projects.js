import { useLocation } from "react-router-dom"


import Message from "../layouts/Message"
import Container from '../layouts/Container'
import Loading from "../layouts/Loading"
import LinkButton from "../layouts/LinkButton"
import CardProject from "../project/CardProject"

import styles from './Projects.module.css'
import { useState, useEffect } from "react"

function Projects(){

    const[ projects, setProjects] = useState([])
    const[removeLoading, setRemoveLoading] = useState(false)
    const[projectMessage, setProjectMessage] = useState('')

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    useEffect(() => {
        setTimeout(
            () => {
             fetch('http://localhost:5000/projects',{
        method: 'GET',
        hearders: {
            'Content-Type':'application/json',
        },
        
        })
        .then((resp) => resp.json())
        .then(data => {
            console.log(data)
            setProjects(data)
            setRemoveLoading(true)
        })
        .catch((err) => console.log(err))   
        }, 800)
    }, [])

    function removeProject(id)  {
        fetch(`http://localhost:5000/projects/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
        },
    })
    .then((resp) => resp.json())
    .then((data) => {
        setProjects(projects.filter((project) => project.id !== id))
        setProjectMessage('Projto removido com sucesso')
    })
    .catch((err) => console.log(err))
    }

    return (
        <div className={styles.project_container}>
            <div className={styles.tittle_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to='/newproject' text='Criar Projeto'/>
            </div>
            {message && <Message type='sucess' msg={message} />}
            {projectMessage && <Message type='sucess' msg={projectMessage} />}
            <Container customClass='start'>
            {projects.length > 0 && 
            projects.map((project) =>(
                <CardProject 
                name={project.name} 
                id={project.id}
                budget={project.budget}
                category={project.category.name}
                key={project.id}
                handleRemove={removeProject}

                />
            ))}
            {!removeLoading && <Loading />}
            {removeLoading && projects.length === 0 &&(
                <p>Não há projetos cadastrados!</p>
            )
            
            }
            </Container>
        </div>
    )
}

export default Projects