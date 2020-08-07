import React from 'react';
/* IMG */
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
/* CSS */
import './style.css';

function TeacherItem() {

    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://pbs.twimg.com/profile_images/1268268113855987715/Uk99LT2i_400x400.jpg" alt="Filipe Tomita" />
                        <div>
                            <strong>Filipe Tomita</strong>
                            <span>Programação</span>
                        </div>
                    </header>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        <br /> <br />
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 100,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Falar com o Proffy
                        </button>
                    </footer>
                </article>
    )

}

export default TeacherItem;