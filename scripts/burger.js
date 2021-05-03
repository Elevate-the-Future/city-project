console.log("hi");

const bars = document.querySelector('#bars');
const menu = document.querySelector('#menu');

const home = document.querySelector('#home');
bars.addEventListener('click', () => {
  if(menu.classList.contains('hidden') && window.innerWidth < 768)
  {
    menu.classList.remove('hidden')
    menu.classList.add(
      'flex',
      'flex-col',
      'text-center',
      'bg-white',
      'w-full',
      'absolute',
      'top-16',
    )

    home.classList.add(
      'bg-gray-50',
    )
    //add darker color for selected page pls
  } else {
    menu.classList.add('hidden');
  }
});

menu.addEventListener('click', () => {
  menu.classList.add('hidden');
} )


window.addEventListener('resize', () => {
  if(window.innerWidth > 768) {
    menu.classList.add('hidden')
    menu.classList.remove(
      'flex',
      'flex-col',
      'text-center',
      'bg-white',
      'w-full',
      'absolute',
      'top-16',
    )
    home.classList.remove(
      'bg-gray-50'
    )
  }
})