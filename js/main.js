window.onload = () => {
  setTimeout(() => {
    const image_banner = document.querySelector('.image');
    if (image_banner) {
      image_banner.classList.add('animation-zoom');

      const top_caption = document.getElementsByClassName(
        'product-content--container'
      )[0];
      top_caption.classList.add('animate_large--revealed');
    }

    // DETAIL ANIMATE REVEAL
    const speedometerCircles = document.querySelectorAll(
      '.speedometer-circle-inner'
    );
    const speedometerNeedles = document.querySelectorAll('.speedometer-needle');
    const numberInners = document.querySelectorAll('.number-inner');
    const headerLower = document.querySelector('.header-lower');
    const headerUpper = document.querySelector('.header-upper');
    const callCenters = document.querySelectorAll('.callout-center');

    if (callCenters) {
      Array.from(callCenters).forEach(callout => {
        callout.classList.add('animate--reveal');
      });
    }

    if (speedometerCircles) {
      Array.from(speedometerCircles).forEach(speedometerCircle => {
        speedometerCircle.classList.add('animate--reveal');
      });
    }

    if (speedometerNeedles) {
      Array.from(speedometerNeedles).forEach(speedometerNeedle => {
        speedometerNeedle.classList.add('animate--reveal');
      });
    }

    if (numberInners) {
      Array.from(numberInners).forEach(number => {
        number.classList.add('animate--reveal');
      });
    }

    if (headerLower) {
      headerLower.classList.add('animate--reveal');
    }

    if (headerUpper) {
      headerUpper.classList.add('animate--reveal');
    }
  }, 1000);
};

const indicators = document.querySelectorAll('.carousel-indicator');
const indicatorsArr = Array.from(indicators);
const heading = document.querySelectorAll('.heading-container');
const headingList = Array.from(heading);
const disclaimer = document.querySelectorAll('.product-disclaimer');
const disclaimerList = Array.from(disclaimer);

const animations = new Map([
  [0, 'animate--slide_to_right'],
  [2, 'animate--slide_to_left']
]);

const actions = new Map([
  [0, 340],
  [1, 0],
  [2, -340]
]);
indicatorsArr.forEach((i, index) => {
  i.addEventListener('click', () => {
    indicators.forEach(indicator => {
      indicator.classList.remove('carousel-indicator--is-active');
    });

    i.classList.add('carousel-indicator--is-active');

    let action = actions.get(index);

    document.querySelector(
      '.image'
    ).style.transform = `scale(2) translate(${action}px, -35px)`;

    headingList.forEach(heading => {
      heading.classList.remove('product--is-active');
    });

    disclaimerList.forEach(disclaimer => {
      disclaimer.classList.remove('product--is-active');
    });

    document
      .getElementById(`item${index}-heading`)
      .classList.add('product--is-active');

    document
      .getElementById(`item${index}-disclaimer`)
      .classList.add('product--is-active');

    let animation = animations.get(index);

    if (index === 1) return;

    document
      .getElementById(`item${index}-heading`)
      .children[0].classList.add(animation);

    document.getElementById(`item1-heading`).children[0].className = '';

    document
      .getElementById(`item1-heading`)
      .children[0].classList.add('top-caption', animation);
  });
});

const sidesNav = document.querySelectorAll('.side_nav-item');
let index = 0;
sidesNav.forEach((sideNav, i) => {
  sideNav.addEventListener('click', () => {
    index = i;
    document
      .querySelector('.side_nav-item.side_nav-item--selected')
      .classList.remove('side_nav-item--selected');

    sideNav.classList.add('side_nav-item--selected');

    valueAtrr = sideNav.getAttribute('data-title');

    if (valueAtrr === 'discovertesla') {
      let vid = document.querySelector('.video-hero-page');
      vid.autoplay = true;
      vid.load();
    }

    let elmnt = document.querySelector(`section[data-title='${valueAtrr}']`);
    console.log(valueAtrr);
    console.log(elmnt);
    elmnt.scrollIntoView({ behavior: 'smooth' });
  });
});

