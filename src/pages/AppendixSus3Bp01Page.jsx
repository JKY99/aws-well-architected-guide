import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus3Bp01Page() {
  return (
    <article className="doc-content">
      <h1>SUS03-BP01 — 비동기 및 예약 작업을 위한 소프트웨어 및 아키텍처 최적화</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        큐 기반과 같은 효율적인 소프트웨어 및 아키텍처 패턴을 사용하여 배포된 리소스의
        일관되게 높은 활용률을 유지합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        효율적인 소프트웨어 및 아키텍처 패턴으로 미사용 리소스를 최소화하고 전반적인 효율성을 개선합니다.
        메시징 컴포넌트를 통해 비동기 메시지의 송신자와 수신자를 분리하여 처리를 독립적으로 확장합니다.
        시간이 지남에 따른 수요 변화로 인한 유휴 리소스를 최소화합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>예상치 못한 수요 급증을 처리하기 위해 리소스를 과잉 프로비저닝하는 경우</li>
        <li>메시징 컴포넌트로 비동기 메시지의 송신자와 수신자를 분리하지 않는 아키텍처</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>수요 변화로 인한 유휴 리소스 최소화</li>
        <li>처리와 메시지 수신의 독립적 확장 가능</li>
        <li>효율적인 패턴을 통한 전체 인프라 요구사항 감소</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>워크로드 요구사항에 대응하는 방법을 분석합니다.</li>
        <li>비동기 요청에 큐 기반 아키텍처(AWS Batch 작업 큐, Amazon SQS + EC2 Spot 인스턴스)를 사용합니다.</li>
        <li>배치 처리 가능한 작업에 예약 구현(Amazon EventBridge Scheduler, AWS Glue 시간 기반 스케줄, Amazon ECS 예약 태스크, Instance Scheduler)을 활용합니다.</li>
        <li>폴링·웹훅을 이벤트 기반 아키텍처로 대체합니다.</li>
        <li>서버리스를 활용하여 과잉 프로비저닝된 인프라를 제거합니다.</li>
        <li>AWS Cost Explorer 또는 AWS Compute Optimizer를 사용하여 컴포넌트를 적정 규모로 조정합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon SQS — 비동기 처리를 위한 메시지 큐</li>
        <li>Amazon MQ — 관리형 메시지 브로커</li>
        <li>AWS Batch — 배치 컴퓨팅 작업 관리</li>
        <li>AWS Lambda — 서버리스 이벤트 기반 컴퓨팅</li>
        <li>AWS Step Functions — 서버리스 워크플로우 오케스트레이션</li>
        <li>Amazon EventBridge — 이벤트 기반 아키텍처 및 스케줄링</li>
        <li>AWS Glue — ETL 및 시간 기반 스케줄</li>
      </ul>

      <PageNav />
    </article>
  );
}
