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
      <p>수요의 급격한 변동을 완화하는 버퍼나 스로틀 메커니즘을 구현합니다. 이를 통해 인프라를 안정적으로 유지하면서 과도한 프로비저닝을 방지합니다.</p>
      <h2>원하는 결과</h2>
      <p>수요 급변에 대응하는 버퍼와 스로틀이 구현되어 리소스가 안정적으로 운영됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>수요 급증 시 대규모 과다 프로비저닝에 의존합니다.</li>
        <li>수요 급변에 대한 완충 메커니즘이 없습니다.</li>
        <li>일시적인 수요 급증을 위해 영구적인 용량을 유지합니다.</li>
        <li>큐나 비동기 처리를 활용하지 않습니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>수요 급변에 대한 탄력적 대응이 가능합니다.</li>
        <li>과도한 프로비저닝 없이 피크 수요를 처리합니다.</li>
        <li>시스템 안정성이 향상됩니다.</li>
        <li>비용이 절감됩니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>SQS 큐 도입: 요청을 큐에 넣어 백엔드 처리를 분리하고 수요를 완충합니다.</li>
        <li>API 스로틀링: API Gateway의 스로틀링으로 과도한 요청을 제어합니다.</li>
        <li>Lambda 동시성 제한: Lambda 함수의 동시 실행 수를 제한하여 비용을 통제합니다.</li>
        <li>회로 차단기 패턴: 서비스 간 과부하를 방지하는 회로 차단기 패턴을 구현합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon SQS</li>
        <li>Amazon API Gateway</li>
        <li>AWS Lambda</li>
        <li>Amazon SNS</li>
        <li>AWS Step Functions</li>
      </ul>
      <PageNav />
    </article>
  );
}
