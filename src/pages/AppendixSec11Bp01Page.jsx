import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec11Bp01Page() {
  return (
    <article className="doc-content">
      <h1>SEC11-BP01 — 애플리케이션 보안 교육</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 개발팀이 보안 취약점을 인식하지 못하고 보안 문제를 더 늦게 발견하게 됩니다.</p>
      </div>
      <p>
        팀이 안전하고 고품질의 소프트웨어를 구축할 수 있도록 보안 개발 및 운영 방법에 대한 교육을 제공합니다. 이 방법은 개발 수명 주기 초기에 보안 문제를 예방, 탐지, 수정하는 데 도움이 됩니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>처음부터 보안을 염두에 두고 소프트웨어를 설계하고 구축하는 지식과 기술 갖추기</li>
        <li>SDLC 중 잠재적인 보안 위험 및 완화 전략에 대한 심층적인 이해 개발</li>
        <li>모든 빌더가 보안 소유권을 공유하는 적극적인 보안 문화 조성</li>
        <li>잠재적인 보안 문제를 조기에 식별하고 수정</li>
        <li>더 효율적으로 고품질의 안전한 소프트웨어 및 기능 제공</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>보안 검토 시점까지 시스템 보안 속성을 고려하지 않고 기다림</li>
        <li>모든 보안 결정을 중앙 보안팀에만 맡김</li>
        <li>SDLC 결정이 조직 보안 기대치 또는 정책과 어떻게 관련되는지 커뮤니케이션 실패</li>
        <li>개발 너무 늦은 시점에 보안 검토 프로세스 수행</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>개발 주기 초기에 조직 보안 요구 사항에 대한 더 나은 지식</li>
        <li>잠재적인 보안 문제의 더 빠른 식별 및 수정으로 기능 제공 속도 향상</li>
        <li>소프트웨어 및 시스템의 품질 향상</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>설문조사, 코드 검토 또는 팀 토론을 통해 현재 기술 수준과 지식 격차를 평가하여 교육 필요성을 식별합니다.</li>
        <li>위협 모델링, 안전한 코딩 방법, 보안 테스트, 안전한 배포 방법을 포함하는 포괄적인 교육 계획을 수립합니다. 정기적인 세션(강사 주도 또는 자기 주도)에 실습 예제를 포함합니다.</li>
        <li>AWS CloudFormation, AWS CDK Constructs, Service Catalog를 사용하여 보안 요구 사항을 시연하는 지침, 코드 예제, 템플릿 등 자기 서비스 리소스를 개발합니다.</li>
        <li>보안 팀과 협력하여 애플리케이션 보안 검토를 위한 책임과 절차를 문서화한 보안 검토 프로세스를 정의합니다.</li>
        <li>게임데이나 버그 배시 캠페인을 개최하여 취약점을 식별하고 실습 학습 기회를 제공합니다. 정기적으로 피드백을 수집하여 개선 영역을 식별하고 교육 자료를 개선합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CloudFormation — 사전 승인된 보안 구성을 위한 인프라 코드 서비스</li>
        <li>AWS Cloud Development Kit(CDK) Constructs — 안전한 인프라를 위한 재사용 가능한 빌딩 블록</li>
        <li>AWS Service Catalog — 사전 승인된 안전한 구성 프로비저닝</li>
        <li>AWS Training and Certification — 공식 AWS 보안 교육 프로그램</li>
        <li>위협 모델링 워크숍 — 실습 위협 모델링 교육</li>
      </ul>
      <PageNav />
    </article>
  );
}
