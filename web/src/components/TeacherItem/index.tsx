import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://pbs.twimg.com/profile_images/1299499831115816960/_u-iyMsZ_400x400.jpg" alt="Rôdiney Rodrigues"/>
                        <div>
                            <strong>Rôdiney Rodrigues</strong>
                            <span>Como levantar uma parede</span>
                        </div>
                    </header>
                    
                    <p>
                        Estudioso da arte da engenharia civil
                        <br /><br />
                        Apaixonado por cimentar tijolos e levantar paredes, não pode ver uma obra que se mete no meio.
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 40,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Entrar em contato"/>
                            Entrar em contato
                        </button>
                    </footer>
        </article>
    )
}

export default TeacherItem;
