import { useState } from 'react';
import { SiteNav } from '../components/SiteNav';
import { MixedText } from '../components/MixedText';
import { shallowPosts } from '../data/site';

export function ShallowPage() {
  const shallowSections = [
    {
      id: 'basics',
      label: '基础扫盲',
      title: '先把词听懂',
      text: '模型、提示词、上下文、工具选择这些入口概念，先用最短路径讲清楚。',
      posts: shallowPosts.filter((post) => post.id === 'S-01' || post.id === 'S-02'),
    },
    {
      id: 'squeeze',
      label: '榨干系列',
      title: '一个工具讲到能照做',
      text: 'Gmail、Wise、Apple ID、PayPal、飞书 AI 这类具体工具，按注册、设置、避坑和第一套用法拆开。',
      posts: shallowPosts.filter((post) => post.series === '榨干系列'),
    },
    {
      id: 'tools',
      label: '工具入门',
      title: '把 AI 工具先用起来',
      text: '不追热词，先判断这个工具解决什么问题、适合什么场景、第一步怎么开始。',
      posts: shallowPosts.filter((post) => ['S-03', 'S-04', 'S-05'].includes(post.id)),
    },
    {
      id: 'mac',
      label: 'Mac 入门',
      title: '把设备阻力降下来',
      text: '电脑和系统本身不应该成为学习 AI 的阻力。Mac 入门段在这里，系统段继续去深水区。',
      posts: shallowPosts.filter((post) => post.series === 'Mac 新手系列'),
    },
  ];
  const [activeSectionId, setActiveSectionId] = useState(shallowSections[0].id);
  const activeSection = shallowSections.find((section) => section.id === activeSectionId) ?? shallowSections[0];

  return (
    <main className="page shallow-page">
      <SiteNav active="shallow" brand="NoahDuck" caption="诺鸭船长 · 快速入门" />
      <section className="space-hero">
        <div>
          <p className="eyebrow">工具快速入门</p>
          <h1>浅水区</h1>
          <p className="hero-copy">
            <MixedText text="给刚开始使用 AI 和常用工具的读者准备。先扫盲基础术语，再把一个工具快速用起来。" />
          </p>
        </div>
        <aside className="reading-panel">
          <span>阅读方式</span>
          <p>先选分类，再进入一张卡片。每篇只解决一个入门问题。</p>
        </aside>
        <div className="route-mark" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </section>

      <section className="route-section shallow-catalog-section">
        <div className="section-label">分类进入</div>
        <div className="shallow-catalog">
          <div className="shallow-index" aria-label="浅水区分类">
            {shallowSections.map((section, index) => (
              <button
                type="button"
                key={section.id}
                className={section.id === activeSection.id ? 'is-active' : undefined}
                onClick={() => setActiveSectionId(section.id)}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{section.label}</strong>
                <em>{section.posts.length} 篇</em>
              </button>
            ))}
          </div>

          <div className="shallow-section-stack">
              <section className="shallow-category" id={activeSection.id}>
                <div className="shallow-category-head">
                  <span>{activeSection.label}</span>
                  <h2>{activeSection.title}</h2>
                  <p><MixedText text={activeSection.text} /></p>
                </div>
                <div className="shallow-card-grid">
                  {activeSection.posts.map((post) => (
                    <article className="shallow-card" key={post.id}>
                      <span className="buoy-code">{post.id}</span>
                      <h3><MixedText text={post.title} /></h3>
                      <p><MixedText text={post.purpose} /></p>
                      <div className="meta-line">
                        <span>{post.date}</span>
                        <span>{post.time}</span>
                        {post.series && <span>{post.series}</span>}
                        <a href="#/shallow">进入阅读</a>
                      </div>
                      {post.handoff && (
                        <a className="series-handoff" href={post.handoff.href}>
                          <span>{post.handoff.label}</span>
                          <p><MixedText text={post.handoff.text} /></p>
                        </a>
                      )}
                    </article>
                  ))}
                </div>
              </section>
          </div>
        </div>
      </section>
    </main>
  );
}
