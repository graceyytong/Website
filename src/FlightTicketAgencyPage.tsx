import React from "react";
import "./FlightTicketAgencyPage.css";

const FlightTicketAgencyPage: React.FC = () => {
  const services = [
    {
      title: "国际机票预订",
      desc: "覆盖热门国际航线，提供多种舱位与出行方案选择。",
      image: process.env.PUBLIC_URL + "/images/国际.jpg"
    },
    {
      title: "国内机票预订",
      desc: "支持商务出行、探亲出行与旅游出行的一站式机票咨询。",
      image: process.env.PUBLIC_URL + "/images/国内.jpg"
    },
    {
      title: "团队与商务出行",
      desc: "为企业差旅、会议活动与团队出行提供统一订票服务。",
      image: process.env.PUBLIC_URL + "/images/商务.png"
    },
    {
      title: "行程咨询服务",
      desc: "根据预算、时间与目的地需求，协助匹配合适航班方案。",
      image: process.env.PUBLIC_URL + "/images/咨询.png"
    }
  ];

  const advantages = [
    { title: "航线丰富", text: "覆盖国内及国际热门航线" },
    { title: "快速匹配", text: "根据需求筛选合适航班" },
    { title: "稳定服务", text: "支持个人、商务及团队订票" },
  ];

  const whyUs = [
    {
      title: "专注机票业务",
      text: "长期围绕国内与国际机票咨询及预订服务展开，服务方向更清晰。",
    },
    {
      title: "响应快速",
      text: "根据客户时间、预算和目的地需求，快速匹配更合适的航班方案。",
    },
    {
      title: "服务稳定",
      text: "可支持个人出行、家庭出行、商务差旅和团队订票等多种需求。",
    },
    {
      title: "流程省心",
      text: "从咨询、选航班到出票确认，沟通流程清晰，减少客户决策成本。",
    },
  ];

  const processSteps = [
    { title: "联系客服", text: "通过电话咨询航班信息与预订需求" },
    { title: "选择航班", text: "根据时间、预算和目的地筛选航班" },
    { title: "确认订单", text: "确认乘机人信息并完成预订安排" },
    { title: "出票完成", text: "出票成功后发送对应出行信息" },
  ];

  return (
    <div className="page">
      <header className="site-header">
        <div className="container header-inner">
          <div className="company-name">上海远晶旅游咨询有限公司</div>

          <nav className="nav">
            <a href="#about">关于我们</a>
            <a href="#services">机票服务</a>
            <a href="#why-us">为什么选择我们</a>
            <a href="#process">预订流程</a>
            <a href="#contact">联系我们</a>
          </nav>
        </div>
      </header>

      <section id="about" className="about-section">
        <div className="about-banner">
          <div className="about-banner-glow"></div>
          <div className="about-banner-decor about-decor-left"></div>
          <div className="about-banner-decor about-decor-right"></div>

          <div className="about-network-dot dot-1"></div>
          <div className="about-network-dot dot-2"></div>
          <div className="about-network-dot dot-3"></div>
          <div className="about-network-dot dot-4"></div>
          <div className="about-network-dot dot-5"></div>

          <div className="about-network-line line-1"></div>
          <div className="about-network-line line-2"></div>
          <div className="about-network-line line-3"></div>
          <div className="about-network-line line-4"></div>

          <div className="about-title-wrap">
            <h1 className="about-title">关于我们</h1>
            <p className="about-subtitle">专业机票咨询与预订服务</p>
          </div>

          <div className="wave-wrap">
            <svg
              viewBox="0 0 1440 180"
              className="wave-svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0,80 C220,150 480,172 760,150 C1000,132 1210,88 1440,40 L1440,180 L0,180 Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        <div className="container about-content">
          <h2 className="section-title">公司简介</h2>

          <div className="about-text">
            <p>
              上海远晶旅游咨询有限公司是一家专注于机票业务的旅游咨询服务公司，主要为个人客户、家庭客户、商务客户及团队客户提供国内外机票预订与航班咨询服务。
            </p>

            <p>
              公司致力于通过稳定的航线资源和高效的服务流程，为客户提供清晰、便捷、可靠的出行解决方案。我们根据客户的时间安排、预算范围和目的地需求，帮助匹配更合适的航班组合，提高出行效率。
            </p>

            <p>
              未来，公司将持续优化服务流程与航线资源，为客户提供更加专业和稳定的机票咨询与预订服务。
            </p>

            <p>
              <strong>使命：</strong>
              提供高效可靠的机票服务，让出行更加便捷。
            </p>

            <p>
              <strong>愿景：</strong>
              成为值得信赖的机票咨询服务平台。
            </p>
          </div>
        </div>
      </section>

      <section className="advantages-section">
        <div className="container cards-grid three-cols">
          {advantages.map((item) => (
            <div className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="container">

          <h2 className="section-title">机票服务</h2>

          <div className="cards-grid four-cols">

            {services.map((item) => (
              <div className="service-card" key={item.title}>

                <div className="service-image-wrapper">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="service-image"
                  />
                </div>

                <div className="service-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      <section id="why-us" className="why-us-section">
        <div className="container">
          <h2 className="section-title center">为什么选择我们</h2>

          <div className="why-us-grid">
            {whyUs.map((item) => (
              <div className="why-us-item" key={item.title}>
                <div className="why-us-icon">✓</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="process-section">
        <div className="container">
          <h2 className="section-title center">机票预订流程</h2>

          <div className="process-grid">
            {processSteps.map((item, index) => (
              <div className="process-item" key={item.title}>
                <div className="process-number">{index + 1}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container contact-wrapper">
          <div className="contact-title-line">
            <span>联系我们</span>
          </div>

          <div className="contact-box">
            <div className="contact-label">机票咨询热线</div>
            <div className="contact-phone">📞 62898972</div>
            <div className="contact-tip">工作时间：周一至周日 9:00 - 21:00</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FlightTicketAgencyPage;
