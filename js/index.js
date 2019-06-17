const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const nav = document.querySelector('nav');
[...nav.children].forEach((current, index) => {
  current.innerHTML = siteContent['nav']['nav-item-' + (index + 1)];
});

const ctaEl = document.querySelector('.cta > .cta-text');
[...ctaEl.children].forEach((current, index) => {
  current.innerHTML = siteContent['cta'][`${current.tagName.toLowerCase()}`];
});

let ctaImg = document.createElement('img');
ctaImg.src = siteContent['cta']['img-src'];
ctaEl.appendChild(ctaImg);

let mcKeys = ['features', 'about', 'services', 'product', 'vision'];

let mc1 = document.querySelectorAll('.text-content');
[...mc1].forEach((current, index) => {
  [...current.children].forEach((currentC, indexC) => {
    if((indexC + 1) % 2) {
      currentC.innerHTML = siteContent['main-content'][`${mcKeys[index]}-h4`];
    }
    else currentC.innerHTML = siteContent['main-content'][`${mcKeys[index]}-content`];
  });
});

let mc1Img = document.getElementById('middle-img');
mc1Img.src = siteContent['main-content']['middle-img-src'];

const contactEls = document.querySelector('.contact').children;
let contactCounter = 0;
for(let key in siteContent['contact']) {
  contactEls[contactCounter].innerHTML = siteContent['contact'][key];
  contactCounter++;
}

const footerEl = document.querySelector('footer p');
footerEl.innerHTML = siteContent['footer']['copyright'];

// Task 3

let child1 = document.createElement('a');
child1.innerHTML = 'Extra 1';
let child2 = document.createElement('a');
child2.innerHTML = 'Extra 2';
nav.appendChild(child1);
nav.appendChild(child2);

[...nav.children].forEach((current, index) => {
  current.setAttribute('style', 'color: green');
});







