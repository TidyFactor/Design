/**
 * TidyFactor Design — Prototype Toolbar (dev-only)
 * Shared across every page. Strip before any production handoff.
 * Provides: page jump list, restart-flow, and state toggles for pages
 * that expose alternate states (e.g. dashboard empty/loading/populated).
 */
(function () {
  const PAGES = [
    // { label: 'Home', href: 'pages/home.html' },
    // populate per project in `flow`
  ];

  function buildToolbar() {
    const bar = document.createElement('div');
    bar.setAttribute('data-proto-toolbar', '');
    bar.style.cssText = [
      'position:fixed', 'bottom:16px', 'right:16px', 'z-index:9999',
      'display:flex', 'gap:8px', 'padding:8px 12px',
      'background:rgba(20,20,20,0.85)', 'backdrop-filter:blur(6px)',
      'border-radius:999px', 'font:12px/1.4 system-ui, sans-serif',
      'color:#fff', 'align-items:center'
    ].join(';');

    const select = document.createElement('select');
    select.style.cssText = 'background:transparent;color:#fff;border:none;font:inherit;';
    PAGES.forEach((p) => {
      const opt = document.createElement('option');
      opt.value = p.href;
      opt.textContent = p.label;
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

  // Expose for pages that render conditional states (empty/loading/error)
  window.protoNav = { getStateParam };

  document.addEventListener('DOMContentLoaded', buildToolbar);
})();
