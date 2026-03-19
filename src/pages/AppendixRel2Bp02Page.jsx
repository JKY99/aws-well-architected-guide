import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel2Bp02Page() {
  return (
    <article className="doc-content">
      <h1>REL02-BP02 — 고가용성 연결 선택</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>온프레미스와 AWS 간의 연결을 이중화하여 연결 장애 시에도 서비스 연속성을 유지합니다.</p>
      <h2>원하는 결과</h2>
      <p>연결 장애 시 자동 전환으로 서비스 연속성 유지</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>단일 연결 경로</li>
        <li>페일오버 테스트 미실시</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>연결 장애 내성</li>
        <li>비즈니스 연속성 보장</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Direct Connect + VPN 이중화</li>
        <li>BGP 라우팅으로 자동 전환</li>
        <li>연결 상태 모니터링</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Direct Connect</li>
        <li>AWS VPN</li>
        <li>Amazon CloudWatch</li>
      </ul>
      <PageNav />
    </article>
  );
}
