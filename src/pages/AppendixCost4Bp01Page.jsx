import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost4Bp01Page() {
  return (
    <article className="doc-content">
      <h1>COST04-BP01 — 수명 동안 리소스 추적</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>프로젝트, 직원, 기술 리소스를 시간에 따라 추적합니다. 모든 리소스가 활성 소유자 및 비즈니스 목적과 연결되어 있는지 확인합니다.</p>
      <h2>원하는 결과</h2>
      <p>모든 클라우드 리소스가 수명 주기 전반에 걸쳐 추적되고 소유자와 연결됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>리소스 소유권이나 목적을 추적하지 않습니다.</li>
        <li>사용되지 않는 리소스가 파악되지 않고 비용을 발생시킵니다.</li>
        <li>직원 이탈 후 고아 리소스가 방치됩니다.</li>
        <li>리소스가 언제부터 사용되었는지 파악할 수 없습니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>사용하지 않는 리소스를 신속하게 식별하여 비용을 절감합니다.</li>
        <li>리소스 소유권이 명확해집니다.</li>
        <li>보안 위험이 감소합니다.</li>
        <li>컴플라이언스 감사가 용이해집니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>태그 기반 추적: 소유자, 프로젝트, 환경, 만료일 태그를 모든 리소스에 적용합니다.</li>
        <li>AWS Config 활용: 리소스 구성 변경 이력을 자동으로 추적합니다.</li>
        <li>자산 인벤토리: AWS Resource Groups와 Tag Editor로 전체 리소스 인벤토리를 유지합니다.</li>
        <li>자동 리마인더: 리소스 만료일이 가까워지면 소유자에게 자동으로 알림을 보냅니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Config</li>
        <li>AWS Resource Groups</li>
        <li>Tag Editor</li>
        <li>Amazon EventBridge</li>
        <li>AWS Lambda</li>
      </ul>
      <PageNav />
    </article>
  );
}
