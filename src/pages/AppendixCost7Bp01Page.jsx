import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost7Bp01Page() {
  return (
    <article className="doc-content">
      <h1>COST07-BP01 — 가격 모델 분석 수행</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>워크로드에 대한 가격 모델 분석을 수행합니다. 온디맨드, 예약 인스턴스(RI), Savings Plans, 스팟 인스턴스 등 다양한 가격 모델의 비용-이점을 분석합니다.</p>
      <h2>원하는 결과</h2>
      <p>워크로드 사용 패턴에 최적화된 가격 모델이 선택됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>모든 리소스에 온디맨드 가격을 사용합니다.</li>
        <li>예약 인스턴스나 Savings Plans를 활용하지 않습니다.</li>
        <li>가격 모델 분석을 수행하지 않고 기본 가격을 수용합니다.</li>
        <li>사용 패턴을 고려하지 않고 가격 모델을 선택합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>적절한 가격 모델 선택으로 비용이 크게 절감됩니다.</li>
        <li>예측 가능한 워크로드에 대해 최대 72% 비용 절감이 가능합니다.</li>
        <li>재무 계획이 더 예측 가능해집니다.</li>
        <li>클라우드 투자 수익이 극대화됩니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>사용 패턴 분석: CloudWatch 및 Cost Explorer를 통해 일관된 사용 패턴을 파악합니다.</li>
        <li>Savings Plans 분석: 컴퓨팅 또는 EC2 Savings Plans를 통해 예측 가능한 사용에 대한 할인을 받습니다.</li>
        <li>RI 분석: 특정 인스턴스 유형에 대한 Reserved Instances로 비용을 절감합니다.</li>
        <li>스팟 활용: 내결함성 워크로드에 스팟 인스턴스를 활용하여 최대 90% 비용을 절감합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Savings Plans</li>
        <li>Amazon EC2 Reserved Instances</li>
        <li>Amazon EC2 Spot Instances</li>
        <li>AWS Cost Explorer</li>
      </ul>
      <PageNav />
    </article>
  );
}
