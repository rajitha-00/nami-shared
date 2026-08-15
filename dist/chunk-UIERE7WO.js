import { STORAGE_KEYS } from './chunk-3XYH3GIR.js';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from './chunk-TSLK7DRZ.js';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// src/i18n/locales/de/common.json
var common_default = {
  appName: "Hotel OS",
  actions: {
    save: "Speichern",
    cancel: "Abbrechen",
    delete: "L\xF6schen",
    edit: "Bearbeiten",
    view: "Ansehen",
    create: "Erstellen",
    search: "Suchen",
    filter: "Filtern",
    export: "Exportieren",
    refresh: "Aktualisieren",
    back: "Zur\xFCck",
    next: "Weiter",
    previous: "Vorherige",
    confirm: "Best\xE4tigen",
    close: "Schlie\xDFen",
    retry: "Erneut versuchen",
    logout: "Abmelden",
    login: "Anmelden",
    clear: "Leeren",
    changeLanguage: "Sprache \xE4ndern",
    openMenu: "Men\xFC \xF6ffnen",
    showPassword: "Passwort anzeigen",
    hidePassword: "Passwort verbergen"
  },
  states: {
    loading: "Wird geladen\u2026",
    noResults: "Keine Ergebnisse gefunden",
    errorTitle: "Etwas ist schiefgelaufen",
    error: {
      generic: "Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
      network: "Netzwerkfehler. Pr\xFCfen Sie Ihre Verbindung und versuchen Sie es erneut."
    },
    success: {
      saved: "Erfolgreich gespeichert",
      deleted: "Erfolgreich gel\xF6scht"
    }
  },
  table: {
    rowsPerPage: "Zeilen pro Seite",
    of: "von",
    page: "Seite",
    sortBy: "Sortieren nach",
    actions: "Aktionen",
    selectAll: "Alle Zeilen ausw\xE4hlen",
    selectRow: "Zeile ausw\xE4hlen",
    displayedRows: "{{from}}\u2013{{to}} von {{count}}"
  },
  validation: {
    required: "Dieses Feld ist erforderlich",
    email: "Geben Sie eine g\xFCltige E-Mail-Adresse ein",
    minLength: "Muss mindestens {{count}} Zeichen enthalten",
    maxLength: "Darf h\xF6chstens {{count}} Zeichen enthalten",
    passwordWeak: "Das Passwort ben\xF6tigt 8+ Zeichen mit Gro\xDF-, Kleinbuchstaben und einer Ziffer",
    passwordMismatch: "Die Passw\xF6rter stimmen nicht \xFCberein"
  },
  datetime: {
    today: "Heute",
    yesterday: "Gestern"
  },
  status: {
    ACTIVE: "Aktiv",
    INACTIVE: "Inaktiv",
    PENDING: "Ausstehend",
    SUSPENDED: "Gesperrt",
    EXPIRED: "Abgelaufen",
    CANCELLED: "Storniert"
  },
  timeline: {
    resource: "Ressource",
    today: "Heute",
    legend: "Legende"
  },
  wizard: {
    step: "Schritt {{current}} von {{total}}",
    finish: "Fertigstellen"
  },
  dateRange: {
    label: "Zeitraum",
    from: "Von",
    to: "Bis",
    apply: "Anwenden",
    presets: {
      last7: "Letzte 7 Tage",
      next7: "N\xE4chste 7 Tage",
      next14: "N\xE4chste 14 Tage",
      thisMonth: "Dieser Monat"
    }
  },
  languages: {
    en: "English",
    si: "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD",
    ta: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD",
    es: "Espa\xF1ol",
    zh: "\u4E2D\u6587",
    fr: "Fran\xE7ais",
    de: "Deutsch"
  },
  restaurant: {
    table: "Tisch",
    floor: "Etage",
    seats: "Sitze",
    queued: "Warteschlange",
    preparing: "In Zubereitung",
    ready: "Bereit",
    served: "Serviert",
    inStock: "Auf Lager",
    outOfStock: "Nicht auf Lager"
  }
};

// src/i18n/locales/en/common.json
var common_default2 = {
  appName: "Hotel OS",
  actions: {
    save: "Save",
    cancel: "Cancel",
    delete: "Delete",
    edit: "Edit",
    view: "View",
    create: "Create",
    search: "Search",
    filter: "Filter",
    export: "Export",
    refresh: "Refresh",
    back: "Back",
    next: "Next",
    previous: "Previous",
    confirm: "Confirm",
    close: "Close",
    retry: "Retry",
    logout: "Log out",
    login: "Log in",
    clear: "Clear",
    changeLanguage: "Change language",
    openMenu: "Open menu",
    showPassword: "Show password",
    hidePassword: "Hide password"
  },
  states: {
    loading: "Loading\u2026",
    noResults: "No results found",
    errorTitle: "Something went wrong",
    error: {
      generic: "An unexpected error occurred. Please try again.",
      network: "Network error. Check your connection and try again."
    },
    success: {
      saved: "Saved successfully",
      deleted: "Deleted successfully"
    }
  },
  table: {
    rowsPerPage: "Rows per page",
    of: "of",
    page: "Page",
    sortBy: "Sort by",
    actions: "Actions",
    selectAll: "Select all rows",
    selectRow: "Select row",
    displayedRows: "{{from}}\u2013{{to}} of {{count}}"
  },
  validation: {
    required: "This field is required",
    email: "Enter a valid email address",
    minLength: "Must be at least {{count}} characters",
    maxLength: "Must be at most {{count}} characters",
    passwordWeak: "Password needs 8+ characters with uppercase, lowercase and a number",
    passwordMismatch: "Passwords do not match"
  },
  datetime: {
    today: "Today",
    yesterday: "Yesterday"
  },
  status: {
    ACTIVE: "Active",
    INACTIVE: "Inactive",
    PENDING: "Pending",
    SUSPENDED: "Suspended",
    EXPIRED: "Expired",
    CANCELLED: "Cancelled"
  },
  timeline: {
    resource: "Resource",
    today: "Today",
    legend: "Legend"
  },
  wizard: {
    step: "Step {{current}} of {{total}}",
    finish: "Finish"
  },
  dateRange: {
    label: "Date range",
    from: "From",
    to: "To",
    apply: "Apply",
    presets: {
      last7: "Last 7 days",
      next7: "Next 7 days",
      next14: "Next 14 days",
      thisMonth: "This month"
    }
  },
  languages: {
    en: "English",
    si: "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD",
    ta: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD",
    es: "Espa\xF1ol",
    zh: "\u4E2D\u6587",
    fr: "Fran\xE7ais",
    de: "Deutsch"
  },
  restaurant: {
    table: "Table",
    floor: "Floor",
    seats: "Seats",
    queued: "Queued",
    preparing: "Preparing",
    ready: "Ready",
    served: "Served",
    inStock: "In Stock",
    outOfStock: "Out of Stock"
  }
};

