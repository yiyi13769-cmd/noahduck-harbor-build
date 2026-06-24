import { useMemo, useState } from 'react';
import { MixedText } from '../components/MixedText';
import { SiteNav } from '../components/SiteNav';
import '../styles/vault.css';

type VaultCategoryId = 'featured' | 'info' | 'ai' | 'create' | 'archive' | 'workflow';

type VaultCategory = {
  id: VaultCategoryId;
  label: string;
  title: string;
  note: string;
};

type VaultTool = {
  name: string;
  description: string;
  audience: string;
  url: string;
  tag: string;
  category: Exclude<VaultCategoryId, 'featured'>;
  featured?: boolean;
};

const categories: VaultCategory[] = [
  {
    id: 'featured',
    label: '精选',
    title: '先放最值得留下的工具。',
    note: '这里不做大全。每个入口都要能说清楚用途、适合谁、为什么值得留下。',
  },
  {
    id: 'info',
    label: '信息发现',
    title: '找信息源和选题线索。',
    note: '用于日常观察、趋势判断、订阅管理和素材发现。',
  },
  {
    id: 'ai',
    label: 'AI 工作台',
    title: '把 AI 放进稳定工作流。',
    note: '本地模型、知识库、对话界面和长期使用环境。',
  },
  {
    id: 'create',
    label: '内容制作',
    title: '把想法变成可发布内容。',
    note: '录屏、剪辑、字幕、图片和视频生产工具。',
  },
  {
    id: 'archive',
    label: '资料整理',
    title: '把散落文件变成可复用资料。',
    note: 'OCR、Markdown、PDF、书签和个人资料库。',
  },
  {
    id: 'workflow',
    label: '效率工具',
    title: '减少重复动作。',
    note: '自动化、自托管、设计素材和轻量辅助工具。',
  },
];

const tools: VaultTool[] = [
  {
    name: 'Folo',
    description: '把 RSS、网站和信息源收进一个长期维护的阅读流。',
    audience: '适合需要稳定信息输入的人',
    url: 'https://folo.is/',
    tag: '订阅',
    category: 'info',
    featured: true,
  },
  {
    name: 'NewsNow',
    description: '快速查看多平台热点，判断今天有没有值得继续看的线索。',
    audience: '适合做选题和日常观察',
    url: 'https://newsnow.busiyi.world/',
    tag: '热点',
    category: 'info',
  },
  {
    name: 'Open WebUI',
    description: '本地模型的网页工作台，适合搭一个更稳定的 AI 使用入口。',
    audience: '适合本地 AI 和私有工作流',
    url: 'https://github.com/open-webui/open-webui',
    tag: '本地 AI',
    category: 'ai',
    featured: true,
  },
  {
    name: 'AnythingLLM',
    description: '把资料库、模型和对话放在一起，用来做私有知识问答。',
    audience: '适合整理自己的资料库',
    url: 'https://anythingllm.com/',
    tag: '知识库',
    category: 'ai',
    featured: true,
  },
  {
    name: 'Cap',
    description: '轻量录屏工具，适合教程、产品演示和工作流记录。',
    audience: '适合录教程和流程演示',
    url: 'https://cap.so/',
    tag: '录屏',
    category: 'create',
    featured: true,
  },
  {
    name: 'OpenCut',
    description: '开源剪辑工具，适合轻量剪辑和视频流程验证。',
    audience: '适合快速处理视频素材',
    url: 'https://github.com/OpenCut-app/OpenCut',
    tag: '剪辑',
    category: 'create',
  },
  {
    name: 'MarkItDown',
    description: '把 PDF、Office、网页等资料转换成 Markdown，方便进入知识库。',
    audience: '适合做资料转写和整理',
    url: 'https://github.com/microsoft/markitdown',
    tag: '转换',
    category: 'archive',
    featured: true,
  },
  {
    name: 'Umi-OCR',
    description: '离线 OCR 工具，适合截图、扫描件和中文资料整理。',
    audience: '适合处理图片里的文字',
    url: 'https://github.com/hiroi-sora/Umi-OCR',
    tag: 'OCR',
    category: 'archive',
  },
  {
    name: 'Karakeep',
    description: '网页、书签和素材的长期收藏管理入口。',
    audience: '适合管理网页收藏',
    url: 'https://github.com/karakeep-app/karakeep',
    tag: '书签',
    category: 'archive',
    featured: true,
  },
  {
    name: 'n8n',
    description: '把重复动作串成自动化流程，适合个人和小团队工作流。',
    audience: '适合连接多个工具',
    url: 'https://n8n.io/',
    tag: '自动化',
    category: 'workflow',
  },
  {
    name: 'Immich',
    description: '自托管照片管理，适合把个人影像资料留在自己手里。',
    audience: '适合私有相册和照片归档',
    url: 'https://github.com/immich-app/immich',
    tag: '相册',
    category: 'workflow',
  },
  {
    name: 'unDraw',
    description: '干净的开源插画库，用于低成本原型和文章配图。',
    audience: '适合原型和文章视觉',
    url: 'https://undraw.co/',
    tag: '素材',
    category: 'workflow',
  },
];

