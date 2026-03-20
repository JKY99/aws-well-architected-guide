import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost6Bp04Page() {
  return (
    <article className="doc-content">
      <h1>COST06-BP04 — 공유 리소스 사용 고려</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>공유 리소스 모델을 고려하여 비용을 분산합니다. 여러 워크로드 또는 팀이 리소스를 공유함으로써 전체 비용을 절감합니다.</p>
      <h2>원하는 결과</h2>
      <p>공유 리소스 모델이 적절히 활용되어 전체 인프라 비용이 절감됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>각 워크로드나 팀마다 독립된 인프라를 완전히 유지합니다.</li>
        <li>공유 리소스의 이점을 활용하지 않습니다.</li>
        <li>공유 서비스에 대한 비용 귀속 메커니즘이 없습니다.</li>
        <li>리소스 공유로 인한 보안 및 격리 요구사항을 무시합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>전체 인프라 비용이 절감됩니다.</li>
        <li>리소스 활용률이 향상됩니다.</li>
        <li>운영 복잡성이 감소합니다.</li>
        <li>비용이 실제 사용량에 따라 공정하게 배분됩니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>공유 VPC 구조: 여러 워크로드가 공유하는 VPC 구조를 설계합니다.</li>
        <li>관리형 서비스 활용: 자체 관리 대신 관리형 서비스를 사용하여 운영 비용을 공유합니다.</li>
        <li>멀티테넌트 아키텍처: 가능한 경우 멀티테넌트 아키텍처를 채택하여 리소스를 공유합니다.</li>
        <li>공유 비용 귀속: 공유 리소스의 비용을 사용량에 따라 적절히 귀속합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon VPC Sharing</li>
        <li>AWS Organizations</li>
        <li>Amazon RDS</li>
        <li>Amazon ElastiCache</li>
      </ul>
      <PageNav />
    </article>
  );
}
