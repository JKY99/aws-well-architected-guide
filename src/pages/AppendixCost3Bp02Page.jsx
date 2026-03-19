import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost3Bp02Page() {
  return (
    <article className="doc-content">
      <h1>COST03-BP02 — 올바른 리소스 유형, 크기, 수량 선택</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>워크로드의 실제 요구사항에 맞는 리소스 유형, 크기, 수량을 선택하여 과도한 프로비저닝으로 인한 낭비를 방지합니다.</p>
      <h2>원하는 결과</h2>
      <p>실제 사용량에 최적화된 리소스로 불필요한 비용 없이 성능 요구사항을 충족합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>안전 마진을 위해 과대 프로비저닝합니다.</li>
        <li>실제 사용량을 모니터링하지 않습니다.</li>
        <li>초기 크기 선택 후 재검토하지 않습니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>비용을 절감합니다.</li>
        <li>올바른 성능을 유지합니다.</li>
        <li>리소스를 효율적으로 활용합니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Compute Optimizer 권고를 검토합니다.</li>
        <li>CloudWatch 메트릭으로 사용률을 분석합니다.</li>
        <li>정기적인 크기 조정 검토를 수행합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Compute Optimizer</li>
        <li>Amazon CloudWatch</li>
        <li>Amazon EC2</li>
        <li>AWS Cost Explorer</li>
      </ul>
      <PageNav />
    </article>
  );
}