export function VaultPage() {
  const [activeCategory, setActiveCategory] = useState<VaultCategoryId>('featured');

  const activeMeta = categories.find((category) => category.id === activeCategory) ?? categories[0];
  const visibleTools = useMemo(
    () =>
      activeCategory === 'featured'
        ? tools.filter((tool) => tool.featured)
        : tools.filter((tool) => tool.category === activeCategory),
    [activeCategory],
  );

  const countFor = (categoryId: VaultCategoryId) =>
    categoryId === 'featured'
      ? tools.filter((tool) => tool.featured).length
      : tools.filter((tool) => tool.category === categoryId).length;

  return (
    <main className="page vault-obsidian-page">
      <SiteNav active="vault" brand="NoahDuck" caption="诺鸭船长 · 工具收藏" tone="dark" />

      <section className="space-hero vault-obsidian-hero" aria-labelledby="vault-title">
        <div>
          <p className="eyebrow">工具收藏 / 资产库</p>
          <h1 id="vault-title">藏宝库</h1>
          <p className="hero-copy">被潮汐筛过浮上来的东西。</p>
        </div>
        <aside className="reading-panel vault-obsidian-rule" aria-label="入库标准">
          <span>入库标准</span>
          <p>只放反复会用、用途明确、对普通人有长期帮助的工具。</p>
        </aside>
        <div className="vault-obsidian-mark" aria-hidden="true">
          <span />
          <span />
          <span />
          <i />
          <i />
        </div>
      </section>

      <section className="vault-obsidian-library" aria-label="精选工具">
        <div className="vault-obsidian-library-head">
          <p>精选工具</p>
          <span>不做工具大全，只留下有判断、有用途、能长期复用的入口。</span>
        </div>

        <div className="vault-obsidian-filter" aria-label="藏宝库分类">
          {categories.map((category) => (
            <button
              key={category.id}
              className={category.id === activeCategory ? 'is-active' : undefined}
              onClick={() => setActiveCategory(category.id)}
              type="button"
            >
              <span><MixedText text={category.label} /></span>
              <small>{countFor(category.id)} 个</small>
            </button>
          ))}
        </div>

        <div className="vault-obsidian-index">
          <header className="vault-obsidian-index-head">
            <span><MixedText text={activeMeta.label} /></span>
            <h2><MixedText text={activeMeta.title} /></h2>
            <p><MixedText text={activeMeta.note} /></p>
          </header>

          <div className="vault-obsidian-list">
            {visibleTools.map((tool, index) => (
              <a
                key={tool.name}
                className="vault-obsidian-item"
                href={tool.url}
                rel="noreferrer"
                target="_blank"
              >
                <span className="vault-obsidian-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="vault-obsidian-item-main">
                  <div>
                    <h3><MixedText text={tool.name} /></h3>
                    <p><MixedText text={tool.description} /></p>
                  </div>
                  <strong><MixedText text={tool.audience} /></strong>
                </div>
                <em><MixedText text={tool.tag} /></em>
                <small>外链</small>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
