const partidos = [
    {
        id: 1,
        imagen1:"",
        equipo1: "Chacarita Jrs",
        imagen2:"",
        equipo2: "Ferro",
        estado: "En vivo",
        minuto: "68'",
        resultado1: 3,
        resultado2: 1,
        eventos: [
            { tipo: 'gol', jugador: 'Cavani', minuto: 15, equipo: 'Local', asistencia: 'Barco' },
            { tipo: 'amarilla', jugador: 'Barco', minuto: 23, equipo: 'Visitante' },
            { tipo: 'gol', jugador: 'Borja', minuto: 30, equipo: 'Local', asistencia: 'Advíncula' },
            { tipo: 'gol', jugador: 'Merentiel', minuto: 76, equipo: 'visitante', asistencia: 'Zenón' }
        ],
        cambios: [
            { jugadorSaliente: 'Medina', jugadorEntrante: 'Payero', minuto: 60, equipo: 'Local' },
            { jugadorSaliente: 'Blanco', jugadorEntrante: 'De la Vega', minuto: 65, equipo: 'Visitante' },
            { jugadorSaliente: 'Medina', jugadorEntrante: 'Payero', minuto: 60, equipo: 'Local' },
            { jugadorSaliente: 'Blanco', jugadorEntrante: 'De la Vega', minuto: 65, equipo: 'Visitante' },
        ],
        estadisticas:{
            posesionLocal: 60,
            posesionVisitante: 40,
            tirosAlArcoLocal: 5,
            tirosAlArcoVisitante: 2,
            disparosTotalesLocal: 12,
            disparosTotalesVisitante: 8,
            duelosGanadosLocal: 20,
            duelosGanadosVisitante: 18,
            faltasLocal: 10,
            faltasVisitante: 12
        },
        ultimosPartidosLocal: [
            {
                local: 'Boca Juniors',
                visitante: 'Argentinos Juniors',
                golesLocal: 4,
                golesVisitante: 0,
                escudoLocal: 'https://link-a-imagen-de-boca.com',
                escudoVisitante: 'https://link-a-imagen-de-argentinos.com'
            },
            {
                local: 'Rosario Central',
                visitante: 'Boca Juniors',
                golesLocal: 1,
                golesVisitante: 1,
                escudoLocal: 'https://link-a-imagen-de-rosario-central.com',
                escudoVisitante: 'https://link-a-imagen-de-boca.com'
            },
            {
                local: 'Boca Juniors',
                visitante: 'Patronato',
                golesLocal: 2,
                golesVisitante: 0,
                escudoLocal: 'https://link-a-imagen-de-boca.com',
                escudoVisitante: 'https://link-a-imagen-de-patronato.com'
            },
            {
                local: 'Independiente',
                visitante: 'Boca Juniors',
                golesLocal: 0,
                golesVisitante: 1,
                escudoLocal: 'https://link-a-imagen-de-independiente.com',
                escudoVisitante: 'https://link-a-imagen-de-boca.com'
            },
            {
                local: 'Racing Club',
                visitante: 'Boca Juniors',
                golesLocal: 1,
                golesVisitante: 2,
                escudoLocal: 'https://link-a-imagen-de-racing.com',
                escudoVisitante: 'https://link-a-imagen-de-boca.com'
            }
        ],
        ultimosPartidosVisitante: [
            {
                local: 'Lanus',
                visitante: 'Argentinos Juniors',
                golesLocal: 4,
                golesVisitante: 0,
                escudoLocal: 'https://link-a-imagen-de-boca.com',
                escudoVisitante: 'https://link-a-imagen-de-argentinos.com'
            },
            {
                local: 'Rosario Central',
                visitante: 'Boca Juniors',
                golesLocal: 1,
                golesVisitante: 1,
                escudoLocal: 'https://link-a-imagen-de-rosario-central.com',
                escudoVisitante: 'https://link-a-imagen-de-boca.com'
            },
            {
                local: 'Boca Juniors',
                visitante: 'Patronato',
                golesLocal: 2,
                golesVisitante: 0,
                escudoLocal: 'https://link-a-imagen-de-boca.com',
                escudoVisitante: 'https://link-a-imagen-de-patronato.com'
            },
            {
                local: 'Independiente',
                visitante: 'Boca Juniors',
                golesLocal: 0,
                golesVisitante: 1,
                escudoLocal: 'https://link-a-imagen-de-independiente.com',
                escudoVisitante: 'https://link-a-imagen-de-boca.com'
            },
            {
                local: 'Racing Club',
                visitante: 'Boca Juniors',
                golesLocal: 1,
                golesVisitante: 2,
                escudoLocal: 'https://link-a-imagen-de-racing.com',
                escudoVisitante: 'https://link-a-imagen-de-boca.com'
            }
        ]
    },
    {
        id: 2,
        imagen1:"",
        equipo1: "Dep. Riestra",
        imagen2:"",
        equipo2: "Colon",
        estado: "En vivo"
    },
    {
        id: 3,
        imagen1:"",
        equipo1: "Godoy Cruz",
        imagen2:"",
        equipo2: "Quilmes",
        estado: "En vivo"
    },
    {
        id: 4,
        imagen1:"",
        equipo1: "Güemes(Sda)",
        imagen2:"",
        equipo2: "Estudiantes(BA)",
        estado: "En vivo"
    },
    {
        id: 5,
        imagen1:"",
        equipo1: "Brown(Adrogué)",
        imagen2:"",
        equipo2: "Huracan",
        estado: "19:00"
    },
    {
        id: 6,
        imagen1:"",
        equipo1: "Dep. Moron",
        imagen2:"",
        equipo2: "Aldosivi",
        estado: "19:00"
    },
    {
        id: 7,
        imagen1:"",
        equipo1: "Los Andes",
        imagen2:"",
        equipo2: "Central Cordoba(Sda)",
        estado: "19:00"
    },
    {
        id: 8,
        imagen1:"",
        equipo1: "Santamarina",
        imagen2:"",
        equipo2: "San Martin(Tucuman)",
        estado: "19:00"
    },
    {
        id: 9,
        imagen1:"",
        equipo1: "Alvarado",
        imagen2:"",
        equipo2: "Patronato",
        estado: "21:00"
    },
    {
        id: 10,
        imagen1:"",
        equipo1: "Atl. Tucuman",
        imagen2:"",
        equipo2: "Agropecuario",
        estado: "21:00"
    },
    {
        id: 11,
        imagen1:"",
        equipo1: "Atlanta",
        imagen2:"",
        equipo2: "San Martin(SJ)",
        estado: "21:00"
    },
    {
        id: 12,
        imagen1:"",
        equipo1: "Gimnasia(Mendoza)",
        imagen2:"",
        equipo2: "All Boys",
        estado: "21:00"
    },
]


export default partidos; 
