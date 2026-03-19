import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf8Bp01Page() {
  return (
    <article className="doc-content">
      <h1>PERF08-BP01 — 서비스 선택 이해</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>각 AWS 서비스의 성능 특성, 제약사항, 비용을 이해하고 워크로드에 가장 적합한 서비스를 선택합니다.</p>
      <h2>원하는 결과</h2>
      <p>워크로드 요구사항에 최적화된 AWS 서비스 선택으로 성능을 극대화합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>익숙한 서비스만 사용</li>
        <li>서비스 성능 특성 미검토</li>
        <li>새로운 서비스 평가 없음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>최적 성능 달성</li>
        <li>비용 효율성 향상</li>
        <li>적합한 기능 활용</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS 서비스 성능 문서 검토</li>
        <li>PoC 수행</li>
        <li>벤치마크 비교</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Well-Architected Tool</li>
        <li>Amazon CloudWatch</li>
        <li>AWS Compute Optimizer</li>
      </ul>
      <PageNav />
    </article>
  );
}
