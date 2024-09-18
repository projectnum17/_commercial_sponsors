if (document.getElementById("page2Identifier")) {
  document.addEventListener("DOMContentLoaded", function () {
    const tabsItem = document.querySelectorAll(".tabs-item");

    tabsItem.forEach(function (item) {
      item.addEventListener("click", function (event) {

        tabsItem.forEach(function (item) {
          item.classList.remove("active-tab");
          item.classList.add("light-to-black");
        });

        this.classList.add("active-tab");
        this.classList.remove("light-to-black");
      });
    });
  });


  $(function () {

    $('.dropdown ').on('click', function () {
      $(this).parent().toggleClass('open');
    });

    $('.dropdown > .list > .item').on('click', function () {
      $('.dropdown > .list > .item').removeClass('selected');
      $(this).addClass('selected').parent().parent().removeClass('open').children('.caption').text($(this).text());
    });

    $(document).on('keyup', function (evt) {
      if ((evt.keyCode || evt.which) === 27) {
        $('.dropdown').removeClass('open');
      }
    });

    $(document).on('click', function (evt) {
      if ($(evt.target).closest(".dropdown > .caption").length === 0) {
        $('.dropdown').removeClass('open');
      }
    });

  });

  //pagination

  document.addEventListener("DOMContentLoaded", function () {
    const pages = document.querySelectorAll(".page");
    const pageNumbers = document.querySelectorAll(".page-number");
    const prevButton = document.getElementById("prevPage");
    const nextButton = document.getElementById("nextPage");
    let currentPage = 0;

    function showPage(pageNumber) {
      pages.forEach((page, index) => {
        if (index === pageNumber) {
          page.style.display = "block";
        } else {
          page.style.display = "none";
        }
      });
    }

    function updateButtons() {
      prevButton.disabled = currentPage === 0;
      nextButton.disabled = currentPage === pages.length - 1;
    }

    function setActive() {
      pageNumbers.forEach((page, index) => {
        if (currentPage === index) {
          page.classList.add("active");
        } else {
          page.classList.remove("active");
        }
      });
    }

    pageNumbers.forEach((page, index) => {
      page.addEventListener("click", function () {
        showPage(index);
        currentPage = index;
        updateButtons();
        setActive();
      });
    });

    prevButton.addEventListener("click", function () {
      if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
        updateButtons();
        setActive();
      }
    });

    nextButton.addEventListener("click", function () {
      if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
        updateButtons();
        setActive();
      }
    });

    showPage(currentPage);
    updateButtons();



  });

  //numers for pagination (PAGES BLOCK)

  const prevPageButton = document.getElementById('prevPage');
  const nextPageButton = document.getElementById('nextPage');

  prevPageButton.addEventListener('click', function () {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  });

  nextPageButton.addEventListener('click', function () {
    if (currentPage < pageCount) {
      goToPage(currentPage + 1);
    }
  });


  const pageCount = document.querySelectorAll('.page').length;
  const pagesInner = document.querySelector('.pages-inner');
  const totalPagesToShow = 5;
  
  let currentPage = 1;

  

  function renderPageNumbers(startPage, endPage) {
    pagesInner.innerHTML = '';

    // Создать и добавить номера страниц
    for (let i = startPage; i <= endPage; i++) {
      const pageNumber = document.createElement('div');
      pageNumber.classList.add('page-number');
      pageNumber.textContent = i;
      if (i === currentPage) {
        pageNumber.classList.add('active');
      }
      pagesInner.appendChild(pageNumber);
    }

    if (startPage > 1) {
      const ellipsisStart = document.createElement('div');
      ellipsisStart.classList.add('ellipsis');
      ellipsisStart.textContent = '...';
      pagesInner.insertBefore(ellipsisStart, pagesInner.firstChild);
    }

    if (endPage < pageCount) {
      const ellipsisEnd = document.createElement('div');
      ellipsisEnd.classList.add('ellipsis');
      ellipsisEnd.textContent = '...';
      pagesInner.appendChild(ellipsisEnd);
    }
  }

  function goToPage(pageNumber) {
    currentPage = pageNumber;
    if (currentPage < Math.ceil(totalPagesToShow / 2)) {
      renderPageNumbers(1, Math.min(totalPagesToShow, pageCount));
    } else if (currentPage > pageCount - Math.floor(totalPagesToShow / 2)) {
      renderPageNumbers(Math.max(1, pageCount - totalPagesToShow + 1), pageCount);
    } else {
      renderPageNumbers(currentPage - Math.floor(totalPagesToShow / 2), currentPage + Math.floor(totalPagesToShow / 2));
    }
  }

  renderPageNumbers(1, Math.min(totalPagesToShow, pageCount));


  pagesInner.addEventListener('click', function (event) {
    if (event.target.classList.contains('page-number')) {
      const pageNumber = parseInt(event.target.textContent);
      goToPage(pageNumber);
    }
  });
}