import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps3Bp02Page() {
  return (
    <article className="doc-content">
      <h1>OPS03-BP02 — 팀 구성원 권한 부여</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>

      <p>
        팀 구성원이 결과가 위험에 처했을 때 행동을 취할 수 있도록 권한을 부여합니다.
        모든 의사결정이 상위 관리자를 통해야 한다면 신속한 대응이 불가능합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        팀 구성원이 사전 정의된 범위 내에서 자율적으로 결정을 내리고 행동할 수 있습니다.
        에스컬레이션이 필요한 상황과 독립적으로 처리할 수 있는 상황이 명확히 정의되어 있습니다.
        실수에 대한 심리적 안전감이 있어 팀이 능동적으로 행동합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>모든 결정이 관리자 승인이 필요하여 장애 대응이 지연되는 경우</li>
        <li>팀원이 실수를 두려워하여 필요한 조치를 취하지 않는 경우</li>
        <li>권한 위임 없이 책임만 부여하는 경우</li>
        <li>자율적 행동에 대한 사후 처벌 문화가 있는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>장애 및 사건 대응 속도 향상</li>
        <li>팀 구성원의 주인의식과 참여도 향상</li>
        <li>관리자 병목 현상 제거로 조직 민첩성 향상</li>
        <li>혁신과 지속적 개선 문화 형성</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>팀 구성원이 승인 없이 취할 수 있는 행동 범위를 명확히 정의합니다.</li>
        <li>비상 시 즉시 행동할 수 있는 권한을 가진 온콜 담당자 제도를 운영합니다.</li>
        <li>사후 검토(Post-Incident Review)를 비난 없이 학습 목적으로 진행합니다.</li>
        <li>팀 구성원의 결정을 지원하고 실수를 학습 기회로 삼는 문화를 형성합니다.</li>
        <li>AWS IAM으로 팀 구성원이 필요한 리소스에 접근할 수 있는 권한을 부여합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS IAM — 역할별 적절한 접근 권한 부여</li>
        <li>AWS Systems Manager Session Manager — 서버 접근 권한 안전하게 위임</li>
        <li>AWS CloudTrail — 팀 구성원 활동 감사 및 투명성 보장</li>
      </ul>

      <PageNav />
    </article>
  );
}
