import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec10Bp03Page() {
  return (
    <article className="doc-content">
      <h1>SEC10-BP03 — 포렌식 역량 준비</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 사고 조사 능력이 제한되어 근본 원인 파악이 어려워질 수 있습니다.</p>
      </div>
      <p>
        보안 사고 조사를 지원하기 위해 사고 전에 포렌식 역량을 개발합니다. 이 모범 사례는 기존의 온프레미스 포렌식 개념을 AWS 클라우드 환경에 적용합니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>수집(Collection), 검토(Examination), 분석(Analysis), 보고(Reporting)의 4단계 포렌식 방법론 구현</li>
        <li>보안 사고 발생 전 포렌식 환경 사전 구성</li>
        <li>자동화된 증거 수집으로 신속하고 정확한 포렌식 조사</li>
        <li>정기적으로 테스트된 백업 및 복원 프로세스</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>사고 발생 후 EC2 인스턴스를 즉시 종료하여 메모리 내 증거 손실</li>
        <li>포렌식 조사 환경이 없어 프로덕션 환경에서 직접 조사하다 추가 피해 발생</li>
        <li>증거 수집 절차가 없어 법적 증거로 활용 불가</li>
        <li>로그 보존 기간이 짧아 사고 발생 전 활동 기록이 삭제된 상태</li>
        <li>포렌식 역량을 내부에 구축하지 않고 외부 전문가와 사전 계약도 없음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>디지털 증거의 신속한 수집과 무결성 보존으로 사고 원인 파악 가속화</li>
        <li>법적 분쟁이나 규제 조사에서 사용 가능한 포렌식 증거 확보</li>
        <li>프로덕션 환경을 보호하면서 안전한 격리 환경에서 조사 수행</li>
        <li>자동화를 통해 수동 수집 시간 단축 및 인적 오류 최소화</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Organizations를 사용하여 AWS 계정을 중앙에서 관리합니다. 보안 OU(로그 아카이빙 계정, 보안 도구 계정 포함)와 포렌식 OU(단일 포렌식 계정 또는 리전별 포렌식 계정)를 구성합니다. 리전별 접근 방식은 리소스가 의도하지 않은 리전으로 복사되는 위험을 줄입니다.</li>
        <li>CloudTrail, AWS Config, VPC Flow Logs, 호스트 수준 로그 등 관련 AWS 로그를 수집합니다. 영향받은 리소스의 스냅샷, 백업, 메모리 덤프를 수집하는 절차를 수립합니다.</li>
        <li>주요 시스템 및 데이터베이스의 정기적인 백업을 설정합니다. AWS 스냅샷 서비스를 사용하여 시점 백업을 수행하고, AWS 모범 사례에 따라 백업을 보호합니다. 백업 및 복원 프로세스를 정기적으로 테스트합니다.</li>
        <li>증거 수집을 신속하고 정확하게 수행하면서 정확성을 유지하는 자동화를 개발합니다. 자동화는 수동 수집 시간을 줄이고 여러 인스턴스 및 계정에서 효율적인 수집을 가능하게 합니다.</li>
        <li>포렌식 전용 격리 VPC를 별도 계정에 구성하고, 침해된 EC2 인스턴스의 스냅샷을 이 환경에서 분석하는 절차를 수립합니다. Amazon Detective를 활성화하여 GuardDuty 결과와 연계된 시각적 조사 환경을 구축합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Organizations — 포렌식 OU 및 계정 구조 관리</li>
        <li>AWS CloudTrail — API 활동 기록 및 포렌식 증거 수집</li>
        <li>AWS Config — 리소스 구성 변경 이력 추적</li>
        <li>VPC Flow Logs — 네트워크 트래픽 메타데이터 수집</li>
        <li>AWS Backup — 주요 시스템 및 데이터베이스 자동화된 백업</li>
        <li>Amazon EC2 스냅샷 — 포렌식 분석을 위한 시점 백업</li>
        <li>Amazon Detective — GuardDuty 결과 기반 시각적 보안 사고 조사</li>
      </ul>
      <PageNav />
    </article>
  );
}
