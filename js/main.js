// Simple theme toggle and form handler
(function(){
  const THEME_KEY = 'site-theme';
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  const form = document.getElementById('sample-form');
  const result = document.getElementById('form-result');

  function applyTheme(theme){
    if(theme === 'dark') root.setAttribute('data-theme','dark');
    else root.removeAttribute('data-theme');
    if(btn) btn.textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
  }

  // Init
  document.addEventListener('DOMContentLoaded', ()=>{
    const saved = localStorage.getItem(THEME_KEY) || 'light';
    applyTheme(saved);

    if(btn){
      btn.addEventListener('click', ()=>{
        const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        localStorage.setItem(THEME_KEY, next);
        applyTheme(next);
      });
    }

    if(form){
      form.addEventListener('submit', (e)=>{
        e.preventDefault();
        const fd = new FormData(form);
        const name = fd.get('name') || 'Friend';
        // Show a friendly message
        result.textContent = `Thanks, ${name}! Your message was received.`;
        form.reset();
      });

      form.addEventListener('reset', ()=>{
        result.textContent = '';
      });
    }
  });
})();
