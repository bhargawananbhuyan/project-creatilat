import React from 'react'
import Layout from '../../src/components/layout/Layout'
import PaperLike from '../../src/components/layout/PaperLike'
import SEO from '../../src/components/layout/SEO'

export default function Hello() {
	return (
		<Layout>
			<SEO title='Políticas de Privacidad' />
			<PaperLike
				title={'Políticas de Privacidad'}
				subtitle={'Aviso de privacidad simplificado'}
				text={
					<div className='grid gap-3.5'>
						<p>
							Creatilat, con ubicacion en Puebla, México y portal de internet
							www.creatilat.com, es el responsable del uso y protección de sus datos
							personales, y al respecto le informamos lo siguiente:
						</p>
						<p>
							¿Para qué fines utilizaremos sus datos personales? Los datos personales
							que recabamos de usted, los utilizaremos para las siguientes finalidades
							que son necesarias para el servicio que solicita: Respuesta a mensajes
							del formulario de contacto, Prestación de cualquier servicio solicitado,
							Envío de productos adquiridos en esta tienda en línea, Marketing ¿Dónde
							puedo consultar el aviso de privacidad integral? Para conocer mayor
							información sobre los términos y condiciones en que serán tratados sus
							datos personales, como los terceros con quienes compartimos su
							información personal y la forma en que podrá ejercer sus derechos ARCO,
							puede consultar el aviso de privacidad integral con una petición vía
							correo electrónico:
						</p>
						<a href='mailto:contacto@creatilat.com' className='text-blue-500 underline'>
							contacto@creatilat.com
						</a>
						<p>Última actualización de este aviso de privacidad: 21/11/2021</p>
						<h2 className='font-bold'>Aviso de privacidad integral</h2>
						<p>
							Creatilat, con ubicacion en Puebla, mexico y portal de internet
							www.creatilat.com, es el responsable del uso y protección de sus datos
							personales, y al respecto le informamos lo siguiente: ¿Para qué fines
							utilizaremos sus datos personales? Los datos personales que recabamos de
							usted, los utilizaremos para las siguientes finalidades que son
							necesarias para el servicio que solicita: Respuesta a mensajes del
							formulario de contacto, Prestación de cualquier servicio solicitado,
							Envío de productos adquiridos en esta tienda en línea Marketing ¿Qué
							datos personales utilizaremos para estos fines? Para llevar a cabo las
							finalidades descritas en el presente aviso de privacidad, utilizaremos
							los siguientes datos personales: Datos de identificación y contacto ¿Con
							quién compartimos su información personal y para qué fines? Le
							informamos que sus datos personales son compartidos dentro del país con
							las siguientes personas, empresas, organizaciones o autoridades
							distintas a nosotros. ¿Cómo puede acceder, rectificar o cancelar sus
							datos personales, u oponerse a su uso o ejercer la revocación de
							consentimiento? Usted tiene derecho a conocer qué datos personales
							tenemos de usted, para qué los utilizamos y las condiciones del uso que
							les damos (Acceso). Asimismo, es su derecho solicitar la corrección de
							su información personal en caso de que esté desactualizada, sea inexacta
							o incompleta (Rectificación); que la.
						</p>
					</div>
				}
			/>
		</Layout>
	)
}
