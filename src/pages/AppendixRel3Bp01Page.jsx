import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel3Bp01Page() {
  return (
    <article className="doc-content">
      <h1>REL03-BP01 — 서비스 지향 아키텍처(SOA) 선택</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>워크로드를 비즈니스 기능별로 느슨하게 결합된 서비스로 분해하여 각 서비스의 독립적인 배포와 확장을 가능하게 합니다.</p>
      <h2>원하는 결과</h2>
      <p>독립적으로 배포하고 확장할 수 있는 서비스 구성</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>모놀리식 아키텍처</li>
        <li>강하게 결합된 서비스</li>
        <li>공유 데이터베이스</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>독립적 확장</li>
        <li>장애 격리</li>
        <li>빠른 배포</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>도메인 기반 서비스 분리</li>
        <li>API를 통한 서비스 간 통신</li>
        <li>서비스별 독립적 배포 파이프라인</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon API Gateway</li>
        <li>AWS Lambda</li>
        <li>Amazon ECS</li>
        <li>AWS App Mesh</li>
      </ul>
      <PageNav />
    </article>
  );
}
