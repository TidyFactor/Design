/**
 * TidyFactor Design — Prototype Toolbar (dev-only)
 * Floating dev toolbar for page switching, state toggles, and theme inspection.
 */
(function () {
  const PAGES = [
    { label: '📄 Landing (index.html)', href: 'index.html' }
  ];

  function buildToolbar() {
    if (document.querySelector('[data-proto-toolbar]')) return;
    const bar = document.createElement('div');
    bar.setAttribute('data-proto-toolbar', '');
    bar.style.cssText = [
      'position:fixed', 'bottom:16px', 'right:16px', 'z-index:99999',
      'display:flex', 'gap:8px', 'padding:8px 14px',
      'background:rgba(15,23,42,0.9)', 'backdrop-filter:blur(12px)',
      'border-radius:9999px', 'font:12px/1.4 system-ui, sans-serif',
      'color:#F8FAFC', 'align-items:center', 'border:1px solid rgba(255,255,255,0.2)',
      'box-shadow:0 10px 25px rgba(0,0,0,0.3)'
    ].join(';');

    const badge = document.createElement('span');
    badge.textContent = '🎨 TF Design';
    badge.style.cssText = 'font-weight:700;color:#818CF8;';
    bar.appendChild(badge);

    const select = document.createElement('select');
    select.style.cssText = 'background:transparent;color:#fff;border:none;font:inherit;outline:none;cursor:pointer;';
    PAGES.forEach((p) => {
      const opt = document.createElement('option');
      opt.value = p.href;
      opt.textContent = p.label;
      opt.style.background = '#0F172A';
      select.appendChild(opt);
    });
    select.addEventListener('change', (e) => {
      if (e.target.value) window.location.href = e.target.value;
    });
    bar.appendChild(select);

    document.body.appendChild(bar);
  }

  function getStateParam() {
    return new URLSearchParams(window.location.search).get('state') || 'default';
  }

  window.protoNav = { getStateParam };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildToolbar);
  } else {
    buildToolbar();
  }
})();
