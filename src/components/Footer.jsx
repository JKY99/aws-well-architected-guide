import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-feedback">
          <p className="footer-feedback-title">이 페이지가 도움이 되었나요?</p>
          <div className="footer-feedback-btns">
            <button className="footer-feedback-btn yes">예</button>
            <button className="footer-feedback-btn no">아니요</button>
          </div>
        </div>

        <div className="footer-meta">
          <p className="footer-privacy">
            <a
              href="https://aws.amazon.com/privacy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              개인정보 보호정책
            </a>
            {" | "}
            <a
              href="https://aws.amazon.com/terms/"
              target="_blank"
              rel="noopener noreferrer"
            >
              이용 약관
            </a>
            {" | "}
            <span>© 2024 Amazon Web Services, Inc. 또는 그 계열사. 모든 권리 보유.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
