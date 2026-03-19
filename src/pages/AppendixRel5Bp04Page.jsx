import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel5Bp04Page() {
  return (
    <article className="doc-content">
      <h1>REL05-BP04 — 자동 복구를 위한 모니터링 사용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>CloudWatch 경보와 자동화 기능을 연결하여 장애 감지 시 자동으로 복구 조치가 실행되도록 합니다.</p>
      <h2>원하는 결과</h2>
      <p>인적 개입 없이 장애가 자동으로 감지되고 복구되는 시스템을 구축합니다. 경보 발생 시 자동으로 복구 액션이 실행되어 서비스 중단 시간을 최소화하고 운영팀의 부담을 줄입니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>수동 복구에만 의존하여 야간 및 주말 장애 시 대응 지연</li>
        <li>경보 설정 없이 운영하여 장애를 사용자 신고로 인지</li>
        <li>자동화된 대응 없이 경보만 발송하는 수동 프로세스 운영</li>
        <li>복구 자동화 없이 Runbook에만 의존하는 운영 방식</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>평균 복구 시간(MTTR) 단축으로 서비스 가용성 향상</li>
        <li>24/7 자동 대응으로 운영팀 근무 시간 외 장애도 즉각 처리</li>
        <li>운영 부담 감소 — 반복적인 수동 작업 자동화</li>
        <li>일관된 복구 절차 보장으로 인적 오류 감소</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>EC2 Auto Recovery를 활성화하여 인스턴스 하드웨어 장애 시 자동 복구</li>
        <li>Auto Scaling 헬스 체크를 설정하여 비정상 인스턴스를 자동 교체</li>
        <li>CloudWatch 경보에 Lambda 함수를 연결하여 자동화된 복구 액션 실행</li>
        <li>Systems Manager Automation 문서를 사용하여 복구 Runbook 자동화</li>
        <li>복구 자동화 동작을 정기적으로 테스트하여 실제 장애 시 신뢰성 확인</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch — 메트릭 모니터링 및 경보 설정</li>
        <li>Amazon EC2 Auto Recovery — 인스턴스 자동 복구</li>
        <li>AWS Auto Scaling — 비정상 인스턴스 자동 교체</li>
        <li>AWS Lambda — 경보 트리거 기반 자동 복구 액션 실행</li>
        <li>AWS Systems Manager Automation — 복구 Runbook 자동화</li>
      </ul>
      <PageNav />
    </article>
  );
}
