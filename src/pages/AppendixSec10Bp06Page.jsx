import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec10Bp06Page() {
  return (
    <article className="doc-content">
      <h1>SEC10-BP06 — 도구 사전 배포</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 사고 탐지, 조사, 복구 속도가 느려질 수 있습니다.</p>
      </div>
      <p>
        보안 인력이 조사부터 복구까지의 시간을 줄이기 위해 올바른 도구를 사전에 배포했는지 확인합니다. 포괄적인 API와 도구를 사용하여 보안 대응 및 운영 기능을 자동화하여 더 빠른 사고 탐지, 조사, 복구를 가능하게 합니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>보안 이벤트를 자동으로 탐지하고 대응하는 사전 배포된 도구</li>
        <li>알림 피로를 줄이는 자동화된 반복 경보 처리</li>
        <li>사고의 전체 범위 및 타임라인을 캡처하는 로그 및 조사 기능</li>
        <li>일관된 도구 버전 관리로 예측 가능한 대응 환경 유지</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>SSM 에이전트가 설치되지 않은 EC2 인스턴스가 있어 원격 사고 대응 불가</li>
        <li>포렌식 분석 도구를 인터넷에서 다운로드해야 하는데 침해된 환경에서 인터넷 접근이 차단됨</li>
        <li>사고 대응에 필요한 CloudFormation 템플릿이나 스크립트를 사고 발생 후 작성함</li>
        <li>도구들이 올바르게 작동하는지 사전에 검증하지 않아 실제 사고 시 오류 발생</li>
        <li>경보 볼륨을 관리하는 자동화 없이 사람이 모든 경보를 처리하려고 시도</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>사고 발생 즉시 도구를 활용하여 대응 속도 향상</li>
        <li>자동화로 반복적이고 일상적인 경보 처리, 민감하고 고유한 사고에 인적 자원 집중</li>
        <li>사전 배포된 에이전트로 사고 발생 전후의 완전한 활동 로그 확보</li>
        <li>인터넷 접근 없이도 도구를 사용할 수 있어 네트워크 격리 상황에서도 대응 가능</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>관련 로그를 선택, 활성화, 저장하고 쿼리, 검색 메커니즘, 경보를 설정합니다. Amazon Detective를 사용하여 로그 데이터의 효율적인 검색 및 분석 환경을 구축합니다.</li>
        <li>Amazon GuardDuty, AWS CloudTrail Insights, Amazon CloudWatch Anomaly Detection을 포함한 이상 탐지 시스템을 통합하여 알림 피로를 해소합니다. 일상적인 경보는 자동화로 처리하고 민감하고 고유한 사고에 인적 자원을 집중합니다.</li>
        <li>탐지, 예방 및 대응 역량을 배포합니다. AWS Security Hub를 통해 보안 결과를 통합하고 우선순위를 지정합니다. Amazon Inspector를 사용하여 취약점을 지속적으로 스캔합니다.</li>
        <li>리소스에 목적, 소유자, 환경, 데이터 유형 등의 기준으로 일관된 태깅 전략을 구현합니다. 태그를 사용하여 자동화 대응을 트리거합니다.</li>
        <li>모든 EC2 AMI에 AWS Systems Manager(SSM) 에이전트를 포함하고, Amazon CloudWatch 에이전트를 사전 배포하여 로그 및 지표를 실시간으로 전송합니다. S3에 VPC 엔드포인트를 구성하여 인터넷 없이도 도구와 스크립트를 다운로드할 수 있도록 합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon GuardDuty — 위협 탐지 및 이상 감지</li>
        <li>Amazon Detective — 로그 데이터 효율적 검색 및 시각적 분석</li>
        <li>AWS CloudTrail Insights — API 사용 이상 탐지</li>
        <li>Amazon CloudWatch Anomaly Detection — 지표 이상 자동 탐지</li>
        <li>AWS Security Hub — 보안 결과 통합 및 우선순위 지정</li>
        <li>Amazon Inspector — 취약점 지속적 스캔</li>
        <li>AWS Systems Manager — SSM 에이전트 배포 및 원격 명령 실행</li>
      </ul>
      <PageNav />
    </article>
  );
}
