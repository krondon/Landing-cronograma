// import { supabase } from './supabase';

export interface Ponente {
  id: string;
  nombre: string;
  cargo: string | null;
  empresa: string | null;
  bio: string | null;
  foto_url: string | null;
}

export interface ActividadPonente {
  ponente: Ponente;
}

export interface Actividad {
  id: string;
  hora_inicio: string;
  hora_fin: string | null;
  titulo: string;
  descripcion: string | null;
  lugar: string | null;
  tipo: 'actividad' | 'receso' | 'networking' | 'taller' | 'panel';
  orden: number;
  cronograma_actividad_ponentes: ActividadPonente[];
}

export interface Fecha {
  id: string;
  fecha: string;
  etiqueta: string | null;
  cronograma_actividades: Actividad[];
}

export interface Cronograma {
  id: string;
  nombre: string;
  descripcion: string | null;
  slug: string;
  imagen_portada: string | null;
  tema: 'oscuro' | 'claro';
  color_primario: string;
  color_secundario: string;
  color_fondo: string;
  color_texto: string;
  activo: boolean;
  cronograma_fechas: Fecha[];
}

const MOCK_CRONOGRAMAS: Cronograma[] = [
  {
    id: '3',
    nombre: 'Expo FedeIndustria 2026',
    descripcion: 'Visión Global — Salón Zafiro, Hotel Eurobuilding de Caracas. 21, 22 y 23 de mayo.',
    slug: 'expo-fedeindustria-2026',
    imagen_portada: null,
    tema: 'claro',
    color_primario: '#0284C7',
    color_secundario: '#F97316',
    color_fondo: '#F8FAFC',
    color_texto: '#0F172A',
    activo: true,
    cronograma_fechas: [
      {
        id: 'f-21mayo',
        fecha: '2026-05-21',
        etiqueta: 'Jueves 21',
        cronograma_actividades: [
          {
            id: 'd1-1',
            hora_inicio: '09:00',
            hora_fin: '13:00',
            titulo: 'Inauguración Expo FedeIndustria 2026',
            descripcion: 'Programación especial de la inauguración. Intervenciones de Autoridades e Invitados Especiales · Recorrido inaugural.',
            lugar: 'Salón Zafiro',
            tipo: 'actividad',
            orden: 1,
            cronograma_actividad_ponentes: []
          },
          {
            id: 'd1-2',
            hora_inicio: '14:00',
            hora_fin: null,
            titulo: 'Apertura al público general',
            descripcion: null,
            lugar: 'Salón Zafiro',
            tipo: 'actividad',
            orden: 2,
            cronograma_actividad_ponentes: []
          },
          {
            id: 'd1-3',
            hora_inicio: '14:00',
            hora_fin: '14:30',
            titulo: 'Conferencia',
            descripcion: null,
            lugar: 'Salón Zafiro',
            tipo: 'actividad',
            orden: 3,
            cronograma_actividad_ponentes: []
          },
          {
            id: 'd1-4',
            hora_inicio: '14:30',
            hora_fin: '15:00',
            titulo: 'Conferencia',
            descripcion: null,
            lugar: 'Salón Zafiro',
            tipo: 'actividad',
            orden: 4,
            cronograma_actividad_ponentes: []
          },
          {
            id: 'd1-5',
            hora_inicio: '15:00',
            hora_fin: '15:30',
            titulo: 'Rol del Sector Privado en la Comisión de Evaluación y Clasificación de los Activos de la República',
            descripcion: null,
            lugar: 'Salón Zafiro',
            tipo: 'actividad',
            orden: 5,
            cronograma_actividad_ponentes: [
              {
                ponente: {
                  id: 'p-luigi',
                  nombre: 'Luigi Pisella Misuraca',
                  cargo: 'Presidente de Conindustria 2022–2025',
                  empresa: null,
                  bio: 'Empresario industrial venezolano.',
                  foto_url: '/ponentes/ponente5.jpeg'
                }
              }
            ]
          },
          {
            id: 'd1-6',
            hora_inicio: '15:30',
            hora_fin: '16:00',
            titulo: 'Venezuela en cifras, el futuro comienza ahora',
            descripcion: null,
            lugar: 'Salón Zafiro',
            tipo: 'actividad',
            orden: 6,
            cronograma_actividad_ponentes: [
              {
                ponente: {
                  id: 'p-guarino',
                  nombre: 'José I. Guarino Martínez',
                  cargo: 'Magíster en Gerencia de Finanzas y Mercadeo',
                  empresa: null,
                  bio: 'Lic. en Administración de Empresas UCAB (2007). Magister en Administración de Empresas mención Gerencia de Finanzas (2015). Magister Mención Gerencia de Mercadeo UNIMET (2015).',
                  foto_url: '/ponentes/ponente2.jpeg'
                }
              }
            ]
          },
          {
            id: 'd1-7',
            hora_inicio: '16:00',
            hora_fin: '16:30',
            titulo: 'Sostenibilidad: de obligación regulatoria a ventaja competitiva',
            descripcion: null,
            lugar: 'Salón Zafiro',
            tipo: 'actividad',
            orden: 7,
            cronograma_actividad_ponentes: [
              {
                ponente: {
                  id: 'p-mora',
                  nombre: 'Jesús David Mora',
                  cargo: 'Jefe de Asuntos Regulatorios y Científicos',
                  empresa: 'Nestlé Venezuela',
                  bio: null,
                  foto_url: '/ponentes/ponente6.jpeg'
                }
              }
            ]
          },
          {
            id: 'd1-8',
            hora_inicio: '16:30',
            hora_fin: '17:00',
            titulo: 'Construyendo empresas rentables',
            descripcion: null,
            lugar: 'Salón Zafiro',
            tipo: 'actividad',
            orden: 8,
            cronograma_actividad_ponentes: [
              {
                ponente: {
                  id: 'p-karla',
                  nombre: 'Karla Mary Hernández',
                  cargo: 'Consultora de gobierno corporativo y finanzas',
                  empresa: null,
                  bio: null,
                  foto_url: '/ponentes/ponente3.jpeg'
                }
              }
            ]
          },
          {
            id: 'd1-9',
            hora_inicio: '17:00',
            hora_fin: '17:30',
            titulo: 'Análisis del entorno económico: Retos y oportunidades de la nueva realidad',
            descripcion: null,
            lugar: 'Salón Zafiro',
            tipo: 'actividad',
            orden: 9,
            cronograma_actividad_ponentes: [
              {
                ponente: {
                  id: 'p-luis',
                  nombre: 'Luis Vicente León',
                  cargo: 'Presidente de Datanalisis · Profesor UCAB e IESA',
                  empresa: 'Datanalisis',
                  bio: 'Economista (UCAB), Magister en Ingeniería Empresarial (UCAB). Director de Corporación Grupo Químico, Tendencias Digitales, LifeInvest, Agharta RealEstate, Cabo de Gata.',
                  foto_url: '/ponentes/ponente1.jpeg'
                }
              }
            ]
          },
          {
            id: 'd1-10',
            hora_inicio: '17:30',
            hora_fin: '18:00',
            titulo: 'La IA no sabe leer tu empresa',
            descripcion: null,
            lugar: 'Salón Zafiro',
            tipo: 'actividad',
            orden: 10,
            cronograma_actividad_ponentes: [
              {
                ponente: {
                  id: 'p-abrahan',
                  nombre: 'Abrahan García',
                  cargo: 'Gerente General de MORNA Tech',
                  empresa: 'MORNA Tech',
                  bio: null,
                  foto_url: '/ponentes/ponente4.jpeg'
                }
              }
            ]
          }
        ]
      },
      {
        id: 'f-22mayo',
        fecha: '2026-05-22',
        etiqueta: 'Viernes 22',
        cronograma_actividades: [
          {
            id: 'd2-1',
            hora_inicio: '09:30',
            hora_fin: '09:50',
            titulo: 'Los ángulos ciegos: Una charla que salva vidas',
            descripcion: null,
            lugar: 'Salón Zafiro',
            tipo: 'actividad',
            orden: 1,
            cronograma_actividad_ponentes: [
              {
                ponente: {
                  id: 'p-xiomara',
                  nombre: 'Xiomara Hoyos',
                  cargo: 'Directora Nacional de FedeIndustria · Presidenta AIEM',
                  empresa: 'FedeIndustria',
                  bio: null,
                  foto_url: '/ponentes/ponente13.jpeg'
                }
              },
              {
                ponente: {
                  id: 'p-wilvani',
                  nombre: 'Wilvani León',
                  cargo: 'Presidente de Motoprevención',
                  empresa: 'Motoprevención',
                  bio: null,
                  foto_url: null
                }
              }
            ]
          },
          {
            id: 'd2-2',
            hora_inicio: '09:50',
            hora_fin: '10:10',
            titulo: '¿Dónde se consume la energía en una industria? Radiografía y Plan de reestructuración eléctrica',
            descripcion: 'Para la competitividad internacional de la producción venezolana.',
            lugar: 'Salón Zafiro',
            tipo: 'actividad',
            orden: 2,
            cronograma_actividad_ponentes: [
              {
                ponente: {
                  id: 'p-german',
                  nombre: 'Germán Oropeza',
                  cargo: 'BU Manager en ABB',
                  empresa: 'ABB',
                  bio: 'Ingeniero eléctrico especializado con más de 15 años de trayectoria en automatización y electrificación.',
                  foto_url: '/ponentes/ponente7.jpeg'
                }
              }
            ]
          },
          {
            id: 'd2-3',
            hora_inicio: '10:10',
            hora_fin: '10:40',
            titulo: 'Conferencia',
            descripcion: null,
            lugar: 'Salón Zafiro',
            tipo: 'actividad',
            orden: 3,
            cronograma_actividad_ponentes: []
          },
          {
            id: 'd2-4',
            hora_inicio: '10:40',
            hora_fin: '11:10',
            titulo: 'Venezuela Inteligente: Conectividad, Innovación y Producción para competir en la nueva economía mundial',
            descripcion: null,
            lugar: 'Salón Zafiro',
            tipo: 'actividad',
            orden: 4,
            cronograma_actividad_ponentes: [
              {
                ponente: {
                  id: 'p-luisbernardo',
                  nombre: 'Dr. Luis Bernardo',
                  cargo: 'Presidente de Digitel',
                  empresa: 'Digitel',
                  bio: null,
                  foto_url: null
                }
              }
            ]
          },
          {
            id: 'd2-5',
            hora_inicio: '11:10',
            hora_fin: '13:30',
            titulo: 'Conferencia',
            descripcion: null,
            lugar: 'Salón Zafiro',
            tipo: 'actividad',
            orden: 5,
            cronograma_actividad_ponentes: []
          },
          {
            id: 'd2-receso',
            hora_inicio: '13:30',
            hora_fin: '14:00',
            titulo: 'Receso',
            descripcion: null,
            lugar: null,
            tipo: 'receso',
            orden: 6,
            cronograma_actividad_ponentes: []
          },
          {
            id: 'd2-10',
            hora_inicio: '14:00',
            hora_fin: '15:00',
            titulo: 'Panel: El rol estratégico de los gremios en la Visión Global de la economía venezolana',
            descripcion: 'Competitividad, integración y crecimiento productivo.',
            lugar: 'Salón Zafiro',
            tipo: 'panel',
            orden: 7,
            cronograma_actividad_ponentes: [
              {
                ponente: {
                  id: 'p-nelin',
                  nombre: 'Nelin Escalante',
                  cargo: 'Periodista y analista económico, de negocios y mercadeo',
                  empresa: null,
                  bio: null,
                  foto_url: '/ponentes/ponente10.jpeg'
                }
              }
            ]
          },
          {
            id: 'd2-11',
            hora_inicio: '15:00',
            hora_fin: '16:00',
            titulo: 'Panel: Mercadeo que funciona',
            descripcion: null,
            lugar: 'Salón Zafiro',
            tipo: 'panel',
            orden: 8,
            cronograma_actividad_ponentes: [
              {
                ponente: {
                  id: 'p-montoya',
                  nombre: 'Julio Montoya',
                  cargo: 'Especialista en Marketing y Comunicación Estratégica',
                  empresa: null,
                  bio: null,
                  foto_url: null
                }
              }
            ]
          },
          {
            id: 'd2-12',
            hora_inicio: '16:00',
            hora_fin: '16:20',
            titulo: 'De la adopción a la transformación: El sector privado como actor protagónico en la era de la IA',
            descripcion: null,
            lugar: 'Salón Zafiro',
            tipo: 'actividad',
            orden: 9,
            cronograma_actividad_ponentes: [
              {
                ponente: {
                  id: 'p-javier',
                  nombre: 'Javier Martínez',
                  cargo: 'Experto en Deep Tech e Inteligencia Artificial',
                  empresa: null,
                  bio: 'Matemático y economista.',
                  foto_url: '/ponentes/ponente9.jpeg'
                }
              }
            ]
          },
          {
            id: 'd2-13',
            hora_inicio: '16:20',
            hora_fin: '16:40',
            titulo: 'Modernización de los medios de pago en Venezuela',
            descripcion: null,
            lugar: 'Salón Zafiro',
            tipo: 'actividad',
            orden: 10,
            cronograma_actividad_ponentes: [
              {
                ponente: {
                  id: 'p-carlos',
                  nombre: 'Carlos Moreno',
                  cargo: 'CEO de BTC Banking Technologies',
                  empresa: 'BTC Banking Technologies',
                  bio: null,
                  foto_url: null
                }
              }
            ]
          },
          {
            id: 'd2-14',
            hora_inicio: '17:00',
            hora_fin: '17:30',
            titulo: 'Tendencias del Consumidor Venezolano y Estrategias de las Empresas Ganadoras 2026',
            descripcion: null,
            lugar: 'Salón Zafiro',
            tipo: 'actividad',
            orden: 11,
            cronograma_actividad_ponentes: [
              {
                ponente: {
                  id: 'p-fabian',
                  nombre: 'Fabián J. Campos',
                  cargo: 'Gerente de Escenarios de Datanalisis · Profesor UNIMET',
                  empresa: 'Datanalisis',
                  bio: 'Economista Empresarial, Universidad Metropolitana. Magíster en Dirección Financiera, Universidad Isabel I de Castilla.',
                  foto_url: '/ponentes/ponente12.jpeg'
                }
              }
            ]
          },
          {
            id: 'd2-15',
            hora_inicio: '17:30',
            hora_fin: '18:00',
            titulo: 'IA para el Crecimiento Empresarial',
            descripcion: null,
            lugar: 'Salón Zafiro',
            tipo: 'actividad',
            orden: 12,
            cronograma_actividad_ponentes: [
              {
                ponente: {
                  id: 'p-jean',
                  nombre: 'Jean Marco Lovino',
                  cargo: 'CEO & Co-Founder de Intezia',
                  empresa: 'Intezia',
                  bio: null,
                  foto_url: '/ponentes/ponente8.jpeg'
                }
              }
            ]
          }
        ]
      },
      {
        id: 'f-23mayo',
        fecha: '2026-05-23',
        etiqueta: 'Sábado 23',
        cronograma_actividades: [
          {
            id: 'd3-1',
            hora_inicio: '10:00',
            hora_fin: '12:00',
            titulo: 'Master Class: IA para Tomadores de Decisiones',
            descripcion: 'Optimiza, automatiza y escala tus estrategias de marketing.',
            lugar: 'Salón Zafiro',
            tipo: 'taller',
            orden: 1,
            cronograma_actividad_ponentes: [
              {
                ponente: {
                  id: 'p-isbelt',
                  nombre: 'Isbelt Venegas',
                  cargo: 'Gerente de Mercadeo de Avanti · Líder de Transformación Digital',
                  empresa: 'Avanti',
                  bio: null,
                  foto_url: '/ponentes/ponente15.jpeg'
                }
              }
            ]
          },
          {
            id: 'd3-2',
            hora_inicio: '14:00',
            hora_fin: '17:00',
            titulo: 'Ruedas de Negocios',
            descripcion: null,
            lugar: 'Salón Zafiro',
            tipo: 'networking',
            orden: 2,
            cronograma_actividad_ponentes: []
          },
          {
            id: 'd3-3',
            hora_inicio: '17:30',
            hora_fin: '19:00',
            titulo: 'Actividades especiales de Clausura',
            descripcion: null,
            lugar: 'Tarima del Salón Plaza Real',
            tipo: 'actividad',
            orden: 3,
            cronograma_actividad_ponentes: []
          }
        ]
      }
    ]
  }
];

export async function getCronogramaBySlug(slug: string): Promise<Cronograma | null> {
  const cronograma = MOCK_CRONOGRAMAS.find(c => c.slug === slug);
  return cronograma || null;
}

export async function getAllCronogramas(): Promise<Cronograma[]> {
  return MOCK_CRONOGRAMAS;
}

export function formatFecha(fechaStr: string, etiqueta: string | null): string {
  if (etiqueta) return etiqueta;
  const date = new Date(fechaStr + 'T12:00:00');
  return date.toLocaleDateString('es-AR', { weekday: 'long', day: 'numeric', month: 'long' });
}

export function formatHora(hora: string): string {
  return hora.slice(0, 5);
}

export function getPonentesDelDia(fecha: Fecha): Array<{ ponente: Ponente; titulo: string }> {
  const seen = new Set<string>();
  const result: Array<{ ponente: Ponente; titulo: string }> = [];
  for (const act of fecha.cronograma_actividades) {
    for (const ap of act.cronograma_actividad_ponentes) {
      if (!seen.has(ap.ponente.id)) {
        seen.add(ap.ponente.id);
        result.push({ ponente: ap.ponente, titulo: act.titulo });
      }
    }
  }
  return result;
}
