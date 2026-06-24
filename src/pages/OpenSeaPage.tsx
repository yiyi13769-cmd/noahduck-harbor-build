import { SiteNav } from '../components/SiteNav';
import { MixedText } from '../components/MixedText';
import { driftNotes } from '../data/site';

const openSeaTopics = [
  { label: 'AI 观察', text: '模型、入口、成本和产品形态的变化，只收判断型观察。' },
  { label: '写作手记', text: '写作过程里的方法、卡点和修订记录，和教程区分开。' },
  { label: '产品想法', text: '还没有进入系统长文的产品判断，先作为短观察保留。' },
] as const;

const openSeaRules = [
  '少量精选，不做无限下滑。',
  '按主题和年份归档，内容多起来后从索引进入。',
  '赚钱、X、账号运营相关内容不放上站。',
] as const;

export function OpenSeaPage() {
  return (
    <main className="open-approved page">
      <SiteNav active="openSea" brand="NoahDuck" caption="诺鸭船长 · 随笔观察" />

      <section className="space-hero open-hero" aria-labelledby="open-title">
        <div>
          <p className="eyebrow">随笔观察</p>
          <h1 id="open-title">公海</h1>
          <p className="hero-copy">没有航线的地方，我想到哪，写到哪。</p>
        </div>
        <aside className="reading-panel">
          <span>浏览方式</span>
          <p>先看短观察。内容变多后，从主题和年份索引进入。</p>
        </aside>
        <div className="open-tide-mark" aria-hidden="true">
          <span />
          <span />
          <span />
          <i />
          <i />
        </div>
      </section>

      <div className="open-approved-shell">
        <section className="open-current" aria-labelledby="open-current-title">
          <div>
            <p className="section-label">当前海面</p>
            <h2 id="open-current-title">自由，但不散。</h2>
          </div>
          <div className="open-note-stack">
            {driftNotes.map((entry) => (
              <article className="open-note" key={entry.code}>
                <span>{entry.code} · {entry.date}</span>
                <h3>{entry.title}</h3>
                <p>{entry.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="open-map" aria-label="公海未来索引">
          <div className="open-map-block">
            <p className="section-label">主题索引</p>
            {openSeaTopics.map((item) => (
              <article key={item.label}>
                <strong><MixedText text={item.label} /></strong>
                <span><MixedText text={item.text} /></span>
              </article>
            ))}
          </div>
          <div className="open-map-block">
            <p className="section-label">归档规则</p>
            {openSeaRules.map((item, index) => (
              <article key={item}>
                <strong>{String(index + 1).padStart(2, '0')}</strong>
                <span><MixedText text={item} /></span>
              </article>
            ))}
          </div>
        </section>

        <a className="open-approved-return" href="#/deep">
          回到有编号的航线
        </a>
      </div>
    </main>
  );
}
