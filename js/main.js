let lang = 'ru';

let languageSwitchBG = document.querySelector('.languageSwitchBG');
let langBtns = document.querySelectorAll('.languageButton');

langBtns.forEach(btn => {
  btn.addEventListener("click", (e)=> {
    languageSwitchBG.classList.toggle('right');
    langBtns.forEach(btn => {
      btn.classList.toggle('white')
    })
    switchLang();
  })
});

function switchLang() {
  if(lang == 'ru') {
    lang = 'kz';
  } else {
    lang = 'ru';
  }
  // langRender();
}

// function langRender() {
//   let ru = document.querySelectorAll('.ru');
//   let kz = document.querySelectorAll('.kz');

//   if (lang == 'ru') {
//     kz.forEach(el => {
//       el.classList.add('hide');
//     });
//     ru.forEach(el => {
//       el.classList.remove('hide');
//     })
//   } else {
//     ru.forEach(el => {
//       el.classList.add('hide');
//     })
//     kz.forEach(el => {
//       el.classList.remove('hide');
//     })
//   }
// }
// langRender();


let secretHeader = document.querySelector('.secretHeader');
let header = document.querySelector('header');
secretHeader.style.height = header.offsetHeight + 'px'



// formAjax + errors for modal form
$('#sendForm').submit(function(e) {
  e.preventDefault();
//adding variables for input checks and errors if failed
  var name = $('#name').val(),
      phone = $('#phone').val(),

// input wrappers to add error class
      nameWrap = $('#name'),
      phoneWrap = $('#phone'),
      checkWrap = $('.checkLabel'),


//regExp variables
      nameRegExp = /^[A-Za-zА-Яа-я\s-]+$/gm,
      phoneRegExp = /^[+0-9]+[ -?][0-9]+[ -?]+[0-9]+[ -?]+[0-9]+[ -?]+[0-9]+$/gm,

//regExp comparing
      nameTrue = name.match(nameRegExp),
      phoneTrue = phone.match(phoneRegExp);
      checkTrue = document.querySelector('#check').checked;

//main if/else statement
//this part of main if/else statement starts if form check was ok
  if ( (phoneTrue != null) && (nameTrue != null ) && (checkTrue != false) ) {
//ajax sends all the values to some server
    $.ajax({
      url: "php/send.php",//backend adress
      type: "POST",
      data: {
            name,
            phone,
          },
//this ajax statement goes if server responce was ok
      success: function(response) {
          setTimeout(function() {
          $("#sendForm").addClass("sendFormSuccess");
        }, 700);

          setTimeout(function() {
          $("#sendForm").removeClass("sendFormSuccess");
        }, 5000);
      },
//this ajax statement goes if server responce was fucked
      error: function(response) {

      },
    });

//this part of main if/else statement starts if form check has failed
  } else {
    if (phoneTrue == null) {
      phoneWrap.addClass("error");
    }

    if (nameTrue == null ) {
      nameWrap.addClass("error");
    }

    if (checkTrue == false ) {
      checkWrap.addClass("error");
    }
  }
});

document.querySelectorAll('input').forEach(el => {
  el.addEventListener('click', (e)=> {
    if (el.classList.contains('error')) {
      el.classList.remove('error');
    }
  })
});

document.querySelectorAll('.checkLabel').forEach(el => {
  el.addEventListener('mouseup', (e)=> {
    if (el.classList.contains('error')) {
      el.classList.remove('error');
    }
  })
});
