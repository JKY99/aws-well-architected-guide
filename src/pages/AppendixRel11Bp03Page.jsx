import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel11Bp03Page() {
  return (
    <article className="doc-content">
      <h1>REL11-BP03 — 모든 계층에서 자동 복구</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 구성 요소 장애 시 수동 복구가 필요하여 인적 오류와 복구 지연이 발생할 수 있습니다.</p>
      </div>
      <p>
        인프라, 컨테이너, 애플리케이션 프로세스 등 모든 계층에서 장애가 감지되면
        자동으로 복구 조치가 취해지도록 구성합니다. 자동화를 통해 MTTR을 단축하고
        인적 오류를 최소화합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        인프라, 컨테이너, 프로세스 계층의 장애가 자동으로 감지되고 복구됩니다.
        운영팀의 수동 개입 없이 워크로드가 정상 상태로 회복됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>EC2 인스턴스 장애 시 수동으로 인스턴스를 재시작하거나 교체하는 경우</li>
        <li>컨테이너 프로세스 충돌 시 자동 재시작 정책 없이 수동으로 재시작하는 경우</li>
        <li>자동 복구는 구성했지만 복구 성공 여부를 모니터링하지 않는 경우</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>24시간 365일 자동 복구로 가용성 향상</li>
        <li>인적 오류 감소 및 복구 절차의 일관성 확보</li>
        <li>MTTR 단축</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>EC2 Auto Scaling 그룹의 상태 확인 유형을 "ELB"로 설정하여 비정상 인스턴스를 자동 교체합니다.</li>
        <li>EC2 자동 복구(Auto Recovery)를 CloudWatch 경보와 함께 구성합니다.</li>
        <li>ECS 서비스의 재시작 정책을 구성하여 컨테이너 충돌 시 자동으로 재시작합니다.</li>
        <li>Kubernetes(EKS)의 liveness probe와 readiness probe를 구성하여 비정상 파드를 자동 재시작합니다.</li>
        <li>AWS Systems Manager Automation을 사용하여 복잡한 복구 절차를 자동화합니다.</li>
        <li>자동 복구 이벤트를 CloudWatch 로그와 SNS 알림으로 기록하여 운영팀이 인지할 수 있도록 합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon EC2 Auto Scaling — 비정상 인스턴스 자동 교체</li>
        <li>Amazon ECS — 컨테이너 자동 재시작</li>
        <li>Amazon EKS — Kubernetes 자동 복구</li>
        <li>AWS Systems Manager Automation — 복구 절차 자동화</li>
        <li>Amazon CloudWatch — 장애 감지 및 복구 트리거</li>
      </ul>
      <PageNav />
    </article>
  );
}
