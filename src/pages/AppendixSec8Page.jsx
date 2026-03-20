import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec8Page() {
  return (
    <article className="doc-content">
      <h1>SEC 8 — 저장 데이터를 어떻게 보호합니까?</h1>

      <p>
        저장 데이터(Data at Rest)를 암호화하고 액세스를 제어하여
        무단 접근과 데이터 유출을 방지합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/security/sec8/bp01">SEC08-BP01: 저장 데이터 암호화 구현</Link></strong><br />
          <span>S3, EBS, RDS, DynamoDB 등 모든 스토리지 서비스에서 저장 데이터 암호화를 활성화합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec8/bp02">SEC08-BP02: 암호화 키 관리</Link></strong><br />
          <span>IAM 정책, S3 버킷 정책, 리소스 기반 정책을 사용하여 저장 데이터에 대한 접근을 최소 권한 원칙에 따라 제어합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec8/bp03">SEC08-BP03: 저장 데이터 액세스 제어</Link></strong><br />
          <span>AWS KMS를 사용하여 암호화 키를 중앙에서 관리하고 키 사용 감사 로그를 유지합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/security/sec8/bp04">SEC08-BP04: 액세스 제어 강화</Link></strong><br />
          <span>데이터 민감도에 따라 분류하고, IAM 정책과 리소스 기반 정책으로 액세스를 엄격히 제어합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
