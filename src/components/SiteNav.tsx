import { navItems, type RouteKey } from '../data/site';

type SiteNavProps = {
  active?: RouteKey;
  brand: string;
  caption: string;
  tone?: 'light' | 'dark';
};

export function SiteNav({ active, brand, caption, tone = 'light' }: SiteNavProps) {
  return (
    <header className={`site-nav ${tone}`}>
      <a className="brand-lockup" href="#/" aria-label="回到首页">
        <strong>{brand}</strong>
        <span>{caption}</span>
      </a>
      <nav className="nav-links" aria-label="主要分区">
        {navItems.map((item) => (
          <a key={item.key} className={active === item.key ? 'current' : undefined} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
