import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel7Bp01Page() {
  return (
    <article className="doc-content">
      <h1>REL07-BP01 — 배포 위험을 줄이기 위해 변경 통합</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>카나리 배포, 블루/그린 배포를 사용하여 일부 트래픽만 새 버전에 노출시키고 문제 시 신속하게 롤백합니다.</p>
      <h2>원하는 결과</h2>
      <p>프로덕션 배포 시 위험을 최소화하고 문제 발생 시 신속한 롤백이 가능한 배포 전략을 수립합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>모든 트래픽을 한번에 새 버전으로 전환</li>
        <li>롤백 계획 없음</li>
        <li>배포 후 모니터링 없음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>배포 위험 감소</li>
        <li>신속한 롤백</li>
        <li>점진적 검증</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS CodeDeploy로 카나리/블루-그린 배포 구성</li>
        <li>Route 53 가중치 라우팅으로 트래픽 분산</li>
        <li>배포 후 메트릭 모니터링</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CodeDeploy</li>
        <li>Amazon ECS</li>
        <li>AWS Lambda (weighted alias)</li>
        <li>Amazon Route 53</li>
      </ul>
      <PageNav />
    </article>
  );
}
