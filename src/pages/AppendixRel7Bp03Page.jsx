import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel7Bp03Page() {
  return (
    <article className="doc-content">
      <h1>REL07-BP03 — 워크로드에 더 많은 리소스가 필요함을 감지 시 리소스 확보</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 수립하지 않으면 중간 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        컴퓨팅 및 기타 리소스의 자동 확장을 구성하여 수요를 충족합니다.
        추가 리소스가 온라인으로 전환되는 동안 트래픽 급증을 허용할 충분한 여유를
        스케일링 정책에 제공합니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>컴퓨팅 및 기타 리소스의 자동 확장을 구성하여 수요 충족</li>
        <li>추가 리소스가 온라인으로 전환되는 동안 트래픽 급증을 허용할 충분한 여유 제공</li>
        <li>고가용성 및 서비스 수준 목표(SLO) 준수 보장</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>고정된 수의 확장 가능한 리소스 프로비저닝</li>
        <li>실제 수요와 상관관계가 없는 스케일링 메트릭 선택</li>
        <li>수요 급증을 수용하기에 충분한 여유를 스케일링 계획에 제공하지 않음</li>
        <li>스케일링 정책이 너무 늦게 용량을 추가하여 용량 고갈 및 서비스 저하 발생</li>
        <li>최소 및 최대 리소스 수를 잘못 구성하여 스케일링 실패</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>현재 수요를 충족하고 고가용성을 제공하기에 충분한 리소스 보장</li>
        <li>최대 용량을 결정하고 정적으로 할당할 필요 없음</li>
        <li>수요가 증가함에 따라 추가 리소스를 할당하고 수요가 감소하면 비활성화</li>
        <li>동적 리소스 관리를 통한 비용 절감</li>
        <li>워크로드 신뢰성 크게 향상</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>수평 확장성 결정: EC2 인스턴스, ECS 태스크, EKS 파드, DB 읽기 복제본, DynamoDB 테이블, ElastiCache 클러스터 등 자동 스케일링에 적합한 구성 요소 파악</li>
        <li>메트릭 기반 스케일링: CPU 사용률, 작업 큐 깊이(SQS), 활성 사용자 수, 네트워크 처리량 등 수요와 상관관계가 있는 스케일링 메트릭 선택. 메모리 사용률은 수요와 양방향으로 상관관계가 없으므로 피함. 메트릭 전파 및 리소스 프로비저닝 지연에 대한 여유를 위해 사용률 목표를 50-70%로 설정</li>
        <li>예약 스케일링: 예측 가능한 트래픽 패턴(업무 시간, 영업 이벤트)에 대해 일정 기반 스케일링 구성</li>
        <li>예측 스케일링: 기계 학습을 사용하여 역사적 사용률 메트릭을 분석하고 미래 값을 예측하여 자동으로 리소스 확장</li>
        <li>적절한 Auto Scaling 서비스 선택: EC2 인스턴스는 Amazon EC2 Auto Scaling, 기타 AWS 서비스는 Application Auto Scaling, Kubernetes 파드(EKS)는 HPA 또는 KEDA, ECS 컨테이너 태스크는 Application Auto Scaling</li>
        <li>부하 테스트 실시: 비프로덕션 환경에서 수요 메트릭과 상관관계가 있는 메트릭을 식별하고 적절한 스케일링 메트릭 및 목표값 결정</li>
        <li>Auto Scaler 구성 및 검증: 스케일링 메트릭 및 목표값 설정, 최대 및 최소 스케일링 한계 확인</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon EC2 Auto Scaling</li>
        <li>Application Auto Scaling</li>
        <li>Amazon DynamoDB Auto Scaling</li>
        <li>Amazon ECS Auto Scaling (용량 공급자)</li>
        <li>Amazon EKS (Karpenter, Cluster Autoscaler, KEDA)</li>
        <li>Amazon CloudWatch (스케일링 메트릭)</li>
      </ul>
      <PageNav />
    </article>
  );
}
