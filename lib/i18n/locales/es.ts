import type { TranslationMessages } from '../types';

export const es = {
  appName: 'Diario de ánimo',
  common: {
    error: 'Error',
    save: 'Guardar',
    next: 'Siguiente',
    all: 'Todos',
    clear: 'Borrar',
    cancel: 'Cancelar',
    done: 'Listo',
  },
  tabs: {
    home: 'Inicio',
    add: 'Añadir',
    history: 'Historial',
    info: 'Info',
  },
  home: {
    welcomeLead: 'Bienvenido de nuevo,',
    welcomeBody: '¿Cómo te sientes hoy? Elige una de las opciones a continuación.',
    addMoodTitle: 'Añadir ánimo',
    addMoodSubtitle: 'Registra cómo te sientes',
    historyTitle: 'Historial',
    historySubtitle: 'Entradas anteriores',
    infoTitle: 'Información',
    infoSubtitle: 'Consejos y recursos',
    settingsTitle: 'Ajustes',
    settingsSubtitle: 'Configuración de la aplicación',
  },
  add: {
    question: '¿Cuál es tu ánimo?',
  },
  notes: {
    title: 'Notas',
    description:
      'Anota tus pensamientos, observaciones o lo que se te ocurra. Este es tu espacio seguro.',
    moodPrefix: 'Ánimo seleccionado:',
    placeholder: 'Empieza a escribir aquí...',
    noMoodError: 'No se ha seleccionado ningún ánimo.',
    saveError: 'No se pudo guardar la entrada. Inténtalo de nuevo.',
  },
  history: {
    title: 'Historial',
    journeyTitle: 'Tu recorrido',
    journeySubtitle: 'Un registro de tu paisaje emocional.',
    empty: 'No hay entradas para los filtros seleccionados.',
    filtersTitle: 'Filtros',
    moodFilter: 'Ánimo',
    dateFilter: 'Fecha',
    moodLabel: 'Ánimo:',
    noNotes: 'Sin notas',
    previous: 'Anterior',
    next: 'Siguiente',
    calendarHint: 'Selecciona un día para filtrar entradas',
    jumpToDate: 'Ir a la fecha',
    selectDate: 'Seleccionar fecha',
  },
  moods: {
    swietny: 'Excelente',
    dobry: 'Bueno',
    obojetny: 'Neutral',
    slaby: 'Bajo',
  },
  months: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ],
  monthsShort: [
    'Ene',
    'Feb',
    'Mar',
    'Abr',
    'May',
    'Jun',
    'Jul',
    'Ago',
    'Sep',
    'Oct',
    'Nov',
    'Dic',
  ],
  dates: {
    today: 'Hoy',
    yesterday: 'Ayer',
    all: 'Todos',
  },
  settings: {
    title: 'Ajustes',
    notificationsTitle: 'Notificaciones',
    remindersEnabled: 'Activar recordatorios',
    remindersEnabledHint: 'Recibe notificaciones para registrar tu ánimo',
    frequencyLabel: 'Frecuencia',
    morningTimeLabel: 'Hora del recordatorio',
    eveningTimeLabel: 'Hora del recordatorio nocturno',
    saveReminders: 'Guardar',
    invalidTime: 'Introduce una hora válida en formato HH:MM (p. ej. 08:00).',
    notificationsPermissionTitle: 'Permiso necesario',
    notificationsPermissionDenied:
      'Para recibir recordatorios, activa las notificaciones de Diario de ánimo en los ajustes del sistema.',
    remindersSaved: 'Recordatorios guardados',
    remindersSavedHint:
      'Las notificaciones las programa el sistema y aparecerán incluso con la aplicación cerrada o el teléfono bloqueado.',
    remindersScheduleFailedTitle: 'No se pudo programar',
    remindersScheduleFailed:
      'El sistema no confirmó la programación de recordatorios. Comprueba los permisos de notificación en los ajustes.',
    openSystemSettings: 'Abrir ajustes',
    timePlaceholder: '08:00',
    frequency: {
      every4h: 'A intervalos regulares',
      twiceDaily: 'Dos veces al día',
      onceDaily: 'Una vez al día',
    },
    intervalHoursLabel: 'Cada cuántas horas',
    intervalHoursHint: 'De 1 a 24 horas',
    intervalHoursUnit: 'h',
    contactTitle: 'Contacto',
    contactHint: 'Preguntas sobre la aplicación o la política de privacidad',
    privacyTitle: 'Política de privacidad',
    openPrivacy: 'Leer política de privacidad',
    privacyModalTitle: 'Política de privacidad',
    closePrivacy: 'Cerrar',
    notificationBody: 'Es hora de registrar tu ánimo en el diario.',
    reminderChannelName: 'Recordatorios',
  },
  privacyConsent: {
    title: 'Política de privacidad',
    message:
      'Esta es nuestra política de privacidad. Léela y acéptala para usar la aplicación.',
    openInBrowser: 'Abrir en el navegador',
    accept: 'Acepto y quiero usar la aplicación',
  },
  privacyPolicy: `Última actualización: junio de 2026

Tu privacidad es nuestra prioridad absoluta. Esta Política de Privacidad explica cómo la aplicación Diario de ánimo (la «Aplicación») trata tus datos. Nuestro enfoque es sencillo: tus datos te pertenecen exclusivamente a ti.

1. Sin registro ni cuentas de usuario

La Aplicación funciona con un modelo local-first. No exigimos crear una cuenta, proporcionar un correo electrónico, nombre ni ningún otro dato identificativo. Utilizas la Aplicación de forma completamente anónima.

2. ¿Dónde se almacenan tus datos?

Todos los datos que introduces en la Aplicación — incluido el ánimo registrado, las notas y las fechas de las entradas — se guardan únicamente en una base de datos local en tu dispositivo.

• El desarrollador de la Aplicación no dispone de un servidor externo y no tiene acceso técnico a tu historial de entradas.
• Desinstalar la Aplicación del teléfono elimina de forma permanente todos los datos almacenados en ella.

3. Notificaciones

La Aplicación puede enviar recordatorios locales para registrar tu ánimo. Se programan únicamente en tu dispositivo y no requieren enviar datos a servidores externos.

4. Líneas de ayuda y enlaces externos

La sección «Dónde buscar ayuda» contiene números de teléfono de apoyo y enlaces a páginas de información de acceso público (portales gubernamentales, ministerios de salud y sitios oficiales de operadores de líneas de ayuda). Estos datos están integrados en la aplicación y no se obtienen automáticamente de Internet durante el uso de la Aplicación.

• La elección del país o región de los números de ayuda se guarda únicamente de forma local en tu dispositivo.
• Al pulsar un número de teléfono o un enlace, la Aplicación puede abrir una llamada o el navegador del sistema. En ese caso, se aplican las políticas de privacidad y cookies del sitio de destino o del operador — fuera del control del desarrollador de la Aplicación.
• Los números y horarios pueden cambiar. Antes de usar una línea de ayuda, comprueba la información actualizada en el sitio fuente indicado.
• La Aplicación no registra llamadas telefónicas ni monitoriza si se han utilizado las líneas de ayuda.

5. Aviso importante

Diario de ánimo sirve únicamente para el registro personal del bienestar y no sustituye el consejo psicológico, psiquiátrico o médico profesional. Si tienes síntomas preocupantes, consulta a un especialista.

6. Contacto

Si tienes preguntas sobre la Aplicación o esta Política de Privacidad, puedes contactar con el desarrollador en: lddev@outlook.com`,
  info: {
    title: 'Información',
    helpTitle: 'Dónde buscar ayuda',
    countryLabel: 'País / región de los números',
    verifiedLabel: 'Última verificación',
    officialSource: 'Fuente oficial de información',
    moreInfo: 'Página informativa',
    helplineDisclaimer:
      'Los números y horarios provienen de fuentes oficiales públicas o de operadores de líneas de ayuda. Antes de llamar, compruebe la información actualizada en la página indicada.',
    countries: {
      PL: 'Polonia',
      DE: 'Alemania',
      GB: 'Reino Unido',
      FR: 'Francia',
      ES: 'España',
      PT: 'Portugal',
      IT: 'Italia',
      CZ: 'Chequia',
      NL: 'Países Bajos',
      AT: 'Austria',
      BE: 'Bélgica',
      SE: 'Suecia',
      RO: 'Rumania',
      UA: 'Ucrania',
      LT: 'Lituania',
      LV: 'Letonia',
      EE: 'Estonia',
    },
  },
  language: {
    title: 'Idioma',
    names: {
      pl: 'Polski',
      en: 'English',
      de: 'Deutsch',
      fr: 'Français',
      es: 'Español',
      pt: 'Português',
      it: 'Italiano',
      cs: 'Čeština',
      nl: 'Nederlands',
      sv: 'Svenska',
      ro: 'Română',
      uk: 'Українська',
      lt: 'Lietuvių',
      lv: 'Latviešu',
      et: 'Eesti',
    },
  },
  notFound: {
    title: '¡Ups!',
    message: 'Esta pantalla no existe.',
    link: '¡Ir a la pantalla de inicio!',
  },
} satisfies TranslationMessages;
