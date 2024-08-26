export function initializeLanguageSwitch() {
  document.addEventListener('DOMContentLoaded', function() {
      const languageSwitch = document.getElementById('language-switch');
      const languageDrawer = document.getElementById('language-drawer');
      const currentLanguage = document.getElementById('current-language');
      const currentFlag = document.getElementById('current-flag');
      const alternateFlag = document.getElementById('alternate-flag');
      const DRAWER_Z_INDEX = 9999;

      let chosenLanguage = 'TR'; // Varsayılan dil

      

    function updateDrawerZIndex() {
  languageDrawer.style.zIndex = DRAWER_Z_INDEX.toString();
}

      function updateLanguageDisplay() {
          currentLanguage.textContent = chosenLanguage;
          currentFlag.src = `images/${chosenLanguage === 'TR' ? 'TurkeyFlag.png' : 'BritainFlag.png'}`;
          alternateFlag.src = `images/${chosenLanguage === 'TR' ? 'BritainFlag.png' : 'TurkeyFlag.png'}`;
          updateDrawerZIndex();
      }

      function toggleLanguage() {
          chosenLanguage = chosenLanguage === 'TR' ? 'EN' : 'TR';
          updateLanguageDisplay();
          languageDrawer.classList.remove('open');
          updateDrawerZIndex();
          // Burada normalde sitenin dilini değiştirmek için gerekli mantığı eklersiniz
      }

      languageSwitch.addEventListener('click', (e) => {
          e.stopPropagation();
          languageDrawer.classList.toggle('open');
      });

      alternateFlag.parentElement.addEventListener('click', toggleLanguage);

      // Dışarı tıklandığında drawer'ı kapat
      document.addEventListener('click', (event) => {
          if (!languageDrawer.contains(event.target) && !languageSwitch.contains(event.target)) {
              languageDrawer.classList.remove('open');
          }
      });

      // Başlangıç görüntüsünü ayarla
      updateLanguageDisplay();
  });
}