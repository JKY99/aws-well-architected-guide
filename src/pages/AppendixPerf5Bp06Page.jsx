import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf5Bp06Page() {
  return (
    <article className="doc-content">
      <h1>PERF05-BP06 — 워크로드 및 서비스 최신 상태 유지</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>
      <p>사용 중인 서비스, 라이브러리, 런타임 환경을 최신 버전으로 유지하여 성능 향상, 보안 패치, 새로운 기능의 이점을 활용합니다.</p>
      <h2>원하는 결과</h2>
      <p>워크로드와 서비스를 최신 상태로 유지하여 AWS와 소프트웨어 공급업체의 성능 개선 사항을 지속적으로 활용합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>업데이트 부담으로 오래된 버전 장기 사용</li>
        <li>새로운 버전의 성능 개선 사항을 평가하지 않음</li>
        <li>업데이트 테스트 없이 프로덕션에 적용</li>
        <li>deprecated 기능에 대한 대안 마련 지연</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>최신 성능 최적화 및 버그 수정 적용</li>
        <li>보안 취약점 해소</li>
        <li>새로운 AWS 기능 활용 기회</li>
        <li>기술 부채 감소</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS 서비스 업데이트 및 릴리스 노트 정기적으로 검토</li>
        <li>AWS Systems Manager Patch Manager로 EC2 인스턴스 패치 자동화</li>
        <li>컨테이너 기반 배포로 런타임 업데이트 간소화</li>
        <li>CI/CD 파이프라인에 의존성 업데이트 프로세스 통합</li>
        <li>새 버전 업데이트 전 스테이징 환경에서 성능 검증</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Systems Manager Patch Manager — 자동화된 패치 관리</li>
        <li>AWS CodePipeline — CI/CD 파이프라인 자동화</li>
        <li>Amazon ECR — 컨테이너 이미지 관리</li>
        <li>AWS Config — 리소스 구성 변경 추적</li>
      </ul>
      <PageNav />
    </article>
  );
}
