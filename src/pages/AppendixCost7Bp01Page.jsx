import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost7Bp01Page() {
  return (
    <article className="doc-content">
      <h1>COST07-BP01 — 정기적인 워크로드 검토 프로세스 개발</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>
        분기별 또는 연간 Well-Architected Review를 통해 비용 최적화 기회를 체계적으로 발굴합니다.
        정기적인 검토 프로세스를 통해 비용 낭비 요소를 지속적으로 파악하고 개선하는 문화를 구축합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        워크로드의 비용 효율성을 지속적으로 개선하는 구조적인 프로세스가 확립됩니다.
        새로운 AWS 서비스와 기능을 적시에 평가하고 적용하여 비용을 최적화합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>비용 검토를 일회성 활동으로만 수행</li>
        <li>검토 결과를 문서화하지 않아 동일한 문제가 반복 발생</li>
        <li>비용 최적화 책임자를 지정하지 않아 책임이 불명확</li>
        <li>검토 주기가 너무 길어 비용 낭비가 장기간 지속</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>지속적인 비용 최적화 기회 발굴 및 실현</li>
        <li>비용 낭비 패턴의 조기 감지 및 수정</li>
        <li>새로운 AWS 서비스 도입을 통한 비용 절감 기회 포착</li>
        <li>비용 효율성에 대한 조직 문화 구축</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>AWS Well-Architected Tool을 사용하여 정기적인 비용 최적화 검토 수행</li>
        <li>분기별 비용 검토 미팅을 일정에 포함하고 관련 이해관계자 참여</li>
        <li>각 워크로드에 비용 최적화 담당자(Cloud Financial Management Champion)를 지정</li>
        <li>Trusted Advisor 권장 사항을 정기적으로 검토하고 우선순위에 따라 실행</li>
        <li>AWS Cost Anomaly Detection으로 예상치 못한 비용 증가를 자동 감지</li>
        <li>검토 결과와 실행 항목을 추적하는 백로그 유지</li>
        <li>비용 최적화 성과를 비즈니스 KPI에 포함하여 동기 부여</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Well-Architected Tool</li>
        <li>AWS Trusted Advisor</li>
        <li>AWS Cost Anomaly Detection</li>
        <li>AWS Cost Explorer</li>
        <li>AWS Compute Optimizer</li>
      </ul>

      <PageNav />
    </article>
  );
}
