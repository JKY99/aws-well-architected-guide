import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec10Bp03Page() {
  return (
    <article className="doc-content">
      <h1>SEC10-BP03 — 포렌식 역량 준비</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>
        보안 사고 조사를 위한 디지털 포렌식 역량을 사전에 구축합니다. 증거 수집, 보존, 분석을 위한
        도구와 프로세스를 준비하고, 포렌식 조사를 수행할 수 있는 훈련된 인력이나 외부 전문가
        파트너십을 확보합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        보안 사고 발생 시 법적 효력이 있는 방식으로 디지털 증거를 신속하게 수집하고 보존합니다.
        포렌식 조사 환경(격리된 VPC, 포렌식 워크스테이션 등)이 사전에 준비되어 사고 발생 즉시
        활용 가능합니다. 증거 수집 과정이 감사 추적되어 법적 절차에서 사용할 수 있습니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>사고 발생 후 EC2 인스턴스를 즉시 종료하여 메모리 내 증거가 손실됨</li>
        <li>포렌식 조사 환경이 없어 프로덕션 환경에서 직접 조사하다 추가 피해 발생</li>
        <li>증거 수집 절차가 없어 조사 과정의 무결성이 보장되지 않아 법적 증거로 활용 불가</li>
        <li>로그 보존 기간이 짧아 사고 발생 전 활동 기록이 이미 삭제된 상태</li>
        <li>포렌식 역량을 내부에 구축하지 않고 외부 전문가와 사전 계약도 없어 사고 시 수주일이 소요됨</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>디지털 증거의 신속한 수집과 무결성 보존으로 사고 원인 파악 가속화</li>
        <li>법적 분쟁이나 규제 조사에서 사용 가능한 포렌식 증거 확보</li>
        <li>프로덕션 환경을 보호하면서 안전한 격리 환경에서 조사 수행</li>
        <li>사고 재발 방지를 위한 정확한 근본 원인 분석 가능</li>
        <li>사고 유형과 침해 범위를 신속하게 파악하여 적절한 대응 조치 결정</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>포렌식 전용 격리 VPC를 별도 계정에 구성하고, 침해된 EC2 인스턴스의 스냅샷을 이 환경에서 분석하는 절차를 수립합니다.</li>
        <li>EC2 인스턴스 격리 자동화 스크립트를 준비합니다. 격리 시 인스턴스를 포렌식 보안 그룹으로 이동하고, 메모리 덤프를 S3에 저장하는 순서를 정의합니다.</li>
        <li>CloudTrail, VPC Flow Logs, GuardDuty, CloudWatch Logs를 장기 보존 설정으로 S3에 저장하고, Glacier Deep Archive로 아카이빙하여 수년간 보존합니다.</li>
        <li>Amazon Detective를 활성화하여 GuardDuty 결과와 연계된 시각적 조사 환경을 구축하고, 관련 엔터티(IAM 역할, IP 주소, EC2 인스턴스)의 행동 분석을 자동화합니다.</li>
        <li>AWS Systems Manager로 조사 대상 인스턴스에 에이전트를 배포하고 프로세스 목록, 네트워크 연결, 파일 시스템 스냅샷을 수집하는 SSM 문서를 사전에 작성합니다.</li>
        <li>포렌식 조사에 필요한 도구(Volatility, YARA, 로그 분석 도구 등)를 포함한 포렌식 AMI를 사전에 빌드하여 즉시 사용할 수 있도록 준비합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon Detective — GuardDuty 결과 기반 시각적 보안 사고 조사</li>
        <li>AWS Systems Manager — 원격 포렌식 데이터 수집 및 격리 자동화</li>
        <li>Amazon S3 Glacier — 포렌식 증거 및 로그 장기 보존</li>
        <li>Amazon GuardDuty — 위협 탐지 및 포렌식 조사 트리거</li>
        <li>AWS CloudTrail — API 활동 기록 및 포렌식 증거 수집</li>
      </ul>
      <PageNav />
    </article>
  );
}
