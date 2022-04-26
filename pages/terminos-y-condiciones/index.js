import React from 'react'
import Layout from '../../src/components/layout/Layout'
import SEO from '../../src/components/layout/SEO'
import PaperLike from '../../src/components/layout/PaperLike'

export default function Index() {
	return (
		<Layout>
			<SEO title='Términos y condiciones' />
			<PaperLike
				title={'Términos y condiciones'}
				subtitle={'Información general'}
				text={
					<p>
						Este sitio web es operado por Creatilat. En todo el sitio, los términos
						&quot;nosotros&quot;, &quot;nos&quot; y &quot;nuestro&quot; se refieren a
						Creatilat con nombre comercial ofrece este sitio web, incluyendo toda la
						información, herramientas y servicios disponibles para ti en este sitio, el
						usuario, está condicionado a la aceptación de todos los términos,
						condiciones, políticas y notificaciones aquí establecidos. Al visitar
						nuestro sitio y/o comprar algo de nosotros, participas en nuestro
						&quot;Servicio&quot; y aceptas los siguientes términos y condiciones
						(&quot;Términos de Servicio&quot;, &quot;Términos&quot;), incluidos todos
						los términos y condiciones adicionales y las políticas a las que se hace
						referencia en el presente documento y/o disponible a través de
						hipervínculos. Estas Condiciones de Servicio se aplican a todos los usuarios
						del sitio, incluyendo sin limitación a usuarios que sean navegadores,
						proveedores, clientes, comerciantes, y/o colaboradores de contenido. Por
						favor, lee estos Términos de Servicio cuidadosamente antes de acceder o
						utilizar nuestro sitio web. Al acceder o utilizar cualquier parte del sitio,
						estás aceptando los Términos de Servicio. Si no estás de acuerdo con todos
						los términos y condiciones de este acuerdo, entonces no deberías acceder a
						la página web o usar cualquiera de los servicios. Si los Términos de
						Servicio son considerados una oferta, la aceptación está expresamente
						limitada a estos Términos de Servicio. Cualquier función nueva o herramienta
						que se añadan a la tienda actual, también estarán sujetas a los Términos de
						Servicio. Puedes revisar la versión actualizada de los Términos de Servicio,
						en cualquier momento en esta página. Nos reservamos el derecho de
						actualizar, cambiar o reemplazar cualquier parte de los Términos de Servicio
						mediante la publicación de actualizaciones y/o cambios en nuestro sitio web.
						Es tu responsabilidad revisar esta página periódicamente para verificar
						cambios. Tu uso continuo o el acceso al sitio web después de la publicación
						de cualquier cambio constituye la aceptación de dichos cambios.
					</p>
				}
			/>
		</Layout>
	)
}