// src/i18n/locales/es/common.json
var common_default3 = {
  appName: "Hotel OS",
  actions: {
    save: "Guardar",
    cancel: "Cancelar",
    delete: "Eliminar",
    edit: "Editar",
    view: "Ver",
    create: "Crear",
    search: "Buscar",
    filter: "Filtrar",
    export: "Exportar",
    refresh: "Actualizar",
    back: "Atr\xE1s",
    next: "Siguiente",
    previous: "Anterior",
    confirm: "Confirmar",
    close: "Cerrar",
    retry: "Reintentar",
    logout: "Cerrar sesi\xF3n",
    login: "Iniciar sesi\xF3n",
    clear: "Borrar",
    changeLanguage: "Cambiar idioma",
    openMenu: "Abrir men\xFA",
    showPassword: "Mostrar contrase\xF1a",
    hidePassword: "Ocultar contrase\xF1a"
  },
  states: {
    loading: "Cargando\u2026",
    noResults: "No se encontraron resultados",
    errorTitle: "Algo sali\xF3 mal",
    error: {
      generic: "Ocurri\xF3 un error inesperado. Int\xE9ntalo de nuevo.",
      network: "Error de red. Comprueba tu conexi\xF3n e int\xE9ntalo de nuevo."
    },
    success: {
      saved: "Guardado correctamente",
      deleted: "Eliminado correctamente"
    }
  },
  table: {
    rowsPerPage: "Filas por p\xE1gina",
    of: "de",
    page: "P\xE1gina",
    sortBy: "Ordenar por",
    actions: "Acciones",
    selectAll: "Seleccionar todas las filas",
    selectRow: "Seleccionar fila",
    displayedRows: "{{from}}\u2013{{to}} de {{count}}"
  },
  validation: {
    required: "Este campo es obligatorio",
    email: "Introduce una direcci\xF3n de correo v\xE1lida",
    minLength: "Debe tener al menos {{count}} caracteres",
    maxLength: "Debe tener como m\xE1ximo {{count}} caracteres",
    passwordWeak: "La contrase\xF1a necesita 8+ caracteres con may\xFAscula, min\xFAscula y un n\xFAmero",
    passwordMismatch: "Las contrase\xF1as no coinciden"
  },
  datetime: {
    today: "Hoy",
    yesterday: "Ayer"
  },
  status: {
    ACTIVE: "Activo",
    INACTIVE: "Inactivo",
    PENDING: "Pendiente",
    SUSPENDED: "Suspendido",
    EXPIRED: "Vencido",
    CANCELLED: "Cancelado"
  },
  timeline: {
    resource: "Recurso",
    today: "Hoy",
    legend: "Leyenda"
  },
  wizard: {
    step: "Paso {{current}} de {{total}}",
    finish: "Finalizar"
  },
  dateRange: {
    label: "Rango de fechas",
    from: "Desde",
    to: "Hasta",
    apply: "Aplicar",
    presets: {
      last7: "\xDAltimos 7 d\xEDas",
      next7: "Pr\xF3ximos 7 d\xEDas",
      next14: "Pr\xF3ximos 14 d\xEDas",
      thisMonth: "Este mes"
    }
  },
  languages: {
    en: "English",
    si: "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD",
    ta: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD",
    es: "Espa\xF1ol",
    zh: "\u4E2D\u6587",
    fr: "Fran\xE7ais",
    de: "Deutsch"
  },
  restaurant: {
    table: "Mesa",
    floor: "Piso",
    seats: "Asientos",
    queued: "En cola",
    preparing: "Preparando",
    ready: "Listo",
    served: "Servido",
    inStock: "En stock",
    outOfStock: "Agotado"
  }
};

// src/i18n/locales/fr/common.json
var common_default4 = {
  appName: "Hotel OS",
  actions: {
    save: "Enregistrer",
    cancel: "Annuler",
    delete: "Supprimer",
    edit: "Modifier",
    view: "Voir",
    create: "Cr\xE9er",
    search: "Rechercher",
    filter: "Filtrer",
    export: "Exporter",
    refresh: "Actualiser",
    back: "Retour",
    next: "Suivant",
    previous: "Pr\xE9c\xE9dent",
    confirm: "Confirmer",
    close: "Fermer",
    retry: "R\xE9essayer",
    logout: "Se d\xE9connecter",
    login: "Se connecter",
    clear: "Effacer",
    changeLanguage: "Changer de langue",
    openMenu: "Ouvrir le menu",
    showPassword: "Afficher le mot de passe",
    hidePassword: "Masquer le mot de passe"
  },
  states: {
    loading: "Chargement\u2026",
    noResults: "Aucun r\xE9sultat trouv\xE9",
    errorTitle: "Une erreur est survenue",
    error: {
      generic: "Une erreur inattendue est survenue. Veuillez r\xE9essayer.",
      network: "Erreur r\xE9seau. V\xE9rifiez votre connexion et r\xE9essayez."
    },
    success: {
      saved: "Enregistr\xE9 avec succ\xE8s",
      deleted: "Supprim\xE9 avec succ\xE8s"
    }
  },
  table: {
    rowsPerPage: "Lignes par page",
    of: "sur",
    page: "Page",
    sortBy: "Trier par",
    actions: "Actions",
    selectAll: "S\xE9lectionner toutes les lignes",
    selectRow: "S\xE9lectionner la ligne",
    displayedRows: "{{from}}\u2013{{to}} sur {{count}}"
  },
  validation: {
    required: "Ce champ est obligatoire",
    email: "Saisissez une adresse e-mail valide",
    minLength: "Doit contenir au moins {{count}} caract\xE8res",
    maxLength: "Doit contenir au maximum {{count}} caract\xE8res",
    passwordWeak: "Le mot de passe doit contenir 8+ caract\xE8res avec majuscule, minuscule et un chiffre",
    passwordMismatch: "Les mots de passe ne correspondent pas"
  },
  datetime: {
    today: "Aujourd'hui",
    yesterday: "Hier"
  },
  status: {
    ACTIVE: "Actif",
    INACTIVE: "Inactif",
    PENDING: "En attente",
    SUSPENDED: "Suspendu",
    EXPIRED: "Expir\xE9",
    CANCELLED: "Annul\xE9"
  },
  timeline: {
    resource: "Ressource",
    today: "Aujourd'hui",
    legend: "L\xE9gende"
  },
  wizard: {
    step: "\xC9tape {{current}} sur {{total}}",
    finish: "Terminer"
  },
  dateRange: {
    label: "Plage de dates",
    from: "Du",
    to: "Au",
    apply: "Appliquer",
    presets: {
      last7: "7 derniers jours",
      next7: "7 prochains jours",
      next14: "14 prochains jours",
      thisMonth: "Ce mois-ci"
    }
  },
  languages: {
    en: "English",
    si: "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD",
    ta: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD",
    es: "Espa\xF1ol",
    zh: "\u4E2D\u6587",
    fr: "Fran\xE7ais",
    de: "Deutsch"
  },
  restaurant: {
    table: "Table",
    floor: "\xC9tage",
    seats: "Si\xE8ges",
    queued: "En file d'attente",
    preparing: "En pr\xE9paration",
    ready: "Pr\xEAt",
    served: "Servi",
    inStock: "En stock",
    outOfStock: "En rupture de stock"
  }
};

