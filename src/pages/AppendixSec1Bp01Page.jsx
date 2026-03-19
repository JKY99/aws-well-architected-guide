import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec1Bp01Page() {
  return (
    <article className="doc-content">
      <h1>SEC01-BP01 — 계정으로 워크로드 분리</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>별도의 AWS 계정으로 워크로드를 분리하여 보안 경계를 명확히 하고, 하나의 계정에서 발생한 보안 사고가 다른 워크로드에 영향을 미치지 않도록 합니다. 멀티계정 전략은 최소 권한 원칙을 계정 수준에서 구현하는 핵심 방법입니다.</p>
      <h2>원하는 결과</h2>
      <p>조직의 모든 워크로드는 환경(개발/스테이징/프로덕션), 팀, 또는 비즈니스 단위 기준으로 별도 AWS 계정에 배포됩니다. AWS Organizations를 통해 계정을 중앙에서 관리하고, SCP(서비스 제어 정책)로 각 계정의 권한 범위를 제한합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>단일 AWS 계정에 개발, 스테이징, 프로덕션 환경을 모두 배포하여 환경 간 격리 부재</li>
        <li>여러 팀이 동일한 AWS 계정을 공유하여 실수로 인한 리소스 변경 위험 증가</li>
        <li>프로덕션 워크로드와 보안 감사 도구를 동일 계정에 배치하여 침해 시 감사 로그 손상 가능성 존재</li>
        <li>AWS Organizations 없이 개별 계정을 독립적으로 관리하여 일관된 보안 정책 적용 불가</li>
        <li>계정 간 지나치게 넓은 신뢰 관계를 설정하여 계정 경계의 보안 효과 감소</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>보안 사고 발생 시 폭발 반경(blast radius)을 계정 단위로 제한하여 피해 범위 축소</li>
        <li>환경별·팀별 독립적인 IAM 권한 체계 구성으로 최소 권한 원칙 구현 용이</li>
        <li>SCP를 통한 계정 수준 가드레일로 정책 위반 사전 차단</li>
        <li>비용, 보안, 규정 준수 현황을 계정 단위로 명확하게 파악 및 보고 가능</li>
        <li>AWS Control Tower를 활용한 신규 계정 표준화 및 자동 프로비저닝</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Organizations를 활성화하고 OU(조직 단위) 구조를 환경 및 비즈니스 단위에 맞게 설계합니다.</li>
        <li>AWS Control Tower를 사용하여 Landing Zone을 구성하고 신규 계정 생성 워크플로를 자동화합니다.</li>
        <li>각 OU에 SCP를 적용하여 허용되지 않은 서비스 사용, 리전 이탈, 루트 사용자 행동 등을 차단합니다.</li>
        <li>보안 도구(GuardDuty, Security Hub, CloudTrail)는 전용 보안 계정에 집중하고 각 워크로드 계정에서 위임 관리자로 설정합니다.</li>
        <li>로그 아카이브 전용 계정을 별도로 운영하여 CloudTrail, Config 로그의 무결성을 보장합니다.</li>
        <li>계정 간 역할 위임(Cross-account Role)을 사용하여 필요한 경우에만 접근을 허용합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Organizations — 다중 계정 중앙 관리 및 SCP 적용</li>
        <li>AWS Control Tower — Landing Zone 설정 및 계정 프로비저닝 자동화</li>
        <li>AWS IAM — 계정 내 자격증명 및 권한 관리</li>
        <li>AWS CloudTrail — 계정별 API 활동 기록 및 감사</li>
        <li>AWS Config — 리소스 구성 변경 추적 및 규정 준수 평가</li>
        <li>AWS Security Hub — 멀티계정 보안 상태 통합 대시보드</li>
      </ul>
      <PageNav />
    </article>
  );
}
