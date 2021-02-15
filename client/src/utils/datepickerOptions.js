export default {
    dateLabelFormat: 'dddd, MMMM D, YYYY',
    days: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    daysShort: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    monthNames: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ],
    colors: {
      selected: '#0062D6',
      inRange: '#0062D6',
      selectedText: '#171F29',
      text: '#171F29',
      inRangeBorder: '#EAF4FF',
      disabled: '#A0AFC2',
    },
    texts: {
      apply: 'применить',
      cancel: 'Отменить',
      keyboardShortcuts: 'Keyboard Shortcuts',
    },
    keyboardShortcuts: [
      {symbol: '↵', label: 'Select the date in focus', symbolDescription: 'Enter key'},
      {symbol: '←/→', label: 'Move backward (left) and forward (down) by one day.', symbolDescription: 'Left or right arrow keys'},
      {symbol: '↑/↓', label: 'Move backward (up) and forward (down) by one week.', symbolDescription: 'Up or down arrow keys'},
      {symbol: 'PgUp/PgDn', label: 'Switch months.', symbolDescription: 'PageUp and PageDown keys'},
      {symbol: 'Home/End', label: 'Go to the first or last day of a week.', symbolDescription: 'Home or End keys'},
      {symbol: 'Esc', label: 'Close this panel', symbolDescription: 'Escape key'},
      {symbol: '?', label: 'Open this panel', symbolDescription: 'Question mark'}
    ]
};