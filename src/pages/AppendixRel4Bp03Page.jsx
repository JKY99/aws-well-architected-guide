import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel4Bp03Page() {
  return (
    <article className="doc-content">
      <h1>REL04-BP03 — 일정한 작업 수행</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 수립하지 않으면 낮은 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        부하 조건이 크게 변할 때 발생하는 장애를 방지하기 위해 시스템이 일정한 작업을 수행하도록 합니다.
        시스템이 안정적으로 유지되고 부하 조건이 크게 변할 때 장애가 발생하지 않도록
        큰 폭의 급격한 부하 변화가 없는 일정한 작업을 수행합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        시스템이 안정적이며 부하 조건이 크게 변할 때도 장애가 발생하지 않습니다.
        일정한 작업 패턴을 통해 예측 가능한 성능을 유지하고 연쇄 장애를 방지합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>실패한 서버 수에 따라 가변적인 페이로드 크기를 전송하는 헬스 체크 시스템</li>
        <li>성공/실패율에 따라 작업량이 크게 달라지는 시스템</li>
        <li>부하 변화를 시스템 구성 요소 전반에 증폭시키는 긴밀하게 결합된 의존성</li>
        <li>가벼운 부하 시 최소한의 작업만 수행하다가 대규모 장애 상황에서 압도적인 작업을 수행하는 시스템</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>시스템 안정성 향상: 대규모 장애 이벤트 시 시스템 과부하 방지</li>
        <li>예측 가능한 성능: 일정한 작업 패턴으로 더 나은 용량 계획 가능</li>
        <li>연쇄 장애 감소: 일정한 부하로 다운스트림 시스템 압도 방지</li>
        <li>복원력 향상: 큰 폭의 급격한 부하 변화가 더 이상 시스템 안정성에 위협이 되지 않음</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>부하 조건이 크게 변할 때 장애가 발생하지 않도록 일정한 작업 수행</li>
        <li>느슨하게 결합된 의존성 구현(큐잉 시스템, 스트리밍 시스템, 워크플로우, 로드 밸런서)</li>
        <li>느슨한 결합을 사용하여 의존하는 구성 요소로부터 구성 요소 동작 격리</li>
        <li>성공 또는 실패 수에 관계없이 페이로드 크기가 일정하게 유지되도록 워크로드 설계</li>
        <li>일관된 페이로드 크기로 현재 상태의 전체 스냅샷 전송</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon Route 53 (헬스 체크 예시)</li>
        <li>Amazon EventBridge</li>
        <li>Amazon SQS/SNS (큐잉 시스템)</li>
        <li>Amazon Kinesis (스트리밍 시스템)</li>
        <li>AWS Step Functions (워크플로우)</li>
        <li>Elastic Load Balancing</li>
      </ul>
      <PageNav />
    </article>
  );
}
