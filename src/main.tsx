import { StrictMode, useState, type FormEvent, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  CalendarCheck,
  ChartNoAxesCombined,
  CheckCircle2,
  ChevronRight,
  Download,
  Layers3,
  Mail,
  MapPin,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  UsersRound,
  Workflow,
} from "lucide-react";
import "./styles.css";

type IconCard = {
  icon: ReactNode;
  title: string;
  text: string;
};

type SkillGroup = {
  title: string;
  items: string[];
};

type Experience = {
  period: string;
  company: string;
  role: string;
  project: string;
  summary: string;
  points: string[];
  result: string;
};

const metrics = [
  { value: "100+", label: "最大跨职能团队协同规模" },
  { value: "3款", label: "千万级流水项目商业化落地" },
  { value: "70%+", label: "量产需求由外部产能解决" },
  { value: "90%", label: "关键路径风险识别准确率" },
];

const strengths: IconCard[] = [
  {
    icon: <Trophy />,
    title: "顶级大厂全周期 PM 经验",
    text: "网易《第五人格》APM、腾讯天美《元梦之星》研发 PM，参与 DAU 千万级项目从立项到上线运营的完整周期。",
  },
  {
    icon: <Rocket />,
    title: "跨品类项目交付能力",
    text: "累计交付 ARPG、SLG、FPS、三消、AI 虚拟人、CG 番剧 PV、竞技赛事平台等多品类项目。",
  },
  {
    icon: <Network />,
    title: "外包工业化 + AI 量产体系",
    text: "主导 20+ 人 CP 驻地团队搭建，量产需求 70%+ 由外部产能解决，并推动美术 AI 开发流程制度落地。",
  },
  {
    icon: <ShieldCheck />,
    title: "数据驱动风险管理",
    text: "构建需求评估、敏捷排期、质量控制、效能分析链路，关键路径风险识别近 90%，部分管线 ROI 降低 40%。",
  },
];

const skills: SkillGroup[] = [
  {
    title: "项目管理",
    items: ["全周期项目管理", "敏捷开发 Scrum", "双周迭代", "版本节奏控制", "风险预警", "成本核算", "跨部门协同"],
  },
  {
    title: "美术工业化",
    items: ["美术管线搭建", "资源标准化", "外包 SOP", "驻场协作管理", "供应商筛选与结算", "量产环境工业化"],
  },
  {
    title: "AI 能力",
    items: ["AIGC 美术资产生产", "Stable Diffusion", "ComfyUI", "Midjourney", "AI 流程标准化", "LLM 项目管理探索"],
  },
  {
    title: "工具与协作",
    items: ["Tapd", "JIRA", "Confluence", "Microsoft Project", "Visio", "Office 全家桶", "飞书 / 钉钉"],
  },
  {
    title: "管理软技能",
    items: ["团队管理", "商务沟通", "文档撰写", "复盘沉淀", "干系人管理", "跨地域协作"],
  },
];

