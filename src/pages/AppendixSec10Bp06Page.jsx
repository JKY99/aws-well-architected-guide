import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec10Bp06Page() {
  return (
    <article className="doc-content">
      <h1>SEC10-BP06 — 도구 사전 배포</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>
        보안 사고 대응에 필요한 도구, 에이전트, 스크립트를 사전에 배포하여 사고 발생 즉시
        활용 가능한 상태를 유지합니다. 사고 발생 후 도구를 배포하려면 시간이 소요되고,
        침해된 환경에서 도구 배포가 위험할 수 있습니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        모든 EC2 인스턴스에 SSM 에이전트, CloudWatch 에이전트 등 핵심 모니터링 및 대응 도구가
        배포되어 있습니다. 포렌식 분석에 필요한 AMI와 CloudFormation 템플릿이 준비되어
        포렌식 환경을 수 분 내에 프로비저닝할 수 있습니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>SSM 에이전트가 설치되지 않은 EC2 인스턴스가 있어 원격 사고 대응이 불가능함</li>
        <li>포렌식 분석 도구를 인터넷에서 다운로드해야 하는데 침해된 환경에서 인터넷 접근이 차단됨</li>
        <li>사고 대응에 필요한 CloudFormation 템플릿이나 스크립트를 사고 발생 후에 작성함</li>
        <li>로그 수집 에이전트가 미리 배포되지 않아 사고 발생 전 활동 기록이 없음</li>
        <li>도구들이 올바르게 작동하는지 사전에 검증하지 않아 실제 사고 시 오류 발생</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>사고 발생 즉시 도구를 활용하여 대응 속도 향상</li>
        <li>침해된 환경에서 도구 배포 시 발생할 수 있는 추가 위험 방지</li>
        <li>인터넷 접근 없이도 도구를 사용할 수 있어 네트워크 격리 상황에서도 대응 가능</li>
        <li>사전 배포된 에이전트로 사고 발생 전후의 완전한 활동 로그 확보</li>
        <li>일관된 도구 버전 관리로 예측 가능한 대응 환경 유지</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>모든 EC2 AMI에 AWS Systems Manager(SSM) 에이전트를 포함하고, 새 인스턴스 시작 시 자동으로 SSM에 등록되도록 IAM 인스턴스 프로파일을 구성합니다.</li>
        <li>Amazon CloudWatch 에이전트를 사전 배포하여 시스템 로그, 애플리케이션 로그, 성능 지표를 실시간으로 CloudWatch Logs에 전송합니다.</li>
        <li>포렌식 분석 도구(메모리 덤프 도구, 로그 파서, YARA 규칙 등)를 포함한 포렌식 AMI를 AWS Marketplace 또는 자체 빌드로 준비하고 AWS Systems Manager Parameter Store에 AMI ID를 저장합니다.</li>
        <li>포렌식 환경(격리 VPC, 분석 EC2 인스턴스, S3 증거 버킷)을 프로비저닝하는 CloudFormation 템플릿을 작성하고 정기적으로 테스트합니다.</li>
        <li>EC2 인스턴스 격리(보안 그룹 변경), 스냅샷 생성, 메모리 덤프 수집을 수행하는 SSM 자동화 문서를 사전에 작성하고 검증합니다.</li>
        <li>AWS S3에 VPC 엔드포인트를 구성하여 인터넷 접근 없이도 S3에서 도구와 스크립트를 다운로드할 수 있도록 합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Systems Manager — SSM 에이전트 배포 및 원격 명령 실행</li>
        <li>Amazon CloudWatch 에이전트 — 로그 및 지표 수집 사전 배포</li>
        <li>AWS CloudFormation — 포렌식 환경 신속 프로비저닝 자동화</li>
        <li>Amazon S3 VPC 엔드포인트 — 인터넷 없는 도구 다운로드 경로</li>
        <li>AWS Systems Manager Automation — 격리 및 포렌식 수집 절차 자동화</li>
      </ul>
      <PageNav />
    </article>
  );
}
