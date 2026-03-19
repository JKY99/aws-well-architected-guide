import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost6Bp02Page() {
  return (
    <article className="doc-content">
      <h1>COST06-BP02 — 수요 관리를 위한 버퍼 또는 스로틀 구현</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>
        Amazon SQS, API Gateway 스로틀링을 사용하여 수요를 평준화하고 급격한 스파이크를 완화합니다.
        버퍼와 스로틀은 피크 수요에 맞춰 과도하게 프로비저닝하는 대신 수요 변동을 흡수하여
        더 일관된 리소스 활용률을 유지할 수 있도록 합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        수요 스파이크를 효과적으로 흡수하고 처리 용량을 일정하게 유지하여 과도한 리소스 프로비저닝
        없이도 서비스 품질을 보장합니다. 비용을 예측 가능하게 유지하면서 수요 변동을 관리합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>피크 수요에 맞춰 항상 최대 용량으로 프로비저닝</li>
        <li>수요 완충 없이 직접 백엔드 시스템에 요청을 전달</li>
        <li>스로틀링 한도를 너무 낮게 설정하여 정상적인 요청도 차단</li>
        <li>버퍼 크기를 너무 작게 설정하여 급격한 스파이크 처리 불가</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>피크 수요를 위한 과도한 프로비저닝 비용 절감</li>
        <li>백엔드 시스템의 안정적인 부하 처리</li>
        <li>서비스 중단 없이 트래픽 급증 처리 가능</li>
        <li>비용 예측 가능성 향상</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>Amazon SQS를 사용하여 요청을 대기열에 넣고 소비자가 처리 가능한 속도로 처리</li>
        <li>API Gateway에서 사용량 계획과 스로틀링 한도를 설정하여 과도한 요청 제한</li>
        <li>SNS와 SQS를 조합하여 팬아웃 패턴으로 수요를 여러 소비자에게 분산</li>
        <li>Lambda 동시성 한도를 설정하여 다운스트림 서비스 보호</li>
        <li>Kinesis Data Streams로 실시간 데이터 스트림을 버퍼링하고 처리</li>
        <li>CloudWatch로 대기열 깊이와 처리 지연을 모니터링하여 용량 조정</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon SQS</li>
        <li>Amazon API Gateway</li>
        <li>Amazon Kinesis Data Streams</li>
        <li>AWS Lambda</li>
        <li>Amazon SNS</li>
        <li>Amazon CloudWatch</li>
      </ul>

      <PageNav />
    </article>
  );
}
