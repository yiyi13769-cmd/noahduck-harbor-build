import { SiteNav } from '../components/SiteNav';
import { MixedText } from '../components/MixedText';
import { deepLayers, deepSeries } from '../data/site';

export function DeepPage() {
  const independentLayers = deepLayers.filter((layer) => layer.posts.length > 0);

  return (
    <main className="page deep-page">
      <SiteNav active="deep" brand="NoahDuck" caption="诺鸭船长 · 进阶实操" tone="dark" />
      <section className="space-hero deep-hero">
        <div>
          <p className="eyebrow">进阶技术与组合实操</p>
          <h1>深水区</h1>
          <p className="hero-copy">
            <MixedText text="这里处理工具背后的方法、系统和组合。不是快速上手，而是把一套流程真正用稳。" />
          </p>
        </div>
        <aside className="reading-panel">
          <span>阅读方式</span>
          <p>先选系列，再顺着同一主题往下读。这里处理组合、迁移和长期判断。</p>
        </aside>
        <div className="depth-mark" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
      </section>

      <section className="series-section">
        <div className="section-label">系列阅读</div>
        <div className="series-stack">
          {deepSeries.map((series) => (
            <div className="series-map" key={series.title}>
              <div className="series-intro">
                <span>{series.kicker}</span>
                <h2>{series.title}</h2>
                <p><MixedText text={series.text} /></p>
              </div>
              <div className="series-columns">
                {series.segments.map((segment, segmentIndex) => {
                  const offset = series.segments
                    .slice(0, segmentIndex)
                    .reduce((total, item) => total + item.posts.length, 0);

                  return (
                    <div className={`series-column ${segment.active ? 'active' : ''}`} key={segment.label}>
                      <strong>{segment.label}</strong>
                      {segment.posts.map((post, postIndex) => (
                        <a href={post.href} className="series-link" key={post.title}>
                          <em>{String(offset + postIndex + 1).padStart(2, '0')}</em>
                          <span>
                            <b><MixedText text={post.title} /></b>
                            <small><MixedText text={post.purpose} /></small>
                          </span>
                        </a>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {independentLayers.length > 0 && (
        <section className="depth-section">
          {independentLayers.map((layer) => (
            <article className="depth-layer" key={layer.level}>
              <div className="depth-side">
                <span>{layer.level}</span>
                <h2>{layer.title}</h2>
              <p><MixedText text={layer.text} /></p>
              </div>
              <div className="depth-posts">
                {layer.posts.map((post) => (
                  <a className="depth-post" href="#/deep" key={post.title}>
                    <h3><MixedText text={post.title} /></h3>
                    <p><MixedText text={post.purpose} /></p>
                    <span>{post.date} · {post.time}</span>
                  </a>
                ))}
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}
