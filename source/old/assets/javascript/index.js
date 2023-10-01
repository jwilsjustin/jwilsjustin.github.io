'use strict';

(() => {
  const last = 'il'
  const label = document.getElementById('themessagesystemlabel')
  if (label !== null) {
    label.innerHTML = '<small style="text-transform:capitalize">ema' + last + '</small>'
  }
}).call(window)