// const content = document.querySelectorAll('.block__region');
// //const prev = document.querySelector('.prev');
// const next = document.querySelectorAll('.icon--bounce');
// const idlePeriod = 100;
// const animationDuration = 1000;

// let lastAnimation = 0;
// let index = 0;

// // const toggleText = (index, state) => {
// //   if (state === 'show') {
// //     content[index].querySelector('.text').classList.add('show');
// //   } else {
// //     content[index].querySelector('.text').classList.remove('show');
// //   }
// // };

// // toggleText(0, 'show');

// // prev.addEventListener('click', () => {
// //   if (index < 1) return;
// //   //toggleText(index, 'hide');
// //   index--;

// //   content.forEach((section, i) => {
// //     if (i === index) {
// //       toggleText(i, 'show');
// //       section.scrollIntoView({ behavior: 'smooth' });
// //     }
// //   });
// // });

// console.log(next[0]);

// // next.forEach(btn => {
// //   btn.addEventListener('click', () => {
// //     if (index > 2) return;
// //     //toggleText(index, 'hide');
// //     index++;
// //     content.forEach((section, i) => {
// //       if (i === index) {
// //         //toggleText(i, 'show');
// //         section.scrollIntoView({ behavior: 'smooth' });
// //       }
// //     });
// //   });
// // });

// const a = () => {
//   if (index > 2) return;
//   //toggleText(index, 'hide');
//   index++;
//   content.forEach((section, i) => {
//     if (i === index) {
//       //toggleText(i, 'show');
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//   });
// };

// document.addEventListener('wheel', event => {
//   var delta = event.wheelDelta;
//   var timeNow = new Date().getTime();
//   // Cancel scroll if currently animating or within quiet period
//   // if (timeNow - lastAnimation < idlePeriod + animationDuration) {
//   //   console.log('hello');
//   //   return;
//   // }

//   if (delta < 0) {
//     let event2 = new Event('click');
//     console.log('hello');
//     next[0].dispatchEvent(new Event('click'));
//   } else {
//     // var event = new Event('click');
//     // prev.dispatchEvent(event);
//   }

//   lastAnimation = timeNow;
// });

const hambugerBar = document.getElementById('hamburger-bar');
hambugerBar.addEventListener('click', () => {
  hambugerBar.classList.toggle('open');

  document.querySelector('.nav-second').classList.toggle('active');
});

window.addEventListener('load', () => {
  // if (window.innerWidth > 1024) {
  //   const sections = document.querySelectorAll('.block__region');
  //   const main = document.querySelector('.site-content');
  //   spin_value = 0;
  //   can_scroll = true;
  //   window.addEventListener('mousewheel', e => {
  //     if (can_scroll) {
  //       can_scroll = false;
  //       if (e.deltaY > 0) {
  //         if (spin_value < sections.length - 1) spin_value += 1;
  //       } else {
  //         if (spin_value > 0) spin_value -= 1;
  //       }
  //       scroll_content(spin_value);
  //     }
  //     setTimeout(() => {
  //       can_scroll = true;
  //     }, 560);
  //   });
  //   const scroll_content = count => {
  //     main.setAttribute('style', `transform: translateY(-${count * 100}vh)`);
  //   };
  // }

  // const sections = document.querySelectorAll('.block__region');
  // const sectionsArr = Array.from(sections);
  // sectionsArr[1].scrollIntoView({ behavior: 'smooth' });

  if (window.innerWidth > 1024) {
  }
});

const sections = document.querySelectorAll('.block__region');
const sectionsArr = Array.from(sections);

window.addEventListener('wheel', event => {
  var delta = event.wheelDelta;

  //sectionsArr[index + 1].scrollIntoView({ behavior: 'smooth' });
  if (delta < 0) {
    var event = new Event('click');
    if (index + 1 > sidesNav.length - 1) return;
    sidesNav[index + 1].dispatchEvent(event);
  } else {
    var event = new Event('click');
    if (index - 1 < 0) return;
    sidesNav[index - 1].dispatchEvent(event);
  }
  console.log(sidesNav[index]);
});