// src/i18n/locales/si/common.json
var common_default5 = {
  appName: "Hotel OS",
  actions: {
    save: "\u0DC3\u0DD4\u0DBB\u0D9A\u0DD2\u0DB1\u0DCA\u0DB1",
    cancel: "\u0D85\u0DC0\u0DBD\u0D82\u0D9C\u0DD4 \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
    delete: "\u0DB8\u0D9A\u0DB1\u0DCA\u0DB1",
    edit: "\u0DC3\u0D82\u0DC3\u0DCA\u0D9A\u0DBB\u0DAB\u0DBA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
    view: "\u0DB6\u0DBD\u0DB1\u0DCA\u0DB1",
    create: "\u0DC3\u0DCF\u0DAF\u0DB1\u0DCA\u0DB1",
    search: "\u0DC3\u0DDC\u0DBA\u0DB1\u0DCA\u0DB1",
    filter: "\u0DB4\u0DD9\u0DBB\u0DC4\u0DB1",
    export: "\u0DB1\u0DD2\u0DBB\u0DCA\u0DBA\u0DCF\u0DAD \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
    refresh: "\u0DB1\u0DD0\u0DC0\u0DD4\u0DB8\u0DCA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
    back: "\u0D86\u0DB4\u0DC3\u0DD4",
    next: "\u0D8A\u0DC5\u0D9F",
    previous: "\u0DB4\u0DD9\u0DBB",
    confirm: "\u0DAD\u0DC4\u0DC0\u0DD4\u0DBB\u0DD4 \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
    close: "\u0DC0\u0DC3\u0DB1\u0DCA\u0DB1",
    retry: "\u0DB1\u0DD0\u0DC0\u0DAD \u0D8B\u0DAD\u0DCA\u0DC3\u0DCF\u0DC4 \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
    logout: "\u0DB4\u0DD2\u0DA7\u0DC0\u0DB1\u0DCA\u0DB1",
    login: "\u0DB4\u0DD2\u0DC0\u0DD2\u0DC3\u0DD9\u0DB1\u0DCA\u0DB1",
    clear: "\u0DC4\u0DD2\u0DC3\u0DCA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
    changeLanguage: "\u0DB7\u0DCF\u0DC2\u0DCF\u0DC0 \u0DC0\u0DD9\u0DB1\u0DC3\u0DCA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
    openMenu: "\u0DB8\u0DD9\u0DB1\u0DD4\u0DC0 \u0DC0\u0DD2\u0DC0\u0DD8\u0DAD \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
    showPassword: "\u0DB8\u0DD4\u0DBB\u0DB4\u0DAF\u0DBA \u0DB4\u0DD9\u0DB1\u0DCA\u0DC0\u0DB1\u0DCA\u0DB1",
    hidePassword: "\u0DB8\u0DD4\u0DBB\u0DB4\u0DAF\u0DBA \u0DC3\u0D9F\u0DC0\u0DB1\u0DCA\u0DB1"
  },
  states: {
    loading: "\u0DB4\u0DD6\u0DBB\u0DAB\u0DBA \u0DC0\u0DD9\u0DB8\u0DD2\u0DB1\u0DCA\u2026",
    noResults: "\u0DB4\u0DCA\u200D\u0DBB\u0DAD\u0DD2\u0DB5\u0DBD \u0DC4\u0DB8\u0DD4 \u0DB1\u0DDC\u0DC0\u0DD3\u0DBA",
    errorTitle: "\u0DBA\u0DB8\u0D9A\u0DCA \u0DC0\u0DD0\u0DBB\u0DAF\u0DD3 \u0D87\u0DAD",
    error: {
      generic: "\u0D85\u0DB1\u0DB4\u0DDA\u0D9A\u0DCA\u0DC2\u0DD2\u0DAD \u0DAF\u0DDD\u0DC2\u0DBA\u0D9A\u0DCA \u0DC3\u0DD2\u0DAF\u0DD4 \u0DC0\u0DD2\u0DBA. \u0D9A\u0DBB\u0DD4\u0DAB\u0DCF\u0D9A\u0DBB \u0DB1\u0DD0\u0DC0\u0DAD \u0D8B\u0DAD\u0DCA\u0DC3\u0DCF\u0DC4 \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1.",
      network: "\u0DA2\u0DCF\u0DBD \u0DAF\u0DDD\u0DC2\u0DBA\u0D9A\u0DD2. \u0DC3\u0DB8\u0DCA\u0DB6\u0DB1\u0DCA\u0DB0\u0DAD\u0DCF\u0DC0\u0DBA \u0DB4\u0DBB\u0DD3\u0D9A\u0DCA\u0DC2\u0DCF \u0D9A\u0DBB \u0DB1\u0DD0\u0DC0\u0DAD \u0D8B\u0DAD\u0DCA\u0DC3\u0DCF\u0DC4 \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1."
    },
    success: {
      saved: "\u0DC3\u0DCF\u0DBB\u0DCA\u0DAE\u0D9A\u0DC0 \u0DC3\u0DD4\u0DBB\u0D9A\u0DD2\u0DB1 \u0DBD\u0DAF\u0DD3",
      deleted: "\u0DC3\u0DCF\u0DBB\u0DCA\u0DAE\u0D9A\u0DC0 \u0DB8\u0D9A\u0DCF \u0DAF\u0DB8\u0DB1 \u0DBD\u0DAF\u0DD3"
    }
  },
  table: {
    rowsPerPage: "\u0DB4\u0DD2\u0DA7\u0DD4\u0DC0\u0D9A\u0DA7 \u0DB4\u0DDA\u0DC5\u0DD2",
    of: "\u0D9A\u0DD2\u0DB1\u0DCA",
    page: "\u0DB4\u0DD2\u0DA7\u0DD4\u0DC0",
    sortBy: "\u0D85\u0DB1\u0DD4\u0DC0 \u0DB4\u0DD9\u0DC5\u0D9C\u0DC3\u0DCA\u0DC0\u0DB1\u0DCA\u0DB1",
    actions: "\u0D9A\u0DCA\u200D\u0DBB\u0DD2\u0DBA\u0DCF",
    selectAll: "\u0DC3\u0DD2\u0DBA\u0DBD\u0DD4 \u0DB4\u0DDA\u0DC5\u0DD2 \u0DAD\u0DDD\u0DBB\u0DB1\u0DCA\u0DB1",
    selectRow: "\u0DB4\u0DDA\u0DC5\u0DD2\u0DBA \u0DAD\u0DDD\u0DBB\u0DB1\u0DCA\u0DB1",
    displayedRows: "{{count}} \u0D9A\u0DD2\u0DB1\u0DCA {{from}}\u2013{{to}}"
  },
  validation: {
    required: "\u0DB8\u0DD9\u0DB8 \u0D9A\u0DCA\u0DC2\u0DDA\u0DAD\u0DCA\u200D\u0DBB\u0DBA \u0D85\u0DC0\u0DC1\u0DCA\u200D\u0DBA\u0DBA\u0DD2",
    email: "\u0DC0\u0DBD\u0D82\u0D9C\u0DD4 \u0DC0\u0DD2\u0DAF\u0DCA\u200D\u0DBA\u0DD4\u0DAD\u0DCA \u0DAD\u0DD0\u0DB4\u0DD0\u0DBD\u0DCA \u0DBD\u0DD2\u0DB4\u0DD2\u0DB1\u0DBA\u0D9A\u0DCA \u0D87\u0DAD\u0DD4\u0DC5\u0DAD\u0DCA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1",
    minLength: "\u0D85\u0DC0\u0DB8 \u0DC0\u0DC1\u0DBA\u0DD9\u0DB1\u0DCA \u0D85\u0D9A\u0DCA\u0DC2\u0DBB {{count}}\u0D9A\u0DCA \u0DC0\u0DD2\u0DBA \u0DBA\u0DD4\u0DAD\u0DD4\u0DBA",
    maxLength: "\u0D8B\u0DB4\u0DBB\u0DD2\u0DB8 \u0DC0\u0DC1\u0DBA\u0DD9\u0DB1\u0DCA \u0D85\u0D9A\u0DCA\u0DC2\u0DBB {{count}}\u0D9A\u0DCA \u0DC0\u0DD2\u0DBA \u0DBA\u0DD4\u0DAD\u0DD4\u0DBA",
    passwordWeak: "\u0DB8\u0DD4\u0DBB\u0DB4\u0DAF\u0DBA\u0DA7 \u0D85\u0DC0\u0DB8 \u0D85\u0D9A\u0DCA\u0DC2\u0DBB 8\u0D9A\u0DCA, \u0D9A\u0DD0\u0DB4\u0DD2\u0DA7\u0DBD\u0DCA \u0D85\u0D9A\u0DD4\u0DBB\u0D9A\u0DCA, \u0DC3\u0DD2\u0DB8\u0DCA\u0DB4\u0DBD\u0DCA \u0D85\u0D9A\u0DD4\u0DBB\u0D9A\u0DCA \u0DC3\u0DC4 \u0D89\u0DBD\u0D9A\u0DCA\u0D9A\u0DB8\u0D9A\u0DCA \u0D85\u0DC0\u0DC1\u0DCA\u200D\u0DBA\u0DBA\u0DD2",
    passwordMismatch: "\u0DB8\u0DD4\u0DBB\u0DB4\u0DAF \u0DB1\u0DDC\u0D9C\u0DD0\u0DBD\u0DB4\u0DDA"
  },
  datetime: {
    today: "\u0D85\u0DAF",
    yesterday: "\u0D8A\u0DBA\u0DDA"
  },
  status: {
    ACTIVE: "\u0DC3\u0D9A\u0DCA\u200D\u0DBB\u0DD3\u0DBA\u0DBA\u0DD2",
    INACTIVE: "\u0D85\u0D9A\u0DCA\u200D\u0DBB\u0DD3\u0DBA\u0DBA\u0DD2",
    PENDING: "\u0DB4\u0DDC\u0DBB\u0DDC\u0DAD\u0DCA\u0DAD\u0DD4\u0DC0\u0DD9\u0DB1\u0DCA",
    SUSPENDED: "\u0D85\u0DAD\u0DCA\u0DC4\u0DD2\u0DA7\u0DD4\u0DC0\u0DCF \u0D87\u0DAD",
    EXPIRED: "\u0D9A\u0DBD\u0DCA \u0D89\u0D9A\u0DD4\u0DAD\u0DCA \u0DC0\u0DD3 \u0D87\u0DAD",
    CANCELLED: "\u0D85\u0DC0\u0DBD\u0D82\u0D9C\u0DD4 \u0D9A\u0DBB \u0D87\u0DAD"
  },
  timeline: {
    resource: "\u0DC3\u0DB8\u0DCA\u0DB4\u0DAD",
    today: "\u0D85\u0DAF",
    legend: "\u0DC3\u0D82\u0D9A\u0DDA\u0DAD"
  },
  wizard: {
    step: "\u0DB4\u0DD2\u0DBA\u0DC0\u0DBB {{total}} \u0D9A\u0DD2\u0DB1\u0DCA {{current}}",
    finish: "\u0D85\u0DC0\u0DC3\u0DB1\u0DCA \u0D9A\u0DBB\u0DB1\u0DCA\u0DB1"
  },
  dateRange: {
    label: "\u0DAF\u0DD2\u0DB1 \u0DB4\u0DBB\u0DCF\u0DC3\u0DBA",
    from: "\u0DC3\u0DD2\u0DA7",
    to: "\u0DAF\u0D9A\u0DCA\u0DC0\u0DCF",
    apply: "\u0DBA\u0DDC\u0DAF\u0DB1\u0DCA\u0DB1",
    presets: {
      last7: "\u0DB4\u0DC3\u0DD4\u0D9C\u0DD2\u0DBA \u0DAF\u0DD2\u0DB1 7",
      next7: "\u0D89\u0DAF\u0DD2\u0DBB\u0DD2 \u0DAF\u0DD2\u0DB1 7",
      next14: "\u0D89\u0DAF\u0DD2\u0DBB\u0DD2 \u0DAF\u0DD2\u0DB1 14",
      thisMonth: "\u0DB8\u0DD9\u0DB8 \u0DB8\u0DCF\u0DC3\u0DBA"
    }
  },
  languages: {
    en: "English",
    si: "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD",
    ta: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD",
    es: "Espa\xF1ol",
    zh: "\u4E2D\u6587",
    fr: "Fran\xE7ais",
    de: "Deutsch"
  },
  restaurant: {
    table: "\u0DB8\u0DDA\u0DC3\u0DBA",
    floor: "\u0DB8\u0DC4\u0DBD",
    seats: "\u0D86\u0DC3\u0DB1",
    queued: "\u0DB4\u0DD9\u0DC5 \u0D9C\u0DD0\u0DC3\u0DD6",
    preparing: "\u0DC3\u0DD6\u0DAF\u0DCF\u0DB1\u0DB8\u0DCA \u0D9A\u0DBB\u0DB8\u0DD2\u0DB1\u0DCA",
    ready: "\u0DC3\u0DD6\u0DAF\u0DCF\u0DB1\u0DB8\u0DCA",
    served: "\u0DB4\u0DD2\u0DC5\u0DD2\u0D9C\u0DD0\u0DB1\u0DCA\u0DC0\u0DD6",
    inStock: "\u0DAD\u0DDC\u0D9C\u0DBA\u0DDA \u0D87\u0DAD",
    outOfStock: "\u0DAD\u0DDC\u0D9C\u0DBA\u0DDA \u0DB1\u0DD0\u0DAD"
  }
};

