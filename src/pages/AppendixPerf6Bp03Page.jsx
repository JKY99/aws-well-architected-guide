import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf6Bp03Page() {
  return (
    <article className="doc-content">
      <h1>PERF06-BP03 — 개발 주기에 성능 검토 통합</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>CI/CD 파이프라인에 성능 테스트를 통합하여 코드 변경이 성능에 미치는 영향을 배포 전에 자동으로 검증합니다.</p>
      <h2>원하는 결과</h2>
      <p>모든 배포에서 성능 회귀(regression)를 자동으로 감지하고 방지합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>성능 테스트 없이 배포</li>
        <li>프로덕션에서만 성능 문제 발견</li>
        <li>수동 성능 테스트에 의존</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>성능 회귀 조기 발견</li>
        <li>프로덕션 성능 문제 예방</li>
        <li>지속적인 성능 보장</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>파이프라인에 부하 테스트 단계 추가</li>
        <li>성능 게이트 설정</li>
        <li>성능 지표 자동 비교</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CodePipeline</li>
        <li>AWS CodeBuild</li>
        <li>Amazon CloudWatch</li>
        <li>AWS Lambda</li>
      </ul>
      <PageNav />
    </article>
  );
}
