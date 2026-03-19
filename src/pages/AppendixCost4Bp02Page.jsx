import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost4Bp02Page() {
  return (
    <article className="doc-content">
      <h1>COST04-BP02 — 예측 가능한 워크로드에 약정 활용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>지속적으로 실행되는 안정적인 워크로드에는 Reserved Instance 또는 Savings Plans를 활용하여 온디맨드 대비 최대 72% 비용을 절감합니다.</p>
      <h2>원하는 결과</h2>
      <p>예측 가능한 워크로드에 약정 할인을 최대한 활용하여 비용 절감을 극대화합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>안정적 워크로드에 온디맨드만 사용합니다.</li>
        <li>약정 활용률을 모니터링하지 않습니다.</li>
        <li>과도한 약정으로 활용률이 저하됩니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>최대 72% 비용을 절감합니다.</li>
        <li>예측 가능한 청구를 실현합니다.</li>
        <li>장기 비용을 최적화합니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Cost Explorer로 약정 권고를 분석합니다.</li>
        <li>1년/3년 약정 ROI를 계산합니다.</li>
        <li>Savings Plans vs RI 비교를 검토합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Savings Plans</li>
        <li>Amazon EC2 Reserved Instances</li>
        <li>AWS Cost Explorer (약정 권고)</li>
      </ul>
      <PageNav />
    </article>
  );
}
