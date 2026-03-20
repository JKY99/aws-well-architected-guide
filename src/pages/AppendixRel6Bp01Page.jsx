import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel6Bp01Page() {
  return (
    <article className="doc-content">
      <h1>REL06-BP01 — 워크로드 모니터링</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 장애나 성능 저하가 사용자 보고 이전까지 감지되지 않아 서비스 중단 시간이 길어집니다.</p>
      </div>
      <p>워크로드 모니터링은 시스템의 상태와 동작을 실시간으로 파악하기 위한 지표 수집, 시각화, 알람 설정을 포함합니다. Amazon CloudWatch를 중심으로 애플리케이션·인프라·비즈니스 지표를 통합 관리합니다.</p>
      <h2>원하는 결과</h2>
      <p>워크로드의 모든 계층(인프라, 애플리케이션, 비즈니스)에서 핵심 지표가 수집되고 대시보드를 통해 시각화됩니다. 이상 징후가 실시간으로 감지되어 운영팀이 사용자 영향이 발생하기 전에 선제적으로 대응할 수 있습니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>CPU·메모리 같은 인프라 지표만 모니터링하고 애플리케이션 수준 지표 미수집</li>
        <li>로그는 수집하지만 지표로 변환하거나 알람을 설정하지 않아 사후 분석에만 활용</li>
        <li>모니터링 설정이 코드로 관리되지 않아 환경마다 일관성 없는 관측 체계</li>
        <li>대시보드를 만들었지만 주기적으로 확인하지 않아 장애 감지 지연</li>
        <li>비즈니스 KPI(주문 수, 결제 성공률 등)와 기술 지표가 연결되지 않음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>장애를 조기에 감지하여 MTTR(평균 복구 시간) 단축</li>
        <li>용량 계획 및 성능 최적화를 위한 데이터 기반 의사결정 가능</li>
        <li>이상 감지를 통해 알려지지 않은 장애 유형도 자동으로 탐지</li>
        <li>운영 투명성 향상으로 팀 간 신뢰도 증가</li>
        <li>규정 준수 감사를 위한 운영 기록 확보</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Amazon CloudWatch Agent를 EC2 및 컨테이너에 배포하여 시스템 수준 지표 수집</li>
        <li>애플리케이션에서 사용자 정의 지표를 CloudWatch로 전송하여 비즈니스 KPI 추적</li>
        <li>CloudWatch Logs Insights를 활용하여 로그에서 지표를 추출하고 알람 설정</li>
        <li>Container Insights로 ECS/EKS 컨테이너 환경의 성능 지표 수집</li>
        <li>CloudWatch Synthetics를 사용하여 사용자 시나리오를 주기적으로 실행하고 가용성 검증</li>
        <li>X-Ray를 통한 분산 추적으로 서비스 간 지연 및 오류 경로 파악</li>
        <li>CloudWatch Dashboard를 IaC로 관리하여 환경 간 일관된 가시성 확보</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch — 지표, 로그, 알람, 대시보드 통합 플랫폼</li>
        <li>AWS X-Ray — 분산 추적 및 서비스 맵</li>
        <li>Amazon CloudWatch Synthetics — 카나리 기반 가용성 모니터링</li>
        <li>AWS CloudWatch Container Insights — 컨테이너 환경 모니터링</li>
        <li>Amazon Managed Grafana — 멀티 소스 통합 대시보드</li>
        <li>AWS Distro for OpenTelemetry — 표준 기반 관측 데이터 수집</li>
      </ul>
      <PageNav />
    </article>
  );
}
