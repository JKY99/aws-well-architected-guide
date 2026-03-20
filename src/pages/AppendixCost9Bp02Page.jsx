import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost9Bp02Page() {
  return (
    <article className="doc-content">
      <h1>COST09-BP02 — 수요 관리를 위한 버퍼 또는 스로틀 구현</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>메시지 큐, API 스로틀링 등 버퍼 메커니즘을 구현하면 수요 급증에 대응하기 위한 과도한 리소스 프로비저닝을 피할 수 있습니다.</p>
      <h2>원하는 결과</h2>
      <p>수요 급증 시에도 리소스를 과도하게 프로비저닝하지 않고, 안정적이고 비용 효율적으로 워크로드를 처리합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>최대 부하 급증에 대비하여 상시 과도한 리소스를 프로비저닝합니다.</li>
        <li>수요 급증을 즉시 처리하기 위해 컴퓨팅 리소스를 무제한 확장합니다.</li>
        <li>클라이언트 요청에 제한 없이 응답하여 시스템이 과부하됩니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>수요 급증에 대응하는 프로비저닝 비용이 절감됩니다.</li>
        <li>백엔드 시스템이 처리 가능한 속도로 안정적으로 운영됩니다.</li>
        <li>시스템 안정성이 향상됩니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Amazon SQS를 사용하여 요청을 큐에 쌓고 백엔드가 처리 가능한 속도로 소비합니다.</li>
        <li>Amazon API Gateway의 스로틀링 기능을 사용하여 클라이언트 요청 속도를 제한합니다.</li>
        <li>AWS Lambda의 동시성 제한을 설정하여 최대 처리량을 제어합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon SQS</li>
        <li>Amazon API Gateway</li>
        <li>AWS Lambda 동시성</li>
        <li>Amazon Kinesis</li>
      </ul>
      <PageNav />
    </article>
  );
}
