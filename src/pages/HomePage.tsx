import { SiteNav } from '../components/SiteNav';
import { MixedText } from '../components/MixedText';
import { routeEntries } from '../data/site';

export function HomePage() {
  return (
    <main className="page home-page">
      <SiteNav active="home" brand="NoahDuck" caption="诺鸭船长" />

      <section className="home-hero">
        <div className="home-brand-plane">
          <h1 className="home-brand-mark" aria-label="带你在信息的海洋里寻找陆地">
            <span>带你在信息的海洋里</span>
            <span>寻找陆地</span>
          </h1>
          <p className="home-brand-sub">
            <MixedText text="从零开始陪你走完 AI 这段路" />
          </p>
        </div>
      </section>

      <section className="home-section home-compass" aria-labelledby="home-compass-title">
        <div className="section-label">站点定位</div>
        <div className="home-compass-grid">
          <h2 id="home-compass-title">四个入口，各有分工。</h2>
          <div>
            <strong>浅水区</strong>
            <p>快速入门、基础术语、榨干系列。</p>
          </div>
          <div>
            <strong>公海</strong>
            <p>短观察、阶段判断和想法归档。</p>
          </div>
          <div>
            <strong>深水区</strong>
            <p>进阶实操、工具组合、系统判断。</p>
          </div>
          <div>
            <strong>藏宝库</strong>
            <p>长期有用的工具和资源收藏。</p>
          </div>
        </div>
      </section>

      <section className="home-section route-overview" aria-labelledby="route-title">
        <div className="section-label">航线展开</div>
        <div className="route-table">
          <h2 id="route-title">从哪里进入</h2>
          {routeEntries.map((entry) => (
            <a className="route-row" key={entry.code} href={entry.href}>
              <span className="code">{entry.code}</span>
              <span className="route-name">
                <strong>{entry.title}</strong>
                <em>{entry.role}</em>
              </span>
              <span className="route-text">
                <MixedText text={entry.text} />
              </span>
              <span className="enter">进入</span>
            </a>
          ))}
        </div>
      </section>

      <section className="home-section follow-section" aria-labelledby="follow-title">
        <div className="section-label">持续关注</div>
        <div className="follow-grid">
          <h2 id="follow-title">在哪些地方找到我</h2>
          <div className="platform-group">
            <div className="group-head">
              <h3>文字平台</h3>
              <span>读文章 / 看更新</span>
            </div>
            <a className="platform-row" href="https://weixin.sogou.com/weixin?type=1&query=%E8%AF%BA%E9%B8%AD%E8%88%B9%E9%95%BF" target="_blank" rel="noreferrer">
              <strong>微信公众号</strong>
              <span>微信内搜索：诺鸭船长</span>
            </a>
            <a className="platform-row" href="https://www.xiaohongshu.com/search_result?keyword=%E8%AF%BA%E9%B8%AD%E8%88%B9%E9%95%BF" target="_blank" rel="noreferrer">
              <strong>小红书</strong>
              <span>搜索：诺鸭船长</span>
            </a>
            <a className="platform-row" href="https://x.com/noahduck283" target="_blank" rel="noreferrer">
              <strong>X</strong>
              <span>@noahduck283</span>
            </a>
          </div>
          <div className="platform-group">
            <div className="group-head">
              <h3>视频平台</h3>
              <span>看讲解 / 看过程</span>
            </div>
            <a className="platform-row" href="https://channels.weixin.qq.com/" target="_blank" rel="noreferrer">
              <strong>视频号</strong>
              <span>微信内搜索：诺鸭船长</span>
            </a>
            <a className="platform-row" href="https://www.youtube.com/channel/UCT7WQVWhQxySpwWfWJldB_Q" target="_blank" rel="noreferrer">
              <strong>YouTube</strong>
              <span>长视频与系统讲解</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
