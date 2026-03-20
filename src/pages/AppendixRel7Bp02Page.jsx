import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel7Bp02Page() {
  return (
    <article className="doc-content">
      <h1>REL07-BP02 — 고정 리소스 및 가변 리소스 사용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 모든 리소스를 탄력적으로 운영하려다 기반 용량 부족이 발생하거나, 반대로 모두 고정으로 유지하여 비용이 과다하게 발생할 수 있습니다.</p>
      </div>
      <p>고정 리소스(베이스라인 용량)는 항상 필요한 최소한의 용량을 Reserved Instance나 Savings Plans로 보장하고, 가변 리소스는 온디맨드 또는 스팟 인스턴스로 피크 수요를 처리하는 이중 전략입니다.</p>
      <h2>원하는 결과</h2>
      <p>예측 가능한 기본 부하는 예약된 용량으로 비용 효율적으로 처리하고, 예측 불가능한 수요 변화는 탄력적 리소스로 대응합니다. 두 접근 방식의 조합으로 비용과 성능 모두를 최적화합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>모든 용량을 온디맨드 인스턴스로 운영하여 불필요한 비용 발생</li>
        <li>베이스라인 수요도 스팟 인스턴스에만 의존하여 인스턴스 중단 시 서비스 영향</li>
        <li>Reserved Instance 구매 후 워크로드 변경으로 활용률이 낮아지는 낭비 발생</li>
        <li>고정 리소스와 가변 리소스를 분리하지 않고 단일 Auto Scaling 그룹으로만 운영</li>
        <li>스팟 인스턴스의 중단 가능성을 고려하지 않은 스테이트풀 워크로드 배치</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>Reserved Instance/Savings Plans 활용으로 온디맨드 대비 최대 72% 비용 절감</li>
        <li>스팟 인스턴스 활용으로 추가 70% 비용 절감 가능</li>
        <li>베이스라인 용량 보장으로 스팟 중단 시에도 최소 서비스 수준 유지</li>
        <li>다양한 인스턴스 유형 활용으로 스팟 가용성 및 중단 위험 분산</li>
        <li>용량 계획을 통한 Reserved Instance 구매 최적화</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>과거 6-12개월 사용 데이터를 분석하여 최소 베이스라인 수요를 산출하고 해당 용량을 1년 또는 3년 Reserved Instance로 구매</li>
        <li>베이스라인 초과 수요는 Savings Plans 또는 온디맨드 인스턴스로 처리</li>
        <li>배치(batch) 처리, CI/CD, 개발 환경 등 중단 허용 워크로드는 스팟 인스턴스 활용</li>
        <li>EC2 Auto Scaling의 혼합 인스턴스(Mixed Instances) 정책으로 온디맨드와 스팟을 비율로 조합</li>
        <li>스팟 인스턴스 중단 알림(2분 전)을 처리하는 드레이닝 로직 구현</li>
        <li>AWS Cost Explorer를 활용하여 Reserved Instance 활용률 및 커버리지 정기 검토</li>
        <li>Compute Savings Plans를 통해 인스턴스 유형 변경 유연성을 유지하며 할인 혜택 확보</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon EC2 Reserved Instances — 예약 기반 비용 절감</li>
        <li>AWS Savings Plans — 유연한 컴퓨팅 사용 약정</li>
        <li>Amazon EC2 Spot Instances — 인터럽트 허용 워크로드 비용 최적화</li>
        <li>EC2 Auto Scaling Mixed Instances Policy — 온디맨드·스팟 혼합 운영</li>
        <li>AWS Cost Explorer — RI 활용률 및 커버리지 분석</li>
        <li>AWS Compute Optimizer — 최적 인스턴스 유형 및 크기 권고</li>
      </ul>
      <PageNav />
    </article>
  );
}
