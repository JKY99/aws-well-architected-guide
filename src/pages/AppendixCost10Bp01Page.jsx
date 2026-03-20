import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost10Bp01Page() {
  return (
    <article className="doc-content">
      <h1>COST10-BP01 — 워크로드 검토 프로세스 개발</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>워크로드 검토 기준과 프로세스를 정의합니다. 검토 노력은 잠재적 이점을 반영해야 합니다. 예를 들어, 청구서의 10% 이상을 차지하는 핵심 워크로드는 분기별 또는 6개월마다 검토하고, 10% 미만은 연간 검토합니다.</p>
      <h2>원하는 결과</h2>
      <p>체계적인 워크로드 검토 프로세스가 구축되어 지속적인 비용 최적화가 이루어집니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>정기적인 워크로드 검토 없이 초기 아키텍처를 유지합니다.</li>
        <li>모든 워크로드를 동일한 빈도로 검토합니다.</li>
        <li>새로운 AWS 서비스가 출시되어도 기존 서비스를 계속 사용합니다.</li>
        <li>검토 결과를 실행 가능한 작업으로 전환하지 않습니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>워크로드가 최신 서비스와 기능을 활용하여 지속적으로 최적화됩니다.</li>
        <li>비용 절감 기회가 체계적으로 식별됩니다.</li>
        <li>기술 부채가 제어됩니다.</li>
        <li>비즈니스 요구사항 변화에 맞게 아키텍처가 발전합니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>검토 빈도 정의: 워크로드 중요도와 비용 규모에 따라 검토 빈도를 설정합니다.</li>
        <li>검토 철저도 정의: 워크로드 구성 요소별 검토 깊이와 소요 시간을 정합니다.</li>
        <li>검토 프로세스 문서화: 새 서비스 평가, 설계 패턴 검토 등을 포함한 표준 검토 프로세스를 만듭니다.</li>
        <li>백로그 관리: 식별된 개선 기회를 백로그에 추가하고 우선순위를 정합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Well-Architected Tool</li>
        <li>AWS Trusted Advisor</li>
        <li>AWS Cost Explorer</li>
        <li>AWS What's New</li>
      </ul>
      <PageNav />
    </article>
  );
}
