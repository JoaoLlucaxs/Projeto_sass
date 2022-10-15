import Image from '../../assets/contact.jpg'
import Head from '../Head';

const Contact=()=>{
    return(
        <section className="Contact + animeLeft">
            <Head title='Contato | Information' description='Entre em Contato'/>
            <img src={Image} alt='Contact tell'/>
            <div>
            <h1>Entre em Contato Conosco</h1>
                <ul className='contactDetails'>
                    <li>contatoshop@gmail.com</li>
                    <li>999-999</li>
                    <li>Rua Vasco</li>
                </ul>
            </div>

        </section>
    )
}

export default Contact;