export function initializeLanguageSwitch() {
    document.addEventListener('DOMContentLoaded', function() {
      const languageSwitch = document.getElementById('language-switch');
      const languageDrawer = document.getElementById('language-drawer');
      const currentLanguage = document.getElementById('current-language');
      const currentFlag = document.getElementById('current-flag');
      const alternateFlag = document.getElementById('alternate-flag');
  
      let chosenLanguage = 'TR'; // Default language
  
      function updateLanguageDisplay() {
        currentLanguage.textContent = chosenLanguage;
        currentFlag.src = `images/${chosenLanguage === 'TR' ? 'TurkeyFlag.png' : 'BritainFlag.png'}`;
        alternateFlag.src = `images/${chosenLanguage === 'TR' ? 'BritainFlag.png' : 'TurkeyFlag.png'}`;
      }
  
      function toggleLanguage() {
        chosenLanguage = chosenLanguage === 'TR' ? 'EN' : 'TR';
        updateLanguageDisplay();
        languageDrawer.classList.add('translate-x-full');
        // Here you would typically add logic to change the site's language
      }
  
      languageSwitch.addEventListener('click', () => {
        languageDrawer.classList.toggle('translate-x-full');
      });
  
      alternateFlag.parentElement.addEventListener('click', toggleLanguage);
  
      // Close drawer when clicking outside
      document.addEventListener('click', (event) => {
        if (!languageDrawer.contains(event.target) && !languageSwitch.contains(event.target)) {
          languageDrawer.classList.add('translate-x-full');
        }
      });
  
      // Z-index'i ayarla
      languageDrawer.style.zIndex = '10';
  
      // Initialize display
      updateLanguageDisplay();
    });
  }