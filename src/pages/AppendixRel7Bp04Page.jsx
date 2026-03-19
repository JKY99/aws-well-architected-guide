import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel7Bp04Page() {
  return (
    <article className="doc-content">
      <h1>REL07-BP04 — 자동 롤백 메커니즘 구현</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>배포 후 메트릭이 임계값을 초과하면 자동으로 이전 버전으로 롤백하여 장애 시간을 최소화합니다.</p>
      <h2>원하는 결과</h2>
      <p>배포 문제 발생 시 자동으로 안전한 이전 상태로 복원되는 시스템을 구축합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>수동 롤백에만 의존</li>
        <li>롤백 기준 메트릭 미설정</li>
        <li>이전 버전 보존 없음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>배포 위험 감소</li>
        <li>평균 복구 시간 단축</li>
        <li>자동화된 안전망</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>CodeDeploy 자동 롤백 설정</li>
        <li>CloudWatch 경보 기반 롤백 트리거</li>
        <li>Lambda 버전/별칭으로 롤백 구현</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CodeDeploy</li>
        <li>Amazon CloudWatch</li>
        <li>AWS Lambda (Versions/Aliases)</li>
        <li>Amazon ECS</li>
      </ul>
      <PageNav />
    </article>
  );
}
