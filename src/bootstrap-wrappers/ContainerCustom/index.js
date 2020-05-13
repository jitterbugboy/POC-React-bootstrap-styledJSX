import React from "react";
import Container from "react-bootstrap/Container";
import styles from './Container.scss';
//console.log(styles);
export const ContainerCustom = (props) =>{
    return <>
        <p className={'lala'}>Muhahah</p>

        <Container className={`jsx-${'j'}`}{...props} >
            {props.children}
        </Container>
        <style jsx>{styles}</style>

    </>;
};

//styles.__hash
//<style jsx>{`.lala{color:red}`}</style>
