import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec5Bp04Page() {
  return (
    <article className="doc-content">
      <h1>SEC05-BP04 — 네트워크 보호 자동화</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 네트워크 보호 구성의 일관성이 부족하고 변경 추적이 어려워집니다.</p>
      </div>
      <p>
        템플릿으로 네트워크 보호를 정의하고 버전 관리 시스템에 커밋합니다. 새로운 변경이 이루어질 때 자동화된 파이프라인이 시작되어 테스트 및 배포를 오케스트레이션합니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>네트워크 보호를 템플릿으로 정의하고 버전 관리 시스템에 커밋</li>
        <li>새로운 변경 시 자동화된 파이프라인이 테스트 및 배포를 오케스트레이션</li>
        <li>배포 전 변경 사항을 검증하는 정책 검사 및 정적 테스트 적용</li>
        <li>스테이징 환경에 배포하여 제어가 예상대로 작동하는지 검증</li>
        <li>제어가 승인되면 프로덕션 환경에 자동 배포</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>개별 워크로드 팀이 중앙에 표준 측면을 게시하지 않고 각자 완전한 네트워크 스택과 보호를 정의</li>
        <li>중앙 네트워크 팀이 워크로드별 측면을 워크로드 팀에 위임하지 않고 네트워크의 모든 측면을 정의</li>
        <li>중앙화와 위임의 균형을 맞추지만 IaC 템플릿 및 CI/CD 파이프라인에 일관된 테스트 및 배포 표준 미적용</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>버전 관리를 사용하여 시간에 따른 변경 사항 추적 및 비교</li>
        <li>자동화된 테스트 및 배포로 표준화 및 예측 가능성 확보</li>
        <li>성공적인 배포 가능성 향상</li>
        <li>반복적인 수동 구성 감소</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>네트워크 및 보호의 어떤 측면이 중앙에서 정의되고 워크로드 팀이 유지 관리하는지 소유권을 확립합니다.</li>
        <li>변경 사항을 테스트하고 배포할 환경(예: 네트워크 테스트 계정 및 네트워크 프로덕션 계정)을 생성합니다.</li>
        <li>버전 관리에서 템플릿을 저장하고 유지 관리하는 방법(중앙 vs 워크로드별 저장소)을 결정합니다.</li>
        <li>잘못된 구성 및 회사 표준 준수 여부를 테스트하는 CI/CD 파이프라인을 생성합니다.</li>
        <li>AWS CloudFormation Guard를 사용하여 자동화된 정책 검사 및 템플릿 검증을 수행합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CloudFormation — 인프라 코드 도구</li>
        <li>AWS CloudFormation Guard — 자동화된 정책 검사 및 템플릿 검증</li>
        <li>AWS WAF 관리형 규칙 — 웹 엔드포인트 자동화 보호</li>
        <li>AWS Shield Advanced — 자동 애플리케이션 계층 DDoS 완화</li>
        <li>AWS Network Firewall 관리형 규칙 그룹 — 위협 서명 및 평판 목록 업데이트</li>
        <li>AWS Resource Access Manager(RAM) — 계정 간 네트워크 리소스 공유</li>
      </ul>
      <PageNav />
    </article>
  );
}
