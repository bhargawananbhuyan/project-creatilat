export default function handler(_, res) {
	res.status(200).json({
		data: [
			{
				title: 'Logotipos',
				description:
					'Un simbolo que representa tu producto o servicio y que también trasmite tu filosofia empresarial.',
				precio: [
					{
						label: 'Bronce',
						value: '2,499',
						propuestas: 2,
						revisiones: 1,
					},
					{
						label: 'Plata',
						value: '3,699',
						propuestas: 3,
						revisiones: 2,
					},
					{
						label: 'Oro',
						value: '5,699',
						propuestas: 3,
						revisiones: 'limitado',
					},
					{
						label: 'Creatilat Premium',
						value: 'Contáctanos',
						propuestas: 'limitado',
						revisiones: 'limitado',
					},
				],
			},
			{
				title: 'Flyers',
				description:
					'Una pequeña pieza digital o de papel en la que se anuncia un producto, servicio o un acontecimiento importante.',
				precio: [
					{
						label: 'Bronce',
						value: '1,499',
						propuestas: 2,
						revisiones: 1,
					},
					{
						label: 'Plata',
						value: '2,699',
						propuestas: 2,
						revisiones: 3,
					},
					{
						label: 'Oro',
						value: '4,999',
						propuestas: 3,
						revisiones: 'limitado',
					},
					{
						label: 'Creatilat Premium',
						value: 'Contáctanos',
						propuestas: 'limitado',
						revisiones: 'limitado',
					},
				],
			},
			{
				title: 'Correo electrónico',
				description:
					'Diseño de plantillas de firma email personalizadas que representan a tu empresa en cada correo que envíes',
				precio: [
					{
						label: 'Platino',
						value: '1,499',
						propuestas: 2,
						revisiones: 3,
					},
					{
						label: 'Creatilat Premium',
						value: 'Contáctanos',
						propuestas: 'limitado',
						revisiones: 'limitado',
					},
				],
			},
			{
				title: 'Cartel o póster',
				description:
					'Composicion en tamaño poster que incluye tipografia, color, recursos gráficos e imgenes, para difundir una evento o promocionar un producto o servicio',
				precio: [
					{
						label: 'Platino',
						value: '3,699',
						propuestas: 2,
						revisiones: 3,
					},
					{
						label: 'Creatilat Premium',
						value: 'Contáctanos',
						propuestas: 'limitado',
						revisiones: 'limitado',
					},
				],
			},
			{
				title: 'Portada de libro',
				description:
					'La portada siempre acompaña a la contraportadas, ambas forman parte de la cubierta, junto con el lomo y las solapas, mejor conocidas como pestañas, codigo de barras, autor y el nombre del libro en una fuente tipografica que genere confianza. ',
				precio: [
					{
						label: 'Platino',
						value: '4,699',
						propuestas: 2,
						revisiones: 3,
					},
					{
						label: 'Creatilat Premium',
						value: 'Contáctanos',
						propuestas: 'limitado',
						revisiones: 'limitado',
					},
				],
			},
			{
				title: 'Infografía',
				description:
					'Es una compilación de imagenes, texto y gráficos que resume un tema de manera rápida y eficaz.',
				precio: [
					{
						label: 'Platino',
						value: '8,499',
						propuestas: 2,
						revisiones: 3,
					},
					{
						label: 'Creatilat Premium',
						value: 'Contáctanos',
						propuestas: 'limitado',
						revisiones: 'limitado',
					},
				],
			},
			{
				title: 'Diseño de etiquetas',
				description:
					'Parte fundamental de un producto, en ella se muestra información veridica y relevante, su finalidad es informar y sugerir la compra',
				precio: [
					{
						label: 'Bronce',
						value: '2,499',
						propuestas: 2,
						revisiones: 1,
					},
					{
						label: 'Plata',
						value: '4,199',
						propuestas: 3,
						revisiones: 2,
					},
					{
						label: 'Oro',
						value: '6,499',
						propuestas: 3,
						revisiones: 'limitado',
					},
					{
						label: 'Creatilat Premium',
						value: 'Contáctanos',
						propuestas: 'limitado',
						revisiones: 'limitado',
					},
				],
			},
			{
				title: 'Empaque',
				description:
					'Todo lo relacionado con el diseño del empaque de un producto para su posterior distribución y venta en puntos estrategicos.',
				precio: [
					{
						label: 'Platino',
						value: '8,499',
						propuestas: 2,
						revisiones: 3,
					},
					{
						label: 'Creatilat Premium',
						value: 'Contáctanos',
						propuestas: 'limitado',
						revisiones: 'limitado',
					},
				],
			},
			{
				title: 'Menú',
				description:
					'Es la primera impresión del cómo se verán presentados los platillos ante los clientes por medio de un diseño a la medida',
				precio: [
					{
						label: 'Platino',
						value: '4,699',
						propuestas: 2,
						revisiones: 3,
					},
					{
						label: 'Creatilat Premium',
						value: 'Contáctanos',
						propuestas: 'limitado',
						revisiones: 'limitado',
					},
				],
			},
			{
				title: 'Interior libros',
				description:
					'Diseño editorial y diseño de maquetación; planifica el orden y la composición interior de un libro',
				precio: [
					{
						label: 'Platino',
						value: '5,499',
						propuestas: 2,
						revisiones: 3,
					},
					{
						label: 'Creatilat Premium',
						value: 'Contáctanos',
						propuestas: 'limitado',
						revisiones: 'limitado',
					},
				],
			},
			{
				title: 'Desplegables',
				description:
					'Herramienta fundamental del marketing para que una persona te recuerde a ti o a tu negocio después de una breve introducción, ya sea en una reunión, un evento para hacer contactos o de otro tipo.',
				precio: [
					{
						label: 'Platino',
						value: '4,699',
						propuestas: 2,
						revisiones: 3,
					},
					{
						label: 'Creatilat Premium',
						value: 'Contáctanos',
						propuestas: 'limitado',
						revisiones: 'limitado',
					},
				],
			},
			{
				title: 'Ilustraciones',
				description:
					' Son creaciones artísticas que generalmente acompañan un texto o que representn un tema en especifico.',
				precio: [
					{
						label: 'Platino',
						value: '5,999',
						propuestas: 2,
						revisiones: 3,
					},
					{
						label: 'Creatilat Premium',
						value: 'Contáctanos',
						propuestas: 'limitado',
						revisiones: 'limitado',
					},
				],
			},
			{
				title: 'Tarjetas de presentación',
				description:
					'Muestran los princiales datos de contacto de una persona o de una empresa de forma atractiva, gracias a un diseño único.',
				precio: [
					{
						label: 'Bronce',
						value: '2,199',
						propuestas: 2,
						revisiones: 1,
					},
					{
						label: 'Plata',
						value: '3,499',
						propuestas: 3,
						revisiones: 2,
					},
					{
						label: 'Oro',
						value: '5,699',
						propuestas: 3,
						revisiones: 'limitado',
					},
					{
						label: 'Creatilat Premium',
						value: 'Contáctanos',
						propuestas: 'limitado',
						revisiones: 'limitado',
					},
				],
			},
			{
				title: 'Invitaciones',
				description:
					'Información relevante para el próximo evento social en un diseño especia.  si quiere ser atento con sus seres queridos hagale llegar una invitación personalizada.',
				precio: [
					{
						label: 'Bronce',
						value: '2,199',
						propuestas: 2,
						revisiones: 1,
					},
					{
						label: 'Plata',
						value: '3,499',
						propuestas: 3,
						revisiones: 2,
					},
					{
						label: 'Oro',
						value: '5,699',
						propuestas: 3,
						revisiones: 'limitado',
					},
					{
						label: 'Creatilat Premium',
						value: 'Contáctanos',
						propuestas: 'limitado',
						revisiones: 'limitado',
					},
				],
			},
			{
				title: 'Portada de podcast o disco',
				description:
					'Representación visual de tus creaciones musicales, es la primera imagen que tus oyentes verán por ello debe representar artisticamente tu estilo.',
				precio: [
					{
						label: 'Platino',
						value: '4,199',
						propuestas: 2,
						revisiones: 3,
					},
					{
						label: 'Creatilat Premium',
						value: 'Contáctanos',
						propuestas: 'limitado',
						revisiones: 'limitado',
					},
				],
			},
			{
				title: 'Catálogo',
				description:
					'Es momento de vender. Organizamos tu invetario de productos y le damos forma, los ponemos al alcance del mercado en un diseño integral, podrás incluir precios y caracteristicas de cada uno.',
				precio: [
					{
						label: 'Bronce',
						value: '2,499',
						propuestas: 2,
						revisiones: 1,
					},
					{
						label: 'Plata',
						value: '3,699',
						propuestas: 3,
						revisiones: 2,
					},
					{
						label: 'Oro',
						value: '6,499',
						propuestas: 3,
						revisiones: 'limitado',
					},
					{
						label: 'Creatilat Premium',
						value: 'Contáctanos',
						propuestas: 'limitado',
						revisiones: 'limitado',
					},
				],
			},
			{
				title: 'Diseño de Tatuajes',
				description:
					'Crearemos una obra maestra, el mejor diseño de tatuaje personalizado utilizando cualquier palabra o imagen que sientas que transmite tu personalidad única. Cada tatuaje es dibujado digitalmente por nuestros talentosos diseñadores, y luego es convertido a una hermosa imagen vectorial que podrás usar para tatuajes temporales de alta calidad.',
				precio: [
					{
						label: 'Bronce',
						value: '2,499',
						propuestas: 2,
						revisiones: 1,
					},
					{
						label: 'Plata',
						value: '3,699',
						propuestas: 3,
						revisiones: 2,
					},
					{
						label: 'Oro',
						value: '6,499',
						propuestas: 3,
						revisiones: 'limitado',
					},
					{
						label: 'Creatilat Premium',
						value: 'Contáctanos',
						propuestas: 'limitado',
						revisiones: 'limitado',
					},
				],
			},
			{
				title: 'Diseño de Videojuegos',
				description:
					'Millones de jugadores verán tu logotipo cada día. Crea presencia memorable en todas las plataformas de video juegos y haz que tu nombre sea reconocido.',
				precio: [
					{
						label: 'Platino',
						value: '7,699',
						propuestas: 2,
						revisiones: 3,
					},
					{
						label: 'Creatilat Premium',
						value: 'Contáctanos',
						propuestas: 'limitado',
						revisiones: 'limitado',
					},
				],
			},
		],
	})
}