// src/i18n/locales/ta/common.json
var common_default6 = {
  appName: "Hotel OS",
  actions: {
    save: "\u0B9A\u0BC7\u0BAE\u0BBF",
    cancel: "\u0BB0\u0BA4\u0BCD\u0BA4\u0BC1\u0B9A\u0BC6\u0BAF\u0BCD",
    delete: "\u0BA8\u0BC0\u0B95\u0BCD\u0B95\u0BC1",
    edit: "\u0BA4\u0BBF\u0BB0\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1",
    view: "\u0BAA\u0BBE\u0BB0\u0BCD",
    create: "\u0B89\u0BB0\u0BC1\u0BB5\u0BBE\u0B95\u0BCD\u0B95\u0BC1",
    search: "\u0BA4\u0BC7\u0B9F\u0BC1",
    filter: "\u0BB5\u0B9F\u0BBF\u0B95\u0B9F\u0BCD\u0B9F\u0BC1",
    export: "\u0B8F\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BA4\u0BBF \u0B9A\u0BC6\u0BAF\u0BCD",
    refresh: "\u0BAA\u0BC1\u0BA4\u0BC1\u0BAA\u0BCD\u0BAA\u0BBF",
    back: "\u0BAA\u0BBF\u0BA9\u0BCD \u0B9A\u0BC6\u0BB2\u0BCD",
    next: "\u0B85\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1",
    previous: "\u0BAE\u0BC1\u0BA8\u0BCD\u0BA4\u0BC8\u0BAF\u0BA4\u0BC1",
    confirm: "\u0B89\u0BB1\u0BC1\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1",
    close: "\u0BAE\u0BC2\u0B9F\u0BC1",
    retry: "\u0BAE\u0BC0\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD \u0BAE\u0BC1\u0BAF\u0BB1\u0BCD\u0B9A\u0BBF",
    logout: "\u0BB5\u0BC6\u0BB3\u0BBF\u0BAF\u0BC7\u0BB1\u0BC1",
    login: "\u0B89\u0BB3\u0BCD\u0BA8\u0BC1\u0BB4\u0BC8",
    clear: "\u0B85\u0BB4\u0BBF",
    changeLanguage: "\u0BAE\u0BCA\u0BB4\u0BBF\u0BAF\u0BC8 \u0BAE\u0BBE\u0BB1\u0BCD\u0BB1\u0BC1",
    openMenu: "\u0BAE\u0BC6\u0BA9\u0BC1\u0BB5\u0BC8\u0BA4\u0BCD \u0BA4\u0BBF\u0BB1",
    showPassword: "\u0B95\u0B9F\u0BB5\u0BC1\u0B9A\u0BCD\u0B9A\u0BCA\u0BB2\u0BCD\u0BB2\u0BC8\u0B95\u0BCD \u0B95\u0BBE\u0B9F\u0BCD\u0B9F\u0BC1",
    hidePassword: "\u0B95\u0B9F\u0BB5\u0BC1\u0B9A\u0BCD\u0B9A\u0BCA\u0BB2\u0BCD\u0BB2\u0BC8 \u0BAE\u0BB1\u0BC8"
  },
  states: {
    loading: "\u0B8F\u0BB1\u0BCD\u0BB1\u0BC1\u0B95\u0BBF\u0BB1\u0BA4\u0BC1\u2026",
    noResults: "\u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0BC1\u0B95\u0BB3\u0BCD \u0B8E\u0BA4\u0BC1\u0BB5\u0BC1\u0BAE\u0BCD \u0B95\u0BBF\u0B9F\u0BC8\u0B95\u0BCD\u0B95\u0BB5\u0BBF\u0BB2\u0BCD\u0BB2\u0BC8",
    errorTitle: "\u0B8F\u0BA4\u0BCB \u0BA4\u0BB5\u0BB1\u0BC1 \u0BA8\u0B9F\u0BA8\u0BCD\u0BA4\u0BC1\u0BB5\u0BBF\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1",
    error: {
      generic: "\u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BBE\u0BA4 \u0BAA\u0BBF\u0BB4\u0BC8 \u0B8F\u0BB1\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1. \u0BAE\u0BC0\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD \u0BAE\u0BC1\u0BAF\u0BB1\u0BCD\u0B9A\u0BBF\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD.",
      network: "\u0B87\u0BA3\u0BC8\u0BAF\u0BAA\u0BCD \u0BAA\u0BBF\u0BB4\u0BC8. \u0B87\u0BA3\u0BC8\u0BAA\u0BCD\u0BAA\u0BC8\u0B9A\u0BCD \u0B9A\u0BB0\u0BBF\u0BAA\u0BBE\u0BB0\u0BCD\u0BA4\u0BCD\u0BA4\u0BC1 \u0BAE\u0BC0\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD \u0BAE\u0BC1\u0BAF\u0BB1\u0BCD\u0B9A\u0BBF\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD."
    },
    success: {
      saved: "\u0BB5\u0BC6\u0BB1\u0BCD\u0BB1\u0BBF\u0B95\u0BB0\u0BAE\u0BBE\u0B95\u0B9A\u0BCD \u0B9A\u0BC7\u0BAE\u0BBF\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1",
      deleted: "\u0BB5\u0BC6\u0BB1\u0BCD\u0BB1\u0BBF\u0B95\u0BB0\u0BAE\u0BBE\u0B95 \u0BA8\u0BC0\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1"
    }
  },
  table: {
    rowsPerPage: "\u0BAA\u0B95\u0BCD\u0B95\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BC1 \u0BB5\u0BB0\u0BBF\u0B9A\u0BC8\u0B95\u0BB3\u0BCD",
    of: "\u0B87\u0BB2\u0BCD",
    page: "\u0BAA\u0B95\u0BCD\u0B95\u0BAE\u0BCD",
    sortBy: "\u0BB5\u0BB0\u0BBF\u0B9A\u0BC8\u0BAA\u0BCD\u0BAA\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1",
    actions: "\u0B9A\u0BC6\u0BAF\u0BB2\u0BCD\u0B95\u0BB3\u0BCD",
    selectAll: "\u0B8E\u0BB2\u0BCD\u0BB2\u0BBE \u0BB5\u0BB0\u0BBF\u0B9A\u0BC8\u0B95\u0BB3\u0BC8\u0BAF\u0BC1\u0BAE\u0BCD \u0BA4\u0BC7\u0BB0\u0BCD\u0BA8\u0BCD\u0BA4\u0BC6\u0B9F\u0BC1",
    selectRow: "\u0BB5\u0BB0\u0BBF\u0B9A\u0BC8\u0BAF\u0BC8\u0BA4\u0BCD \u0BA4\u0BC7\u0BB0\u0BCD\u0BA8\u0BCD\u0BA4\u0BC6\u0B9F\u0BC1",
    displayedRows: "{{count}} \u0B87\u0BB2\u0BCD {{from}}\u2013{{to}}"
  },
  validation: {
    required: "\u0B87\u0BA8\u0BCD\u0BA4\u0BAA\u0BCD \u0BAA\u0BC1\u0BB2\u0BAE\u0BCD \u0B85\u0BB5\u0B9A\u0BBF\u0BAF\u0BAE\u0BCD",
    email: "\u0B9A\u0BB0\u0BBF\u0BAF\u0BBE\u0BA9 \u0BAE\u0BBF\u0BA9\u0BCD\u0BA9\u0B9E\u0BCD\u0B9A\u0BB2\u0BCD \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF\u0BAF\u0BC8 \u0B89\u0BB3\u0BCD\u0BB3\u0BBF\u0B9F\u0BB5\u0BC1\u0BAE\u0BCD",
    minLength: "\u0B95\u0BC1\u0BB1\u0BC8\u0BA8\u0BCD\u0BA4\u0BA4\u0BC1 {{count}} \u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BB3\u0BCD \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
    maxLength: "\u0B85\u0BA4\u0BBF\u0B95\u0BAA\u0B9F\u0BCD\u0B9A\u0BAE\u0BCD {{count}} \u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BB3\u0BCD \u0BAE\u0B9F\u0BCD\u0B9F\u0BC1\u0BAE\u0BC7",
    passwordWeak: "\u0B95\u0B9F\u0BB5\u0BC1\u0B9A\u0BCD\u0B9A\u0BCA\u0BB2\u0BCD\u0BB2\u0BBF\u0BB2\u0BCD \u0B95\u0BC1\u0BB1\u0BC8\u0BA8\u0BCD\u0BA4\u0BA4\u0BC1 8 \u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BB3\u0BCD, \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF \u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1, \u0B9A\u0BBF\u0BB1\u0BBF\u0BAF \u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1 \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD \u0B8E\u0BA3\u0BCD \u0BA4\u0BC7\u0BB5\u0BC8",
    passwordMismatch: "\u0B95\u0B9F\u0BB5\u0BC1\u0B9A\u0BCD\u0B9A\u0BCA\u0BB1\u0BCD\u0B95\u0BB3\u0BCD \u0BAA\u0BCA\u0BB0\u0BC1\u0BA8\u0BCD\u0BA4\u0BB5\u0BBF\u0BB2\u0BCD\u0BB2\u0BC8"
  },
  datetime: {
    today: "\u0B87\u0BA9\u0BCD\u0BB1\u0BC1",
    yesterday: "\u0BA8\u0BC7\u0BB1\u0BCD\u0BB1\u0BC1"
  },
  status: {
    ACTIVE: "\u0B9A\u0BC6\u0BAF\u0BB2\u0BBF\u0BB2\u0BCD",
    INACTIVE: "\u0B9A\u0BC6\u0BAF\u0BB2\u0BB1\u0BCD\u0BB1\u0BA4\u0BC1",
    PENDING: "\u0BA8\u0BBF\u0BB2\u0BC1\u0BB5\u0BC8\u0BAF\u0BBF\u0BB2\u0BCD",
    SUSPENDED: "\u0B87\u0B9F\u0BC8\u0BA8\u0BBF\u0BB1\u0BC1\u0BA4\u0BCD\u0BA4\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1",
    EXPIRED: "\u0B95\u0BBE\u0BB2\u0BBE\u0BB5\u0BA4\u0BBF\u0BAF\u0BBE\u0BA9\u0BA4\u0BC1",
    CANCELLED: "\u0BB0\u0BA4\u0BCD\u0BA4\u0BC1\u0B9A\u0BC6\u0BAF\u0BCD\u0BAF\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1"
  },
  timeline: {
    resource: "\u0BB5\u0BB3\u0BAE\u0BCD",
    today: "\u0B87\u0BA9\u0BCD\u0BB1\u0BC1",
    legend: "\u0B95\u0BC1\u0BB1\u0BBF\u0BAF\u0BC0\u0B9F\u0BC1"
  },
  wizard: {
    step: "\u0BAA\u0B9F\u0BBF {{current}} / {{total}}",
    finish: "\u0BAE\u0BC1\u0B9F\u0BBF"
  },
  dateRange: {
    label: "\u0BA4\u0BC7\u0BA4\u0BBF \u0BB5\u0BB0\u0BAE\u0BCD\u0BAA\u0BC1",
    from: "\u0B87\u0BB0\u0BC1\u0BA8\u0BCD\u0BA4\u0BC1",
    to: "\u0BB5\u0BB0\u0BC8",
    apply: "\u0BAA\u0BAF\u0BA9\u0BCD\u0BAA\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1",
    presets: {
      last7: "\u0B95\u0B9F\u0BA8\u0BCD\u0BA4 7 \u0BA8\u0BBE\u0B9F\u0BCD\u0B95\u0BB3\u0BCD",
      next7: "\u0B85\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4 7 \u0BA8\u0BBE\u0B9F\u0BCD\u0B95\u0BB3\u0BCD",
      next14: "\u0B85\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4 14 \u0BA8\u0BBE\u0B9F\u0BCD\u0B95\u0BB3\u0BCD",
      thisMonth: "\u0B87\u0BA8\u0BCD\u0BA4 \u0BAE\u0BBE\u0BA4\u0BAE\u0BCD"
    }
  },
  languages: {
    en: "English",
    si: "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD",
    ta: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD",
    es: "Espa\xF1ol",
    zh: "\u4E2D\u6587",
    fr: "Fran\xE7ais",
    de: "Deutsch"
  },
  restaurant: {
    table: "\u0BAE\u0BC7\u0B9C\u0BC8",
    floor: "\u0BA4\u0BB3\u0BAE\u0BCD",
    seats: "\u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95\u0BC8\u0B95\u0BB3\u0BCD",
    queued: "\u0BB5\u0BB0\u0BBF\u0B9A\u0BC8\u0BAF\u0BBF\u0BB2\u0BCD \u0B89\u0BB3\u0BCD\u0BB3\u0BA4\u0BC1",
    preparing: "\u0BA4\u0BAF\u0BBE\u0BB0\u0BBE\u0B95\u0BBF\u0BB1\u0BA4\u0BC1",
    ready: "\u0BA4\u0BAF\u0BBE\u0BB0\u0BCD",
    served: "\u0BAA\u0BB0\u0BBF\u0BAE\u0BBE\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1",
    inStock: "\u0B95\u0BC8\u0BAF\u0BBF\u0BB0\u0BC1\u0BAA\u0BCD\u0BAA\u0BBF\u0BB2\u0BCD \u0B89\u0BB3\u0BCD\u0BB3\u0BA4\u0BC1",
    outOfStock: "\u0B95\u0BC8\u0BAF\u0BBF\u0BB0\u0BC1\u0BAA\u0BCD\u0BAA\u0BBF\u0BB2\u0BCD \u0B87\u0BB2\u0BCD\u0BB2\u0BC8"
  }
};

