import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf6Bp01Page() {
  return (
    <article className="doc-content">
      <h1>PERF06-BP01 — 신기술 파악</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>
      <p>AWS re:Invent, AWS 블로그, AWS 릴리스 노트를 통해 성능 향상에 도움이 될 새로운 서비스와 기능을 지속적으로 파악합니다.</p>
      <h2>원하는 결과</h2>
      <p>새로운 AWS 기술을 적시에 파악하고 워크로드 성능 개선에 활용합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>AWS 신기술 모니터링 없음</li>
        <li>오래된 서비스 및 버전 유지</li>
        <li>혁신 기회를 놓침</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>성능 향상 기회 포착</li>
        <li>경쟁력 유지</li>
        <li>비용 절감 기회 확보</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS 뉴스레터 구독</li>
        <li>re:Invent 세션 정기 검토</li>
        <li>AWS Well-Architected Review 정기 수행</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Well-Architected Tool</li>
        <li>AWS Trusted Advisor</li>
        <li>AWS Compute Optimizer</li>
      </ul>
      <PageNav />
    </article>
  );
}
