import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost6Bp01Page() {
  return (
    <article className="doc-content">
      <h1>COST06-BP01 — 워크로드 수요 분석 수행</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>워크로드의 수요 패턴을 분석하여 예측 가능한 패턴과 변동성을 파악하고 이에 맞는 리소스 공급 전략을 수립합니다.</p>
      <h2>원하는 결과</h2>
      <p>수요 패턴 이해를 기반으로 최적화된 리소스 공급 전략을 수립하여 비용과 성능을 동시에 최적화합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>수요 분석 없이 고정 용량으로 운영하여 과다 프로비저닝</li>
        <li>피크 수요에 맞춰 항상 프로비저닝하여 비피크 시간대 자원 낭비</li>
        <li>역사적 사용 패턴 데이터를 용량 계획에 활용하지 않음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>정확한 수요 예측을 통한 최적 용량 계획 수립</li>
        <li>과다 프로비저닝 감소로 낭비 비용 절감</li>
        <li>예측 가능한 수요에 대한 선제적 성능 보장</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Amazon CloudWatch 메트릭으로 CPU·메모리·네트워크 사용량의 수요 패턴 분석</li>
        <li>시간대별·요일별·월별 패턴을 파악하여 예측 가능한 주기성 식별</li>
        <li>계절성 요인(프로모션, 연말 등)을 고려한 용량 계획에 반영</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch</li>
        <li>AWS Cost Explorer</li>
        <li>Amazon EC2 Auto Scaling</li>
      </ul>
      <PageNav />
    </article>
  );
}
