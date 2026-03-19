import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-feedback">
          <p className="footer-feedback-title">Did this page help you?</p>
          <div className="footer-feedback-btns">
            <button className="footer-feedback-btn yes">Yes</button>
            <button className="footer-feedback-btn no">No</button>
          </div>
        </div>

        <div className="footer-meta">
          <p className="footer-privacy">
            <a
              href="https://aws.amazon.com/privacy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy
            </a>
            {" | "}
            <a
              href="https://aws.amazon.com/terms/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Site terms
            </a>
            {" | "}
            <span>© 2024, Amazon Web Services, Inc. or its affiliates. All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
