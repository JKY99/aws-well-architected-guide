import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec10Bp01Page() {
  return (
    <article className="doc-content">
      <h1>SEC10-BP01 — 핵심 인력 및 외부 리소스 식별</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>
        보안 사고 발생 시 신속하게 연락하고 참여시킬 수 있는 내부 핵심 인력과 외부 지원 리소스를
        사전에 식별하고 문서화합니다. 사고 대응팀의 역할과 책임을 명확히 정의하고,
        비상 연락 정보를 최신 상태로 유지합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        보안 사고 발생 시 어떤 인력을 언제, 어떻게 참여시킬지 명확한 연락 체계가 있습니다.
        내부 보안팀, 법률팀, 경영진, 외부 보안 전문가, AWS Support 등 필요한 모든 리소스에
        즉시 접근할 수 있습니다. 비상 연락망이 정기적으로 업데이트됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>사고 발생 후 누구에게 연락할지 실시간으로 파악하려다 귀중한 대응 시간을 낭비함</li>
        <li>비상 연락 정보(전화번호, 이메일)를 업데이트하지 않아 퇴직자 정보가 포함됨</li>
        <li>역할과 책임을 정의하지 않아 사고 대응 중 혼란이 발생함</li>
        <li>AWS Support 플랜이 없거나 Enterprise Support가 아닌 기본 플랜만 유지하여 긴급 지원을 받지 못함</li>
        <li>법률팀, 홍보팀, 규제 기관 연락처 등 기술 외적인 이해관계자를 사고 대응 계획에 포함하지 않음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>사고 발생 즉시 올바른 인력에게 연락하여 대응 시간 단축</li>
        <li>명확한 역할 분담으로 사고 대응 중 혼란과 중복 작업 방지</li>
        <li>전문 외부 지원(포렌식 전문가, 법률 자문)을 신속하게 참여시켜 대응 품질 향상</li>
        <li>규제 기관 보고 의무 이행을 위한 연락 체계 사전 수립</li>
        <li>경영진과 이사회에 적시에 보고하는 에스컬레이션 경로 확립</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>RACI 매트릭스를 작성하여 보안 사고 대응 중 각 역할(보안 사고 관리자, 기술 분석가, 커뮤니케이션 담당, 법률 자문 등)의 책임을 명확히 정의합니다.</li>
        <li>비상 연락 목록에 이름, 직책, 전화번호(업무/개인), 이메일, 전문 분야를 포함하고 분기별로 검증합니다.</li>
        <li>AWS Enterprise Support에 가입하여 보안 사고 시 AWS 기술 계정 관리자(TAM)와 보안 전문가의 즉각적인 지원을 확보합니다.</li>
        <li>외부 사이버보안 침해 대응 전문 업체(CIRT: Cyber Incident Response Team)와 계약을 사전에 체결하여 신속한 지원을 보장합니다.</li>
        <li>법률팀, 개인정보보호 책임자, 규제 보고 담당자의 연락처를 포함하여 데이터 유출 시 법적 요건을 충족하는 대응이 가능하도록 합니다.</li>
        <li>비상 연락망과 에스컬레이션 절차를 암호화된 형태로 온라인과 오프라인 모두에 보관하여 AWS 접근이 불가능한 상황에서도 활용합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Support — 보안 사고 시 기술 지원 및 전문가 자문</li>
        <li>AWS Incident Detection and Response — 사전 참여형 사고 탐지 및 대응 서비스</li>
        <li>AWS Security Hub — 보안 결과 통합 및 에스컬레이션 자동화</li>
        <li>Amazon SNS — 사고 알림 및 에스컬레이션 자동화</li>
        <li>AWS Systems Manager OpsCenter — 운영 사고 추적 및 팀 협업</li>
      </ul>
      <PageNav />
    </article>
  );
}
