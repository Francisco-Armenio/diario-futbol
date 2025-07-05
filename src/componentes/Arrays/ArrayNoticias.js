const noticias = [
    {
        id: 1,
        imagen: "https://media.urgente24.com/p/47e80a2a22bf3a7e1f23e257fa4a4e85/adjuntos/319/imagenes/002/979/0002979734/lbz7jgaj5ncsrh7yunzy2af2qujpg.jpg",
        minititulo: "Descenso al rojo vivo",
        titulo: "Expulsión de Ascacíbar complica a Estudiantes ante Unión en una final anticipada",
        miniinfo: "El mediocampista del Pincha vio la roja en un partido caliente por la permanencia. El duelo está 1-1 y arde Santa Fe.",
        info: "Estudiantes de La Plata sufre un duro golpe en su visita a Santa Fe: Santiago Ascacíbar fue expulsado a los 67 minutos y deja a su equipo con 10 jugadores en un momento clave del partido ante Unión. Ambos equipos llegan al duelo ocupando los últimos puestos de la tabla —Estudiantes en el 22.º lugar y Unión en el 23.º— y se juegan la permanencia en esta fecha crucial. El partido comenzó con ventaja para el Pincha gracias al gol de Mauro Boselli a los 16', pero el local reaccionó antes del descanso con el empate de Jerónimo Domina a los 43’. El partido, muy disputado y friccionado, ha acumulado varias amonestaciones, y la expulsión de Ascacíbar puede inclinar la balanza en favor del Tatengue. Restan 20 minutos decisivos en una verdadera final por evitar el descenso.",
        autor: "Juan Pérez",
        fecha: "Hace 5 minutos",
        likes: 0
    },

    {
        id: 2,
        imagen: "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F1209%2Fr1425933_1296x729_16%2D9.jpg",
        minititulo: "primera",
        titulo: "La liga argentina tendrá 22 equipos en la próxima temporada",
        miniinfo: "Cada vez más cerca el regreso a una liga de 20 equipos como en los viejos tiempos.",
        info: "La AFA confirmó que la próxima temporada de la Liga Profesional se jugará con 22 equipos, recortando de a poco la cantidad de participantes. Esta medida sigue el plan de reducción progresiva, con el objetivo de volver a un torneo de 20 clubes como era habitual en décadas pasadas. La decisión generó opiniones divididas, pero ya se habla de que en dos años podría completarse el formato tradicional.",
        autor: "Redacción FPT",
        fecha: "Hace 1 dia",
        likes: 0
    },
    {
        id: 3,
        imagen: "https://media.tycsports.com/files/2024/09/23/769284/israel-damonte-previa-_862x485.webp?v=1",
        minititulo: "Crisis en Junín",
        titulo: "Sarmiento despide a su DT tras una racha desastrosa y se hunde en la tabla",
        miniinfo: "El Verde de Junín decidió cortar por lo sano tras una campaña alarmante: solo 4 triunfos en 28 fechas.",
        info: "Sarmiento de Junín atraviesa uno de los momentos más delicados de su historia reciente. La dirigencia tomó la decisión de despedir al entrenador luego de caer al último puesto del campeonato, con un balance preocupante: apenas 4 partidos ganados, 5 empatados y 19 derrotas en 28 fechas disputadas. El equipo tiene la peor defensa del torneo con 59 goles en contra y apenas ha convertido 26. La crisis deportiva se refleja también en lo anímico, y en las últimas horas se filtraron tensiones en el vestuario. Ahora, la institución busca un reemplazo urgente para encarar las últimas seis fechas y evitar un descenso que parece inminente.",
        autor: "Juan Pérez",
        fecha: "Hace 1 dia",
        categoria: "Fútbol Argentino",
        likes: 0
    },
    {
        id: 4,
        imagen: "https://diariolaopinion.com.ar/galeria/fotos/2024/02/25/o_multimedia.grande.8039fa91ca677292.QXRsw6l0aWNvIGRlIFJhZmFlbGFfZ3JhbmRlLndlYnA=.webp",
        minititulo: "Primera División",
        titulo: "Rafaela lidera con puño firme y va por el doblete",
        miniinfo: "El equipo de Sensini no solo domina el torneo local, también sigue firme en Libertadores.",
        info: "Atlético Rafaela continúa su impresionante campaña. Es puntero en la liga con 72 puntos y además se encuentra en cuartos de final de la Copa Libertadores. Con un estilo sólido y una base estable, sueña con repetir el título continental y coronarse en Argentina. ¿Podrá hacer historia con un doblete sin precedentes?",
        autor: "Martín Escalada",
        fecha: "Hace 5 dias",
        likes: 0
    },
    {
        id: 5,
        imagen: "https://www.lavoz.com.ar/resizer/v2/WSZCD4RP7RBBPM5R235GML6QM4.jpeg?auth=7655dec33f8227db2cc1bb052ffa5e6610319224a21ffc8f22ee2bebc59f92e3&auth=7655dec33f8227db2cc1bb052ffa5e6610319224a21ffc8f22ee2bebc59f92e3&quality=75&smart=true&width=980&height=551",
        minititulo: "Primera División",
        titulo: "Belgrano, la sorpresa del campeonato",
        miniinfo: "El Pirata cordobés se mantiene tercero y sueña con la Copa.",
        info: "Con 56 puntos en 28 fechas, Belgrano se afirma como uno de los equipos revelación del torneo. A pesar de un bajón reciente, su rendimiento lo mantiene en zona de Libertadores. La ilusión de su gente crece, y el sueño de volver a lo más alto está más vivo que nunca.",
        autor: "Leandro Vázquez",
        fecha: "Hace 5 dias",
        likes: 0
    },
    {
        id: 6,
        imagen: "https://www.lostiempos.com/sites/default/files/media_imagen/2021/10/19/libertadores_y_sudamericana_0.jpg",
        minititulo: "Primera División",
        titulo: "Zona de copas: Rafaela lidera y la pelea se pone intensa",
        miniinfo: "Los equipos luchan por un lugar en la Libertadores y Sudamericana en una temporada apasionante.",
        info: "Con Rafaela firme en la cima con 72 puntos, la lucha por los puestos de clasificación a las copas internacionales está que arde. Boca sigue de cerca con 64 puntos, mientras que Belgrano e Independiente comparten el tercer lugar con 56 unidades. River y Rosario Central completan los seis primeros puestos que otorgan acceso directo a la Copa Libertadores. Más atrás, Talleres, Gimnasia (LP), Banfield, Estudiantes (RC), Vélez y Argentinos Juniors pelean por meterse en la Sudamericana, con Argentinos y Racing luchando por no quedar fuera. La disputa promete mantener la emoción hasta el final, con cada punto siendo clave para los objetivos internacionales.",
        autor: "Sofía Herrera",
        fecha: "Hace una semana",
        likes: 0,
    },
    {
        id: 7,
        imagen: "https://images.pagina12.com.ar/styles/focal_16_9_960x540/public/2024-05/805171-descenso-0.png?h=b69e0e0e&itok=10muIlHo",
        minititulo: "Primera División",
        titulo: "Zona roja al rojo vivo: lucha desesperada por la permanencia",
        miniinfo: "Sarmiento y Unión complicados, Estudiantes busca recuperarse y Platense apunta a la salvación.",
        info: "La pelea por la permanencia está más intensa que nunca. Sarmiento es el último en la tabla con apenas 17 puntos y un presente preocupante, habiendo perdido 4 de sus últimos 5 partidos y empatado uno. Unión tampoco encuentra respiro con 18 puntos y un registro similar en su última racha. Sorprendentemente, Estudiantes está en zona de descenso con 19 puntos, a pesar de ser un histórico del fútbol argentino; en sus últimos cinco encuentros perdió 3 y empató 2, y el próximo fin de semana se enfrentará a Unión en un duelo clave para sumar puntos vitales. Platense, con 23 puntos, no quiere perder pisada y se ubica justo afuera de la zona crítica, al igual que Tigre, que con 26 puntos está en una posición delicada pero fuera del descenso. Lanús y Newell’s tampoco pueden relajarse, ambos con 26 y 27 puntos respectivamente, y atravesando momentos complicados que los tienen al borde del peligro.",
        autor: "Marcos Molina",
        fecha: "Hace una semana",
        likes: 0,
    },
];

export default noticias;
