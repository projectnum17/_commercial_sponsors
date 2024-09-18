document.addEventListener('DOMContentLoaded', function () {
  const allLanguageBlocks = document.querySelectorAll('.header-multilang');

  allLanguageBlocks.forEach(function (languageBlock) {
    const languageItems = languageBlock.querySelectorAll(
      '.header-multilang__link'
    );

    languageItems.forEach(function (item) {
      item.addEventListener('click', function (event) {
        const selectedLanguage = this.textContent;

        allLanguageBlocks.forEach(function (block) {
          const itemsInBlock = block.querySelectorAll(
            '.header-multilang__link'
          );

          itemsInBlock.forEach(function (languageItem) {
            if (languageItem.textContent === selectedLanguage) {
              languageItem.classList.add('active-lang');
            } else {
              languageItem.classList.remove('active-lang');
            }
          });
        });
      });
    });
  });

  const header = document.querySelector('.header');
  let isHidden = false;
  let lastScrollTop = 0;

  window.addEventListener('scroll', function () {
    const st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > lastScrollTop && st > 100) {
      if (!isHidden) {
        header.classList.remove('header-show');
        header.classList.add('header-hide');
        isHidden = true;
      }
    } else {
      if (isHidden || st === 0) {
        header.classList.remove('header-show');
      }
      if (isHidden) {
        header.classList.remove('header-hide');
        header.classList.add('header-show');
        isHidden = false;
      }
    }

    

    lastScrollTop = st <= 0 ? 0 : st;
  });
});