const experiences: Experience[] = [
  {
    period: "2025.07 - 至今",
    company: "网易（杭州）网络有限公司",
    role: "APM / 外包管理",
    project: "《第五人格》项目",
    summary: "DAU 长期稳居二次元 PVP 头部项目，负责角色资源统筹、美术版本节奏、外部产能协作和 AI 美术流程沉淀。",
    points: [
      "推动角色管线优化，将版本需求拆解为可执行目标并落实到人，建立数据透明的进度跟进体系。",
      "基于全年规划制定内外部团队产能使用，定期复盘进度与产能饱和度并输出纠偏结论。",
      "把控美术开发的版本节奏，围绕进度、成本、质量进行风险预警与处理。",
      "主导美术 AI 开发流程与制度建设，覆盖资源归档、需求定标和预研方案输出。",
    ],
    result: "通过版本日历、周迭代等机制，保障局内、营销宣传、衍生品等资产如期验收、交付与测试，未发生 P0 级延期事故。",
  },
  {
    period: "2022.04 - 2025.06",
    company: "腾讯 IEG 天美工作室",
    role: "研发项目经理 PM",
    project: "《元梦之星》",
    summary: "腾讯娱乐派对类旗舰项目，DAU 峰值千万+；参与项目从立项研发到上线运营的全周期管理。",
    points: [
      "构建美术全生命周期管理体系，覆盖需求评估、敏捷排期、N+2 转测、质量控制与效能分析。",
      "搭建全流程工业化外包体系，覆盖供应商筛选、产能沟通、质量监控及结算系统。",
      "主导 20+ 人成都 CP 驻地团队搭建，实现量产需求 70%+ 外部产能解决。",
      "推动大版本美术内容准时交付，建立数据驱动风险管理系统，关键路径风险识别近 90%。",
    ],
    result: "主导场景线、MOBA 玩法、商品线等特性美术管线搭建；驻场人效提升 30%+，部分管线 ROI 降低 40%。",
  },
  {
    period: "2021.12 - 2022.02",
    company: "魔珐（上海）信息科技有限公司",
    role: "研发项目经理",
    project: "AGI 虚拟偶像 / 虚拟 IP / TVC",
    summary: "负责虚拟 IP、TVC、PV/KV 与 CG 内容项目的客户需求澄清、资源整合、周期成本评估和风险预警。",
    points: [
      "负责项目引进前期客户沟通，组织团队评估项目可行性并完成立项方案。",
      "处理动态需求变更，把控不同项目推进节奏与交付结果。",
      "沉淀数据、迭代流程、跟踪汇报，并在项目结束后完成复盘总结。",
    ],
    result: "虚拟人 IP 数据长期处于虚拟 IP 微博热度榜前三，完成多个 PV / KV 项目，并落地 2 部 CG 级别漫改番剧及直播平台项目。",
  },
  {
    period: "2021.03 - 2021.12",
    company: "乐竞文化传媒有限公司",
    role: "研发项目经理",
    project: "KPL 赛事直播平台 / OA 与官网",
    summary: "负责赛事平台需求整理、研发任务拆解、排期管理、成本评估和敏捷迭代，并参与官网与 OA 系统建设。",
    points: [
      "负责赛事平台需求整理、研发任务分解、任务排期、流程优化与敏捷迭代周期管理。",
      "参与制定项目整体技术选型，对接干系人并把控研发各环节进度。",
      "从 0 到 1 实现公司官网项目，拆解前后端任务并短期完成初版上线。",
    ],
    result: "赛事平台承接 KPL 春季赛、夏季赛、世界冠军杯等核心赛事任务，完成 2021 年 KPL、QQ 飞车系列赛事活动。",
  },
  {
    period: "2019.09 - 2021.02",
    company: "郑州威科姆科技股份有限公司",
    role: "管培生",
    project: "IT 行业项目协作基础",
    summary: "参与公司管培体系培养，覆盖产品、研发、商务等多个轮岗模块。",
    points: ["系统建立 IT 行业项目协作认知与流程基础，为后续研发项目管理和跨部门协作打底。"],
    result: "完成产品、研发、商务等模块轮岗，形成项目协作和流程管理基础。",
  },
];

const cases: IconCard[] = [
  {
    icon: <CalendarCheck />,
    title: "全周期版本交付",
    text: "用需求评估、敏捷排期、N+2 转测、周迭代和版本日历，把复杂内容生产转成可跟踪交付系统。",
  },
  {
    icon: <Layers3 />,
    title: "美术管线与资源标准化",
    text: "建立资源版本管理、资产标准流程和美术全生命周期管理规范，支撑多管线并行生产。",
  },
  {
    icon: <UsersRound />,
    title: "驻场与供应商协作",
    text: "从供应商筛选到结算系统打通外部产能链路，形成可复制的驻场协作和外包 SOP。",
  },
  {
    icon: <Sparkles />,
    title: "AI 美术流程落地",
    text: "围绕需求定标、资源归档、预研方案和团队赋能，推动 AI 能力进入规范化量产环境。",
  },
];

