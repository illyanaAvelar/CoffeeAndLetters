import React from 'react';

import styles from './poema.module.scss';

const Poema = ({title, text, author}) => {
    return (
        <div className={styles.container} id={`poema-${title}`}>

            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.text}>
                {text.map((paragrafo) => {
                    return (
                        <>
                            {paragrafo}
                            
                            <br />
                        </>
                    )
                })}
            </div>
            <div className={styles.author}>
                {author}
            </div>
           
            
        </div>
    )
}

export default Poema;