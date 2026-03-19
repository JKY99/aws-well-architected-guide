import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps1Bp06Page() {
  return (
    <article className="doc-content">
      <h1>OPS01-BP06 — 이점과 위험 관리</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        운영 결정의 이점과 위험을 명시적으로 평가하고 균형을 맞춥니다.
        모든 운영 활동에는 이점과 위험이 공존하며, 이를 체계적으로 관리해야
        조직이 지속 가능하게 운영될 수 있습니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        운영 결정 시 잠재적 이점과 위험을 명확하게 파악하고, 위험 허용 범위 내에서
        최대한의 이점을 얻는 결정을 내립니다. 위험 레지스터를 유지하고 정기적으로 검토합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>이점만 강조하고 위험을 과소평가하는 낙관적 편향</li>
        <li>위험 회피가 과도하여 혁신이나 개선 기회를 놓치는 경우</li>
        <li>위험 평가 없이 새로운 기술이나 접근법을 채택하는 경우</li>
        <li>위험이 현실화된 후에야 대응 계획을 수립하는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>균형 잡힌 의사결정으로 비즈니스 성과 향상</li>
        <li>예측 가능한 운영 환경 구축</li>
        <li>위험 조기 식별 및 완화로 사고 발생 빈도 감소</li>
        <li>이해관계자에게 투명한 위험 정보 제공</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>위험 레지스터를 작성하고 각 위험의 발생 가능성, 영향도, 완화 방안을 기록합니다.</li>
        <li>변경 관리 프로세스에 이점/위험 평가 단계를 포함합니다.</li>
        <li>조직의 위험 허용 범위를 명확히 정의하고 공유합니다.</li>
        <li>주요 결정 사항의 예상 이점을 측정 가능한 지표로 정의하고 사후 검증합니다.</li>
        <li>정기적인 위험 검토 회의를 통해 위험 레지스터를 최신 상태로 유지합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Well-Architected Tool — 위험 식별 및 개선 계획 관리</li>
        <li>AWS Trusted Advisor — 운영 위험 자동 식별</li>
        <li>Amazon CloudWatch — 운영 지표 모니터링으로 이점 측정</li>
      </ul>

      <PageNav />
    </article>
  );
}