function App() {
  const [isResumeGateOpen, setIsResumeGateOpen] = useState(false);
  const [resumeCode, setResumeCode] = useState("");
  const [resumeError, setResumeError] = useState("");

  const openResumeGate = () => {
    setResumeCode("");
    setResumeError("");
    setIsResumeGateOpen(true);
  };

  const closeResumeGate = () => {
    setIsResumeGateOpen(false);
    setResumeCode("");
    setResumeError("");
  };

  const verifyResumeCode = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (resumeCode.trim() === "Joker") {
      window.open("resume.pdf", "_blank", "noopener,noreferrer");
      closeResumeGate();
      return;
    }

    setResumeError("验证码错误，请重新输入。");
  };

  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="返回顶部">
          <span>SB</span>
          <strong>孙斌</strong>
        </a>
        <nav aria-label="页面导航">
          <a href="#strengths">优势</a>
          <a href="#skills">技能</a>
          <a href="#experience">经历</a>
          <a href="#cases">案例</a>
          <a href="#contact">联系</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <BadgeCheck size={18} /> 游戏研发 PM/APM · 项目主管
            </p>
            <h1>
              游戏研发项目经理
              <br />
              美术工业化与 AI 量产
            </h1>
            <p className="hero-subtitle">
              近 7 年项目管理与研发协作经验，覆盖网易《第五人格》、腾讯天美《元梦之星》、虚拟 IP、CG 番剧 PV 与竞技赛事平台，擅长把复杂内容生产拆成可管理、可追踪、可复盘的交付系统。
            </p>
            <div className="hero-tags" aria-label="核心标签">
              <span>全周期 PM</span>
              <span>美术管线搭建</span>
              <span>外包工业化</span>
              <span>AI 量产流程</span>
            </div>
            <div className="hero-actions">
              <a className="primary-button" href="#contact">
                联系沟通 <ChevronRight size={18} />
              </a>
              <button className="secondary-button" type="button" onClick={openResumeGate}>
                获取真实简历 <Download size={18} />
              </button>
            </div>
          </div>
          <aside className="hero-panel" aria-label="关键成果">
            <div className="panel-topline">
              <span>Delivery System</span>
              <ChartNoAxesCombined size={20} />
            </div>
            <div className="metric-grid">
              {metrics.map((metric) => (
                <div className="metric" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
            <div className="signal-card">
              <Target size={22} />
              <p>面向大版本、美术管线、外部产能和 AI 流程的复合型项目管理。</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section" id="strengths">
        <div className="section-heading">
          <p>Core Strengths</p>
          <h2>新版简历口径下的四个核心卖点</h2>
        </div>
        <div className="strength-grid">
          {strengths.map((item) => (
            <article className="feature-card" key={item.title}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-heading">
          <p>Professional Skills</p>
          <h2>项目管理、美术工业化与 AI 流程的组合能力</h2>
        </div>
        <div className="skill-grid">
          {skills.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div>
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="experience">
        <div className="section-heading">
          <p>Experience</p>
          <h2>从大厂游戏研发到虚拟内容与平台系统的交付经历</h2>
        </div>
        <div className="timeline">
          {experiences.map((item) => (
            <article className="timeline-item" key={`${item.company}-${item.period}`}>
              <div className="timeline-meta">
                <span>{item.period}</span>
                <strong>{item.project}</strong>
              </div>
              <div className="timeline-content">
                <h3>{item.company}</h3>
                <p className="role">{item.role}</p>
                <p>{item.summary}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>
                      <CheckCircle2 size={16} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="result-line">{item.result}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="cases">
        <div className="section-heading split">
          <div>
            <p>Selected Cases</p>
            <h2>可迁移到新团队的管理抓手</h2>
          </div>
          <a className="text-link" href="#contact">
            预约进一步沟通 <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="case-grid">
          {cases.map((item) => (
            <article className="case-card" key={item.title}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">
            <BriefcaseBusiness size={18} /> Interview Ready
          </p>
          <h2>适合游戏研发 PM/APM / 项目主管岗位的进一步沟通</h2>
          <p>
            关注大型游戏版本交付、美术工业化、跨地域外包协作、AI 内容生产流程与项目管理体系建设。
          </p>
        </div>
        <div className="contact-card">
          <a href="mailto:script_sb@163.com">
            <Mail size={20} />
            script_sb@163.com
          </a>
          <span>
            <MapPin size={20} />
            上海 / 北京 / 杭州 / 深圳
          </span>
          <button type="button" onClick={openResumeGate}>
            <Download size={20} />
            获取真实简历
          </button>
        </div>
      </section>

      {isResumeGateOpen && (
        <div className="resume-gate" role="dialog" aria-modal="true" aria-labelledby="resume-gate-title">
          <form className="resume-gate-card" onSubmit={verifyResumeCode}>
            <button className="resume-gate-close" type="button" onClick={closeResumeGate} aria-label="关闭">
              ×
            </button>
            <p className="eyebrow">Resume Access</p>
            <h2 id="resume-gate-title">输入验证码获取真实简历</h2>
            <label htmlFor="resume-code">验证码</label>
            <input
              id="resume-code"
              autoFocus
              value={resumeCode}
              onChange={(event) => {
                setResumeCode(event.target.value);
                setResumeError("");
              }}
              placeholder="请输入验证码"
              type="text"
            />
            {resumeError && <p className="resume-gate-error">{resumeError}</p>}
            <button className="primary-button" type="submit">
              验证并打开 <Download size={18} />
            </button>
          </form>
        </div>
      )}
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
