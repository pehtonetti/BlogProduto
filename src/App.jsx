import './styles/main.scss';
import Blog from './components/Blog';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const root = document.documentElement;
    const header = document.querySelector('header');
    if (!header) return;

    const setHeaderHeight = () => {
      const h = header.offsetHeight || 64;
      root.style.setProperty('--header-height', `${h}px`);
    };

    // initial set and a few follow-ups to catch layout shifts (fonts, images, menu wrap)
    setHeaderHeight();
    // give the layout a few chances to settle
    requestAnimationFrame(setHeaderHeight);
    const t1 = setTimeout(setHeaderHeight, 120);
    const t2 = setTimeout(setHeaderHeight, 400);

    // observe header size changes (menu wrapping)
    const ro = new ResizeObserver(() => setHeaderHeight());
    ro.observe(header);

    // observe DOM changes inside header (links added/removed, class changes)
    const mo = new MutationObserver(() => setHeaderHeight());
    mo.observe(header, { childList: true, subtree: true, attributes: true });

    // debounce resize handler
    let resizeTimer = 0;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(setHeaderHeight, 120);
    };
    window.addEventListener('resize', onResize);

    // fonts can change layout when they finish loading
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => setHeaderHeight()).catch(() => {});
    }

    return () => {
      ro.disconnect();
      mo.disconnect();
      window.removeEventListener('resize', onResize);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(resizeTimer);
    };
  }, []);

  return <Blog />;
}

export default App;