// src/i18n/locales/zh/common.json
var common_default7 = {
  appName: "Hotel OS",
  actions: {
    save: "\u4FDD\u5B58",
    cancel: "\u53D6\u6D88",
    delete: "\u5220\u9664",
    edit: "\u7F16\u8F91",
    view: "\u67E5\u770B",
    create: "\u65B0\u5EFA",
    search: "\u641C\u7D22",
    filter: "\u7B5B\u9009",
    export: "\u5BFC\u51FA",
    refresh: "\u5237\u65B0",
    back: "\u8FD4\u56DE",
    next: "\u4E0B\u4E00\u6B65",
    previous: "\u4E0A\u4E00\u6B65",
    confirm: "\u786E\u8BA4",
    close: "\u5173\u95ED",
    retry: "\u91CD\u8BD5",
    logout: "\u9000\u51FA\u767B\u5F55",
    login: "\u767B\u5F55",
    clear: "\u6E05\u9664",
    changeLanguage: "\u5207\u6362\u8BED\u8A00",
    openMenu: "\u6253\u5F00\u83DC\u5355",
    showPassword: "\u663E\u793A\u5BC6\u7801",
    hidePassword: "\u9690\u85CF\u5BC6\u7801"
  },
  states: {
    loading: "\u52A0\u8F7D\u4E2D\u2026",
    noResults: "\u672A\u627E\u5230\u7ED3\u679C",
    errorTitle: "\u51FA\u9519\u4E86",
    error: {
      generic: "\u53D1\u751F\u610F\u5916\u9519\u8BEF\uFF0C\u8BF7\u91CD\u8BD5\u3002",
      network: "\u7F51\u7EDC\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5\u8FDE\u63A5\u540E\u91CD\u8BD5\u3002"
    },
    success: {
      saved: "\u4FDD\u5B58\u6210\u529F",
      deleted: "\u5220\u9664\u6210\u529F"
    }
  },
  table: {
    rowsPerPage: "\u6BCF\u9875\u884C\u6570",
    of: "\u5171",
    page: "\u9875",
    sortBy: "\u6392\u5E8F\u65B9\u5F0F",
    actions: "\u64CD\u4F5C",
    selectAll: "\u5168\u9009",
    selectRow: "\u9009\u62E9\u6B64\u884C",
    displayedRows: "\u7B2C {{from}}\u2013{{to}} \u6761\uFF0C\u5171 {{count}} \u6761"
  },
  validation: {
    required: "\u6B64\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879",
    email: "\u8BF7\u8F93\u5165\u6709\u6548\u7684\u7535\u5B50\u90AE\u7BB1\u5730\u5740",
    minLength: "\u81F3\u5C11\u9700\u8981 {{count}} \u4E2A\u5B57\u7B26",
    maxLength: "\u6700\u591A {{count}} \u4E2A\u5B57\u7B26",
    passwordWeak: "\u5BC6\u7801\u9700\u81F3\u5C11 8 \u4E2A\u5B57\u7B26\uFF0C\u5305\u542B\u5927\u5199\u5B57\u6BCD\u3001\u5C0F\u5199\u5B57\u6BCD\u548C\u6570\u5B57",
    passwordMismatch: "\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4"
  },
  datetime: {
    today: "\u4ECA\u5929",
    yesterday: "\u6628\u5929"
  },
  status: {
    ACTIVE: "\u5DF2\u6FC0\u6D3B",
    INACTIVE: "\u672A\u6FC0\u6D3B",
    PENDING: "\u5F85\u5904\u7406",
    SUSPENDED: "\u5DF2\u6682\u505C",
    EXPIRED: "\u5DF2\u8FC7\u671F",
    CANCELLED: "\u5DF2\u53D6\u6D88"
  },
  timeline: {
    resource: "\u8D44\u6E90",
    today: "\u4ECA\u5929",
    legend: "\u56FE\u4F8B"
  },
  wizard: {
    step: "\u7B2C {{current}} \u6B65\uFF0C\u5171 {{total}} \u6B65",
    finish: "\u5B8C\u6210"
  },
  dateRange: {
    label: "\u65E5\u671F\u8303\u56F4",
    from: "\u5F00\u59CB\u65E5\u671F",
    to: "\u7ED3\u675F\u65E5\u671F",
    apply: "\u5E94\u7528",
    presets: {
      last7: "\u8FC7\u53BB 7 \u5929",
      next7: "\u672A\u6765 7 \u5929",
      next14: "\u672A\u6765 14 \u5929",
      thisMonth: "\u672C\u6708"
    }
  },
  languages: {
    en: "English",
    si: "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD",
    ta: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD",
    es: "Espa\xF1ol",
    zh: "\u4E2D\u6587",
    fr: "Fran\xE7ais",
    de: "Deutsch"
  },
  restaurant: {
    table: "\u684C\u53F7",
    floor: "\u697C\u5C42",
    seats: "\u5EA7\u4F4D",
    queued: "\u5DF2\u6392\u961F",
    preparing: "\u51C6\u5907\u4E2D",
    ready: "\u5DF2\u5C31\u7EEA",
    served: "\u5DF2\u9001\u8FBE",
    inStock: "\u6709\u73B0\u8D27",
    outOfStock: "\u65E0\u73B0\u8D27"
  }
};

