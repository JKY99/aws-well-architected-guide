import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus5Bp01Page() {
  return (
    <article className="doc-content">
      <h1>SUS05-BP01 — 필요한 최소 하드웨어 사용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>
        워크로드 요구사항에 맞는 최소한의 하드웨어 리소스만 사용하여 에너지 소비를 최소화합니다.
        과도하게 프로비저닝된 리소스는 사용되지 않는 전력을 소비하고 탄소 발자국을 증가시킵니다.
        AWS Compute Optimizer와 같은 도구를 활용하여 실제 사용 패턴에 기반한 적절한 인스턴스 크기를 선택하십시오.
      </p>
      <h2>원하는 결과</h2>
      <p>
        워크로드의 실제 수요에 맞게 리소스가 적절히 크기 조정되어 불필요한 하드웨어 소비 없이
        성능 목표를 달성합니다. 유휴 리소스를 최소화하여 에너지 효율을 극대화합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>성능 문제 방지를 위해 실제 필요 이상으로 대형 인스턴스를 프로비저닝하는 것</li>
        <li>워크로드 변화에 맞게 리소스를 조정하지 않고 고정 용량을 유지하는 것</li>
        <li>CPU, 메모리 등 리소스 활용률을 모니터링하지 않는 것</li>
        <li>피크 트래픽에 맞춰 상시 대형 인스턴스를 운영하는 것</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>데이터센터 에너지 소비 감소로 탄소 발자국 축소</li>
        <li>불필요한 컴퓨팅 비용 절감</li>
        <li>하드웨어 제조 및 폐기로 인한 환경 영향 최소화</li>
        <li>리소스 활용 효율성 향상으로 운영 성숙도 개선</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Compute Optimizer를 활성화하여 인스턴스 크기 조정 권장사항을 정기적으로 검토</li>
        <li>Auto Scaling을 구성하여 실제 수요에 따라 리소스를 동적으로 조정</li>
        <li>Amazon CloudWatch 지표로 CPU, 메모리, 네트워크 활용률을 지속 모니터링</li>
        <li>EC2 인스턴스의 경우 최신 세대 인스턴스 유형으로 마이그레이션하여 효율성 향상</li>
        <li>개발/테스트 환경은 업무 시간 외 자동 중지 스케줄을 설정</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Compute Optimizer — 인스턴스 크기 최적화 권장사항 제공</li>
        <li>Amazon EC2 Auto Scaling — 수요에 따른 자동 용량 조정</li>
        <li>Amazon CloudWatch — 리소스 활용률 모니터링</li>
        <li>AWS Cost Explorer — 비용 및 리소스 사용 패턴 분석</li>
        <li>AWS Well-Architected Tool — 지속 가능성 모범 사례 평가</li>
      </ul>
      <PageNav />
    </article>
  );
}
