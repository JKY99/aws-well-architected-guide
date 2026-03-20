import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel4Bp01Page() {
  return (
    <article className="doc-content">
      <h1>REL04-BP01 — 의존하는 분산 시스템의 종류 파악</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 수립하지 않으면 높은 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        동기, 비동기 및 배치 의존성과 효과적으로 상호작용하는 워크로드를 설계합니다.
        각 통신 방식(동기, 비동기, 배치)과 관련된 다양한 트레이드오프를 파악하고
        의존성의 중단에 대한 내성을 갖도록 워크로드를 설계합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        동기, 비동기 및 배치 의존성과 효과적으로 상호작용하는 워크로드를 설계합니다.
        각 통신 스타일의 트레이드오프를 파악하고 의존성의 중단에 대한 내성을 갖춥니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>워크로드가 의존성으로부터의 응답을 무기한 대기하여 클라이언트 타임아웃 및 요청 수신 여부 불확실</li>
        <li>서로를 동기적으로 호출하는 의존 시스템 체인 사용(전체 체인이 성공하려면 각 시스템이 가용해야 함)</li>
        <li>비동기 통신에서 정확히 한 번 메시지 전달 보장에 의존(중복 메시지 수신 가능)</li>
        <li>적절한 배치 스케줄링 도구를 사용하지 않아 동일한 배치 작업의 동시 실행 허용</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>각 통신 스타일(동기, 비동기, 배치)과 관련된 다양한 트레이드오프 파악</li>
        <li>의존성 중단에 대한 내성을 갖는 워크로드 설계 가능</li>
        <li>전체 시스템 신뢰성 및 복원력 향상</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>의존성의 성능 및 신뢰성 SLO가 워크로드 요구 사항을 충족하는지 확인</li>
        <li>AWS 관찰 가능성 서비스를 사용하여 응답 시간 및 오류율 모니터링</li>
        <li>동기 의존성: 단일 함수에 여러 동기 의존성 사용 지양; 오류 처리 및 재시도 전략 결정; 빠른 실패(fail fast) 구현; 의존성 호출 시 타임아웃 설정</li>
        <li>비동기 의존성: 사용 사례에 따라 메시지 또는 이벤트 스트리밍 선택; 멱등성을 활용하여 중복 메시지 처리; 재시도 횟수 제한</li>
        <li>배치 의존성: 반복 패턴으로 배치 작업 실행 시간 창 정의; AWS Step Functions를 사용하여 여러 배치 작업 오케스트레이션; 배치 작업 이상 모니터링</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch</li>
        <li>AWS X-Ray</li>
        <li>AWS Step Functions</li>
        <li>AWS Batch</li>
        <li>AWS Lambda</li>
        <li>Amazon SQS</li>
        <li>Amazon Kinesis Data Streams</li>
      </ul>
      <PageNav />
    </article>
  );
}
