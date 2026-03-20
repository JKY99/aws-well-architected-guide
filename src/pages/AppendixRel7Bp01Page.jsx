import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel7Bp01Page() {
  return (
    <article className="doc-content">
      <h1>REL07-BP01 — 수요 기반 자동 조정 사용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 수요 급증 시 리소스 부족으로 서비스가 중단되거나, 저수요 시 불필요한 비용이 발생합니다.</p>
      </div>
      <p>수요 기반 자동 조정은 실제 워크로드 수요에 따라 컴퓨팅 리소스를 자동으로 확장하거나 축소합니다. Auto Scaling, 대상 추적 정책, 예약 스케일링을 조합하여 최적의 비용-성능 균형을 달성합니다.</p>
      <h2>원하는 결과</h2>
      <p>워크로드가 예측 가능하거나 예측 불가능한 수요 변화에 자동으로 적응합니다. 피크 트래픽 시 성능 저하 없이 처리하고, 저수요 시에는 리소스를 자동으로 축소하여 비용을 최적화합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>피크 수요를 기준으로 고정 용량을 프로비저닝하여 대부분의 시간 동안 리소스 낭비</li>
        <li>수동 스케일링으로 대응하여 트래픽 급증 시 반응이 너무 늦음</li>
        <li>스케일 아웃만 구현하고 스케일 인 정책 미설정으로 비용 절감 기회 놓침</li>
        <li>단일 스케일링 지표(CPU)만 사용하여 다양한 병목 지점 감지 실패</li>
        <li>스케일링 정책 없이 고정 크기 Auto Scaling 그룹 운영</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>예측 불가능한 트래픽 급증에도 자동으로 대응하여 가용성 유지</li>
        <li>저수요 기간 자동 스케일 인으로 최대 70% 이상 비용 절감 가능</li>
        <li>운영팀의 수동 개입 없이 24/7 최적 용량 유지</li>
        <li>스케일링 이벤트 로그를 통한 수요 패턴 분석 및 용량 계획 개선</li>
        <li>스팟 인스턴스와 결합하여 추가적인 비용 최적화 달성</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Amazon EC2 Auto Scaling 대상 추적 정책으로 CPU, 요청 수, 사용자 정의 지표 기반 스케일링 설정</li>
        <li>예측 가능한 부하 패턴(예: 업무 시간)에는 예약 스케일링(Scheduled Scaling) 추가 구성</li>
        <li>스텝 스케일링 정책을 통해 수요 수준에 따라 단계적으로 확장하는 정밀한 스케일링 구현</li>
        <li>Application Load Balancer와 ECS 서비스 자동 스케일링을 연계하여 컨테이너 환경 대응</li>
        <li>스케일 아웃 쿨다운을 짧게(30-60초), 스케일 인 쿨다운을 길게(300초+) 설정하여 안정적인 스케일링</li>
        <li>워밍업 기간을 설정하여 새 인스턴스가 로드밸런서에 추가되기 전 충분히 초기화되도록 보장</li>
        <li>AWS Compute Optimizer를 활용하여 최적 인스턴스 유형 및 스케일링 설정 권고 확인</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon EC2 Auto Scaling — 인스턴스 기반 자동 스케일링</li>
        <li>AWS Application Auto Scaling — ECS, DynamoDB 등 다양한 서비스 스케일링</li>
        <li>Amazon ECS Service Auto Scaling — 컨테이너 기반 자동 스케일링</li>
        <li>AWS Compute Optimizer — 스케일링 설정 최적화 권고</li>
        <li>Amazon CloudWatch — 스케일링 트리거 지표 소스</li>
        <li>AWS Auto Scaling (통합 콘솔) — 다중 리소스 스케일링 통합 관리</li>
      </ul>
      <PageNav />
    </article>
  );
}
