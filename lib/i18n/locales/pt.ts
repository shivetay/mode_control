import type { TranslationMessages } from '../types';

export const pt = {
  appName: 'Diário de Humor',
  common: {
    error: 'Erro',
    save: 'Guardar',
    next: 'Seguinte',
    all: 'Todos',
    clear: 'Limpar',
    cancel: 'Cancelar',
    done: 'Concluído',
  },
  tabs: {
    home: 'Início',
    add: 'Adicionar',
    history: 'Histórico',
    info: 'Info',
  },
  home: {
    welcomeLead: 'Bem-vindo de volta,',
    welcomeBody: 'Como se sente hoje? Escolha uma das opções abaixo.',
    addMoodTitle: 'Adicionar humor',
    addMoodSubtitle: 'Registe como se sente',
    historyTitle: 'Histórico',
    historySubtitle: 'Entradas anteriores',
    infoTitle: 'Informações',
    infoSubtitle: 'Dicas e recursos',
    settingsTitle: 'Definições',
    settingsSubtitle: 'Configuração da aplicação',
  },
  add: {
    question: 'Qual é o seu humor?',
  },
  notes: {
    title: 'Notas',
    description:
      'Anote os seus pensamentos, observações ou o que lhe vier à cabeça. Este é o seu espaço seguro.',
    moodPrefix: 'Humor selecionado:',
    placeholder: 'Comece a escrever aqui...',
    noMoodError: 'Nenhum humor selecionado.',
    saveError: 'Não foi possível guardar a entrada. Tente novamente.',
  },
  history: {
    title: 'Histórico',
    journeyTitle: 'A sua jornada',
    journeySubtitle: 'Um registo da sua paisagem emocional.',
    empty: 'Sem entradas para os filtros selecionados.',
    filtersTitle: 'Filtros',
    moodFilter: 'Humor',
    dateFilter: 'Data',
    moodLabel: 'Humor:',
    noNotes: 'Sem notas',
    previous: 'Anterior',
    next: 'Seguinte',
    calendarHint: 'Selecione um dia para filtrar entradas',
    jumpToDate: 'Ir para a data',
    selectDate: 'Selecionar data',
  },
  moods: {
    swietny: 'Excelente',
    dobry: 'Bom',
    obojetny: 'Neutro',
    slaby: 'Fraco',
  },
  months: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthsShort: [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ],
  dates: {
    today: 'Hoje',
    yesterday: 'Ontem',
    all: 'Todos',
  },
  settings: {
    title: 'Definições',
    notificationsTitle: 'Notificações',
    remindersEnabled: 'Ativar lembretes',
    remindersEnabledHint: 'Receba notificações para registar o seu humor',
    frequencyLabel: 'Frequência',
    morningTimeLabel: 'Hora do lembrete',
    eveningTimeLabel: 'Hora do lembrete noturno',
    saveReminders: 'Guardar',
    invalidTime: 'Introduza uma hora válida no formato HH:MM (ex. 08:00).',
    notificationsPermissionTitle: 'Permissão necessária',
    notificationsPermissionDenied:
      'Para receber lembretes, ative as notificações do Diário de Humor nas definições do sistema.',
    remindersSaved: 'Lembretes guardados',
    remindersSavedHint:
      'As notificações são agendadas pelo sistema e aparecerão mesmo com a aplicação fechada ou o telefone bloqueado.',
    remindersScheduleFailedTitle: 'Não foi possível agendar',
    remindersScheduleFailed:
      'O sistema não confirmou o agendamento dos lembretes. Verifique as permissões de notificação nas definições.',
    openSystemSettings: 'Abrir definições',
    timePlaceholder: '08:00',
    frequency: {
      every4h: 'Em intervalos regulares',
      twiceDaily: 'Duas vezes por dia',
      onceDaily: 'Uma vez por dia',
    },
    intervalHoursLabel: 'De quantas em quantas horas',
    intervalHoursHint: 'De 1 a 24 horas',
    intervalHoursUnit: 'h',
    contactTitle: 'Contacto',
    contactHint: 'Questões sobre a aplicação ou a política de privacidade',
    privacyTitle: 'Política de privacidade',
    openPrivacy: 'Ler política de privacidade',
    privacyModalTitle: 'Política de privacidade',
    closePrivacy: 'Fechar',
    notificationBody: 'Está na hora de registar o seu humor no diário.',
    reminderChannelName: 'Lembretes',
  },
  privacyPolicy: `Última atualização: junho de 2026

A sua privacidade é a nossa prioridade absoluta. Esta Política de Privacidade explica como a aplicação Diário de Humor (a «Aplicação») trata os seus dados. A nossa abordagem é simples: os seus dados pertencem exclusivamente a si.

1. Sem registo nem contas de utilizador

A Aplicação funciona num modelo local-first. Não exigimos a criação de conta, endereço de e-mail, nome nem quaisquer outros dados identificativos. Utiliza a Aplicação de forma totalmente anónima.

2. Onde são armazenados os seus dados?

Todos os dados que introduz na Aplicação — incluindo o humor registado, notas e datas das entradas — são guardados apenas numa base de dados local no seu dispositivo.

• O programador da Aplicação não possui um servidor externo e não tem acesso técnico ao seu histórico de entradas.
• Desinstalar a Aplicação do telefone elimina permanentemente todos os dados nela guardados.

3. Notificações

A Aplicação pode enviar lembretes locais para registar o seu humor. São agendados apenas no seu dispositivo e não requerem o envio de dados para servidores externos.

4. Linhas de apoio e ligações externas

A secção «Onde procurar ajuda» contém números de telefone de apoio e ligações a páginas de informação publicamente disponíveis (portais governamentais, ministérios da saúde e sites oficiais de operadores de linhas de apoio). Estes dados estão integrados na aplicação e não são obtidos automaticamente da Internet durante a utilização da Aplicação.

• A escolha do país ou região dos números de apoio é guardada apenas localmente no seu dispositivo.
• Ao tocar num número de telefone ou numa ligação, a Aplicação pode abrir uma chamada ou o browser do sistema. Nesse caso, aplicam-se as políticas de privacidade e cookies do site de destino ou do operador — fora do controlo do programador da Aplicação.
• Os números e horários podem alterar-se. Antes de utilizar uma linha de apoio, verifique a informação atualizada no site fonte indicado.
• A Aplicação não regista chamadas telefónicas nem monitoriza se as linhas de apoio foram utilizadas.

5. Aviso importante

Diário de Humor destina-se apenas ao registo pessoal do bem-estar e não substitui aconselhamento psicológico, psiquiátrico ou médico profissional. Se tiver sintomas preocupantes, consulte um especialista.

6. Contacto

Se tiver questões sobre a Aplicação ou esta Política de Privacidade, pode contactar o programador em: lddev@outlook.com`,
  info: {
    title: 'Informações',
    helpTitle: 'Onde procurar ajuda',
    countryLabel: 'País / região dos números',
    verifiedLabel: 'Última verificação',
    officialSource: 'Fonte oficial de informação',
    moreInfo: 'Página informativa',
    helplineDisclaimer:
      'Os números e horários provêm de fontes oficiais públicas ou de operadores de linhas de apoio. Antes de ligar, verifique a informação atualizada no site indicado.',
    countries: {
      PL: 'Polónia',
      DE: 'Alemanha',
      GB: 'Reino Unido',
      FR: 'França',
      ES: 'Espanha',
      PT: 'Portugal',
      IT: 'Itália',
      CZ: 'Chéquia',
      NL: 'Países Baixos',
      AT: 'Áustria',
      BE: 'Bélgica',
      SE: 'Suécia',
      RO: 'Roménia',
      UA: 'Ucrânia',
      LT: 'Lituânia',
      LV: 'Letónia',
      EE: 'Estónia',
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
    title: 'Ups!',
    message: 'Este ecrã não existe.',
    link: 'Ir para o ecrã inicial!',
  },
} satisfies TranslationMessages;
