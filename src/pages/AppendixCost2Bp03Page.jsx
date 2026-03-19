import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost2Bp03Page() {
  return (
    <article className="doc-content">
      <h1>COST02-BP03 — 비용 및 사용량 보고서 구성</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>AWS Cost and Usage Report(CUR)를 구성하여 상세한 비용 및 사용량 데이터를 수집하고, 이를 분석 도구와 연동하여 인사이트를 도출합니다.</p>
      <h2>원하는 결과</h2>
      <p>상세한 비용 데이터 수집으로 정확한 비용 분석과 최적화 기회를 발굴합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>기본 청구서만 확인합니다.</li>
        <li>세부 사용량 데이터를 수집하지 않습니다.</li>
        <li>비용 드릴다운이 불가능합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>상세한 비용 가시성이 확보됩니다.</li>
        <li>최적화 기회를 식별할 수 있습니다.</li>
        <li>지출이 예측 가능해집니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>CUR S3 버킷을 설정합니다.</li>
        <li>Athena로 CUR을 쿼리합니다.</li>
        <li>QuickSight로 비용 대시보드를 구축합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Cost and Usage Report</li>
        <li>Amazon S3</li>
        <li>Amazon Athena</li>
        <li>Amazon QuickSight</li>
      </ul>
      <PageNav />
    </article>
  );
}