// src/i18n/initI18n.ts
var COMMON_NAMESPACE = "common";
var COMMON_RESOURCES = {
  en: { common: common_default2 },
  si: { common: common_default5 },
  ta: { common: common_default6 },
  es: { common: common_default3 },
  zh: { common: common_default7 },
  fr: { common: common_default4 },
  de: { common: common_default }
};
var mergeResources = (base, extra) => {
  if (!extra) return base;
  const merged = { ...base };
  for (const [lng, namespaces] of Object.entries(extra)) {
    const baseNs = merged[lng] ?? {};
    const extraNs = namespaces;
    const mergedNs = { ...baseNs };
    for (const [ns, translations] of Object.entries(extraNs)) {
      if (typeof translations === "object" && translations !== null && typeof baseNs[ns] === "object" && baseNs[ns] !== null) {
        mergedNs[ns] = { ...baseNs[ns], ...translations };
      } else {
        mergedNs[ns] = translations;
      }
    }
    merged[lng] = mergedNs;
  }
  return merged;
};
function initI18n(options = {}) {
  void i18n.use(LanguageDetector).use(initReactI18next).init({
    resources: mergeResources(COMMON_RESOURCES, options.resources),
    fallbackLng: DEFAULT_LOCALE,
    supportedLngs: SUPPORTED_LOCALES.map((locale) => locale.code),
    defaultNS: options.defaultNS ?? COMMON_NAMESPACE,
    fallbackNS: COMMON_NAMESPACE,
    debug: options.debug ?? false,
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      lookupLocalStorage: STORAGE_KEYS.LOCALE,
      caches: ["localStorage"]
    },
    react: { useSuspense: false }
  });
  return i18n;
}

// src/i18n/keys.ts
var commonKey = (key) => key;

// src/i18n/keyParity.ts
function flattenTranslationKeys(obj, prefix = "") {
  const keys = [];
  for (const [key, value] of Object.entries(obj)) {
    const normalized = key.replace(/_(zero|one|two|few|many|other)$/, "");
    const path = prefix ? `${prefix}.${normalized}` : normalized;
    if (value !== null && typeof value === "object") {
      keys.push(...flattenTranslationKeys(value, path));
    } else {
      keys.push(path);
    }
  }
  return [...new Set(keys)].sort();
}
function diffTranslationKeys(reference, candidate) {
  const refKeys = new Set(flattenTranslationKeys(reference));
  const candKeys = new Set(flattenTranslationKeys(candidate));
  return {
    missing: [...refKeys].filter((k) => !candKeys.has(k)),
    extra: [...candKeys].filter((k) => !refKeys.has(k))
  };
}

export { COMMON_NAMESPACE, commonKey, diffTranslationKeys, flattenTranslationKeys, initI18n };
//# sourceMappingURL=chunk-UIERE7WO.js.map
//# sourceMappingURL=chunk-UIERE7WO.js.map