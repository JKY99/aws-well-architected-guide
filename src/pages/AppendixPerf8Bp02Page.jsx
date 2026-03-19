import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf8Bp02Page() {
  return (
    <article className="doc-content">
      <h1>PERF08-BP02 — 성능을 위한 일관성 트레이드오프</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>일관성 요구사항(강한 일관성 vs 최종 일관성)을 검토하여 필요한 곳에만 강한 일관성을 적용하고 나머지는 성능 향상을 위해 최종 일관성을 활용합니다.</p>
      <h2>원하는 결과</h2>
      <p>비즈니스 요구사항을 충족하면서 일관성 모델로 성능 향상을 달성합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>모든 곳에 강한 일관성 요구</li>
        <li>비즈니스 요구사항 없이 최종 일관성 사용</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>읽기 성능 향상</li>
        <li>레이턴시 감소</li>
        <li>확장성 향상</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>DynamoDB 강한 읽기/최종 읽기 구분 사용</li>
        <li>RDS 읽기 복제본으로 읽기 오프로드</li>
        <li>ElastiCache로 읽기 캐싱</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon DynamoDB</li>
        <li>Amazon RDS Read Replica</li>
        <li>Amazon ElastiCache</li>
        <li>Amazon Aurora</li>
      </ul>
      <PageNav />
    </article>
  );
}
