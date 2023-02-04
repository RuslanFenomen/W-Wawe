// Menu
const menu = document.querySelector('.header__menu')
const menuBtn = document.querySelector('.header__menu-btn')
const menuLink = document.querySelectorAll('.header__menu-link')

menuBtn.addEventListener('click', function () {
  menu.classList.toggle('header__nav--active')
  if (window.innerHeight > 452) {
    document.body.classList.toggle('stop-scroll')
  }
})

menuLink.forEach(link => {
  link.addEventListener('click', function () {
    menu.classList.remove('header__nav--active')
    document.body.classList.remove('stop-scroll')
  })
})


// Search Btn 
const SearchWrapper = document.querySelector('.header__search')
const SearchBtn = document.querySelector('.header__search-btn')

SearchBtn.addEventListener('click', function () {
  SearchWrapper.classList.toggle('header__search--active')
})

// btn-live
const liveBtn = document.querySelector('.header__live-btn-mobile')
const liveWrapper = document.querySelector('.header__bottom-wrapper')

liveBtn.addEventListener('click', function () {
  liveWrapper.classList.toggle('header__bottom-wrapper--active')
})

// select
document.addEventListener("DOMContentLoaded", function () {
  const element = document.querySelector('.broadcast__select')
  const choices = new Choices(element, {
    searchEnabled: false,
    shouldSort: false,
    duplicateItemsAllowed: false,
  })
})

// Accordion
new Accordion('.guests__accordion', { // List
  elementClass: 'guests__accordion-item', // items
  triggerClass: 'guests__accordion-btn', // Вопросы
  panelClass: 'guests__accordion-de', // Ответы
  activeClass: 'guests__accordion-item--active', // Активный item
})

function addBtn(category, index) {
  for (let i = 0; i < category.length; i++) {
    const descrBtn = document.createElement("button");
    descrBtn.setAttribute("class", "guests__accordion-descr-link btn-reset");
    descrBtn.setAttribute("type", "button")
    descrBtn.innerHTML = category[i][0]
    index.appendChild(descrBtn)
  }
}

const descr = document.querySelectorAll('.guests__accordion-descr')

addBtn(guests.bloggers, descr[0])
addBtn(guests.artCritics, descr[1])
addBtn(guests.painter, descr[2])
addBtn(guests.peopleScience, descr[3])
addBtn(guests.historians, descr[4])
addBtn(guests.philologists, descr[5])

const btns = document.querySelectorAll('.guests__accordion-descr-link')

btns.forEach(btn => {
  btn.addEventListener('click', function () {
    btns.forEach(btn => {
      btn.classList.remove('guests__accordion-descr-link--active')
    })
    btn.classList.add('guests__accordion-descr-link--active')
    let title = btn.innerText
    for (key in guests) {
      for (let i = 0; i < guests[key].length; i++) {
        if (guests[key][i][0] === title) {
          document.querySelector('.guests__content-title').innerText = guests[key][i][0]
          document.querySelector('.simplebar-content').innerText = guests[key][i][2]
          document.querySelector('.guests__img').src = guests[key][i][1]
          document.querySelector('.guests__content-title').style.display = "block"
          document.querySelector('.guests__content-descr').style.display = "block"
          document.querySelector('.guests__social').style.display = "flex"
          document.querySelector('.guests__link').style.display = "inline-block"
        }
      }
    }
  })
});

// Playlist Tabs
const playlistsBtns = document.querySelectorAll('.playlists__btn')

playlistsBtns.forEach(btn => {
  btn.addEventListener('click', function () {
    playlistsBtns.forEach(btn => {
      btn.classList.remove('playlists__btn--active')
    })
    btn.classList.add('playlists__btn--active')
  })
})

// Slider
if (window.innerWidth <= 576) {
  const playlistsSwiper = new Swiper('.playlists__list-wrapper', {
    slidesPerView: 'auto',
    spaceBetween: 15,
    speed: 400,
  });
}

const aboutSwiper = new Swiper('.about__swiper-wrapper', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  speed: 400,

  navigation: {
    nextEl: '.about__btn-next',
    prevEl: '.about__btn-prev',
  },

  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    }
  }
});

// like inkrement
const likeBtn = document.querySelectorAll('.podcasts__item-minibtn')

likeBtn.forEach(btn => {
  btn.addEventListener('click', function () {
    btn.classList.toggle('podcasts__btn--active')
    let counter = Number(btn.querySelector('.podcasts__item-minibtn-num').innerText)
    if (btn.classList.contains('podcasts__btn--active')) {
      counter += 1
    } else {
      counter -= 1
    }
    btn.querySelector('.podcasts__item-minibtn-num').innerText = counter
  })
})

// more btn
const moreBtn = document.querySelector('.podcasts__btn-more');

moreBtn.addEventListener('click', function () {
  const visibleТumber = 2;
  let podcastsItem = document.querySelectorAll('.podcasts__item--hidden');


  for (let i = 0; i < visibleТumber; i++) {
    if (podcastsItem.length > 2) {
      podcastsItem[i].classList.remove('podcasts__item--hidden');
    } else if (podcastsItem.length === 2) {
      podcastsItem[i].classList.remove('podcasts__item--hidden');
      moreBtn.style.display = 'none'
    } else if (podcastsItem.length === 1) {
      podcastsItem = document.querySelector('.podcasts__item--hidden');
      podcastsItem.classList.remove('podcasts__item--hidden');
      moreBtn.style.display = 'none'
    }
  }
});