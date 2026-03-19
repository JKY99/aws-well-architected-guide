import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps5Page() {
  return (
    <article className="doc-content">
      <h1>OPS 5 — 결함을 어떻게 줄이고 교정을 용이하게 하며 프로덕션 흐름을 개선합니까?</h1>

      <p>
        안전하고 신뢰할 수 있는 배포를 통해 프로덕션으로의 변경 흐름을 개선합니다.
        자동화된 테스트와 배포 파이프라인을 통해 결함을 조기에 발견하고 수정합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong>OPS05-BP01:</strong> 병렬 작업 스트림 사용<br />
          <span>여러 팀이 동시에 독립적으로 작업할 수 있도록 워크로드를 작은 컴포넌트로 분리합니다.</span>
        </li>
        <li>
          <strong>OPS05-BP02:</strong> 지속적인 통합/배포(CI/CD) 실천<br />
          <span>자동화된 빌드, 테스트, 배포 파이프라인을 통해 변경사항을 신속하고 안전하게 배포합니다.</span>
        </li>
        <li>
          <strong>OPS05-BP03:</strong> 자동화된 테스트 구현<br />
          <span>단위 테스트, 통합 테스트, 엔드투엔드 테스트를 자동화하여 결함을 조기에 발견합니다.</span>
        </li>
        <li>
          <strong>OPS05-BP04:</strong> 빌드 결과물 배포<br />
          <span>환경마다 코드를 다시 빌드하지 않고, 검증된 아티팩트를 환경 간에 프로모션합니다.</span>
        </li>
        <li>
          <strong>OPS05-BP05:</strong> 불변 인프라 배포<br />
          <span>실행 중인 인스턴스를 수정하는 대신, 새로운 인프라를 프로비저닝하고 이전 인프라를 폐기합니다.</span>
        </li>
        <li>
          <strong>OPS05-BP06:</strong> 배포 위험 줄이기<br />
          <span>카나리 배포, 블루/그린 배포, 피처 플래그 등을 활용하여 변경의 영향 범위를 제한합니다.</span>
        </li>
        <li>
          <strong>OPS05-BP07:</strong> 구성 관리 시스템 사용<br />
          <span>Infrastructure as Code와 구성 관리 도구를 사용하여 환경을 일관성 있게 유지합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
