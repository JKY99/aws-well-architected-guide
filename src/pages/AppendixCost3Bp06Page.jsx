import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost3Bp06Page() {
  return (
    <article className="doc-content">
      <h1>COST03-BP06 — 워크로드 지표 기반 비용 할당</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>
      <p>공유 리소스의 비용을 워크로드별 실제 사용 지표에 기반하여 할당하면, 보다 공정하고 정확한 비용 귀속이 가능합니다.</p>
      <h2>원하는 결과</h2>
      <p>각 워크로드 또는 팀이 실제 사용량에 비례한 정확한 비용을 인식하고, 비용 효율적인 의사결정을 내립니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>공유 리소스 비용을 균등하게 분할하여 실제 사용량과 무관하게 할당합니다.</li>
        <li>비용 할당을 위한 워크로드별 지표를 수집하지 않습니다.</li>
        <li>비용 할당 방법이 문서화되지 않아 투명성이 부족합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>공정하고 정확한 비용 청구로 팀 간 신뢰가 향상됩니다.</li>
        <li>각 팀이 자신의 실제 사용량에 책임을 집니다.</li>
        <li>과도한 리소스 사용에 대한 자연스러운 억제 효과가 발생합니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>API 요청 수, 처리된 데이터 양, 활성 사용자 수 등 워크로드별 지표를 정의합니다.</li>
        <li>Amazon CloudWatch 지표와 AWS Cost and Usage Report를 결합하여 비용을 지표에 매핑합니다.</li>
        <li>단위 비용(cost per unit)을 계산하여 비용 효율성 트렌드를 추적합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Cost and Usage Report</li>
        <li>Amazon CloudWatch</li>
        <li>AWS Cost Allocation Tags</li>
        <li>AWS Cost Explorer</li>
      </ul>
      <PageNav />
    </article>
  );
}
