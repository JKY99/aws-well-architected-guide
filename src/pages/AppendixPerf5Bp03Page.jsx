import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf5Bp03Page() {
  return (
    <article className="doc-content">
      <h1>PERF05-BP03 — 워크로드 성능 개선 프로세스 정의</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>워크로드 성능을 지속적으로 개선하기 위한 체계적인 프로세스를 정의합니다. 성능 측정, 분석, 개선, 검증의 사이클을 반복합니다.</p>
      <h2>원하는 결과</h2>
      <p>체계적인 프로세스를 통해 성능 개선 활동을 지속적으로 수행하고, 성능 목표를 점진적으로 향상시킵니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>성능 개선을 위한 공식 프로세스 없이 임시방편으로 대응</li>
        <li>성능 개선 결과를 측정하고 검증하지 않음</li>
        <li>성능 개선 활동이 특정 개인에게만 의존</li>
        <li>성능 개선 지식을 팀 내에서 공유하지 않음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>지속적이고 체계적인 성능 개선 실현</li>
        <li>성능 개선 활동의 가시성 및 추적 가능성 향상</li>
        <li>팀 전체의 성능 인식 및 역량 향상</li>
        <li>성능 개선 지식의 조직 내 축적</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>성능 개선 백로그를 유지하고 정기적으로 우선순위 검토</li>
        <li>AWS Well-Architected Review를 통한 정기적인 성능 검토 수행</li>
        <li>성능 개선 변경 사항을 CI/CD 파이프라인에 통합하여 자동화</li>
        <li>성능 개선 실험 결과를 문서화하고 팀과 공유</li>
        <li>성능 목표를 스프린트 계획에 포함</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Well-Architected Tool — 성능 효율성 검토 및 개선 권고</li>
        <li>AWS CodePipeline — 성능 개선 자동화 파이프라인</li>
        <li>Amazon CloudWatch — 성능 개선 효과 측정</li>
        <li>AWS Trusted Advisor — 성능 최적화 권고</li>
      </ul>
      <PageNav />
    </article>
  );
}
