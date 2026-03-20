import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps10Bp04Page() {
  return (
    <article className="doc-content">
      <h1>OPS10-BP04 — 에스컬레이션 경로 정의</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        인시던트를 적절한 인원에게 에스컬레이션하는 구조화되고 효율적인 프로세스를 수립하여
        대응 시간과 영향을 최소화합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        구조화되고 효율적인 프로세스가 인시던트를 적절한 인원에게 에스컬레이션합니다.
        대응 시간이 최소화되고 영향이 감소합니다.
        사전 승인된 조치와 명확한 소유권을 통해 다운타임을 줄입니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>복구 절차에 대한 명확성이 없어 중요한 인시던트 발생 시 즉흥적인 대응이 이루어지는 경우</li>
        <li>긴급한 조치가 필요할 때 권한과 소유권이 정의되지 않아 지연이 발생하는 경우</li>
        <li>이해관계자와 고객이 기대에 맞게 정보를 받지 못하는 경우</li>
        <li>중요한 결정이 지연되는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>사전 정의된 에스컬레이션 절차를 통한 간소화된 인시던트 대응</li>
        <li>사전 승인된 조치와 명확한 소유권으로 다운타임 감소</li>
        <li>인시던트 심각도에 따른 개선된 리소스 배분 및 지원 수준 조정</li>
        <li>이해관계자와 고객에 대한 개선된 커뮤니케이션</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>에스컬레이션 프롬프트 설정을 위해 CloudWatch 알람이 AWS Systems Manager Incident Manager에서 인시던트를 생성하도록 구성합니다.</li>
        <li>에스컬레이션 경로에 맞는 온콜 일정을 만듭니다.</li>
        <li>에스컬레이션 조건, 에스컬레이션 계획, 역할/책임을 정의합니다.</li>
        <li>의사결정자와 협력하여 완화 조치를 사전 승인합니다.</li>
        <li>각 에스컬레이션 단계에 대한 내부 소유자를 명확하게 식별합니다.</li>
        <li>인시던트 대응 드릴을 정기적으로 훈련하고 실시합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Systems Manager Incident Manager — 에스컬레이션 계획 및 온콜 일정의 핵심 도구</li>
        <li>Amazon CloudWatch — 에스컬레이션 프롬프트 설정</li>
        <li>Systems Manager Automation — Incident Manager와 통합된 런북</li>
        <li>AWS IAM Identity Center — 임시 권한 상승 접근 관리</li>
      </ul>

      <PageNav />
    </article>
  );
}
