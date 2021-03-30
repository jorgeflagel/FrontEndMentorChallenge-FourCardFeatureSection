import React, { Component } from 'react';
import styles from './css/Card.module.css';


function Card (props) {
    return (
        <div className={styles.card} key={props.id} style={{borderColor: props.color}}>
            <h2 className={styles.card__title} >{ props.title }</h2>
            <p className={styles.card__text}>{ props.text }</p>
            <img className={styles.card__image} src={ props.image} alt=""/>
        </div>
    );
}

export default Card;
