import React, {useState} from 'react';
import { Button, Container } from 'react-bootstrap';
/*import CreateFacultet from "../components/modals/CreateFacultet";
import CreateCard from "../components/modals/CreateCard";*/
import CreateGroup from "../components/modals/CreateGroup";
 

const Departament = () => {

    

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
               
            >
                Добавить факультет
            </Button>

            <Button
                variant={"outline-dark"}
                className="mt-4 p-2" 
                           
            >
                Добавить группу
            </Button>

            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
               
            >
                Добавить карточку студента
            </Button>   
      
            <CreateGroup show={true}/>      
            
        </Container>
    );
};

export default Departament;