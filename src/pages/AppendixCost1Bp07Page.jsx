import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost1Bp07Page() {
  return (
    <article className="doc-content">
      <h1>COST01-BP07 — 새로운 서비스 릴리스 최신 정보 유지</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>
      <p>AWS는 지속적으로 새로운 서비스와 기능을 출시합니다. 새 릴리스를 파악하면 비용을 줄이거나 더 효율적인 방식으로 워크로드를 실행할 기회를 발견할 수 있습니다.</p>
      <h2>원하는 결과</h2>
      <p>조직이 새로운 AWS 서비스 및 기능을 신속하게 인지하고, 비용 최적화 기회를 지속적으로 발굴합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>AWS 릴리스 노트나 블로그를 정기적으로 확인하지 않습니다.</li>
        <li>새 서비스 평가 프로세스가 없어 기존 방식을 그대로 유지합니다.</li>
        <li>새로운 서비스 도입 시 비용 영향을 평가하지 않습니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>새로운 서비스로 비용 절감 기회를 빠르게 포착할 수 있습니다.</li>
        <li>최신 기술을 활용하여 경쟁 우위를 유지합니다.</li>
        <li>불필요한 자체 구현 대신 관리형 서비스를 활용하여 운영 부담을 줄입니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS 블로그, What's New 피드, re:Invent 세션을 정기적으로 모니터링합니다.</li>
        <li>신규 서비스를 평가하는 내부 검토 프로세스를 수립합니다.</li>
        <li>AWS 계정 팀 및 파트너 네트워크를 활용하여 관련 업데이트를 받습니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS What's New</li>
        <li>AWS 블로그</li>
        <li>AWS re:Invent</li>
      </ul>
      <PageNav />
    </article>
  );
}
