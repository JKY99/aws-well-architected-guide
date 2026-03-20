import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function CostEffectiveResourcesPage() {
  return (
    <article className="doc-content">
      <h1>비용 최적화 — 비용 효율적인 리소스</h1>

      <p>
        워크로드에 적합한 서비스, 리소스, 구성을 사용하는 것이 비용 절감의 핵심입니다.
        AWS Solutions Architects, AWS 솔루션, 참조 아키텍처, APN 파트너를 활용하여
        최적의 아키텍처를 선택할 수 있습니다.
      </p>

      <h2>4가지 고려 영역</h2>

      <h3>1. 서비스 선택 시 비용 평가</h3>
      <p>서비스 선택 단계에서 비용 영향을 분석합니다.</p>

      <h3>2. 올바른 리소스 유형·크기·수량 선택</h3>
      <p>
        과도한 프로비저닝을 방지합니다.
        AWS Compute Optimizer를 사용하여 EC2 인스턴스, EBS 볼륨, Lambda 함수의
        최적 크기를 추천받을 수 있습니다.
      </p>

      <h3>3. 최적 요금 모델 선택</h3>
      <ul>
        <li><strong>온디맨드:</strong> 예측 불가능한 워크로드에 적합, 선불 없음</li>
        <li><strong>Reserved Instances (RI):</strong> 예측 가능한 워크로드, 1~3년 약정으로 최대 72% 절감</li>
        <li><strong>Savings Plans:</strong> 유연한 할인 모델, 컴퓨팅 사용량 약정으로 최대 66% 절감</li>
        <li><strong>Spot 인스턴스:</strong> 내결함성 워크로드에 적합, 최대 90% 절감</li>
      </ul>

      <h3>4. 데이터 전송 계획</h3>
      <p>데이터 전송 비용을 최소화하는 전략을 수립합니다.</p>

      <PageNav />
    </article>
  );
}
