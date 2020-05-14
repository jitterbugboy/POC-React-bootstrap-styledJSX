
import React from "react";
import  RbCard  from "react-bootstrap/Card";
import scss from 'styled-jsx/css';
export const Card = (props) =>{
    return <>
        <RbCard className={`jsx-${styles.__hash} jysk-bs-4`}{...props} >
            {props.children}
        </RbCard>
        <style jsx>{styles}</style>

    </>;
};
const styles = scss` @import "./src/bootstrap-wrappers/Card/Card.scss"`;
