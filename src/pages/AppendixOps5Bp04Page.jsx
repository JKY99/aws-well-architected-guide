import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps5Bp04Page() {
  return (
    <article className="doc-content">
      <h1>OPS05-BP04 — 빌드 및 배포 관리 시스템 사용</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>

      <p>
        자동화된 빌드 및 배포 파이프라인을 구축하여 일관되고 반복 가능한 배포를 보장합니다.
        수동 배포는 인적 오류, 불일관성, 느린 배포 속도를 유발합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        모든 배포가 자동화된 파이프라인을 통해 이루어지며, 사람이 서버에 직접 접근하는 경우가 없습니다.
        빌드와 배포 과정이 표준화되어 팀 누구나 동일한 결과를 만들어낼 수 있습니다.
        배포 속도가 빨라지고 배포로 인한 장애가 감소합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>특정 개인만 배포 방법을 알아 배포 병목이 발생하는 경우</li>
        <li>수동 배포 단계가 많아 인적 오류가 빈번히 발생하는 경우</li>
        <li>환경마다 배포 방법이 달라 일관성이 없는 경우</li>
        <li>배포 후 테스트 없이 사용자 보고로 문제를 파악하는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>배포 인적 오류 제거로 신뢰성 향상</li>
        <li>배포 속도 향상으로 기능 출시 시간 단축</li>
        <li>표준화된 배포 프로세스로 운영 부담 감소</li>
        <li>자동 롤백으로 장애 시 복구 시간 단축</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>AWS CodePipeline으로 소스→빌드→테스트→배포 파이프라인을 구축합니다.</li>
        <li>AWS CodeBuild로 일관된 빌드 환경을 사용합니다.</li>
        <li>AWS CodeDeploy로 다양한 배포 전략(롤링, 블루/그린, 카나리)을 구현합니다.</li>
        <li>파이프라인에 보안 스캔(SAST, 의존성 취약점 검사)을 통합합니다.</li>
        <li>배포 승인 게이트를 설정하여 중요 환경 배포 시 수동 승인을 요구합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CodePipeline — CI/CD 파이프라인 오케스트레이션</li>
        <li>AWS CodeBuild — 관리형 빌드 서비스</li>
        <li>AWS CodeDeploy — 자동화된 애플리케이션 배포</li>
        <li>AWS Elastic Container Registry — 컨테이너 이미지 버전 관리</li>
      </ul>

      <PageNav />
    </article>
  );
}
