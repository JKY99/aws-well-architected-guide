import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps10Bp03Page() {
  return (
    <article className="doc-content">
      <h1>OPS10-BP03 — 비즈니스 영향에 따른 운영 이벤트 우선순위 결정</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>

      <p>
        잠재적인 비즈니스 운영 및 목표에 대한 영향에 따라 운영 이벤트에 대한 대응을 우선순위화하여
        효율적이고 효과적인 대응을 보장합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        비즈니스 운영 및 목표에 대한 잠재적 영향에 따라 운영 이벤트에 대한 대응이 우선순위화됩니다.
        영향(높음/중간/낮음)과 긴급도(높음/중간/낮음)를 조합하여 우선순위 행렬을 통해
        효율적이고 효과적인 대응이 보장됩니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>모든 이벤트를 동일한 긴급도로 처리하여 혼란과 중요한 문제 해결 지연이 발생하는 경우</li>
        <li>높은 영향과 낮은 영향 이벤트를 구분하지 못하여 리소스를 잘못 배분하는 경우</li>
        <li>명확한 우선순위 체계 없이 일관성 없는 대응이 이루어지는 경우</li>
        <li>보고된 순서대로 이벤트를 처리하고 비즈니스 영향을 고려하지 않는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>중요한 비즈니스 기능이 먼저 주의를 받아 잠재적 피해 최소화</li>
        <li>여러 동시 이벤트 발생 시 리소스 배분 개선</li>
        <li>신뢰 유지 및 규제 요구사항 충족 능력 향상</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>영향(많은 직원/고객, 재정적 영향, 평판 손상, 부상 여부)에 따라 높음/중간/낮음으로 이벤트를 평가합니다.</li>
        <li>긴급도(손상 증가 속도, 시간 민감성, VIP 영향 여부)에 따라 높음/중간/낮음으로 평가합니다.</li>
        <li>영향과 긴급도를 조합하는 우선순위 행렬을 만듭니다.</li>
        <li>대응팀을 교육하고 행렬을 커뮤니케이션합니다.</li>
        <li>인시던트 대응 계획 및 도구와 통합합니다.</li>
        <li>가능한 경우 분류를 자동화합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Incident Detection and Response — 프로덕션 워크로드를 위한 24x7 사전 모니터링 및 인시던트 관리</li>
        <li>AWS Systems Manager Incident Manager — 인시던트 우선순위화 및 에스컬레이션</li>
        <li>Amazon CloudWatch — 알림 및 이벤트 모니터링</li>
      </ul>

      <PageNav />
    </article>
  );
}
