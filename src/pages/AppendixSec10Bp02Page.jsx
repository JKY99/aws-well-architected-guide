import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec10Bp02Page() {
  return (
    <article className="doc-content">
      <h1>SEC10-BP02 — 사고 관리 계획 개발</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 사고 대응 역량에 중대한 위험이 발생합니다.</p>
      </div>
      <p>
        사고 대응 계획은 사고 대응 프로그램 및 전략의 기반이 되도록 설계됩니다. 보안 사고를 적시에 식별, 수정, 대응하기 위한 구조화된 프로세스입니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>보안 이벤트에 대한 적시 대응을 가능하게 하는 명확하고 문서화된 사고 대응 프로세스</li>
        <li>조직 전반에 걸쳐 정의된 역할 및 책임</li>
        <li>효과적인 커뮤니케이션 채널 및 에스컬레이션 절차</li>
        <li>사고 대응 절차의 정기적인 테스트 및 반복</li>
        <li>규정 준수 요구 사항 및 비즈니스 목표와의 정렬</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>공식적이고 문서화된 사고 대응 계획 없이 운영</li>
        <li>명확한 역할 및 책임(RACI) 정의 실패</li>
        <li>계획 수립 시 부서 간 참여 부족</li>
        <li>사고 대응 절차의 정기적인 테스트 또는 업데이트 미실시</li>
        <li>부적절한 커뮤니케이션 계획 또는 백업 커뮤니케이션 방법 없음</li>
        <li>규정 준수 및 규제 요구 사항과 계획 불일치</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>보안 이벤트에 대한 시기적절하고 효과적인 대응 가능</li>
        <li>사고 발생 시 명확한 워크플로 및 단계 제공</li>
        <li>확장 가능한 사고 대응 프로그램 지원</li>
        <li>대응 시간 단축 및 영향 최소화</li>
        <li>팀 간 조율되고 효율적인 대응 보장</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>HR, 경영진, 법무팀, 애플리케이션 소유자 및 개발자(SME)를 포함한 역할 및 책임을 정의합니다. RACI 차트를 작성하여 사고 중 책임자, 의사결정자, 자문 대상, 보고 대상을 명확히 합니다.</li>
        <li>사고 대응 계획에는 사고 대응팀 개요, 역할 및 책임, 커뮤니케이션 계획, 백업 커뮤니케이션 방법(예: 보안 통신을 위한 AWS Wickr), 사고 대응 단계(탐지, 분석, 근절, 봉쇄, 복구), 사고 심각도 및 우선순위 정의를 포함합니다.</li>
        <li>연방 워크로드는 FedRAMP, NIST SP 800-61 준수를, PII 처리 워크로드는 GDPR 등 현지 규정 준수를 보장합니다.</li>
        <li>모든 정의된 역할을 포함하여 정기적으로 사고 대응 계획을 테스트하고 연습합니다. 조직 구조 변경에 따라 역할, 책임 및 RACI를 주기적으로 업데이트합니다.</li>
        <li>AWS Systems Manager Incident Manager를 사용하여 사고 관리 솔루션을 설정하고 대응 계획을 정의합니다. AWS Managed Services(AMS)를 통해 24/7 1차 대응, 자동화된 플레이북 및 보안 탐지 제어를 활용합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Systems Manager Incident Manager — 사고 관리 및 대응 계획 정의</li>
        <li>AWS Security Incident Response — triage 기술 및 인적 지원을 갖춘 관리형 보안 사고 대응 서비스</li>
        <li>AWS Shield — 관리형 DDoS 보호(Standard 및 Advanced 등급)</li>
        <li>AWS Managed Services(AMS) — 24/7 1차 대응 및 자동화된 플레이북</li>
        <li>AWS Wickr — 보안 백업 커뮤니케이션 채널</li>
      </ul>
      <PageNav />
    </article>
  );
}
