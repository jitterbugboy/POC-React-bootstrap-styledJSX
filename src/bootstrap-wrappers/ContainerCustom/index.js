import React from "react";
import Container from "react-bootstrap/Container";
//import styles from './Container.scss';
import scss from 'styled-jsx/css';
export const ContainerCustom = (props) =>{
    return <>
        <p className={'lala'}>Muhahah</p>

        <Container className={`jsx-${styles.__hash} jysk-bs-4`}{...props} >
            {props.children}
        </Container>
        <style jsx>{styles}</style>

    </>;
};
const styles = scss` @import "./src/bootstrap-wrappers/ContainerCustom/Container.scss"`;

//styles.__hash
//<style jsx>{`.lala{color:red}`}</style>
