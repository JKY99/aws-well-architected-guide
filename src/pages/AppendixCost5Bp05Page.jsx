import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost5Bp05Page() {
  return (
    <article className="doc-content">
      <h1>COST05-BP05 — 사용되지 않는 리소스 분석</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>사용되지 않거나 활용률이 낮은 리소스를 정기적으로 파악하고 삭제 또는 최적화하여 낭비를 제거합니다.</p>
      <h2>원하는 결과</h2>
      <p>사용되지 않는 리소스를 지속적으로 식별하고 제거하여 불필요한 비용을 완전히 없앱니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>리소스를 생성한 후 프로젝트 종료 시 삭제하지 않고 방치</li>
        <li>CPU·네트워크 활용률을 모니터링하지 않아 유휴 리소스 파악 불가</li>
        <li>좀비 리소스(연결되지 않은 EBS 볼륨, 미사용 Elastic IP 등)를 장기간 방치</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>유휴 리소스 제거로 즉각적인 비용 절감 효과</li>
        <li>환경 정리로 관리 복잡성 감소 및 보안 위험 감소</li>
        <li>리소스 태깅과 연계하여 소유자 불명 리소스 추적 가능</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Trusted Advisor의 비용 최적화 권고를 통해 유휴 EC2·RDS·로드밸런서 식별</li>
        <li>AWS Cost Explorer에서 미사용 Reserved Instance 및 Savings Plans 파악</li>
        <li>AWS Config 규칙으로 연결되지 않은 EBS 볼륨·미사용 Elastic IP 등 컴플라이언스 검사 자동화</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Trusted Advisor</li>
        <li>AWS Compute Optimizer</li>
        <li>Amazon CloudWatch</li>
        <li>AWS Config</li>
      </ul>
      <PageNav />
    </article>
  );
}
