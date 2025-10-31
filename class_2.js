// simple interactivity: mobile menu toggle + newsletter form fake submit + year
document.addEventListener('DOMContentLoaded', function(){
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  if(menuToggle){
    menuToggle.addEventListener('click', () => {
      if(mainNav.style.display === 'flex'){
        mainNav.style.display = '';
      } else {
        mainNav.style.display = 'flex';
        mainNav.style.flexDirection = 'column';
        mainNav.style.gap = '12px';
      }
    });
  }

  // year
  document.getElementById('year').textContent = new Date().getFullYear();

  // newsletter fake submit
  const form = document.getElementById('newsletterForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const email = form.email.value.trim();
      if(!email){
        alert('Please enter an email.');
        return;
      }
      // simulate success
      alert('Thanks! (This is a prototype — no data was sent.)');
      form.reset();
    });
  }
});
