import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps1Bp04Page() {
  return (
    <article className="doc-content">
      <h1>OPS01-BP04 — 규정 준수 요구 사항 평가</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 노출되는 위험 수준이 높습니다.</p>
      </div>

      <p>
        규제, 산업, 내부 규정 준수 요구 사항은 조직 우선순위를 정의하는 중요한 동인입니다.
        규정 준수 프레임워크가 특정 기술이나 지리적 위치의 사용을 제한할 수 있습니다.
        외부 규정 준수 프레임워크가 식별되지 않은 경우에도 적절한 주의를 기울여야 합니다.
        규정 준수를 검증하는 감사 또는 보고서를 생성합니다. 규정 준수 표준의 예로는 PCI DSS, FedRAMP, HIPAA가 있습니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        규제, 산업, 내부 규정 준수 요구 사항이 아키텍처 선택에 통합됩니다.
        규정 준수를 검증하고 감사 보고서를 생성할 수 있습니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>워크로드의 일부가 PCI-DSS 프레임워크에 해당되지만 워크로드가 신용카드 데이터를 암호화되지 않은 상태로 저장하는 경우</li>
        <li>소프트웨어 개발자와 아키텍트가 조직이 준수해야 하는 규정 준수 프레임워크를 알지 못하는 경우</li>
        <li>연간 SOC2 Type II 감사가 곧 있는데 제어가 제대로 구현되어 있는지 확인할 수 없는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>규정 준수 요구 사항을 평가하고 이해하면 비즈니스 가치를 제공하기 위한 노력의 우선순위를 정하는 데 도움이 됩니다.</li>
        <li>규정 준수 프레임워크에 부합하는 올바른 위치와 기술을 선택합니다.</li>
        <li>감사 가능성을 위해 워크로드를 설계하면 규정 준수 프레임워크 준수를 증명하는 데 도움이 됩니다.</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>보안 및 거버넌스 팀과 협력하여 해당 규정 준수 프레임워크를 결정하고 이를 워크로드에 통합합니다. AWS Compute Optimizer 및 AWS Security Hub CSPM을 사용하여 지속적인 규정 준수를 검증합니다.</li>
        <li>팀원들이 규정 준수 요구 사항에 따라 운영하고 워크로드를 발전시킬 수 있도록 교육합니다.</li>
        <li>감사 또는 규정 준수 보고서를 생성합니다. AWS Audit Manager를 사용하여 규정 준수를 검증하고 감사 보고서를 생성합니다. AWS Artifact로 AWS 보안 및 규정 준수 문서를 다운로드합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Artifact — AWS 규정 준수 문서 접근</li>
        <li>AWS Audit Manager — 규정 준수 검증 및 감사 보고서 생성</li>
        <li>AWS Compute Optimizer — 지속적인 규정 준수 검증</li>
        <li>AWS Security Hub CSPM — 보안 규정 준수 상태 관리</li>
        <li>AWS 규정 준수 센터, AWS 규정 준수 리소스, AWS 공동 책임 모델</li>
      </ul>

      <PageNav />
    </article>
  );
}
