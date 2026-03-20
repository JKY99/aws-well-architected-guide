import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec11Bp03Page() {
  return (
    <article className="doc-content">
      <h1>SEC11-BP03 — 정기적인 침투 테스트 수행</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>
        숙련된 보안 전문가가 실제 공격자의 관점에서 시스템을 테스트하는 침투 테스트를 정기적으로
        수행합니다. 침투 테스트는 자동화된 도구로는 발견하기 어려운 복잡한 비즈니스 로직 취약점,
        권한 상승 경로, 연쇄 공격 시나리오를 식별합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        연간 1회 이상 외부 전문가에 의한 침투 테스트가 수행되고 발견된 취약점이 위험도에 따라
        수정됩니다. 새로운 중요 기능 출시 전에도 목표 지정 침투 테스트가 이루어집니다.
        침투 테스트 결과가 보안 개선 로드맵에 반영됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>AWS 침투 테스트 정책을 확인하지 않고 무단 테스트를 수행하여 계정 정지 위험 발생</li>
        <li>침투 테스트 범위를 너무 좁게 설정하여 실제 공격 경로가 포함되지 않음</li>
        <li>침투 테스트 결과를 보고서로만 받고 발견된 취약점을 실제로 수정하지 않음</li>
        <li>동일한 테스트 방법론을 매년 반복하여 새로운 취약점 유형을 발견하지 못함</li>
        <li>프로덕션 환경 테스트 시 데이터 손상이나 서비스 중단 방지 조치 없이 진행함</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>자동화 도구로 발견할 수 없는 복잡한 취약점과 공격 경로 식별</li>
        <li>실제 침해 발생 전에 보안 약점을 파악하고 수정</li>
        <li>규정 준수 요건(PCI DSS, ISO 27001 등) 충족을 위한 침투 테스트 증거 확보</li>
        <li>보안 투자 효과를 측정하는 객관적인 지표 확보</li>
        <li>내부 보안팀의 대응 역량 검증</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS 침투 테스트 정책(AWS Penetration Testing Policy)을 검토하고 AWS의 사전 승인 없이 테스트 가능한 서비스 목록을 확인합니다. EC2, RDS, CloudFront, API Gateway, Lambda, Elastic Beanstalk 등은 사전 승인 없이 테스트 가능합니다.</li>
        <li>외부 침투 테스트 업체 선정 시 AWS 환경 테스트 경험, AWS 자격증 보유 여부, 방법론(OWASP Testing Guide, PTES 등)을 평가 기준으로 활용합니다.</li>
        <li>침투 테스트 범위를 명확히 정의합니다. 인터넷 노출 서비스, 내부 네트워크, API, 모바일 앱, 클라우드 구성(IAM, S3 버킷 등)을 포함합니다.</li>
        <li>테스트 기간 중 프로덕션 영향 방지를 위해 테스터의 IP를 WAF에 화이트리스트로 추가하고, 테스트 시작/종료 시간을 사전에 협의합니다.</li>
        <li>침투 테스트 결과물에 발견된 취약점 목록, 재현 단계, 위험도 평가, 수정 권고사항이 포함되도록 요구합니다.</li>
        <li>발견된 취약점을 위험도(Critical, High, Medium, Low)에 따라 수정 기한을 설정합니다. Critical은 즉시, High는 30일, Medium은 90일 내 수정을 목표로 합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS WAF — 침투 테스트 중 테스터 IP 허용 및 공격 패턴 차단</li>
        <li>Amazon Inspector — 자동화된 취약점 스캔으로 침투 테스트 보완</li>
        <li>AWS Security Hub — 침투 테스트 결과와 자동화 결과 통합 관리</li>
        <li>AWS CloudTrail — 침투 테스트 활동 기록 및 탐지 역량 검증</li>
        <li>Amazon GuardDuty — 침투 테스트 시 위협 탐지 기능 검증</li>
      </ul>
      <PageNav />
    </article>
  );
}
