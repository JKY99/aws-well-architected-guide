import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus2Bp02Page() {
  return (
    <article className="doc-content">
      <h1>SUS02-BP02 — SLA를 사용 패턴에 맞게 정렬</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>

      <p>
        서비스 수준 계약(SLA)을 실제 사용 패턴과 비즈니스 요구에 맞게 설정하여 불필요한 고가용성 리소스
        프로비저닝을 방지합니다. 모든 워크로드에 동일한 최고 수준의 SLA를 적용하면 실제로 필요하지 않은
        리소스에 에너지가 낭비됩니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        각 워크로드의 실제 비즈니스 중요도와 사용 패턴에 따라 차별화된 SLA가 정의되어 있으며,
        불필요한 고가용성 구성으로 인한 과잉 프로비저닝 없이 필요한 만큼만 리소스를 유지합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>비중요 워크로드에도 중요 워크로드와 동일한 99.99% 가용성 SLA를 적용하는 경우</li>
        <li>실제 사용자 요구를 파악하지 않고 기술팀 임의로 SLA를 높게 설정하는 경우</li>
        <li>개발·테스트 환경에 프로덕션과 동일한 SLA 수준의 인프라를 운영하는 경우</li>
        <li>SLA 요건을 정기적으로 재검토하지 않아 과도한 프로비저닝이 장기간 유지되는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>워크로드 중요도에 맞는 적절한 리소스 투입으로 에너지 낭비 방지</li>
        <li>비용 최적화와 지속 가능성 목표 동시 달성</li>
        <li>중요 워크로드에 리소스를 집중하여 실질적인 비즈니스 가치 제고</li>
        <li>SLA 계층화로 전체 인프라 탄소 발자국 감소</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>워크로드를 비즈니스 중요도에 따라 계층화하고 각 계층별 SLA 요건을 명문화합니다.</li>
        <li>개발, 테스트, 스테이징, 프로덕션 환경별로 차별화된 가용성 목표를 설정합니다.</li>
        <li>실제 사용 시간대를 분석하여 비업무 시간대에는 가용성 요건을 완화할 수 있는지 검토합니다.</li>
        <li>SLA 요건을 연 1회 이상 재검토하여 변경된 비즈니스 요구를 반영합니다.</li>
        <li>AWS Service Level Agreements 문서를 참조하여 AWS 서비스별 기본 SLA를 활용합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Well-Architected Tool — 워크로드 중요도 평가 및 SLA 검토</li>
        <li>Amazon CloudWatch — SLA 준수 여부 모니터링 및 경보 설정</li>
        <li>AWS Trusted Advisor — 과잉 프로비저닝 리소스 식별</li>
        <li>AWS Cost Explorer — SLA 수준별 비용 분석</li>
      </ul>

      <PageNav />
    </article>
  );
}
