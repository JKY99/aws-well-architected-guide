import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function SecBestPracticesPage() {
  return (
    <article className="doc-content">
      <h1>보안 — 모범 사례</h1>

      <p>
        클라우드에서의 보안을 위한 일곱 가지 모범 사례 영역이 있습니다:
      </p>

      <ul>
        <li><Link to="/pillars/security/security-foundations">보안 기반 (Security Foundations)</Link></li>
        <li><Link to="/pillars/security/iam">신원 및 접근 관리 (Identity and Access Management)</Link></li>
        <li><Link to="/pillars/security/detection">탐지 (Detection)</Link></li>
        <li><Link to="/pillars/security/infrastructure-protection">인프라 보호 (Infrastructure Protection)</Link></li>
        <li><Link to="/pillars/security/data-protection">데이터 보호 (Data Protection)</Link></li>
        <li><Link to="/pillars/security/incident-response">사고 대응 (Incident Response)</Link></li>
        <li><Link to="/pillars/security/application-security">애플리케이션 보안 (Application Security)</Link></li>
      </ul>

      <p>
        보안은 클라우드 컴퓨팅의 모든 측면에서 최우선 사항입니다.
        AWS 고객은 고도의 보안에 민감한 조직의 요구사항을 충족하도록 구축된 데이터센터와 네트워크 아키텍처의 혜택을 누립니다.
      </p>

      <PageNav />
    </article>
  );
}
